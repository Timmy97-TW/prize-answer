AWARD({
  id: 'general',
  tag: { en: 'Project rubric', zh: 'Project 評分項' },
  name: { en: 'Finalist Project Evaluation', zh: '入圍隊伍專案評分' },
  basis: {
    en: 'The nine questions in the Project section of the judging ballot. The handbook calls this section the main '
      + 'determinant for choosing finalists, and finalists are picked on a weighted average of Project, Presentation '
      + 'and Wiki. These nine carry more keywords, more context and more figures than the award questions, because '
      + 'each one is a whole project in a single answer.',
    zh: '評審票上 Project 區塊的九個問題。手冊說這個區塊是挑選入圍隊伍的主要依據，'
      + '而入圍名單是由 Project、Presentation、Wiki 三項的加權平均決定的。這九題的關鍵字、脈絡與圖表都比獎項題多，'
      + '因為每一題都是用一段回答講完整個專案。'
  },
  questions: [
    {
      q: { en: 'How impressive is this project?', zh: '這個專案有多令人印象深刻？' },
      ask: {
        en: 'What the judge is testing: scale and scope. Not whether one result is clean, but whether the team '
          + 'attempted something whole and got most of the way across it.',
        zh: '評審在測的是：規模與廣度。不是某一個結果乾不乾淨，而是這支隊伍有沒有企圖做完整的一件事，而且走了大半。'
      },
      flow: [
        { t: { en: 'One wall does three jobs', zh: '一道膜做三件事' },
          leaf: [{ en: 'make, recover, contain', zh: '生產、回收、圍阻' }] },
        { t: { en: 'The whole chain is hardware', zh: '整條鏈都是實體' },
          leaf: [{ en: 'forecast → light → membrane → leaf', zh: '預報 → 光 → 膜 → 葉片' }] },
        { t: { en: 'Instruments built, not bought', zh: '儀器是造的，不是買的' },
          leaf: [{ en: '434 h read in line', zh: '線上連讀 434 小時' }] },
        { t: { en: '35 parts, 31 stakeholders', zh: '35 個元件、31 位利害關係人' },
          leaf: [{ en: '82-page hardware notebook', zh: '82 頁硬體筆記本' }] }
      ],
      ev: [
        { t: { en: 'Production, recovery and containment are one unit operation on a single 0.2 µm hollow-fibre wall — nothing is lysed and there is no separate downstream step.',
               zh: '生產、回收與圍阻在同一道 0.2 µm 中空纖維膜上是一個單元操作——不必破菌，也沒有另一段下游純化。' }, src: 'biomanufacturing' },
        { t: { en: 'The chain exists as hardware, not as a diagram: forecast, green light, engineered B. subtilis, membrane, permeate, plant.',
               zh: '整條鏈是實體存在的，不是一張示意圖：預報、綠光、工程化枯草桿菌、膜、透過液、植物。' }, src: 'description' },
        { t: { en: 'The instruments were built because none are sold at one litre, and one of them read a culture for 434 hours in line with no sample withdrawn.',
               zh: '儀器是因為一公升尺度上沒人賣才自己造的，其中一台連續線上讀了一個培養 434 小時、一次樣都沒抽。' }, src: 'results' },
        { t: { en: 'The dry lab is a project of its own: a protein design pipeline with molecular dynamics behind it, and a yield model whose 2026 forecast was frozen before the official numbers were published.',
               zh: '乾式實驗本身就是一個專案：有分子動力學支撐的蛋白質設計流程，以及一個在官方數字公布前就凍結 2026 預報的產量模型。' }, src: 'protein-design' },
        { t: { en: '35 parts deposited on the Registry from a 41-part collection, built across four Golden Gate assembly levels.',
               zh: '41 個元件的收藏中有 35 個存入 iGEM 元件庫，分布在四個 Golden Gate 組裝層級上。' }, src: 'parts' },
        { t: { en: '31 stakeholder engagements, a published signal-processing study with eight pre-registered predictions, and an 82-page hardware notebook.',
               zh: '31 次利害關係人接觸、一份公開的訊號處理研究（含八項預註冊預測），以及一本 82 頁的硬體筆記本。' }, src: 'human-practices' }
      ],
      figs: ['c08', 'q10', 'r01', 'd03', 'p03', 'w06'],
      a: {
        en: 'What is unusual here is not one result but the fact that the whole chain exists in hardware: a weather '
          + 'forecast, a green LED, engineered Bacillus subtilis, a hollow-fibre wall, a cell-free permeate and a plant. '
          + 'That wall is the design idea — production, recovery and containment are one unit operation on a single 0.2 '
          + 'micrometre membrane, so nothing is lysed and there is no separate downstream step to validate. Because '
          + 'nothing is sold at this scale, the measurement half had to be built too: an in-line photometer that read a '
          + 'culture for 434 hours with no sample withdrawn, and a signal-processing study whose eight predictions were '
          + 'registered before the calibration run. Around it sit 35 parts deposited on the Registry from a 41-part '
          + 'collection, a protein design pipeline with molecular dynamics behind it, 31 stakeholder engagements, and an '
          + '82-page hardware notebook.',
        zh: '這裡不尋常的地方不是某一個結果，而是整條鏈真的以實體存在：一份天氣預報、一顆綠色 LED、'
          + '工程化的枯草桿菌、一道中空纖維膜、一份無細胞透過液，以及一棵植物。那道膜就是設計本身——'
          + '生產、回收與圍阻在同一道 0.2 µm 膜上是一個單元操作，所以不必破菌，也沒有另一段下游純化需要驗證。'
          + '因為這個尺度上什麼都買不到，量測這一半也得自己造：一台線上光度計連讀了一個培養 434 小時、一次樣都沒抽，'
          + '以及一份在校正運轉前就把八項預測註冊下來的訊號處理研究。圍繞著它的是 41 個元件收藏中存入元件庫的 35 個、'
          + '一條有分子動力學支撐的蛋白質設計流程、31 次利害關係人接觸，和一本 82 頁的硬體筆記本。'
      }
    },
    {
      q: { en: 'Did the project work, or is it likely to work?', zh: '這個專案成功了嗎，或者看起來會成功嗎？' },
      ask: {
        en: 'What the judge is testing: whether the claims are carried by data. Answer link by link, and name the links '
          + 'that are not joined yet — a team that volunteers its two open gaps is more believable than one that does not.',
        zh: '評審在測的是：主張背後有沒有數據撐著。一個環節一個環節回答，並且主動說出還沒接上的那幾環——'
          + '一支會自己講出兩個缺口的隊伍，比不講的可信。'
      },
      flow: [
        { t: { en: 'Parts verified', zh: '元件驗證過' },
          leaf: [{ en: '3 clones × 3 junctions, 10,293 bp', zh: '3 株菌 × 3 個接點、10,293 bp' }] },
        { t: { en: 'Protein on both sides of the wall', zh: '膜兩側都有蛋白質' },
          leaf: [{ en: '35–48 kDa, 10.7 against 10.5', zh: '35–48 kDa、10.7 對 10.5' }] },
        { t: { en: 'Enzyme turns substrate over', zh: '酵素真的在轉受質' },
          leaf: [{ en: '5 to 8.4 U/mg, 18 to 72 h', zh: '5 到 8.4 U/mg，18 到 72 小時' }] },
        { t: { en: 'The plant assay sees a rescue', zh: '植物分析看得見救援' },
          leaf: [{ en: '8.7× with the reference compound', zh: '參考化合物做到 8.7 倍' }] },
        { t: { en: 'Two links still open', zh: '還有兩環沒接上' },
          leaf: [{ en: 'forecast→light, permeate→irrigation', zh: '預報→光、透過液→灌溉' }] }
      ],
      ev: [
        { t: { en: 'The device assembled: a Level 2 construct at 10,293 bp, with three independent clones each screened across three internal junctions at 375, 632 and 661 bp.',
               zh: '裝置組起來了：Level 2 構築 10,293 bp，三株獨立的菌各自在 375、632、661 bp 三個內部接點都篩到正確大小。' }, src: 'engineering' },
        { t: { en: 'Expression and secretion shown: anti-His bands at 35 to 48 kDa in cell lysate and in both lumen and shell medium between 14 and 44 hours.',
               zh: '表現與分泌都看到了：anti-His 在細胞裂解液、管內與殼側培養液（14 到 44 小時）都出現 35 到 48 kDa 的帶。' }, src: 'results' },
        { t: { en: 'The reactor makes product that crosses the barrier: 3.4 to 6.5 µg/mL ACC deaminase on the shell side through both October runs, reading 10.7 inside the fibres against 10.5 outside.',
               zh: '反應器做出的產物確實穿過屏障：十月兩次運轉殼側都有 3.4 到 6.5 µg/mL 的 ACC 去胺酶，纖維內 10.7 對纖維外 10.5。' }, src: 'results' },
        { t: { en: 'The protein is not merely present, it works: specific activity holds between 5 and 8.4 U/mg from 18 hours to 72, measured by the DNPH assay rather than by ELISA.',
               zh: '蛋白質不只是在那裡，而是會做事：比活性從 18 小時到 72 小時維持在 5 到 8.4 U/mg，而且是用 DNPH 分析量的，不是 ELISA。' }, src: 'results' },
        { t: { en: 'The plant assay is sensitive enough to see a rescue — trehalose at 5 mM gave about 8.7-fold chlorophyll at 100 mM NaCl — and our own ACC deaminase pre-treatment held about 70 percent more chlorophyll, 1.74 against 1.03 mg/g.',
               zh: '植物端的分析靈敏到看得見救援效果——5 mM 海藻糖在 100 mM NaCl 下讓葉綠素約為 8.7 倍——而我們自己的 ACC 去胺酶前處理保住了約 70% 更多的葉綠素，1.74 對 1.03 mg/g。' }, src: 'plant' },
        { t: { en: 'Two links are not demonstrated end to end and we name them: no forecast has ever driven a light that reached a culture, and every plant dose was applied by hand rather than through the irrigation line.',
               zh: '有兩個環節還沒有頭尾串起來，我們直接點名：從來沒有一次預報真的驅動一盞照到培養液的燈，而所有植物劑量都是手動施用，不是走灌溉管線。' }, src: 'software' }
      ],
      figs: ['c01', 'w12', 'x01', 'w13', 'p09', 'q04'],
      a: {
        en: 'The individual links work and we can show each one. The device assembled — a 10,293 base-pair Level 2 '
          + 'construct with three independent clones screened across three internal junctions — and the protein is '
          + 'expressed and secreted, with anti-His bands at 35 to 48 kilodaltons in cell lysate and in both lumen and '
          + 'shell medium. The reactor then makes product that crosses the barrier, 3.4 to 6.5 micrograms per millilitre '
          + 'on the shell side, and the protein works rather than merely being present: specific activity holds between 5 '
          + 'and 8.4 units per milligram from eighteen hours out to seventy-two. On plants the assay is sensitive enough '
          + 'to see a rescue, with trehalose giving about 8.7-fold chlorophyll at 100 millimolar salt and our own ACC '
          + 'deaminase pre-treatment holding about 70 percent more. Two links are not yet demonstrated end to end and we '
          + 'say which: no forecast has driven a light that reached a culture, and every plant dose was applied by hand '
          + 'rather than through the irrigation line.',
        zh: '每一個環節都會動，而且我們每一個都拿得出證據。裝置組起來了——10,293 bp 的 Level 2 構築，'
          + '三株獨立的菌各自在三個內部接點篩過——蛋白質也表現並分泌出來了，anti-His 在細胞裂解液、'
          + '管內與殼側培養液都出現 35 到 48 kDa 的帶。反應器做出的產物確實穿過屏障，殼側有 3.4 到 6.5 µg/mL；'
          + '而且這個蛋白質是會做事的，不只是存在：比活性從 18 小時到 72 小時維持在 5 到 8.4 U/mg。'
          + '植物端的分析靈敏到看得見救援效果，海藻糖在 100 mM 鹽下讓葉綠素約為 8.7 倍，'
          + '我們自己的 ACC 去胺酶前處理也保住了約 70% 更多的葉綠素。有兩個環節還沒有頭尾串起來，我們也說清楚是哪兩個：'
          + '沒有一次預報真的驅動過照到培養液的燈，而所有植物劑量都是手動施用，不是走灌溉管線。'
      }
    },
    {
      q: { en: 'Is the project likely to have an impact?', zh: '這個專案可能產生影響力嗎？' },
      ask: {
        en: 'What the judge is testing: whether the problem is real and sized, and whether this design fits the people '
          + 'who have it. Impact is a number about farms, not an adjective about agriculture.',
        zh: '評審在測的是：問題是不是真的、有沒有量過，以及這個設計合不合那些真正遇到問題的人。'
          + '影響力是一個關於農場的數字，不是一個關於農業的形容詞。'
      },
      flow: [
        { t: { en: '10% of yield per 1 °C night', zh: '夜溫每 1 °C 少一成產量' },
          leaf: [{ en: 'minimum temperature up 2 °C', zh: '最低溫已上升 2 °C' }] },
        { t: { en: '99.2% of farms under 2 ha', zh: '99.2% 的農場不到 2 公頃' },
          leaf: [{ en: 'so the unit is one litre', zh: '所以機器做成一公升' }] },
        { t: { en: 'The forecast already beats the baseline', zh: '預報已經贏過基線' },
          leaf: [{ en: 'blind 7.9% against 8.8%', zh: '盲測 7.9% 對 8.8%' }] },
        { t: { en: 'No cold chain', zh: '不需要冷鏈' },
          leaf: [{ en: '226 ha to break even', zh: '226 公頃損益兩平' }] }
      ],
      ev: [
        { t: { en: 'The stress is measurable and growing: about 10 percent rice yield loss per degree of night warming, with November to December minimum temperature up by as much as 2 °C between 1961–1990 and 2015–2024.',
               zh: '這個逆境可量測而且在惡化：夜溫每升高 1 °C 約損失 10% 稻作產量，而 11 月到 12 月的最低溫在 1961–1990 與 2015–2024 之間最多上升了 2 °C。' }, src: 'geospatial-analysis' },
        { t: { en: 'The unit is small because the farms are: 99.2 percent of Taiwan’s farms are under two hectares and they hold 85.3 percent of the farmland.',
               zh: '機器小是因為農場小：台灣 99.2% 的農場不到兩公頃，而它們占了 85.3% 的農地。' }, src: 'geospatial-analysis' },
        { t: { en: 'The model already beats the baseline on real data: 32 percent less county prediction error on the second crop across 32,767 candidate stress combinations.',
               zh: '模型在真實資料上已經贏過基線：在 32,767 種候選逆境組合中，第二期作的縣市預測誤差少 32%。' }, src: 'model' },
        { t: { en: 'The strongest version of that is a blind test: the 2026 first-crop forecast was frozen on 26 September, before the official yields were published, and came in at 7.9 percent error against 8.8 for the baseline.',
               zh: '最強的版本是一次盲測：2026 第一期作預報在 9 月 26 日、官方產量公布之前就凍結，最後誤差 7.9%，基線是 8.8%。' }, src: 'model' },
        { t: { en: 'Point-of-use manufacture removes the cold chain and the shelf life a bottled biostimulant carries, which is what lets a two-hectare farm buy a consumable instead of a product.',
               zh: '在使用地點製造，免掉了瓶裝生物刺激劑的冷鏈與保存期限，這才讓一座兩公頃的農場買的是消耗品而不是一瓶產品。' }, src: 'biomanufacturing' },
        { t: { en: 'The commercial case is sized rather than asserted: break-even at about 226 hectares, farmer price about US$5,550 in year one and US$90 a year after.',
               zh: '商業規模是算出來的、不是宣稱的：約 226 公頃損益兩平，農民第一年約 5,550 美元，之後每年 90 美元。' }, src: 'entrepreneurship' }
      ],
      figs: ['p07', 'g02', 'd02', 'd01', 's03', 'x06'],
      a: {
        en: 'The need is specific and quantified: around 10 percent of rice yield is lost per degree of night warming, '
          + 'and Taiwan’s November-to-December minimum temperature has risen by as much as two degrees between '
          + '1961–1990 and 2015–2024. The design is aimed at the farms that actually exist there, where 99.2 percent are '
          + 'under two hectares and hold 85.3 percent of the farmland, which is why the unit is one litre rather than '
          + 'industrial. The forecasting half is already useful on its own, and we tested it the hard way: the 2026 '
          + 'first-crop prediction was frozen on 26 September, before the official yields were published, and came in at '
          + '7.9 percent error against 8.8 for the baseline. Making the protectant at the point of use removes the cold '
          + 'chain and the shelf life a bottled product carries, and the business case is sized rather than asserted, '
          + 'breaking even at about 226 hectares at a farmer price of roughly US$5,550 in year one and US$90 a year after.',
        zh: '需求很具體也量化過：夜溫每升高 1 °C 約損失一成稻作產量，而台灣 11 月到 12 月的最低溫在 1961–1990 與'
          + '2015–2024 之間最多上升了兩度。設計是瞄準那裡真實存在的農場：99.2% 不到兩公頃，卻占了 85.3% 的農地，'
          + '這就是為什麼機器是一公升、不是工業規格。預報這一半本身就已經有用，而且我們是用最硬的方式測的：'
          + '2026 第一期作的預測在 9 月 26 日、官方產量公布之前就凍結，最後誤差 7.9%，基線是 8.8%。'
          + '在使用地點製造保護劑免掉了瓶裝產品的冷鏈與保存期限；商業規模是算出來的、不是宣稱的：'
          + '約 226 公頃損益兩平，農民第一年約 5,550 美元、之後每年 90 美元。'
      }
    },
    {
      q: {
        en: 'How well were engineering principles used — design-build-test cycles, standards, modularity?',
        zh: '工程原則用得如何——設計建造測試循環、標準化、模組化？'
      },
      ask: {
        en: 'What the judge is testing: whether the cycles are real. A DBTL diagram proves nothing; a chain of named '
          + 'failures, each with the change it forced, proves everything. Lead with the thing that went wrong.',
        zh: '評審在測的是：這些循環是不是真的。畫一張 DBTL 圖什麼也證明不了；一串具名的失敗、每一個都附上它逼出的改動，'
          + '才證明得了。先講出錯的那件事。'
      },
      flow: [
        { t: { en: 'MoClo 2.0 gave no usable clone', zh: 'MoClo 2.0 沒做出可用菌落' },
          leaf: [{ en: 'so the levels split: BbsI / BsaI', zh: '於是層級拆開：BbsI / BsaI' }] },
        { t: { en: 'Marker clash found and fixed', zh: '標記衝突找到並解決' },
          leaf: [{ en: 'module 1 rebuilt, 11 of 12', zh: '模組 1 重建，12 中 11' }] },
        { t: { en: 'Level 2 closes at 10,293 bp', zh: 'Level 2 收在 10,293 bp' } },
        { t: { en: 'Four reactor prototypes', zh: '四版反應器原型' },
          leaf: [{ en: 'every change names its problem', zh: '每個改動都寫明它解決什麼' }] },
        { t: { en: 'Predictions registered first', zh: '預測先註冊' },
          leaf: [{ en: '0.2986 predicted, 0.286 measured', zh: '預測 0.2986、實測 0.286' }] }
      ],
      ev: [
        { t: { en: 'The cloning track is a documented failure chain: MoClo 2.0 gave no usable Level 1 clone, so the level split moved to BbsI and BsaI.',
               zh: '選殖這條線是一串有記錄的失敗：MoClo 2.0 沒有做出可用的 Level 1 菌落，於是層級改用 BbsI 與 BsaI 切分。' }, src: 'engineering' },
        { t: { en: 'An ampicillin marker clash between the intermediate and Level 1 vectors was found and fixed; module 1 was then rebuilt and screened at 11 of 12 colonies; the Level 2 device closed at 10,293 bp.',
               zh: '中間載體與 Level 1 載體之間的安比西林標記衝突被找出來並解決；模組 1 重建後 12 株篩到 11 株；Level 2 裝置以 10,293 bp 收尾。' }, src: 'engineering' },
        { t: { en: 'Negative results ended lines of work rather than being repeated: AmilCP gave A588 0.081 against 0.082 without it, we reasoned to a Sec-pathway folding bottleneck, tried GanA, failed that too, and then stopped building reporters and measured the protectants directly.',
               zh: '陰性結果是用來結束一條路線、不是拿來重做：AmilCP 的 A588 是 0.081，沒有它是 0.082；我們推到 Sec 路徑的摺疊瓶頸，改試 GanA 也失敗，然後就不再做報告基因，直接量保護劑本身。' }, src: 'engineering' },
        { t: { en: 'The bioreactor went through four prototypes and each change names the problem it answers: the pinch valve, a smaller module, the automatic pH loop, a single mainboard.',
               zh: '生物反應器走過四版原型，每個改動都寫明它解決什麼問題：夾管閥、更小的膜模組、自動 pH 迴路、單一主板。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Standards are used as standards: Golden Gate levels with BbsI/BpiI, BsaI and one shuttle plasmid, plus B0015, RiboJ, and 14 earlier Registry parts reused rather than rebuilt.',
               zh: '標準是當標準在用：Golden Gate 的 BbsI/BpiI、BsaI 與單一穿梭質體層級，加上 B0015、RiboJ，以及 14 個直接重用而不是重做的既有元件。' }, src: 'parts' },
        { t: { en: 'Hypotheses were committed before the test: a growth rate pre-registered at 0.2986 h⁻¹ with a 90 percent interval, met at 0.286 ± 0.010 thirteen days later, and eight algorithm predictions registered before the calibration run with all eight reported.',
               zh: '假設在測試前就定下來：生長速率預註冊為 0.2986 h⁻¹ 並附 90% 區間，十三天後實測 0.286 ± 0.010；八項演算法預測在校正運轉前註冊，八項全部公布。' }, src: 'software' }
      ],
      figs: ['c04', 'c03', 'c10', 'c02', 'v01', 'v10'],
      a: {
        en: 'Design-build-test-learn is visible here as a chain of named failures rather than as a diagram. In cloning, '
          + 'the MoClo 2.0 kit produced no usable Level 1 clone, so the level split moved to BbsI and BsaI; an ampicillin '
          + 'marker clash between the intermediate and Level 1 vectors was found and fixed; module 1 was rebuilt and '
          + 'screened at eleven of twelve colonies; and the Level 2 device closed at 10,293 base pairs with three '
          + 'junctions verified in three independent clones. The learn step also ended lines of work: when AmilCP never '
          + 'coloured anything we reasoned to a Sec-pathway folding bottleneck, tried GanA, failed that too, and then '
          + 'stopped building reporters and measured the protectants directly. The bioreactor ran four prototypes and '
          + 'every change states the problem it answers — a pinch valve because flow alone only recirculates, a smaller '
          + 'module, an automatic pH loop, a single mainboard to kill sensor noise. Standards are used as standards, with '
          + 'Golden Gate levels, B0015, RiboJ and fourteen earlier Registry parts reused, and where we could we committed '
          + 'the prediction before the test: a growth rate registered at 0.2986 per hour and met at 0.286 ± 0.010 thirteen '
          + 'days later, and eight algorithm predictions registered before the calibration run, all eight reported '
          + 'including the five that failed.',
        zh: '設計—建造—測試—學習在這裡是一串具名的失敗，不是一張流程圖。選殖方面，MoClo 2.0 做不出可用的 Level 1 菌落，'
          + '於是層級改用 BbsI 與 BsaI 切分；中間載體與 Level 1 載體之間的安比西林標記衝突被找出來並解決；'
          + '模組 1 重建後 12 株篩到 11 株；Level 2 裝置以 10,293 bp 收尾，三個接點在三株獨立菌上都驗證過。'
          + '「學習」這一步也用來結束路線：AmilCP 從頭到尾沒讓任何東西變色，我們推到 Sec 路徑的摺疊瓶頸，'
          + '改試 GanA 也失敗，之後就不再做報告基因，直接量保護劑本身。生物反應器跑了四版原型，'
          + '每個改動都寫明它要解決什麼——夾管閥是因為單靠流量只是在循環、更小的膜模組、自動 pH 迴路、'
          + '用單一主板消掉感測雜訊。標準是當標準在用：Golden Gate 層級、B0015、RiboJ，以及 14 個重用的既有元件；'
          + '而能先承諾的地方我們就先承諾：生長速率註冊為 0.2986 h⁻¹，十三天後實測 0.286 ± 0.010；'
          + '八項演算法預測在校正運轉前就註冊，八項全部公布，包括失敗的那五項。'
      }
    },
    {
      q: {
        en: 'How thoughtful and thorough was the team’s consideration of human practices?',
        zh: '團隊對人文實踐的思考有多縝密、多全面？'
      },
      ask: {
        en: 'What the judge is testing: whether Human Practices changed the project or decorated it. The proof is a '
          + 'design decision you would not have made on your own, named with the person who caused it.',
        zh: '評審在測的是：人文實踐是改變了這個專案，還是只是裝飾。證據是一個你們自己想不到的設計決定，'
          + '而且說得出是誰造成的。'
      },
      flow: [
        { t: { en: 'Vessel, not soil', zh: '留在槽裡，不放進土裡' },
          leaf: [{ en: 'Prof. Chen, April — the bioreactor exists because of this', zh: '陳教授，四月——生物反應器因此存在' }] },
        { t: { en: 'No kill switch', zh: '拿掉自殺開關' },
          leaf: [{ en: 'Dr. Brophy — the membrane becomes the containment', zh: 'Brophy 博士——膜成為圍阻' }] },
        { t: { en: 'Nothing drove it across', zh: '沒有東西把它推過膜' },
          leaf: [{ en: 'Prof. Chang — the pinch valve exists because of this', zh: '張教授——夾管閥因此存在' }] },
        { t: { en: 'Down to protocol level', zh: '一路做到流程層級' },
          leaf: [
            { en: 'a run voided over culture volume', zh: '一次運轉因培養液體積作廢' },
            { en: 'two floor questions changed the wiki', zh: '兩個現場提問改了 wiki' }
          ] }
      ],
      ev: [
        { t: { en: 'Professor Chen Wen-Liang, April: engineered bacteria released into open soil cannot be defended — keep them in a vessel and sell the consumable. That ended the transgenic rhizobacterium plan and created the bioreactor.',
               zh: '陳文亮教授，四月：放進開放土壤的基改細菌沒辦法辯護——把菌留在槽裡、賣消耗品。這結束了基改根圈菌計畫，也創造了生物反應器。' }, src: 'human-practices' },
        { t: { en: 'Dr. Jennifer Brophy, 18 April: physical containment over a kill switch, because a switch is DNA under selection. The membrane became the barrier, which set the instrument list.',
               zh: 'Jennifer Brophy 博士，4 月 18 日：用物理圍阻而不是自殺開關，因為開關是受選擇壓力的 DNA。膜因此成為屏障，也決定了儀器清單。' }, src: 'human-practices' },
        { t: { en: 'Professor Chang Jo-Shu, 4 September: nothing in the design drove protectant across the membrane, which produced the pinch valve and the pressure and flow instruments.',
               zh: '張嘉修教授，9 月 4 日：設計裡沒有東西把保護劑推過膜——這帶出了夾管閥，以及壓力與流量儀器。' }, src: 'human-practices' },
        { t: { en: 'Industry gave us a view the academics did not: CH Biotech’s own breakdown of how Taiwan splits fertilizers from pesticides is what told us which regulatory door to walk through.',
               zh: '產業給了我們學界給不了的視角：正瀚生技自己整理的「台灣如何區分肥料與農藥」，才讓我們知道該敲哪一扇法規的門。' }, src: 'laws-and-regulations' },
        { t: { en: '31 stakeholders from 1 February to 20 October across farmers, academics, industry, regulators and the public, with the disagreements kept rather than averaged.',
               zh: '2 月 1 日到 10 月 20 日共 31 位利害關係人，涵蓋農民、學界、產業、主管機關與公眾，而且意見分歧是保留而不是平均掉。' }, src: 'human-practices' },
        { t: { en: 'It reaches protocol level: a hydroponic run was voided by an adviser because culture volume was not standardised across arms, and two questions from the floor at a 50-person public forum changed work on the wiki.',
               zh: '它一路做到流程層級：一次水耕運轉因為各組培養液體積沒有標準化而被顧問判定作廢，而一場五十人公開論壇上現場的兩個提問改變了 wiki 上的工作。' }, src: 'plant' }
      ],
      figs: ['i01', 'l02', 'x05', 'x04', 'p05', 'x07'],
      a: {
        en: 'Human Practices decided the shape of this project rather than commenting on it. Professor Chen Wen-Liang '
          + 'told us in April that engineered bacteria in open soil cannot be defended and that we should keep them in a '
          + 'vessel and sell the consumable, which ended our transgenic rhizobacterium plan and is why a bioreactor '
          + 'exists; Dr. Jennifer Brophy replaced our kill switch with physical containment, which made the membrane the '
          + 'barrier and therefore decided what the instruments have to measure; Professor Chang Jo-Shu found that '
          + 'nothing in the design actually drove protectant across that membrane, which produced the pinch valve. Across '
          + 'thirty-one stakeholders from 1 February to 20 October we deliberately kept the disagreements instead of '
          + 'averaging them, so farmers, academics, industry and regulators are reported separately — and industry gave '
          + 'us what the academics could not, since CH Biotech’s own breakdown of how Taiwan splits fertilizers from '
          + 'pesticides is what told us which regulatory door to walk through. It reaches down to protocol level: two '
          + 'questions from the floor at a fifty-person public forum changed work on the wiki, and an adviser voided one '
          + 'of our hydroponic runs over culture volume, which is published as void with the protocol that replaced it.',
        zh: '人文實踐在這個專案裡是決定形狀的，不是在旁邊評論。陳文亮教授四月時告訴我們，放進開放土壤的基改細菌'
          + '沒辦法辯護，應該把菌留在槽裡、賣消耗品——這結束了我們的基改根圈菌計畫，也是生物反應器存在的原因；'
          + 'Jennifer Brophy 博士把我們的自殺開關換成物理圍阻，讓膜成為屏障，也因此決定了儀器要量什麼；'
          + '張嘉修教授發現設計裡其實沒有東西把保護劑推過那道膜，這就帶出了夾管閥。在 2 月 1 日到 10 月 20 日的'
          + '31 位利害關係人之間，我們刻意保留意見分歧而不是平均掉，所以農民、學界、產業與主管機關是分開報的——'
          + '而產業給了我們學界給不了的東西：正瀚生技自己整理的「台灣如何區分肥料與農藥」，才讓我們知道該敲哪一扇法規的門。'
          + '它也一路做到流程層級：一場五十人公開論壇上現場的兩個提問改變了 wiki 上的工作，'
          + '而一位顧問因為培養液體積問題判定我們一次水耕運轉作廢，那次運轉就以「作廢」記著，旁邊放著取代它的流程。'
      }
    }
  ]
});
