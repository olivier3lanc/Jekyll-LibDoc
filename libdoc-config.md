---
title: Configuration
description: Every setting details available for LibDoc Jekyll Theme.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 92
# unlisted: true
# iframe_mode: true
---
* 
{:toc}

LibDoc is a [Jekyll](https://www.jekyllrb.org) theme which supports all [Jekyll configuration settings](https://jekyllrb.com/docs/configuration/). You can use default `config.yml` or create your own `_any-name-config.yml` file. This page is dedicated to all the specific settings of LibDoc.

## Playground

[Playground](libdoc-playground.html) is an user context completely separated from LibDoc theme resources, it can be embedded mulitple times with different contents on your pages as an extension of syntax highlighter or simply used as a [layout](libdoc-layouts.html#playground). Here are available settings:

* `playground.stylesheets` <br> Style sheets files in `<head>`. Can be either relative URL from site root starting with slash / or absolute URL starting with *http*.
* `playground.scripts_head` <br> Javascripts files in `<head>`. Can be either relative URL from site root starting with slash / or absolute URL starting with *http*.
* `playground.scripts_body_modules` <br> Javascripts files *type="module"* are set before *text/javascript* files. JS modules do not work with a file:// URL. JS modules need a web server.
* `playground.scripts_body` <br> Javascript files `type="text/javascript"` near *</body>*. Can be either relative URL from site root starting with slash / or absolute URL starting with 'http'.
* `playground.min_height` <br> Sets a minimum height for each playground, default is 300px.
* `playground.metadata.lang` <br> Sets the language of the playground, default is *en*.
* `playground.metadata.cache` <br> Enable or disable browser cache metadata controls for the playground *true* or *false* (default).
* `playground.metadata.favicon` <br> Path from root or absolute/remote URL - Square 32x32 pixels icon png format or ico for old browsers. Default favicon is LibDoc's favicon.
* `playground.metadata.favicon_auto` <br> Automatic generation of multiple PNG favicons URL. Generates proper favicon files sizes for multiple devices. Must be an absolute URL starting with 'http'. favicon_auto must be a public URL image file with a minimum 192x192 pixels.
* `playground.metadata.author` <br> Sets the name of the author for the playground. Default is empty.
* `playground.metadata.color` <br> Theme color metadata used in some browsers like Chrome that applies this color on browser address bar. Color must be in HEX, default is LibDoc's color.
* `playground.metadata.image` <br> Open Graph image file for social networks. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen.

## Metadata

Metadata settings related to the site/project itself.

* `metadata.lang` <br> Sets the language of the site/project, default is *en*.
* `metadata.cache` <br> Enable or disable browser cache metadata controls for the site/project *true* or *false* (default).
* `metadata.favicon` <br> Path from root or absolute/remote URL - Square 32x32 pixels icon png format or ico for old browsers. Default favicon is LibDoc's favicon.
* `metadata.favicon_auto` <br> Automatic generation of multiple PNG favicons URL. Generates proper favicon files sizes for multiple devices. Must be an absolute URL starting with 'http'. favicon_auto must be a public URL image file with a minimum 192x192 pixels.
* `metadata.author` <br> Sets the name of the author for the site/project. Default is empty.
* `metadata.color` <br> Theme color metadata used in some browsers like Chrome that applies this color on browser address bar. Color must be in HEX, default is LibDoc's color.
* `metadata.image` <br> Open Graph image file for social networks. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen.

## Sidebar

Main navigation containing site/project's logo, pages links and search form.

* `sidebar.disable_search` <br> Enable or disable search feature. Default is `true`.
* `sidebar.logo.url` <br> Can be either relative URL from site root starting with slash / or absolute URL starting with *http*. Local example */img/logo.png* or remote URL *https://remotesite.com/img/logo.png*.
* `sidebar.logo.max_height` <br> Logo image max height, applies only if url is set. Default is 40px.
* `sidebar.logo.font_size` <br> If no logo url, font size of the site title, ignored if url is set. Default is 32px.
* `sidebar.additional_links` <br> Allows to add links that are not pages included into the project, anywhere into the sidebar. For each item:
    * `url` relative or absolute URL
    * `title` Text into the link
    * `order` Integer related to the [position of the item in the sidebar](libdoc-front-matter.html#order). Sidebar items are ordered by this value. Sets the rank of the page link into the sidebar, higher values give lower rank for the page link. Additional links are treated like any other page order.
    * `category` Adds a separator above the item link with the name of the category if the previous item has not the same category.

## Assets

The following parameters are available only for the [assets layout](libdoc-layouts.html#assets)

* `assets.path_from_root` <br> The path from which files are available to download. '/' is the root.
* `assets.extensions_enabled` <br> List of extension files you wish to display on assets layout.
* `assets.image_extensions` <br> List of image extensions (without point) to display as image into asset grid

## Prism.js syntax highlighter

LibDoc uses [Prism.js](https://prismjs.com) as syntax highlighter. It is possible to customize few parameters through the config file:

* `prism.theme` <br> Just enter the name of the theme you wish to use from available ones: coy, dark, funky, okaidia, twilight, solarizedlight, tomorrow (default).
* `prism.font_size` <br> Sets the font size for Prism syntax highlighter, default is 0.9em.
* `prism.line_height` <br> Sets the line height for Prism syntax highlighter, default is 1.4em.
* `prism.languages` <br> The list of languages to enable. Just uncomment to enable.

## Current configuration

The following YAML is the configuration of the current documentation.

```yaml
# ---------
# JEKYLL CONFIGURATION
# More info at https://jekyllrb.com/docs/configuration/options/
# ---------

# TO USE JEKYLL LIBDOC AS REMOTE THEME, UNCOMMENT (available only on Github)
# remote_theme: olivier3lanc/Jekyll-LibDoc
title: LibDoc # title of the documentation
description: >- # Description of the docs. (>- means to ignore newlines until next param)
  A Jekyll documentation theme with built-in search and playground
# IMPORTANT: on Github Pages deploys, url and baseurl must be commented or set to proper settings, otherwise links and resources URL are wrong
url: http://localhost # the base hostname & protocol for your site, e.g. http://example.com::
baseurl: /Jekyll-LibDoc/_site # the subpath of your site, e.g. /blog
#permalink: /:path/:basename/:output_ext
#destination: ../your/new/path # Build relative path destination. The destination directory e.g. /blog
#keep_files: [cache]
#markdown: kramdown
# defaults:
#   -
#     values:
#       layout: libdoc/page # Uncommenting brings pbms on static files that must not be associated to any layout
kramdown:
    syntax_highlighter_opts:
        disable: true
sass:
    style: compressed
#exclude: ['/misc']

# ---------
# LIBDOC CONFIGURATION
# https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-config.html
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
        # - /demo-only/css/photoswipe.css
    
    # PLAYGROUND HEAD JAVASCRIPTS
    # Javascript in <head>. Can be either:
    # Relative URL from site root starting with slash /
    # Absolute URL starting with 'http'
    scripts_head:
        # - /assets/libdoc/js/my-toggles.js

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

# METADATA
# Metadata informations for the site/project
metadata:
    # LANGUAGE
    # Change the language of the playground, default is en
    lang: en

    # CACHE
    # Enable or not browser cache for the playground
    cache: false

    # PNG favicon file 
    # Path from root or absolute/remote URL - Square 32x32 pixels icon png format or .ico for old browsers
    favicon: /assets/libdoc/img/favicon/favicon-32x32.png

    # SVG favicon example - NOT supported on Safari
    # favicon: data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%237d6ee7%22></rect><path fill=%22%23fff%22 d=%22M36.63 22.42L66.52 22.42Q66.78 22.87 67.06 23.63Q67.32 24.40 67.32 25.30L67.32 25.30Q67.32 26.83 66.60 27.73Q65.88 28.63 64.53 28.63L64.53 28.63L40.05 28.63L40.05 47.35L63.36 47.35Q63.63 47.80 63.91 48.56Q64.17 49.33 64.17 50.23L64.17 50.23Q64.17 51.76 63.45 52.66Q62.73 53.56 61.38 53.56L61.38 53.56L40.05 53.56L40.05 77.05Q39.60 77.23 38.66 77.41Q37.71 77.59 36.72 77.59L36.72 77.59Q32.67 77.59 32.67 74.34L32.67 74.34L32.67 26.38Q32.67 24.58 33.75 23.50Q34.84 22.42 36.63 22.42L36.63 22.42Z%22></path></svg>
    
    # AUTOMATIC FAVICON 
    # Automatic generation of multiple PNG favicons URL. Generates proper favicon files sizes for multiple devices. Must be an absolute URL starting with 'http'
    # favicon_auto must be a public URL image file with a minimum 192x192 pixels 
    # favicon_auto: https://i.ibb.co/cNmfL3D/android-chrome-512x512.png
    
    # AUTHOR NAME
    # Name of the author of the site/project, used into various places of the theme like footer. Default is empty
    author: 

    # THEME COLOR
    # Theme color metadata used in some browsers like Chrome that applies this color on browser address bar.
    # Color must be in HEX, default is LibDoc's color
    color: '#123456'

    # IMAGE
    # Open Graph image file for social networks. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen.
    # image: /img/custom_image.webp
    image: /assets/libdoc/img/libdoc.png

# SIDEBAR 
# Main navigation containing site/project's logo, pages links and search form.
sidebar:
    # SEARCH FEATURE
    # Enable or disable search feature
    disable_search: false

    # LOGO
    # Top left branding/homepage link, specified image URL or site title if no URL is set
    logo:
        # LOGO URL
        # Image URL: Can be local e.g. '/img/logo.png' or remote 'https://remotesite.com/img/logo.png'
        url: /assets/libdoc/img/favicon/android-chrome-512x512.png

        # LOGO MAX HEIGHT
        # Logo image max height, applies only if url is set
        max_height: 40px

        # LOGO FONT SIZE FALLBACK
        # If no logo url, font size of the site title, ignored if url is set
        font_size: 32px

    # ADDITIONAL LINKS
    # Allows to add links that are not pages included into the project
    # Display additional links anywhere into the sidebar
    additional_links:
        -   url: https://github.com/olivier3lanc/Jekyll-LibDoc # Local or remote URL
            title: <span class="i-github u-mr-xxs"></span> View on GitHub # Link text
            order: 0 # Sets the rank of the page link into the sidebar, higher values give lower rank for the page link
            # category: Showcase # Add this this link into a category just like pages
        # -   url: https://www.youtube.com/embed/iWowJBRMtpc # Local or remote URL
        #     title: Iframe mode example # Link text
        #     order: 100 # Sets the rank of the page link into the sidebar, higher values give lower rank for the page link
        #     iframe_mode: true
        #     category: Features
        # Example URL
        -   url: https://olivier3lanc.github.io/Scroll-Btween/
            title: Scroll Btween
            order: 500
            category: Showcase
        -   url: https://olivier3lanc.github.io/Scroll-Frames/
            title: Scroll Frames
            order: 500
            category: Showcase
        # Example remote URL
        -   url: https://pages.github.com
            title: Github Pages
            order: 510
            category: External resources
        -   url: https://jekyllrb.com
            title: Jekyll
            order: 510
            category: External resources

# BADGES
# Feature that allows to display badges into the footer https://shields.io image html and url
shields:
    -   image_html: <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/olivier3lanc/Jekyll-LibDoc?logo=github&style=flat-square">
        link_url: https://github.com/olivier3lanc/Jekyll-LibDoc
    -   image_html: <img alt="no trackers, no cookies and no analytics" title="This website has no trackers, no cookies and no analytics. Only feedback is important :)" src="https://img.shields.io/badge/no%20trackers|cookies|analytics-Just%20feedback-green?style=flat-square">
        link_url: 'mailto:olivier3lanc@gmail.com'

# ASSETS
# Settings for the assets layout
assets:
    # START PATH
    # The path from which files are available to download. '/' is the root
    path_from_root: /
    # List of extension files you wish to display on assets layout
    extensions_enabled: 
        - pdf
        - js
        - css
        - ttf
        - woff
        - woff2
        - otf
        - zip
        - sketch
        - svg
        - jpg
        - jpeg
        - gif
        - png
        - webp
        - psd
        - ai
        - heic
        - mp4
        - webm
        - ogv
    
    # IMAGES
    # Array list of image extensions (without point) to display as image into asset grid
    image_extensions: 
        - svg
        - jpg
        - jpeg
        - gif
        - png
        - webp

# SYNTAX HIGHLIGHTER / PRISM
# Settings for Prism syntax highlighter used in LibDoc
# https://prismjs.com/
prism:
    # THEME
    # coy, dark, funky, okaidia, twilight, solarizedlight, tomorrow, 
    theme: tomorrow

    # FONT SIZE
    # CSS font-size property override for <code>
    font_size: 0.9em

    # LINE HEIGHT 
    # CSS line-height property override for <code>
    line_height: 1.4em

    # LANGUAGES TO ENABLE
    # Uncomment lines to enable language
    languages:
        - markup
        - css
        - clike
        - javascript
        #- abap
        #- abnf
        #- actionscript
        #- ada
        #- agda
        #- al
        #- antlr4
        #- apacheconf
        #- apex
        #- apl
        #- applescript
        #- aql
        #- arduino
        #- arff
        #- asciidoc
        #- aspnet
        #- asm6502
        #- autohotkey
        #- autoit
        #- bash
        #- basic
        #- batch
        #- bbcode
        #- birb
        #- bison
        #- bnf
        #- brainfuck
        #- brightscript
        #- bro
        #- bsl
        #- c
        #- csharp
        #- cpp
        #- cfscript
        #- chaiscript
        #- cil
        #- clojure
        #- cmake
        #- cobol
        #- coffeescript
        #- concurnas
        #- csp
        #- coq
        #- crystal
        #- css-extras
        #- csv
        #- cypher
        #- d
        #- dart
        #- dataweave
        #- dax
        #- dhall
        #- diff
        #- django
        #- dns-zone-file
        #- docker
        #- dot
        #- ebnf
        #- editorconfig
        #- eiffel
        #- ejs
        #- elixir
        #- elm
        #- etlua
        #- erb
        #- erlang
        #- excel-formula
        #- fsharp
        #- factor
        #- false
        #- firestore-security-rules
        #- flow
        #- fortran
        #- ftl
        #- gml
        #- gcode
        #- gdscript
        #- gedcom
        #- gherkin
        #- git
        #- glsl
        #- go
        #- graphql
        #- groovy
        #- haml
        #- handlebars
        #- haskell
        #- haxe
        #- hcl
        #- hlsl
        #- hoon
        #- http
        #- hpkp
        #- hsts
        #- ichigojam
        #- icon
        #- icu-message-format
        #- idris
        #- ignore
        #- inform7
        #- ini
        #- io
        #- j
        #- java
        #- javadoc
        #- javadoclike
        #- javastacktrace
        #- jexl
        #- jolie
        #- jq
        #- jsdoc
        #- js-extras
        #- json
        #- json5
        #- jsonp
        #- jsstacktrace
        #- js-templates
        #- julia
        #- keyman
        #- kotlin
        #- kumir
        #- latex
        #- latte
        #- less
        #- lilypond
        #- liquid
        #- lisp
        #- livescript
        #- llvm
        #- log
        #- lolcode
        #- lua
        #- makefile
        - markdown
        # - markup-templating
        #- matlab
        #- mel
        #- mizar
        #- mongodb
        #- monkey
        #- moonscript
        #- n1ql
        #- n4js
        #- nand2tetris-hdl
        #- naniscript
        #- nasm
        #- neon
        #- nevod
        #- nginx
        #- nim
        #- nix
        #- nsis
        #- objectivec
        #- ocaml
        #- opencl
        #- openqasm
        #- oz
        #- parigp
        #- parser
        #- pascal
        #- pascaligo
        #- psl
        #- pcaxis
        #- peoplecode
        #- perl
        #- php
        #- phpdoc
        #- php-extras
        #- plsql
        #- powerquery
        #- powershell
        #- processing
        #- prolog
        #- promql
        #- properties
        #- protobuf
        #- pug
        #- puppet
        #- pure
        #- purebasic
        #- purescript
        #- python
        #- qsharp
        #- q
        #- qml
        #- qore
        #- r
        #- racket
        #- jsx
        #- tsx
        #- reason
        #- regex
        #- rego
        #- renpy
        #- rest
        #- rip
        #- roboconf
        #- robotframework
        #- ruby
        #- rust
        #- sas
        #- sass
        - scss
        #- scala
        #- scheme
        #- shell-session
        #- smali
        #- smalltalk
        #- smarty
        #- sml
        #- solidity
        #- solution-file
        #- soy
        #- sparql
        #- splunk-spl
        #- sqf
        #- sql
        #- squirrel
        #- stan
        #- iecst
        #- stylus
        #- swift
        #- t4-templating
        #- t4-cs
        #- t4-vb
        #- tap
        #- tcl
        #- tt2
        #- textile
        #- toml
        #- turtle
        #- twig
        #- typescript
        #- typoscript
        #- unrealscript
        #- uri
        #- v
        #- vala
        #- vbnet
        #- velocity
        #- verilog
        #- vhdl
        #- vim
        #- visual-basic
        #- warpscript
        #- wasm
        #- wiki
        #- wolfram
        #- xeora
        # - xml-doc
        #- xojo
        #- xquery
        - yaml
        #- yang
        #- zig

# LIBDOC BACKLINK
# Link powered by LibDoc - Uncomment to remove
# disable_powered_by_link: true
```

## Credits for LibDoc

LibDoc theme comes with a link at the bottom of the page that links to its Github repository. You can disable it:

`disable_powered_by_link` <br> Just uncomment to remove link.