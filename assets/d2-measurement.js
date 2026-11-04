AWARD({
  id: 'measurement',
  tag: { en: 'Special Award', zh: '特別獎' },
  name: { en: 'Best Measurement', zh: '最佳量測' },
  basis: {
    en: 'Four aspects from the judging handbook: whether other iGEM teams could repeat the measurement, '
      + 'whether the protocol is well described, whether it is useful to other projects, and whether controls '
      + 'were used to validate the process and calibrate units.',
    zh: '評審手冊列出四個面向：其他 iGEM 隊伍能不能重現這個量測、流程寫得夠不夠清楚、對別的專案有沒有用，'
      + '以及有沒有用對照組來驗證量測流程並校正單位。'
  },
  questions: [
    {
      q: {
        en: 'Could the measurements be repeated by other iGEM teams?',
        zh: '其他 iGEM 隊伍能重現這些量測嗎？'
      },
      flow: [
        { t: { en: 'US$235 to build', zh: '235 美元可以造一台' } },
        { t: { en: 'Three outsiders, two hours', zh: '三位外人，兩小時' },
          leaf: [{ en: 'what they got stuck on, we rewrote', zh: '他們卡住的地方我們重寫了' }] },
        { t: { en: 'Files, firmware, MIT', zh: '檔案、韌體、MIT 授權' },
          leaf: [{ en: 'DNPH scaled 20-fold down', zh: 'DNPH 縮小 20 倍' }] }
      ],
      ev: [
        { t: { en: 'The Slim in-line photometer is US$235.29 in parts and the Pro US$371.78.',
               zh: 'Slim 線上光度計零件成本 235.29 美元，Pro 是 371.78 美元。' }, src: 'hardware-photometer' },
        { t: { en: 'Three people outside the team built a Slim from our published files in about two hours.',
               zh: '三位團隊外的人照我們公布的檔案，約兩小時組好一台 Slim。' }, src: 'hardware-photometer' },
        { t: { en: 'The Light Plate Apparatus gives 24 cultures across 6 independently driven conditions for US$65.52.',
               zh: '光照培養盤用 65.52 美元就能跑 24 個培養、6 個獨立控制的條件。' }, src: 'hardware-diopal' },
        { t: { en: 'The DNPH activity assay was scaled down twentyfold onto a microplate, so it needs no dedicated spectrophotometer.',
               zh: 'DNPH 活性分析縮小 20 倍搬到微量盤上，不需要專用分光光度計。' }, src: 'measurement' },
        { t: { en: 'STLs, a priced bill of materials, firmware and analysis code are published under the MIT licence, and the raw instrument bursts are published too, so the eleven-algorithm comparison replays on the same data.',
               zh: 'STL 檔、標價的材料清單、韌體與分析程式都以 MIT 授權公布，連儀器的原始取樣叢也公布了，所以十一種演算法的比較可以用同一份資料重跑。' }, src: 'software' }
      ],
      figs: ['h01', 'h07', 'h10'],
      a: {
        en: 'Every measurement we make runs on instruments another team can build for the price of a reagent order: the '
          + 'Slim in-line photometer is US$235.29 in parts, the Pro US$371.78, and the twenty-four-culture light plate '
          + 'US$65.52. We tested that claim rather than asserting it — three people from outside the team built a Slim from '
          + 'our published files in about two hours, and the places they got stuck are the places the documentation was '
          + 'rewritten. The assays travel the same way: the DNPH activity assay was scaled down twentyfold onto a microplate '
          + 'so it needs no dedicated spectrophotometer, and the His-tag ELISA is a six-point competitive curve on standard '
          + 'plates. All of it is published — STLs, a priced bill of materials, firmware and analysis code under the MIT '
          + 'licence, and the raw instrument bursts, so our eleven-algorithm comparison can be replayed on the same data by '
          + 'anyone.',
        zh: '我們所有的量測都跑在別的隊伍用一次試劑訂單的錢就能造出來的儀器上：Slim 線上光度計零件 235.29 美元、'
          + 'Pro 371.78 美元、能跑 24 個培養的光照盤 65.52 美元。這句話我們是去驗證、不是去宣稱——三位團隊外的人'
          + '照我們公布的檔案約兩小時組好一台 Slim，他們卡住的地方就是我們把文件重寫的地方。分析方法也一樣能帶走：'
          + 'DNPH 活性分析縮小 20 倍搬到微量盤，不需要專用分光光度計；His-tag ELISA 是標準盤上的六點競爭曲線。'
          + '全部都公開——STL、標價材料清單、韌體、以 MIT 授權釋出的分析程式，還有儀器的原始取樣叢，'
          + '所以任何人都能用同一份資料重跑我們那十一種演算法的比較。'
      }
    },
    {
      q: {
        en: 'Is the protocol well described?',
        zh: '量測流程寫得夠清楚嗎？'
      },
      flow: [
        { t: { en: 'The formula, not the reading', zh: '給公式，不是給讀值' } },
        { t: { en: 'Blank on the run’s own medium', zh: '用那次運轉自己的培養基歸零' },
          leaf: [{ en: '4 dark + 16 lit, median ± 3 MAD', zh: '4 暗 + 16 亮，中位數 ± 3 MAD' }] },
        { t: { en: 'Range before result', zh: '先講量程，再講結果' },
          leaf: [{ en: '25 sheets, 3 of them null', zh: '25 份流程，其中 3 份沒有結果' }] }
      ],
      ev: [
        { t: { en: 'Optical density is published as a formula: OD = log₁₀[(S₀/R₀)/(S/R)] × 5, with the blank always taken on that run’s own medium.',
               zh: '光密度是以公式公布的：OD = log₁₀[(S₀/R₀)/(S/R)] × 5，而且歸零一律用那次運轉自己的培養基。' }, src: 'measurement' },
        { t: { en: 'Each point is a burst of 4 dark and 16 lit samples reduced by median ± 3 MAD; transmembrane pressure is defined as (feed + retentate)/2 − permeate.',
               zh: '每個資料點是 4 次暗讀加 16 次亮讀的一叢取樣，用中位數 ± 3 MAD 收斂；跨膜壓差定義為（進料 + 回流）/2 − 透過液。' }, src: 'measurement' },
        { t: { en: 'The ELISA states its valid band before its results: a six-point curve from 3 to 0.093 µg/mL at R² 0.98, quantitative between 31.6 and 95.1 %B/B₀.',
               zh: 'ELISA 先講有效區間才講結果：六點曲線從 3 到 0.093 µg/mL，R² 0.98，定量範圍在 31.6% 到 95.1% B/B₀ 之間。' }, src: 'measurement' },
        { t: { en: 'The DNPH assay is linear from 0 to 2.049 mM at R² 0.9995, read as the hydrazone at 540 nm.',
               zh: 'DNPH 分析在 0 到 2.049 mM 呈線性，R² 0.9995，以腙在 540 nm 讀取。' }, src: 'measurement' },
        { t: { en: 'Plant readouts go down to the tool: chlorophyll from an 80 percent acetone extract at A663 and A645, root length traced in ImageJ against a 150 mm ruler in the same frame. 25 protocol sheets are published, including three that produced no result.',
               zh: '植物端的讀值連工具都寫出來：葉綠素用 80% 丙酮萃取、讀 A663 與 A645，根長用 ImageJ 對著同一張照片裡的 150 mm 尺描繪。公布了 25 份流程，其中三份沒有做出結果。' }, src: 'experiments' }
      ],
      figs: ['m06', 'm01', 'm10'],
      a: {
        en: 'Each instrument is documented as an equation and a rule rather than as a reading: optical density is log base '
          + 'ten of S-zero over R-zero divided by S over R, times five; the blank is always taken on that run’s own '
          + 'medium; each point is a burst of four dark and sixteen lit samples reduced by a median plus or minus three '
          + 'median absolute deviations; and transmembrane pressure is the mean of feed and retentate minus permeate. The '
          + 'assays state their quantitative range before their results — the competitive His-tag ELISA is a six-point curve '
          + 'from 3 down to 0.093 micrograms per millilitre at R² 0.98, quantitative between 31.6 and 95.1 percent B over '
          + 'B-zero, and the DNPH assay is linear to 2.049 millimolar at R² 0.9995. The plant readouts go down to the tool: '
          + 'chlorophyll from an eighty percent acetone extract at A663 and A645, root length traced in ImageJ against a 150 '
          + 'millimetre ruler in the same frame. Twenty-five protocol sheets are published, and three of them are the ones '
          + 'that produced no result, because a protocol that failed is still a protocol someone else needs.',
        zh: '每一台儀器都是以一條式子加一條規則來記錄，而不是只給讀值：光密度是 log₁₀[(S₀/R₀)/(S/R)] × 5；'
          + '歸零一律用那次運轉自己的培養基；每個點是 4 次暗讀加 16 次亮讀的一叢取樣，以中位數 ± 3 MAD 收斂；'
          + '跨膜壓差是（進料 + 回流）的平均減去透過液。分析方法都先講定量範圍才講結果——His-tag 競爭 ELISA 是'
          + '從 3 到 0.093 µg/mL 的六點曲線、R² 0.98、定量區間 31.6% 到 95.1% B/B₀；DNPH 分析到 2.049 mM 都是線性、R² 0.9995。'
          + '植物端的讀值連工具都寫明：葉綠素用 80% 丙酮萃取讀 A663 與 A645，根長用 ImageJ 對著同一張照片裡的 150 mm 尺描繪。'
          + '我們公布了 25 份流程，其中三份正是沒有做出結果的那三份——因為一個失敗的流程，對別人來說一樣是需要的流程。'
      }
    },
    {
      q: {
        en: 'Is it useful to other projects?',
        zh: '這對其他專案有用嗎？'
      },
      flow: [
        { t: { en: 'The gate, not the estimator', zh: '關鍵在門檻，不在估計式' } },
        { t: { en: '97% caught, 0 clean lost', zh: '抓到 97%，乾淨值一個沒丟' },
          leaf: [{ en: '2.44 down to 0.016 OD', zh: '最差誤差 2.44 降到 0.016 OD' }] },
        { t: { en: 'Quantisation is everyone’s bug', zh: '量化問題誰都會中' },
          leaf: [{ en: '8 predictions, 5 failed, all reported', zh: '8 項預測、5 項沒成立，全部公布' }] }
      ],
      ev: [
        { t: { en: 'Eleven algorithms replayed on one logged raw dataset: in clean flow the largest gap between any two of eight estimators was 0.0039 OD, under a fifth of our own calibration scatter. The estimator is not the lever.',
               zh: '十一種演算法在同一份原始紀錄上重跑：流況乾淨時，八種估計式之間最大差距只有 0.0039 OD，不到我們自己校正散佈的五分之一。真正的槓桿不在估計式。' }, src: 'measurement' },
        { t: { en: 'The two acceptance gates are the lever: a spread gate flags 97 percent of bubble readings while rejecting none of the clean ones, and a jump gate cut the worst bubble error from 2.44 OD to 0.016.',
               zh: '真正的槓桿是兩道驗收門檻：散佈門檻標記了 97% 的氣泡讀值，而且沒有誤殺任何乾淨讀值；跳變門檻把最差的氣泡誤差從 2.44 OD 壓到 0.016。' }, src: 'measurement' },
        { t: { en: 'A bubble does not always darken the beam: on the beam-splitter build it let through up to 2.8 times more light, so any one-sided estimator is betting on its own optical geometry.',
               zh: '氣泡不一定讓讀值變暗：在分光式那台上它可以讓透光增加到 2.8 倍，所以任何單邊取值的估計式其實是在賭自己的光路幾何。' }, src: 'measurement' },
        { t: { en: 'A firmware quantisation any DIY OD meter can inherit: 91.5 percent of reference readings in the 434-hour run landed on an exact integer count, where one count is 0.067 OD, which collapses a MAD filter into a mode.',
               zh: '任何自製 OD 計都可能中的韌體量化問題：434 小時那次運轉裡 91.5% 的參考通道讀值落在整數計數上，而一個計數是 0.067 OD，這會讓 MAD 濾波退化成取眾數。' }, src: 'measurement' },
        { t: { en: 'Eight predictions were registered in the repository before the calibration run, and all eight are reported — including the five that were not supported.',
               zh: '八項預測在校正運轉前就寫進版本庫，八項全部公布——包括沒有成立的那五項。' }, src: 'measurement' }
      ],
      figs: ['m02', 'm03', 'm04', 'm05'],
      a: {
        en: 'The transferable result is not our instrument, it is where the error in a DIY optical density meter actually '
          + 'lives. Replaying eleven algorithms on the same logged raw bursts, the largest gap between any two of eight '
          + 'estimators in clean flow was 0.0039 OD, under a fifth of our own calibration scatter — so the estimator is not '
          + 'the lever, and the gate after it is: a spread gate flagged 97 percent of bubble-contaminated readings while '
          + 'rejecting none of the clean ones, and a jump gate cut the worst bubble error from 2.44 OD to 0.016. Two '
          + 'findings in that study apply to anyone building one of these. A bubble does not always darken the beam — on our '
          + 'beam-splitter build it let through up to 2.8 times more light, so a one-sided estimator is betting on its own '
          + 'optics. And firmware quantisation can silently disable the filter, as it did for us when 91.5 percent of '
          + 'reference readings fell on an exact integer count worth 0.067 OD. We registered eight predictions before the '
          + 'calibration run and report all eight, including the five that failed.',
        zh: '可以帶走的成果不是我們的儀器，而是自製 OD 計的誤差到底住在哪裡。十一種演算法在同一份原始取樣叢上重跑，'
          + '流況乾淨時八種估計式之間最大差距只有 0.0039 OD，不到我們自己校正散佈的五分之一——所以槓桿不在估計式，'
          + '而在它後面那道門檻：散佈門檻標記了 97% 受氣泡污染的讀值、沒有誤殺任何乾淨讀值，跳變門檻把最差的氣泡誤差'
          + '從 2.44 OD 壓到 0.016。這份研究裡有兩個發現對任何想造這種儀器的人都適用。第一，氣泡不一定讓光變暗——'
          + '在我們的分光式機型上它可以讓透光變成 2.8 倍，所以單邊取值的估計式是在賭自己的光路。第二，'
          + '韌體量化會讓濾波安靜地失效，我們就是這樣中的：91.5% 的參考讀值落在整數計數上，而一個計數值 0.067 OD。'
          + '我們在校正運轉前註冊了八項預測，八項全部公布，包括失敗的那五項。'
      }
    },
    {
      q: {
        en: 'Did the team use controls to validate the measurement process and calibrate units?',
        zh: '有沒有用對照組來驗證量測流程、校正單位？'
      },
      flow: [
        { t: { en: 'Two standards, one reference', zh: '兩種標準品，一台參考儀' } },
        { t: { en: 'Slope 1.001, median 3.8%', zh: '斜率 1.001、中位差 3.8%' },
          leaf: [{ en: 'control reads 4.5 to 5.5', zh: '陰性對照讀到 4.5–5.5' }] },
        { t: { en: 'Same plate, or no comparison', zh: '同一盤才比，否則不比' },
          leaf: [{ en: 'silica is not a cell', zh: '二氧化矽不是細胞' }] }
      ],
      ev: [
        { t: { en: 'Titania against a benchtop BioDrop on 23 August: a median 3.8 percent apart, R² 0.9999.',
               zh: '8 月 23 日以二氧化鈦對照桌上型 BioDrop：中位差 3.8%，R² 0.9999。' }, src: 'measurement' },
        { t: { en: 'A 41-dose silica ladder on 10 October: slope 1.001 against the same reference, R² 0.9874 (Pro), 0.9947 (Slim), 0.9956 (BioDrop).',
               zh: '10 月 10 日的 41 點二氧化矽梯度：對同一台參考儀斜率 1.001，R² 分別是 Pro 0.9874、Slim 0.9947、BioDrop 0.9956。' }, src: 'measurement' },
        { t: { en: 'The reference instrument has its own rule inside ours: dilute twofold above OD 1 and fourfold above OD 2 before reading the BioDrop.',
               zh: '參考儀自己的規則也寫進我們的流程：讀 BioDrop 前，OD 1 以上稀釋兩倍、OD 2 以上稀釋四倍。' }, src: 'hardware-photometer' },
        { t: { en: 'The control that hurts us is published: plasmid-free WB800 reads 4.5 to 5.5 µg/mL on the same ELISA, so we report apparent His-tagged protein and compare only arms run on one plate in one matrix.',
               zh: '對我們不利的那個對照也公布：不帶質體的 WB800 在同一支 ELISA 上讀到 4.5–5.5 µg/mL，所以我們報的是「表觀 His 標籤蛋白」，而且只比同一盤、同一基質裡跑的組別。' }, src: 'measurement' },
        { t: { en: 'The activity assay carries a cofactor control: adding pyridoxal-5-phosphate lifted the Csn arm 13.7 and the SamyQ arm 30.0 nmol of product above the host baseline. Stated limit: silica calibrates the instrument, not the cell, so above about OD 2.5 the number is a turbidity extrapolation.',
               zh: '活性分析帶自己的輔因子對照：加入磷酸吡哆醛後，Csn 組比宿主基線高 13.7、SamyQ 組高 30.0 nmol 產物。明說的限制：二氧化矽校的是儀器、不是細胞，所以 OD 約 2.5 以上的數字是濁度外推。' }, src: 'measurement' }
      ],
      figs: ['m01', 'm06', 'm08'],
      a: {
        en: 'Both instruments are calibrated against a benchtop reference on two independent particle standards: titania on '
          + '23 August put the Pro a median 3.8 percent from the BioDrop at R² 0.9999, and a 41-dose silica ladder on 10 '
          + 'October gave a slope of 1.001 against the same reference, with R² of 0.9874 for the Pro, 0.9947 for the Slim and '
          + '0.9956 for the BioDrop itself. The reference has its own protocol inside ours, including the dilution rule above '
          + 'OD 1, so the comparison is fair at every rung. On the biology side we publish the control that hurts us: '
          + 'plasmid-free WB800 reads 4.5 to 5.5 micrograms per millilitre on the same ELISA, so we report apparent '
          + 'His-tagged protein and compare only arms run on one plate in one matrix — which is how the lumen-against-shell '
          + 'result at 10.7 and 10.5 survives while an absolute titre does not. The activity assay carries its own cofactor '
          + 'control, where adding pyridoxal-5-phosphate lifted the two signal-peptide arms by 13.7 and 30.0 nanomoles of '
          + 'product above the host baseline. And we name the limit of the whole ladder: silica calibrates the instrument, '
          + 'not the cell, so above about OD 2.5 the number is a turbidity extrapolation.',
        zh: '兩台儀器都用兩種獨立的顆粒標準品對照桌上型參考儀校正：8 月 23 日的二氧化鈦讓 Pro 與 BioDrop 中位差 3.8%、R² 0.9999；'
          + '10 月 10 日的 41 點二氧化矽梯度對同一台參考儀斜率 1.001，R² 分別是 Pro 0.9874、Slim 0.9947、BioDrop 本身 0.9956。'
          + '參考儀自己的流程也包在我們的流程裡，包括 OD 1 以上的稀釋規則，所以每一階的比較都是公平的。生物端我們公布了'
          + '對自己不利的那個對照：不帶質體的 WB800 在同一支 ELISA 上讀到 4.5–5.5 µg/mL，所以我們報的是表觀 His 標籤蛋白，'
          + '而且只比同一盤、同一基質裡的組別——這就是為什麼管內對殼側 10.7 比 10.5 的結果站得住，而絕對效價站不住。'
          + '活性分析帶自己的輔因子對照：加入磷酸吡哆醛後，兩種訊號肽組別分別比宿主基線高 13.7 與 30.0 nmol 產物。'
          + '我們也點出整條梯度的限制：二氧化矽校的是儀器、不是細胞，所以 OD 約 2.5 以上的數字是濁度外推。'
      }
    }
  ]
});
