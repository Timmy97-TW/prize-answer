AWARD({
  id: 'ihp',
  tag: { en: 'Special Award', zh: '特別獎' },
  name: { en: 'Best Integrated Human Practices', zh: '最佳整合人文實踐' },
  basis: {
    en: 'Six aspects from the judging handbook: how well the work was integrated throughout the project, how '
      + 'thoughtfully it was implemented, whether it made the project responsible and good for the world, how well '
      + 'it incorporated different stakeholder views, how well it is documented for others to build on, and how '
      + 'inspiring an example it is.',
    zh: '評審手冊列出六個面向：這些工作有多貼合整個專案、執行得多縝密、是否讓專案真的負責且對世界有益、'
      + '有沒有納入不同利害關係人的觀點、文件是否讓別人能接著做下去，以及它作為範例有多具啟發性。'
  },
  questions: [
    {
      q: {
        en: 'How well was the Human Practices work integrated throughout the project?',
        zh: '人文實踐的工作與整個專案整合得有多緊密？'
      },
      flow: [
        { t: { en: 'Vessel, not soil', zh: '留在槽裡，不放進土裡' },
          leaf: [{ en: 'a bioreactor exists because of this', zh: '生物反應器因此才存在' }] },
        { t: { en: 'No kill switch', zh: '拿掉自殺開關' },
          leaf: [{ en: 'the membrane is the containment', zh: '膜就是圍阻' }] },
        { t: { en: 'Nothing drove it across', zh: '沒有東西把它推過膜' },
          leaf: [{ en: 'a voided run, a new protocol', zh: '一次作廢的運轉，一份新流程' }] }
      ],
      ev: [
        { t: { en: 'Professor Chen Wen-Liang, April: engineered bacteria released into open soil cannot be defended — keep them in a vessel and sell the consumable. That ended the transgenic rhizobacterium plan and is the reason a bioreactor exists at all.',
               zh: '陳文亮教授，四月：放進開放土壤的基改細菌是沒辦法辯護的——把菌留在槽裡，賣消耗品。這句話結束了我們的基改根圈菌計畫，也是生物反應器之所以存在的原因。' }, src: 'human-practices' },
        { t: { en: 'Dr. Jennifer Brophy, 18 April: make physical containment primary rather than a kill switch, because a switch is DNA under selection. The membrane became the containment, which set the instrument list.',
               zh: 'Jennifer Brophy 博士，4 月 18 日：主要圍阻要用物理方式，不要靠自殺開關，因為開關是受選擇壓力的 DNA。膜因此成為圍阻，也決定了要裝哪些儀器。' }, src: 'human-practices' },
        { t: { en: 'Professor Chang Jo-Shu, 4 September: nothing in the design pushed protectant from lumen to shell, which produced the pinch valve, a smaller module, and the pressure and flow channels.',
               zh: '張嘉修教授，9 月 4 日：設計裡沒有任何東西把保護劑從管內推到殼側——這帶出了夾管閥、更小的膜模組，以及壓力與流量通道。' }, src: 'human-practices' },
        { t: { en: 'Professor Chen, 15 October: asked why ReLEAF needs a specialised bioreactor at all, which is what joined the auto-filling medium work in the model to the wet-lab schedule.',
               zh: '陳教授，10 月 15 日：問我們 ReLEAF 到底為什麼需要一台專用的生物反應器——正是這一問，把模型裡的自動補料工作接到濕式實驗的排程上。' }, src: 'human-practices' },
        { t: { en: 'Dr. Kyle Peng voided one of our own hydroponic runs because culture volume was not standardised across arms, and the protocol changed.',
               zh: 'Kyle Peng 博士因為各組培養液體積沒有標準化，判定我們自己一次水耕運轉作廢，流程也因此改掉。' }, src: 'plant' }
      ],
      figs: ['i07', 'i06', 'i05', 'i09'],
      a: {
        en: 'The project’s architecture was set by a stakeholder, not by the lab. In April Professor Chen Wen-Liang told '
          + 'us that engineered bacteria released into open soil cannot be defended and that we should keep them in a vessel '
          + 'and sell the consumable — that ended our transgenic rhizobacterium plan and is the reason a bioreactor exists '
          + 'at all. Dr. Jennifer Brophy then removed our genetic kill switch in favour of physical containment, which made '
          + 'the membrane the barrier and therefore decided what the instruments have to measure; Professor Chang Jo-Shu '
          + 'found that nothing in our design actually drove protectant from the lumen to the shell, which produced the '
          + 'pinch valve, a smaller module and the pressure and flow channels. Integration runs down to protocol level: Dr. '
          + 'Kyle Peng voided one of our own hydroponic runs because culture volume was not standardised between arms, and '
          + 'that run is reported as void alongside the protocol that replaced it.',
        zh: '這個專案的架構是利害關係人定的，不是實驗室定的。四月時陳文亮教授告訴我們，放進開放土壤的基改細菌沒辦法辯護，'
          + '應該把菌留在槽裡、賣消耗品——這句話結束了我們的基改根圈菌計畫，也是生物反應器之所以存在的原因。'
          + '接著 Jennifer Brophy 博士拿掉我們的基因自殺開關、改用物理圍阻，讓膜成為屏障，也因此決定了儀器要量什麼；'
          + '張嘉修教授則發現我們的設計裡其實沒有任何東西把保護劑從管內推到殼側，這就帶出了夾管閥、更小的膜模組，'
          + '以及壓力與流量通道。整合一路做到流程層級：Kyle Peng 博士因為各組培養液體積沒有標準化，'
          + '判定我們自己一次水耕運轉作廢，而那次運轉就以「作廢」記在頁面上，旁邊放著取代它的新流程。'
      }
    },
    {
      q: {
        en: 'How thoughtfully was it implemented, and how well did the team explain context, rationale and prior work?',
        zh: '執行得有多縝密？脈絡、理由與既有工作解釋得如何？'
      },
      flow: [
        { t: { en: '31 stakeholders, Feb to Oct', zh: '31 位利害關係人，二月到十月' } },
        { t: { en: 'Grouped by the decision', zh: '按「影響了哪個決定」分組' },
          leaf: [{ en: 'not by the date', zh: '不是按日期' }] },
        { t: { en: 'Four options, light chosen', zh: '四個選項，選了光' },
          leaf: [{ en: 'prior art named, not skirted', zh: '既有技術直接點名' }] }
      ],
      ev: [
        { t: { en: '31 stakeholders engaged, from USE-GH Ghana on 1 February to the French Office in Taipei on 20 October.',
               zh: '共接觸 31 位利害關係人，從 2 月 1 日的迦納 USE-GH 到 10 月 20 日的法國在台協會。' }, src: 'human-practices' },
        { t: { en: 'The page is organised by the decision each conversation informed — plant biology, gene circuit, protectant design, bioreactor, deployment — not by date.',
               zh: '頁面是按每場對話影響了哪個決定來編排的——植物生物學、基因迴路、保護劑設計、生物反應器、部署——而不是按日期。' }, src: 'human-practices' },
        { t: { en: 'The signalling choice is argued from the alternatives: light, electricity, chemical and small molecule were all put to Dr. Brophy, and light was taken because it adds nothing to the culture and passes through a sealed wall.',
               zh: '訊號方式是從所有選項裡論證出來的：光、電、化學與小分子四種都攤給 Brophy 博士看過，最後選光，因為它不往培養液裡加任何東西，又能穿過密封壁。' }, src: 'human-practices' },
        { t: { en: 'The rationale for keeping the threshold outside the cell is quantitative: rice photosynthesis is inhibited above about 25 °C while sorghum stays optimal to about 32.5 °C, so a sensor inside the bacterium would need re-engineering per crop.',
               zh: '把閾值放在細胞外的理由是量化的：水稻光合作用約 25 °C 以上就受抑制，高粱到約 32.5 °C 仍是最適，所以把感測器放進細菌裡，每換一種作物就得重新改造。' }, src: 'results' },
        { t: { en: 'Prior work is named rather than skirted: hollow-fibre perfusion and DIY optical density meters both exist, so the pages state what we added — the single wall that does production, recovery and containment at once, and the signal-processing study behind the instrument.',
               zh: '既有工作是直接點名、不是繞過：中空纖維灌流與自製 OD 計都早就存在，所以頁面上明說我們加了什麼——一道同時做生產、回收與圍阻的膜，以及儀器背後那份訊號處理研究。' }, src: 'measurement' }
      ],
      figs: ['i01', 'i06', 'i03'],
      a: {
        en: 'Thirty-one stakeholders were engaged between 1 February and 20 October, and the Human Practices page is '
          + 'organised by the decision each conversation informed rather than by the calendar, so a judge can read it as a '
          + 'design history. Choices are argued from the alternatives: light, electricity, chemical and small-molecule '
          + 'induction were all put to Dr. Brophy before light was taken, on the stated grounds that it adds nothing to the '
          + 'culture and passes through a sealed wall. The reasoning is quantitative where it can be — rice photosynthesis '
          + 'is inhibited above about 25 degrees while sorghum stays optimal to about 32.5, which is why the stress '
          + 'threshold sits in a forecast outside the cell rather than inside the bacterium. And we name prior work instead '
          + 'of talking past it: hollow-fibre perfusion and DIY optical density meters both exist, so our pages say what we '
          + 'added, which is the single wall that does production, recovery and containment at once, and the '
          + 'signal-processing study behind the instrument.',
        zh: '從 2 月 1 日到 10 月 20 日共接觸了 31 位利害關係人，而人文實踐頁面是按每場對話影響了哪個決定來編排，'
          + '不是按日期，所以評審可以把它當成一份設計史來讀。選擇都是從替代方案裡論證出來的：光、電、化學與小分子誘導'
          + '四種全攤給 Brophy 博士看過，最後選光，理由寫得很清楚——它不往培養液裡加任何東西，又能穿過密封壁。'
          + '能量化的地方就量化：水稻光合作用約 25 °C 以上受抑制，高粱到約 32.5 °C 仍是最適，這就是為什麼逆境閾值'
          + '放在細胞外的預報裡，而不是放進細菌裡。既有工作我們也是直接點名而不是繞過：中空纖維灌流與自製 OD 計都早已存在，'
          + '所以頁面上明說我們加了什麼——一道同時完成生產、回收與圍阻的膜，以及儀器背後那份訊號處理研究。'
      }
    },
    {
      q: {
        en: 'Did the Human Practices work convince you the project is responsible and good for the world?',
        zh: '這些人文實踐工作，能讓人相信這個專案是負責的、對世界有益的嗎？'
      },
      flow: [
        { t: { en: 'A pore, not a kill switch', zh: '用孔徑，不用自殺開關' } },
        { t: { en: 'Our own data argue for the gate', zh: '我們自己的數據支持「按需生產」' },
          leaf: [{ en: 'BoPep4 harmed unstressed plants', zh: 'BoPep4 傷害沒有逆境的植株' }] },
        { t: { en: 'Nothing confirmed in writing', zh: '沒有任何書面確認' },
          leaf: [{ en: 'one price, twice cost', zh: '一個價格，成本兩倍' }] }
      ],
      ev: [
        { t: { en: 'Physical containment was adopted on expert advice because a genetic switch is DNA under selection and will fail; the barrier is also the product path, so monitoring it is monitoring containment.',
               zh: '採用物理圍阻是依專家建議：基因開關是受選擇壓力的 DNA，終究會失效；而這道屏障同時是產物路徑，所以監測它就等於監測圍阻。' }, src: 'human-practices' },
        { t: { en: 'Our own plant data argue for producing on demand: every BoPep4 co-treated plate was chlorotic, and the unstressed co-treated plate fell below the mock control, so a continuously producing strain would deliver that penalty all season.',
               zh: '我們自己的植物數據支持「按需生產」：每一個 BoPep4 同時處理的培養盤都黃化，而沒有逆境的同時處理組甚至低於模擬對照——持續生產的菌株會讓這個代價整季都發生。' }, src: 'plant' },
        { t: { en: 'CH Biotech’s Director Liu warned about escape on 5 September, and the warning is published on the Laws page rather than left out.',
               zh: '正瀚生技劉總在 9 月 5 日提出逸散的警告，而這個警告就公布在法規頁上，沒有被拿掉。' }, src: 'laws-and-regulations' },
        { t: { en: 'The regulatory position is stated as mapped and not cleared: no regulator in any of eight markets has confirmed anything in writing.',
               zh: '法規立場是以「畫出來了、還沒通」來陳述的：八個市場裡沒有任何主管機關給過書面確認。' }, src: 'laws-and-regulations' },
        { t: { en: 'The commercial choices are explicit: one price for every farm at twice full cost, a free four-hectare pilot, and farmer subsidies only once cumulative cash turns positive.',
               zh: '商業選擇也寫明：所有農場同一個價，定在成本兩倍；提供免費的四公頃試點；而對農民的補貼要等累積現金轉正才開始。' }, src: 'entrepreneurship' }
      ],
      figs: ['f01', 'p06', 'l01'],
      a: {
        en: 'The responsibility argument rests on two decisions we did not make alone. Physical containment replaced a '
          + 'genetic kill switch because a switch is DNA under selection and will mutate, and the barrier we chose doubles '
          + 'as the product path, so monitoring the membrane is monitoring containment. Producing only on demand came from '
          + 'our own plants rather than from principle: every BoPep4 co-treated plate was chlorotic and the unstressed '
          + 'co-treated plate fell below the mock control, which is the growth-versus-tolerance trade-off appearing in our '
          + 'own data and the strongest argument we have against a constitutive strain. We also publish what does not help '
          + 'us — an industry warning about escape from CH Biotech’s Director Liu, and the fact that no regulator in any '
          + 'of eight markets has confirmed our route in writing, so we call it mapped and not cleared. The commercial '
          + 'choices follow the same rule: one price for every farm at twice full cost, a free four-hectare pilot, and '
          + 'subsidies only once cumulative cash turns positive.',
        zh: '「負責」這個論點建立在兩個不是我們自己做的決定上。物理圍阻取代了基因自殺開關，因為開關是受選擇壓力的 DNA、'
          + '終究會突變；而我們選的這道屏障同時也是產物路徑，所以監測膜就等於監測圍阻。「只在需要時生產」'
          + '則是從我們自己的植物來的，不是從原則來的：每一個 BoPep4 同時處理的培養盤都黃化，沒有逆境的同時處理組'
          + '甚至低於模擬對照——這就是生長與耐受的取捨出現在我們自己的數據裡，也是我們反對持續表現菌株最強的論據。'
          + '對我們不利的東西我們也公布——正瀚生技劉總關於逸散的業界警告，以及八個市場裡沒有任何主管機關給過書面確認'
          + '這件事，所以我們說這條路是畫出來了、不是通了。商業選擇遵循同一條規則：所有農場同一個價、定在成本兩倍、'
          + '免費的四公頃試點，而補貼要等累積現金轉正才開始。'
      }
    }
  ]
});
