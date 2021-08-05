---
title: Syntax highlighter
description: LibDoc uses customizable Prismjs to highlight the code.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---
* 
{:toc}

LibDoc uses [prismjs](https://prismjs.com/) with [markdown](libdoc-markdown.html) as syntax highlighter for both [playground](libdoc-playground.html) and simple code highlight.

Example

```javascript
// Example with Javascript
let myFunction = function() {
    document.querySelectorAll('.selector').forEach(function(element) {
        element.classList.add('passed');
    });
}
```

Source in markdown

```markdown
    ```javascript
    // Example with Javascript
    let myFunction = function() {
        document.querySelectorAll('.selector').forEach(function(element) {
            element.classList.add('passed');
        });
    }
    ```
```

LibDoc loads only the syntax languages specified in the config.yml. Official PrismJS themes can be assigned. Here are the settings:

| `prism.` | Type | Default | Description |
| - | - | - | - |
| `theme` | *string* | tomorrow | The exact name of the theme: `coy`, `dark`, `funky`, `okaidia`, `twilight`, `solarizedlight`, `tomorrow` |
| `font_size` | *CSS* | 1em | CSS font-size property override for `<code>` |
| `font_line_height` | *CSS* | 1em | CSS line-height property override for `<code>` |
| `languages` | *Array* | markup, css, clike, javascript | List of available languages to enable, just uncomment to enable |

Example of Prism's configuration.

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
