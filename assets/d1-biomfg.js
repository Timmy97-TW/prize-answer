AWARD({
  id: 'biomfg',
  tag: { en: 'Village Award', zh: '村落獎' },
  name: { en: 'Best Biomanufacturing', zh: '最佳生物製造' },
  basis: {
    en: 'A Village Award, scored on a weighted average of the Project, Presentation and Wiki rubric '
      + 'categories within the Biomanufacturing Village. The handbook gives it no separate aspect list, '
      + 'so these are the five biomanufacturing questions a village judge presses on.',
    zh: '這是村落獎，計分方式是生物製造村落內 Project、Presentation、Wiki 三個評分項的加權平均。'
      + '評審手冊沒有為它列出單獨的評分面向，所以下面五題是村落評審實際會追問的生物製造問題。'
  },
  questions: [
    {
      q: {
        en: 'Why does this protectant have to be made biologically, and made at the point of use?',
        zh: '為什麼這個保護劑一定要用生物方式製造，而且要在使用地點製造？'
      },
      flow: [
        { t: { en: 'Proteins, one a catalyst', zh: '蛋白質，其中一個是酵素' } },
        { t: { en: 'No cold chain', zh: '不需要冷鏈' },
          leaf: [{ en: 'made the day it is needed', zh: '需要的當天才做' }] },
        { t: { en: 'Light carries the forecast in', zh: '用光把預報送進去' },
          leaf: [{ en: 'threshold outside the cell', zh: '閾值放在細胞外' }] }
      ],
      ev: [
        { t: { en: 'All three protectants are small secreted proteins: ACC deaminase (catalytic), LEA14 (stoichiometric), BoPep4 (a 23-residue elicitor).',
               zh: '三種保護劑都是小型分泌蛋白：ACC 去胺酶（催化型）、LEA14（計量型）、BoPep4（23 個胺基酸的誘導肽）。' }, src: 'description' },
        { t: { en: 'Chemistry cannot supply a catalyst: ACC deaminase destroys the ethylene precursor ACC, so one molecule works many times.',
               zh: '化學合成給不了酵素：ACC 去胺酶會分解乙烯前驅物 ACC，一個分子可以反覆作用。' }, src: 'plant' },
        { t: { en: 'Point-of-use manufacture removes refrigerated storage, refrigerated transport and shelf life.',
               zh: '在使用地點製造，就不需要冷藏儲存、冷鏈運輸，也沒有保存期限。' }, src: 'biomanufacturing' },
        { t: { en: 'Stress thresholds are crop-specific — rice is inhibited above about 25 °C while sorghum stays optimal to about 32.5 °C — so the decision stays in a forecast, not in the cell.',
               zh: '逆境閾值因作物而異——水稻約 25 °C 以上就受抑制，高粱到約 32.5 °C 仍是最適——所以判斷留在預報裡，不寫進細胞。' }, src: 'results' },
        { t: { en: 'Keeping the cells in the vessel splits the regulation in two: contained use for the strain, plant-biostimulant route for the cell-free permeate.',
               zh: '菌體留在槽內，法規就一分為二：菌株走封閉使用，無細胞透過液走植物生物刺激劑。' }, src: 'biomanufacturing' }
      ],
      figs: ['n01', 'o02', 'o01'],
      a: {
        en: 'Three of our protectants are proteins and one of them is a catalyst, so chemical synthesis is not an '
          + 'alternative: ACC deaminase destroys the ethylene precursor ACC, and one molecule of it works many times over. '
          + 'Making those proteins where they are used removes the refrigerated storage, the refrigerated transport and the '
          + 'shelf life a bottled biostimulant carries. Because the cells never leave the vessel, regulation splits in two — '
          + 'contained use for the strain and a plant-biostimulant route for the cell-free permeate — which is the only route '
          + 'we found that a regulator in Taiwan, the United States or the European Union can read. And because the right '
          + 'moment to produce is crop-specific, we keep the threshold outside the cell: a green LED carries a forecast '
          + 'through a sealed wall without adding anything to the culture.',
        zh: '我們三種保護劑都是蛋白質，其中一種還是酵素，所以化學合成不是選項：ACC 去胺酶會分解乙烯前驅物 ACC，'
          + '一個分子可以反覆作用。在使用地點現做這些蛋白質，就免掉了瓶裝生物刺激劑必須面對的冷藏儲存、冷鏈運輸與保存期限。'
          + '菌體從頭到尾不離開槽體，法規因此一分為二——菌株走封閉使用，無細胞透過液走植物生物刺激劑——這是我們找到的唯一一條'
          + '在台灣、美國與歐盟都有對應條文可讀的路。而什麼時候該生產是看作物決定的，所以我們把閾值放在細胞外面：'
          + '一盞綠光可以穿過密封壁把預報送進去，不必在培養液裡加任何東西。'
      }
    },
    {
      q: {
        en: 'Does the production system actually work — what does it make, and for how long?',
        zh: '這套生產系統真的能運作嗎？它做出什麼、撐多久？'
      },
      flow: [
        { t: { en: '77 h clean, OD 3.34', zh: '乾淨運轉 77 小時、OD 3.34' } },
        { t: { en: '3.4 to 6.5 µg/mL', zh: '3.4 到 6.5 µg/mL' },
          leaf: [{ en: 'active 18 to 72 h', zh: '18 到 72 小時有活性' }] },
        { t: { en: '10.7 against 10.5 across the wall', zh: '膜兩側 10.7 對 10.5' },
          leaf: [{ en: 'registered 0.2986, got 0.286', zh: '預註冊 0.2986，實測 0.286' }] }
      ],
      ev: [
        { t: { en: 'Longest clean run with the production strain WB800: 77 hours to OD600 3.34.',
               zh: '生產菌株 WB800 最長的乾淨運轉：77 小時，OD600 到 3.34。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Run 6 grew OD600 0.14 to 2.71 in 37 h at 0.286 ± 0.010 h⁻¹, against a rate pre-registered thirteen days earlier at 0.2986 h⁻¹ (90% interval 0.2705 to 0.3300).',
               zh: '第 6 次運轉 37 小時內 OD600 從 0.14 到 2.71，比生長速率 0.286 ± 0.010 h⁻¹；十三天前預註冊的值是 0.2986 h⁻¹（90% 區間 0.2705 至 0.3300）。' }, src: 'software' },
        { t: { en: 'Both October runs put 3.4 to 6.5 µg/mL ACC deaminase into the shell-side permeate.',
               zh: '十月的兩次運轉都讓殼側透過液含有 3.4 到 6.5 µg/mL 的 ACC 去胺酶。' }, src: 'results' },
        { t: { en: 'The product crosses the barrier: ELISA reads 10.7 µg/mL in the lumen against 10.5 on the shell side.',
               zh: '產物確實穿過了膜：ELISA 在管內讀到 10.7 µg/mL，殼側 10.5。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Functional enzyme appears at 18 h and specific activity holds between 5 and 8.4 U/mg out to 72 h.',
               zh: '18 小時出現有功能的酵素，比活性從 5 到 8.4 U/mg，一路維持到 72 小時。' }, src: 'results' }
      ],
      figs: ['s02', 'm07', 'm08', 'h04'],
      a: {
        en: 'We can show the three things a production claim needs: growth, product, and product on the far side of the '
          + 'barrier. The longest clean run with the production strain WB800 held 77 hours to OD600 3.34, and run 6 grew at '
          + '0.286 ± 0.010 per hour against a rate we had pre-registered thirteen days earlier at 0.2986 with a 90 percent '
          + 'interval of 0.2705 to 0.3300. Both October runs put 3.4 to 6.5 micrograms per millilitre of ACC deaminase into '
          + 'the shell-side permeate, and the lumen and shell read 10.7 against 10.5, so the protein is crossing the wall '
          + 'rather than accumulating inside. Functional enzyme appears at eighteen hours and specific activity holds between '
          + '5 and 8.4 units per milligram out to seventy-two. The titre is low for a bioprocess and we say so: the claim is a '
          + 'working loop at one litre, not an industrial yield.',
        zh: '一個生產主張需要三件事，我們三件都拿得出來：長菌、有產物、產物過得了膜。生產菌株 WB800 最長的乾淨運轉撐了 77 小時、'
          + 'OD600 到 3.34；第 6 次運轉的比生長速率是 0.286 ± 0.010 h⁻¹，而我們在十三天前就把 0.2986 h⁻¹（90% 區間 0.2705 至 0.3300）'
          + '註冊下來了。十月兩次運轉都讓殼側透過液含 3.4 到 6.5 µg/mL 的 ACC 去胺酶，管內與殼側是 10.7 對 10.5，表示蛋白質是穿過膜，'
          + '不是堆在裡面。18 小時出現有功能的酵素，比活性 5 到 8.4 U/mg 一直維持到 72 小時。對一個生物製程來說這個效價偏低，'
          + '我們也直說：我們主張的是一公升尺度上一個會跑的閉環，不是工業產量。'
      }
    },
    {
      q: {
        en: 'Is the process characterised well enough to scale?',
        zh: '這個製程的特性描述，足以支撐放大嗎？'
      },
      flow: [
        { t: { en: 'Scale out, not up', zh: '橫向複製，不放大單槽' } },
        { t: { en: 'Hold shear and TMP, add channels', zh: '固定剪切與跨膜壓差，只加通道' },
          leaf: [{ en: 'J/Jcrit = 0.04', zh: 'J/Jcrit = 0.04' }] },
        { t: { en: 'Medium and watts bind first', zh: '先卡住的是培養基和電' },
          leaf: [{ en: 'membrane binds last', zh: '膜是最後才卡' }] }
      ],
      ev: [
        { t: { en: 'Pressure drop is modelled, not guessed: ΔP = aQ + bQ² at R² 0.995, with 46 to 55 percent of the drop traced to the plumbing rather than the membrane.',
               zh: '壓差是建模出來的，不是猜的：ΔP = aQ + bQ²，R² 0.995，其中 46% 到 55% 的壓降來自管路而不是膜。' }, src: 'hardware-bioreactor' },
        { t: { en: 'The operating point is published as a number: 263 mL/min at a transmembrane pressure of 0.30 bar.',
               zh: '運轉點是以數字公布的：263 mL/min、跨膜壓差 0.30 bar。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Fouling margin: an operating flux of 2 LMH against a critical flux of 46 LMH, so J over J-critical is 0.04.',
               zh: '結垢餘裕：操作通量 2 LMH，臨界通量 46 LMH，J/Jcrit 是 0.04。' }, src: 'biomanufacturing' },
        { t: { en: 'The scale-dependent quantities are measured: wall shear 4881 s⁻¹ at 230 mL/min, cell-specific perfusion 0.0007 nL/cell/day, and a kLa of 12.5 h⁻¹ required at OD 1.454.',
               zh: '跟尺度有關的量都量過了：230 mL/min 時管壁剪切速率 4881 s⁻¹、每細胞灌流量 0.0007 nL/cell/day、OD 1.454 時需要 kLa 12.5 h⁻¹。' }, src: 'biomanufacturing' },
        { t: { en: 'Worked from one module to eight: medium draw rises 0.96 to 7.7 L/day and power 3–8 W to 24–64 W against the 101 Wh/day a 45 W panel harvests. The membrane is the last thing to bind.',
               zh: '從一組模組算到八組：培養基用量從 0.96 升到 7.7 L/day，功率從 3–8 W 升到 24–64 W，而 45 W 太陽能板一天只收 101 Wh。膜是最後才成為瓶頸的。' }, src: 'biomanufacturing' }
      ],
      figs: ['m09', 'h03', 'n02'],
      a: {
        en: 'We scale out rather than up, because tangential-flow filtration has a formal linear method — hold wall shear '
          + 'and transmembrane pressure constant and increase only the channel count — and a scale-down hollow-fibre module '
          + 'has the same fibre length as an industrial one, so our module is the unit cell to be replicated. The hydraulics '
          + 'are characterised well enough to do that: a two-term pressure-drop model at R² 0.995, 46 to 55 percent of the '
          + 'drop attributed to plumbing rather than membrane, a published operating point of 263 millilitres per minute at '
          + '0.30 bar, and an operating flux of 2 LMH against a critical flux of 46, which puts J over J-critical at 0.04. '
          + 'Worked from one module to eight, the membrane is the last thing to bind: what binds first is medium draw rising '
          + 'from 0.96 to 7.7 litres a day, eight continuous cross-flow pumps, and power going from 3–8 watts to 24–64 '
          + 'against the 101 watt-hours a day a 45 watt panel harvests. Running the recirculation pump on a duty cycle '
          + 'relieves three of those four at once, and its cost — settling inside the fibres during the off phase — is the '
          + 'first experiment we would run.',
        zh: '我們選擇橫向複製而不是放大單槽，因為切向流過濾有一套正式的線性放大方法——固定管壁剪切速率與跨膜壓差，只增加通道數——'
          + '而且縮小版的中空纖維模組跟工業規格的纖維長度相同，所以我們這一組模組就是可以被複製的單位。流體特性已經描述到可以這樣做：'
          + '雙項壓差模型 R² 0.995、46% 到 55% 的壓降歸給管路而非膜、公布的運轉點是 263 mL/min 與 0.30 bar、操作通量 2 LMH 對臨界通量 46 LMH，'
          + 'J/Jcrit 等於 0.04。從一組算到八組，膜是最後才卡住的：先卡住的是培養基用量從 0.96 升到 7.7 L/day、八台連續運轉的切向流泵，'
          + '以及功率從 3–8 W 升到 24–64 W，而 45 W 太陽能板一天只收 101 Wh。讓循環泵改成間歇運轉可以同時緩解其中三項，'
          + '代價是停機時纖維內沉降——那就是我們接下來第一個要做的實驗。'
      }
    },
    {
      q: {
        en: 'Is the organism contained, and is the output safe to put on a field?',
        zh: '菌真的被關住了嗎？產出物放到田裡安全嗎？'
      },
      flow: [
        { t: { en: 'One wall, two jobs', zh: '一道膜，兩個工作' } },
        { t: { en: 'Zero shell-side colonies', zh: '殼側零菌落' },
          leaf: [{ en: 'two platings, no log claim', zh: '兩次塗盤，不主張 log 去除率' }] },
        { t: { en: 'A pore beats a kill switch', zh: '孔徑勝過自殺開關' },
          leaf: [{ en: 'one real leak, traced', zh: '一次真的洩漏，已追到原因' }] }
      ],
      ev: [
        { t: { en: 'Containment is the product path: the same 0.2 µm mPES wall that retains the cells is the wall the protectant crosses, so monitoring the membrane is monitoring containment.',
               zh: '圍阻就是產物路徑：留住菌體的那道 0.2 µm mPES 膜，就是保護劑穿過的那道膜，所以監測膜等於監測圍阻。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Shell-side plating after 24 h at 37 °C gave 0 colonies, while the lumen plate grew.',
               zh: '殼側樣品在 37 °C 培養 24 小時後塗盤，0 個菌落；管內樣品的盤子長菌。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Physical containment replaced a genetic kill switch on Dr. Jennifer Brophy’s advice: a switch is DNA under selection and mutates, a pore does not depend on genotype.',
               zh: '依 Jennifer Brophy 博士的建議，用物理圍阻取代基因自殺開關：開關是受選擇壓力的 DNA，會突變失效，孔徑則不受基因型影響。' }, src: 'human-practices' },
        { t: { en: 'Stated limit: two single platings, no replicate and no recorded detection limit, so we claim retention demonstrated and not a log reduction.',
               zh: '明說的限制：兩次單一塗盤，沒有重複、沒有記錄偵測極限，所以我們主張的是「有留住」，不是某個 log 去除率。' }, src: 'results' },
        { t: { en: 'The one real breach was traced: a Luer valve broke at 38 h, the membrane did not fail, and the cause was 35% hydrogen peroxide reaching the valves during clean-in-place.',
               zh: '唯一一次真的破口已經追到原因：38 小時時一個 Luer 閥斷裂，膜沒有失效，原因是原位清洗時 35% 過氧化氫先到了閥體。' }, src: 'hardware-bioreactor' }
      ],
      figs: ['f01', 'h03', 'f02'],
      a: {
        en: 'Containment and the product path are the same thing: the 0.2 micrometre mPES wall that holds the cells in is '
          + 'the wall the protectant crosses to leave, so monitoring transmembrane pressure and flow is monitoring '
          + 'containment. Plating the shell side after twenty-four hours at 37 degrees gave no colonies, while the lumen '
          + 'plate grew. We chose that physical barrier over a genetic kill switch on Dr. Jennifer Brophy’s advice, '
          + 'because a switch is a piece of DNA under selection and will mutate, whereas a pore does not depend on the '
          + 'organism’s genotype. We will not overstate the evidence: that is two single platings with no replicate and '
          + 'no recorded detection limit, so we claim retention demonstrated, not a log reduction. The one real breach we '
          + 'had — a Luer valve snapping at thirty-eight hours — was traced to the hydrogen peroxide in our own '
          + 'clean-in-place step rather than to the membrane, and it is published with the three fixes it bought.',
        zh: '圍阻和產物路徑是同一件事：把菌關住的那道 0.2 µm mPES 膜，就是保護劑穿出去的那道膜，所以監測跨膜壓差和流量就等於監測圍阻。'
          + '殼側樣品在 37 °C 放 24 小時後塗盤沒有長出任何菌落，而管內樣品的盤子長了菌。我們是依 Jennifer Brophy 博士的建議'
          + '選物理屏障而不是基因自殺開關，因為開關是一段受選擇壓力的 DNA，終究會突變，而孔徑不受菌的基因型影響。'
          + '我們不會把證據說得比它更強：那是兩次單一塗盤，沒有重複、沒有記錄偵測極限，所以我們主張的是「證明有留住」，'
          + '不是某個 log 去除率。我們唯一一次真的破口——38 小時時 Luer 閥斷裂——追出來的原因是我們自己原位清洗用的過氧化氫，'
          + '不是膜，而且它連同換來的三項修正一起公布在頁面上。'
      }
    },
    {
      q: {
        en: 'Is the manufacturing route viable — cost, regulation, a path to a farm?',
        zh: '這條製造路徑可行嗎——成本、法規、進到農場的路？'
      },
      flow: [
        { t: { en: 'US$2,800 to build', zh: '造一台 2,800 美元' } },
        { t: { en: '226 hectares to break even', zh: '226 公頃損益兩平' } },
        { t: { en: 'Three regulatory parts', zh: '法規拆成三塊' },
          leaf: [
            { en: 'nothing confirmed in writing', zh: '沒有任何書面確認' },
            { en: '5 to 10 pilot units first', zh: '先放 5 到 10 台試點' }
          ] }
      ],
      ev: [
        { t: { en: 'The prototype was built for NT$83,028, about US$2,800; the bioreactor’s known parts come to US$1,022.67.',
               zh: '原型機造價新台幣 83,028 元，約 2,800 美元；生物反應器已知零件合計 1,022.67 美元。' }, src: 'biomanufacturing' },
        { t: { en: 'The farmer package is about US$5,550 in year one and US$90 a year after, at one price for every farm: twice full cost.',
               zh: '農民方案第一年約 5,550 美元，之後每年 90 美元，所有農場同一個價：成本的兩倍。' }, src: 'entrepreneurship' },
        { t: { en: 'Break-even at about 226 hectares, with a cash low point of −US$196,000 in Year 1 and a 24 percent pre-tax IRR on the growth plan.',
               zh: '約 226 公頃損益兩平，第 1 年現金最低點 −196,000 美元，成長計畫下稅前 IRR 24%。' }, src: 'entrepreneurship' },
        { t: { en: 'Regulation splits three ways — equipment, a contained GMM, and a cell-free permeate — giving a fertilizer route in Taiwan, a 90-day TSCA MCAN in the United States, and an EU route that excludes B. subtilis from its four permitted microbe groups.',
               zh: '法規拆成三塊——設備、封閉使用的基因改造微生物、無細胞透過液——台灣走肥料路徑，美國走 TSCA MCAN 90 天審查，歐盟則把枯草桿菌排除在四類許可微生物之外。' }, src: 'laws-and-regulations' },
        { t: { en: 'Stated limit: no regulator in any of eight markets has confirmed anything in writing, so the route is mapped and not cleared. The plan is five to ten pilot units for one growing season before a sale.',
               zh: '明說的限制：八個市場裡沒有任何主管機關給過書面確認，所以這條路是「畫出來了」而不是「通了」。計畫是先放 5 到 10 台試點機跑完一個生長季再談銷售。' }, src: 'laws-and-regulations' }
      ],
      figs: ['b02', 'n03', 'l01', 'b01'],
      a: {
        en: 'A unit costs about US$2,800 in parts today, of which the bioreactor itself is US$1,022.67, and the farmer '
          + 'package is priced at twice full cost — about US$5,550 in year one and US$90 a year after — with the same price '
          + 'for every farm. On that basis the enterprise breaks even at about 226 hectares, with a cash low point of minus '
          + 'US$196,000 in Year 1 and a 24 percent pre-tax internal rate of return on the planned growth. Regulation is the '
          + 'harder half and we have mapped it rather than assumed it: the system splits into equipment, a contained '
          + 'genetically modified micro-organism and a cell-free permeate, which gives a fertilizer route in Taiwan and a '
          + '90-day MCAN in the United States, while the European Union excludes Bacillus subtilis from its four permitted '
          + 'microbe groups. No regulator has confirmed any of this in writing, so we call the route mapped and not cleared, '
          + 'and the plan is five to ten pilot units for one growing season before anything is sold.',
        zh: '現在造一台的零件成本約 2,800 美元，其中生物反應器本身 1,022.67 美元；農民方案以成本兩倍定價——第一年約 5,550 美元，'
          + '之後每年 90 美元——而且所有農場同一個價。在這個基礎上，整個事業約在 226 公頃損益兩平，第 1 年現金最低點是 −196,000 美元，'
          + '成長計畫下稅前內部報酬率 24%。法規是比較難的那一半，我們是把它畫出來而不是假設它沒問題：整套系統拆成設備、'
          + '封閉使用的基因改造微生物、無細胞透過液三塊，台灣因此有肥料路徑，美國是 90 天的 MCAN，而歐盟把枯草桿菌排除在'
          + '四類許可微生物之外。這些都還沒有任何主管機關給書面確認，所以我們說這條路是畫出來了、不是通了，'
          + '計畫是先讓 5 到 10 台試點機跑完一個生長季，再談任何銷售。'
      }
    }
  ]
});
