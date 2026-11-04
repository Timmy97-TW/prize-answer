AWARD({
  id: 'hardware',
  tag: { en: 'Special Award', zh: '特別獎' },
  name: { en: 'Best Hardware', zh: '最佳硬體' },
  basis: {
    en: 'Four aspects from the judging handbook: whether the hardware addresses a need or problem in synthetic '
      + 'biology, whether the team conducted user testing and learned from it, whether utility and functionality '
      + 'were demonstrated in a proof of concept, and whether the documentation enables reproduction.',
    zh: '評審手冊列出四個面向：這個硬體有沒有解決合成生物學裡真實的需求或問題、團隊有沒有做使用者測試並從回饋中學到東西、'
      + '概念驗證有沒有展示出實用性與功能，以及文件夠不夠讓別的隊伍重現。'
  },
  questions: [
    {
      q: {
        en: 'Does the hardware address a need or problem in synthetic biology?',
        zh: '這個硬體解決了合成生物學裡什麼需求或問題？'
      },
      flow: [
        { t: { en: 'One litre has no instruments', zh: '一公升尺度買不到儀器' } },
        { t: { en: 'Make, recover, contain on one wall', zh: '一道膜同時生產、回收、圍阻' },
          leaf: [{ en: '434 h, no sample pulled', zh: '434 小時，沒抽一次樣' }] },
        { t: { en: 'Signal without opening', zh: '不打開也能下指令' },
          leaf: [{ en: '24 cultures for US$65', zh: '65 美元跑 24 個培養' }] }
      ],
      ev: [
        { t: { en: 'No vendor sells in-line OD600, pH, flow and pressure at a one-litre working volume, so a small lab has to open the vessel to know anything. We built the instruments instead.',
               zh: '一公升工作體積上沒有廠商賣線上 OD600、pH、流量與壓力，小實驗室想知道任何事都得打開槽體。所以我們自己造儀器。' }, src: 'measurement' },
        { t: { en: 'Production, recovery and containment are one unit operation: the 0.2 µm wall retains the cells and passes the secreted product, so nothing is lysed and there is no separate downstream step.',
               zh: '生產、回收與圍阻是同一個單元操作：0.2 µm 的膜留住菌、放過分泌蛋白，所以不必破菌，也沒有另一段下游純化。' }, src: 'biomanufacturing' },
        { t: { en: 'Our in-line photometer read a culture for 434 hours with no sample withdrawn: 2671 valid rows of 2720.',
               zh: '我們的線上光度計連續讀了一個培養 434 小時，一次樣都沒抽：2720 筆中有 2671 筆有效。' }, src: 'results' },
        { t: { en: 'Light is the only way to carry a decision through a sealed vessel without opening the containment or adding an inducer to the culture.',
               zh: '光是唯一能在不打開圍阻、也不往培養液裡加誘導劑的情況下，把一個決定送進密封槽體的方法。' }, src: 'biomanufacturing' },
        { t: { en: 'The Light Plate Apparatus makes optogenetics affordable: 24 cultures across 6 independently driven conditions for US$65.52, with 40 LEDs measured and grouped to within 0.4 to 1.8 percent.',
               zh: '光照培養盤讓光遺傳學變便宜：65.52 美元跑 24 個培養、6 個獨立控制條件，而且 40 顆 LED 全部量過、分組誤差落在 0.4% 到 1.8%。' }, src: 'hardware-diopal' }
      ],
      figs: ['h02', 'h07', 'h06'],
      a: {
        en: 'Two problems in synthetic biology meet in this machine. The first is that at a one-litre working volume '
          + 'nobody sells in-line optical density, pH, flow and pressure, so a small lab monitoring a perfusion culture has '
          + 'to open the vessel to know anything — we built the instruments instead, and ours read a culture for 434 hours '
          + 'with no sample withdrawn. The second is that production, recovery and containment are normally three '
          + 'operations: ours are one, because the 0.2 micrometre hollow-fibre wall that keeps the cells inside is the wall '
          + 'the secreted product crosses to leave, so nothing is lysed and there is no downstream step to validate. Light '
          + 'is what makes that closed geometry controllable, since an LED carries a decision through a sealed wall without '
          + 'adding an inducer, and our twenty-four-culture light plate puts that kind of control within reach at US$65.52.',
        zh: '這台機器上同時解決了合成生物學裡兩個問題。第一個是：在一公升工作體積上，沒人賣線上光密度、pH、流量與壓力感測，'
          + '所以小實驗室要監測灌流培養，就非得打開槽體才知道發生了什麼——我們選擇自己造儀器，而我們這台連續讀了一個培養 '
          + '434 小時、一次樣都沒抽。第二個是：生產、回收與圍阻通常是三個操作，我們把它們變成一個，因為那道把菌留在裡面的 '
          + '0.2 µm 中空纖維膜，就是分泌產物穿出去的那道膜，所以不必破菌，也沒有另一段下游純化需要驗證。'
          + '而讓這個封閉幾何變得可控的就是光：一顆 LED 可以穿過密封壁下指令，不必加誘導劑；我們那塊能跑 24 個培養的光照盤，'
          + '用 65.52 美元就讓這種控制變得人人做得到。'
      }
    },
    {
      q: {
        en: 'Did the team conduct user testing and learn from user feedback?',
        zh: '團隊有做使用者測試、並從回饋中學到東西嗎？'
      },
      flow: [
        { t: { en: 'Chang: flow only recirculates', zh: '張教授：加流量只是在循環' } },
        { t: { en: 'So: a pinch valve', zh: '於是：夾管閥' },
          leaf: [{ en: '0.03 to 0.16 bar, 20–30 mL', zh: '0.03 升到 0.16 bar、收 20–30 mL' }] },
        { t: { en: 'One mainboard, noise gone', zh: '改成單一主板，雜訊消失' },
          leaf: [{ en: 'three outsiders built it', zh: '三位外人照檔案組起來' }] }
      ],
      ev: [
        { t: { en: 'Professor Chang Jo-Shu, 18 June and 4 September: nothing in the first design drove protectant from the lumen to the shell, because raising flow only recirculates.',
               zh: '張嘉修教授，6 月 18 日與 9 月 4 日：第一版設計裡沒有任何東西把保護劑從管內推到殼側，因為提高流量只是在循環。' }, src: 'human-practices' },
        { t: { en: 'The fix is measured, not asserted: closing the pinch valve and opening the shell valve for sixty seconds lifts mean transmembrane pressure from 0.03 to 0.16 bar and yields 20 to 30 mL on demand.',
               zh: '修正的效果是量出來的，不是宣稱的：關夾管閥、開殼側閥 60 秒，平均跨膜壓差從 0.03 升到 0.16 bar，隨需收到 20 到 30 mL。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Teacher He of Owl Lab, 20 September: replaced a two-board plan with a single mainboard, and the unstable pressure readings stopped with it.',
               zh: '貓頭鷹實驗室何老師，9 月 20 日：把兩塊板的設計換成單一主板，不穩定的壓力讀值也跟著不見了。' }, src: 'human-practices' },
        { t: { en: 'Dr. Jennifer Brophy, 18 April: removed the genetic kill switch and made the membrane the containment, which changed what the instruments are obliged to monitor.',
               zh: 'Jennifer Brophy 博士，4 月 18 日：拿掉基因自殺開關、讓膜成為圍阻，這也改變了儀器必須監測的對象。' }, src: 'human-practices' },
        { t: { en: 'Three builders outside the team assembled a Slim photometer from our files in about two hours, which is where the documentation gaps surfaced.',
               zh: '三位團隊外的人照我們的檔案約兩小時組好一台 Slim 光度計，文件的缺口就是在那裡浮出來的。' }, src: 'hardware-photometer' }
      ],
      figs: ['i05', 'h05', 'i09'],
      a: {
        en: 'Every structural change in this hardware is traceable to a named reviewer. Professor Chang Jo-Shu found the '
          + 'flaw that would have sunk the first build: nothing in our design actually drove the protectant from the lumen '
          + 'to the shell, because raising the flow rate only recirculates — which is why a printed pinch valve and a '
          + 'smaller module exist, and why we can quote what they bought, mean transmembrane pressure from 0.03 to 0.16 bar '
          + 'and twenty to thirty millilitres harvested on demand without interrupting the culture. Teacher He of Owl Lab '
          + 'replaced our two-board electronics with a single mainboard, and the unstable pressure readings stopped with it. '
          + 'Dr. Jennifer Brophy removed our genetic kill switch, which made the membrane the containment and changed what '
          + 'the instruments are obliged to monitor. And we tested the hardware on users who are not us: three people '
          + 'outside the team built a Slim photometer from our published files in about two hours, and the places they got '
          + 'stuck are the places the documentation was rewritten.',
        zh: '這套硬體上每一個結構性的改動，都追得到某一位具名的審閱者。張嘉修教授找出了會讓第一版沉掉的那個缺陷：'
          + '我們的設計裡其實沒有任何東西把保護劑從管內推到殼側，因為提高流量只是在循環——這就是那顆 3D 列印夾管閥'
          + '和更小的膜模組存在的理由，也是為什麼我們報得出它們換來什麼：平均跨膜壓差從 0.03 到 0.16 bar，'
          + '在不中斷培養的情況下隨需收 20 到 30 mL。貓頭鷹實驗室的何老師把我們兩塊板的電路換成單一主板，'
          + '不穩定的壓力讀值也跟著消失。Jennifer Brophy 博士拿掉了我們的基因自殺開關，讓膜成為圍阻，'
          + '也因此改變了儀器必須監測的對象。而我們也把硬體拿給不是我們的人測試：三位團隊外的人照我們公布的檔案'
          + '約兩小時組好一台 Slim 光度計，他們卡住的地方就是我們把文件重寫的地方。'
      }
    },
    {
      q: {
        en: 'Did the team demonstrate utility and functionality in the hardware proof of concept?',
        zh: '概念驗證有展示出實用性與功能嗎？'
      },
      flow: [
        { t: { en: '116 h, ±0.1 bar', zh: '116 小時，±0.1 bar' } },
        { t: { en: 'Harvest on demand', zh: '隨需收料' },
          leaf: [{ en: 'culture never interrupted', zh: '培養不中斷' }] },
        { t: { en: 'pH 6.5 is the inflection', zh: 'pH 6.5 就是轉折點' },
          leaf: [{ en: '10.7 / 10.5 across the wall', zh: '膜兩側 10.7 / 10.5' }] }
      ],
      ev: [
        { t: { en: 'First integrated run, 1 September: 116 hours, 102.4 logged, transmembrane pressure held within about ±0.1 bar.',
               zh: '9 月 1 日第一次整合運轉：116 小時、記錄到 102.4 小時，跨膜壓差維持在約 ±0.1 bar 內。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Longest clean run with the production strain: 77 hours to OD600 3.34.',
               zh: '生產菌株最長的乾淨運轉：77 小時，OD600 到 3.34。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Harvest on demand: 20 to 30 mL per minute of valve opening, with the culture loop never interrupted.',
               zh: '隨需收料：閥每開一分鐘收 20 到 30 mL，培養迴路全程不中斷。' }, src: 'hardware-bioreactor' },
        { t: { en: 'The pH loop found something OD alone could not: the OD600 inflection sits exactly where pH crosses 6.5, and holding pH while resupplying erythromycin removed a spurious second exponential phase.',
               zh: 'pH 迴路找到了光密度單獨看不出來的事：OD600 的轉折點正好落在 pH 跨過 6.5 的位置；而把 pH 穩住、同時補充紅黴素之後，那段假的第二指數期就消失了。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Product measured on both sides of the membrane: 10.7 µg/mL in the lumen against 10.5 on the shell side, with no colonies on the shell-side plate.',
               zh: '膜兩側都量了產物：管內 10.7 µg/mL、殼側 10.5，而殼側塗盤沒有長出任何菌落。' }, src: 'hardware-bioreactor' }
      ],
      figs: ['h04', 'w02', 'x11'],
      a: {
        en: 'The rig has run as a closed loop with its instruments live: 116 hours on the first integrated run with '
          + 'transmembrane pressure held within about a tenth of a bar, and 77 hours to OD600 3.34 with the production '
          + 'strain. It does the job it was built for, which is harvesting without opening the vessel — closing the pinch '
          + 'valve and opening the shell valve yields twenty to thirty millilitres a minute while the culture loop keeps '
          + 'running. The instruments then earned their place by telling us something optical density alone could not: the '
          + 'growth inflection sits exactly where pH crosses 6.5, and once pH was held and erythromycin resupplied with the '
          + 'feed, a spurious second exponential phase disappeared, which identified it as plasmid loss rather than a '
          + 'metabolic shift. And the end-to-end check holds: ACC deaminase reads 10.7 micrograms per millilitre inside the '
          + 'fibres and 10.5 on the shell side, with no colonies on the shell-side plate — product through, cells retained.',
        zh: '這台機器已經以閉環的方式、在儀器全程上線的狀態下運轉過：第一次整合運轉 116 小時，跨膜壓差維持在約 0.1 bar 以內；'
          + '用生產菌株跑到 77 小時、OD600 3.34。它確實做到了當初設計它要做的事——不打開槽體就收料：關夾管閥、開殼側閥，'
          + '每分鐘收 20 到 30 mL，而培養迴路一直在跑。儀器也證明了自己值得裝上去，因為它們講出了光密度單獨講不出來的事：'
          + '生長曲線的轉折點正好落在 pH 跨過 6.5 的位置；而當 pH 被穩住、紅黴素隨補料一起補進去之後，'
          + '那段假的第二指數期就不見了——這就認出它是質體流失，不是代謝轉換。頭尾對照也站得住：'
          + 'ACC 去胺酶在纖維內讀到 10.7 µg/mL、殼側 10.5，而殼側塗盤一個菌落都沒有——產物過去了，菌留下來了。'
      }
    },
    {
      q: {
        en: 'Is the documentation sufficient to enable reproduction by other teams?',
        zh: '文件足以讓別的隊伍重現這套系統嗎？'
      },
      flow: [
        { t: { en: '82 pages, 30 weeks', zh: '82 頁、30 週' } },
        { t: { en: 'Priced BOM, STL, MIT', zh: '標價材料清單、STL、MIT' },
          leaf: [{ en: 'operating point as a number', zh: '運轉點直接給數字' }] },
        { t: { en: 'Failures published too', zh: '失敗也一起公布' },
          leaf: [{ en: 'the CIP recipe, and what it broke', zh: '清洗配方，以及它弄壞了什麼' }] }
      ],
      ev: [
        { t: { en: 'An 82-page hardware notebook covering 30 weeks, plus six build documents.',
               zh: '一本 82 頁、涵蓋 30 週的硬體筆記本，加上六份建造文件。' }, src: 'hardware-notebook' },
        { t: { en: 'A priced bill of materials for every build: bioreactor known parts US$1,022.67, Pro US$371.78, Slim US$235.29, light plate US$65.52.',
               zh: '每一個建造都有標價的材料清單：生物反應器已知零件 1,022.67 美元、Pro 371.78 美元、Slim 235.29 美元、光照盤 65.52 美元。' }, src: 'hardware-bioreactor' },
        { t: { en: 'The operating point is a number with the model behind it: 263 mL/min at 0.30 bar, from ΔP = aQ + bQ² at R² 0.995, with 46 to 55 percent of the drop attributed to plumbing.',
               zh: '運轉點是一個有模型支撐的數字：263 mL/min、0.30 bar，來自 ΔP = aQ + bQ²（R² 0.995），其中 46% 到 55% 的壓降歸給管路。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Cleaning is a recipe: 100 mL of 35% H₂O₂ in 900 mL water, then about five 1 L washes — and the same page records that this is what corroded a valve at 38 hours.',
               zh: '清洗是一份配方：100 mL 的 35% H₂O₂ 加 900 mL 水，之後約五次 1 L 沖洗——同一頁也記下，這就是 38 小時時腐蝕掉一個閥的原因。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Failures are published with them: the light plate’s connection post snapped after an overnight run on the shaker, two screws became four, and the page states the fixes were not re-tested.',
               zh: '失敗也一起公布：光照盤的連接柱在搖床上過夜後斷掉，兩顆螺絲改成四顆，而頁面上明寫這些修正還沒有重新測試。' }, src: 'hardware-diopal' }
      ],
      figs: ['h09', 'h10', 'h08', 'v13'],
      a: {
        en: 'Reproduction needs three things and all three are published: the parts, the settings, and the failures. The '
          + 'parts are a priced bill of materials for each build — US$1,022.67 of known parts in the bioreactor, US$371.78 '
          + 'and US$235.29 for the two photometers, US$65.52 for the light plate — alongside STLs, wiring and firmware under '
          + 'the MIT licence, and an 82-page hardware notebook covering thirty weeks. The settings are given as numbers with '
          + 'the model behind them rather than as advice: run at 263 millilitres per minute and 0.30 bar, derived from a '
          + 'two-term pressure-drop fit at R² 0.995 in which 46 to 55 percent of the drop belongs to the plumbing rather '
          + 'than the membrane, and clean with 100 millilitres of 35 percent hydrogen peroxide in 900 millilitres of water '
          + 'followed by about five one-litre washes. The failures are there because they are the expensive part to '
          + 'rediscover: that same peroxide step corroded a valve at thirty-eight hours, a light-plate post snapped after an '
          + 'overnight run on the shaker, and where a fix has not been re-tested the page says so.',
        zh: '要重現一套硬體需要三樣東西，而這三樣我們都公布了：零件、設定、失敗。零件是每個建造各自的標價材料清單——'
          + '生物反應器已知零件 1,022.67 美元、兩台光度計 371.78 與 235.29 美元、光照盤 65.52 美元——'
          + '再加上以 MIT 授權釋出的 STL、接線與韌體，以及一本 82 頁、涵蓋 30 週的硬體筆記本。'
          + '設定是給數字和背後的模型，不是給建議：跑 263 mL/min、0.30 bar，來自 R² 0.995 的雙項壓差擬合，'
          + '其中 46% 到 55% 的壓降屬於管路而不是膜；清洗用 100 mL 的 35% 過氧化氫加 900 mL 水，之後約五次 1 L 沖洗。'
          + '失敗之所以在裡面，是因為那是重新發現起來最貴的部分：同一道清洗步驟在 38 小時腐蝕掉一個閥，'
          + '光照盤的連接柱在搖床上過夜後斷掉，而凡是修正還沒重測的地方，頁面上都寫明了。'
      }
    }
  ]
});
