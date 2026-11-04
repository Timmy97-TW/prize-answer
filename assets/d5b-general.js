MOREQ('general', [
  {
    q: {
      en: 'How much of the work did the team do themselves, and how much was done by others?',
      zh: '有多少工作是團隊自己做的，有多少是別人做的？'
    },
    flow: [
      { t: { en: '692 entries, 82 pages', zh: '692 筆紀錄、82 頁' } },
      { t: { en: 'Printed, wired and coded here', zh: '列印、接線、寫程式都在這裡' } },
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
      { t: { en: 'The software is the team’s and is released under the MIT licence: the rig application, the operator interface and the analysis code.',
             zh: '軟體是團隊自己的，並以 MIT 授權釋出：設備端應用程式、操作介面與分析程式。' }, src: 'software' },
      { t: { en: 'Outside help is named and bounded: Owl Lab on electronics, advisers on protocol review, CH Biotech for an industry briefing and a reference peptide.',
             zh: '外部協助是具名而且劃清範圍的：貓頭鷹實驗室負責電路、顧問負責流程審閱、正瀚生技提供業界簡報與一支參考肽。' }, src: 'human-practices' },
      { t: { en: 'What is not ours is labelled as such: trehalose and the CH Biotech peptide are reference compounds used to show the assay can detect a rescue, not our own protectants.',
             zh: '不是我們的東西就標明不是：海藻糖與正瀚的肽是用來證明分析方法看得見救援效果的參考化合物，不是我們自己的保護劑。' }, src: 'results' }
    ],
    figs: ['h05', 'h08', 'h09'],
    a: {
      en: 'The build and the record are the students’. Seven months of wet-lab work come to 692 notebook entries, the '
        + 'hardware notebook runs to 82 pages across thirty weeks, and twenty-five protocol sheets are published including '
        + 'the three that produced no result. Every instrument in the project was designed, printed, wired and programmed '
        + 'in-house — two in-line photometers, the twenty-four-culture light plate, the pinch valve, the shell-side valve '
        + 'and the hydroponic floating plate — and the rig application, the operator interface and the analysis code are '
        + 'ours and released under the MIT licence. Outside help is named and bounded rather than blurred: Owl Lab on '
        + 'electronics, advisers on protocol review, CH Biotech for an industry briefing and a reference peptide. And where '
        + 'a result is not ours we label it: trehalose and the CH Biotech peptide are reference compounds whose job is to '
        + 'show the assay can detect a rescue at all.',
      zh: '做的人和記錄的人都是學生。七個月的濕式實驗累積成 692 筆筆記，硬體筆記本在 30 週裡寫到 82 頁，'
        + '公布的 25 份實驗流程裡還包含沒做出結果的那三份。專案裡每一台儀器都是自己設計、列印、接線、寫程式的——'
        + '兩台線上光度計、能跑 24 個培養的光照盤、夾管閥、殼側閥，以及水耕浮板——而設備端應用程式、操作介面'
        + '與分析程式也都是我們的，並以 MIT 授權釋出。外部協助是具名並且劃清範圍，不是模糊帶過：'
        + '貓頭鷹實驗室負責電路、顧問負責流程審閱、正瀚生技提供業界簡報與一支參考肽。而不是我們的結果我們就標明：'
        + '海藻糖與正瀚的肽是參考化合物，它們的任務是證明這套分析方法真的看得見救援效果。'
    }
  },
  {
    q: {
      en: 'Did the team design a project based on synthetic biology and standard components?',
      zh: '這個專案是建立在合成生物學與標準元件上的嗎？'
    },
    flow: [
      { t: { en: 'One circuit, four modules', zh: '一條迴路，四個模組' } },
      { t: { en: 'L0 / L1 / L2 Golden Gate', zh: 'L0 / L1 / L2 Golden Gate' },
        leaf: [{ en: 'WB800, eight proteases out', zh: 'WB800，剔除八個蛋白酶' }] },
      { t: { en: '14 reused, 35 deposited', zh: '重用 14 個，存入 35 個' },
        leaf: [{ en: 'an open acceptor cassette', zh: '一個開放的接受匣' }] }
    ],
    ev: [
      { t: { en: 'The design is a genetic circuit in four modules: chromophore supply with ho1::pcyA, light sensing with CcaS-m3 and CcaR, output from PcpcG2-veg, and a secreted cargo behind a signal peptide.',
             zh: '設計是一條分成四個模組的基因迴路：ho1::pcyA 供應發色團、CcaS-m3 與 CcaR 感光、PcpcG2-veg 負責輸出，以及接在訊號肽後面的分泌貨物。' }, src: 'description' },
      { t: { en: 'It is built in standard Golden Gate levels — Level 0 with BbsI/BpiI, Level 1 with BsaI, Level 2 into one shuttle plasmid — in B. subtilis WB800, a chassis with eight secretory protease genes deleted.',
             zh: '它是用標準的 Golden Gate 層級組起來的——Level 0 用 BbsI/BpiI、Level 1 用 BsaI、Level 2 進單一穿梭質體——宿主是剔除了八個分泌型蛋白酶基因的枯草桿菌 WB800。' }, src: 'engineering' },
      { t: { en: 'Standard parts are used as parts: B0015, RiboJ, the Csn and SamyQ signal peptides, Pveg, and 14 earlier Registry parts reused.',
             zh: '標準元件是當元件在用：B0015、RiboJ、Csn 與 SamyQ 訊號肽、Pveg，以及 14 個重用的既有元件。' }, src: 'parts' },
      { t: { en: '35 parts were deposited from a 41-part collection, including an open acceptor cassette another team can drop a different cargo into.',
             zh: '41 個元件的收藏中存入了 35 個，其中包含一個開放的接受匣，別的隊伍可以把自己的貨物換進去。' }, src: 'parts' },
      { t: { en: 'The software side is a standard component too: the rig application and analysis code are released under the MIT licence.',
             zh: '軟體這一邊也是標準元件：設備端應用程式與分析程式都以 MIT 授權釋出。' }, src: 'software' }
    ],
    figs: ['o02', 'q10', 'c01'],
    a: {
      en: 'The project is a genetic circuit with four modules: chromophore supply from ho1 and pcyA, light sensing through '
        + 'CcaS-m3 and CcaR, output from the PcpcG2-veg promoter, and a cargo exported behind a Csn or SamyQ signal '
        + 'peptide. It is built with standards rather than around them — Golden Gate Level 0 on BbsI and BpiI, Level 1 on '
        + 'BsaI, Level 2 into a single shuttle plasmid — in Bacillus subtilis WB800, a chassis chosen because eight '
        + 'secretory protease genes are deleted from it. Standard parts are used as parts, including B0015, RiboJ, Pveg and '
        + 'fourteen earlier Registry parts reused rather than rebuilt. Thirty-five parts were deposited from a '
        + 'forty-one-part collection, among them an open acceptor cassette another team can drop a different cargo into, '
        + 'and the software half is released under the MIT licence so it can be reused on the same terms.',
      zh: '這個專案是一條有四個模組的基因迴路：ho1 與 pcyA 供應發色團、CcaS-m3 與 CcaR 感光、PcpcG2-veg 啟動子負責輸出，'
        + '以及接在 Csn 或 SamyQ 訊號肽後面被送出去的貨物。它是用標準組起來的、不是繞著標準走——'
        + 'Golden Gate Level 0 用 BbsI 與 BpiI、Level 1 用 BsaI、Level 2 進單一穿梭質體——宿主是枯草桿菌 WB800，'
        + '選它是因為裡面剔除了八個分泌型蛋白酶基因。標準元件是當元件在用，包括 B0015、RiboJ、Pveg，'
        + '以及 14 個直接重用而不是重做的既有元件。41 個元件的收藏中存入了 35 個，其中有一個開放的接受匣，'
        + '別的隊伍可以把不同的貨物換進去；而軟體這一半以 MIT 授權釋出，所以也能在同樣的條件下被重用。'
    }
  },
  {
    q: {
      en: 'Are the project components well documented on the wiki and Registry pages?',
      zh: '專案的各個元件在 wiki 與元件庫頁面上記錄得好嗎？'
    },
    flow: [
      { t: { en: '35 deposited, four levels', zh: '存入 35 個，四個層級' } },
      { t: { en: 'Map, gel and size on every page', zh: '每頁都有圖譜、膠體、大小' },
        leaf: [{ en: '101 figures across the collection', zh: '整個收藏 101 張圖' }] },
      { t: { en: 'Notebooks dated and complete', zh: '筆記本有日期、完整' },
        leaf: [{ en: 'disagreements left visible', zh: '矛盾留著不藏' }] }
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
      { t: { en: 'Where our own pages disagree — strain and working volume between the Biomanufacturing, Hardware and Results pages is the clearest case — we have left it visible and said which page is the authority.',
             zh: '我們自己的頁面互相矛盾的地方——生物製造、硬體與結果三頁之間關於菌株與工作體積的說法最明顯——我們留著不藏，並說明哪一頁是準的。' }, src: 'results' }
    ],
    figs: ['q10', 'q01', 'v04'],
    a: {
      en: 'Thirty-five parts are deposited from a forty-one-part collection, and because assembly level is derivable from '
        + 'the composition graph, the four levels we built in are visible from the Registry rather than only described on '
        + 'the wiki. The part pages carry evidence and not only sequence: plasmid maps, screening gels with the band sized '
        + 'and called, and the insert length against the plasmid length, 101 figures in all. The Level 2 device is '
        + 'documented as a device, at 10,293 base pairs with three junction primer pairs verified in three independent '
        + 'clones. The notebooks behind that are dated and complete, with 692 wet-lab entries over seven months, 82 pages '
        + 'of hardware across thirty weeks and a weekly dry-lab record. And where our own pages disagree — strain and '
        + 'working volume between the Biomanufacturing, Hardware and Results pages is the clearest case — we have left it '
        + 'visible and said which page is the authority.',
      zh: '41 個元件的收藏中有 35 個存入元件庫，而因為組裝層級可以從組成關係圖推出來，我們建造時用的四個層級'
        + '在元件庫上就看得見，不只是在 wiki 上被描述。元件頁面上放的是證據，不只是序列：質體圖譜、'
        + '標好大小並判讀過的篩選膠體、插入片段長度對質體全長，總共 101 張圖。Level 2 裝置是以「裝置」的規格記錄的：'
        + '10,293 bp，三組接點引子在三株獨立菌上都驗證過。背後的筆記本有日期也完整：七個月 692 筆濕式實驗紀錄、'
        + '30 週 82 頁硬體紀錄，以及每週一次的乾式實驗紀錄。而我們自己的頁面互相矛盾的地方——'
        + '生物製造、硬體與結果三頁之間關於菌株與工作體積的說法最明顯——我們留著不藏，並說明哪一頁是準的。'
    }
  },
  {
    q: {
      en: 'How competent is the team at answering judges’ questions?',
      zh: '團隊回答評審問題的能力如何？'
    },
    flow: [
      { t: { en: 'Number, n, boundary', zh: '數字、樣本數、邊界' } },
      { t: { en: 'Seven seats, named territory', zh: '七個席位，各有地盤' },
        leaf: [{ en: 'the person who ran it answers', zh: '做過的人來答' }] },
      { t: { en: 'Our own gaps drilled', zh: '自己的缺口拿來練' },
        leaf: [{ en: '542 questions, 77 contradictions', zh: '542 題，77 處矛盾' }] }
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
      { t: { en: 'Known conflicts are rehearsed rather than avoided, such as the ACC deaminase activity figure quoted two ways fourteenfold apart, and which of the two the arithmetic supports.',
             zh: '已知的衝突是拿來演練、不是迴避，例如 ACC 去胺酶活性被兩種說法引用、相差十四倍，以及算式支持的是哪一個。' }, src: 'measurement' }
    ],
    figs: ['j01', 'j02', 'm05'],
    a: {
      en: 'We prepared for this part of the ballot as deliberately as for the bench. The team drilled against a '
        + '542-question bank built from our own wiki, including 181 questions that judges actually asked other teams, and '
        + '77 questions that point at places where our own pages disagree or claim more than the data shows — each with '
        + 'the honest sentence that goes with it. Territory is assigned across seven seats so a question reaches the '
        + 'person who ran the experiment, and the answering rule is fixed: the number with its unit, the n, the control, '
        + 'then the boundary, and the boundary first whenever it is load-bearing. That is why we would rather volunteer a '
        + 'conflict than be caught by one — the ACC deaminase activity figure appears two ways, fourteenfold apart, and we '
        + 'can tell you which one the arithmetic supports and why.',
      zh: '評審票上的這一項，我們準備得跟實驗台一樣認真。團隊用一份從自己 wiki 做出來的 542 題題庫演練，'
        + '其中有 181 題是評審實際問過其他隊伍的問題，還有 77 題指向我們自己頁面互相矛盾、或講得比資料更多的地方——'
        + '每一題都配好一句老實話。地盤分成七個席位，所以問題會落到真正做過那個實驗的人身上；'
        + '答題規則是固定的：帶單位的數字、樣本數、對照組，然後是邊界，而當邊界是承重的就先講邊界。'
        + '這也是為什麼我們寧願主動把衝突講出來，而不是被抓到——ACC 去胺酶的活性數字有兩種說法、相差十四倍，'
        + '我們可以告訴你算式支持的是哪一個，以及為什麼。'
    }
  }
]);
