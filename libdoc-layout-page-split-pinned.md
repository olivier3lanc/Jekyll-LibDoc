---
title: Page split layout pinned
description: Pinned feature for page split layout
layout: libdoc/page-split

#LibDoc specific below
category: Layouts
order: 200
#assets:
#    path_from_root: /libdoc
#    extensions_enabled: # File extension to display
#        - js
#        - css
---
* 
{:toc}

```yaml
layout: libdoc/page-split
```

**This page is the smame as [libdoc layout page split](libdoc-layout-page-split.html) but with the feature playground pinned. Just add `.playground-pin` class name on the playground you wish to be stuck at the top of the page.**

Intended to be used to feature a playground, the page split layout extends the syntax highlighter by running the first highlighted code found onto the right sided panel.

```html
    <h1>My playground pinned</h1>
    <p>This playground is featured and its code is pinned at the top of the page.</p>
    <button>button</button>
```
{:.playground .playground-pin}

## Second playground example

```html
    <h1>2nd playground</h1>
    <p>Stet no amet elitr dolores eirmod sadipscing dolores ut lorem.</p>
    <button>button</button>
```
{:.playground}
