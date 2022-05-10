---
---
// Include Lightbox 
import PhotoSwipeLightbox from '{{ site.baseurl }}/demo-only/js/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#gallery',

    // Elements within gallery (slides)
    children: 'a',

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('{{ site.baseurl }}/demo-only/js/photoswipe.esm.js')
});
lightbox.init();