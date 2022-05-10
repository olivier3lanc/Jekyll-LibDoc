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

* **A Layout**<br> Playground is available as layout, 100% independent from the LibDoc site. It writes your content into the `body` part of the page with the specified settings defined in the [config.yml](libdoc-config.html#playground). Just set your layout to `libdoc/playground` and build.
* **An extended Syntax Highlighter**<br> It extends the Jekyll syntax highlighter by running each syntax highlighted area into an embedded iframe with the code executed into the custom context of [config.yml](libdoc-config.html#playground). Into your markdown, just add `{:.playground}` to your syntax highlight.

Here is an example of playground:

```html
<div class="row g-2 align-items-center mb-n3">
    <div class="col-12 col-xl-2 mb-3 font-weight-semibold">Normal</div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-primary w-100">
        Primary
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-secondary w-100">
        Secondary
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-success w-100">
        Success
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-warning w-100">
        Warning
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-danger w-100">
        Danger
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-info w-100">
        Info
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-light w-100">
        Light
    </a>
    </div>
    <div class="col-6 col-sm-4 col-md-2 col-xl mb-3">
    <a href="#" class="btn btn-dark w-100">
        Dark
    </a>
    </div>
</div>
```
{:.playground title=""}

Here is the markdown for the example above:

```markdown
    ```html
        <header class="px-8 py-8 max-w-screen-lg mx-auto bg-blue-100 text-center">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-0 mb-8">My custom project.</h1>
            <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">Here is a fully crafted code playground with its own resources set in <a href="../libdoc-config.html#playground" target="_parent" class="text-blue-500 hover:text-blue-800">configuration</a>.</p>
            <nav class="flex justify-center">
                <a class="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-600 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200" href="#">Get started</a>
            </nav>
        </header>
    ```
    {:.playground}
```

## How it works

1. **From markdown**
    1. LibDoc's playground copy the code from the syntax highlighted area
    2. Encodes code it in base64
    3. Builds an URL with code data as GET parameters
    4. Embeds the playground as iframe with the URL
2. **Execution in playground's iframe**
    1. Playground's stylesheets in `<head>` set in [config.yml](libdoc-config.html) `playground.stylesheets`
    2. Playground's scripts in `<head>` set in [config.yml](libdoc-config.html) `playground.scripts_head`
    3. The code - user's'code from markdown - is included into the DOM
    4. Playground's scripts next to `</body>` set in [config.yml](libdoc-config.html) `playground.scripts_body`


## Usage

Just add `{: .playground}` below the syntax highlight markdown code. How to add a playground with markdown:

```markdown
    ```name_of_the_language
        <the code>
    ```
    {:.playground}
```

* You can add as much playgrounds as you want into a page, playgrounds are lazy loaded.
* Playgrounds are embedded with iframe tag.
* Resizer for each playground at its bottom right
* Toolbar for each playground at its top with:
    * Maximize button
    * Open in new window button
    * Info modal that returns playground's settings

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
