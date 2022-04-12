---
layout: libdoc/page-split
permalink: index.html # To avoid: Warning: Empty `slug` generated for '/'.
unlisted: true
---
![LibDoc splash screen](libdoc/img/libdoc.png)

LibDoc is a lightweight Gem free, plugin free and Github Pages compatitble Jekyll theme. LibDoc is dedicated to documentation of CSS and Javascript libraries. It comes with a [built-in playground](libdoc-playground.html) and [local search engine](libdoc-sidebar.html#search).


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
* **Can work without the Internet** <br>LibDoc can run locally with Jekyll serve or any http host - *assuming you set up local resources.*<br><br>
* **Customizeable settings**<br> LibDoc has its own settings editable on needs in the configuration file [config.yml](libdoc-config.html).<br><br>
* **Github Pages compatible** <br>LibDoc runs **without Gem, without plugin**, it is lightweight and can run locally, depending on the resources you set into the [configuration](libdoc-config.html). **LibDoc is 100% compatible with** [Github Pages](https://pages.github.com/).<br><br>
* **Customizeable settings**<br> LibDoc has its own settings editable on needs in the configuration file [config.yml](libdoc-config.html).<br><br>
* **Assets grid**<br> Built to allow visitors to download necessary resources of the project, assets is a searchable layout that displays a grid of assets with copy link and download buttons. [Learn more](libdoc-assets.html)<br><br>
* **Front matter**<br> Optional parameters are ready to be set into the front matter of each page and every layout, like `category`, `order` in sidebar and `unlisted` feature. [Learn more](libdoc-front-matter.html)<br><br>
* **Github Flavoured Markdown**<br> LibDoc comes with native support of [Github Flavoured Markdown](https://github.github.com/gfm/). [Learn more](libdoc-markdown.html)<br><br>
* **Metadata**<br> LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing. Favicon, image, author, color, language are supported in addition of site title and description. [Learn more](libdoc-metadata.html)<br><br>
* **Playground**<br> A major feature of the LibDoc Jekyll theme is its own built-in and configurable playground. It extends the [syntax highlighter](libdoc-syntax-highlighter.html) by running the specified code into a configurable context with user defined style sheets and scripts. [Learn more](libdoc-playground.html)<br><br>
* **Shields and badges**<br>![Badge example](https://shields.io/badge/style-for--the--badge-green?logo=appveyor&style=for-the-badge) <br>
Easily add [shields.io](https://shields.io/) badges into the footer. Create your own badges and add it through the config.yml. [Learn more](libdoc-shields-badges.html)<br><br>
* **Sidebar**<br> All the necessary UI components to navigate through the project. All component have customizeable features such as logo/text management, search engine and additional links. All available pages of the project are listed into the responsive sidebar, excepting unlisted ones. You can also assign category to pages and set a custom order. [Learn more](libdoc-sidebar.html)<br><br>
* **Logo**<br> The top left of the LibDoc’s theme is a homepage link that can display just site title or a custom logo. [Learn more](libdoc-sidebar.html#logo)<br><br>
* **Local search engine**<br> LibDoc has its own internal search engine based on [lunr.js](https://lunrjs.com/). [Learn more](libdoc-sidebar.html#search)<br><br>
* **Pages order and category**<br> Pages created can optionally have a category and an order assigned through their front matter. Then, it is possible to group pages links in the sidebar with a tip above the link. [Learn more](libdoc-front-matter.html)<br><br>
* **Unlisted pages**<br> It is possible to remove page link from the sidebar and search results thanks to the front matter `unlisted` property. [Learn more](libdoc-front-matter.html)<br><br>
* **Prims as syntax highlighter**<br> LibDoc uses customizeable [Prismjs](https://prismjs.com/) syntax highlighter for both playground and markdown code highlight. [Learn more](libdoc-syntax-highlighter.html)<br><br>
* **Layouts**<br> LibDoc has 5 main layouts available for multiple purposes. [Learn more](libdoc-layouts.html)<br><br>
* **TOC - Table Of Content**<br> LibDoc supports `{:toc}` automatically generated kramdown - markdown engine - TOC styling the table of content onto a right sidebar as follows. [Learn more](libdoc-toc.html)

This homepage is an example of [libdoc/page-split](libdoc-layouts.html) layout

```html
<header>
    <h1>Playground example with PhotoSwipe</h1>
    <p>This is a user context playground that uses its own resources set into <a href="../libdoc-config.html#playground" title="Documentation page" target="_parent">config.yml</a></p>
</header>
<ul>
    <li>Add your own CSS files</li>
    <li>Add your own Javascript <code>type="text/javascript"</code> into head part of HTML</li>
    <li>Add your own Javascript <code>type="module"</code> near end body part of HTML</li>
    <li>Add your own Javascript <code>type="text/javascript"</code> near end body part of HTML</li>
</ul>
<div class="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started">
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" 
        data-pswp-width="1669" 
        data-pswp-height="2500" 
        target="_blank">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
    </a>
    <!-- cropped thumbnail: -->
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg" 
          data-pswp-width="1875" 
          data-pswp-height="2500" 
          data-cropped="true" 
          target="_blank">
          <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg" alt="" />
          Cropped
    </a>
    <!-- data-pswp-src with custom URL in href -->
    <a  href="https://unsplash.com" 
        data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
        data-pswp-width="2500" 
        data-pswp-height="1666" 
        target="_blank">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" alt="" />
    </a>
    <!-- Without thumbnail: -->
    <a  href="http://example.com" 
        data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
        data-pswp-width="2500" 
        data-pswp-height="1668" 
        target="_blank">
        No thumbnail
    </a>
    <!-- wrapped with any element: -->
    <div>
        <a  href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg"
            data-pswp-width="2500" 
            data-pswp-height="1667" 
            target="_blank">
            <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg" alt="" />
        </a>
    </div>
</div>
```
{:.playground title="User context into iframe"}