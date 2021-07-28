---
title: Front matter
description: Additional parameters available.
layout: styleguide/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---
* 
{:toc}

LibDoc comes with the following optional parameters that can be set into the front matter

## Page 

Dedicated LibDoc settings for the front matter on a [page layout](libdoc-layouts.html)

* `unlisted` *boolean* removes page link from the sidebar
* `category` *string* adds a separator above the page link with the name of the category
* `order` *integer* specifies the sidebar pages links order

```yaml
layout: styleguide/page
# Example of LibDoc secific optional settings
category: My category name
order: 100
unlisted: false
```

## Assets

Dedicated LibDoc settings for the front matter on a [assets layout](libdoc-layouts.html)