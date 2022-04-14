---
title: Page codemirror layout
description: Live edit the playground code and view result on the right.
layout: libdoc/page-codemirror

#LibDoc specific below
category: Layouts
order: 200
#assets:
#    path_from_root: /libdoc
#    extensions_enabled: # File extension to display
#        - js
#        - css
---

<div class="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started">
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg" 
        data-pswp-width="1669" 
        data-pswp-height="2500" 
        target="_blank">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg" alt="" />
    </a>
    <!-- cropped thumbnail: -->
    <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg" 
          data-pswp-width="1875" 
          data-pswp-height="2500" 
          data-cropped="true" 
          target="_blank">
          <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg" alt="" />
          Cropped
    </a>
    <!-- data-pswp-src with custom URL in href -->
    <a  href="https://unsplash.com" 
        data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
        data-pswp-width="2500" 
        data-pswp-height="1666" 
        target="_blank">
        <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg" alt="" />
    </a>
    <!-- Without thumbnail: -->
    <a  href="http://example.com" 
        data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg"
        data-pswp-width="2500" 
        data-pswp-height="1668" 
        target="_blank">
        No thumbnail
    </a>
    <!-- wrapped with any element: -->
    <div>
        <a  href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg"
            data-pswp-width="2500" 
            data-pswp-height="1667" 
            target="_blank">
            <img src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg" alt="" />
        </a>
    </div>
</div>