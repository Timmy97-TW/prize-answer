AWARD({
  id: 'ihp',
  tag: { en: 'Special Award', zh: '特別獎' },
  name: { en: 'Best Integrated Human Practices', zh: '最佳整合人文實踐' },
  basis: {
    en: 'Six aspects from the judging handbook: how well the work was integrated throughout the project, how '
      + 'thoughtfully it was implemented, whether it made the project responsible and good for the world, how well '
      + 'it incorporated different stakeholder views, how well it is documented for others to build on, and how '
      + 'inspiring an example it is. The page carries 31 stakeholders in five pipelines, and every engagement is '
      + 'logged as a Before and an After.',
    zh: '評審手冊列出六個面向：這些工作有多貼合整個專案、執行得多縝密、是否讓專案真的負責且對世界有益、'
      + '有沒有納入不同利害關係人的觀點、文件是否讓別人能接著做下去，以及它作為範例有多具啟發性。'
      + '頁面上有 31 位利害關係人、分成五條線，而且每一次接觸都以「之前」與「之後」兩欄記錄下來。'
  },
  questions: [
    {
      q: {
        en: 'How well was the Human Practices work integrated throughout the project?',
        zh: '人文實踐的工作與整個專案整合得有多緊密？'
      },
      flow: [
        { t: { en: 'Every entry is a Before and an After', zh: '每一筆都有「之前」與「之後」' } },
        { t: { en: 'Vessel, not soil', zh: '留在槽裡，不放進土裡' },
          leaf: [{ en: '10 April — the bioreactor exists because of this', zh: '4 月 10 日——生物反應器因此存在' }] },
        { t: { en: 'The membrane was prescribed', zh: '膜是被指定的' },
          leaf: [{ en: '18 April — retain cells, let protectant diffuse', zh: '4 月 18 日——留住菌、讓保護劑擴散出去' }] },
        { t: { en: '13 October — down to the irrigation line', zh: '10 月 13 日——一路做到灌溉管線' } }
      ],
      ev: [
        { t: { en: 'Every engagement on the page is logged as a Before and an After, so a judge can read the project as a chain of decisions rather than a list of meetings. Twenty-four of them carry that pair.',
               zh: '頁面上每一次接觸都以「之前」與「之後」兩欄記錄，所以評審看到的是一串決定，而不是一份會議清單。其中有 24 次帶著這組對照。' }, src: 'human-practices' },
        { t: { en: 'Prof. Chen Wen-Liang, 10 April. Before: Bacillus subtilis as a PGPR released to detect stress in the field. After: a controlled bioreactor-based system, physical containment as the primary biosafety mechanism, and a competitive analysis of what already exists. That single conversation is why a bioreactor exists at all.',
               zh: '陳文亮教授，4 月 10 日。之前：讓枯草桿菌以 PGPR 的形式釋放到田裡偵測逆境。之後：改成受控的生物反應器系統、以物理圍阻為主要生物安全機制，並對既有產品做競爭分析。生物反應器之所以存在，就是這一場對話。' }, src: 'human-practices' },
        { t: { en: 'Dr. Jennifer Brophy, 18 April. Before: design a kill switch to stop B. subtilis leaking. After: treat physical containment as primary and evaluate whether a kill switch is needed at all — and design a semi-permeable membrane that retains the bacteria while letting the protectants diffuse through. The hollow fibre was prescribed in that meeting.',
               zh: 'Jennifer Brophy 博士，4 月 18 日。之前：設計自殺開關以防枯草桿菌外洩。之後：以物理圍阻為主，並重新評估到底需不需要自殺開關——而且要設計一層半透膜，留住菌體、同時讓保護劑擴散出去。中空纖維就是在那場會議裡被指定下來的。' }, src: 'human-practices' },
        { t: { en: 'Prof. Chang Jo-Shu, 20 June. Before: the mathematical model and the wet lab were relatively separate. After: establish a feedback loop between them, and test salt concentration against treatment duration so dose, timing and plant response can be related. The Math Model page exists in its present shape because of that.',
               zh: '張嘉修教授，6 月 20 日。之前：數學模型與濕式實驗相對各做各的。之後：在兩者之間建立回饋迴路，並以鹽濃度對處理時間做測試，好把劑量、時機與植物反應連起來。Math Model 頁面會長成現在這樣，原因就在這裡。' }, src: 'human-practices' },
        { t: { en: 'Dr. Elizabeth Sattely, 27 June. Before: integrating protectant production into the bioreactor before validating the protectant itself. After: test the purified protectant on plants first, and use the plant assay to decide whether a protectant is worth integrating at all. That reversed the order of the whole programme.',
               zh: 'Elizabeth Sattely 博士，6 月 27 日。之前：還沒驗證保護劑本身，就先把它的生產整合進反應器。之後：先把純化的保護劑直接用在植物上，再用植物實驗來決定這個保護劑值不值得整合進去。整個計畫的先後順序因此倒過來。' }, src: 'human-practices' },
        { t: { en: 'Mr. Riddler Lu of AgriWeather, 13 October. Before: because of the dilution problem we had decided farmers would spray by hand. After: a separate chamber in the bioreactor pre-mixes protectant and water at a chosen ratio and delivers through the irrigation line. Integration reached the last metre of the system two weeks before the freeze.',
               zh: '天氣風險管理公司的盧安邦先生，10 月 13 日。之前：因為稀釋問題，我們決定讓農民自己手動噴灑。之後：在反應器裡加一個獨立腔室，把保護劑與水按選定比例預混，再經由灌溉管線送出。在凍結前兩週，整合一路推進到系統的最後一公尺。' }, src: 'human-practices' }
      ],
      figs: ['i07', 'i06', 'u03', 'x14', 'x08'],
      a: {
        en: 'Every engagement on our Human Practices page is logged as a Before and an After, so the project reads as '
          + 'a chain of decisions rather than a list of meetings. The architecture itself came from one of them: on 10 '
          + 'April Professor Chen Wen-Liang moved us from releasing Bacillus subtilis into the field to a contained '
          + 'bioreactor with physical containment as the primary biosafety mechanism, which is why a bioreactor exists '
          + 'at all; eight days later Dr. Jennifer Brophy not only replaced the kill switch but prescribed the fix — a '
          + 'semi-permeable membrane that retains the bacteria while letting the protectants diffuse through, which is '
          + 'the hollow fibre the whole machine is built around. Integration then went in both directions: Professor '
          + 'Chang Jo-Shu told us in June to build a feedback loop between the mathematical model and the wet lab, and '
          + 'Dr. Elizabeth Sattely told us to test purified protectant on plants before integrating it, which reversed '
          + 'the order of the entire programme. It kept reaching further out as the year went on — two weeks before the '
          + 'freeze, Mr. Riddler Lu turned our manual spray into a mixing chamber that delivers through the irrigation '
          + 'line.',
        zh: '我們人文實踐頁面上每一次接觸都以「之前」與「之後」記錄，所以這個專案讀起來是一串決定，而不是一份會議清單。'
          + '架構本身就是其中一場的產物：4 月 10 日陳文亮教授把我們從「把枯草桿菌放到田裡」移到「密閉的生物反應器、'
          + '以物理圍阻為主要生物安全機制」，生物反應器之所以存在就是因為這句話；八天後 Jennifer Brophy 博士'
          + '不只拿掉了自殺開關，還直接指定了替代方案——一層能留住菌、又讓保護劑擴散出去的半透膜，也就是整台機器'
          + '繞著它建起來的那根中空纖維。接著整合往兩個方向長：張嘉修教授六月時要我們在數學模型與濕式實驗之間'
          + '建立回饋迴路；Elizabeth Sattely 博士則要我們先把純化的保護劑用在植物上再談整合，這把整個計畫的順序倒了過來。'
          + '而且它一路往外延伸——凍結前兩週，盧安邦先生把我們的手動噴灑變成了一個經由灌溉管線送出的預混腔室。'
      }
    },
    {
      q: {
        en: 'How thoughtfully was it implemented, and how well did the team explain context, rationale and prior work?',
        zh: '執行得有多縝密？脈絡、理由與既有工作解釋得如何？'
      },
      flow: [
        { t: { en: 'One question from Ghana', zh: '從迦納的一個問題開始' },
          leaf: [{ en: '1 February — are abiotic stresses really hurting our crops?', zh: '2 月 1 日——逆境真的在傷害我們的作物嗎？' }] },
        { t: { en: 'Four stages, five pipelines', zh: '四個階段、五條線' },
          leaf: [{ en: 'organised by decision, not by date', zh: '按決定編排，不按日期' }] },
        { t: { en: 'Scope narrowed on purpose', zh: '範圍是刻意收窄的' },
          leaf: [{ en: 'osmotic stress dropped, biotic stress added', zh: '放掉滲透逆境、加入生物逆境' }] }
      ],
      ev: [
        { t: { en: 'The project starts from a question, not an idea: Gilbert Nkpeniyeng of USE-GH in Ghana asked on 1 February whether abiotic stresses were really affecting their crops, and the page traces everything from February to October back to it.',
               zh: '這個專案是從一個問題開始的，不是從一個點子開始的：迦納 USE-GH 的 Gilbert Nkpeniyeng 在 2 月 1 日問，逆境是不是真的在影響他們的作物；頁面上從二月到十月的一切都追回到這個問題。' }, src: 'human-practices' },
        { t: { en: 'The Project Evolution Map sets out four stages — Idea Formation, System Design, System Optimization, Real-World Implementation — and names the stakeholders whose feedback moved each one, so the reasoning is readable as a design history rather than a calendar.',
               zh: '專案演進圖分成四個階段——構想成形、系統設計、系統優化、真實世界落地——並點出推動每個階段的利害關係人，所以這段推理讀起來是一份設計史，而不是一本行事曆。' }, src: 'human-practices' },
        { t: { en: 'Expert engagement is organised into five pipelines by the decision it informed: plant and stress biology, protectant design, gene circuit and cloning, bioreactor and hardware, and deployment and Human Practices.',
               zh: '專家接觸按「影響了哪個決定」分成五條線：植物與逆境生物學、保護劑設計、基因迴路與選殖、生物反應器與硬體，以及部署與人文實踐。' }, src: 'human-practices' },
        { t: { en: 'Scope was narrowed on the record and for stated reasons: osmotic stress was dropped because of testing resource constraints, hydroponics stopped being the main experimental system after Prof. Cheng Mei-Chun warned it would not be stable, and biotic stress was added after the farmers told us it was their biggest problem.',
               zh: '範圍是有紀錄、有理由地收窄的：滲透逆境因為測試資源有限而放掉；鄭梅君教授提醒水耕不夠穩定之後，水耕就不再是主要實驗系統；而生物逆境是在農民告訴我們那才是他們最大的問題之後才加進來的。' }, src: 'human-practices' },
        { t: { en: 'The target plant and the stress window were both set by experts rather than by us: Prof. Cheng moved the model to Arabidopsis thaliana on 27 March and told us to prioritise agar plates before soil, and Dr. Paul Verslues moved us from delivering proline to regulating the plant’s own drought response.',
               zh: '目標植物與逆境區間都是專家定的，不是我們定的：鄭梅君教授在 3 月 27 日把模式植物換成阿拉伯芥，並要我們先做瓊脂平板再進土壤；Paul Verslues 博士則把我們從「輸送脯胺酸」移到「調節植物自己的乾旱反應」。' }, src: 'human-practices' },
        { t: { en: 'Prior work is named rather than skirted. The light plate is the open-hardware LPA of Gerhardt et al. (2016); the circuit follows the CcaSR work of Castillo-Hair et al. (2019) and the B. subtilis protocol of Haller et al. (2025); what we add on top is stated separately.',
               zh: '既有工作是直接點名、不是繞過：光照盤用的是 Gerhardt 等人 2016 年的開源 LPA；迴路依循 Castillo-Hair 等人 2019 年的 CcaSR 工作與 Haller 等人 2025 年的枯草桿菌流程；我們在上面加了什麼，則是分開寫清楚的。' }, src: 'measurement' }
      ],
      figs: ['i03', 'o03', 'g01', 'p01', 'p04'],
      a: {
        en: 'The project starts from a question rather than an idea: on 1 February Gilbert Nkpeniyeng of USE-GH in '
          + 'Ghana asked whether abiotic stresses were really affecting their crops, and the page traces nine months of '
          + 'work back to it. That work is organised twice over — as a Project Evolution Map in four stages, and as '
          + 'five engagement pipelines named for the decision each informed, from plant and stress biology through to '
          + 'deployment — so a judge reads a design history rather than a calendar. Scope was narrowed on the record '
          + 'and for stated reasons: osmotic stress was dropped for lack of testing resources, hydroponics stopped '
          + 'being the main system after Professor Cheng Mei-Chun warned it would not be stable, and biotic stress was '
          + 'added only after thirty farmers told us pests and disease were hurting them more than weather. Even the '
          + 'model plant was not ours to choose — Professor Cheng moved us to Arabidopsis thaliana and told us to work '
          + 'on agar before soil — and prior work is named where we stand on it, from the open-hardware light plate of '
          + 'Gerhardt and colleagues to the CcaSR system of Castillo-Hair and the Bacillus subtilis protocol of Haller.',
        zh: '這個專案是從一個問題開始的，不是從一個點子開始的：2 月 1 日，迦納 USE-GH 的 Gilbert Nkpeniyeng 問我們，'
          + '非生物逆境是不是真的在影響他們的作物；頁面上九個月的工作都追回到這一問。這些工作被整理了兩次——'
          + '一次是分成四個階段的專案演進圖，一次是以「影響了哪個決定」命名的五條接觸線，從植物與逆境生物學'
          + '一路到部署——所以評審讀到的是一份設計史，不是一本行事曆。範圍是有紀錄、有理由地收窄的：'
          + '滲透逆境因為測試資源不足而放掉；鄭梅君教授提醒水耕不夠穩定之後，它就不再是主要系統；'
          + '而生物逆境是在三十位農民告訴我們「病蟲害比天氣更傷」之後才加進來的。連模式植物都不是我們自己選的——'
          + '鄭教授把我們換到阿拉伯芥，並要我們先做瓊脂再進土壤——而我們站在誰的工作上也都點名寫出來，'
          + '從 Gerhardt 等人的開源光照盤，到 Castillo-Hair 的 CcaSR 系統與 Haller 的枯草桿菌流程。'
      }
    },
    {
      q: {
        en: 'Did the Human Practices work convince you the project is responsible and good for the world?',
        zh: '這些人文實踐工作，能讓人相信這個專案是負責的、對世界有益的嗎？'
      },
      flow: [
        { t: { en: 'A pore, not a kill switch', zh: '用孔徑，不用自殺開關' },
          leaf: [{ en: 'said first on 19 March, settled on 18 April', zh: '3 月 19 日先被提出、4 月 18 日定案' }] },
        { t: { en: 'We published the criticism of us', zh: '我們把針對自己的批評登出來' },
          leaf: [{ en: 'Dr. Li: technology as painkiller', zh: '李博士：科技像止痛藥' }] },
        { t: { en: 'Our own plants argue for the gate', zh: '我們自己的植物支持「按需生產」' },
          leaf: [{ en: 'too much help weakens a living thing', zh: '給太多反而削弱生命本身' }] }
      ],
      ev: [
        { t: { en: 'The kill switch was questioned by a stakeholder before we questioned it: Dr. Lin Wei-Yi of NTU said on 19 March to consider not doing one, Prof. Chen Wen-Liang moved us to a contained vessel on 10 April, and Dr. Brophy settled it on 18 April — physical containment primary, a kill switch only if still needed.',
               zh: '自殺開關是利害關係人先質疑的，不是我們先質疑的：台大林維怡博士 3 月 19 日就說可以考慮不做；陳文亮教授 4 月 10 日把我們移進密閉槽體；Brophy 博士 4 月 18 日定案——物理圍阻為主，自殺開關只在仍有需要時才加。' }, src: 'human-practices' },
        { t: { en: 'We publish the criticism aimed at the premise of our own project. At our public forum Dr. Li Hsu-Ying compared excessive technological intervention to prescribing painkillers without examining the cause, and used Zambia to show how external support and high-yield seeds can reduce farmers’ independence.',
               zh: '我們把針對自己專案前提的批評也登出來。在公開論壇上，李旭英博士把過度的科技介入比作「只開止痛藥卻不查病因」，並以尚比亞為例說明外部援助與高產種子如何反而削弱農民的自主性。' }, src: 'human-practices' },
        { t: { en: 'A farmer made the same point in her own words. Ms. Chen Hui-Wen of Tamsui Happy Farm told us on 21 July that "sometimes, giving too much is not necessarily beneficial for a living organism; instead, it can take away its ability to survive and thrive on its own."',
               zh: '一位農民用她自己的話說了同一件事。淡水幸福農場的陳慧文小姐在 7 月 21 日告訴我們：「有時候給太多，對一個生命不見得是好事，反而會拿走它自己活下去、長得好的能力。」' }, src: 'human-practices' },
        { t: { en: 'Our own plants argue the same way, which is why production is gated rather than constitutive: every BoPep4 co-treated plate was chlorotic, and the unstressed co-treated plate fell below the mock control on both weight and chlorophyll.',
               zh: '我們自己的植物也站在同一邊，這就是為什麼生產是有閘門的、不是持續表現的：每一個 BoPep4 同時處理的培養盤都黃化，而沒有逆境的同時處理組在鮮重與葉綠素上都低於模擬對照。' }, src: 'plant' },
        { t: { en: 'Prof. Chen Wen-Liang came back on 15 October and told us to emphasise and validate the membrane’s containment function rather than assume it, which is why the containment plating and the breach detector are reported with their limits rather than as settled facts.',
               zh: '陳文亮教授 10 月 15 日再次提醒我們，膜的圍阻功能要強調也要驗證，不能當成理所當然——這就是為什麼圍阻塗盤與破損偵測器都是連同限制一起報，而不是當成已成定論的事實。' }, src: 'human-practices' },
        { t: { en: 'The regulatory position was built from the same advice and is reported as mapped, not cleared: Director Wu Tzu-Hsien told us on 12 October to plan a biosafety case covering no live bacteria, membrane disposal, strain source and on-site service, and to contact the authorities about the product category. No regulator in any of eight markets has confirmed anything in writing.',
               zh: '法規立場也是從同樣的建議長出來的，而且是以「畫出來了、還沒通」來陳述：吳姿嫻場長 10 月 12 日要我們準備一份生物安全說帖，涵蓋「無活菌、膜的廢棄處理、菌株來源、現場服務」，並就產品分類去跟主管機關接洽。八個市場裡沒有任何主管機關給過書面確認。' }, src: 'laws-and-regulations' }
      ],
      figs: ['x18', 'p06', 'x16', 'x09', 'x15'],
      a: {
        en: 'The responsibility argument rests on decisions we did not make alone, and on criticism we chose to '
          + 'publish. The kill switch was questioned by a stakeholder before we questioned it — Dr. Lin Wei-Yi on 19 '
          + 'March, then Professor Chen Wen-Liang, then Dr. Brophy on 18 April, who made physical containment primary '
          + 'and specified the membrane that does it. Where the criticism went to the premise of the project, we '
          + 'printed it: at our public forum Dr. Li Hsu-Ying compared excessive technological intervention to '
          + 'prescribing painkillers without examining the cause, and used Zambia to show how external support can '
          + 'reduce farmers’ independence — and Ms. Chen Hui-Wen said the same thing from her own farm, that giving '
          + 'a living organism too much can take away its ability to thrive on its own. Our own plants then argued for '
          + 'the same restraint, since every BoPep4 co-treated plate was chlorotic and the unstressed one fell below '
          + 'the mock control, which is the strongest reason we produce on demand rather than constitutively. And when '
          + 'Professor Chen came back in October and told us to validate the membrane rather than assume it, we '
          + 'reported the containment plating with its limits instead of as a settled fact.',
        zh: '「負責」這個論點，建立在不是我們自己做的決定上，也建立在我們選擇公開的批評上。自殺開關是利害關係人'
          + '先質疑的，不是我們先質疑的——3 月 19 日林維怡博士、接著陳文亮教授，然後 4 月 18 日 Brophy 博士定案，'
          + '把物理圍阻放在第一位，並指定了執行它的那層膜。而當批評直指這個專案的前提時，我們就把它印出來：'
          + '在公開論壇上，李旭英博士把過度的科技介入比作「只開止痛藥卻不查病因」，並以尚比亞說明外部援助'
          + '如何反而削弱農民的自主性——陳慧文小姐也在自己的農場上說了同一件事：給一個生命太多，'
          + '反而會拿走它自己長得好的能力。接著我們自己的植物也支持同樣的節制，因為每一個 BoPep4 同時處理的盤子都黃化，'
          + '沒有逆境的那一組甚至低於模擬對照——這就是我們選擇按需生產而不是持續生產最強的理由。'
          + '而當陳教授十月再回來提醒我們「膜要驗證，不能假設」，我們就把圍阻塗盤連同它的限制一起報，而不是當成定論。'
      }
    }
  ]
});
