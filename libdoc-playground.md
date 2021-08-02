---
title: Playground
description: Standalone configurable code playground.
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

How to add a playground with markdown:

```markdown
    ```html
        <the code>
    ```
    {:.playground}
```

Here is an example:

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
Which renders

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

You can see [how playground is configurated](libdoc-config.html#playground).

* You can add as much playgrounds as you want into a page, playgrounds are lazy loaded.
* Playgrounds are embedded with iframe tag.
* Resizer for each playground at its bottom right
* Toolbar for each playground at its top with:
    * Maximize button
    * Open in new window button

Without the playground, code is displayed like this

```html
<header class="px-8 py-8 max-w-screen-lg mx-auto bg-blue-100 text-center">
    <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-0 mb-8">My custom project.</h1>
    <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">Here is a fully crafted code playground with its own resources set in <a href="../libdoc-config.html#playground" target="_parent" class="text-blue-500 hover:text-blue-800">configuration</a>.</p>
    <nav class="flex justify-center">
        <a class="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-600 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200" href="#">Get started</a>
    </nav>
</header>
```

## How it works

LibDoc's playground copy the code from the syntax highlighted area, encode it in base64 and send the data as GET parameters to the built-in playground as an iframe URL.