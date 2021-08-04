---
title: Configuration
description: Settings YAML for LibDoc Jekyll Theme.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
#assets: # Only for libdoc/assets layout
#    path_from_root: /
#    extensions_enabled: # File extension to display
#        - js
#        - css
---
* 
{:toc}

## Metadata 

Social networks metadata into written into `<head>` part of each generated HTML page to enable proper social sharing.

| `metadata.` | Type | Default | Description |
| - | - | - | - |
| `lang` | *string* | en | Sets the language of the project |
| `favicon` | *string* | LibDoc's favicon URL | PNG favicon URL. Can be either relative URL from site root or absolute URL starting with 'http' |
| `author` | *string* |  | Name of the author of the project, used into various places of the theme like footer. |
| `color` | *string* | #323b44 | Theme color metadata used in some browsers like Chrome that applies this color on browser address bar. Color must be in HEX |
| `image` | *string* | LibDoc's splash screen | Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http' |

Example of metadata's configuration part.

```yaml
metadata:
    # Sets the language of the project, default is en
    lang: en
    # PNG favicon URL. Can be either relative URL from site root or absolute URL starting with 'http'. Default is LibDoc's favicon
    favicon: /libdoc/img/favicon/android-chrome-512x512.png
    # Name of the author of the project, used into various places of the theme like footer. Default is empty
    author: John Smith
    # Theme color metadata used in some browsers like Chrome that applies this color on browser address bar.
    # Color must be in HEX, default is LibDoc's color
    color: '#123456'
    # Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen
    image: /libdoc/img/meta-image.png
```
## Sidebar 

Settings for the sidebar.

| `sidebar.` | Type | Default | Description |
| - | - | - | - |
| `disable_search` | *boolean* | false | Uncomment or set true to disable search |
| `logo.url` | *string* | LibDoc's logo URL | Image URL which can be local '/img/logo.png' or remote 'https://remotesite.com/img/logo.png' |
| `logo.max_height` | *CSS* | 40px | Logo image max height, applies only of url is set |
| `logo.font_size` | *CSS* | 32px | If no logo url, font size of the site title, ignored if `url` is set |
| `additional_links` | *Array* |  | Array of additional links to display anywhere into the sidebar |
| `additional_links[n].url` | *string* |  | Local or remote URL |
| `additional_links[n].title` | *string* |  | Link text |
| `additional_links[n].order` | *integer* |  | Like pages, integer that sets the position of the link into the sidebar, higher values give bottom position |
| `additional_links[n].category` | *string* |  | Add this this link into a category just like pages |

Example of sidebar's configuration part.

```yaml
sidebar:
    # Uncomment to disable search
    #disable_search: true
    # Top left branding/homepage link, specified image URL or site title if no URL is set
    logo:
        # Image URL: Can be local e.g. '/img/logo.png' or remote 'https://remotesite.com/img/logo.png'
        url: /libdoc/img/favicon/android-chrome-512x512.png
        # Logo image max height, applies only of url is set
        max_height: 40px
        # If no logo url, font size of the site title, ignored if url is set
        #font_size: 32px
    # Display additional links anywhere into the sidebar
    additional_links:
        #-   #url: # Local or remote URL
             #title: # Link text
             #order: # Like pages, integer that sets the position of the link into the sidebar, higher values give bottom position
             #category: # Add this this link into a category just like pages
        # Example URL
        -   url: ./libdoc-layout-page.html
            title: Relative link 1
            order: 500
            category: Archives
        -   url: ./libdoc-layouts.html
            title: Relative link 2
            order: 500
            category: Archives
        # Example remote URL
        -   url: https://www.wikipedia.org/
            title: Wikipedia
            order: 510
            category: External resources
```

## Shields - Badges

Feature that allows to display [shields](https://shields.io) badges into the footer.

| `shields.` | Type | Default | Description |
| - | - | - | - |
| `shields` | *Array* | empty | Array of shields containing image URL and link URL |
| `shields[n].image_html` | *string* |  | The HTML of the badge image |
| `shields[n].link_url` | *string* |  | The link's destination URL |

Example of shields configuration part.

```yaml
shields:
    -   image_html: <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/olivier3lanc/Jekyll-LibDoc?logo=github&style=flat-square">
        link_url: 'https://github.com/olivier3lanc/Jekyll-LibDoc'
    -   image_html: <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/olivier3lanc/Jekyll-LibDoc?logo=github&style=flat-square">
        link_url: 'https://github.com/olivier3lanc/Jekyll-LibDoc'
```

## Playground

LibDoc has its own code playground, here are the settings:

| `playground.` | Type | Default | Description |
| - | - | - | - |
| `min_height` | *CSS* | 300px | Sets a minimum height for each playground |
| `stylesheets` | *Array* |  | Array of `<head>` stylesheets URL. Relative URL starts with slash `/`. Absolute URL starts with `http` |
| `scripts_head` | *Array* |  | Array of `<head>` javascript URL. Relative URL starts with slash `/`. Absolute URL starts with `http` |
| `scripts_body` | *Array* |  | Array of `</body>` javascript URL. Relative URL starts with slash `/`. Absolute URL starts with `http` |

Example of playground's configuration part.

```yaml
playground:
    #min_height: 600px
    stylesheets: 
        - https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css
        - /libdoc/css/normalize.css
    scripts_head:
        - https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
        - /libdoc/js/my-toggles.js
    scripts_body: # Javascript files near </body>. Can be either relative URL from site root, absolute URL starting with 'http'
        - https://anyurl.script.js
        - /scripts/any-script.js
```

## Assets

LibDoc can display a grid of specified resources contained into the project, here are the settings:

| `assets.` | Type | Default | Description |
| - | - | - | - |
| `path_from_root` | *string* | / | The path from which files are available do download. `/` is the root |
| `extensions_enabled` | *Array* |  | List of file extensions (without point) to display |
| `image_extensions` | *Array* |  | List of image extensions (without point) to display as image into asset grid |

Example of assets configuration part.

```yaml
assets:
    path_from_root: /
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
    # Array list of image extensions (without point) to display as image into asset grid
    image_extensions: 
        - svg
        - jpg
        - jpeg
        - gif
        - png
        - webp
```

## Prism

LibDoc uses [prismjs](https://prismjs.com/) as syntax highlighter, here are the settings:

| `prism.` | Type | Default | Description |
| - | - | - | - |
| `theme` | *string* | tomorrow | The exact name of the theme: `coy`, `dark`, `funky`, `okaidia`, `twilight`, `solarizedlight`, `tomorrow` |
| `font_size` | *CSS* | 1em | CSS font-size property override for `<code>` |
| `font_line_height` | *CSS* | 1em | CSS line-height property override for `<code>` |
| `languages` | *Array* |  | List of available languages to enable, just uncomment to enable |

Example of Prism's configuration part.

```yaml
prism:
    # coy, dark, funky, okaidia, twilight, solarizedlight, tomorrow, 
    theme: tomorrow
    # CSS font-size property override for <code>
    font_size: 0.9em
    # CSS line-height property override for <code>
    line_height: 1em
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
```

## LibDoc link

Settings can enable or disable the LibDoc's Github repository page.
```yaml
#disable_powered_by_link: true
```