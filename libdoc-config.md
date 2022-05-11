---
title: Configuration
description: Every setting details available for LibDoc Jekyll Theme.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
# unlisted: true
# iframe_mode: true
---
* 
{:toc}

LibDoc is a [Jekyll](https://www.jekyllrb.org) theme which supports all [Jekyll configuration settings](https://jekyllrb.com/docs/configuration/). You can use default `config.yml` or create your own `_any-name-config.yml` file. This page is dedicated to all the specific settings of LibDoc.

## Playground

Playground is an user context completely separated from LibDoc theme resources, it can be embedded mulitple times with different contents on your pages. Here are available settings:

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

## Credits for LibDoc

LibDoc theme comes with a link at the bottom of the page that links to its Github repository. You can disable it:

`disable_powered_by_link` <br> Just uncomment to remove link.