---
title: Scroll Swap
description: Swaps CSS classes when window scroll threshold is exceeded
layout: styleguide/page
order: 150
category: Javascript
---
## Installation 

jQuery must always be included before other files

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/any-library.js"></script>
```

Scroll swap requires the following dependencies:

* [jQuery]({{ site.url }}{{ site.baseurl }}/js/jquery/jquery-3.4.1.min.js){: download="" title="Download file"}
* [my-scroll-swap.js]({{ site.url }}{{ site.baseurl }}/js/my-scroll-swap.js){: download="" title="Download file"}

## Overview

This script swaps CSS classes when window scroll threshold is exceeded, then rolls back original classes when window scroll is below default or custom threshold.

```html
<p my-scroll-swap="u-c-support-success"><strong>Scroll down!</strong>,<br>This text changes its color when amount of scroll exceeds 100 pixels.<br><code>u-c-support-success</code> replaces current classes.</p>
<p my-scroll-swap>This paragraph gets orange when scroll exceeds default threshold because the default swap class is <code>u-c-support-warning</code>.</p>
<p my-scroll-swap="u-none">This paragraph disappears when scroll exceeds default threshold.</p>
<style>
    /* DEMO ONLY */
    body {height:200vh;}
    p:first-child {margin-top:160px; font-size:16px;}
    .my-scroll-swaped {color:orange;} /* Default swap class */
</style>
```
{:.playground .playground-responsive #playground_scroll_swap_overview }

## Settings

`my-scroll.js` contains `myScrollSwap.defaults` object with all default settings:

| Global parameter | Data attribute | Type | Description |
|-|-|-|-|
| `threshold` | `my-scroll-threshold` |  _number_ | Default threshold in pixels |
| `swap` | `my-scroll-swap` or `my-scroll-classes` |  _string_ | Default scroll swap classes if no custom swap classes are defined |
| `onSwap` | `mod-onswap` |  _function_ | Optional callback function to invoke when a swap is triggered |

```javascript
// Example of myScrollSwap.defaults
myScrollSwap {
    defaults: {
        threshold: 100, // Default threshold in pixels
        swap: 'my-scroll-swaped' // Default scroll swap classes if no custom swap classes are defined
        onSwap: anyCustomFunction() // Function triggered when a swap is executed
    }
}

```
