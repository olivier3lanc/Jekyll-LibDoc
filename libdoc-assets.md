---
title: Assets
description: A layout that displays a grid of assets with copy link and download buttons.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---
LibDoc comes with an assets layout which is the same as [page layout](libdoc-layouts.html#page) with a configurable grid of assets added after the content of the page. Assets settings are available in [config.yml](libdoc-config.html) which can be overridden for each page. Each asset is displayed with an icon, a download link and a copy URL button.

[Example 1 - default](libdoc-layout-assets.html)

```yaml
# Front matter
layout: libdoc/assets
assets:
    extensions_enabled: [pdf,js,css,ttf,woff,woff2,otf,zip,sketch,svg,jpg,jpeg,gif,png,webp,psd,ai,heic,mp4,webm,ogv]
    image_extensions: [svg,jpg,jpeg,gif,png,webp]
```

[Example 2 - with overridden parameters](libdoc-layout-assets-alt.html)

```yaml
# Front matter
layout: libdoc/assets
assets:
    path_from_root: /libdoc
    extensions_enabled: [jpg,jpeg,gif,webp,png]
```

Settings available for assets in [config.yml](libdoc-config.html).

| `assets.` | Type | Default | Description |
| - | - | - | - |
| `path_from_root` | *string* | / | The path from which files are available do download. `/` is the root |
| `extensions_enabled` | *Array* |  | List of file extensions (without point) to display |
| `image_extensions` | *Array* |  | List of image extensions (without point) to display as image into asset grid |

The settings above can be overridden on each page onto which `libdoc/assets` layout is assigned.
