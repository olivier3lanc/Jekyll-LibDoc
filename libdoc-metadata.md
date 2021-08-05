---
title: Metadata
description: Social data for the project.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---

LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing. Here are the [config.yml](libdoc-config.html) settings:

| `metadata.` | Type | Default | Description |
| - | - | - | - |
| `lang` | *string* | en | Sets the language of the project |
| `favicon` | *string* | LibDoc's favicon URL | PNG favicon URL. Can be either relative URL from site root or absolute URL starting with 'http' |
| `author` | *string* |  | Name of the author of the project, used into various places of the theme like footer. |
| `color` | *string* | #323b44 | Theme color metadata used in some browsers like Chrome that applies this color on browser address bar. Color must be in HEX |
| `image` | *string* | LibDoc's splash screen | Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http' |

Example of metadata's configuration part.

```yaml
metadata:
    # Sets the language of the project, default is en
    lang: en
    # PNG favicon URL. Can be either relative URL from site root or absolute URL starting with 'http'. Default is LibDoc's favicon
    favicon: /libdoc/img/favicon/android-chrome-512x512.png
    # Name of the author of the project, used into various places of the theme like footer. Default is empty
    author: John Smith
    # Theme color metadata used in some browsers like Chrome that applies this color on browser address bar.
    # Color must be in HEX, default is LibDoc's color
    color: '#123456'
    # Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen
    image: /libdoc/img/libdoc.png
```

Snippet of social networks metadata markup of LibDoc based on @joshbuchea [HEAD](https://github.com/joshbuchea/HEAD).

```html
    <!-- General metadata -->
    <title>Title of the page</title>
    <meta itemprop="name" content="Title of the page">
    <meta name="description" itemprop="description" content="Description of the page">
    <link rel="icon" type="image/png" href="url/of/favicon.png">
    <meta name="application-name" content="Title of the page">
    <meta name="author" content="Author of the project">
    <!-- Microsoft -->
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="msapplication-starturl" content="/">
    <meta name="msapplication-tooltip" content="Title of the page">
    <meta name="msapplication-TileColor" content="#XXXXXX">
    <!-- Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://myproject.com/mypage.html">
    <meta property="og:title" content="Title of the page">
    <meta property="og:description" content="Description of the page">
    <meta property="og:image" content="https://myproject.com/images/meta-image.jpg">
    <!-- Twitter -->
    <meta name="twitter:card" content="app">
    <meta name="twitter:title" content="Title of the page">
    <meta name="twitter:description" content="Description of the page">
    <meta name="twitter:url" content="https://myproject.com/mypage.html">
    <meta name="twitter:image" content="https://myproject.com/images/meta-image.jpg">
    <!-- iOS -->
    <meta name="apple-mobile-web-app-title" content="Title of the page">
    <meta name="apple-mobile-web-app-status-bar-style" content="#XXXXXX">
    <link rel="apple-touch-icon" href="url/of/favicon.png">
    <!-- Android -->
    <meta name="theme-color" content="#XXXXXX">
    <meta name="mobile-web-app-capable" content="yes">
``` 