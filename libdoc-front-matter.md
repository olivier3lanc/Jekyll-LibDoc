---
title: Front matter
description: Optional LibDoc specific parameters available for each page.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
---
* 
{:toc}

LibDoc comes with the following optional parameters that can be set into the front matter of each page.

## Order

`order` - *integer* - Sidebar items are ordered by this value. Sets the rank of the page link into the sidebar, higher values give lower rank for the page link. [Additional links](libdoc-config.html#sidebar) are treated like any other page order.

```yaml
order: 100
```

## Category

`category` - *string* - Enter any name. Adds a separator above the item link with the name of the category if the previous item has not the same category.

```yaml
category: Features
```

## Separator

`separator` - *boolean* - Adds only a separator above the item link if set to true. Has no effect if not specified.

```yaml
separator: true
```

## Unlisted

`unlisted` - *boolean* - If true, removes page link from the sidebar and search results. [Example](libdoc-unlisted.html)

```yaml
unlisted: true
```

## Iframe mode

`iframe_mode` - *boolean* - If true, makes the target page load into an iframe, this allows to keep the sidebar visible. [Example with a YouTube link](libdoc/iframe.html?src=https://www.youtube.com/embed/iWowJBRMtpc) and [example with a playground](libdoc/iframe.html?src={{site.url}}{{site.baseurl}}/libdoc-layout-playground-iframe.html)

```yaml
iframe_mode: true
```

## Assets settings

*Available only for pages using [libdoc/assets](libdoc-layouts.html#assets) layout*.

These front matter settings override the [assets configuration](libdoc-config.html#assets).

| `assets.` | Type | Description |
| - | - | - |
| `path_from_root` | *string* | The path from which files are available do download. `/` is the root |
| `extensions_enabled` | *Array* | Array of file extensions to display |

Example of custom assets layout configuration on a page: [view example](libdoc-layout-assets-alt.html)

```yaml
layout: libdoc/assets
# Example of LibDoc secific optional settings
assets:
    path_from_root: /assets/libdoc
    extensions_enabled: # File extension to display
        - jpg
        - gif
        - webp
        - png
```

