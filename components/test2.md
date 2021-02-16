---
title: Scroll Swap
description: Swaps CSS classes when window scroll threshold is exceeded
layout: styleguide/page
order: 150
category: Javascript
---
* 
{:toc .u-pl-sm}

## Installation 

jQuery must always be included before other files

```javascript
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

## Threshold
{: .notoc}

Threshold is the amount of scroll before swap. This feature allows to set a custom theshold on a specific element. Just add `my-scroll-threshold` custom attribute containing a integer in pixels.

### Amount of scroll

Simply triggers the swap when exceeding a scroll top amount.

{% include styleguide/playground-toolbar.html target_id='playground_scroll_swap_threshold' %}
<code class="playground" id="playground_scroll_swap_threshold" data-language="html" data-padding>
    <p my-scroll-swap="u-c-support-success" my-scroll-threshold="10"><strong>Scroll down!</strong>,<br>This text changes its color when amount of scroll exceeds 10 pixels.</p>
    <p my-scroll-swap="u-c-support-success" my-scroll-threshold="50"><strong>Scroll down!</strong>,<br>This text changes its color when amount of scroll exceeds 50 pixels.</p>
    &lt;style&gt;
        /* DEMO ONLY */
        body {height:200vh;}
        p:first-child {margin-top:60px;}
    &lt;/style&gt;
</code>

### DOM elements

Instead of amount of scroll top, it is possible to set DOM elements in the viewport as trigger for the swap.

{% include styleguide/playground-toolbar.html target_id='playground_scroll_swap_dom_elements' %}
<code class="playground" id="playground_scroll_swap_dom_elements" data-language="html" data-padding>
    <p my-scroll-swap="u-c-support-success" my-scroll-threshold="#foo, .bar"><strong>Scroll down!</strong>,<br>This text changes its color when <code>#foo</code> element or <code>.bar</code> are visible into the viewport.</p>
    <div id="foo"></div>
    <div class="bar">1</div>
    <div class="bar">2</div>
    <div class="bar">3</div>
    &lt;style&gt;
        /* DEMO ONLY */
        p {position:fixed; top:0; left:0; width:100%;}
        #foo, .bar {margin-top:150vh; margin-bottom:150vh; background-color:lightgray; height:200px;}
    &lt;/style&gt;
</code>

## Swap

This feature allows to set custom CSS classes on a specific element when threshold is exceeded. Just add string of class names into the `my-scroll-swap`or `my-scroll-classes` custom attribute.

{% include styleguide/playground-toolbar.html target_id='playground_scroll_swap_swap' %}
<code class="playground" id="playground_scroll_swap_swap" data-language="html" data-padding>
    <h1>Scroll down</h1>
    <p class="u-faded" my-scroll-swap="u-c-support-success u-fs-lg"><code>u-faded</code> is replaced by <code>u-c-support-success u-fs-lg</code> when scroll threshold is exceeded.</p>
    &lt;style&gt;
        /* DEMO ONLY */
        body {height:200vh;}
        p {margin-top:50vh;}
    &lt;/style&gt;
</code>

## Callbacks

When a swap is executed, `myScrollSwap.default.onSwap` method is invoked. You can override this method on any element, just add a Javascript function on `mod-onswap` custom attribute.

{% include styleguide/playground-toolbar.html target_id='playground_scroll_swap_callbacks' %}
<code class="playground" id="playground_scroll_swap_callbacks" data-language="html" data-padding>
    <p my-scroll-swap="u-c-support-success" mod-onswap="console.log('Swapped')">A custom javascript set in <code>mod-onswap</code> is executed when scroll threshold is exceeded.</p>
    &lt;style&gt;
        /* DEMO ONLY */
        body {height:200vh; }
        p { padding-top:100px; }
    &lt;/style&gt;
</code>

## Usage examples

{% include styleguide/playground-toolbar.html target_id='playground_scroll_swap_examples' %}
<code class="playground" id="playground_scroll_swap_examples" data-language="html" data-padding>
    <h1 my-scroll-swap="u-faded" my-scroll-threshold="1">I fade soon</h1>
    <p my-scroll-swap="u-faded" my-scroll-threshold="60">Scroll down to see the button appear. This paragraph fades when scroll exceeds 60 pixels.</p>
    <nav class="u-none" my-scroll-swap="u-fixed u-top-0 u-left-0 u-w-100 u-p-sm u-c-neutral-light-max u-bc-neutral-dark-4" my-scroll-threshold="10">Navbar</nav>
    <a href="#" class="u-none" my-scroll-swap="my-btn mod-sm u-fixed u-bottom-sm u-right-sm">Go to top</a>
    &lt;style&gt;
        /* DEMO ONLY */
        body {height:200vh;}
    &lt;/style&gt;
</code>


