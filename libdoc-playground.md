---
title: Playground
description: Standalone configurable code playground.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
---
* 
{:toc}

A major feature of the [LibDoc Jekyll theme](https://github.com/olivier3lanc/Jekyll-LibDoc) is its own built-in and configurable playground. 

* **Playground is a Layout** [example](libdoc-layout-playground.html)<br> Playground is available as layout, completely separated from LibDoc theme resources. It writes your content into the `body` part of the page with the specified settings defined in the [config.yml](libdoc-config.html#playground). Just set your layout to `libdoc/playground` and build.<br><br>
* **Playground is an extended syntax highlighter** [example](#examples)<br> It extends the Jekyll syntax highlighter by running code of each syntax highlighted area into an embedded iframe with the code executed into the custom context of [config.yml](libdoc-config.html#playground). Into your markdown, just add `{:.playground}` to your syntax highlight. *Since syntax highlight code is injected with Javascript into the playground, script tags are not executed into playgrounds of syntax highlighters. Include Javascript files into your config files instead.* 
    * **One config, multiple playgrounds** <br> You can add as much playgrounds as you want into a page, playgrounds are lazy loaded.
    * **Embed** <br> Playgrounds are embedded with an `iframe` tag.
    * **Tools** <br> For each playground:
        * Maximize button.
        * Open in new window button.
        * Info modal that returns playground's settings.
        * Resize playground embed window for each playground at its bottom right.

## Example 1

Here is an example of playground.  All settings of CSS and Javascripts are set into the [config.yml file](libdoc-config.html#playground). Please note: *Since syntax highlight code is injected with Javascript into the playground, script tags are not executed into playgrounds of syntax highlighters. Include Javascript files into your config files instead.*

```html
<article class="wrapper-playground gyp1" scroll-btween="gyp-back" data-detector="detector" data-background-position="|70 to 30|% center">
    <header>
        <h1>Free like <span>a bird</span></h1>
        <p>Gypaetus barbatus</p>
    </header>
    <figure scroll-btween="gyp-front" data-detector="detector" data-left="|3 to -3|%" data-top="|0 to -20|%">
        <img src="https://olivier3lanc.github.io/Scroll-Btween/img/gyp-front-1000.webp" alt="Bearded vulture">
    </figure>
</article>
<div id="detector"></div>
<article class="wrapper-playground gyp2" scroll-btween="gyp-back2" data-background-position="|30 to 70|% center">
    <header>
        <h1>Bearded <span>vulture</span></h1>
        <p>Gypaetus barbatus</p>
    </header>
    <figure scroll-btween="gyp-front2" data-left="|0 to 13|%" data-top="|0 to -5|%">
        <img src="https://olivier3lanc.github.io/Scroll-Btween/img/gyp2-front-1000.webp" alt="Bearded vulture">
    </figure>
</article>
<p>Photo credits Olivier 3lanc</p>
<style>
    body {
        margin: 0; padding:0; height: 400vh;
    }
    .wrapper-playground {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-size: 120%;
        background-position: 40% center;
        background-repeat: no-repeat;
    }
    .wrapper-playground.gyp1 {
        background-image: url(https://olivier3lanc.github.io/Scroll-Btween/img/gyp-back-1000.webp);
    }
    .wrapper-playground.gyp2 {
        background-image: url(https://olivier3lanc.github.io/Scroll-Btween/img/gyp2-back-1000.webp);
    }
    .wrapper-playground::before {
        content: '';
        float: left;
        padding-bottom: 66.66%;
    }
    figure {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
    }
    figure img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: auto;
    }
    header {
        text-align: center;
        color: #FFFFFFc2;
    }
    header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 13vw;
        font-family: sans-serif;
    }
    header h1 span {
        display: block;
        position: relative; /* Sets in front of the image */
        z-index: 1; /* Sets in front of the image */
    }
    header p {
        margin: 0;
        font-style: italic;
        font-size: 5vmin;
    }
    body > p { text-align: right; font-size: 12px; padding-right: 1em }
    #detector { position: absolute; top: 100vh; }
</style>
```
{:.playground title="A playground example"}

Here is the markdown for the example above:

```markdown
    ```html
        your HTML
    ```
    {:.playground title="A playground example"}
```
## Example 2

Here is another example of playground. All settings of CSS and Javascripts are set into the [config.yml file](libdoc-config.html#playground). Please note: *Since syntax highlight code is injected with Javascript into the playground, script tags are not executed into playgrounds of syntax highlighters. Include Javascript files into your config files instead.*

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
{:.playground title="Another example of playground"}

## Usage

Just add `{:.playground}` below the syntax highlight markdown code. How to add a playground with markdown:

Most simple case

```markdown
    ```name_of_the_language
        <the code>
    ```
    {:.playground}
```

Adding a custom title displayed in the title bar of the playground.

```markdown
    ```name_of_the_language
        <the code>
    ```
    {:.playground title="Add any title"}
```

## How it works

1. **From markdown**
    1. LibDoc's playground copy the generated HTML from the syntax highlighted area
    2. Encodes code it in base64
    3. Builds an URL with code data as GET parameters
    4. Embeds the playground as iframe with the URL<br><br>
2. **Execution in playground's iframe**
    1. Playground's stylesheets in `<head>` set in [config.yml](libdoc-config.html#playground) `playground.stylesheets`
    2. Playground's scripts *type="text/javascript"* in `<head>` set in [config.yml](libdoc-config.html#playground) `playground.scripts_head`
    3. The code - user's'code from markdown - is included into the DOM
    4. Playground's scripts *type="modules"* set in [config.yml](libdoc-config.html#playground) `playground.scripts_body_modules`
    5. Playground's scripts *type="text/javascript"* next to `</body>` set in [config.yml](libdoc-config.html#playground) `playground.scripts_body`

## Settings

LibDoc's playground parameters are set into [config.yml](libdoc-config.html#playground), here are the settings dedicated to playground:

```yaml
# PLAYGROUND
# The user context entirely separated from LibDoc theme
playground:
    # PLAYGROUND STYLESHEETS
    # Style sheets in <head>. Can be either:
    # Relative URL from site root starting with slash /
    # Absolute URL starting with 'http'
    stylesheets: 
        - /demo-only/css/normalize.css
        - /demo-only/css/photoswipe.css
    
    # PLAYGROUND HEAD JAVASCRIPTS
    # Javascript in <head>. Can be either:
    # Relative URL from site root starting with slash /
    # Absolute URL starting with 'http'
    scripts_head:
        # - /libdoc/js/my-toggles.js

    # PLAYGROUND MODULES JAVASCRIPTS
    # Javascript type="module" are set before text/javascript files
    # JS modules do not work with a file:// URL 
    # JS modules need a web server.
    scripts_body_modules: 
        - /demo-only/js/demo.js

    # PLAYGROUND BODY JAVASCRIPTS
    # Javascript type="text/javascript" near </body>. Can be either:
    # Relative URL from site root starting with slash /
    # Absolute URL starting with 'http'
    scripts_body: # Javascript files near </body>. Can be either relative URL from site root, absolute URL starting with 'http'
        - /demo-only/js/ola.min.js
        - /demo-only/js/scroll-btween.js
        # - https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
        # - /demo-only/js/demo.js
    
    # PLAYGROUND MINIMUM HEIGHT
    # Sets a minimum height for each playground, default is 300px
    min_height: 300px

    # PLAYGROUND METADATA
    # Metadata for the playground only
    metadata:
        # PLAYGROUND LANGUAGE
        # Change the language of the playground, default is en
        lang: en

        # PLAYGROUND CACHE
        # Enable or not browser cache for the playground
        cache: false
        
        # PLAYGROUND PNG favicon file 
        # Path from root or absolute/remote URL - Square 32x32 pixels icon png format or .ico for old browsers
        favicon: /libdoc/img/favicon/playground-android-chrome-512x512.png

        # PLAYGROUND SVG favicon example - NOT supported on Safari
        # favicon: data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%237d6ee7%22></rect><path fill=%22%23fff%22 d=%22M36.63 22.42L66.52 22.42Q66.78 22.87 67.06 23.63Q67.32 24.40 67.32 25.30L67.32 25.30Q67.32 26.83 66.60 27.73Q65.88 28.63 64.53 28.63L64.53 28.63L40.05 28.63L40.05 47.35L63.36 47.35Q63.63 47.80 63.91 48.56Q64.17 49.33 64.17 50.23L64.17 50.23Q64.17 51.76 63.45 52.66Q62.73 53.56 61.38 53.56L61.38 53.56L40.05 53.56L40.05 77.05Q39.60 77.23 38.66 77.41Q37.71 77.59 36.72 77.59L36.72 77.59Q32.67 77.59 32.67 74.34L32.67 74.34L32.67 26.38Q32.67 24.58 33.75 23.50Q34.84 22.42 36.63 22.42L36.63 22.42Z%22></path></svg>
        
        # PLAYGROUND AUTOMATIC FAVICON 
        # Automatic generation of multiple PNG favicons URL. Generates proper favicon files sizes for multiple devices. Must be an absolute URL starting with 'http'
        # favicon_auto must be a public URL image file with a minimum 192x192 pixels 
        # favicon_auto: https://i.ibb.co/cNmfL3D/android-chrome-512x512.png
        
        # PLAYGROUND AUTHOR NAME
        # Sets the name of the author for the playground. Default is empty.
        author: 

        # PLAYGROUND THEME COLOR
        # Theme color metadata used in some browsers like Chrome that applies this color on browser address bar.
        # Color must be in HEX, default is LibDoc's color
        color: '#556e1e'

        # PLAYGROUND IMAGE
        # Open Graph image file for social networks. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen.
        # image: /img/custom_image.webp
        image: /libdoc/img/meta-image-playground.jpg
```
