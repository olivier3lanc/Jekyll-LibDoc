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

* **A Layout** [example](libdoc-layout-playground.html)<br> Playground is available as layout, completely separated from LibDoc theme resources. It writes your content into the `body` part of the page with the specified settings defined in the [config.yml](libdoc-config.html#playground). Just set your layout to `libdoc/playground` and build.
* **An extended Syntax Highlighter** [example](libdoc-layout-playground.html)<br> It extends the Jekyll syntax highlighter by running code of each syntax highlighted area into an embedded iframe with the code executed into the custom context of [config.yml](libdoc-config.html#playground). Into your markdown, just add `{:.playground}` to your syntax highlight. *Since syntax highlight code is injected with Javascript into the playground, script tags are not executed into playgrounds of syntax highlighters. Include Javascript files into your config files instead.* 

## Playground examples

Here is an example of playground:

```html
<article>
    <p>
        <span scroll-btween="w1" 
                data-detector="detector-w1" 
                data-opacity="|0:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.05 to 100:0|em">Syntax Highlight</span>
        <span scroll-btween="w2" 
                data-detector="detector-w2" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">brought to life!</span>
        <span scroll-btween="w3" 
                data-detector="detector-w3" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">Playground</span>
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
{:.playground title="A playground example"}

Here is the markdown for the example above:

```markdown
    ```html
        <nav    class="top"
                scroll-btween="nav_1"
                data-detector="detector-w1" 
                data-top="|0:20 to 30:0 to 100:0|px">
            <a  href="{{site.url}}{{site.baseurl}}/#playground-example" target="_parent">Code of this playground</a>
        </nav>
        [...]
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Kufam:wght@600&display=swap');
            html {
                position: relative;
            }
            [...]
            .detector { margin-top: 95vh; margin-bottom: 95vh; }
        </style>
    ```
    {:.playground title="A playground example"}
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

Adding a custom title displayed in the title bar of the playground.

```markdown
    ```name_of_the_language
        <the code>
    ```
    {:.playground title="Add any title"}
```

* You can add as much playgrounds as you want into a page, playgrounds are lazy loaded.
* Playgrounds are embedded with iframe tag.
* Resizer for each playground at its bottom right
* Toolbar for each playground at its top with:
    * Maximize button
    * Open in new window button
    * Info modal that returns playground's settings

## How it works

1. **From markdown**
    1. LibDoc's playground copy the code from the syntax highlighted area
    2. Encodes code it in base64
    3. Builds an URL with code data as GET parameters
    4. Embeds the playground as iframe with the URL
2. **Execution in playground's iframe**
    1. Playground's stylesheets in `<head>` set in [config.yml](libdoc-config.html#playground) `playground.stylesheets`
    2. Playground's scripts *type="text/javascript"* in `<head>` set in [config.yml](libdoc-config.html#playground) `playground.scripts_head`
    3. The code - user's'code from markdown - is included into the DOM
    4. Playground's scripts *type="modules"* set in [config.yml](libdoc-config.html#playground) `playground.scripts_body_modules`
    5. Playground's scripts *type="text/javascript"* next to `</body>` set in [config.yml](libdoc-config.html#playground) `playground.scripts_body`

## Settings

LibDoc's playground parameters are set into [config.yml](libdoc-config.html#playground), here are the settings dedicated to playground:

| `playground.` | Type | Default | Description |
| - | - | - | - |
| `min_height` | *CSS* | 300px | Sets a minimum height for each playground |
| `stylesheets` | *Array* |  | Array of `<head>` stylesheets URL. Relative URL starts with slash `/`. Absolute URL starts with `http` |
| `scripts_head` | *Array* |  | Array of `<head>` javascript URL. Relative URL starts with slash `/`. Absolute URL starts with `http` |
| `scripts_body` | *Array* |  | Array of `</body>` javascript URL. Relative URL starts with slash `/`. Absolute URL starts with `http` |

Example of [playground's configuration part](libdoc-config.html#playground).

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
        favicon: /demo-only/img/android-chrome-512x512.png
        
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
        image: /demo-only/img/meta-image-playground.jpg
```
