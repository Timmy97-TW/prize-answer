AWARD({
  id: 'measurement',
  tag: { en: 'Special Award', zh: '特別獎' },
  name: { en: 'Best Measurement', zh: '最佳量測' },
  basis: {
    en: 'Four aspects from the judging handbook: whether other iGEM teams could repeat the measurement, '
      + 'whether the protocol is well described, whether it is useful to other projects, and whether controls '
      + 'were used to validate the process and calibrate units. The Measurement page answers these four in its '
      + 'own conclusion, and the answers below follow it.',
    zh: '評審手冊列出四個面向：其他 iGEM 隊伍能不能重現這個量測、流程寫得夠不夠清楚、對別的專案有沒有用，'
      + '以及有沒有用對照組來驗證量測流程並校正單位。Measurement 頁面在它自己的結論裡就逐條回答了這四點，'
      + '下面的回答跟著它走。'
  },
  questions: [
    {
      q: {
        en: 'Could the measurements be repeated by other iGEM teams?',
        zh: '其他 iGEM 隊伍能重現這些量測嗎？'
      },
      flow: [
        { t: { en: 'Materials, quantity, steps in order', zh: '材料、用量、步驟順序' },
          leaf: [{ en: 'manufacturer and catalogue number', zh: '廠牌與型號' }] },
        { t: { en: 'Three classmates built it', zh: '三位同學真的組起來了' } },
        { t: { en: 'Raw bursts and the replay script', zh: '原始取樣叢與重跑腳本' },
          leaf: [
            { en: 'four working days on any photometer', zh: '任何光度計四個工作天' },
            { en: 'the failed runs are reported too', zh: '失敗的運轉也照報' }
          ] }
      ],
      ev: [
        { t: { en: 'Every chapter gives its own materials, the quantity per plate or per well, and the procedure in the order the steps are carried out, so each measurement can be rebuilt without reference to us.',
               zh: '每一章都自帶材料、每盤或每孔的用量，以及照執行順序寫下來的步驟，所以每一項量測都能在不參照我們的情況下重建。' }, src: 'measurement' },
        { t: { en: 'Materials are named with manufacturer and catalogue or lot number where one exists — the SIGMAKOKI plano-convex lens, the GY-302 BH1750FVI lux sensors, the ZJ-TM02 Hall-effect flow meter — down to the grams of filament each printed part takes.',
               zh: '材料都標出廠牌與型號或批號（若有）——SIGMAKOKI 平凸透鏡、GY-302 BH1750FVI 照度感測器、ZJ-TM02 霍爾式流量計——連每個列印件要用幾克線材都寫出來。' }, src: 'hardware-photometer' },
        { t: { en: 'The instruments are cheap enough to copy: the Slim photometer is US$235.29 in parts, the Pro US$371.78, the 24-culture light plate US$65.52.',
               zh: '儀器便宜到可以照抄：Slim 光度計零件 235.29 美元、Pro 371.78 美元、能跑 24 個培養的光照盤 65.52 美元。' }, src: 'hardware-photometer' },
        { t: { en: 'We tested reproducibility on people rather than claiming it: on 15 and 16 October three classmates outside the team were given the Slim’s parts and its assembly guide and watched while they built it.',
               zh: '可重現性我們是拿真人測試的，不是用講的：10 月 15 與 16 日，三位團隊外的同學拿到 Slim 的零件與組裝手冊，我們在旁邊看他們組。' }, src: 'hardware-photometer' },
        { t: { en: 'The signal-processing work is published as raw material rather than as a description: the CSVs from both builds, both bubble tests, the hand-written log sheet, the eleven-algorithm replay script, the line-for-line firmware ports and the pre-registration, in od600-signal-processing/ on the iGEM GitLab. It runs in four working days on any photometer that can be made to log the individual samples inside a burst.',
               zh: '訊號處理的工作是以原始材料公布的，不是一段描述：兩款機型的 CSV、兩次氣泡測試、手寫紀錄表、十一種演算法的重跑腳本、逐行移植的韌體與預註冊檔，都放在 iGEM GitLab 的 od600-signal-processing/。任何能把一叢取樣裡每一筆都記下來的光度計，四個工作天就能跑完。' }, src: 'software' },
        { t: { en: 'The runs that failed are reported beside the runs that worked: the 14 August pressure series does not reproduce from one run to the next, five of our eight pre-registered predictions were overturned by our own data, and heat stress in hydroponic culture flattened the treated plants along with the controls.',
               zh: '失敗的運轉和成功的並排公布：8 月 14 日那組壓力數據一次跟一次對不起來、八項預註冊預測裡有五項被我們自己的資料推翻，而水耕的熱逆境把處理組和對照組一起壓平了。' }, src: 'measurement' }
      ],
      figs: ['h01', 'm10', 'p08', 'x10', 'v18'],
      a: {
        en: 'Every chapter on the Measurement page carries its own materials, the quantity per plate or per well, and '
          + 'the steps in the order they are done, with manufacturers and catalogue numbers where they exist, so a '
          + 'measurement can be rebuilt without asking us anything. The instruments are cheap enough to copy — US$235.29 '
          + 'for the Slim photometer, US$371.78 for the Pro, US$65.52 for the twenty-four-culture light plate — and we '
          + 'tested that on people rather than asserting it, by handing three classmates outside the team the Slim’s '
          + 'parts and its guide on 15 and 16 October and watching them build it. For the measurement that is wholly '
          + 'ours we publish the raw material instead of a description: the CSVs from both builds, both bubble tests, the '
          + 'hand-written log sheet, the eleven-algorithm replay script, the line-for-line firmware ports and the '
          + 'pre-registration, which run in four working days on any photometer that can log the individual samples '
          + 'inside a burst. And the runs that failed are reported beside the ones that worked, because a protocol that '
          + 'does not say how it stopped failing cannot be repeated by anyone else.',
        zh: 'Measurement 頁面上每一章都自帶材料、每盤或每孔的用量，以及照實際順序寫的步驟，有型號的就標型號，'
          + '所以任何一項量測都能在不問我們的情況下重建。儀器便宜到可以照抄——Slim 光度計 235.29 美元、Pro 371.78 美元、'
          + '能跑 24 個培養的光照盤 65.52 美元——而且這件事我們是拿真人測的，不是用講的：10 月 15 與 16 日，'
          + '我們把 Slim 的零件和手冊交給三位團隊外的同學，在旁邊看他們組起來。對於完全屬於我們自己的那項量測，'
          + '我們公布的是原始材料而不是描述：兩款機型的 CSV、兩次氣泡測試、手寫紀錄表、十一種演算法的重跑腳本、'
          + '逐行移植的韌體與預註冊檔——任何能記錄一叢取樣裡每一筆的光度計，四個工作天就跑得完。'
          + '而失敗的運轉和成功的並排公布，因為一份不說自己當初怎麼失敗的流程，別人是重現不了的。'
      }
    },
    {
      q: {
        en: 'Is the protocol well described?',
        zh: '量測流程寫得夠清楚嗎？'
      },
      flow: [
        { t: { en: 'Manufacturer and catalogue number', zh: '廠牌與型號' } },
        { t: { en: 'Amount per plate, per well', zh: '每盤、每孔的用量' } },
        { t: { en: 'The arithmetic to the same depth', zh: '算式寫到跟實驗一樣深' },
          leaf: [
            { en: 'firmware ported line for line', zh: '韌體逐行移植' },
            { en: 'a 150 mm ruler in every photograph', zh: '每張照片裡都有 150 mm 尺' },
            { en: 'nothing hidden in a download', zh: '沒有藏在附檔裡' }
          ] }
      ],
      ev: [
        { t: { en: 'Each block names its materials with the manufacturer and the catalogue or lot number where one exists, gives the amount needed per plate or per well, and then lists the steps.',
               zh: '每一個段落都標出材料的廠牌與型號或批號（若有）、每盤或每孔需要的量，然後才列步驟。' }, src: 'measurement' },
        { t: { en: 'The arithmetic is described to the same depth as the bench work: OD = log₁₀[(S₀/R₀)/(S/R)] × 5, with the path-length factor of 5.0 that converts a 2 mm flow cuvette onto the 1 cm basis OD600 is quoted on written down rather than assumed.',
               zh: '算式寫得跟實驗步驟一樣深：OD = log₁₀[(S₀/R₀)/(S/R)] × 5，而把 2 mm 流通槽換算到 OD600 慣用的 1 cm 基準的那個 5.0 路徑長因子，是寫出來的而不是默認的。' }, src: 'measurement' },
        { t: { en: 'The firmware that performs that conversion is ported line for line into the analysis, so what is tested is what ships, not a description of it.',
               zh: '執行這個換算的韌體被逐行移植進分析程式，所以被測的就是實際出貨的那份程式，不是它的描述。' }, src: 'measurement' },
        { t: { en: 'Every point states its own burst structure: twenty readings per sensor, four dark and sixteen lit, the dark median subtracted to remove ambient light and sensor offset, the first two lit readings discarded for settling, the rest filtered at median ± 3 MAD.',
               zh: '每一個資料點都寫明自己的取樣結構：每個感測器 20 筆，4 筆暗讀、16 筆亮讀；扣掉暗讀中位數以去除環境光與感測器偏移；前兩筆亮讀當作穩定期丟棄；其餘用中位數 ± 3 MAD 過濾。' }, src: 'measurement' },
        { t: { en: 'Image analysis is calibrated from a 150 mm ruler standing in every photograph, so the scale comes from an object in the frame instead of an assumed camera distance.',
               zh: '影像分析的比例尺來自每張照片裡都立著的那把 150 mm 尺，所以尺度是畫面裡的實物給的，不是假設的相機距離。' }, src: 'measurement' },
        { t: { en: 'Eleven problems that shaped the agar sets are tabulated with the set each appeared in and the change it forced, from sucrose lowered 3% to 1% to agar lowered 0.8% to 0.6%. No protocol on the page is offered as a separate file to download; each is written out in full where it is used.',
               zh: '影響了瓊脂實驗組的十一個問題被列成表，標明各自出現在哪一組、逼出了什麼改動，從蔗糖由 3% 降到 1%，到瓊脂由 0.8% 降到 0.6%。頁面上沒有任何流程是以另外的檔案提供下載的，每一份都在用到它的地方完整寫出來。' }, src: 'measurement' }
      ],
      figs: ['m06', 'p10', 'w08', 'c07', 'v15'],
      a: {
        en: 'Each block names its materials with the manufacturer and the catalogue or lot number where one exists, '
          + 'gives the amount needed per plate or per well, and then lists the steps in order. The arithmetic is '
          + 'described to the same depth as the bench work: optical density is given as an equation, including the '
          + 'path-length factor of 5.0 that converts our 2 mm flow cuvette onto the 1 cm basis OD600 is quoted on, and '
          + 'the burst behind every point is specified as four dark and sixteen lit readings reduced at median plus or '
          + 'minus three median absolute deviations. The firmware that performs that conversion is ported line for line '
          + 'into the analysis, so what is tested is what ships rather than a description of it, and image analysis is '
          + 'calibrated from a 150 millimetre ruler standing in every photograph instead of an assumed camera distance. '
          + 'Eleven problems that shaped the agar sets are tabulated with the set each appeared in and the change it '
          + 'forced. No protocol on the page is offered as a separate file to download; each is written out in full '
          + 'where it is used.',
        zh: '每一個段落都標出材料的廠牌與型號或批號、每盤或每孔需要的量，然後照順序列出步驟。算式寫得跟實驗步驟一樣深：'
          + '光密度是以方程式給的，包含把我們 2 mm 流通槽換算到 OD600 慣用 1 cm 基準的那個 5.0 路徑長因子；'
          + '每個資料點背後的取樣叢也寫明是 4 筆暗讀加 16 筆亮讀，用中位數 ± 3 MAD 收斂。'
          + '執行這個換算的韌體被逐行移植進分析程式，所以被測的是實際出貨的程式而不是它的描述；'
          + '影像分析的比例尺來自每張照片裡立著的 150 mm 尺，而不是假設的相機距離。'
          + '影響了瓊脂實驗組的十一個問題被列成表，標明各自出現在哪一組、逼出了什麼改動。'
          + '頁面上沒有任何流程是另外附檔下載的，每一份都在用到它的地方完整寫出來。'
      }
    },
    {
      q: {
        en: 'Is it useful to other projects?',
        zh: '這對其他專案有用嗎？'
      },
      flow: [
        { t: { en: 'An OD600 that needs no transform', zh: '不需要轉換式的 OD600' },
          leaf: [{ en: 'slope 1.001, median 3.8% apart', zh: '斜率 1.001、中位差 3.8%' }] },
        { t: { en: 'Gates, not estimators', zh: '關鍵在門檻，不在估計式' },
          leaf: [{ en: '2.44 down to 0.016 OD', zh: '2.44 降到 0.016 OD' }] },
        { t: { en: 'A ladder that does not grow', zh: '不會生長的標準梯度' },
          leaf: [{ en: 'and an LED chart for whichever system you use', zh: '還有一張選 LED 的對照表' }] }
      ],
      ev: [
        { t: { en: 'The central transferable piece is an in-line OD600 that needs no instrument-specific transform fitted against a benchtop spectrophotometer: the raw output agrees with the reference to a median paired difference of 3.8%, and on the silica run its slope against that reference is 1.001, consistent with unit scale.',
               zh: '最能帶走的一項，是一個不需要對桌上型分光光度計另外擬合轉換式的線上 OD600：原始輸出與參考儀的配對中位差是 3.8%，在二氧化矽那次運轉中對該參考儀的斜率是 1.001，與單位尺度一致。' }, src: 'measurement' },
        { t: { en: 'The burst filter and the two acceptance gates took the worst bubble error from 2.44 OD to 0.016 and apply to any flow-cell sensor. The rule is published as a rule: a reading more than 0.05 OD or 5% from the last accepted value is held back, and a new level is accepted only once three readings in a row agree with it.',
               zh: '取樣叢濾波加上兩道驗收門檻，把最差的氣泡誤差從 2.44 OD 壓到 0.016，而且適用於任何流通槽感測器。規則是以規則的形式公布的：與上一個被接受值相差超過 0.05 OD 或 5% 的讀值先扣住，新的水準要連續三筆一致才被接受。' }, src: 'hardware-photometer' },
        { t: { en: 'The finding behind that gate travels further than the gate: a bubble does not only block light. In a turbid culture air replaces particle-laden liquid, so more light reaches the detector — the five symmetric estimators stayed within 0.02 OD of each other on the Pro and 0.006 on the Slim, while the three one-sided ones moved away from them, and in opposite directions on the two builds.',
               zh: '門檻背後那個發現，比門檻本身更值得帶走：氣泡不只是擋光。在混濁的培養液裡，空氣取代了充滿顆粒的液體，反而讓更多光到達感測器——五種對稱估計式在 Pro 上彼此差距不到 0.02 OD、在 Slim 上不到 0.006，而三種單邊估計式則偏離它們，而且在兩款機型上偏的方向相反。' }, src: 'hardware-photometer' },
        { t: { en: 'The silica ladder calibrates a turbidity reading against a particle that does not grow, on a concentration axis set by weighed mass and pipetted volume rather than by a second instrument.',
               zh: '二氧化矽梯度是拿一種不會生長的顆粒來校正濁度讀值，而濃度軸是由秤重與移液體積決定的，不是由第二台儀器決定的。' }, src: 'measurement' },
        { t: { en: 'For a team choosing an LED, the page publishes the survey we ran when choosing ours: the common light-responsive systems mapped onto the LED peaks that actually drive them, from UV-A through royal blue, green and red to near-infrared, with the places a cheap off-the-shelf part will not do — CcaS switches off at 672 nm, so a 630 nm part is the wrong one.',
               zh: '如果有隊伍要選 LED，頁面上放了我們當初選的時候做的那份調查：把常見的光反應系統對應到真正能驅動它們的 LED 波峰，從 UV-A、皇家藍、綠光、紅光一路到近紅外，並標出哪些地方便宜的現成零件不堪用——CcaS 的關閉態在 672 nm，所以 630 nm 的零件是選錯了。' }, src: 'measurement' },
        { t: { en: 'The agar platform is a general screen for protectants and plant growth-promoting bacteria with the usable stress window already found, 75 to 100 mM NaCl, so another team need not repeat the pretests. And chlorophyll is reported both per gram and in total, because per-gram normalisation inflated one of our own heat assays threefold while total chlorophyll had fallen about 91%.',
               zh: '瓊脂平台是一個通用的保護劑與植物促生菌篩選系統，而且可用的逆境區間已經找出來了——75 到 100 mM NaCl——別的隊伍不必重做前測。葉綠素我們同時報每克值與總量，因為在我們自己一次熱逆境實驗裡，以每克標準化讓數字膨脹了三倍，而總葉綠素其實掉了約 91%。' }, src: 'measurement' }
      ],
      figs: ['m02', 'm03', 'm04', 'm05', 'v19'],
      a: {
        en: 'The central transferable piece is an in-line OD600 that needs no instrument-specific transform fitted '
          + 'against a benchtop spectrophotometer: our raw output agrees with the reference to a median paired '
          + 'difference of 3.8%, and on the silica run its slope against that reference is 1.001, so another team can '
          + 'rebuild the instrument and use the number it gives. Four further pieces are written to be lifted out. The '
          + 'burst filter and the two acceptance gates took the worst bubble error from 2.44 OD to 0.016 and apply to '
          + 'any flow-cell sensor — and the finding behind them travels further than the gate, because a bubble does not '
          + 'only block light: in a turbid culture air replaces particle-laden liquid, so one-sided estimators move in '
          + 'opposite directions on our two builds. The silica ladder calibrates turbidity against a particle that does '
          + 'not grow, on a concentration axis set by weighed mass and pipetted volume rather than by another '
          + 'instrument. For optogenetics we publish the LED survey we ran when choosing ours, mapping the common '
          + 'light-responsive systems onto the peaks that actually drive them. And the agar platform is a general screen '
          + 'for protectants and plant growth-promoting bacteria with the usable window already found at 75 to 100 '
          + 'millimolar NaCl, so nobody need repeat our pretests.',
        zh: '最能帶走的一項，是一個不需要對桌上型分光光度計另外擬合轉換式的線上 OD600：原始輸出與參考儀的配對中位差是 3.8%，'
          + '在二氧化矽那次運轉中對該參考儀的斜率是 1.001，所以別的隊伍可以把這台儀器重建起來，直接用它給的數字。'
          + '另外四樣東西是刻意寫成可以被整段搬走的。取樣叢濾波加兩道驗收門檻把最差的氣泡誤差從 2.44 OD 壓到 0.016，'
          + '適用於任何流通槽感測器——而門檻背後那個發現比門檻更值得帶走，因為氣泡不只是擋光：'
          + '在混濁的培養液裡空氣取代了充滿顆粒的液體，所以單邊估計式在我們兩款機型上偏的方向是相反的。'
          + '二氧化矽梯度是用一種不會生長的顆粒校正濁度，濃度軸由秤重與移液體積決定，而不是由另一台儀器決定。'
          + '光遺傳學這邊，我們公布了當初選 LED 時做的調查，把常見的光反應系統對應到真正能驅動它們的波峰。'
          + '而瓊脂平台是一個通用的保護劑與植物促生菌篩選系統，可用區間已經找到在 75 到 100 mM NaCl，誰都不必再重做我們的前測。'
      }
    },
    {
      q: {
        en: 'Did the team use controls to validate the measurement process and calibrate units?',
        zh: '有沒有用對照組來驗證量測流程、校正單位？'
      },
      flow: [
        { t: { en: 'A blank refused, not guessed', zh: '歸零值寧可拒收，不用猜的' } },
        { t: { en: 'Units tied to mass and volume', zh: '單位綁在質量與體積上' } },
        { t: { en: 'Two standards, eight weeks apart', zh: '兩種標準品、相隔八週' },
          leaf: [
            { en: 'slope 1.001, p = 0.98', zh: '斜率 1.001、p = 0.98' },
            { en: 'intercept −0.123, p = 0.005', zh: '截距 −0.123、p = 0.005' },
            { en: 'the control that defeated us', zh: '那個打敗我們的對照組' }
          ] }
      ],
      ev: [
        { t: { en: 'Every optical reading is referenced to a blank, and the blank is refused if either sensor is saturated, if too few readings survive the filter, or if either channel reads zero, so the software returns no OD rather than an uncorrected one.',
               zh: '每一筆光學讀值都對一個歸零值參照；而只要任一感測器飽和、通過濾波的讀值太少，或任一通道讀到零，這個歸零值就會被拒收——軟體寧可不回傳 OD，也不回傳一個沒校正過的數字。' }, src: 'measurement' },
        { t: { en: 'Units are tied to physical quantities and not to another instrument: the path-length factor converts the flow cuvette to the conventional 1 cm basis, and the concentration axis of both calibration runs is set by weighed mass and pipetted volume.',
               zh: '單位綁的是物理量，不是另一台儀器：路徑長因子把流通槽換算到慣用的 1 cm 基準，而兩次校正運轉的濃度軸都是由秤重與移液體積決定的。' }, src: 'measurement' },
        { t: { en: 'The instrument was checked against two independent mass standards eight weeks apart — titanium dioxide on 23 August and 1 µm silica on 10 October, the latter close to the size of B. subtilis — with a benchtop BioDrop reading in parallel at every step. The TiO₂ run was repeated twice and two BioDrop points were excluded on criteria set in advance, one handling error and one monotonicity violation.',
               zh: '儀器以兩種獨立的質量標準品、相隔八週各驗一次：8 月 23 日的二氧化鈦與 10 月 10 日的 1 µm 二氧化矽（後者的尺度接近枯草桿菌），每一步都有桌上型 BioDrop 並行讀值。二氧化鈦那次重複做了兩輪，並依事先訂好的準則排除兩個 BioDrop 資料點，一個是操作失誤、一個違反單調性。' }, src: 'measurement' },
        { t: { en: 'Those comparisons are tested, not asserted: against the reference the slope is 1.001, p = 0.98 against a null of unit slope, while the intercept is −0.123 OD, p = 0.005 against a null of zero — which locates the one remaining discrepancy in the stored blank and not in the optics.',
               zh: '這些比較是做過統計檢定的，不是用宣稱的：對參考儀的斜率是 1.001，對「斜率為 1」的虛無假設 p = 0.98；截距是 −0.123 OD，對「截距為 0」的虛無假設 p = 0.005——這把僅存的那點差異定位在儲存的歸零值上，而不是光路上。' }, src: 'measurement' },
        { t: { en: 'The source itself is watched: the Pro’s reference channel must stay between 0.85 and 1.15 of its blank value or a drift flag is raised, and the flow meter was validated against outflow caught by hand over the same dials, R² = 0.995.',
               zh: '光源本身也被盯著：Pro 的參考通道必須維持在歸零值的 0.85 到 1.15 之間，否則會觸發漂移警示；流量計則以同樣轉速下人工接取的出流量驗證，R² = 0.995。' }, src: 'measurement' },
        { t: { en: 'Where a control defeated the measurement we report that as the result: the untransformed WB800 host returned 5.452 and 4.562 µg/mL on the same ELISA, the same range as four of the six constructs beside it, so no difference in that table can be attributed to expression.',
               zh: '對照組打敗量測的時候，我們就把那個當成結果來報：沒有轉型的 WB800 宿主在同一支 ELISA 上讀到 5.452 與 4.562 µg/mL，跟旁邊六個構築中的四個落在同一區間，所以那張表裡的任何差異都不能歸因於表現量。' }, src: 'measurement' }
      ],
      figs: ['m01', 'w09', 'w11', 'p02', 'v21'],
      a: {
        en: 'Every optical reading is referenced to a blank, and the blank is refused if either sensor is saturated, if '
          + 'too few readings survive the filter, or if either channel reads zero, so the software returns no OD rather '
          + 'than an uncorrected one. The units are tied to physical quantities and not to another instrument: the '
          + 'path-length factor converts the flow cuvette onto the conventional 1 centimetre basis, and the '
          + 'concentration axis of both calibration runs is set by weighed mass and pipetted volume. The instrument was '
          + 'then checked against two independent mass standards eight weeks apart, titanium dioxide on 23 August and 1 '
          + 'micrometre silica on 10 October, with a benchtop BioDrop reading in parallel at every step — and those '
          + 'comparisons are tested rather than asserted: the slope against the reference is 1.001 at p = 0.98 against a '
          + 'null of unit slope, while the intercept is −0.123 OD at p = 0.005 against a null of zero, which locates the '
          + 'one remaining discrepancy in the stored blank and not in the optics. In the assays the controls are a plate '
          + 'control on every set, equal liquid volumes in the untreated arms, and an unstressed-plus-protectant arm to '
          + 'separate rescue from toxicity. And where a control defeated the measurement we report that as the result: '
          + 'the untransformed WB800 host read 5.452 and 4.562 micrograms per millilitre on the same ELISA, the same '
          + 'range as four of the six constructs beside it, so no difference in that table can be attributed to '
          + 'expression.',
        zh: '每一筆光學讀值都對一個歸零值參照，而只要任一感測器飽和、通過濾波的讀值太少，或任一通道讀到零，'
          + '這個歸零值就會被拒收——軟體寧可不回傳 OD，也不回傳沒校正過的數字。單位綁的是物理量而不是另一台儀器：'
          + '路徑長因子把流通槽換算到慣用的 1 cm 基準，而兩次校正運轉的濃度軸都由秤重與移液體積決定。'
          + '接著儀器以兩種獨立的質量標準品、相隔八週各驗一次：8 月 23 日的二氧化鈦與 10 月 10 日的 1 µm 二氧化矽，'
          + '每一步都有桌上型 BioDrop 並行讀值——而且這些比較是做過檢定的，不是用宣稱的：對參考儀的斜率是 1.001，'
          + '對「斜率為 1」p = 0.98；截距是 −0.123 OD，對「截距為 0」p = 0.005，把僅存的那點差異定位在歸零值上而不是光路上。'
          + '分析這一側的對照是：每一組都有盤對照、未處理組給同樣體積的液體，以及一組無逆境加保護劑，用來把救援效果和毒性分開。'
          + '而對照組打敗量測的時候，我們就把它當成結果來報：沒有轉型的 WB800 宿主在同一支 ELISA 上讀到 5.452 與 4.562 µg/mL，'
          + '跟旁邊六個構築中的四個落在同一區間，所以那張表裡的任何差異都不能歸因於表現量。'
      }
    }
  ]
});
