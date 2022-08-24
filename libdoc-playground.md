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

* **Playground is a Layout** [example](libdoc-layout-playground.html)<br> Playground is available as layout, completely separated from LibDoc theme resources. It writes your content into the `body` part of the page with the specified settings defined in the [config.yml](libdoc-config.html#playground). Just set your layout to `libdoc/playground` and build.
* **Playground is an extended syntax highlighter** [example](#example---basic-html)<br> It extends the Jekyll syntax highlighter by running code of each syntax highlighted area into an embedded iframe with the code executed into the custom context of [config.yml](libdoc-config.html#playground). Into your markdown, just add `{:.playground}` to your syntax highlight. <br>
> *Since syntax highlight code is injected with Javascript into the playground, script tags are not executed into playgrounds of syntax highlighters. Include Javascript files into your config files instead.* 
* **One config, multiple playgrounds** <br> You can add as much playgrounds as you want into a page, playgrounds are lazy loaded.
* **Embed** <br> Playgrounds are embedded with an `iframe` tag.
* **Tools** <br> For each playground:
    * Maximize button.
    * Open in new window button.
    * Info modal that returns playground's settings.
    * Resize playground embed window for each playground at its bottom right.

## Demo settings

The current site/project is set up as follows. Learn more about [config.yml](libdoc-config.html#playground)

```yaml
# ---------
# LIBDOC CONFIGURATION
# ---------

# PLAYGROUND
# The user context entirely separated from LibDoc theme
playground:
    # PLAYGROUND STYLESHEETS
    # Style sheets in <head>. Can be either:
    # Relative URL from site root starting with slash /
    # Absolute URL starting with 'http'
    stylesheets: 
        - /demo-only/css/normalize.css
    
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
        # - /demo-only/js/demo.js

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
        favicon: /assets/libdoc/img/favicon/playground-android-chrome-512x512.png

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
        image: /assets/libdoc/img/meta-image-playground.jpg
```

## Example - Basic example

This playground example uses the [playground settings](libdoc-config.html#playground) with simple HTML. 

```html
<h1>Simple gallery</h1>
<nav>
    <a  href="https://olivier3lanc.github.io/photographies/paysages/automne/Chalets_Monal_Automne_2_MG_5773_size_1600x1066.webp">
        <img    srcset="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/automne/Chalets_Monal_Automne_2_MG_5773_size_1600x1066.webp&height=300&output=webp&q=30 2x"
                src="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/automne/Chalets_Monal_Automne_2_MG_5773_size_1600x1066.webp&height=150&output=webp&q=30" 
                alt="Le Monal en Automne"
                width="225" height="150">
    </a>
    <a  href="https://olivier3lanc.github.io/photographies/paysages/automne/le_monal_en_automne_mg_3672_1_size_2560x1706.webp">
        <img    srcset="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/automne/le_monal_en_automne_mg_3672_1_size_2560x1706.webp&height=300&output=webp&q=30 2x"
                src="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/automne/le_monal_en_automne_mg_3672_1_size_2560x1706.webp&height=150&output=webp&q=30" 
                alt="Les Chalets du Monal en Automne"
                width="225" height="150">
    </a>
</nav>
<p>Photo credits Olivier 3lanc</p>
```
{:.playground title="Basic example"}

## Example - HTML and CSS

This playground example uses HTML and CSS in addition with settings from [config.yml file](libdoc-config.html#playground). This playground features [ScrollBtween](https://olivier3lanc.github.io/Scroll-Btween/).

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
    {:.playground title="Optional title"}
```

## Example - Additional CSS

This playground example uses HTML and external CSS resources in addition with settings from [config.yml file](libdoc-config.html#playground). This playground features [Bootstrap CSS](https://getbootstrap.com).


```html
<!-- Additional CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<div class="container px-4 px-md-3">
    <div class="row align-items-lg-center">
        <div class="col-8 mx-auto col-sm-4 order-md-2 col-lg-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="533" class="img-fluid mb-3 mb-md-0" role="img" viewBox="0 0 900 800"><title>Bootstrap</title><defs><filter id="filter0_d" width="704" height="623.928" x="98" y="96" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="8"></feOffset><feGaussianBlur stdDeviation="16"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.0666667 0 0 0 0 0.956863 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="filter1_d" width="704" height="623.928" x="98" y="96" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="8"></feOffset><feGaussianBlur stdDeviation="16"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.0666667 0 0 0 0 0.956863 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="filter2_d" width="260.144" height="302.767" x="327.804" y="252.368" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="filter3_d" width="261.369" height="303.992" x="327.192" y="251.755" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="paint1_linear" x1="211.405" x2="769.059" y1="251.5" y2="494.972" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9013fe"></stop><stop offset=".995" stop-color="#6610f2"></stop></linearGradient><linearGradient id="paint2_linear" x1="363.642" x2="515.493" y1="319.901" y2="465.49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f1e5fc"></stop></linearGradient><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="rotate(90 25 425) scale(400)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ced4da"></stop><stop offset="1" stop-color="#ced4da" stop-opacity="0"></stop></radialGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h900v800H0z"></path></clipPath></defs><g clip-path="url(#clip0)"><circle cx="450" cy="400" r="400" fill="url(#paint0_radial)"></circle><path fill="#ffc107" fill-rule="evenodd" d="M138 539h98v46h-98v-46zm100-2v50H136v-50h102z" clip-rule="evenodd"></path><path fill="#ffc107" fill-rule="evenodd" d="M238 539h89a7 7 0 017 7v32a7 7 0 01-7 7h-89v-46zm89-2a9 9 0 019 9v32a9 9 0 01-9 9h-91v-50h91zm-281.816 0c-5.072 0-9.184 4.029-9.184 9v32c0 4.971 4.112 9 9.184 9H136v-50H45.184zM60 558a4 4 0 000 8h52a4 4 0 000-8H60z" clip-rule="evenodd"></path><path fill="#007bff" fill-rule="evenodd" d="M115 400a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm-30 0c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-5a5 5 0 100-10 5 5 0 000 10zm53-15a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-12a4 4 0 00-4-4h-12zm11.676 5.324a1.103 1.103 0 00-1.591.033l-5.115 6.517-3.084-3.084a1.105 1.105 0 00-1.562 1.563l3.898 3.898a1.103 1.103 0 001.589-.03l5.881-7.351a1.103 1.103 0 00-.016-1.546zM180 384h-12a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-12a2 2 0 00-2-2zm-12-2a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-12a4 4 0 00-4-4h-12z" clip-rule="evenodd"></path><path fill="#adb5bd" fill-rule="evenodd" d="M473 554c0-5.523 4.477-10 10-10h260c5.523 0 10 4.477 10 10v130.125c0 5.523-4.477 10-10 10H626.646a7.994 7.994 0 00-5.64 2.327l-6.596 6.556c-.78.776-2.04.776-2.82 0l-6.596-6.556a7.994 7.994 0 00-5.64-2.327H483c-5.523 0-10-4.477-10-10V554zm10-8a8 8 0 00-8 8v29h276v-29a8 8 0 00-8-8H483zm268 39H475v99.125a8 8 0 008 8h116.354a10 10 0 017.05 2.908L613 701.59l6.596-6.557a10 10 0 017.05-2.908H743a8 8 0 008-8V585z" clip-rule="evenodd"></path><path fill="#007bff" fill-rule="evenodd" d="M503 74c0-5.523 4.477-10 10-10h260c5.523 0 10 4.477 10 10v160c0 5.523-4.477 10-10 10H513c-5.523 0-10-4.477-10-10V74zm10-8a8 8 0 00-8 8v29h276V74a8 8 0 00-8-8H513zm268 39H505v97h276v-97zm0 99H644v38h129a8 8 0 008-8v-30zm-139 38v-38H505v30a8 8 0 008 8h129z" clip-rule="evenodd"></path><path fill="#007bff" fill-rule="evenodd" d="M756.293 79.293a1 1 0 011.414 0L762 83.586l4.293-4.293a1 1 0 111.414 1.414L763.414 85l4.293 4.293a1 1 0 11-1.414 1.414L762 86.414l-4.293 4.293a1 1 0 11-1.414-1.414L760.586 85l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path><path fill="#007bff" d="M673 223a4 4 0 014-4h72a4 4 0 010 8h-72a4 4 0 01-4-4zm-140 0a4 4 0 014-4h72a4 4 0 010 8h-72a4 4 0 01-4-4z"></path><path fill="#e83e8c" fill-rule="evenodd" d="M757 432H475a7 7 0 00-7 7v32a7 7 0 007 7h282a7 7 0 007-7v-32a7 7 0 00-7-7zm-282-2a9 9 0 00-9 9v32a9 9 0 009 9h282a9 9 0 009-9v-32a9 9 0 00-9-9H475zm310 0a9 9 0 00-9 9v32a9 9 0 009 9h72a9 9 0 009-9v-32a9 9 0 00-9-9h-72zm10 21a4 4 0 000 8h52a4 4 0 000-8h-52z" clip-rule="evenodd"></path><path fill="#dc3545" fill-rule="evenodd" d="M825 336H541a6 6 0 100 12h284a6 6 0 100-12zm-284-2a8 8 0 000 16h284a8 8 0 000-16H541z" clip-rule="evenodd"></path><path fill="#dc3545" d="M533 342a8 8 0 018-8h242v16H541a8 8 0 01-8-8z"></path><path fill="#adb5bd" fill-rule="evenodd" d="M57 271a6 6 0 00-6 6v28a6 6 0 006 6h81.515a6 6 0 014.242 1.757l7.536 7.536a1 1 0 001.414 0l7.536-7.536a6 6 0 014.242-1.757H245a6 6 0 006-6v-28a6 6 0 00-6-6H57zm33 16a4 4 0 000 8h122a4 4 0 000-8H90z" clip-rule="evenodd"></path><path fill="#20c997" fill-rule="evenodd" d="M253 157c0-5.523-4.477-10-10-10H141c-5.523 0-10 4.477-10 10v39a1 1 0 002 0v-39a8 8 0 018-8h102a8 8 0 018 8v39a1 1 0 001 1h198a1 1 0 000-2H253v-38z" clip-rule="evenodd"></path><path fill="#20c997" d="M151 174a4 4 0 014-4h72a4 4 0 010 8h-72a4 4 0 01-4-4z"></path><path fill="url(#paint1_linear)" fill-rule="evenodd" d="M202.606 300.603c-8.615-28.187 6.531-60.366 36.506-68.398l309.643-82.969c29.975-8.031 59.181 12.264 65.814 40.982 6.371 27.588 17.095 62.662 33.744 89.141 16.7 26.562 36.732 40.854 62.058 36.589l7.125 26.591c-24.065 8.969-34.268 31.362-35.45 62.716-1.178 31.256 7.072 66.993 15.348 94.07 8.615 28.187-6.531 60.366-36.506 68.398l-309.643 82.969c-29.975 8.031-59.181-12.264-65.814-40.982-6.371-27.587-17.095-62.661-33.744-89.141-16.7-26.562-36.732-40.854-62.058-36.588l-7.125-26.592c24.065-8.969 34.268-31.362 35.45-62.715 1.178-31.257-7.072-66.994-15.348-94.071z" clip-rule="evenodd" filter="url(#filter0_d)"></path><path fill-opacity=".15" fill-rule="evenodd" d="M239.37 233.171c-29.369 7.87-44.275 39.435-35.808 67.14 8.286 27.109 16.576 62.974 15.391 94.4-1.175 31.158-11.239 53.906-35.25 63.291l6.659 24.848c25.486-3.877 45.576 10.791 62.172 37.187 16.739 26.623 27.493 61.828 33.872 89.448 6.519 28.227 35.21 48.11 64.58 40.241l309.644-82.969c29.369-7.87 44.275-39.435 35.807-67.139-8.285-27.11-16.575-62.975-15.39-94.401 1.175-31.158 11.239-53.906 35.25-63.29l-6.659-24.849c-25.486 3.877-45.576-10.791-62.172-37.186-16.739-26.624-27.493-61.829-33.872-89.449-6.519-28.227-35.21-48.11-64.58-40.241L239.37 233.171zm471.001 82.777c-25.326 4.265-45.358-10.027-62.058-36.589-16.649-26.479-27.373-61.553-33.744-89.141-6.633-28.718-35.839-49.013-65.814-40.982l-309.643 82.969c-29.975 8.032-45.121 40.211-36.506 68.398 8.276 27.077 16.526 62.814 15.348 94.071-1.182 31.353-11.385 53.746-35.45 62.715l7.125 26.592c25.326-4.266 45.358 10.026 62.058 36.588 16.649 26.479 27.373 61.554 33.744 89.141 6.633 28.718 35.839 49.013 65.814 40.982l309.643-82.969c29.975-8.032 45.121-40.211 36.506-68.398-8.276-27.077-16.526-62.814-15.348-94.07 1.182-31.354 11.385-53.747 35.45-62.716l-7.125-26.591z" clip-rule="evenodd" filter="url(#filter1_d)"></path><path fill="url(#paint2_linear)" d="M494.943 510.853c48.05-12.875 70.547-44.737 59.895-84.492-8.052-30.051-34.542-46.271-66.141-41.494l-.336-1.252c21.532-9.796 33.472-35.977 27.056-59.924-9.143-34.12-41.392-49.3-81.46-38.564l-88.221 23.639a2 2 0 00-1.414 2.449l59.481 221.988a2 2 0 002.45 1.414l88.69-23.764zM386.538 328.532l46.642-12.498c25.355-6.794 42.858.93 48.478 21.903 5.997 22.382-7.395 39.39-37.759 47.526l-39.286 10.527-18.075-67.458zm45.167 168.567l-19.92-74.345 46.328-12.414c33.181-8.891 53.753-.983 60.296 23.434 6.542 24.416-6.724 41.894-38.34 50.366l-48.364 12.959z" filter="url(#filter2_d)"></path><path fill="#fff" fill-rule="evenodd" d="M343.839 311.345a2.5 2.5 0 011.767-3.062l88.221-23.639c20.12-5.391 38.326-4.288 52.67 2.492 14.355 6.784 24.796 19.232 29.403 36.426 6.438 24.026-5.424 50.293-26.947 60.331l.111.414c31.637-4.594 58.171 11.749 66.257 41.925 5.36 20.004 2.385 38.065-8.009 52.744-10.386 14.667-28.139 25.902-52.24 32.36l-88.69 23.764a2.5 2.5 0 01-3.062-1.768l-59.481-221.987zm2.026-2.096a1.5 1.5 0 00-1.06 1.837l59.481 221.988a1.5 1.5 0 001.837 1.06l88.691-23.764c23.949-6.418 41.47-17.551 51.682-31.972 10.203-14.409 13.151-32.157 7.859-51.908-7.981-29.786-34.216-45.87-65.584-41.129l-.442.067-.561-2.093.386-.175c21.297-9.689 33.137-35.616 26.78-59.34-4.536-16.926-14.791-29.128-28.864-35.78-14.083-6.656-32.036-7.775-51.984-2.43l-88.221 23.639zm40.061 18.929l47.124-12.627c12.743-3.414 23.585-3.201 31.974.566 8.408 3.775 14.275 11.085 17.117 21.691 3.034 11.325 1.167 21.34-5.336 29.545-6.485 8.183-17.539 14.51-32.777 18.593l-39.768 10.656-18.334-68.424zm1.224.707l17.817 66.492 38.802-10.397c15.126-4.053 25.951-10.297 32.253-18.248 6.284-7.929 8.115-17.61 5.153-28.666-2.778-10.367-8.473-17.405-16.56-21.037-8.106-3.64-18.693-3.891-31.306-.512l-46.159 12.368zm24.022 93.515l46.812-12.543c16.638-4.458 30.197-4.729 40.447-.757 10.282 3.985 17.155 12.209 20.461 24.544 3.303 12.329 1.615 22.969-4.946 31.595-6.545 8.603-17.885 15.133-33.748 19.384l-48.846 13.088-20.18-75.311zm1.225.707l19.662 73.379 47.88-12.829c15.753-4.221 26.854-10.666 33.211-19.024 6.341-8.335 8.014-18.643 4.776-30.73-3.238-12.081-9.921-20.019-19.856-23.87-9.967-3.863-23.284-3.643-39.827.79l-45.846 12.284z" clip-rule="evenodd" filter="url(#filter3_d)"></path></g></svg>
        </div>
        <div class="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
            <h1 class="mb-3">Build fast, responsive sites with Bootstrap</h1>
            <p class="lead mb-4">
                Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </p>

            <div class="d-flex flex-column flex-md-row">
                <a href="#" class="btn btn-lg btn-primary mb-3 me-md-3">Get started</a>
                <a href="#" class="btn btn-lg btn-outline-secondary mb-3">Download</a>
            </div>
            <p class="text-muted mb-0">
                Currently <strong>v5.1.3</strong>
                <span class="px-1">·</span>
                <a href="#" class="link-secondary">v4.6.x docs</a>
                <span class="px-1">·</span>
                <a href="#" class="link-secondary">All releases</a>
            </p>
        </div>
    </div>
</div>
```
{:.playground title="A playground example with Bootstrap CSS"}

Here is the markdown for the example above:

```markdown
    ```html
        your HTML
    ```
    {:.playground title="Optional title"}
```

## Example - Star Wars end credits

Here is another example of playground that add few lines of CSS in addition of settings from [config.yml file](libdoc-config.html#playground).

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
{:.playground title="Example - Star Wars end credits"}

Here is the markdown for the example above:

```markdown
    ```html
        your HTML
    ```
    {:.playground title="Optional title"}
```
## Usage

Just add `{:.playground}` below the syntax highlight markdown code. How to add a playground with markdown:

Most simple case

```markdown
    ```name_of_the_language
        <the code>
    ```
    {:.playground}
```

Optionnaly add a custom title displayed in the title bar of the playground.

```markdown
    ```name_of_the_language
        <the code>
    ```
    {:.playground title="Add any title"}
```

## How it works

As a layout or syntax highlight extension, playground is crafted as follows:

```html
Playground - User defined context set up into config.yml
└── html
    ├── head
    │   ├── playground.stylesheets in front matter config.yml
    │   │   ├── file.css
    │   │   ├── file.css
    │   │   └── ...
    │   └── playground.scripts_head in front matter config.yml
    │       ├── file.js
    │       ├── file.js
    │       └── ...
    └── body
        ├── playground.scripts_body_modules in front matter config.yml
        │   ├── js_module.js
        │   ├── js_module.js
        │   └── ...
        └── playground.scripts_body in front matter config.yml
            ├── file.js
            ├── file.js
            └── ...
``` 

About extended syntax highlighter only:

1. **From markdown**
    1. LibDoc's playground copy the generated HTML from the syntax highlighted area
    2. Encodes code it in base64
    3. Builds an URL with code data as GET parameters
    4. Embeds the playground as iframe with the URL
2. **Execution in playground's iframe**
    1. Playground's stylesheets in `<head>` set in [config.yml](libdoc-config.html#playground) `playground.stylesheets`
    2. Playground's scripts *type="text/javascript"* in `<head>` set in [config.yml](libdoc-config.html#playground) `playground.scripts_head`
    3. The code - user's'code from markdown - is included into the DOM
    4. Playground's scripts *type="modules"* set in [config.yml](libdoc-config.html#playground) `playground.scripts_body_modules`
    5. Playground's scripts *type="text/javascript"* next to `</body>` set in [config.yml](libdoc-config.html#playground) `playground.scripts_body`

> Please note about playground's syntax highlighter extension: Since syntax highlight code is injected with Javascript into the playground, script tags are not executed into playgrounds of syntax highlighters. Include Javascript files into your config files instead.

