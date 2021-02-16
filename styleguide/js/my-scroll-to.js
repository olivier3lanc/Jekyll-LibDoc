// Scroll accurately to page anchor
var myScrollTo = {
    defaults: {
        duration: 300, // Scroll duration
        offsets: ['nav-primary', 'nav-secondary'], // Remove these heights from scroll amount
        ignore: [''] // Selectors to ignore: Elements with specified selectors are ignored
    },
    // Total offsets
    // @data - array - List of elements ids
    // @return - number - Sum of all the elements ids heights
    offsetsAmount: function(data) {
        if (data !== undefined) {
            var total = 0;
            data.forEach(function(id) {
                var jQ_target = jQuery('#'+id);
                if (jQ_target.length === 1) {
                    total += jQ_target.outerHeight();
                }
            });
            return total;
        }
    },
    start: function() {
        var baseSelector = '[my-scroll-to], a[href^="#"]:not([href="#"])';
        // COncatenate selector string with its selectors to ignore
        myScrollTo.defaults.ignore.forEach(function(selector) {
            baseSelector += ':not('+selector+')';
        });
        jQuery(baseSelector).on('click', function(e) {
            e.preventDefault();
            var href = jQuery(this).attr('href');
            if (href === undefined) {
                href = jQuery(this).attr('my-scroll-to');
            }
            if (href === undefined) {
                return;
            }
            var temp = href.split('#');
            var id = temp[1];
            // console.log(id);
            var amountFromTop = 0;
            if (id !== undefined && id != '') {
                // Create jQuery target element
                jQ_target = jQuery('#'+id).eq(0);
                // If target element exists and is unique
                if (jQ_target.length === 1) {
                    amountFromTop = jQ_target.offset().top;

                    // Optional offsets
                    // Type of offsets, can be integer or array list of ids
                    var offsetsType = typeof myScrollTo.defaults.offsets;
                    // Custom offsets
                    var customOffsets = jQuery(this).attr('data-offsets');
                    // If custom offsets on this element
                    if (customOffsets !== undefined) {
                        // If it is a list of ids
                        if (isNaN(parseInt(customOffsets))) {
                            customOffsets = customOffsets.replace(/ /g, '');
                            customOffsets = customOffsets.split(',');
                            amountFromTop = amountFromTop - myScrollTo.offsetsAmount(customOffsets);
                        } 
                        // if it is an integer
                        else {
                            amountFromTop = amountFromTop - parseInt(customOffsets);
                        }
                    } else {
                        // if it is an integer
                        if (offsetsType == 'number') {
                            amountFromTop = amountFromTop - myScrollTo.defaults.offsets;
                        }
                        // If it is a list of ids
                        else {
                            amountFromTop = amountFromTop - myScrollTo.offsetsAmount(myScrollTo.defaults.offsets);
                        }
                    }
                    
                    // Optional duration
                    var duration = myScrollTo.defaults.duration;
                    if (jQuery(this).attr('data-duration') !== undefined) {
                        var rawDuration = jQuery(this).attr('data-duration');
                        rawDuration = parseInt(rawDuration);
                        if (typeof rawDuration == 'number' && !isNaN(rawDuration)) {
                            duration = rawDuration;
                        }
                    }
                    // Scroll to the id
                    if (duration > 0) {
                        jQuery('html, body').animate({
                                scrollTop: amountFromTop
                            },
                            duration
                        );
                    } else {
                        jQuery(window).scrollTop(amountFromTop);
                    }
                }
            }
        });
    }
}
myScrollTo.start();