---
title: Metadata
description: LibDoc has metadata settings for both site and playground. 
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---

LibDoc supports social networks metadata into its document `<head>` to enable proper social sharing **for both site and playground**. 

## Site's metadata

[Site's metadata](libdoc-config.html#metadata) settings for the each page of your LibDoc's site:

| `metadata.` | Type | Default | Description |
| - | - | - | - |
| `lang` | *string* | en | Sets the language of the project |
| `favicon` | *string* | LibDoc's favicon URL | A single file URL for every PNG favicon. Can be either relative URL from site root or absolute URL starting with 'http' |
| `favicon_auto` | *string* | | Automatic generation of multiple PNG favicons URL. Generates proper favicon files sizes for multiple devices. Must be an absolute URL starting with 'http'. Must be a public URL image file with a minimum 192x192 pixels |
| `author` | *string* | | Name of the author of the project, used into various places of the theme like footer. |
| `color` | *string* | #323b44 | Theme color metadata used in some browsers like Chrome that applies this color on browser address bar. Color must be in HEX |
| `image` | *string* | LibDoc's splash screen | Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http' |

## Playground's metadata

 [Playground's metadata](libdoc-config.html#playground) specific settings for the playground - which is the same construction as site's metadata:

| `playground.metadata.` | Type | Default | Description |
| - | - | - | - |
| `lang` | *string* | en | Sets the language of the playground |
| `favicon` | *string* | LibDoc's favicon URL | A single file URL for every PNG favicon. Can be either relative URL from site root or absolute URL starting with 'http' |
| `favicon_auto` | *string* | | Automatic generation of multiple PNG favicons URL. Generates proper favicon files sizes for multiple devices. Must be an absolute URL starting with 'http'. Must be a public URL image file with a minimum 192x192 pixels |
| `author` | *string* | | Name of the author of the project, used into various places of the theme like footer. |
| `color` | *string* | | Theme color metadata used in some browsers like Chrome that applies this color on browser address bar. Color must be in HEX |
| `image` | *string* | LibDoc's playground image | Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http' |


Example of metadata's configuration part.

```yaml
metadata:
    # Sets the language of the project, default is en
    lang: en
    # PNG favicon URL. Can be either relative URL from site root or absolute URL starting with 'http'. Default is LibDoc's favicon
    favicon: /libdoc/img/favicon/android-chrome-512x512.png
    # Name of the author of the project, used into various places of the theme like footer. Default is empty
    author: Olivier 3lanc
    # Theme color metadata used in some browsers like Chrome that applies this color on browser address bar.
    # Color must be in HEX, default is LibDoc's color
    color: '#556e1e'
    # Open Graph image file. Can be either relative URL from site root, absolute URL starting with 'http'. Default is LibDoc's splash screen
    image: /libdoc/img/libdoc.png
```

Snippet of social networks metadata markup of LibDoc based on @joshbuchea [HEAD](https://github.com/joshbuchea/HEAD).

```html
<title>LibDoc</title>
<meta name="description" content="A Jekyll documentation theme with built-in search and playground">
<meta itemprop="name" content="LibDoc">
<meta name="description" itemprop="description" content="A Jekyll documentation theme with built-in search and playground">
<meta name="application-name" content="LibDoc">
<meta name="author" content="Olivier 3lanc">

<!-- Example with favicon -->
<link rel="icon" type="image/png" href="https://olivier3lanc.github.io/Jekyll-LibDoc/_site/user-context/img/android-chrome-512x512.png">

<!-- Example with favicon_auto -->
<link rel="icon" type="image/png" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=32&h=32&fit=cover&cbg=transparent&output=png">
<link rel="icon" type="image/png" href="https://i.ibb.co/cNmfL3D/android-chrome-512x512.png">
<link rel="apple-touch-icon" sizes="57x57" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=57&h=57&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="60x60" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=60&h=60&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="72x72" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=72&h=72&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="76x76" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=76&h=76&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="114x114" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=114&h=114&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="120x120" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=120&h=120&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="144x144" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=144&h=144&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="152x152" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=152&h=152&fit=cover&cbg=transparent&output=png">
<link rel="apple-touch-icon" sizes="180x180" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=180&h=180&fit=cover&cbg=transparent&output=png">
<link rel="icon" type="image/png" sizes="192x192"  href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=192&h=192&fit=cover&cbg=transparent&output=png">
<link rel="icon" type="image/png" sizes="32x32" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=32&h=32&fit=cover&cbg=transparent&output=png">
<link rel="icon" type="image/png" sizes="96x96" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=96&h=96&fit=cover&cbg=transparent&output=png">
<link rel="icon" type="image/png" sizes="16x16" href="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=16&h=16&fit=cover&cbg=transparent&output=png">
<meta name="msapplication-TileImage" content="https://images.weserv.nl/?url=https://i.ibb.co/cNmfL3D/android-chrome-512x512.png&w=144&h=144&fit=cover&cbg=transparent&output=png">

<meta name="msapplication-TileColor" content="#556e1e">
<meta name="theme-color" content="#556e1e">

<!-- Microsoft -->
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="msapplication-starturl" content="https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc/playground.html">
<meta name="msapplication-tooltip" content="LibDoc">
<meta name="msapplication-TileColor" content="#556e1e">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc/playground.html">
<meta property="og:title" content="LibDoc">
<meta property="og:description" content="A Jekyll documentation theme with built-in search and playground">
<meta property="og:image" content="https://olivier3lanc.github.io/Jekyll-LibDoc/_site/user-context/img/meta-image-playground.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="LibDoc">
<meta name="twitter:description" content="A Jekyll documentation theme with built-in search and playground">
<meta name="twitter:url" content="https://olivier3lanc.github.io/Jekyll-LibDoc/libdoc/playground.html">
<meta name="twitter:image" content="https://olivier3lanc.github.io/Jekyll-LibDoc/_site/user-context/img/meta-image-playground.jpg">

<!-- iOS -->
<meta name="apple-mobile-web-app-title" content="LibDoc">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="#556e1e">

<!-- Android -->
<meta name="theme-color" content="#556e1e">
<meta name="color-scheme" content="light">
<meta name="mobile-web-app-capable" content="yes">
``` 