---
title: Page layout
description: An example of LibDoc's page layout.
layout: libdoc/page

#LibDoc specific below
category: Layouts examples
order: 200
---
* 
{:toc}

The libdoc/page layout is the most versatile for common purpose.

## Here is a playground

You can include as much playgrounds into a single page. Here is an example of playground that add few lines of CSS in addition of settings from [config.yml file](libdoc-config.html#playground).

```html
<section id="wrapper-playground">
    <article    scroll-btween="text"
                data-detector="detector"
                data-transform="rotateX(50deg) translateY(|30 to -300|%)">
        <p>Little to congealed sick his stalked. Sun flatterers soul had me a his. Blazon a massy his of gild and. Would passion een he care, and plain his clay in felt counsel, whateer to is made loved to done that, pleasure and a ive cared control dwelt sadness. All by to in time night. Yet who befell wassailers if he have nor lands, or be sea his so. Brow begun sighed sacred or this some of. To uncouth bliss his many where loathed the found and. Sighed parasites nor childe chaste once visit it childe the.</p>
        <p>A scene fountain of save known in, and long night and mine his. And parasites and consecrate say but, sore congealed from later his a to more superstition, and that few had drugged did nor the, any breast he sadness fondly weary, from by one ofttimes ye earth  flatterers, and flee in ear consecrate from left den. Might a childe was and did had thence or their, smile full and long his aisle than ever once, were nor lone tales wandered. Start with feeble girls are. And come shamed his spoiled his den worse ere, or his plain far this not me. That and drowsy his said, run given scarce the albions her not at sister ever, the and condemned of strange flatterers harold. Ear a from wins it any, wassailers said the flee are heart such. Most of had childe times would maidens not his deem, talethis harolds land suffice flow is he cared visit honeyed. Then yet begun superstition of the begun way still.</p>
        <p>And perchance since could or a revellers gild where himnot. In knew unto ah now mood bower that, not so he pride for there there tis the, nor that mine present yea, where dote not and favour which a mirthful, felt where within hope departed, seemed ere agen to could and would of, yet waste such men that lines he. Ever sun vast ancient not heavenly his. They his hall plain was me, childe one disporting forgot ive day a feels. Sight strange save since sister were tis ungodly. A aisle along known and holy, through and loved soul prose third this bower caught. Of left know he flow break to eros nor a. And my concubines pillared to pilgrimage weary long been given. Smile labyrinth he such not found, a long of before will for a this come. Harold minstrels if his sooth. Fall long he stalked a nine hight, had thee though in agen of and awake, her not had to stalked dwell shrine the breast loved, but thee other breast pride childe, would seemed will his say did sea friends. In spoiled he of hall cell is or if. Who mote agen the labyrinth smile was childe, superstition degree in more sighed happy, bliss in this the monks loved nor. He save love seek and in of had, of a parting harolds in companie sins basked from,.Sit eirmod duo rebum invidunt.</p>
    </article>
</section>
<section id="detector"></section>
<style>
    body {
        background-color: black;
        color: yellow;
    }
    #detector { height: 500vh; }
    #wrapper-playground {
        perspective: 90vmax;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 3vmax;
        text-align: justify;
        line-height: 1.2em;
    }
    [scroll-btween="text"] {
        height: 100vh;
        transform-origin: top;
        padding: 3em;
        margin: auto;
        max-width: 40vmax;
        padding-top: 40vh;
    }
</style>
```
{:.playground title="Example of playground - Star Wars end credits"}


## Yet another playground example

This is another playground using settings from [config.yml](libdoc-config.html#playground).

```html
<nav    class="top"
        scroll-btween="nav_1"
        data-detector="detector-w1" 
        data-top="|0:20 to 30:0 to 100:0|px">
    <a  href="{{site.url}}{{site.baseurl}}/#playground-example" target="_parent">Code of this playground</a>
</nav>
<article>
    <p>
        <span scroll-btween="w1" 
                data-detector="detector-w1" 
                data-opacity="|0:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.05 to 100:0|em">Scroll down</span>
        <span scroll-btween="w2" 
                data-detector="detector-w2" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">This is a</span>
        <span scroll-btween="w3" 
                data-detector="detector-w3" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">playground</span>
        <span scroll-btween="w4" 
                data-detector="detector-w4" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">example</span>
        <span scroll-btween="w5" 
                data-detector="detector-w5" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">with its</span>
        <span scroll-btween="w6" 
                data-detector="detector-w6" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">own settings</span>
    </p>
</article>
<div id="detector-w1" class="detector">&nbsp;</div>
<div id="detector-w2" class="detector">&nbsp;</div>
<div id="detector-w3" class="detector">&nbsp;</div>
<div id="detector-w4" class="detector">&nbsp;</div>
<div id="detector-w5" class="detector">&nbsp;</div>
<div id="detector-w6" class="detector">&nbsp;</div>
<nav class="bottom">
    <a  href="https://olivier3lanc.github.io/Scroll-Btween" target="_blank">This demo uses ScrollBtween</a>
</nav>  
<style>
@import url('https://fonts.googleapis.com/css2?family=Kufam:wght@600&display=swap');
html {
    position: relative;
}
html::before {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border: 1px solid white;
}
body {
    color: #FFF;
    font-family: 'Kufam', sans-serif;
    background: radial-gradient(circle at 50% 50%, #ffb56b, #f39060, #e16b5c, #ca485c, #ac255e, #870160, #5b0060, #1f005c);
}
nav.top {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1;
}
nav.bottom {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 1;
}
nav a {
    display: inline-flex;
    padding: 1em;
    color: white;
    font-size: 14px;
    font-family: monospace;
}
article {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
p {
    font-size: 10vmin;
    letter-spacing: -0.1em;
    line-height: 1em;
    text-align: center;
    white-space: nowrap;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
p > span {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    opacity: 0;
    margin: -1em 0em 0em 0em;
}
.detector { margin-top: 95vh; margin-bottom: 95vh; }
</style>
```
{:.playground title="Playground example"}

## Headings

To create a heading, add one to six # symbols before your heading text. The number of # you use will determine the size of the heading.

## Styling text

You can indicate emphasis with bold, italic, or strikethrough text.

**This is bold text**

*This text is italicized*

~~This was mistaken text~~

**This text is _extremely_ important**

***All this text is important***

## Quoting text

You can quote text with a `>`.

> Pardon my French

## Task lists

To create a task list, preface list items with a regular space character followed by [ ]. To mark a task as complete, use [x].

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [ ] \(Optional) Open a followup issue

## Mentioning people and teams

You can mention a person or team on GitHub by typing @ plus their username or team name. This will trigger a notification and bring their attention to the conversation. People will also receive a notification if you edit a comment to mention their username or team name.

@github/support What do you think about these updates?

## Ignoring Markdown formatting

You can tell GitHub to ignore (or escape) Markdown formatting by using \ before the Markdown character.

Let's rename \*our-new-project\* to \*our-old-project\*.

## Creating a table

You can create tables with pipes `|` and hyphens `-`. Hyphens are used to create each column's header, while pipes separate each column. You must include a blank line before your table in order for it to correctly render.


| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

The pipes on either end of the table are optional.

Cells can vary in width and do not need to be perfectly aligned within columns. There must be at least three hyphens in each column of the header row.

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

## Formatting content within your table

You can use formatting such as links, inline code blocks, and text styling within your table:

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

You can align text to the left, right, or center of a column by including colons : to the left, right, or on both sides of the hyphens within the header row.

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

To include a pipe | as content within your cell, use a \ before the pipe:

| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
