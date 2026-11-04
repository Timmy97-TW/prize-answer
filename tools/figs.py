#!/usr/bin/env python3
"""Copy the figures this site uses out of the judging-trainer repo and write assets/figs.js.

Readings (the one-paragraph description of each figure, English and Chinese) are taken
verbatim from the trainer's vetted figure bank so the two sites cannot drift apart.
Short labels are authored here, because the bank stores a question, not a name.
"""
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QA = os.path.join(os.path.dirname(HERE), 'releaf-judging-qa')
BANK = os.path.join(QA, 'source', 'figures')
SRC_FQ = os.path.join(QA, 'docs', 'assets', 'img', 'fq')
SRC_IMG = os.path.join(QA, 'docs', 'assets', 'img')
OUT_IMG = os.path.join(HERE, 'img')
OUT_JS = os.path.join(HERE, 'assets', 'figs.js')

# figure id -> short label, English and Chinese. Two to six words: a name, not a caption.
LABELS = {
    'n01': ('Production chain', '生產鏈'),
    'n02': ('Perfusion system layout', '灌流系統配置'),
    'n03': ('The unit as a sealed case', '密封機箱'),
    'o01': ('Forecast to leaf', '預報到葉片'),
    'o02': ('The four circuit modules', '基因迴路四模組'),
    'o03': ('Night temperature by county', '各縣市夜溫'),
    's02': ('Seven reactor runs', '七次反應器運轉'),
    'm01': ('Silica ladder, three instruments', '二氧化矽梯度、三台儀器'),
    'm02': ('Bubble challenge and the gates', '氣泡挑戰與門檻'),
    'm03': ('Firmware quantisation', '韌體量化'),
    'm04': ('Reference channel decay', '參考通道衰退'),
    'm05': ('Two records, six days apart', '相隔六天的兩筆紀錄'),
    'm06': ('ELISA standard curve', 'ELISA 標準曲線'),
    'm07': ('DNPH activity time course', 'DNPH 活性時序'),
    'm08': ('Anti-His Western blot', 'Anti-His 西方墨點'),
    'm09': ('Pressure drop against flow', '壓差對流量'),
    'm10': ('Root tracing in ImageJ', 'ImageJ 根長描繪'),
    'h01': ('Pro and Slim photometers', 'Pro 與 Slim 光度計'),
    'h02': ('Bioreactor v4, two loops', '反應器 v4 雙迴路'),
    'h03': ('Hollow fiber cutaway', '中空纖維剖面'),
    'h04': ('Operator dashboard, 53 h in', '運轉中的操作介面'),
    'h05': ('Printed pinch valve', '3D 列印夾管閥'),
    'h06': ('Shell-side Luer valve', '殼側 Luer 閥'),
    'h07': ('Light Plate Apparatus', '光照培養盤'),
    'h08': ('Hydroponic floating plate', '水耕浮板'),
    'h09': ('The post that snapped', '斷掉的支柱'),
    'h10': ('Both builds, same scale', '兩款同比例'),
    'f01': ('Containment plating', '圍阻性塗盤'),
    'f02': ('Membrane cartridge in place', '裝上的膜模組'),
    'b01': ('Minimum viable product', '最小可行產品'),
    'b02': ('Break-even at 226 hectares', '226 公頃損益兩平'),
    'i01': ('Stakeholder map', '利害關係人地圖'),
    'i02': ('農友助手 LINE account', '農友助手 LINE'),
    'i03': ('Booth knowledge survey', '攤位知識調查'),
    'i04': ('Farmers’ KAP results', '農民 KAP 結果'),
    'i05': ('Prof. Chang, second visit', '張教授第二次來訪'),
    'i06': ('Dr. Brophy on signalling', 'Brophy 博士談訊號'),
    'i07': ('Prof. Chen on auto-filling', '陳教授談自動補料'),
    'i08': ('A farmer takes the microphone', '農民拿起麥克風'),
    'i09': ('The 15 October review', '10 月 15 日檢討'),
    'i10': ('Ms. Chen’s farm, Tamsui', '淡水陳小姐的農場'),
    'l01': ('Three markets, one Venn', '三個市場的交集'),
    'c01': ('Level 2, three clones', 'Level 2 三株菌'),
    'c06': ('Two assembly strategies', '兩套組裝策略'),
    'd03': ('Blind 2026 forecast', '2026 盲測預報'),
    'g02': ('Minimum temperature shift', '最低溫變化'),
    'p03': ('ACC deaminase salinity set', 'ACC 去胺酶鹽逆境組'),
    'p06': ('BoPep4 fresh weight', 'BoPep4 鮮重'),
    'u01': ('Knowledge, 18 to 82 percent', '知識從 18% 到 82%'),
    'u02': ('A high school class', '高中課堂'),
    'e01': ('The pre-survey', '前測'),
    'e03': ('The base-pairing card game', '鹼基配對紙牌'),
    'y01': ('Data physicalization booth', '資料實體化攤位'),
    'q01': ('Light-sensing unit map', '光感應單元圖譜'),
    'q10': ('The whole system on one map', '整個系統一張圖'),
    'v04': ('Three primer pairs, two clones', '三組引子、兩株菌'),
}

# figures that live outside the figure bank: id -> (source file under img/, label en, zh, reading en, zh)
EXTRA = {
    'j01': ('judging-prep-2025.jpg', 'Drilling for the session', '為評審場次做演練',
            'The team drilling judging answers together before the session. Seven seats, each with named '
            'territory, so a question reaches the person who ran the experiment.',
            '團隊在評審場次前一起演練答題。七個分工席位各有明確範圍，問題會落到真正做過那個實驗的人身上。'),
    'j02': ('judging-room-2025.jpg', 'A judging room', '評審室',
            'A judging room of the kind the session is held in: four in-person judges, five minutes of '
            'update and twenty minutes of questions.',
            '評審場次就在這樣的房間裡進行：四位現場評審，五分鐘進度報告，二十分鐘提問。'),
}


def main():
    bank = {}
    for name in sorted(os.listdir(BANK)):
        if not name.endswith('.json'):
            continue
        with open(os.path.join(BANK, name), encoding='utf-8') as fh:
            for fig in json.load(fh)['figures']:
                bank[fig['id']] = fig

    os.makedirs(OUT_IMG, exist_ok=True)
    out, missing = [], []

    for fid in sorted(LABELS):
        fig = bank.get(fid)
        if fig is None:
            missing.append(fid)
            continue
        src = os.path.join(SRC_FQ, fig['img'])
        if not os.path.exists(src):
            # Registry part-page figures are stored under img/reg, named by content hash.
            src = os.path.join(SRC_IMG, 'reg', fig['img'])
        if not os.path.exists(src):
            missing.append(fid + ' (' + fig['img'] + ')')
            continue
        shutil.copyfile(src, os.path.join(OUT_IMG, fig['img']))
        label_en, label_zh = LABELS[fid]
        out.append({
            'id': fid, 'img': fig['img'], 'page': fig.get('page', ''),
            'label': {'en': label_en, 'zh': label_zh},
            'read': {'en': fig['a_en'], 'zh': fig['a_zh']},
        })

    for fid, (name, label_en, label_zh, read_en, read_zh) in sorted(EXTRA.items()):
        src = os.path.join(SRC_IMG, name)
        if not os.path.exists(src):
            missing.append(fid + ' (' + name + ')')
            continue
        shutil.copyfile(src, os.path.join(OUT_IMG, name))
        out.append({
            'id': fid, 'img': name, 'page': '',
            'label': {'en': label_en, 'zh': label_zh},
            'read': {'en': read_en, 'zh': read_zh},
        })

    if missing:
        sys.exit('missing figures: ' + ', '.join(missing))

    with open(OUT_JS, 'w', encoding='utf-8') as fh:
        fh.write('/* Generated by tools/figs.py. Readings come from the judging trainer\'s figure bank. */\n')
        fh.write('var FIGS = ')
        json.dump({f['id']: f for f in out}, fh, ensure_ascii=False, indent=1)
        fh.write(';\n')

    print('%d figures written to %s' % (len(out), OUT_JS))


if __name__ == '__main__':
    main()
