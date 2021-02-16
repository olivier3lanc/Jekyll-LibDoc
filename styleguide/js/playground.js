// Playground - Auto iframe
let playground = {
    /**
    * DECODE HTML
    * Decodes HTML entities
    * @html - string - HTML entities to decode
    */  
    decodeHtml: function(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    },
    /**
    * IS IN VIEWPORT
    * Tells whether or not an DOM element is into the viewport 
    * @el - DOM element to parse
    */  
    isInViewport: function(el) {
        if (typeof el === 'object') {
            var jQ_el = jQuery(el),
                screenHeight = jQuery(window).height(),
                scrollTop = jQuery(window).scrollTop(),
                viewportTop = scrollTop,
                viewportBottom = scrollTop + screenHeight;
            // Top position of the element
            var positionTop = jQ_el.offset().top;
            // Bottom position of the element
            var positionBottom = positionTop + jQ_el.height();
            // If "into the viewport"
            if ((positionTop >= viewportTop && positionTop <= viewportBottom) || (positionBottom >= viewportTop && positionBottom <= viewportBottom)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    // UPDATE
    // Method
    // @id - string - optional - id of the playground to process
    update: function(id) {
        // Default playground selector
        var mainSelector = '.playground';
        // If id argument is a string
        if (typeof(id) == 'string') {
            // If the string is a valid playground id
            if (jQuery(mainSelector+'#'+id).length == 1) {
                // Remove the instance
                jQuery('#'+id+'-instance').remove();
                // Set this id as new selector
                mainSelector = '#'+id;
            } 
            // Otherwise stop
            else {
                return;
            }
        } 
        // Otherwise remove any playgraound instance
        else {
            jQuery(mainSelector+'-instance').remove();
        }
        // Iterate each playgournd from selector
        jQuery(mainSelector).each(function(playgroundIndex) {
            var jQ_this = jQuery(this),
                responsiveCheckboxName = jQuery(this).attr('data-responsive-checkbox-name'), // Responsive checkbox name
                responsiveComponentSelector = jQuery(this).attr('data-responsive-component-selector'), // Selector string of the component
                responsivePrefix = styleGuide.getCssVariable('--briks-responsive-prefix'), // Briks responsive prefix
                responsiveModifiers = jQuery(this).attr('data-responsive-modifier-class-names'), // Comma separated modifiers names
                responsiveModifierOperator = jQuery(this).attr('data-responsive-modifier-operator'), // Selector operator between component and modifier
                playgroundId = jQ_this.attr('id'); // Playground id
            if (playgroundId === undefined) {
                // If playground id is not set, apply one based on index
                playgroundId = 'playground-'+playgroundIndex;
                jQ_this.attr('id', playgroundId);
            }
            // Set empty string if selector operator is undefined
            if (responsiveModifierOperator === undefined) {
                responsiveModifierOperator = '';
            }
            // Optional: If all responsive data are defined
            if (responsiveCheckboxName !== undefined && responsiveComponentSelector !== undefined && responsiveModifiers !== undefined && responsivePrefix !== undefined) {
                // Make an array of modifiers names list
                var listOfModifiersSelectors = responsiveModifiers.split(',');
                // Init class names and attributes shorthands to insert into displayed code
                var classNames = '',
                    screens = '',
                    jQ_checked = jQuery('input[type="checkbox"][name="'+responsiveCheckboxName+'"]:checked'); // Checked screen sizes
                    console.log(responsiveCheckboxName);
                // If source code from playground is not already copied
                if (jQuery('#'+playgroundId+'-source').length === 0) {
                    // Copy source code from playground to a specific element
                    // This is to always start from the source code
                    jQuery('body').append(
                        '<div id="'+playgroundId+'-source" style="display:none" data-class="'+jQ_this.attr('class')+'">'+
                            jQ_this.html()+
                        '</div>'
                    );
                } 
                // If source code already copied, copy the source code into the playground
                else {
                    jQ_this.html(jQuery('#'+playgroundId+'-source').html());
                }
                // If at least one screen size is checked
                if (jQ_checked.length > 0) {
                    // For each pattern, iterate to build responsive CSS class names and shorthand attributes
                    listOfModifiersSelectors.forEach(function(pattern) {
                        // With or without point class names
                        const   patternWithoutPoint = pattern.replace('.',''),
                                responsiveSelectorWithoutPoint = responsiveComponentSelector.replace('.','');
                        // For each checked screen size
                        jQ_checked.each(function(index) {
                            // Get the name of the screen size and use it to build CSS class names and shorthand attributes 
                            const screen = jQuery(this).val();
                            classNames += ' '+patternWithoutPoint+responsivePrefix+screen;
                            screens += screen;
                            // If last checked screen size
                            if (index < jQ_checked.length - 1) {
                                screens += ', ';
                            }
                        });
                        // If shorthand display checkbox is checked
                        // Insert responsive shorthand
                        if (jQuery('#'+responsiveCheckboxName+'-shorthand').prop('checked')) {
                            jQ_this
                                .find(responsiveComponentSelector+responsiveModifierOperator+pattern)
                                .removeClass(patternWithoutPoint)
                                .attr(patternWithoutPoint, screens);
                        }
                        // Otherwise, insert list of responsive CSS class names
                        else {
                            // Modifier and component's root are on the same level
                            if (responsiveModifierOperator == '') {
                                jQ_this
                                    .find(responsiveComponentSelector+responsiveModifierOperator+pattern)
                                    .attr('class', responsiveSelectorWithoutPoint+classNames);
                            }
                            // Otherwise, modifier is set on a children of the component's root
                            else {
                                // Remove first white space
                                classNames = classNames.replace(' ', '');
                                jQ_this
                                    .find(responsiveComponentSelector+responsiveModifierOperator+pattern)
                                    .attr('class', classNames);
                            }
                        }
                        // Clean empty class attributes
                        jQ_this.find('*').each(function() {
                            const raw = jQuery(this).attr('class');
                            if (raw !== undefined && raw.trim() == '') {
                                jQuery(this).removeAttr('class');
                            }
                        });
                        // Reset for the next iteration
                        classNames = '';
                        screens = '';
                    });
                }
            }
            // The HTML content of the current playground
            // var content = jQ_this.html();
            var content = jQ_this.find('code').html();
            // console.log(jQ_this.find('code').html());
            content = playground.decodeHtml(content);
            // Expand / Minimize control
            var expandClasses = '';
            if (jQuery(this).attr('data-expand') !== undefined) {
                expandClasses = jQuery(this).attr('data-expand');
            }
            // console.log(jQ_this[0].innerText);
            // Init options string
            // var optionsStr = '';
            // Option 'data-resizeable': Enable resizeable playground
            // var optionResizeable = jQuery(this).attr('data-resizeable');
            // Default playground width in %
            // var resizerValue = '100';
            // If option resizeable is set
            // if (optionResizeable !== undefined) {
            //     // If resizer input range was already set on a custom value
            //     if (jQ_this.attr('data-resizer') !== undefined) {
            //         resizerValue = jQ_this.attr('data-resizer');
            //     }
                // HTML Input range of the playground resizer
                // optionsStr += ''+
                // '<div class="c-form u-bl-dashed-neutral u-br-dashed-neutral u-bc-primary-edge">'+
                //     '<input type="range" class="playground-resizer" title="Playground resizer" id="'+playgroundId+'-iframe-resizer" value="'+resizerValue+'" min="1" max="100" data-target="'+playgroundId+'-wrapper" data-playground-id="'+playgroundId+'">'+
                //     '<label for="'+playgroundId+'-iframe-resizer" class="sg-fs-xxs">Resizer</label>'+
                // '</div>';
            // }
            // Default playground width in %
            var resizerValue = '100';
            if (jQ_this.attr('data-resizer') !== undefined) {
                resizerValue = jQ_this.attr('data-resizer');
                jQuery('[data-playground-resizer-value="'+playgroundId+'"]').val(resizerValue);
            }
            // Option 'data-force-pattern': Apply a light damier repeated background into the playground
            var optionForcePattern = jQuery(this).attr('data-force-pattern');
            if (optionForcePattern === undefined) {
                optionForcePattern = false;
            } else {
                optionForcePattern = true;
            }
            // Option 'data-force-hard-pattern': Apply a heavy weight damier repeated background into the playground
            var optionForceHardPattern = jQuery(this).attr('data-force-hard-pattern');
            if (optionForceHardPattern === undefined) {
                optionForceHardPattern = false;
            } else {
                optionForceHardPattern = true;
            }
            // Option 'data-centered': Center the content of the playground horizontally and vertically
            var optionCentered = jQuery(this).attr('data-centered');
            if (optionCentered === undefined) {
                optionCentered = false;
            } else {
                optionCentered = true;
            }
            // Option 'data-centered': Apply a padding into the playground
            var optionPadding = jQuery(this).attr('data-padding');
            if (optionPadding === undefined) {
                optionPadding = false;
            } else {
                optionPadding = true;
            }
            // Set up the final opbject that will be base64 and stringified
            var sentObject = {
                options: {
                    padding: optionPadding,
                    forcePattern: optionForcePattern,
                    forceHardPattern: optionForceHardPattern,
                    centered: optionCentered
                },
                content: content
            }
            // Stringify the object to send
            var stringifiedSentObject = JSON.stringify(sentObject);
            // Set to base64
            var sentObject64 = btoa(stringifiedSentObject);
            // Build the iframe HTML string
            var iframeStr = '<iframe id="'+playgroundId+'-iframe" data-src="'+site.url+site.baseurl+'/styleguide/playground.html#'+sentObject64+'" class="playground-iframe not-rendered u-transition-none u-h-100 u-minh-main u-b-none u-w-100"></iframe>';
            // Sets the href attribute on the open new tab button link
            // jQuery('[data-playground-new-tab="'+playgroundId+'"]').attr('href', site.url+site.baseurl+'/styleguide/playground.html#'+sentObject64);
            var iframeUrl = site.url+site.baseurl+'/styleguide/playground.html#'+sentObject64;
            // Trim to remove unwanted white spaces
            var trimmed = content.replace(/ /g,'');
            var buf = [];
            for (var i = content.length-1; i >= 0; i--) {
                buf.unshift(['&#', content[i].charCodeAt(), ';'].join(''));
            }
            trimmed = buf.join('');
            // Insert HTML after hidden playground
            jQuery(this).after(
                '<code class="u-p-xxs u-fs-xxs u-bc-primary-edge u-lh-base u-bl-thin-dashed-alt u-bt-thin-dashed-alt u-br-thin-dashed-alt c-text m-nowrap u-c-primary-alt">'+
                    '<span class="i-code u-va-middle"></span> playground'+
                '</code>'+
                '<ul class="c-grid m-space-between u-bl-thin-dashed-alt u-bt-thin-dashed-alt u-br-thin-dashed-alt" data-playground-commands="'+playgroundId+'">'+
                    '<li class="m-grow u-p-sm u-bb-thin-dashed-alt"></li>'+
                    '<li class="c-grid">'+
                        '<a href="'+iframeUrl+'" class="c-btn u-p-sm u-bl-thin-dashed-alt u-bb-thin-dashed-alt" title="Open in a new tab" target="_blank" data-playground-new-tab="'+playgroundId+'">'+
                            '<span class="i-external-link"></span>'+
                        '</a>'+
                        '<button class="c-btn u-p-sm u-bl-thin-dashed-alt u-bb-thin-dashed-alt maximize" title="Maximize playground" onclick="playground.expand(\''+playgroundId+'\')">'+
                            '<span class="i-maximize-2"></span>'+
                        '</button>'+
                        '<button class="c-btn u-p-sm u-bl-thin-dashed-alt u-bb-thin-dashed-alt u-none minimize" title="Minimize playground" onclick="playground.expand(\''+playgroundId+'\')">'+
                            '<span class="i-minimize-2"></span>'+
                        '</button>'+
                    '</li>'+
                '</ul>'+
                '<div class="playground-instance '+expandClasses+'" id="'+playgroundId+'-instance">'+
                    '<div class="u-relative u-transition-none u-bl-thin-dashed-alt u-br-thin-dashed-alt u-o-auto u-resize-both u-mw-100" id="'+playgroundId+'-wrapper" style="width: '+resizerValue+'%">'+
                        iframeStr+
                        '<div class="playground-preview c-position m-absolute m-top-left u-w-100 u-h-100 u-bg-play u-cur-pointer" onclick="playground.loadIframe(\''+playgroundId+'-iframe\')"></div>'+
                    '</div>'+
                    '<pre id="'+playgroundId+'-iframe-code" class="u-m-none">'+
                        '<code class="language-html">'+
                            trimmed+
                        '</code>'+
                    '</pre>'+
                '</div>'
            );
        });
        // Code formatter
        if (typeof Prism !== undefined) {
            Prism.highlightAll();
        }
        // Resizer input range listener
        jQuery('.playground-resizer').on('input', function() {
            var value = jQuery(this).val();
            var id = jQuery(this).attr('data-target');
            var playgroundId = jQuery(this).attr('data-playground-id');
            // Sets the playground width
            jQuery('#'+id).css('width', value+'%');
            // Record the resized value on the playground data attribute data-resizer
            jQuery('#'+playgroundId).attr('data-resizer', value);
        });
        // Manage playground top position to match the bottom of the commands
        playground.adjustPlaygroundInstanceMaximized();
        jQuery(window).on('resize', function() {
            playground.adjustPlaygroundInstanceMaximized();
        });
    },
    /**
    * EXPAND
    * Expands the specified playground
    * @playgroundId - string - ID of the playground
    */
    expand: function(playgroundId) {
        if (typeof playgroundId === 'string') {
            let jQ_playground = jQuery('#'+playgroundId),
                jQ_instance = jQuery('#'+playgroundId+'-instance'),
                jQ_commands = jQuery('[data-playground-commands="'+playgroundId+'"]'),
                instanceClasses = 'c-position m-fixed m-left-0 u-w-100 u-o-auto u-z-11 u-bc-primary-max u-pb-md',
                commandsClasses = 'c-position m-fixed m-top-left u-w-100 u-z-11 u-bc-primary-max';
            if (jQ_playground.length === 1) {
                jQ_commands.find('.maximize, .minimize').addClass('u-none');
                // Playground already expanded
                if (jQ_instance.hasClass('expanded')) {
                    jQ_instance.removeClass(instanceClasses+' expanded');
                    jQ_commands.removeClass(commandsClasses).find('.maximize').removeClass('u-none');
                    jQ_playground.removeAttr('data-expand');
                }
                // If not already expanded, apply specified classes above
                else {
                    jQ_instance.addClass(instanceClasses+' expanded');
                    jQ_commands.addClass(commandsClasses).find('.minimize').removeClass('u-none');
                    jQ_playground.attr('data-expand', instanceClasses+' expanded');
                }
                playground.adjustPlaygroundInstanceMaximized();
            }
        }
    },
    // Adjust CSS top of expanded playground to fit playground commands at bottom
    adjustPlaygroundInstanceMaximized: function() {
        jQuery('.playground-instance').each(function() {
            if (jQuery(this).hasClass('expanded')) {
                // Get commands height
                let playgroundId = jQuery(this).attr('id');
                playgroundId = playgroundId.replace('-instance', '');
                const commandsHeight = jQuery('[data-playground-commands="'+playgroundId+'"]').outerHeight();
                // Set the playground height window height minus commands height
                const playgroundInstanceHeight = jQuery(window).height() - commandsHeight;
                jQuery(this).css({
                    top: commandsHeight+'px',
                    height: playgroundInstanceHeight+'px'
                });
            } else {
                jQuery(this).css({
                    top: 'inherit',
                    height: 'inherit'
                });
            }
        });
    },
    // true if lazy loading is started
    lazyLoadingInit: false,
    /**
    * LOAD IFRAME
    * Loads the specified playground iframe
    * @id - string - ID of the playground iframe to load
    */
    loadIframe: function(id) {
        if (typeof id === 'string') {
            let jQ_el = jQuery('#'+id);
            if (jQ_el.length === 1) {
                const iframeUrl = jQ_el.attr('data-src');
                let jQ_preview = jQ_el.closest('.playground-instance').find('.playground-preview');
                jQ_preview
                    .removeClass('u-bg-play')
                    .addClass('u-bg-loading');
                jQ_el
                    .on('load', function() {
                        jQ_preview.remove();
                    })
                    .attr('src', iframeUrl)
                    .removeClass('not-rendered');
            }
        }
    },
    /**
    * LAZY LOADING
    * Loads playground iframes into the viewport
    */  
    lazyLoading: function() {
        let pastScrollAmount = 0;
        // Run only is not alreadu started
        if (!playground.lazyLoadingInit) {
            let loadViewableIframeUrl = function() {
                const   currentScrollAmount = jQuery(window).scrollTop(),
                        sensitivity = Math.abs(pastScrollAmount - currentScrollAmount);
                pastScrollAmount = currentScrollAmount;
                // Load only if scroll speed if below a threshold to avoid bottleneck
                if (sensitivity < 100) {
                    jQuery('.playground-iframe.not-rendered').each(function() {
                        if (playground.isInViewport(jQuery(this)[0])) {
                            const id = jQuery(this).attr('id');
                            playground.loadIframe(id);
                        }
                    });
                }
            };
            loadViewableIframeUrl();
            jQuery(window).on('scroll', function() {
                loadViewableIframeUrl();
            });
            playground.lazyLoadingInit = true;
        } else {
            console.log('Playground lazy loading is already running');
            return false;
        }
    }
}
playground.update();
playground.lazyLoading();

