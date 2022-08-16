---
title: Layouts
description: List and descriptions of available layouts.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
---
* 
{:toc}

## Page 

![LibDoc page layout](assets/libdoc/img/libdoc-layout-page.webp)

The most common LibDoc's layout to display content. [View an example](libdoc-layout-page.html)

```yaml
# Front matter
layout: libdoc/page
```

## Page split

![LibDoc page split layout](assets/libdoc/img/libdoc-layout-page-split.webp)

Based on page layout, splits the main content in two sides: On the left, the page render, on the right, the first playground found on the page.

[Example](libdoc-layout-page-split.html)

```yaml
# Front matter
layout: libdoc/page-split
```

## Page code mirror

![LibDoc page codemirror layout](assets/libdoc/img/libdoc-layout-page-codemirror.webp)

Intended to be used for live playing with the code of the playground, the page [code mirror](https://codemirror.net/) playground layout runs the HTML of the current page onto the right side panel.

[Example](libdoc-layout-page-codemirror.html)

```yaml
# Front matter
layout: libdoc/page-codemirror
```

## Playground

![LibDoc page playground layout](assets/libdoc/img/libdoc-layout-playground.webp)

Include the entire page hard coded into the playground. 

[Example](libdoc-layout-playground.html)

```yaml
# Front matter
layout: libdoc/playground
```

By default, libdoc/playground is completely separated from other layouts, then sidebar disappears. If you can to keep the sidebar, just add the option `iframe_mode: true` into the [front matter](libdoc-front-matter.html#iframe-mode). See an [example with iframe mode]({{site.url}}{{site.baseurl}}/assets/libdoc/iframe.html?src={{site.url}}{{site.baseurl}}/libdoc-layout-playground-iframe.html)

```yaml
# Optionally
iframe_mode: true
```

## Assets

![LibDoc page assets layout](assets/libdoc/img/libdoc-layout-assets.webp)

The same design `libdoc/page`. This layout adds a grid of user specified assets folder available for download or copy URL that are included into the project.
The default path of the assets source is set in the [config file](libdoc-config.html#assets) which can be overridden for each page.

* [Example 1 - Based on config settings](libdoc-layout-assets.html) 
* [Example 2 - with overridden parameters](libdoc-layout-assets-alt.html)

```yaml
# Front matter
layout: libdoc/assets
```


