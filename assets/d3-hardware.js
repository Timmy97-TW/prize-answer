AWARD({
  id: 'hardware',
  tag: { en: 'Special Award', zh: '特別獎' },
  name: { en: 'Best Hardware', zh: '最佳硬體' },
  basis: {
    en: 'Four aspects from the judging handbook: whether the hardware addresses a need or problem in synthetic '
      + 'biology, whether the team conducted user testing and learned from it, whether utility and functionality '
      + 'were demonstrated in a proof of concept, and whether the documentation enables reproduction. ReLEAF has '
      + 'four builds — the perfusion bioreactor, two in-line photometers, the light plate and the hydroponic plate '
      + '— with six assembly guides, a brochure, a user manual and a 30-week notebook.',
    zh: '評審手冊列出四個面向：這個硬體有沒有解決合成生物學裡真實的需求或問題、團隊有沒有做使用者測試並從回饋中學到東西、'
      + '概念驗證有沒有展示出實用性與功能，以及文件夠不夠讓別的隊伍重現。ReLEAF 有四項硬體——灌流生物反應器、'
      + '兩台線上光度計、光照培養盤與水耕浮板——附六份組裝手冊、一份型錄、一份使用者手冊，以及一本跨 30 週的筆記本。'
  },
  questions: [
    {
      q: {
        en: 'Does the hardware address a need or problem in synthetic biology?',
        zh: '這個硬體解決了合成生物學裡什麼需求或問題？'
      },
      flow: [
        { t: { en: 'One litre has no instruments', zh: '一公升尺度買不到儀器' },
          leaf: [{ en: 'and a farm cannot hold its temperature', zh: '而農場的溫度穩不住' }] },
        { t: { en: 'Make, recover, contain on one wall', zh: '一道膜同時生產、回收、圍阻' },
          leaf: [{ en: '434 h read with nothing drawn out', zh: '讀了 434 小時，一次樣都沒抽' }] },
        { t: { en: 'Signal in without opening, read clear of the green', zh: '不打開也能下指令，讀值避開綠光' } },
        { t: { en: 'Four builds, one need each', zh: '四台硬體，各解一個需求' } }
      ],
      ev: [
        { t: { en: 'Nobody sells in-line OD600, pH, flow and pressure at a one-litre working volume, so a small lab monitoring a perfusion culture has to open the vessel to know anything. We built the instruments instead.',
               zh: '一公升工作體積上沒人賣線上 OD600、pH、流量與壓力，小實驗室想監測灌流培養，就得打開槽體才知道發生了什麼。所以我們自己造儀器。' }, src: 'measurement' },
        { t: { en: 'The need is sharper for us than for a laboratory: the chassis grows at ambient temperature and a bioreactor on a farm cannot hold its temperature exactly, so density has to be read in real time to judge yield and health.',
               zh: '這個需求對我們比對一般實驗室更尖銳：底盤菌是在常溫下生長的，而放在農場的反應器沒辦法把溫度維持得很準，所以必須即時讀到菌密度才判斷得出產量與健康狀況。' }, src: 'hardware-photometer' },
        { t: { en: 'Three optical choices keep long runs honest: a 90:10 beam splitter sends 10% of the light to a reference sensor that tracks LED drift, a 2 mm flow cuvette behind a plano-convex lens keeps a dense culture from saturating the reading, and a transistor switches the LED so it can run at a higher voltage than the sensors and raise the upper limit.',
               zh: '三個光學選擇讓長時間運轉的數字站得住：90:10 分光鏡把 10% 的光送到參考感測器以追蹤 LED 漂移；平凸透鏡後面的 2 mm 流通槽讓高密度培養不會把讀值打飽和；電晶體負責切換 LED，使它能跑在比感測器更高的電壓上，把量測上限拉高。' }, src: 'hardware-photometer' },
        { t: { en: 'Production, recovery and containment are one unit operation: the 0.2 µm wall retains the cells and passes the secreted product, so nothing is lysed and there is no separate downstream step. Our photometer read a culture for 434 hours with nothing drawn out, 2671 valid rows of 2720.',
               zh: '生產、回收與圍阻是同一個單元操作：0.2 µm 的膜留住菌、放過分泌蛋白，所以不必破菌，也沒有另一段下游純化。我們的光度計連續讀了一個培養 434 小時、一次樣都沒抽，2720 筆中有 2671 筆有效。' }, src: 'biomanufacturing' },
        { t: { en: 'Measurement near 600 nm keeps clear of the green and red that drive CcaSR, so watching the culture does not induce it — and when a sample does have to be taken, an aseptic port made from a three-way Luer valve, a one-way check valve and a 0.22 µm PTFE filter keeps the loop clean.',
               zh: '在 600 nm 附近量測，避開了驅動 CcaSR 的綠光與紅光，所以觀察培養不會順便誘導它；而真的需要取樣時，由三通 Luer 閥、單向止回閥與 0.22 µm PTFE 濾膜組成的無菌取樣口能讓迴路保持乾淨。' }, src: 'measurement' },
        { t: { en: 'The other two builds answer the cheap end of the same project. The Light Plate Apparatus makes optogenetics affordable at US$65.52 for 24 cultures across six independently driven conditions, with an LED survey published so another team can fit the right peak for a system other than CcaSR. And testing the output on plants needs its own instrument: in a fixed plate the medium level is set by hand and then falls as plants drink, so conditions drift between replicates, while ours floats on 42.27 cm³ of sealed air and holds thirteen seedlings at one root depth for about US$1.80 of filament — predicted freeboard 4.8 mm, which no printed plate has yet been weighed to confirm.',
               zh: '另外兩台硬體解決的是同一個專案裡便宜的那一端。光照培養盤讓光遺傳學變便宜：65.52 美元跑 24 個培養、6 個獨立控制條件，頁面上還公布了一份 LED 調查，讓別的隊伍可以替 CcaSR 以外的系統選到對的波峰。而把產物測在植物上也需要自己的器材：固定式板子的液面是手動設定的，之後植物喝水就會下降，各重複之間條件因此漂移；我們這塊靠 42.27 cm³ 的密封空氣浮著，用約 1.80 美元的線材把 13 株幼苗維持在同一個根部深度——預測乾舷 4.8 mm，但還沒有任何印出來的板子被秤過來證實。' }, src: 'hardware-hydroponics' }
      ],
      figs: ['h02', 'h07', 'h06', 'q16', 'q06'],
      a: {
        en: 'Two problems in synthetic biology meet in this machine. The first is that at a one-litre working volume '
          + 'nobody sells in-line optical density, pH, flow and pressure, and the need is sharper for us than for a '
          + 'laboratory, because the chassis grows at ambient temperature and a bioreactor standing on a farm cannot '
          + 'hold its temperature exactly — so we built the instruments, and ours read a culture for 434 hours with '
          + 'nothing drawn out. The second is that production, recovery and containment are normally three operations: '
          + 'ours are one, because the 0.2 micrometre hollow-fibre wall that keeps the cells inside is the wall the '
          + 'secreted product crosses to leave, so nothing is lysed and there is no downstream step to validate. Light '
          + 'is what makes that closed geometry controllable, and the wavelengths are chosen so the two jobs do not '
          + 'collide: the photometer reads near 600 nanometres, clear of the green and red that drive CcaSR, so '
          + 'watching the culture does not induce it. The other two builds take the same approach to the cheap end of the '
          + 'work: a twenty-four-culture light plate puts that kind of optogenetic control within reach at US$65.52, and a '
          + 'floating hydroponic plate holds thirteen seedlings at one root depth for about US$1.80 of filament, because in '
          + 'a fixed plate the level falls as the plants drink and conditions drift between replicates. Four builds, and '
          + 'each of them is there because a need in the project had no instrument behind it.',
        zh: '這台機器上同時解決了合成生物學裡兩個問題。第一個是：在一公升工作體積上，沒人賣線上光密度、pH、流量與壓力感測；'
          + '而這個需求對我們又比對一般實驗室更尖銳，因為底盤菌是在常溫下生長的，站在農場上的反應器沒辦法把溫度維持得很準——'
          + '所以我們自己造儀器，而我們這台連續讀了一個培養 434 小時、一次樣都沒抽。第二個是：生產、回收與圍阻通常是三個操作，'
          + '我們把它們變成一個，因為那道把菌留在裡面的 0.2 µm 中空纖維膜，就是分泌產物穿出去的那道膜，'
          + '所以不必破菌，也沒有另一段下游純化需要驗證。讓這個封閉幾何變得可控的是光，而波長是刻意選的，'
          + '好讓兩件事不互相干擾：光度計在 600 nm 附近讀值，避開驅動 CcaSR 的綠光與紅光，所以觀察培養不會順便誘導它。'
          + '另外兩台硬體則是把同樣的做法用在便宜的那一端：能跑 24 個培養的光照盤用 65.52 美元讓這種光控制變得人人做得到；'
          + '浮動水耕板用約 1.80 美元的線材把 13 株幼苗維持在同一個根部深度——因為固定式板子的液面會隨植物喝水而下降，'
          + '各重複之間的條件就跟著漂移。四台硬體，每一台都是因為專案裡有一個需求背後沒有儀器才做出來的。'
      }
    },
    {
      q: {
        en: 'Did the team conduct user testing and learn from user feedback?',
        zh: '團隊有做使用者測試、並從回饋中學到東西嗎？'
      },
      flow: [
        { t: { en: 'Three reviewers, five visits', zh: '三位審閱者、五次來訪' },
          leaf: [
            { en: 'Chang: nothing drove it across → the pinch valve', zh: '張教授：沒有東西推它過膜 → 夾管閥' },
            { en: 'iFarm: fewer transplants → CAD redrawn that day', zh: '源鮮：少移植 → 當天重畫 CAD' }
          ] },
        { t: { en: 'Owl Lab rebuilt the electronics: PCA9685 → STS-3215', zh: '貓頭鷹實驗室重做電路：PCA9685 → STS-3215' } },
        { t: { en: 'Then we handed it to beginners', zh: '然後交給新手去組' },
          leaf: [{ en: 'three builds, three guide changes', zh: '三次組裝、三處改手冊' }] }
      ],
      ev: [
        { t: { en: 'Professor Chang Jo-Shu reviewed the bioreactor on 18 June and 4 September. His points were the missing force to push the protectant across the membrane, the membrane’s size, foaming, heat transfer at scale and the DNPH assay — the first of those produced the pinch valve and a smaller module.',
               zh: '張嘉修教授在 6 月 18 日與 9 月 4 日審閱了生物反應器。他指出的是：缺少把保護劑推過膜的那股力、膜的尺寸、起泡、放大後的熱傳，以及 DNPH 分析——第一項就帶出了夾管閥與更小的膜模組。' }, src: 'human-practices' },
        { t: { en: 'The fix is measured, not asserted: closing the pinch valve and opening the shell valve for sixty seconds lifts mean transmembrane pressure from 0.03 to 0.16 bar and yields 20 to 30 mL on demand, without interrupting the culture.',
               zh: '修正的效果是量出來的，不是宣稱的：關夾管閥、開殼側閥 60 秒，平均跨膜壓差從 0.03 升到 0.16 bar，在不中斷培養的情況下隨需收到 20 到 30 mL。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Teacher He of Owl Lab, a robotics lab that specialises in hardware, reviewed the electronics on 20 and 22 September and found an unreliable servo driver and a power supply that could not deliver enough current. We moved from the PCA9685 driver to STS-3215 servos, and split the work between an Arduino Uno Q for sensors and the interface and an Arduino Mega 2560 for pumps and valves.',
               zh: '專做硬體的機器人實驗室「貓頭鷹實驗室」的何老師在 9 月 20 與 22 日審閱電路，找出一顆不可靠的伺服驅動板，以及一組電流供應不足的電源。我們把 PCA9685 驅動板換成 STS-3215 伺服馬達，並把工作拆開：Arduino Uno Q 負責感測與介面，Arduino Mega 2560 負責泵與閥。' }, src: 'human-practices' },
        { t: { en: 'Two of their points changed the photometer specifically: how it is checked against the BioDrop, and how it connects — it was rebuilt to plug into the bioreactor mainboard as a module.',
               zh: '他們有兩點是直接改到光度計的：它怎麼對 BioDrop 做查核，以及它怎麼接線——光度計被重做成可以當模組插進反應器主板。' }, src: 'hardware-photometer' },
        { t: { en: 'A visit changed a design on the spot. At Yes Health iFarm, an indoor vertical farm, on 11 August we were shown how a controlled hydroponic farm manages circulation and aeration and were told to keep plant transfers to a minimum — the hydroponic plate’s CAD was revised at the farm that same day, and it now holds thirteen seedlings.',
               zh: '有一次參訪當場就改了設計。8 月 11 日在室內垂直農場「源鮮智慧農場」，對方讓我們看了受控水耕農場怎麼處理循環與曝氣，並告訴我們要把移植次數壓到最低——水耕板的 CAD 就在農場當天改掉，現在是放 13 株幼苗。' }, src: 'human-practices' },
        { t: { en: 'Then we tested the documentation on users who are not us. On 15 and 16 October three classmates were given the Slim’s parts and its assembly guide and watched while they built it, with backgrounds running from an experienced engineer to a student who had never held a soldering iron. Three guide changes came out of what they hit: the turn-over step now says left and right are swapped in every solder-side picture, each sensor’s direction is checked before it is pressed in, and a note warns that the PCB is the guide’s hardest soldering.',
               zh: '接著我們把文件拿給不是我們的人測試。10 月 15 與 16 日，三位同學拿到 Slim 的零件與組裝手冊，我們在旁邊看他們組；他們的背景從資深工程師，到一個從沒拿過烙鐵的學生都有。他們踩到的問題帶來三處手冊修改：翻面那一步現在會說明每張焊接面照片的左右是相反的；每顆感測器在壓入前要先確認方向；另外加了一條提醒，說 PCB 是整份手冊最難焊的地方。' }, src: 'hardware-photometer' }
      ],
      figs: ['i05', 'h05', 'i09', 'v07', 'v11'],
      a: {
        en: 'Every structural change in this hardware is traceable to a named reviewer. Professor Chang Jo-Shu, across '
          + 'two visits in June and September, found the flaw that would have sunk the first build — nothing in our '
          + 'design actually drove the protectant from the lumen to the shell — and we can quote what the fix bought: '
          + 'mean transmembrane pressure from 0.03 to 0.16 bar and twenty to thirty millilitres harvested on demand '
          + 'without interrupting the culture. Teacher He of Owl Lab, a robotics lab that specialises in hardware, '
          + 'reviewed the electronics in September and found an unreliable servo driver and a power supply that could '
          + 'not deliver enough current, so the PCA9685 became STS-3215 servos and the work was split between an '
          + 'Arduino Uno Q for sensors and the interface and a Mega 2560 for pumps and valves. One visit changed a design '
          + 'on the spot: at Yes Health iFarm, an indoor vertical farm, we were told to keep plant transfers to a minimum, '
          + 'and the hydroponic plate’s CAD was redrawn at the farm that same day — it now holds thirteen seedlings. We '
          + 'then tested the '
          + 'documentation on people who are not us: on 15 and 16 October three classmates built the Slim photometer '
          + 'from its guide while we watched, their backgrounds running from an experienced engineer to a student who '
          + 'had never held a soldering iron, and three changes to the guide came out of what they hit. One of them '
          + 'put a sensor in backwards, so the guide now checks sensor direction before it is pressed in.',
        zh: '這套硬體上每一個結構性的改動，都追得到某一位具名的審閱者。張嘉修教授在六月與九月兩次來訪中，'
          + '找出了會讓第一版沉掉的那個缺陷——我們的設計裡其實沒有任何東西把保護劑從管內推到殼側——'
          + '而修正換來什麼我們報得出來：平均跨膜壓差從 0.03 到 0.16 bar，在不中斷培養的情況下隨需收 20 到 30 mL。'
          + '專做硬體的機器人實驗室「貓頭鷹實驗室」的何老師九月審閱了電路，找出一顆不可靠的伺服驅動板和一組電流不足的電源，'
          + '於是 PCA9685 換成 STS-3215 伺服馬達，工作也拆成 Arduino Uno Q 管感測與介面、Mega 2560 管泵與閥。'
          + '有一次參訪當場就改了設計：室內垂直農場「源鮮智慧農場」告訴我們要把移植次數壓到最低，'
          + '水耕板的 CAD 就在農場當天重畫，現在是放 13 株幼苗。'
          + '接著我們把文件拿給不是我們的人測試：10 月 15 與 16 日，三位同學照手冊把 Slim 光度計組起來，我們在旁邊看，'
          + '他們的背景從資深工程師到一個從沒拿過烙鐵的學生都有，而他們踩到的問題帶來三處手冊修改。'
          + '其中一位把感測器裝反了，所以手冊現在會在壓入前先要你確認方向。'
      }
    },
    {
      q: {
        en: 'Did the team demonstrate utility and functionality in the hardware proof of concept?',
        zh: '概念驗證有展示出實用性與功能嗎？'
      },
      flow: [
        { t: { en: '72 h sealed, 116 h at ±0.1 bar', zh: '封著跑 72 小時、116 小時維持 ±0.1 bar' } },
        { t: { en: 'Harvest on demand', zh: '隨需收料' },
          leaf: [{ en: 'culture never interrupted', zh: '培養不中斷' }] },
        { t: { en: 'pH 6.5 is the inflection', zh: 'pH 6.5 就是轉折點' },
          leaf: [
            { en: 'and it named plasmid loss', zh: '而且它認出了質體流失' },
            { en: 'the photometer caught the pump failing', zh: '光度計抓到泵故障' }
          ] }
      ],
      ev: [
        { t: { en: 'One run carries the whole claim: in the fourth integrated run the rig produced and contained a functional enzyme for 72 hours without being opened once, and the sampling was done by the hardware rather than by hand.',
               zh: '有一次運轉就把整個主張撐起來了：第四次整合運轉中，這台機器在完全沒有被打開過的情況下，生產並圍阻了一個有功能的酵素 72 小時，而且取樣是硬體做的、不是用手。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Duration and control are separate records: the first integrated run on 1 September held 116 hours, 102.4 of them logged, with transmembrane pressure within about ±0.1 bar, and the longest clean run with the production strain is 77 hours to OD600 3.34.',
               zh: '時長與控制是兩筆不同的紀錄：9 月 1 日第一次整合運轉撐了 116 小時、其中 102.4 小時有記錄，跨膜壓差維持在約 ±0.1 bar 內；而生產菌株最長的乾淨運轉是 77 小時、OD600 到 3.34。' }, src: 'hardware-bioreactor' },
        { t: { en: 'The rig does the job it was built for: closing the pinch valve and opening the shell valve yields 20 to 30 mL per minute of valve opening while the culture loop keeps running.',
               zh: '這台機器確實做到了它被設計要做的事：關夾管閥、開殼側閥，閥每開一分鐘收 20 到 30 mL，而培養迴路一直在跑。' }, src: 'hardware-bioreactor' },
        { t: { en: 'The instruments earned their place by saying something optical density alone could not: the OD600 inflection sits exactly where pH crosses 6.5, and once pH was held and erythromycin resupplied with the feed, a spurious second exponential phase disappeared — which identified it as plasmid loss rather than a metabolic shift. Cross-reading the channels also catches faults: when the pump ran partly dry the OD600 climbed while flow and pressure did not follow, so a rise without its partners is now read as a hydraulic fault and not as growth.',
               zh: '儀器證明了自己值得裝上去，因為它們講出了光密度單獨講不出來的事：OD600 的轉折點正好落在 pH 跨過 6.5 的位置；而當 pH 被穩住、紅黴素隨補料一起補進去之後，那段假的第二指數期就消失了——這就認出它是質體流失，不是代謝轉換。把各通道交叉著看也抓得到故障：泵半乾運轉時 OD600 往上爬，但流量與壓力沒有跟上，所以現在一個沒有同伴跟上的上升，會被讀成液路故障而不是生長。' }, src: 'hardware-bioreactor' },
        { t: { en: 'What crossed the wall was working enzyme, and it kept crossing: the shell permeate held ACC deaminase above 2 µg/mL right through the 72-hour run with DNPH activity from 18 hours onward, and product was measured on both sides at 10.7 µg/mL in the lumen against 10.5 on the shell. Shell-side medium plated on LB grew no colonies while lumen plates from the same run did.',
               zh: '過膜的是有活性的酵素，而且一直在過：殼側透過液在整個 72 小時運轉中都維持 ACC 去胺酶高於 2 µg/mL，DNPH 活性從 18 小時起就讀得到；膜兩側也都量了產物，管內 10.7 µg/mL、殼側 10.5。殼側培養液塗在 LB 上沒有長出菌落，同一次運轉的管內塗盤則長了。' }, src: 'hardware-bioreactor' },
        { t: { en: 'Stated limit: the breach detector is fitted but has no breach test on record, and the containment evidence rests on a single shell-side plating whose replicate count, incubation time and temperature were not recorded.',
               zh: '明說的限制：破損偵測器裝上去了，但沒有任何破損測試的紀錄；而圍阻的證據只靠一次殼側塗盤，重複數、培養時間與溫度都沒有記下來。' }, src: 'measurement' }
      ],
      figs: ['h04', 'w02', 'x11', 'q13', 'v17'],
      a: {
        en: 'One run carries the whole claim. In the fourth integrated run the rig produced and contained a functional '
          + 'enzyme for seventy-two hours without being opened once: the shell permeate held ACC deaminase above 2 '
          + 'micrograms per millilitre throughout with DNPH activity from eighteen hours onward, and shell-side medium '
          + 'plated on LB grew no colonies while lumen plates from the same run did. The sampling was done by the '
          + 'hardware, not by hand — closing the pinch valve and opening the shell valve yields twenty to thirty '
          + 'millilitres a minute while the culture loop keeps running — and separately the rig has held 116 hours with '
          + 'transmembrane pressure within about a tenth of a bar and 77 hours to OD600 3.34 with the production strain. '
          + 'The instruments then earned their place by saying something optical density alone '
          + 'could not: the growth inflection sits exactly where pH crosses 6.5, and once pH was held and erythromycin '
          + 'resupplied with the feed a spurious second exponential phase disappeared, which identified it as plasmid '
          + 'loss rather than a metabolic shift; reading the channels against each other also caught the pump running '
          + 'dry, because OD climbed while flow and pressure did not follow. The end-to-end check holds — ACC deaminase '
          + 'reads 10.7 micrograms per millilitre inside the fibres and 10.5 on the shell side — but I should be clear '
          + 'that the breach detector is fitted and untested, and that containment rests on a single plating.',
        zh: '有一次運轉就把整個主張撐起來了。第四次整合運轉中，這台機器在完全沒有被打開過的情況下，'
          + '生產並圍阻了一個有功能的酵素 72 小時：殼側透過液全程維持 ACC 去胺酶高於 2 µg/mL，DNPH 活性從 18 小時起就讀得到；'
          + '殼側培養液塗在 LB 上沒有長出菌落，同一次運轉的管內塗盤則長了。取樣是硬體做的、不是用手——'
          + '關夾管閥、開殼側閥，每分鐘收 20 到 30 mL，而培養迴路一直在跑——另外這台機器也撐過 116 小時、'
          + '跨膜壓差維持在約 0.1 bar 以內，並用生產菌株跑到 77 小時、OD600 3.34。儀器也證明了自己值得裝上去，'
          + '因為它們講出了光密度單獨講不出來的事：生長曲線的轉折點正好落在 pH 跨過 6.5 的位置；'
          + '而當 pH 被穩住、紅黴素隨補料補進去之後，那段假的第二指數期就不見了，這就認出它是質體流失而不是代謝轉換。'
          + '把各通道交叉著讀也抓到了泵半乾運轉，因為 OD 在爬、流量與壓力卻沒跟上。頭尾對照也站得住——'
          + 'ACC 去胺酶在纖維內讀到 10.7 µg/mL、殼側 10.5——但我要講清楚：'
          + '破損偵測器是裝上去了但沒測過，而圍阻的證據只有一次塗盤。'
      }
    },
    {
      q: {
        en: 'Is the documentation sufficient to enable reproduction by other teams?',
        zh: '文件足以讓別的隊伍重現這套系統嗎？'
      },
      flow: [
        { t: { en: 'Six guides, a brochure, a user manual', zh: '六份手冊、一份型錄、一份使用說明' },
          leaf: [{ en: 'plus an 82-page notebook over 30 weeks', zh: '外加 30 週、82 頁的筆記本' }] },
        { t: { en: 'Tested by handing it over', zh: '把它交出去來測試' },
          leaf: [{ en: 'three builders, three guide changes', zh: '三位組裝者、三處修改' }] },
        { t: { en: 'Operating point as a number', zh: '運轉點直接給數字' },
          leaf: [{ en: 'failures published too', zh: '失敗也照登' }] }
      ],
      ev: [
        { t: { en: 'The Hardware page publishes step-by-step build manuals with parts lists for the bioreactor, both photometers and the light plate, plus the bioreactor’s 17-page brochure and 16-page user manual — six documents in all.',
               zh: 'Hardware 頁面公布了生物反應器、兩台光度計與光照盤的逐步組裝手冊與零件清單，再加上生物反應器 17 頁的型錄與 16 頁的使用者手冊——總共六份文件。' }, src: 'hardware' },
        { t: { en: 'Behind them sits an 82-page hardware notebook running from 23 March to 17 October, week by week, with the entry that records each decision.',
               zh: '它們背後是一本 82 頁的硬體筆記本，從 3 月 23 日寫到 10 月 17 日，一週一週，每個決定都有對應的那一則紀錄。' }, src: 'hardware-notebook' },
        { t: { en: 'The bill of materials is priced and specified per component, down to the grams of PLA and TPU each printed part takes: bioreactor known parts US$1,022.67, Pro US$371.78, Slim US$235.29, light plate US$65.52.',
               zh: '材料清單逐項標價、標規格，連每個列印件用掉幾克 PLA 與 TPU 都寫出來：生物反應器已知零件 1,022.67 美元、Pro 371.78 美元、Slim 235.29 美元、光照盤 65.52 美元。' }, src: 'hardware-bioreactor' },
        { t: { en: 'We did not stop at publishing the guide; we tested it by handing it over. Three classmates built the Slim on 15 and 16 October, and the three things they hit are now in the guide. Their own verdict is on the page: "A table and a soldering iron were enough", and "for around $235 against a commercial spectrophotometer, I’d build it."',
               zh: '我們沒有把手冊公布完就算了，而是把它交出去來測試。三位同學在 10 月 15 與 16 日組了 Slim，他們踩到的三件事現在都寫進手冊了。他們自己的評語也放在頁面上：「一張桌子和一支烙鐵就夠了」、「用大約 235 美元對上一台商用分光光度計，我會自己做」。' }, src: 'hardware-photometer' },
        { t: { en: 'The settings are given as numbers with the model behind them, not as advice: run at 263 mL/min and 0.30 bar, from ΔP = aQ + bQ² at R² 0.995 in which 46 to 55 percent of the drop belongs to the plumbing rather than the membrane; clean with 100 mL of 35% H₂O₂ in 900 mL water, then about five 1 L washes.',
               zh: '設定是給數字和背後的模型，不是給建議：跑 263 mL/min、0.30 bar，來自 R² 0.995 的 ΔP = aQ + bQ² 擬合，其中 46% 到 55% 的壓降屬於管路而非膜；清洗用 100 mL 的 35% H₂O₂ 加 900 mL 水，之後約五次 1 L 沖洗。' }, src: 'hardware-bioreactor' },
        { t: { en: 'The failures are published with them, because they are the expensive part to rediscover, and each one carries its fix and a verification test in the manual’s own steps: a feeding valve corroded and leaked at about 38 hours in cycle 4, and a light-plate post snapped after an overnight run on the shaker. We give two candidate causes for the valve rather than one, because we could not separate them — the 35% hydrogen peroxide of clean-in-place and the 1 M potassium hydroxide of automated pH dosing both reached those Luer fittings — and automated pH dosing was withdrawn as a result. Where a fix has not been re-tested the page says so, and the builder test is reported with its own limit: three builders is a small test, and it covered the Slim only.',
               zh: '失敗也一起公布，因為那才是重新發現起來最貴的部分；而每一個失敗在手冊步驟裡都連著它的修正與一項驗證測試：第 4 輪中一個進料閥在約 38 小時被腐蝕而漏液，光照盤的連接柱在搖床上過夜後斷掉。閥的成因我們給兩個可能、不是一個，因為我們分不出來——清洗程序的 35% 過氧化氫與自動加鹼用的 1 M 氫氧化鉀都碰到了那些 Luer 接頭——自動 pH 加藥也因此被撤掉。凡是修正還沒重測的地方，頁面上都寫明了；組裝測試也附上自己的限制：三個人是很小的樣本，而且只測了 Slim。' }, src: 'hardware-diopal' }
      ],
      figs: ['h09', 'h10', 'h08', 'v13', 'v14'],
      a: {
        en: 'Reproduction needs the parts, the settings and the failures, and all three are published. The parts are '
          + 'six step-by-step build manuals with priced bills of materials — US$1,022.67 of known parts in the '
          + 'bioreactor, US$371.78 and US$235.29 for the two photometers, US$65.52 for the light plate — specified down '
          + 'to the grams of filament each printed piece takes, alongside STLs and firmware under the MIT licence, a '
          + 'brochure, a user manual and an 82-page notebook covering thirty weeks. The settings are given as numbers '
          + 'with the model behind them rather than as advice: run at 263 millilitres per minute and 0.30 bar, derived '
          + 'from a two-term pressure-drop fit at R² 0.995 in which 46 to 55 percent of the drop belongs to the '
          + 'plumbing, and clean with 100 millilitres of 35 percent hydrogen peroxide in 900 millilitres of water. And '
          + 'we did not stop at publishing the guide — we tested it by handing it over, and three classmates built the '
          + 'Slim photometer from it in October, which is where three of its current instructions come from. The '
          + 'failures are there too, because they are the expensive part to rediscover, and each one is published with '
          + 'its fix and a verification test: a feeding valve corroded and leaked at about thirty-eight hours, and a '
          + 'light-plate post snapped overnight on the shaker. For the valve we give two candidate causes, not one, '
          + 'because we could not separate them — the thirty-five percent peroxide of the cleaning step and the '
          + 'one molar potassium hydroxide of automated pH dosing both reached those fittings, and automated pH dosing '
          + 'was withdrawn as a result. Where a fix has not been re-tested the page says so.',
        zh: '要重現一套硬體需要零件、設定與失敗，而這三樣我們都公布了。零件是六份逐步組裝手冊搭配標價的材料清單——'
          + '生物反應器已知零件 1,022.67 美元、兩台光度計 371.78 與 235.29 美元、光照盤 65.52 美元——'
          + '規格細到每個列印件用掉幾克線材，再加上以 MIT 授權釋出的 STL 與韌體、一份型錄、一份使用者手冊，'
          + '以及一本涵蓋 30 週、82 頁的筆記本。設定是給數字和背後的模型，不是給建議：跑 263 mL/min、0.30 bar，'
          + '來自 R² 0.995 的雙項壓差擬合，其中 46% 到 55% 的壓降屬於管路；清洗用 100 mL 的 35% 過氧化氫加 900 mL 水。'
          + '而我們沒有把手冊公布完就算了——我們把它交出去來測試，十月時三位同學照著它把 Slim 光度計組了起來，'
          + '手冊上現在有三條指示就是從那裡來的。失敗也在裡面，因為那是重新發現起來最貴的部分，'
          + '而且每一項都連著它的修正與一項驗證測試：一個進料閥在約 38 小時被腐蝕而漏液，光照盤的連接柱在搖床上過夜後斷掉。'
          + '閥的成因我們給兩個可能、不是一個，因為我們分不出來——清洗用的 35% 過氧化氫與自動加鹼用的 1 M 氫氧化鉀'
          + '都碰到了那些接頭——自動 pH 加藥也因此被撤掉。凡是修正還沒重測的地方，頁面上都寫明了。'
      }
    }
  ]
});
