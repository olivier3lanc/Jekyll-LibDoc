---
layout: libdoc/page-split
permalink: index.html # To avoid: Warning: Empty `slug` generated for '/'.
unlisted: true
---
![LibDoc layout](assets/libdoc/img/libdoc-layout-page-split.webp)

 > LibDoc is a Jekyll theme that was crafted to easily and quickly get properly designed documentation especially for CSS and Javascript libraries. It comes with a [built-in playground](libdoc-playground.html) and local search engine.

* **Quick and easy without installation<sup>new</sup>**<br> Quickly deploy Jekyll LibDoc on a Github repository with [remote theme feature](https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc-install.html#online---remote-theme)
* **Dual context: LibDoc + Playground**<br> LibDoc was made to craft documentation with its own embedded demos and examples. A major feature of the LibDoc Jekyll theme is its own built-in and configurable playground which is both a [layout](libdoc-layouts.html#playground) and a syntax highlighter extension. It extends the [syntax highlighter](libdoc-config.html#prismjs-syntax-highlighter) by running the specified code into a configurable context with user defined style sheets and scripts. [Learn more](libdoc-playground.html)
* **Gem free, plugin free** <br>LibDoc runs without any Gem nor plugin.
* **Github Pages compatible Jekyll theme** <br>Easily deploy your project on Github Pages, LibDoc is fully compatible.
* **5 layouts** <br>LibDoc comes with dedicated [layouts](libdoc-layouts.html) for common documentation usages.
* **Assets grid**<br> Built to allow visitors to view, download or copy URL of specified resources on your project. [Example](libdoc-layout-assets.html)
* **Local search engine**<br> LibDoc has its own internal search engine based on [lunr.js](https://lunrjs.com/).
* **Multiple lazy-loaded playgrounds on any page** <br>Add as mush as playgrounds on your documentation pages, playgrounds are loaded once into the viewport.
* **Can work locally, even without Internet connection** <br>LibDoc can run locally with Jekyll serve or any http host - *assuming you set up local resources.*
* **Customizeable settings**<br> LibDoc has its own settings editable on needs in the configuration file [config.yml](libdoc-config.html).
* **Front matter**<br> Optional parameters ready to be set into the front matter of each page and every layout, like `category`, `order` in sidebar and `unlisted` feature. [Learn more](libdoc-front-matter.html)
* **Github Flavoured Markdown**<br> LibDoc comes with native support of [Github Flavoured Markdown](https://github.github.com/gfm/). [Learn more](libdoc-markdown.html)
* **Metadata**<br> LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing. Favicon, image, author, color, language are supported in addition of site title and description. Metadata have dual settings for both [site/project](libdoc-config.html#metadata) and [playground](libdoc-config.html#playground)
* **Sidebar**<br> All the necessary UI components to navigate through your project. Customizeable features such as logo/text management, search engine and possibility to add links of page that are not contained into the project. All available pages of the project are listed into the responsive sidebar, excepting unlisted ones. You can also assign category to pages and set a custom order. [Learn more](libdoc-config.html#sidebar)
* **Customizable Logo**<br> The top left of the LibDoc’s theme is a homepage link that can display just site title or a custom logo. [Learn more](libdoc-sidebar.html#sidebar)
* **Pages order and category**<br> Pages created can optionally have a category and an order assigned through their front matter. Then, it is possible to group pages links in the sidebar with a tip above the link. [Learn more](libdoc-front-matter.html)
* **Unlisted pages**<br> It is possible to remove page link from the sidebar and search results thanks to the front matter `unlisted` property. [Learn more](libdoc-front-matter.html#unlisted)
* **Prims as syntax highlighter**<br> LibDoc uses customizeable [Prismjs](https://prismjs.com/) syntax highlighter for both playground and markdown code highlight. [Learn more](libdoc-config.html#prismjs-syntax-highlighter)
* **TOC - Table Of Content**<br> LibDoc supports `{:toc}` automatically generated from kramdown - markdown engine - TOC styling the table of content onto a right sidebar. [Learn more](libdoc-markdown.html#table-of-content-support)
* **Shields and badges**<br>![Badge example](https://shields.io/badge/style-for--the--badge-green?logo=appveyor&style=for-the-badge) <br>
Easily add [shields.io](https://shields.io/) badges into the footer. Create your own badges and add it through the config.yml. [Learn more](libdoc-badges.html)

#### Playground example

This homepage is an example of [libdoc/page-split](libdoc-layouts.html) layout. The following playground is automatically built and displayed on the right side of the screen. Playground settings are set into [config.yml](libdoc-config.html#playground). The following code is included into the `<body>` part of the playground.

```html
<nav    class="top"
        scroll-btween="nav_1"
        data-detector="detector-w1" 
        data-top="|0:20 to 30:0 to 100:0|px">
    <a  href="{{site.url}}{{site.baseurl}}/#playground-example" target="_parent">Code of this playground</a>
</nav>
<article>
    <p>
        <span scroll-btween="w1" 
                data-detector="detector-w1" 
                data-opacity="|0:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.05 to 100:0|em">Scroll down</span>
        <span scroll-btween="w2" 
                data-detector="detector-w2" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">This is a</span>
        <span scroll-btween="w3" 
                data-detector="detector-w3" 
                data-opacity="|0:0 to 2:1 to 98:1 to 100:0|" 
                data-transform="scale(|0:0 to 2:1 to 98:1 to 100:2|)" 
                data-letter-spacing="|0:-0.1 to 100:0|em">playground</span>
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
{:.playground title="Playground example"}