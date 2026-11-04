MOREQ('general', [
  {
    q: {
      en: 'How much of the work did the team do themselves, and how much was done by others?',
      zh: '有多少工作是團隊自己做的，有多少是別人做的？'
    },
    ask: {
      en: 'What the judge is testing: attribution. The safe answer is specific — say what you built, name who helped '
        + 'and at what, and label the things that are not yours before anyone asks.',
      zh: '評審在測的是：貢獻歸屬。安全的答案是具體的——講出你們造了什麼、誰幫了什麼忙，'
        + '並且在別人問之前就先標明哪些東西不是你們的。'
    },
    flow: [
      { t: { en: '692 entries, seven months', zh: '692 筆紀錄、七個月' },
        leaf: [{ en: '82-page hardware notebook, 30 weeks', zh: '82 頁硬體筆記本、30 週' }] },
      { t: { en: 'Printed, wired and coded here', zh: '列印、接線、寫程式都在這裡' },
        leaf: [{ en: 'both photometers, the plate, the valves', zh: '兩台光度計、培養盤、閥件' }] },
      { t: { en: 'The dry lab is ours too', zh: '乾式實驗也是我們的' },
        leaf: [{ en: 'design pipeline, MD, code under MIT', zh: '設計流程、分子動力學、MIT 程式碼' }] },
      { t: { en: 'Help named and bounded', zh: '外援具名且劃界' },
        leaf: [
          { en: 'Owl Lab on electronics', zh: '貓頭鷹實驗室負責電路' },
          { en: 'reference compounds flagged', zh: '參考化合物都標明' }
        ] }
    ],
    ev: [
      { t: { en: 'The record is the students’ own: 692 wet-lab notebook entries over seven months, an 82-page hardware notebook over 30 weeks, and 25 published protocol sheets.',
             zh: '紀錄是學生自己的：七個月共 692 筆濕式實驗筆記、30 週共 82 頁硬體筆記本，以及公布的 25 份實驗流程。' }, src: 'wet-lab-notebook' },
      { t: { en: 'Every instrument was designed, printed, wired and programmed by the team: both photometers, the light plate, the pinch valve, the shell-side valve and the hydroponic floating plate.',
             zh: '每一台儀器都是團隊自己設計、列印、接線、寫程式的：兩台光度計、光照培養盤、夾管閥、殼側閥，以及水耕浮板。' }, src: 'hardware' },
      { t: { en: 'The dry lab is the team’s as well: a protein design pipeline with its own alanine scans and 30-nanosecond molecular dynamics, and the rig application, operator interface and analysis code released under MIT.',
             zh: '乾式實驗也是團隊自己的：一條有自家丙胺酸掃描與 30 奈秒分子動力學的蛋白質設計流程，以及以 MIT 授權釋出的設備端程式、操作介面與分析程式。' }, src: 'protein-design' },
      { t: { en: 'Outside help is named and bounded: Owl Lab on electronics, advisers on protocol review, CH Biotech for an industry briefing and a reference peptide.',
             zh: '外部協助是具名而且劃清範圍的：貓頭鷹實驗室負責電路、顧問負責流程審閱、正瀚生技提供業界簡報與一支參考肽。' }, src: 'human-practices' },
      { t: { en: 'What is not ours is labelled as such: trehalose and the CH Biotech peptide are reference compounds used to show the assay can detect a rescue, not our own protectants.',
             zh: '不是我們的東西就標明不是：海藻糖與正瀚的肽是用來證明分析方法看得見救援效果的參考化合物，不是我們自己的保護劑。' }, src: 'results' }
    ],
    figs: ['c09', 'c05', 'r02', 'r03', 'v03', 'x02', 'x17'],
    a: {
      en: 'The build and the record are the students’. Seven months of wet-lab work come to 692 notebook entries, the '
        + 'hardware notebook runs to 82 pages across thirty weeks, and twenty-five protocol sheets are published '
        + 'including the three that produced no result. Every instrument in the project was designed, printed, wired and '
        + 'programmed in-house — two in-line photometers, the twenty-four-culture light plate, the pinch valve, the '
        + 'shell-side valve and the hydroponic floating plate — and so is the dry lab, from the alanine scans and '
        + 'thirty-nanosecond molecular dynamics behind the peptide design to the rig application and analysis code, which '
        + 'are released under the MIT licence. Outside help is named and bounded rather than blurred: Owl Lab on '
        + 'electronics, advisers on protocol review, CH Biotech for an industry briefing and a reference peptide. And '
        + 'where a result is not ours we label it: trehalose and the CH Biotech peptide are reference compounds whose job '
        + 'is to show the assay can detect a rescue at all.',
      zh: '做的人和記錄的人都是學生。七個月的濕式實驗累積成 692 筆筆記，硬體筆記本在 30 週裡寫到 82 頁，'
        + '公布的 25 份實驗流程裡還包含沒做出結果的那三份。專案裡每一台儀器都是自己設計、列印、接線、寫程式的——'
        + '兩台線上光度計、能跑 24 個培養的光照盤、夾管閥、殼側閥，以及水耕浮板——乾式實驗也一樣，'
        + '從胜肽設計背後的丙胺酸掃描與 30 奈秒分子動力學，到設備端程式與分析程式，全部以 MIT 授權釋出。'
        + '外部協助是具名並且劃清範圍，不是模糊帶過：貓頭鷹實驗室負責電路、顧問負責流程審閱、'
        + '正瀚生技提供業界簡報與一支參考肽。而不是我們的結果我們就標明：海藻糖與正瀚的肽是參考化合物，'
        + '它們的任務是證明這套分析方法真的看得見救援效果。'
    }
  },
  {
    q: {
      en: 'Did the team design a project based on synthetic biology and standard components?',
      zh: '這個專案是建立在合成生物學與標準元件上的嗎？'
    },
    ask: {
      en: 'What the judge is testing: whether this is synthetic biology or a machine with bacteria in it. Walk the '
        + 'circuit module by module, then say which parts you took and which you made.',
        zh: '評審在測的是：這到底是合成生物學，還是一台裡面裝了細菌的機器。一個模組一個模組走過迴路，'
          + '然後說清楚哪些元件是拿來的、哪些是做的。'
    },
    flow: [
      { t: { en: 'One circuit, four modules', zh: '一條迴路，四個模組' },
        leaf: [{ en: 'PCB supply → sensing → output → cargo', zh: '發色團 → 感光 → 輸出 → 貨物' }] },
      { t: { en: 'Green light in, protein out', zh: '綠光進去，蛋白質出來' },
        leaf: [{ en: 'CcaS-m3 → CcaR → PcpcG2-veg', zh: 'CcaS-m3 → CcaR → PcpcG2-veg' }] },
      { t: { en: 'L0 / L1 / L2 Golden Gate', zh: 'L0 / L1 / L2 Golden Gate' },
        leaf: [{ en: 'WB800, eight proteases out', zh: 'WB800，剔除八個蛋白酶' }] },
      { t: { en: '14 reused, 35 deposited', zh: '重用 14 個，存入 35 個' },
        leaf: [
          { en: 'an open acceptor cassette', zh: '一個開放的接受匣' },
          { en: 'the code is a standard part too', zh: '程式碼也是標準元件' }
        ] }
    ],
    ev: [
      { t: { en: 'The design is a genetic circuit in four modules: chromophore supply with ho1::pcyA, light sensing with CcaS-m3 and CcaR, output from PcpcG2-veg, and a secreted cargo behind a signal peptide.',
             zh: '設計是一條分成四個模組的基因迴路：ho1::pcyA 供應發色團、CcaS-m3 與 CcaR 感光、PcpcG2-veg 負責輸出，以及接在訊號肽後面的分泌貨物。' }, src: 'description' },
      { t: { en: 'The chromophore module is not optional and that is the synthetic-biology point: B. subtilis does not make phycocyanobilin, so ho1 and pcyA had to be supplied for CcaS to sense green light at all.',
             zh: '發色團模組不是可有可無，而這正是合成生物學的重點：枯草桿菌不會製造藻藍膽素，所以必須把 ho1 與 pcyA 送進去，CcaS 才感應得到綠光。' }, src: 'engineering' },
      { t: { en: 'It is built in standard Golden Gate levels — Level 0 with BbsI/BpiI, Level 1 with BsaI, Level 2 into one shuttle plasmid — in B. subtilis WB800, a chassis with eight secretory protease genes deleted.',
             zh: '它是用標準的 Golden Gate 層級組起來的——Level 0 用 BbsI/BpiI、Level 1 用 BsaI、Level 2 進單一穿梭質體——宿主是剔除了八個分泌型蛋白酶基因的枯草桿菌 WB800。' }, src: 'engineering' },
      { t: { en: 'Standard parts are used as parts: B0015, RiboJ, the Csn and SamyQ signal peptides, Pveg, and 14 earlier Registry parts reused.',
             zh: '標準元件是當元件在用：B0015、RiboJ、Csn 與 SamyQ 訊號肽、Pveg，以及 14 個重用的既有元件。' }, src: 'parts' },
      { t: { en: '35 parts were deposited from a 41-part collection, including an open acceptor cassette another team can drop a different cargo into.',
             zh: '41 個元件的收藏中存入了 35 個，其中包含一個開放的接受匣，別的隊伍可以把自己的貨物換進去。' }, src: 'parts' },
      { t: { en: 'The software side is a standard component too: the rig application and analysis code are released under the MIT licence.',
             zh: '軟體這一邊也是標準元件：設備端應用程式與分析程式都以 MIT 授權釋出。' }, src: 'software' }
    ],
    figs: ['q01', 'q08', 'v04', 'c06', 'w10', 'q17', 'q12'],
    a: {
      en: 'The project is a genetic circuit with four modules: chromophore supply from ho1 and pcyA, light sensing '
        + 'through CcaS-m3 and CcaR, output from the PcpcG2-veg promoter, and a cargo exported behind a Csn or SamyQ '
        + 'signal peptide. The first module is where the synthetic biology is least optional — Bacillus subtilis does not '
        + 'make phycocyanobilin, so the chromophore had to be built in before the sensor could sense anything at all. It '
        + 'is assembled with standards rather than around them: Golden Gate Level 0 on BbsI and BpiI, Level 1 on BsaI, '
        + 'Level 2 into a single shuttle plasmid, in Bacillus subtilis WB800, a chassis chosen because eight secretory '
        + 'protease genes are deleted from it, and with B0015, RiboJ, Pveg and fourteen earlier Registry parts reused '
        + 'rather than rebuilt. Thirty-five parts were deposited from a forty-one-part collection, among them an open '
        + 'acceptor cassette another team can drop a different cargo into, and the software half is released under the '
        + 'MIT licence so it can be reused on the same terms.',
      zh: '這個專案是一條有四個模組的基因迴路：ho1 與 pcyA 供應發色團、CcaS-m3 與 CcaR 感光、PcpcG2-veg 啟動子負責輸出，'
        + '以及接在 Csn 或 SamyQ 訊號肽後面被送出去的貨物。第一個模組最能看出合成生物學在哪裡——'
        + '枯草桿菌不會製造藻藍膽素，所以得先把發色團建進去，感測器才可能感應到任何東西。'
        + '它是用標準組起來的、不是繞著標準走：Golden Gate Level 0 用 BbsI 與 BpiI、Level 1 用 BsaI、'
        + 'Level 2 進單一穿梭質體，宿主是剔除了八個分泌型蛋白酶基因的枯草桿菌 WB800，'
        + '並且用上 B0015、RiboJ、Pveg，以及 14 個直接重用而不是重做的既有元件。41 個元件的收藏中存入了 35 個，'
        + '其中有一個開放的接受匣，別的隊伍可以把不同的貨物換進去；而軟體這一半以 MIT 授權釋出，'
        + '所以也能在同樣的條件下被重用。'
    }
  },
  {
    q: {
      en: 'Are the project components well documented on the wiki and Registry pages?',
      zh: '專案的各個元件在 wiki 與元件庫頁面上記錄得好嗎？'
    },
    ask: {
      en: 'What the judge is testing: whether a stranger could check you. A judge who opens a part page wants a map, a '
        + 'gel with the band called, and a number they can disagree with. Expect them to have found a weak caption.',
      zh: '評審在測的是：一個陌生人能不能查核你們。評審打開元件頁，要看到圖譜、一張標好帶位的膠體，'
        + '以及一個他可以不同意的數字。要預期他已經找到某一句寫得不好的圖說。'
    },
    flow: [
      { t: { en: '35 deposited, four levels', zh: '存入 35 個、四個層級' },
        leaf: [{ en: 'level derivable from the composition graph', zh: '層級可由組成關係推出' }] },
      { t: { en: 'Map, gel and size on every page', zh: '每頁都有圖譜、膠體、大小' },
        leaf: [{ en: '101 figures across the collection', zh: '整個收藏 101 張圖' }] },
      { t: { en: 'Notebooks dated and complete', zh: '筆記本有日期、完整' },
        leaf: [{ en: '692 entries + 82 pages + weekly dry lab', zh: '692 筆 + 82 頁 + 每週乾式紀錄' }] },
      { t: { en: 'Weak captions we already know about', zh: '我們自己知道的弱圖說' },
        leaf: [
          { en: '"all colonies" means three', zh: '「所有菌落」其實是三株' },
          { en: 'where pages disagree, we say which is the authority', zh: '頁面不一致時，我們說哪一頁是準的' }
        ] }
    ],
    ev: [
      { t: { en: '35 parts deposited from a 41-part collection, with assembly level derivable from the composition graph across four levels.',
             zh: '41 個元件的收藏中存入 35 個，而組裝層級可以直接從組成關係圖推出來，橫跨四個層級。' }, src: 'parts' },
      { t: { en: 'The part pages carry the evidence and not only the sequence: plasmid maps, screening gels with the band sized and called, and insert length against plasmid length — 101 figures in all.',
             zh: '元件頁面上放的是證據，不只是序列：質體圖譜、標好大小並判讀過的篩選膠體、插入片段長度對質體全長——總共 101 張圖。' }, src: 'registry' },
      { t: { en: 'The Level 2 device is documented as a device: 10,293 bp with three junction primer pairs verified in three independent clones.',
             zh: 'Level 2 裝置是以「裝置」的規格記錄的：10,293 bp，三組接點引子在三株獨立菌上都驗證過。' }, src: 'engineering' },
      { t: { en: 'The notebooks behind it are dated and complete: 692 wet-lab entries over seven months, 82 pages of hardware across 30 weeks, and a weekly dry-lab record.',
             zh: '背後的筆記本有日期也完整：七個月 692 筆濕式實驗紀錄、30 週 82 頁硬體紀錄，以及每週一次的乾式實驗紀錄。' }, src: 'hardware-notebook' },
      { t: { en: 'We know where the documentation is thin and would rather say it first: some captions count colonies loosely, so "all colonies" can mean three, and a few lane numbers imply a bigger screen than the figure shows.',
             zh: '我們知道文件哪裡比較薄，而且寧願自己先說：有些圖說對菌落數講得鬆，「所有菌落」可能只是三株；也有幾張圖的道次編號暗示那是一次更大篩選的一部分。' }, src: 'registry' },
      { t: { en: 'Where our own pages disagree — strain and working volume between the Biomanufacturing, Hardware and Results pages is the clearest case — we have left it visible and said which page is the authority.',
             zh: '我們自己的頁面互相矛盾的地方——生物製造、硬體與結果三頁之間關於菌株與工作體積的說法最明顯——我們留著不藏，並說明哪一頁是準的。' }, src: 'results' }
    ],
    figs: ['v05', 'v08', 'v12', 'v16', 'q11', 'q14'],
    a: {
      en: 'Thirty-five parts are deposited from a forty-one-part collection, and because assembly level is derivable '
        + 'from the composition graph, the four levels we built in are visible from the Registry rather than only '
        + 'described on the wiki. The part pages carry evidence and not only sequence: plasmid maps, screening gels with '
        + 'the band sized and called, and the insert length against the plasmid length, 101 figures in all, behind '
        + 'notebooks that are dated and complete — 692 wet-lab entries over seven months, 82 pages of hardware across '
        + 'thirty weeks and a weekly dry-lab record. We also know where that documentation is thin and would rather say '
        + 'it than be shown it: some captions count colonies loosely, so "all colonies" can mean three, and a few lane '
        + 'numbers imply a larger screen than the figure shows. And where our own pages disagree — strain and working '
        + 'volume between the Biomanufacturing, Hardware and Results pages is the clearest case — we have left it visible '
        + 'and said which page is the authority.',
      zh: '41 個元件的收藏中有 35 個存入元件庫，而因為組裝層級可以從組成關係圖推出來，我們建造時用的四個層級'
        + '在元件庫上就看得見，不只是在 wiki 上被描述。元件頁面上放的是證據，不只是序列：質體圖譜、'
        + '標好大小並判讀過的篩選膠體、插入片段長度對質體全長，總共 101 張圖；背後是有日期也完整的筆記本——'
        + '七個月 692 筆濕式實驗紀錄、30 週 82 頁硬體紀錄，以及每週一次的乾式實驗紀錄。我們也知道文件哪裡比較薄，'
        + '而且寧願自己講出來，不要等別人指出來：有些圖說對菌落數講得鬆，「所有菌落」可能只是三株；'
        + '也有幾張圖的道次編號暗示那是一次更大篩選的一部分。而我們自己的頁面互相矛盾的地方——'
        + '生物製造、硬體與結果三頁之間關於菌株與工作體積的說法最明顯——我們留著不藏，並說明哪一頁是準的。'
    }
  },
  {
    q: {
      en: 'How competent is the team at answering judges’ questions?',
      zh: '團隊回答評審問題的能力如何？'
    },
    ask: {
      en: 'What the judge is testing: this one is scored live, in the room, on how you handle the question you did not '
        + 'want. The move that scores is volunteering the limit before it is found.',
      zh: '評審在測的是：這一題是現場評分的，看的是你們怎麼處理那個你最不想被問的問題。'
        + '真正拿分的動作，是在對方找到之前就先把限制講出來。'
    },
    flow: [
      { t: { en: 'Number, n, boundary', zh: '數字、樣本數、邊界' },
        leaf: [{ en: 'boundary first when it is load-bearing', zh: '邊界是承重的就先講' }] },
      { t: { en: 'Seven seats, named territory', zh: '七個席位，各有地盤' },
        leaf: [{ en: 'the person who ran it answers', zh: '做過的人來答' }] },
      { t: { en: 'Our own gaps drilled', zh: '自己的缺口拿來練' },
        leaf: [{ en: '542 questions, 77 are contradictions', zh: '542 題，其中 77 題是矛盾處' }] },
      { t: { en: 'Volunteer the conflict', zh: '主動把衝突講出來' },
        leaf: [{ en: 'activity quoted two ways, fourteenfold apart', zh: '活性有兩種說法、差十四倍' }] }
    ],
    ev: [
      { t: { en: 'The team drilled against a 542-question bank built from its own wiki, including 181 questions taken from what judges actually asked other teams.',
             zh: '團隊用一份從自己 wiki 做出來的 542 題題庫演練，其中 181 題取自評審實際問過其他隊伍的問題。' }, src: 'trainer' },
      { t: { en: '77 of those questions point at places where our own pages disagree or claim more than the data shows, each with the honest sentence to say.',
             zh: '其中 77 題指向我們自己頁面互相矛盾、或講得比資料更多的地方，每一題都配好一句老實話。' }, src: 'trainer' },
      { t: { en: 'Territory is assigned across seven seats, so a question reaches the person who ran the experiment rather than the person nearest the microphone.',
             zh: '地盤分給七個席位，所以問題會落到真正做過那個實驗的人身上，而不是離麥克風最近的人。' }, src: 'trainer' },
      { t: { en: 'The answering rule is fixed: the number with its unit, the n, the control, then the boundary — and the boundary first whenever it is load-bearing.',
             zh: '答題規則是固定的：帶單位的數字、樣本數、對照組，然後是邊界——而當邊界是承重的，就先講邊界。' }, src: 'trainer' },
      { t: { en: 'Known conflicts are rehearsed rather than avoided: the ACC deaminase activity figure is quoted two ways fourteenfold apart, and we can say which the arithmetic supports and why.',
             zh: '已知的衝突是拿來演練、不是迴避：ACC 去胺酶的活性數字有兩種說法、相差十四倍，而我們說得出算式支持哪一個、為什麼。' }, src: 'measurement' },
      { t: { en: 'So is the weakest part of our strongest claim: the light-plate work is n = 2, the red LEDs are at 640 nm when CcaSR needs about 672 for a clean off state, and we name the one week of plate work that would settle it.',
             zh: '我們最強主張裡最弱的一環也是一樣：光照盤實驗 n = 2，紅光 LED 是 640 nm，而 CcaSR 要約 672 nm 才有乾淨的關閉態；我們也說得出用一週的盤子實驗就能把它定下來。' }, src: 'results' }
    ],
    figs: ['j01', 'j02', 'w15', 'w07', 'w14', 'v09'],
    a: {
      en: 'We prepared for this part of the ballot as deliberately as for the bench. The team drilled against a '
        + '542-question bank built from our own wiki, including 181 questions that judges actually asked other teams, and '
        + '77 questions that point at places where our own pages disagree or claim more than the data shows — each with '
        + 'the honest sentence that goes with it. Territory is assigned across seven seats so a question reaches the '
        + 'person who ran the experiment, and the answering rule is fixed: the number with its unit, the n, the control, '
        + 'then the boundary, and the boundary first whenever it is load-bearing. That is why we would rather volunteer a '
        + 'conflict than be caught by one — the ACC deaminase activity figure appears two ways, fourteenfold apart, and '
        + 'we can tell you which one the arithmetic supports and why. The same goes for the weakest part of our strongest '
        + 'claim: the light-plate work is n = 2 and our red LEDs sit at 640 nanometres when CcaSR needs about 672 for a '
        + 'clean off state, so we can tell you exactly which week of plate work would settle it.',
      zh: '評審票上的這一項，我們準備得跟實驗台一樣認真。團隊用一份從自己 wiki 做出來的 542 題題庫演練，'
        + '其中有 181 題是評審實際問過其他隊伍的問題，還有 77 題指向我們自己頁面互相矛盾、或講得比資料更多的地方——'
        + '每一題都配好一句老實話。地盤分成七個席位，所以問題會落到真正做過那個實驗的人身上；'
        + '答題規則是固定的：帶單位的數字、樣本數、對照組，然後是邊界，而當邊界是承重的就先講邊界。'
        + '這也是為什麼我們寧願主動把衝突講出來，而不是被抓到——ACC 去胺酶的活性數字有兩種說法、相差十四倍，'
        + '我們可以告訴你算式支持的是哪一個、為什麼。我們最強主張裡最弱的那一環也一樣：'
        + '光照盤實驗 n = 2，而我們的紅光 LED 是 640 nm，CcaSR 要約 672 nm 才有乾淨的關閉態——'
        + '所以我們說得出，到底哪一週的盤子實驗可以把它定下來。'
    }
  }
]);
