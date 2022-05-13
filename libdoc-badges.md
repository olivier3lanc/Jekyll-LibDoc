---
title: Badges - Shields
description: Easily add shields.io badges into the footer.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 110
#unlisted: true
---
LibDoc allows to display [shields](https://shields.io) badges into the footer. You can add badges into the [config.yml](libdoc-config.html).

| `shields.` | Type | Default | Description |
| - | - | - | - |
| `shields` | *Array* | empty | Array of shields containing image URL and link URL |
| `shields[n].image_html` | *string* |  | The HTML of the badge image |
| `shields[n].link_url` | *string* |  | The link's destination URL |

Example of shields configuration part.

```yaml
shields:
    -   image_html: <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/olivier3lanc/Jekyll-LibDoc?logo=github&style=flat-square">
        link_url: https://github.com/olivier3lanc/Jekyll-LibDoc
    -   image_html: <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/olivier3lanc/Jekyll-LibDoc?logo=github&style=flat-square">
        link_url: https://github.com/olivier3lanc/Jekyll-LibDoc
```