---
title: Page split layout
description: Apply the first playground on the right panel.
layout: libdoc/page-split

#LibDoc specific below
category: Layouts examples
order: 200
---

Intended to be used to feature a playground, the page split layout extends the syntax highlighter by running the first highlighted code found onto the right sided panel.

```html
<div id="example-reveal">
    <img    src="{{site.url}}{{site.baseurl}}/demo-only/img/image-reveal-blurred.webp"
            alt="Blurred image">
    <div    id="example-reveal-img-wrapper"
            scroll-btween="example-reveal"
            data-detector="detector"
            data-width="|0 to 100|%">
        <img    src="{{site.url}}{{site.baseurl}}/demo-only/img/image-reveal.webp"
                alt="Source image">
    </div>
    <p>Scroll down</p>
</div>
<div id="detector"></div>
<style>
    body {
        height: 200vh;
        font-family: monospace;
    }
    #example-reveal {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    #example-reveal > p {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        color: white;
        padding: 1em;
    }
    img {
        width: 100%;
        height: auto;
    }
    #example-reveal-img-wrapper {
        position: absolute;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    #example-reveal-img-wrapper img {
        width: auto;
        height: 100%;
    }
    #detector {
        margin-top: 100vh;
        margin-bottom: 60vh;
        background-color: #FFF9;
        position: relative;
    }
</style>
```
{:.playground title="First playground"}

## Second playground example

```html
    <h1>2nd playground</h1>
    <p>Stet no amet elitr dolores eirmod sadipscing dolores ut lorem.</p>
    <button>button</button>
```
{:.playground title="Second playground example"}
