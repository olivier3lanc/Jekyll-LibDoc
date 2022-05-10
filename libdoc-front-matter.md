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

## Unlisted

`unlisted` - *boolean* - If true, removes page link from the sidebar.

```yaml
unlisted: true
```

## Assets settings

*Available only for libdoc/assets layout*.

These front matter settings override the [assets configuration](libdoc-config.html#assets).

| `assets.` | Type | Description |
| - | - | - |
| `path_from_root` | *string* | The path from which files are available do download. `/` is the root |
| `extensions_enabled` | *Array* | Array of file extensions to display |

Example of custom assets layout configuration on a page: [view example](libdoc-layout-assets-alt.html

```yaml
layout: libdoc/assets
# Example of LibDoc secific optional settings
assets:
    path_from_root: /libdoc
    extensions_enabled: # File extension to display
        - jpg
        - gif
        - webp
        - png
```

