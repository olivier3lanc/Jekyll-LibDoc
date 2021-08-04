---
title: Front matter
description: Optional LibDoc specific parameters available.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---
* 
{:toc}

## Common

LibDoc comes with the following optional parameters that can be set into the front matter of each page and every layout.

| Parameter | Type | Description |
| - | - | - |
| `unlisted` | *boolean* | If true, removes page link from the sidebar |
| `category` | *string* | Adds a separator above the page link with the name of the category |
| `order` | *integer* | Sets the rank of the page link into the sidebar, higher values give lower rank for the page link |

Example with few pages with LibDoc's specific front matter:

```yaml
# Page 1
title: Markdown
# LibDoc secific optional settings
category: Features
order: 100
#unlisted: true

# Page 2
title: Configuration
# LibDoc secific optional settings
category: Features
order: 100
#unlisted: true

# Page 3
title: Front matter
# LibDoc secific optional settings
category: Features
order: 100
#unlisted: true

# Page 4
title: Page layout
# LibDoc secific optional settings
category: Examples
order: 200
#unlisted: true

# Page 5
title: Assets layout
# LibDoc secific optional settings
category: Examples
order: 200
#unlisted: true

# Page 6
title: Blank layout
# LibDoc secific optional settings
category: Examples
order: 200
#unlisted: true

# Page 7 unlisted
title: Page unlisted title
# LibDoc secific optional settings
#category: Features
#order: 100
unlisted: true
```
Screenshot of the sidebar's result:

![Example of category and order settings](libdoc/img/order-and-category.webp)

## Assets

The following front matter parameters are available only for the [assets layout](libdoc-layouts.html#assets)

| `assets.` | Type | Description |
| - | - | - |
| `path_from_root` | *string* | The path from which files are available do download. `/` is the root |
| `extensions_enabled` | *Array* | Array of file extensions to display |

Example of custom assets layout configuration on a page: [view example](libdoc-layout-assets-alt.html)

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