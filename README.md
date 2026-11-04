# ReLEAF — Prize Answers

The four awards GEMS Taiwan is nominated for, and the nine Project questions that choose the
finalists, each one answered from the frozen 2026 wiki.

**[→ Open it](https://timmy97-tw.github.io/prize-answer/)**

Bilingual, English and 繁體中文, switchable in the top right. Static HTML and vanilla JavaScript:
no build step to view it, no external requests, works offline once loaded.

## What is on each question

| | |
|---|---|
| **Keywords** | At most six, drawn as a flow: two or three nodes along a spine with a branch under the ones that need it. This is what a student holds in their head when they are nervous — say the spine, and the sentence builds itself. |
| **Figures** | At most four, off our own wiki. Click one for the full-size figure and a reading of what it shows, so you know what a judge might be pointing at. |
| **The answer** | Three to five sentences of scientific English, ready to say out loud. Where a number has a boundary, the boundary is in the answer rather than hidden behind it. |
| **Evidence** | Three to five checkable items, each linked to the wiki page it came from. |

## The five sections

| Section | Questions | Where they come from |
|---|---|---|
| Best Biomanufacturing | 5 | A **Village Award**, scored on a weighted average of Project, Presentation and Wiki within the Biomanufacturing Village. The judging handbook gives it no separate aspect list, so these five are the biomanufacturing questions a village judge presses on. |
| Best Measurement | 4 | The four aspects in the handbook's Measurement section |
| Best Hardware | 4 | The four aspects in the handbook's Hardware section |
| Best Integrated Human Practices | 6 | The six aspects in the handbook's IHP section |
| Finalist Project Evaluation | 9 | The nine questions in the Project section of the judging ballot |

## Reading modes

**Full** shows everything. **Keywords** strips the page back to the question and its keyword flow —
that is the drill view. Both settings and the language stick in `localStorage`.

## Where the content comes from

Facts, figure readings and the honest boundaries are drawn from the team's judging trainer
(`releaf-judging-qa`), which was itself built from the frozen wiki at
[2026.igem.wiki/gems-taiwan](https://2026.igem.wiki/gems-taiwan/). Nothing here is invented. Where
our own pages disagree, the answer says which page is the authority rather than picking the
flattering number.

## Rebuilding the figures

```bash
python3 tools/figs.py
```

Copies the figures this site uses out of the sibling `releaf-judging-qa` checkout into `img/` and
writes `assets/figs.js`. Short labels are authored in `tools/figs.py`; the longer reading of each
figure is taken verbatim from the trainer's vetted figure bank, so the two sites cannot drift
apart. The script fails rather than publishing a missing image.

## The content files

`assets/data.js` holds the page registry and an empty award list; `assets/d*.js` fill it. Each
question is one object: the question in both languages, the keyword flow, the figure ids, the
evidence with its wiki slug, and the answer.

```bash
python3 -m http.server 8822   # then open http://localhost:8822
```

## Licence

Project facts and figures belong to GEMS Taiwan, iGEM 2026. The wiki is CC BY 4.0.
