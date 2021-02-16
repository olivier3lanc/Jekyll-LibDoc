jQuery(document).ready(function() {
    jQuery('.preview').on('click', function(e) {
        e.preventDefault();
        let url = jQuery(this).attr('href');
        jQuery('body')
            .append(
                '<figure class="c-grid m-nowrap m-column m-middle m-center u-o-auto u-m-none u-fixed u-top-0 u-left-0 u-w-100 u-h-100 u-cur-pointer u-z-10 u-bg-damier-white-soft u-p-lg" onclick="jQuery(this).remove();">'+
                    '<div style="background-image:url('+url+')" class="m-w-10 u-h-80vh u-contain"></div>'+
                    '<figcaption class="c-text m-ellipsis u-o-auto u-c-primary-alt u-ff-monospace u-fs-xs u-pt-md">'+url+'</figcaption>'+
                    '</div'+
                '</figure>'
            );
    });
    jQuery('#asset-search').on('change', function() {
        let textToSearch = jQuery(this).val();
        jQuery('.asset:not(:contains("'+textToSearch+'"))').addClass('u-none');
        jQuery('.asset:contains("'+textToSearch+'")').removeClass('u-none');
    });
});