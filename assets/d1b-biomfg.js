/* The two scaling questions, inserted after "characterised well enough to scale". */
MOREQ('biomfg', [
  {
    at: 3,
    q: {
      en: 'You say you scale out rather than up. What would actually go wrong if you just built a bigger vessel?',
      zh: '你們說要橫向複製而不是放大單槽。那如果真的直接做一個更大的槽，會出什麼問題？'
    },
    flow: [
      { t: { en: 'Everything with a length in it', zh: '凡是跟尺度有關的都要重做' },
        leaf: [{ en: 'oxygen, heat, mixing, area per volume', zh: '供氧、散熱、混合、單位體積膜面積' }] },
      { t: { en: 'kLa 12.5 per hour at OD 1.45', zh: 'OD 1.45 時需要 kLa 12.5 /h' } },
      { t: { en: 'TFF scales by channel count', zh: '切向流靠通道數放大' },
        leaf: [{ en: 'same fibre length as industrial', zh: '纖維長度與工業規格相同' }] }
    ],
    ev: [
      { t: { en: 'Oxygen is the first thing a bigger vessel loses: we need a kLa of 12.5 per hour at OD 1.454, and kLa falls as volume rises unless power per volume rises with it.',
             zh: '槽體放大第一個失去的是供氧：OD 1.454 時我們需要 kLa 12.5 /h，而體積變大、kLa 就會下降，除非單位體積功率同步提高。' }, src: 'biomanufacturing' },
      { t: { en: 'Membrane area per unit volume falls with scale-up, and the wall shear rate that sets the critical flux changes with it — ours is 4881 s⁻¹ at 230 mL/min.',
             zh: '放大單槽會讓單位體積的膜面積下降，而決定臨界通量的管壁剪切速率也會跟著變——我們的是 230 mL/min 時 4881 s⁻¹。' }, src: 'biomanufacturing' },
      { t: { en: 'Tangential-flow filtration has a formal linear method instead: hold wall shear and transmembrane pressure constant and increase only the channel count.',
             zh: '切向流過濾本來就有一套正式的線性放大法：固定管壁剪切速率與跨膜壓差，只增加通道數。' }, src: 'biomanufacturing' },
      { t: { en: 'A scale-down hollow-fibre module has the same fibre length as an industrial one, so our module is already the unit cell to be replicated rather than a miniature of something else.',
             zh: '縮小版的中空纖維模組，纖維長度跟工業規格是一樣的，所以我們這組模組本身就是可以被複製的單位，而不是別的東西的縮小版。' }, src: 'biomanufacturing' },
      { t: { en: 'Scale-out also matches the customer: 99.2 percent of Taiwan’s farms are under two hectares, so one large plant serving many farms would put the cold chain back in.',
             zh: '橫向複製也比較貼合客戶：台灣 99.2% 的農場不到兩公頃，蓋一座大廠供應很多農場，等於又把冷鏈裝回去了。' }, src: 'geospatial-analysis' }
    ],
    figs: ['n03', 'b01', 'n02', 'q05', 'q07'],
    a: {
      en: 'Making the vessel bigger means re-establishing every quantity that depends on a length scale: oxygen transfer, '
        + 'heat removal, mixing time, membrane area per unit volume, and the wall shear rate that sets the critical flux. '
        + 'Oxygen is the one that bites first — we need a kLa of 12.5 per hour at OD 1.454, and that gets harder, not '
        + 'easier, as the vessel grows. Tangential-flow filtration gives us a better option, because it has a formal '
        + 'linear method: hold wall shear and transmembrane pressure constant and increase only the channel count, and a '
        + 'scale-down hollow-fibre module already has the same fibre length as an industrial one, so ours is the unit cell '
        + 'rather than a miniature. Scaling out also keeps the product next to the farm, which is the whole point — a '
        + 'single large plant serving many farms would put the cold chain straight back in.',
      zh: '把槽體做大，等於要把每一個跟尺度有關的量重新建立一次：氧氣傳遞、散熱、混合時間、單位體積的膜面積，'
        + '以及決定臨界通量的管壁剪切速率。最先咬人的是氧氣——OD 1.454 時我們需要 kLa 12.5 /h，而槽體越大這件事只會更難、不會更簡單。'
        + '切向流過濾給了我們更好的選項，因為它有一套正式的線性放大法：固定管壁剪切速率與跨膜壓差，只增加通道數；'
        + '而且縮小版的中空纖維模組，纖維長度跟工業規格一樣，所以我們這一組本身就是可複製的單位，不是縮小模型。'
        + '橫向複製也讓產物留在農場旁邊，而這正是整件事的重點——一座大廠供應很多農場，等於又把冷鏈裝回去了。'
    }
  },
  {
    at: 4,
    q: {
      en: 'Say a farm needs ten of these running at once. What binds first, and does the arithmetic work?',
      zh: '假設一座農場要同時跑十台，最先卡住的是什麼？這筆帳算得過來嗎？'
    },
    flow: [
      { t: { en: 'Not the membrane', zh: '卡住的不是膜' },
        leaf: [{ en: 'J/Jcrit 0.04, 25-fold headroom', zh: 'J/Jcrit 0.04，餘裕 25 倍' }] },
      { t: { en: 'Medium: 0.96 to 7.7 L a day', zh: '培養基：0.96 到 7.7 L/天' } },
      { t: { en: 'Power: 3–8 W to 24–64 W', zh: '功率：3–8 W 到 24–64 W' },
        leaf: [{ en: 'a 45 W panel gives 101 Wh a day', zh: '45 W 板一天只收 101 Wh' }] },
      { t: { en: 'Duty-cycle the pump', zh: '讓泵間歇運轉' } }
    ],
    ev: [
      { t: { en: 'The membrane is the last thing to bind: at one module the operating flux is 2 LMH against a critical flux of 46, so J over J-critical is 0.04 — roughly twenty-five-fold headroom.',
             zh: '膜是最後才卡住的：單一模組的操作通量是 2 LMH，臨界通量 46 LMH，J/Jcrit 等於 0.04——大約有 25 倍的餘裕。' }, src: 'biomanufacturing' },
      { t: { en: 'Worked from one module to eight, medium draw rises from 0.96 to 7.7 litres a day and power from 3–8 W to 24–64 W.',
             zh: '從一組模組算到八組，培養基用量從 0.96 升到 7.7 L/天，功率從 3–8 W 升到 24–64 W。' }, src: 'biomanufacturing' },
      { t: { en: 'Energy is the hard constraint off-grid: a 45 W solar panel harvests about 101 watt-hours a day, against a demand of 72 to 192.',
             zh: '離網時真正緊的是能源：一塊 45 W 太陽能板一天約收 101 Wh，而需求是 72 到 192 Wh。' }, src: 'biomanufacturing' },
      { t: { en: 'Eight continuous cross-flow pumps is also eight failure points; running the recirculation pump on a duty cycle relieves medium, power and pump wear at once, and its cost — settling inside the fibres during the off phase — is the first experiment we would run.',
             zh: '八台連續運轉的切向流泵也等於八個故障點；讓循環泵改成間歇運轉可以同時緩解培養基、功率與泵的耗損，而它的代價——停機時纖維內沉降——就是我們接下來第一個要做的實驗。' }, src: 'biomanufacturing' },
      { t: { en: 'The fleet arithmetic is in the model: ten 20-litre units cover 2.5 hectares while running only 4.3 percent of the calendar, so the binding constraint is capital and medium, not reactor time.',
             zh: '機隊的算術在模型裡：十台 20 L 的機器可以覆蓋 2.5 公頃，而且只占了 4.3% 的日曆時間，所以真正的限制是資本與培養基，不是反應器時間。' }, src: 'model' }
    ],
    figs: ['i10', 'b03', 'g03', 'x13', 'x20'],
    a: {
      en: 'The membrane is the last thing to bind, not the first: at one module we run at 2 LMH against a critical flux '
        + 'of 46, so there is about twenty-five-fold headroom in the fibre. What binds first is consumables and watts — '
        + 'worked from one module to eight, medium draw rises from 0.96 to 7.7 litres a day and power from 3–8 watts to '
        + '24–64, against the 101 watt-hours a day a 45 watt solar panel harvests. Eight continuous cross-flow pumps is '
        + 'also eight failure points, and running the recirculation pump on a duty cycle relieves medium, power and pump '
        + 'wear at once, at the cost of settling inside the fibres during the off phase — that is the first experiment we '
        + 'would run on this axis. The arithmetic does work at the farm scale we are aiming at: ten twenty-litre units '
        + 'cover two and a half hectares while running only 4.3 percent of the calendar, so what we are really buying with '
        + 'ten machines is capital and medium, not reactor time.',
      zh: '卡住的不是膜，而且膜還是最後才卡：單一模組我們跑在 2 LMH，臨界通量是 46 LMH，纖維還有大約 25 倍的餘裕。'
        + '先卡住的是耗材和電——從一組模組算到八組，培養基用量從 0.96 升到 7.7 L/天，功率從 3–8 W 升到 24–64 W，'
        + '而一塊 45 W 太陽能板一天只收 101 Wh。八台連續運轉的切向流泵也等於八個故障點；'
        + '讓循環泵改成間歇運轉可以同時緩解培養基、功率與泵的耗損，代價是停機時纖維內會沉降——那就是我們在這條軸上'
        + '第一個要做的實驗。在我們瞄準的農場尺度上，這筆帳是算得過來的：十台 20 L 的機器可以覆蓋兩公頃半，'
        + '而且只用掉 4.3% 的日曆時間，所以買十台機器真正買到的是資本與培養基的額度，不是反應器時間。'
    }
  }
]);
