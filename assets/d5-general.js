AWARD({
  id: 'general',
  tag: { en: 'Project rubric', zh: 'Project 評分項' },
  name: { en: 'Finalist Project Evaluation', zh: '入圍隊伍專案評分' },
  basis: {
    en: 'The nine questions in the Project section of the judging ballot. The handbook calls this section the main '
      + 'determinant for choosing finalists, and finalists are picked on a weighted average of Project, Presentation '
      + 'and Wiki.',
    zh: '評審票上 Project 區塊的九個問題。手冊說這個區塊是挑選入圍隊伍的主要依據，'
      + '而入圍名單是由 Project、Presentation、Wiki 三項的加權平均決定的。'
  },
  questions: [
    {
      q: { en: 'How impressive is this project?', zh: '這個專案有多令人印象深刻？' },
      flow: [
        { t: { en: 'One wall does three jobs', zh: '一道膜做三件事' } },
        { t: { en: 'Forecast to leaf, in hardware', zh: '從預報到葉片，都有實體' },
          leaf: [{ en: '434 h read in line', zh: '線上連讀 434 小時' }] },
        { t: { en: 'Instruments built, not bought', zh: '儀器是造的，不是買的' },
          leaf: [{ en: '35 parts, 31 stakeholders', zh: '35 個元件、31 位利害關係人' }] }
      ],
      ev: [
        { t: { en: 'Production, recovery and containment are one unit operation on a single 0.2 µm hollow-fibre wall — nothing is lysed and there is no separate downstream step.',
               zh: '生產、回收與圍阻在同一道 0.2 µm 中空纖維膜上是一個單元操作——不必破菌，也沒有另一段下游純化。' }, src: 'biomanufacturing' },
        { t: { en: 'The chain exists as hardware, not as a diagram: forecast, green light, engineered B. subtilis, membrane, permeate, plant.',
               zh: '整條鏈是實體存在的，不是一張示意圖：預報、綠光、工程化枯草桿菌、膜、透過液、植物。' }, src: 'description' },
        { t: { en: 'The instruments were built because none are sold at one litre, and one of them read a culture for 434 hours in line with no sample withdrawn.',
               zh: '儀器是因為一公升尺度上沒人賣才自己造的，其中一台連續線上讀了一個培養 434 小時、一次樣都沒抽。' }, src: 'results' },
        { t: { en: '35 parts deposited on the Registry from a 41-part collection, built across four Golden Gate assembly levels.',
               zh: '41 個元件的收藏中有 35 個存入 iGEM 元件庫，分布在四個 Golden Gate 組裝層級上。' }, src: 'parts' },
        { t: { en: '31 stakeholder engagements, a published signal-processing study with eight pre-registered predictions, and an 82-page hardware notebook.',
               zh: '31 次利害關係人接觸、一份公開的訊號處理研究（含八項預註冊預測），以及一本 82 頁的硬體筆記本。' }, src: 'human-practices' }
      ],
      figs: ['o01', 'n01', 'h02', 's02'],
      a: {
        en: 'What is unusual here is not one result but the fact that the whole chain exists in hardware: a weather '
          + 'forecast, a green LED, engineered Bacillus subtilis, a hollow-fibre wall, a cell-free permeate and a plant. '
          + 'That wall is the design idea — production, recovery and containment are one unit operation on a single 0.2 '
          + 'micrometre membrane, so nothing is lysed and there is no separate downstream step to validate. Because nothing '
          + 'is sold at this scale, the measurement half had to be built too: an in-line photometer that read a culture for '
          + '434 hours with no sample withdrawn, and a signal-processing study whose eight predictions were registered '
          + 'before the calibration run. Around it sit 35 parts deposited on the Registry from a 41-part collection, 31 '
          + 'stakeholder engagements, and an 82-page hardware notebook.',
        zh: '這裡不尋常的地方不是某一個結果，而是整條鏈真的以實體存在：一份天氣預報、一顆綠色 LED、'
          + '工程化的枯草桿菌、一道中空纖維膜、一份無細胞透過液，以及一棵植物。那道膜就是設計本身——'
          + '生產、回收與圍阻在同一道 0.2 µm 膜上是一個單元操作，所以不必破菌，也沒有另一段下游純化需要驗證。'
          + '因為這個尺度上什麼都買不到，量測這一半也得自己造：一台線上光度計連讀了一個培養 434 小時、一次樣都沒抽，'
          + '以及一份在校正運轉前就把八項預測註冊下來的訊號處理研究。圍繞著它的是 41 個元件收藏中存入元件庫的 35 個、'
          + '31 次利害關係人接觸，和一本 82 頁的硬體筆記本。'
      }
    },
    {
      q: { en: 'Did the project work, or is it likely to work?', zh: '這個專案成功了嗎，或者看起來會成功嗎？' },
      flow: [
        { t: { en: 'Parts verified', zh: '元件驗證過' },
          leaf: [{ en: '3 clones × 3 junctions', zh: '3 株菌 × 3 個接點' }] },
        { t: { en: 'Protein on both sides of the wall', zh: '膜兩側都有蛋白質' },
          leaf: [{ en: '35 to 48 kDa', zh: '35 到 48 kDa' }] },
        { t: { en: 'The assay sees a rescue', zh: '分析方法看得見救援效果' },
          leaf: [{ en: 'two links still open', zh: '還有兩個環節沒接上' }] }
      ],
      ev: [
        { t: { en: 'The device assembled: a Level 2 construct at 10,293 bp, with three independent clones each screened across three internal junctions at 375, 632 and 661 bp.',
               zh: '裝置組起來了：Level 2 構築 10,293 bp，三株獨立的菌各自在 375、632、661 bp 三個內部接點都篩到正確大小。' }, src: 'engineering' },
        { t: { en: 'Expression and secretion shown: anti-His bands at 35 to 48 kDa in cell lysate and in both lumen and shell medium between 14 and 44 hours.',
               zh: '表現與分泌都看到了：anti-His 在細胞裂解液、管內與殼側培養液（14 到 44 小時）都出現 35 到 48 kDa 的帶。' }, src: 'results' },
        { t: { en: 'The reactor makes product that crosses the barrier: 3.4 to 6.5 µg/mL ACC deaminase on the shell side through both October runs, reading 10.7 inside the fibres against 10.5 outside.',
               zh: '反應器做出的產物確實穿過屏障：十月兩次運轉殼側都有 3.4 到 6.5 µg/mL 的 ACC 去胺酶，纖維內 10.7 對纖維外 10.5。' }, src: 'results' },
        { t: { en: 'The plant assay is sensitive enough to see a rescue — trehalose at 5 mM gave about 8.7-fold chlorophyll at 100 mM NaCl — and our own ACC deaminase pre-treatment held about 70 percent more chlorophyll, 1.74 against 1.03 mg/g.',
               zh: '植物端的分析靈敏到看得見救援效果——5 mM 海藻糖在 100 mM NaCl 下讓葉綠素約為 8.7 倍——而我們自己的 ACC 去胺酶前處理保住了約 70% 更多的葉綠素，1.74 對 1.03 mg/g。' }, src: 'plant' },
        { t: { en: 'Two links are not demonstrated end to end and we name them: no forecast has ever driven a light that reached a culture, and every plant dose was applied by hand rather than through the irrigation line.',
               zh: '有兩個環節還沒有頭尾串起來，我們直接點名：從來沒有一次預報真的驅動一盞照到培養液的燈，而所有植物劑量都是手動施用，不是走灌溉管線。' }, src: 'software' }
      ],
      figs: ['c01', 'm08', 'm07', 'p03'],
      a: {
        en: 'The individual links work and we can show each one. The device assembled — a 10,293 base-pair Level 2 '
          + 'construct with three independent clones screened across three internal junctions at 375, 632 and 661 base '
          + 'pairs — and the protein is expressed and secreted, with anti-His bands at 35 to 48 kilodaltons in cell lysate '
          + 'and in both lumen and shell medium. The reactor then makes product that crosses the barrier: 3.4 to 6.5 '
          + 'micrograms per millilitre of ACC deaminase on the shell side through both October runs, reading 10.7 inside '
          + 'the fibres against 10.5 outside. On plants the assay is sensitive enough to see a rescue, with trehalose at 5 '
          + 'millimolar giving about 8.7-fold chlorophyll at 100 millimolar salt, and our own ACC deaminase pre-treatment '
          + 'holding about 70 percent more chlorophyll. Two links are not yet demonstrated end to end and we say which: no '
          + 'forecast has driven a light that reached a culture, and every plant dose was applied by hand rather than '
          + 'through the irrigation line.',
        zh: '每一個環節都會動，而且我們每一個都拿得出證據。裝置組起來了——10,293 bp 的 Level 2 構築，'
          + '三株獨立的菌各自在 375、632、661 bp 三個內部接點篩過——蛋白質也表現並分泌出來了，'
          + 'anti-His 在細胞裂解液、管內與殼側培養液都出現 35 到 48 kDa 的帶。反應器做出的產物確實穿過屏障：'
          + '十月兩次運轉殼側都有 3.4 到 6.5 µg/mL 的 ACC 去胺酶，纖維內 10.7 對纖維外 10.5。'
          + '植物端的分析靈敏到看得見救援效果，5 mM 海藻糖在 100 mM 鹽下讓葉綠素約為 8.7 倍，'
          + '而我們自己的 ACC 去胺酶前處理保住了約 70% 更多的葉綠素。有兩個環節還沒有頭尾串起來，我們也說清楚是哪兩個：'
          + '沒有一次預報真的驅動過照到培養液的燈，而所有植物劑量都是手動施用，不是走灌溉管線。'
      }
    },
    {
      q: { en: 'Is the project likely to have an impact?', zh: '這個專案可能產生影響力嗎？' },
      flow: [
        { t: { en: '99.2% of farms under 2 ha', zh: '99.2% 的農場不到 2 公頃' } },
        { t: { en: '10% yield per 1 °C night', zh: '夜溫每 1 °C 少 10% 產量' },
          leaf: [{ en: 'blind forecast 7.9% vs 8.8%', zh: '盲測預報 7.9% 對 8.8%' }] },
        { t: { en: 'No cold chain', zh: '不需要冷鏈' },
          leaf: [{ en: '226 ha to break even', zh: '226 公頃損益兩平' }] }
      ],
      ev: [
        { t: { en: 'The unit is small because the farms are: 99.2 percent of Taiwan’s farms are under two hectares and they hold 85.3 percent of the farmland.',
               zh: '機器小是因為農場小：台灣 99.2% 的農場不到兩公頃，而它們占了 85.3% 的農地。' }, src: 'geospatial-analysis' },
        { t: { en: 'The stress is measurable and growing: about 10 percent rice yield loss per degree of night warming, with November to December minimum temperature up by as much as 2 °C between 1961–1990 and 2015–2024.',
               zh: '這個逆境可量測而且在惡化：夜溫每升高 1 °C 約損失 10% 稻作產量，而 11 月到 12 月的最低溫在 1961–1990 與 2015–2024 之間最多上升了 2 °C。' }, src: 'geospatial-analysis' },
        { t: { en: 'The model already beats the baseline on real data: 32 percent less county prediction error on the second crop, and a 2026 first-crop forecast frozen before publication came in at 7.9 percent error against 8.8 for the baseline.',
               zh: '模型在真實資料上已經贏過基線：第二期作的縣市預測誤差少 32%，而在官方產量公布前就凍結的 2026 第一期作預報，誤差 7.9%，基線是 8.8%。' }, src: 'model' },
        { t: { en: 'Point-of-use manufacture removes the cold chain and the shelf life a bottled biostimulant carries.',
               zh: '在使用地點製造，就免掉了瓶裝生物刺激劑必須面對的冷鏈與保存期限。' }, src: 'biomanufacturing' },
        { t: { en: 'The commercial case is sized rather than asserted: break-even at about 226 hectares, farmer price about US$5,550 in year one and US$90 a year after.',
               zh: '商業規模是算出來的、不是宣稱的：約 226 公頃損益兩平，農民第一年約 5,550 美元，之後每年 90 美元。' }, src: 'entrepreneurship' }
      ],
      figs: ['o03', 'g02', 'd03', 'b02'],
      a: {
        en: 'The need is specific and quantified: around 10 percent of rice yield is lost per degree of night warming, '
          + 'and Taiwan’s November-to-December minimum temperature has risen by as much as two degrees between '
          + '1961–1990 and 2015–2024. The design is aimed at the farms that actually exist there, where 99.2 percent are '
          + 'under two hectares and hold 85.3 percent of the farmland, which is why the unit is one litre rather than '
          + 'industrial. The forecasting half is already useful on its own: our stress index cut county prediction error by '
          + '32 percent on the second crop, and a first-crop forecast frozen before the 2026 yields were published came in '
          + 'at 7.9 percent error against 8.8 for the baseline. Making the protectant at the point of use removes the cold '
          + 'chain and the shelf life a bottled product carries, and the business case is sized rather than asserted, '
          + 'breaking even at about 226 hectares at a farmer price of roughly US$5,550 in year one and US$90 a year after.',
        zh: '需求很具體也量化過：夜溫每升高 1 °C 約損失一成稻作產量，而台灣 11 月到 12 月的最低溫在 1961–1990 與'
          + '2015–2024 之間最多上升了兩度。設計是瞄準那裡真實存在的農場：99.2% 不到兩公頃，卻占了 85.3% 的農地，'
          + '這就是為什麼機器是一公升、不是工業規格。預報這一半本身就已經有用：我們的逆境指數讓第二期作的縣市預測誤差'
          + '少了 32%，而在 2026 年官方產量公布前就凍結的第一期作預報，誤差 7.9%，基線是 8.8%。'
          + '在使用地點製造保護劑免掉了瓶裝產品的冷鏈與保存期限；商業規模是算出來的、不是宣稱的：'
          + '約 226 公頃損益兩平，農民第一年約 5,550 美元、之後每年 90 美元。'
      }
    },
    {
      q: {
        en: 'How well were engineering principles used — design-build-test cycles, standards, modularity?',
        zh: '工程原則用得如何——設計建造測試循環、標準化、模組化？'
      },
      flow: [
        { t: { en: 'MoClo failed, so the levels split', zh: 'MoClo 失敗，所以拆層級' },
          leaf: [{ en: '11 of 12, then 10,293 bp', zh: '12 株中 11 株，然後 10,293 bp' }] },
        { t: { en: 'Four prototypes, each change has a reason', zh: '四版原型，每個改動都有理由' } },
        { t: { en: 'Predictions registered first', zh: '預測先註冊' },
          leaf: [{ en: 'one wall, three cargoes', zh: '一道膜，三種貨物' }] }
      ],
      ev: [
        { t: { en: 'The cloning track is a documented failure chain: MoClo 2.0 gave no usable Level 1 clone, the level split moved to BbsI and BsaI, an ampicillin marker clash was found and fixed, module 1 was rebuilt at 11 of 12 colonies, and the Level 2 device closed at 10,293 bp.',
               zh: '選殖這條線是一串有記錄的失敗：MoClo 2.0 沒有做出可用的 Level 1 菌落，於是層級改用 BbsI 與 BsaI 切分；發現並解決了安比西林標記衝突；模組 1 重建後 12 株有 11 株正確；Level 2 裝置以 10,293 bp 收尾。' }, src: 'engineering' },
        { t: { en: 'The bioreactor went through four prototypes and each change names the problem it answers: the pinch valve, a smaller module, the automatic pH loop, a single mainboard.',
               zh: '生物反應器走過四版原型，每個改動都寫明它解決什麼問題：夾管閥、更小的膜模組、自動 pH 迴路、單一主板。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Standards are used as standards: Golden Gate levels with BbsI/BpiI, BsaI and one shuttle plasmid, plus B0015, RiboJ, and 14 earlier Registry parts reused rather than rebuilt.',
               zh: '標準是當標準在用：Golden Gate 的 BbsI/BpiI、BsaI 與單一穿梭質體層級，加上 B0015、RiboJ，以及 14 個直接重用而不是重做的既有元件。' }, src: 'parts' },
        { t: { en: 'Modularity is physical as well as genetic: one membrane and one chassis carry three interchangeable cargoes, and a 24-well light plate runs six conditions in parallel.',
               zh: '模組化不只在基因上，也在實體上：一道膜、一個底盤承載三種可互換的貨物，而 24 孔光照盤可以同時跑六個條件。' }, src: 'description' },
        { t: { en: 'Hypotheses were committed before the test: a growth rate pre-registered at 0.2986 h⁻¹ with a 90 percent interval, met at 0.286 ± 0.010 thirteen days later, and eight algorithm predictions registered before the calibration run with all eight reported.',
               zh: '假設在測試前就定下來：生長速率預註冊為 0.2986 h⁻¹ 並附 90% 區間，十三天後實測 0.286 ± 0.010；八項演算法預測在校正運轉前註冊，八項全部公布。' }, src: 'software' }
      ],
      figs: ['c01', 'c06', 'h02', 'm02'],
      a: {
        en: 'Design-build-test-learn is visible here as a chain of named failures rather than as a diagram. In cloning, '
          + 'the MoClo 2.0 kit produced no usable Level 1 clone, so the level split moved to BbsI and BsaI; an ampicillin '
          + 'marker clash between the intermediate and Level 1 vectors was found and fixed; module 1 was rebuilt and '
          + 'screened at eleven of twelve colonies; and the Level 2 device closed at 10,293 base pairs with three junctions '
          + 'verified in three independent clones. The bioreactor ran four prototypes and every change states the problem '
          + 'it answers — a pinch valve because flow alone only recirculates, a smaller module, an automatic pH loop, a '
          + 'single mainboard to kill sensor noise. Standards are used as standards, with Golden Gate levels, B0015, RiboJ '
          + 'and fourteen earlier Registry parts reused, and modularity is physical as well as genetic, since one membrane '
          + 'and one chassis carry three interchangeable cargoes. Where we could, we committed the prediction before the '
          + 'test: a growth rate registered at 0.2986 per hour with a 90 percent interval and met at 0.286 ± 0.010 thirteen '
          + 'days later, and eight algorithm predictions registered in the repository before the calibration run, all eight '
          + 'reported including the five that failed.',
        zh: '設計—建造—測試—學習在這裡是一串具名的失敗，不是一張流程圖。選殖方面，MoClo 2.0 做不出可用的 Level 1 菌落，'
          + '於是層級改用 BbsI 與 BsaI 切分；中間載體與 Level 1 載體之間的安比西林標記衝突被找出來並解決；'
          + '模組 1 重建後 12 株篩到 11 株；Level 2 裝置以 10,293 bp 收尾，三個接點在三株獨立菌上都驗證過。'
          + '生物反應器跑了四版原型，每個改動都寫明它要解決什麼——夾管閥是因為單靠流量只是在循環、更小的膜模組、'
          + '自動 pH 迴路、用單一主板消掉感測雜訊。標準是當標準在用：Golden Gate 層級、B0015、RiboJ，'
          + '以及 14 個重用的既有元件；而模組化不只在基因上也在實體上，因為一道膜、一個底盤承載三種可互換的貨物。'
          + '能先承諾的地方我們就先承諾：生長速率在十三天前註冊為 0.2986 h⁻¹ 並附 90% 區間，實測 0.286 ± 0.010；'
          + '八項演算法預測在校正運轉前就寫進版本庫，八項全部公布，包括失敗的那五項。'
      }
    },
    {
      q: {
        en: 'How thoughtful and thorough was the team’s consideration of human practices?',
        zh: '團隊對人文實踐的思考有多縝密、多全面？'
      },
      flow: [
        { t: { en: 'Vessel, not soil', zh: '留在槽裡，不放進土裡' } },
        { t: { en: 'No kill switch', zh: '拿掉自殺開關' } },
        { t: { en: 'Nothing drove it across', zh: '沒有東西把它推過膜' },
          leaf: [
            { en: '31 stakeholders, Feb to Oct', zh: '31 位，二月到十月' },
            { en: 'conflicts kept, not averaged', zh: '衝突保留，不平均' }
          ] }
      ],
      ev: [
        { t: { en: 'Professor Chen Wen-Liang, April: keep the bacteria in a vessel and sell the consumable. That ended the transgenic rhizobacterium plan and created the bioreactor.',
               zh: '陳文亮教授，四月：把菌留在槽裡、賣消耗品。這結束了基改根圈菌計畫，也創造了生物反應器。' }, src: 'human-practices' },
        { t: { en: 'Dr. Jennifer Brophy, 18 April: physical containment over a kill switch, because a switch is DNA under selection.',
               zh: 'Jennifer Brophy 博士，4 月 18 日：用物理圍阻而不是自殺開關，因為開關是受選擇壓力的 DNA。' }, src: 'human-practices' },
        { t: { en: 'Professor Chang Jo-Shu, 4 September: nothing in the design drove protectant across the membrane, which produced the pinch valve and the pressure and flow instruments.',
               zh: '張嘉修教授，9 月 4 日：設計裡沒有東西把保護劑推過膜——這帶出了夾管閥，以及壓力與流量儀器。' }, src: 'human-practices' },
        { t: { en: '31 stakeholders from 1 February to 20 October across farmers, academics, industry, regulators and the public, with the disagreements kept rather than averaged.',
               zh: '2 月 1 日到 10 月 20 日共 31 位利害關係人，涵蓋農民、學界、產業、主管機關與公眾，而且意見分歧是保留而不是平均掉。' }, src: 'human-practices' },
        { t: { en: '30+ farmers interviewed at a market, a 50+ participant public forum where two floor questions changed the wiki, and a hydroponic run voided by an adviser over culture volume.',
               zh: '在市集訪了 30 位以上農民、一場 50 人以上的公開論壇（現場兩個提問改了 wiki），以及一次因培養液體積問題被顧問判定作廢的水耕運轉。' }, src: 'plant' }
      ],
      figs: ['i07', 'i06', 'i08', 'i01'],
      a: {
        en: 'Human Practices decided the shape of this project rather than commenting on it. Professor Chen Wen-Liang told '
          + 'us in April that engineered bacteria in open soil cannot be defended and that we should keep them in a vessel '
          + 'and sell the consumable, which ended our transgenic rhizobacterium plan and is why a bioreactor exists; Dr. '
          + 'Jennifer Brophy replaced our kill switch with physical containment; Professor Chang Jo-Shu found that nothing '
          + 'in the design actually drove protectant across the membrane, which produced the pinch valve and the pressure '
          + 'and flow instruments. Across thirty-one stakeholders from 1 February to 20 October we deliberately kept the '
          + 'disagreements instead of averaging them, so farmers, academics, industry and regulators are reported '
          + 'separately. And it reaches down to protocol level: two questions from the floor at a fifty-person public forum '
          + 'changed work on the wiki, and an adviser voided one of our hydroponic runs over culture volume, which is '
          + 'published as void with the protocol that replaced it.',
        zh: '人文實踐在這個專案裡是決定形狀的，不是在旁邊評論。陳文亮教授四月時告訴我們，放進開放土壤的基改細菌'
          + '沒辦法辯護，應該把菌留在槽裡、賣消耗品——這結束了我們的基改根圈菌計畫，也是生物反應器存在的原因；'
          + 'Jennifer Brophy 博士把我們的自殺開關換成物理圍阻；張嘉修教授發現設計裡其實沒有東西把保護劑推過膜，'
          + '這就帶出了夾管閥以及壓力與流量儀器。在 2 月 1 日到 10 月 20 日的 31 位利害關係人之間，'
          + '我們刻意保留意見分歧而不是平均掉，所以農民、學界、產業與主管機關是分開報的。這也一路做到流程層級：'
          + '一場五十人公開論壇上現場的兩個提問改變了 wiki 上的工作，而一位顧問因為培養液體積問題判定我們一次水耕運轉作廢，'
          + '那次運轉就以「作廢」記著，旁邊放著取代它的流程。'
      }
    }
  ]
});
