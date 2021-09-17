---
layout: libdoc/page-split
permalink: index.html # To avoid: Warning: Empty `slug` generated for '/'.
unlisted: true
---
![LibDoc splash screen](libdoc/img/libdoc.png)

LibDoc is a lightweight Gem free, plugin free and Github Pages compatitble Jekyll theme. LibDoc is dedicated to documentation of CSS and Javascript libraries. It comes with a [built-in playground](libdoc-playground.html) and [search engine](libdoc-sidebar.html#search).

## Github Pages compatible

LibDoc runs **without Gem, without plugin**, it is lightweight and can run locally, depending on the resources you set into the [configuration](libdoc-config.html). **LibDoc is 100% compatible with** [Github Pages](https://pages.github.com/).

## Customizeable settings

LibDoc has its own settings editable on needs in the configuration file [config.yml](libdoc-config.html).

## Assets grid

Built to allow visitors to download necessary resources of the project, assets is a searchable layout that displays a grid of assets with copy link and download buttons. [Learn more](libdoc-assets.html)

## Front matter

Optional parameters are ready to be set into the front matter of each page and every layout, like `category`, `order` in sidebar and `unlisted` feature. [Learn more](libdoc-front-matter.html)

## Github Flavoured Markdown

LibDoc comes with native support of [Github Flavoured Markdown](https://github.github.com/gfm/). [Learn more](libdoc-markdown.html)

## Metadata

LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing. Favicon, image, author, color, language are supported in addition of site title and description. [Learn more](libdoc-metadata.html)

## Playground

A major feature of the LibDoc Jekyll theme is its own built-in and configurable playground. It extends the [syntax highlighter](libdoc-syntax-highlighter.html) by running the specified code into a configurable context with user defined style sheets and scripts. [Learn more](libdoc-playground.html)

## Shields and badges

![Badge example](https://shields.io/badge/style-for--the--badge-green?logo=appveyor&style=for-the-badge) 
Easily add [shields.io](https://shields.io/) badges into the footer. Create your own badges and add it through the config.yml. [Learn more](libdoc-shields-badges.html)

## Sidebar

All the necessary UI components to navigate through the project. All component have customizeable features such as logo/text management, search engine and additional links. All available pages of the project are listed into the responsive sidebar, excepting unlisted ones. You can also assign category to pages and set a custom order. [Learn more](libdoc-sidebar.html)

## Logo

The top left of the LibDoc’s theme is a homepage link that can display just site title or a custom logo. [Learn more](libdoc-sidebar.html#logo)

## Local search engine

LibDoc has its own internal search engine based on [lunr.js](https://lunrjs.com/). [Learn more](libdoc-sidebar.html#search)

## Pages order and category

Pages created can optionally have a category and an order assigned through their front matter. Then, it is possible to group pages links in the sidebar with a tip above the link. [Learn more](libdoc-front-matter.html)

## Unlisted pages

It is possible to remove page link from the sidebar and search results thanks to the front matter `unlisted` property. [Learn more](libdoc-front-matter.html)

## Prims as syntax highlighter

LibDoc uses customizeable [Prismjs](https://prismjs.com/) syntax highlighter for both playground and markdown code highlight. [Learn more](libdoc-syntax-highlighter.html)

## Layouts

LibDoc has 4 main layouts available for multiple purposes. [Learn more](libdoc-layouts.html)

## TOC - Table Of Content

LibDoc supports `{:toc}` automatically generated kramdown - markdown engine - TOC styling the table of content onto a right sidebar as follows. [Learn more](libdoc-toc.html)

This homepage is an example of [libdoc/page-split](libdoc-layouts.html) layout

```html
<header class="px-8 py-8 mx-auto bg-blue-100 text-center">
    <h1 class="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-0 mb-8">
        I am a playground
    </h1>
    <p class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
        This playground is played into a dedicated iframe with its own context with user defined CSS and Javascript.
    </p>
</header>
```
{:.playground}