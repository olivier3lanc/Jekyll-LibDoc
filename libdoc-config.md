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

Playground is an user context completely separated from LibDoc theme, it can be embedded mulitple times with different contents on your pages. Here are available settings:

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
* `sidebar.additional_links` <br> Allows to add links that are not pages included into the project, anywhere into the sidebar. For each item
