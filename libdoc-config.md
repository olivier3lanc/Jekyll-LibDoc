---
title: Configuration
description: Settings YAML for LibDoc Jekyll Theme.
layout: styleguide/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
#assets: # Only for styleguide/assets layout
#    path_from_root: /
#    extensions_enabled: # File extension to display
#        - js
#        - css
---
* 
{:toc}

A major feature of the LibDoc Jekyll theme is its own built-in and configurable playground. 
It extends the syntax highlighter by running the specified code into a configurable context.
Just add `{: .playground}` below the syntax highlight markdown code.

```html
    <h1>I am a configurable playground</h1>
    <p>Gubergren sed aliquyam erat voluptua takimata duo est gubergren dolores.</p>
    <nav><a href="../libdoc-config.html#playground" target="_parent">See how to configure playground</a></nav>
```
{:.playground}

You can see [how playground is configurated](libdoc-config.html#playground).

* You can add as much playgrounds as you want into a page, playgrounds are lazy loaded.
* Playgrounds are embedded with iframe tag.
* Resizer for each playground at its bottom right
* Toolbar for each playground at its top with:
    * Maximize button
    * Open in new window button

Without the playground, code is displayed like this

```html
    <h1>Few lines of HTML</h1>
    <p>Gubergren sed aliquyam erat voluptua takimata duo est gubergren dolores.</p>
    <nav><a href="../libdoc-config.html#playground" target="_parent">See how to configure playground</a></nav>
```