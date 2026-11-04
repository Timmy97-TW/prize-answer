/* Core: page registry and the award list. The five d*.js files call AWARD() to fill it. */

var DATA = {
  meta: {
    team: 'GEMS Taiwan',
    year: '2026',
    wiki: 'https://2026.igem.wiki/gems-taiwan/',
    title: { en: 'Prize Answers', zh: '獎項答題' },
    lede: {
      en: 'Four nominated awards and the nine questions that choose the finalists. '
        + 'Each one carries the keywords to remember, the evidence behind them, and one answer to say out loud.',
      zh: '四個提名獎項，加上決定入圍隊伍的九個問題。每一題都給你要記的關鍵字、背後的證據，和一段可以直接說出口的回答。'
    }
  },

  /* wiki slug -> how the page is named in each language */
  pages: {
    'biomanufacturing': { en: 'Biomanufacturing', zh: '生物製造' },
    'hardware': { en: 'Hardware', zh: '硬體' },
    'hardware-bioreactor': { en: 'Hardware · Bioreactor', zh: '硬體 · 生物反應器' },
    'hardware-photometer': { en: 'Hardware · Photometer', zh: '硬體 · 光度計' },
    'hardware-diopal': { en: 'Hardware · Light Plate', zh: '硬體 · 光照培養盤' },
    'hardware-hydroponics': { en: 'Hardware · Hydroponics', zh: '硬體 · 水耕' },
    'hardware-notebook': { en: 'Hardware Notebook', zh: '硬體筆記本' },
    'measurement': { en: 'Measurement', zh: '量測' },
    'results': { en: 'Results', zh: '結果' },
    'plant': { en: 'Plants', zh: '植物' },
    'engineering': { en: 'Engineering', zh: '工程' },
    'parts': { en: 'Parts', zh: '基因元件' },
    'description': { en: 'Description', zh: '專案描述' },
    'software': { en: 'Software', zh: '軟體' },
    'model': { en: 'Model', zh: '數學模型' },
    'geospatial-analysis': { en: 'Geospatial Analysis', zh: '地理空間分析' },
    'entrepreneurship': { en: 'Entrepreneurship', zh: '創業' },
    'laws-and-regulations': { en: 'Laws and Regulations', zh: '法規' },
    'human-practices': { en: 'Human Practices', zh: '人文實踐' },
    'education': { en: 'Education', zh: '教育' },
    'data-physicalization': { en: 'Data Physicalization', zh: '資料實體化' },
    'data-physicalization-listening': { en: 'Listening to Plants', zh: '聽見植物' },
    'contribution': { en: 'Contribution', zh: '貢獻' },
    'safety-and-security': { en: 'Safety and Security', zh: '安全與保安' },
    'experiments': { en: 'Experiments', zh: '實驗' },
    'wet-lab-notebook': { en: 'Wet Lab Notebook', zh: '濕式實驗筆記本' },
    'dry-lab-notebook': { en: 'Dry Lab Notebook', zh: '乾式實驗筆記本' },
    'protein-design': { en: 'Protein Design', zh: '蛋白質設計' },
    'registry': { en: 'iGEM Registry', zh: 'iGEM 元件庫' },
    'trainer': { en: 'Judging trainer', zh: '評審演練系統' }
  },

  awards: []
};

function AWARD(a) { DATA.awards.push(a); }

/* append further questions to an award already registered, so one award can span two files */
function MOREQ(id, questions) {
  for (var i = 0; i < DATA.awards.length; i++) {
    if (DATA.awards[i].id === id) {
      DATA.awards[i].questions = DATA.awards[i].questions.concat(questions);
      return;
    }
  }
  throw new Error('MOREQ: no award ' + id);
}
