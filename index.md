---
layout: libdoc/page-split
permalink: index.html # To avoid: Warning: Empty `slug` generated for '/'.
unlisted: true
---
![LibDoc splash screen](libdoc/img/libdoc.png)

LibDoc is a lightweight Gem free, plugin free and Github Pages compatitble Jekyll theme. LibDoc is dedicated to documentation of CSS and Javascript libraries. It comes with a [built-in playground](libdoc-playground.html) and [local search engine](libdoc-sidebar.html#search).

* **Github Pages compatible** <br>LibDoc runs **without Gem, without plugin**, it is lightweight and can run locally, depending on the resources you set into the [configuration](libdoc-config.html). **LibDoc is 100% compatible with** [Github Pages](https://pages.github.com/).<br><br>
* **It is fast and easy to document and illustrate** <br>LibDoc was made to easily and quickly get perperly designed documentation.<br><br>
* **Dual context: LibDoc + Playground** <br>LibDoc was made to craft documentation with its own embedded demos and examples which have their own CSS and JS resources defined into the [config.yml](libdoc-config.html#playground), just like any code sandbox.
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
* **5 main layouts** <br>LibDoc comes with dedicated [layouts](libdoc-layouts.html) for common documentation usages.<br><br>
* **Playground**<br> A major feature of the LibDoc Jekyll theme is its own built-in and configurable playground. It extends the [syntax highlighter](libdoc-syntax-highlighter.html) by running the specified code into a configurable context with user defined style sheets and scripts. [Learn more](libdoc-playground.html)<br><br>
* **100% static, no third-party service**<br> LidDoc works without any external service<br><br>
* **Multiple lazy-loaded playgrounds on any page** <br>Add as mush as playgrounds on your documentation pages.<br><br>
* **Local search engine**<br> LibDoc has its own internal search engine based on [lunr.js](https://lunrjs.com/). [Learn more](libdoc-sidebar.html#search)<br><br>
* **Can work local, even without Internet connection** <br>LibDoc can run locally with Jekyll serve or any http host - *assuming you set up local resources.*<br><br>
* **Customizeable settings**<br> LibDoc has its own settings editable on needs in the configuration file [config.yml](libdoc-config.html).<br><br>
* **Customizeable settings**<br> LibDoc has its own settings editable on needs in the configuration file [config.yml](libdoc-config.html).<br><br>
* **Assets grid**<br> Built to allow visitors to download necessary resources of the project, assets is a searchable layout that displays a grid of assets with copy link and download buttons. [Learn more](libdoc-assets.html)<br><br>
* **Front matter**<br> Optional parameters are ready to be set into the front matter of each page and every layout, like `category`, `order` in sidebar and `unlisted` feature. [Learn more](libdoc-front-matter.html)<br><br>
* **Github Flavoured Markdown**<br> LibDoc comes with native support of [Github Flavoured Markdown](https://github.github.com/gfm/). [Learn more](libdoc-markdown.html)<br><br>
* **Metadata**<br> LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing. Favicon, image, author, color, language are supported in addition of site title and description. [Learn more](libdoc-metadata.html)<br><br>
* **Sidebar**<br> All the necessary UI components to navigate through the project. All component have customizeable features such as logo/text management, search engine and additional links. All available pages of the project are listed into the responsive sidebar, excepting unlisted ones. You can also assign category to pages and set a custom order. [Learn more](libdoc-sidebar.html)<br><br>
* **Logo**<br> The top left of the LibDoc’s theme is a homepage link that can display just site title or a custom logo. [Learn more](libdoc-sidebar.html#logo)<br><br>
* **Pages order and category**<br> Pages created can optionally have a category and an order assigned through their front matter. Then, it is possible to group pages links in the sidebar with a tip above the link. [Learn more](libdoc-front-matter.html)<br><br>
* **Unlisted pages**<br> It is possible to remove page link from the sidebar and search results thanks to the front matter `unlisted` property. [Learn more](libdoc-front-matter.html)<br><br>
* **Prims as syntax highlighter**<br> LibDoc uses customizeable [Prismjs](https://prismjs.com/) syntax highlighter for both playground and markdown code highlight. [Learn more](libdoc-syntax-highlighter.html)<br><br>
* **TOC - Table Of Content**<br> LibDoc supports `{:toc}` automatically generated kramdown - markdown engine - TOC styling the table of content onto a right sidebar as follows. [Learn more](libdoc-toc.html)<br><br>
* **Shields and badges**<br>![Badge example](https://shields.io/badge/style-for--the--badge-green?logo=appveyor&style=for-the-badge) <br>
Easily add [shields.io](https://shields.io/) badges into the footer. Create your own badges and add it through the config.yml. [Learn more](libdoc-shields-badges.html)<br><br>

#### Playground example

This homepage is an example of [libdoc/page-split](libdoc-layouts.html) layout. The following playground is automatically built and displayed on the right side of the screen. Playground settings are set into [config.yml](libdoc-config.html). The following code is included into the `<body>` part of the playground.

```html
<header>
    <h1>Playground Example</h1>
    <p>This playground was automatically build from a <a href="../libdoc-layout-page-split.html" target="_blank" title="Documentation for page split layout">libdoc/page-split layout</a>: <a href="../#playground-example" title="Source page" target="_parent">See the source of this playground</a></p>
    <p>This is a user context playground <em>iframe</em> that uses its own CSS, standard Javascript and modules set into <a href="../libdoc-config.html#playground" title="Documentation page" target="_parent">config.yml</a></p>
    <p>This demo uses <a href="https://photoswipe.com" target="_blank">PhotoSwipe lightbox</a></p>
</header>
<div id="gallery">
    <a  href="https://olivier3lanc.github.io/photographies/paysages/ete/fin_journee_ete_beaufortain_size_2560x1706.webp" 
        data-pswp-width="2560" 
        data-pswp-height="1706" 
        target="_blank">
        <img src="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/ete/fin_journee_ete_beaufortain_size_2560x1706.webp&output=webp&w=500&q=30" alt="Fin de journée d'été dans le Beaufortain">
    </a>
    <a  href="https://olivier3lanc.github.io/photographies/paysages/ete/le_lac_de_roselend_et_ses_chalets_size_2560x1706.webp" 
        data-pswp-width="2560" 
        data-pswp-height="1706" 
        target="_blank">
        <img src="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/ete/le_lac_de_roselend_et_ses_chalets_size_2560x1706.webp&output=webp&w=500&q=30" alt="Le Lac de Roselend et ses Chalets">
    </a>
    <a  href="https://olivier3lanc.github.io/photographies/paysages/ete/le_planay_en_ete_mg_1350_size_2560x1706.webp" 
        data-pswp-width="2560" 
        data-pswp-height="1706" 
        target="_blank">
        <img src="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/ete/le_planay_en_ete_mg_1350_size_2560x1706.webp&output=webp&w=500&q=30" alt="Le Planay en été">
    </a>
    <a  href="https://olivier3lanc.github.io/photographies/paysages/ete/route_de_roselend_en_ete_img_1104_size_2560x1706.webp" 
        data-pswp-width="2560" 
        data-pswp-height="1706" 
        target="_blank">
        <img src="https://images.weserv.nl/?url=https://olivier3lanc.github.io/photographies/paysages/ete/route_de_roselend_en_ete_img_1104_size_2560x1706.webp&w=500&q=30" alt="Route de Roselend en été">
    </a>
</div>
```
{:.playground title="Playground example - User defined context into an iframe"}