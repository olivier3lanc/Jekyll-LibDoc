---
title: Sidebar
description: Available settings of the sidebar.
layout: styleguide/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---
* 
{:toc}

LibDoc's sidebar contains all necessary UI components to navigate through the project. All available pages are listed into the responsive sidebar, excepting [unlisted](libdoc-front-matter.html) ones. You can also assign [category](libdoc-front-matter.html) to pages and set a [custom order](libdoc-front-matter.html).

## Logo

The top left of the LibDoc's theme is a homepage link the can display simple text with site title or a custom logo.

Settings in [config.yml](libdoc-config.html):

| `sidebar.` | Type | Default | Description |
| - | - | - | - |
| `logo.url` | *string* | LibDoc's logo URL | Image URL which can be local '/img/logo.png' or remote 'https://remotesite.com/img/logo.png' |
| `logo.max_height` | *CSS* | 40px | Logo image max height, applies only of url is set |
| `logo.font_size` | *CSS* | 32px | If no logo url, font size of the site title, ignored if `url` is set |

Example with a local logo

```yaml
sidebar:
    logo:
        # Image URL: Can be local e.g. '/img/logo.png' or remote 'https://remotesite.com/img/logo.png'
        url: /styleguide/img/favicon/android-chrome-512x512.png
        # Logo image max height, applies only of url is set
        max_height: 40px
        # If no logo url, font size of the site title, ignored if url is set
        #font_size: 32px
```

Example with text only

```yaml
sidebar:
    logo:
        # Image URL: Can be local e.g. '/img/logo.png' or remote 'https://remotesite.com/img/logo.png'
        #url: /styleguide/img/favicon/android-chrome-512x512.png
        # Logo image max height, applies only of url is set
        #max_height: 40px
        # If no logo url, font size of the site title, ignored if url is set
        #font_size: 32px
```

## Search

LibDoc has its own internal search engine based on [lunr.js](https://lunrjs.com/). Search is enabled by default but can be disabled through settings in [config.yml](libdoc-config.html).

Settings in [config.yml](libdoc-config.html):

| `sidebar.` | Type | Default | Description |
| - | - | - | - |
| `disable_search` | *boolean* | false | Uncomment or set true to disable search |

Example of disabled search:

```yaml
sidebar:
    disable_search: true
```

## Additional links

It is possible to add custom links into the sidebar through settings in [config.yml](libdoc-config.html) with optional [category](libdoc-front-matter.html) and [order](libdoc-front-matter.html).

Settings in [config.yml](libdoc-config.html):

| `sidebar.` | Type | Default | Description |
| - | - | - | - |
| `additional_links` | *Array* |  | Array of additional links to display anywhere into the sidebar |
| `additional_links[n].url` | *string* |  | Local or remote URL |
| `additional_links[n].title` | *string* |  | Link text |
| `additional_links[n].order` | *integer* |  | Like pages, integer that sets the position of the link into the sidebar, higher values give bottom position |
| `additional_links[n].category` | *string* |  | Add this this link into a category just like pages |

Example of additional links.

```yaml
sidebar:
    additional_links:
        #-   #url: # Local or remote URL
             #title: # Link text
             #order: # Like pages, integer that sets the position of the link into the sidebar, higher values give bottom position
             #category: # Add this this link into a category just like pages
        # Example URL
        -   url: ./libdoc-layout-page.html
            title: Relative link 1
            order: 500
            category: Archives
        -   url: ./libdoc-layouts.html
            title: Relative link 2
            order: 500
            category: Archives
        # Example remote URL
        -   url: https://www.wikipedia.org/
            title: Wikipedia
            order: 510
            category: External resources
```