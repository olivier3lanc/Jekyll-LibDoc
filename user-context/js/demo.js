---
---
// Include Lightbox 
import PhotoSwipeLightbox from '{{ site.baseurl }}/user-context/js/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#gallery',

    // Elements within gallery (slides)
    children: 'a',

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('{{ site.baseurl }}/user-context/js/photoswipe.esm.js')
});
lightbox.init();