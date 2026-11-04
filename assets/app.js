/* Render the page from DATA and FIGS. Two languages, two reading modes, no external requests. */
(function () {
  'use strict';

  var KEY_LANG = 'releaf-prize-lang';
  var KEY_MODE = 'releaf-prize-mode';
  var lang = 'en';
  var mode = 'full';
  var first = true;

  try {
    lang = localStorage.getItem(KEY_LANG) === 'zh' ? 'zh' : 'en';
    mode = localStorage.getItem(KEY_MODE) === 'kw' ? 'kw' : 'full';
  } catch (e) { /* private browsing */ }

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function t(v) { return v && typeof v === 'object' ? (v[lang] || v.en || '') : (v || ''); }

  /* house rule: species names are italic wherever they appear in prose */
  var SPECIES = /\b(Bacillus subtilis|B\. subtilis|Arabidopsis thaliana|A\. thaliana|Pseudomonas putida|P\. putida|Escherichia coli|E\. coli)\b/g;
  function fmt(v) { return esc(t(v)).replace(SPECIES, '<em>$1</em>'); }
  function wikiURL(slug) {
    var s = String(slug || '').split('#')[0].trim();
    if (s === 'trainer') return 'https://timmy97-tw.github.io/releaf-judging-qa/';
    if (s === 'registry') return 'https://registry.igem.org/collections';
    return DATA.meta.wiki + (s === 'home' ? '' : s + '/');
  }
  function pageName(slug) {
    var s = String(slug || '').split('#')[0].trim();
    var p = DATA.pages[s];
    return p ? t(p) : s;
  }

  var ARROW = '<svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">'
    + '<path d="M1 5h13M10.5 1.5 14 5l-3.5 3.5" stroke="currentColor" stroke-width="1.3"'
    + ' stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var UI = {
    kwLabel: { en: 'Keywords', zh: '關鍵字' },
    ansLabel: { en: 'The answer', zh: '完整回答' },
    evLabel: { en: 'Evidence', zh: '證據' },
    figLabel: { en: 'Figures', zh: '關鍵圖表' },
    full: { en: 'Full', zh: '完整' },
    kw: { en: 'Keywords', zh: '只看關鍵字' },
    awards: { en: 'nominated awards', zh: '提名獎項' },
    questions: { en: 'judging questions', zh: '評分問題' },
    figures: { en: 'figures off the wiki', zh: '來自 wiki 的圖表' },
    source: {
      en: 'Every number and figure on this page comes from the frozen 2026 wiki at ',
      zh: '這一頁上的每個數字與圖表都來自 2026 凍結後的 wiki：'
    },
    nothing: {
      en: 'Nothing here is invented. Where the wiki is silent or disagrees with itself, the answer says so.',
      zh: '這裡沒有任何編造的內容。wiki 沒寫或自相矛盾的地方，回答就直說。'
    }
  };

  function flowHTML(flow) {
    var out = '';
    for (var i = 0; i < flow.length; i++) {
      if (i) out += '<div class="arrow">' + ARROW + '</div>';
      var n = flow[i];
      out += '<div class="node"><span class="pill">' + esc(t(n.t)) + '</span>';
      if (n.leaf && n.leaf.length) {
        out += '<div class="leaves">';
        for (var j = 0; j < n.leaf.length; j++) {
          out += '<span class="leaf">' + esc(t(n.leaf[j])) + '</span>';
        }
        out += '</div>';
      }
      out += '</div>';
    }
    return '<div class="flow">' + out + '</div>';
  }

  function figsHTML(ids) {
    var out = '';
    for (var i = 0; i < ids.length; i++) {
      var f = FIGS[ids[i]];
      if (!f) continue;
      out += '<button class="fig" type="button" data-fig="' + esc(f.id) + '">'
        + '<span class="box"><img src="img/' + esc(f.img) + '" alt="' + esc(t(f.label)) + '" loading="lazy"></span>'
        + '<b>' + esc(t(f.label)) + '</b></button>';
    }
    return out ? '<div class="figs">' + out + '</div>' : '';
  }

  function evHTML(ev) {
    var out = '';
    for (var i = 0; i < ev.length; i++) {
      out += '<li><i>' + (i + 1) + '</i><span>' + fmt(ev[i].t)
        + '<a href="' + esc(wikiURL(ev[i].src)) + '" target="_blank" rel="noopener">'
        + esc(pageName(ev[i].src)) + '</a></span></li>';
    }
    return '<ul class="ev">' + out + '</ul>';
  }

  function render() {
    document.body.setAttribute('data-lang', lang);
    document.body.setAttribute('data-mode', mode);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

    var nAwards = DATA.awards.length - 1; /* the Project rubric is not an award */
    var nQ = 0, figSet = {};
    DATA.awards.forEach(function (a) {
      nQ += a.questions.length;
      a.questions.forEach(function (q) { (q.figs || []).forEach(function (id) { figSet[id] = 1; }); });
    });

    var nav = '';
    DATA.awards.forEach(function (a) {
      nav += '<a href="#' + a.id + '">' + esc(t(a.name)) + '</a>';
    });
    document.getElementById('nav').innerHTML = nav;

    document.getElementById('langseg').innerHTML =
      '<button type="button" data-lang="en" aria-pressed="' + (lang === 'en') + '">English</button>'
      + '<button type="button" data-lang="zh" aria-pressed="' + (lang === 'zh') + '">中文</button>';
    document.getElementById('modeseg').innerHTML =
      '<button type="button" data-mode="full" aria-pressed="' + (mode === 'full') + '">' + esc(t(UI.full)) + '</button>'
      + '<button type="button" data-mode="kw" aria-pressed="' + (mode === 'kw') + '">' + esc(t(UI.kw)) + '</button>';

    var html = '<section class="hero wrap">'
      + '<h1>' + esc(t(DATA.meta.title)) + '</h1>'
      + '<p>' + esc(t(DATA.meta.lede)) + '</p>'
      + '<div class="stats">'
      + '<div class="stat"><b>' + nAwards + '</b><span>' + esc(t(UI.awards)) + '</span></div>'
      + '<div class="stat"><b>' + nQ + '</b><span>' + esc(t(UI.questions)) + '</span></div>'
      + '<div class="stat"><b>' + Object.keys(figSet).length + '</b><span>' + esc(t(UI.figures)) + '</span></div>'
      + '</div></section>';

    DATA.awards.forEach(function (a) {
      html += '<section class="award" id="' + a.id + '"><div class="wrap">'
        + '<div class="ahead rv"><span class="tag">' + esc(t(a.tag)) + '</span>'
        + '<h2>' + esc(t(a.name)) + '</h2><p>' + esc(t(a.basis)) + '</p></div>';
      a.questions.forEach(function (q, i) {
        html += '<article class="q rv">'
          + '<div class="qn">' + (i + 1) + ' / ' + a.questions.length + '</div>'
          + '<h3>' + fmt(q.q) + '</h3>'
          + '<div class="lbl">' + esc(t(UI.kwLabel)) + '</div>'
          + flowHTML(q.flow)
          + (q.figs && q.figs.length ? '<div class="lbl">' + esc(t(UI.figLabel)) + '</div>' + figsHTML(q.figs) : '')
          + '<div class="lbl">' + esc(t(UI.ansLabel)) + '</div>'
          + '<div class="ans"><p>' + fmt(q.a) + '</p></div>'
          + '<div class="lbl">' + esc(t(UI.evLabel)) + '</div>'
          + evHTML(q.ev)
          + '</article>';
      });
      html += '</div></section>';
    });

    html += '<footer class="wrap"><p>' + esc(t(UI.source))
      + '<a href="' + DATA.meta.wiki + '" target="_blank" rel="noopener">2026.igem.wiki/gems-taiwan</a>.</p>'
      + '<p>' + esc(t(UI.nothing)) + '</p>'
      + '<p>' + esc(DATA.meta.team) + ' · iGEM ' + esc(DATA.meta.year) + '</p></footer>';

    document.getElementById('main').innerHTML = html;
    reveal();
    spy();
    if (first) { first = false; jump(); }
  }

  /* a re-render drops the browser's anchor position, so put it back */
  function jump() {
    var h = location.hash ? location.hash.slice(1) : '';
    if (!h) return;
    var el = document.getElementById(h);
    if (el) el.scrollIntoView();
  }

  /* fade sections in as they arrive */
  function reveal() {
    var items = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('in');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.04 });
    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  /* highlight the award the reader is in */
  var spyIO = null;
  function spy() {
    if (spyIO) spyIO.disconnect();
    if (!('IntersectionObserver' in window)) return;
    var links = {};
    document.querySelectorAll('#nav a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = links[e.target.id];
        if (!a) return;
        if (e.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); });
          a.classList.add('on');
        }
      });
    }, { rootMargin: '-52px 0px -70% 0px' });
    document.querySelectorAll('section.award').forEach(function (s) { spyIO.observe(s); });
  }

  /* lightbox */
  var lb = document.getElementById('lb');
  function openFig(id) {
    var f = FIGS[id];
    if (!f) return;
    lb.querySelector('img').src = 'img/' + f.img;
    lb.querySelector('img').alt = t(f.label);
    lb.querySelector('figcaption').innerHTML = '<b>' + esc(t(f.label)) + '</b>' + fmt(f.read);
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closeFig() {
    lb.classList.remove('on');
    lb.querySelector('img').src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var fig = e.target.closest ? e.target.closest('.fig') : null;
    if (fig) { openFig(fig.getAttribute('data-fig')); return; }
    if (e.target.closest && e.target.closest('.lb')) {
      if (!e.target.closest('figcaption')) closeFig();
      return;
    }
    var lbtn = e.target.closest ? e.target.closest('[data-lang]') : null;
    if (lbtn && lbtn.tagName === 'BUTTON') {
      lang = lbtn.getAttribute('data-lang');
      try { localStorage.setItem(KEY_LANG, lang); } catch (x) {}
      var y = window.scrollY;
      render();
      window.scrollTo(0, y);
      return;
    }
    var mbtn = e.target.closest ? e.target.closest('[data-mode]') : null;
    if (mbtn && mbtn.tagName === 'BUTTON') {
      mode = mbtn.getAttribute('data-mode');
      try { localStorage.setItem(KEY_MODE, mode); } catch (x) {}
      render();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('on')) closeFig();
  });

  render();
})();
