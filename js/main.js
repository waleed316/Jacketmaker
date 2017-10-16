(function ($, undefined) {
    'use strict';
    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
        easing: 'linear', //'for jquery animation',//
        speed: 400, //ms'
        auto: false,
        pauseOnHover: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        /* jshint ignore:start */
        onBeforeStart: function ($el) {},
        onSliderLoad: function ($el) {},
        onBeforeSlide: function ($el, scene) {},
        onAfterSlide: function ($el, scene) {},
        onBeforeNextSlide: function ($el, scene) {},
        onBeforePrevSlide: function ($el, scene) {}
        /* jshint ignore:end */
    };
    $.fn.lightSlider = function (options) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function () {
                $(this).lightSlider(options);
            });
            return this;
        }

        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;

        if (settings.mode === 'fade') {
            settings.vertical = false;
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === true) ? 'height' : 'width',
            gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement);
        var refresh = {};

        refresh.chbreakpoint = function () {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === false) {
                    item = settings.item;
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i];
                        }
                    }
                }
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                    for (var j in resposiveObj.settings) {
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                settingsTemp[j] = settings[j];
                            }
                            settings[j] = resposiveObj.settings[j];
                        }
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (var k in settingsTemp) {
                        if (settingsTemp.hasOwnProperty(k)) {
                            settings[k] = settingsTemp[k];
                        }
                    }
                }
                if (settings.autoWidth === false) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                        }
                    }
                }
            }
        };

        refresh.calSW = function () {
            if (settings.autoWidth === false) {
                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
            }
        };

        refresh.calWidth = function (cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin);
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                }
            }
            return w;
        };
        plugin = {
            doCss: function () {
                var support = function () {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            keyPress: function () {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function (e) {
                        if (!$(':focus').is('input, textarea')) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide();
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide();
                            }
                        }
                    });
                }
            },
            controls: function () {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide();
                        }
                    } else {
                        if (refresh.calWidth(false) < elSize) {
                            $slide.find('.lSAction').hide();
                        }
                    }
                    $slide.find('.lSAction a').on('click', function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide();
                        } else {
                            $el.goToNextSlide();
                        }
                        return false;
                    });
                }
            },
            initialStyle: function () {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimation = false;
                }
                if (settings.auto) {
                    settings.slideEndAnimation = false;
                }
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1;
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false;
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) {
                    $slide.parent().addClass('lSrtl');
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $el.outerWidth();
                }
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function () {
                        if (refresh.calWidth(true) > elSize) {
                            /**/
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) {
                                    break;
                                }
                            }
                            var tItem = settings.autoWidth === true ? tI : settings.item;

                            /**/
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove();
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove();
                                }
                            }
                            /**/
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++;
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            }
                            $children = $el.children();
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0);
                            }
                        }
                    };
                    refresh.clone();
                }
                refresh.sSW = function () {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) {
                        gutter = 'margin-left';
                    }
                    if (settings.autoWidth === false) {
                        $children.css(property, slideWidth + 'px');
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (on === false) {
                            scene = $el.find('.clone.left').length;
                        }
                    }
                };
                refresh.calL = function () {
                    $children = $el.children();
                    length = $children.length;
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss');
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue);
                    }
                    if (settings.vertical === false) {
                        this.setHeight($el, false);
                    }

                } else {
                    this.setHeight($el, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.fadeOut(0);
                        $children.eq(scene).fadeIn(0);
                    }
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active');
                } else {
                    $children.first().addClass('active');
                }
            },
            pager: function () {
                var $this = this;
                refresh.createPager = function () {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            // calculate scene * slide value
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                            } else {
                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                            }
                        }
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        }
                        if (settings.mode === 'slide') {
                            if ((v) >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1;
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager');
                                } else {
                                    $slide.parent().removeClass('noPager');
                                }
                                break;
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers); 
                    if (settings.gallery === true) {
                        if (settings.vertical === true) {
                            // set Gallery thumbnail width
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        }
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) {
                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function () {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                        } else {
                            scene = $pager.index(this);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            $this.slideThumb();
                        }
                        return false;
                    });
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery';
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager();
                }

                setTimeout(function () {
                    refresh.init();
                }, 0);
            },
            setHeight: function (ob, fade) {
                var obj = null,
                    $this = this;
                if (settings.loop) {
                    obj = ob.children('.lslide ').first();
                } else {
                    obj = ob.children().first();
                }
                var setCss = function () {
                    var tH = obj.outerHeight(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = ((tHT) * 100) / elSize;
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    });
                };
                setCss();
                if (obj.find('img').length) {
                    if ( obj.find('img')[0].complete) {
                        setCss();
                        if (!interval) {
                            $this.auto();
                        }   
                    }else{
                        obj.find('img').on('load', function () {
                            setTimeout(function () {
                                setCss();
                                if (!interval) {
                                    $this.auto();
                                }
                            }, 100);
                        });
                    }
                }else{
                    if (!interval) {
                        $this.auto();
                    }
                }
            },
            active: function (ob, t) {
                if (this.doCss() && settings.mode === 'fade') {
                    $slide.addClass('on');
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                    }
                    if (t === true) {
                        sc = scene;
                    } else {
                        sc = scene * settings.slideMove;
                    }
                    //t === true ? sc = scene : sc = scene * settings.slideMove;
                    var l, nl;
                    if (t === true) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl;
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                        if (t === true) {
                            sc = scene - $el.find('.clone.left').length;
                        } else {
                            sc = scene * settings.slideMove;
                        }
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl;
                            } else if (sc + 1 > l) {
                                sc = 0;
                            }
                        }
                    }

                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                    ob.eq(sc).addClass('active');
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                }
            },
            move: function (ob, v) {
                if (settings.rtl === true) {
                    v = -v;
                }
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        });
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                        });
                    }
                } else {
                    if (settings.vertical === true) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing);
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing);
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            fade: function () {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            slide: function () {
                var $this = this;
                refresh.calSlide = function () {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                $this.resetSlide($el.find('.clone.left').length);
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length);
                            }
                        }
                    }
                };
                refresh.calSlide();
            },
            resetSlide: function (s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function () {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function () {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled');
                    }, 50);
                }, settings.speed + 100);
            },
            slideValue: function () {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                return _sV;
            },
            slideThumb: function () {
                var position;
                switch (settings.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (elSize / 2) - (thumbWidth / 2);
                    break;
                case 'right':
                    position = elSize - thumbWidth;
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true) {
                    if (sc >= $pager.children().length) {
                        sc = 0;
                    } else if (sc < 0) {
                        sc = $pager.children().length;
                    }
                }
                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                if ((thumbSlide + elSize) > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0;
                }
                this.move($pager, thumbSlide);
            },
            auto: function () {
                if (settings.auto) {
                    clearInterval(interval);
                    interval = setInterval(function () {
                        $el.goToNextSlide();
                    }, settings.pause);
                }
            },
            pauseOnHover: function(){
                var $this = this;
                if (settings.auto && settings.pauseOnHover) {
                    $slide.on('mouseenter', function(){
                        $(this).addClass('ls-hover');
                        $el.pause();
                        settings.auto = true;
                    });
                    $slide.on('mouseleave',function(){
                        $(this).removeClass('ls-hover');
                        if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
                            $this.auto();
                        }
                    });
                }
            },
            touchMove: function (endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin;
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === false) {
                            swipeVal = 0;
                        } else {
                            swipeVal = swipeVal / 5;
                        }
                    }
                    this.move($el, swipeVal);
                }
            },

            touchEnd: function (distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                if (settings.mode === 'slide') {
                    var mxVal = false;
                    var _next = true;
                    slideValue = slideValue - distance;
                    if ((slideValue) > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) {
                            mxVal = true;
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0;
                    }
                    var gC = function (next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1;
                            }
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin)) {
                                if (num % 1 !== 0) {
                                    scene++;
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break;
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false;
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false;
                    }
                    $el.mode(_next);
                    this.slideThumb();
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide();
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide();
                    }
                }
            },



            enableDrag: function () {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.find('.lightSlider').addClass('lsGrab');
                    $slide.on('mousedown', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            isDraging = true;
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            $slide.scrollLeft += 1;
                            $slide.scrollLeft -= 1;
                            // *
                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                            clearInterval(interval);
                        }
                    });
                    $(window).on('mousemove', function (e) {
                        if (isDraging) {
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords);
                        }
                    });
                    $(window).on('mouseup', function (e) {
                        if (isDraging) {
                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                            isDraging = false;
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) {
                                $(window).on('click.ls', function (e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    } else {
                                        e.returnValue = false;
                                    }
                                    e.stopImmediatePropagation();
                                    e.stopPropagation();
                                    $(window).off('click.ls');
                                });
                            }

                            $this.touchEnd(distance);

                        }
                    });
                }
            },




            enableTouch: function () {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function (e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval);
                    });
                    $slide.on('touchmove', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if ((yMovement * 3) > xMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageY, startCoords.pageY);
                        } else {
                            if ((xMovement * 3) > yMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageX, startCoords.pageX);
                        }

                    });
                    $slide.on('touchend', function () {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var distance;
                        if (settings.vertical === true) {
                            distance = endCoords.pageY - startCoords.pageY;
                        } else {
                            distance = endCoords.pageX - startCoords.pageX;
                        }
                        $this.touchEnd(distance);
                    });
                }
            },
            build: function () {
                var $this = this;
                $this.initialStyle();
                if (this.doCss()) {

                    if (settings.enableTouch === true) {
                        $this.enableTouch();
                    }
                    if (settings.enableDrag === true) {
                        $this.enableDrag();
                    }
                }

                $(window).on('focus', function(){
                    $this.auto();
                });
                
                $(window).on('blur', function(){
                    clearInterval(interval);
                });

                $this.pager();
                $this.pauseOnHover();
                $this.controls();
                $this.keyPress();
            }
        };
        plugin.build();
        refresh.init = function () {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight;
                } else {
                    elSize = $children.outerHeight();
                }
                $slide.css('height', elSize + 'px');
            } else {
                elSize = $slide.outerWidth();
            }
            if (settings.loop === true && settings.mode === 'slide') {
                refresh.clone();
            }
            refresh.calL();
            if (settings.mode === 'slide') {
                $el.removeClass('lSSlide');
            }
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW();
            }
            setTimeout(function () {
                if (settings.mode === 'slide') {
                    $el.addClass('lSSlide');
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager();
            }
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (settings.adaptiveHeight === false) {
                if (settings.mode === 'slide') {
                    if (settings.vertical === false) {
                        plugin.setHeight($el, false);
                    }else{
                        plugin.auto();
                    }
                } else {
                    plugin.setHeight($el, true);
                }
            }
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            }
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            } else {
                if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            }
        };
        $el.goToPrevSlide = function () {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = (length - 1);
                        scene = parseInt(l / settings.slideMove);
                    }
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('leftEnd');
                    setTimeout(function () {
                        $el.removeClass('leftEnd');
                    }, 400);
                }
            }
        };
        $el.goToNextSlide = function () {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin;
            }
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('rightEnd');
                    setTimeout(function () {
                        $el.removeClass('rightEnd');
                    }, 400);
                }
            }
        };
        $el.mode = function (_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (on === false) {
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene);
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            } else {
                plugin.fade();
            }
            if (!$slide.hasClass('ls-hover')) {
                plugin.auto();
            }
            setTimeout(function () {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene);
                }
            }, settings.speed);
            on = true;
        };
        $el.play = function () {
            $el.goToNextSlide();
            settings.auto = true;
            plugin.auto();
        };
        $el.pause = function () {
            settings.auto = false;
            clearInterval(interval);
        };
        $el.refresh = function () {
            refresh.init();
        };
        $el.getCurrentSlideCount = function () {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl);
                } else if (scene >= (ln + cl)) {
                    sc = scene - ln - cl;
                } else {
                    sc = scene - cl;
                }
            }
            return sc + 1;
        }; 
        $el.getTotalSlideCount = function () {
            return $slide.find('.lslide').length;
        };
        $el.goToSlide = function (s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length - 1);
            } else {
                scene = s;
            }
            $el.mode(false);
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
        };
        $el.destroy = function () {
            if ($el.lightSlider) {
                $el.goToPrevSlide = function(){};
                $el.goToNextSlide = function(){};
                $el.mode = function(){};
                $el.play = function(){};
                $el.pause = function(){};
                $el.refresh = function(){};
                $el.getCurrentSlideCount = function(){};
                $el.getTotalSlideCount = function(){};
                $el.goToSlide = function(){}; 
                $el.lightSlider = null;
                refresh = {
                    init : function(){}
                };
                $el.parent().parent().find('.lSAction, .lSPager').remove();
                $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
                $el.children().removeAttr('style');
                $children.removeClass('lslide active');
                $el.find('.clone').remove();
                $children = null;
                interval = null;
                on = false;
                scene = 0;
            }

        };
        setTimeout(function () {
            settings.onSliderLoad.call(this, $el);
        }, 10);
        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                refresh.init();
            }, 200);
        });
        return this;
    };
}(jQuery));

/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
(function ($) {
    'use strict';
  
    $.fn.waterwheelCarousel = function (startingOptions) {
  
      // Adds support for intializing multiple carousels from the same selector group
      if (this.length > 1) {
        this.each(function() {
          $(this).waterwheelCarousel(startingOptions);
        });
        return this; // allow chaining
      }
  
      var carousel = this;
      var options = {};
      var data = {};
  
      function initializeCarouselData() {
        data = {
          itemsContainer:         $(carousel),
          totalItems:             $(carousel).find('img').length,
          containerWidth:         $(carousel).width(),
          containerHeight:        $(carousel).height(),
          currentCenterItem:      null,
          previousCenterItem:     null,
          items:                  [],
          calculations:           [],
          carouselRotationsLeft:  0,
          currentlyMoving:        false,
          itemsAnimating:         0,
          currentSpeed:           options.speed,
          intervalTimer:          null,
          currentDirection:       'forward',
          leftItemsCount:         0,
          rightItemsCount:        0,
          performingSetup:        true
        };
        data.itemsContainer.find('img').removeClass(options.activeClassName);
      }
  
      /**
       * This function will set the autoplay for the carousel to
       * automatically rotate it given the time in the options
       * Can clear the autoplay by passing in true
       */
      function autoPlay(stop) {
        // clear timer
        clearTimeout(data.autoPlayTimer);
        // as long as no stop command, and autoplay isn't zeroed...
        if (!stop && options.autoPlay !== 0) {
          // set timer...
          data.autoPlayTimer = setTimeout(function () {
            // to move the carousl in either direction...
            if (options.autoPlay > 0) {
              moveOnce('forward');
            } else {
              moveOnce('backward');
            }
          }, Math.abs(options.autoPlay));
        }
      }
  
      /**
       * This function will preload all the images in the carousel before
       * calling the passed in callback function. This is only used so we can
       * properly determine the width and height of the items. This is not needed
       * if a user instead manually specifies that information.
       */
      function preload(callback) {
        if (options.preloadImages === false) {
          callback();
          return;
        }
  
        var $imageElements = data.itemsContainer.find('img'), loadedImages = 0, totalImages = $imageElements.length;
  
        $imageElements.each(function () {
          $(this).bind('load', function () {
            // Add to number of images loaded and see if they are all done yet
            loadedImages += 1;
            if (loadedImages === totalImages) {
              // All done, perform callback
              callback();
              return;
            }
          });
          // May need to manually reset the src to get the load event to fire
          // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
          $(this).attr('src', $(this).attr('src'));
  
          // If browser has cached the images, it may not call trigger a load. Detect this and do it ourselves
          if (this.complete) {
            $(this).trigger('load');
          }
        });
      }
  
      /**
       * Makes a record of the original width and height of all the items in the carousel.
       * If we re-intialize the carousel, these values can be used to re-establish their
       * original dimensions.
       */
      function setOriginalItemDimensions() {
        data.itemsContainer.find('img').each(function () {
          if ($(this).data('original_width') == undefined || options.forcedImageWidth > 0) {
            $(this).data('original_width', $(this).width());
          }
          if ($(this).data('original_height') == undefined || options.forcedImageHeight > 0) {
            $(this).data('original_height', $(this).height());
          }
        });
      }
  
      /**
       * Users can pass in a specific width and height that should be applied to every image.
       * While this option can be used in conjunction with the image preloader, the intended
       * use case is for when the preloader is turned off and the images don't have defined
       * dimensions in CSS. The carousel needs dimensions one way or another to work properly.
       */
      function forceImageDimensionsIfEnabled() {
        if (options.forcedImageWidth && options.forcedImageHeight) {
          data.itemsContainer.find('img').each(function () {
            $(this).width(options.forcedImageWidth);
            $(this).height(options.forcedImageHeight);
          });
        }
      }
  
      /**
       * For each "visible" item slot (# of flanking items plus the middle),
       * we pre-calculate all of the properties that the item should possess while
       * occupying that slot. This saves us some time during the actual animation.
       */
      function preCalculatePositionProperties() {
        // The 0 index is the center item in the carousel
        var $firstItem = data.itemsContainer.find('img:first');
  
        data.calculations[0] = {
          distance: 0,
          offset:   0,
          opacity:  1
        }
  
        // Then, for each number of flanking items (plus one more, see below), we
        // perform the calcations based on our user options
        var horizonOffset = options.horizonOffset;
        var separation = options.separation;
        for (var i = 1; i <= options.flankingItems + 2; i++) {
          if (i > 1) {
            horizonOffset *= options.horizonOffsetMultiplier;
            separation *= options.separationMultiplier;
          }
          data.calculations[i] = {
            distance: data.calculations[i-1].distance + separation,
            offset:   data.calculations[i-1].offset + horizonOffset,
            opacity:  data.calculations[i-1].opacity * options.opacityMultiplier
          }
        }
        // We performed 1 extra set of calculations above so that the items that
        // are moving out of sight (based on # of flanking items) gracefully animate there
        // However, we need them to animate to hidden, so we set the opacity to 0 for
        // that last item
        if (options.edgeFadeEnabled) {
          data.calculations[options.flankingItems+1].opacity = 0;
        } else {
          data.calculations[options.flankingItems+1] = {
            distance: 0,
            offset: 0,
            opacity: 0
          }
        }
      }
  
      /**
       * Here we prep the carousel and its items, like setting default CSS
       * attributes. All items start in the middle position by default
       * and will "fan out" from there during the first animation
       */
      function setupCarousel() {
        // Fill in a data array with jQuery objects of all the images
        data.items = data.itemsContainer.find('img');
        for (var i = 0; i < data.totalItems; i++) {
          data.items[i] = $(data.items[i]);
        }
  
        // May need to set the horizon if it was set to auto
        if (options.horizon === 0) {
          if (options.orientation === 'horizontal') {
            options.horizon = data.containerHeight / 2;
          } else {
            options.horizon = data.containerWidth / 2;
          }
        }
  
        // Default all the items to the center position
        data.itemsContainer
          .css('position','relative')
          .find('img')
            .each(function () {
              // Figure out where the top and left positions for center should be
              var centerPosLeft, centerPosTop;
              if (options.orientation === 'horizontal') {
                centerPosLeft = (data.containerWidth / 2) - ($(this).data('original_width') / 2);
                centerPosTop = options.horizon - ($(this).data('original_height') / 2);
              } else {
                centerPosLeft = options.horizon - ($(this).data('original_width') / 2);
                centerPosTop = (data.containerHeight / 2) - ($(this).data('original_height') / 2);
              }
              $(this)
                // Apply positioning and layering to the images
                .css({
                  'left': centerPosLeft,
                  'top': centerPosTop,
                  'visibility': 'visible',
                  'position': 'absolute',
                  'z-index': 0,
                  'opacity': 0
                })
                // Give each image a data object so it remembers specific data about
                // it's original form
                .data({
                  top:             centerPosTop,
                  left:            centerPosLeft,
                  oldPosition:     0,
                  currentPosition: 0,
                  depth:           0,
                  opacity:         0
                })
                // The image has been setup... Now we can show it
                .show();
            });
      }
  
      /**
       * All the items to the left and right of the center item need to be
       * animated to their starting positions. This function will
       * figure out what items go where and will animate them there
       */
      function setupStarterRotation() {
        options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;
  
        data.rightItemsCount = Math.ceil((data.totalItems-1) / 2);
        data.leftItemsCount = Math.floor((data.totalItems-1) / 2);
  
        // We are in effect rotating the carousel, so we need to set that
        data.carouselRotationsLeft = 1;
  
        // Center item
        moveItem(data.items[options.startingItem-1], 0);
        data.items[options.startingItem-1].css('opacity', 1);
  
        // All the items to the right of center
        var itemIndex = options.startingItem - 1;
        for (var pos = 1; pos <= data.rightItemsCount; pos++) {
          (itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;
  
          data.items[itemIndex].css('opacity', 1);
          moveItem(data.items[itemIndex], pos);
        }
  
        // All items to left of center
        var itemIndex = options.startingItem - 1;
        for (var pos = -1; pos >= data.leftItemsCount*-1; pos--) {
          (itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;
  
          data.items[itemIndex].css('opacity', 1);
          moveItem(data.items[itemIndex], pos);
        }
      }
  
      /**
       * Given the item and position, this function will calculate the new data
       * for the item. One the calculations are done, it will store that data in
       * the items data object
       */
      function performCalculations($item, newPosition) {
        var newDistanceFromCenter = Math.abs(newPosition);
  
        // Distance to the center
        if (newDistanceFromCenter < options.flankingItems + 1) {
          var calculations = data.calculations[newDistanceFromCenter];
        } else {
          var calculations = data.calculations[options.flankingItems + 1];
        }
  
        var distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter)
        var newWidth = distanceFactor * $item.data('original_width');
        var newHeight = distanceFactor * $item.data('original_height');
        var widthDifference = Math.abs($item.width() - newWidth);
        var heightDifference = Math.abs($item.height() - newHeight);
  
        var newOffset = calculations.offset
        var newDistance = calculations.distance;
        if (newPosition < 0) {
          newDistance *= -1;
        }
  
        if (options.orientation == 'horizontal') {
          var center = data.containerWidth / 2;
          var newLeft = center + newDistance - (newWidth / 2);
          var newTop = options.horizon - newOffset - (newHeight / 2);
        } else {
          var center = data.containerHeight / 2;
          var newLeft = options.horizon - newOffset - (newWidth / 2);
          var newTop = center + newDistance - (newHeight / 2);
        }
  
        var newOpacity;
        if (newPosition === 0) {
          newOpacity = 1;
        } else {
          newOpacity = calculations.opacity;
        }
  
        // Depth will be reverse distance from center
        var newDepth = options.flankingItems + 2 - newDistanceFromCenter;
  
        $item.data('width',newWidth);
        $item.data('height',newHeight);
        $item.data('top',newTop);
        $item.data('left',newLeft);
        $item.data('oldPosition',$item.data('currentPosition'));
        $item.data('depth',newDepth);
        $item.data('opacity',newOpacity);
      }
  
      function moveItem($item, newPosition) {
        // Only want to physically move the item if it is within the boundaries
        // or in the first position just outside either boundary
        if (Math.abs(newPosition) <= options.flankingItems + 1) {
          performCalculations($item, newPosition);
  
          data.itemsAnimating++;
  
          $item
            .css('z-index',$item.data().depth)
            // Animate the items to their new position values
            .animate({
              left:    $item.data().left,
              width:   $item.data().width,
              height:  $item.data().height,
              top:     $item.data().top,
              opacity: $item.data().opacity
            }, data.currentSpeed, options.animationEasing, function () {
              // Animation for the item has completed, call method
              itemAnimationComplete($item, newPosition);
            });
  
        } else {
          $item.data('currentPosition', newPosition)
          // Move the item to the 'hidden' position if hasn't been moved yet
          // This is for the intitial setup
          if ($item.data('oldPosition') === 0) {
            $item.css({
              'left':    $item.data().left,
              'width':   $item.data().width,
              'height':  $item.data().height,
              'top':     $item.data().top,
              'opacity': $item.data().opacity,
              'z-index': $item.data().depth
            });
          }
        }
  
      }
  
      /**
       * This function is called once an item has finished animating to its
       * given position. Several different statements are executed here, such as
       * dealing with the animation queue
       */
      function itemAnimationComplete($item, newPosition) {
        data.itemsAnimating--;
  
        $item.data('currentPosition', newPosition);
  
        // Keep track of what items came and left the center position,
        // so we can fire callbacks when all the rotations are completed
        if (newPosition === 0) {
          data.currentCenterItem = $item;
        }
  
        // all items have finished their rotation, lets clean up
        if (data.itemsAnimating === 0) {
          data.carouselRotationsLeft -= 1;
          data.currentlyMoving = false;
  
          // If there are still rotations left in the queue, rotate the carousel again
          // we pass in zero because we don't want to add any additional rotations
          if (data.carouselRotationsLeft > 0) {
            rotateCarousel(0);
          // Otherwise there are no more rotations and...
          } else {
            // Reset the speed of the carousel to original
            data.currentSpeed = options.speed;
  
            data.currentCenterItem.addClass(options.activeClassName);
  
            if (data.performingSetup === false) {
              options.movedToCenter(data.currentCenterItem);
              options.movedFromCenter(data.previousCenterItem);
            }
  
            data.performingSetup = false;
            // reset & initate the autoPlay
            autoPlay();
          }
        }
      }
  
      /**
       * Function called to rotate the carousel the given number of rotations
       * in the given direciton. Will check to make sure the carousel should
       * be able to move, and then adjust speed and move items
       */
      function rotateCarousel(rotations) {
        // Check to see that a rotation is allowed
        if (data.currentlyMoving === false) {
  
          // Remove active class from the center item while we rotate
          data.currentCenterItem.removeClass(options.activeClassName);
  
          data.currentlyMoving = true;
          data.itemsAnimating = 0;
          data.carouselRotationsLeft += rotations;
          
          if (options.quickerForFurther === true) {
            // Figure out how fast the carousel should rotate
            if (rotations > 1) {
              data.currentSpeed = options.speed / rotations;
            }
            // Assure the speed is above the minimum to avoid weird results
            data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
          }
  
          // Iterate thru each item and move it
          for (var i = 0; i < data.totalItems; i++) {
            var $item = $(data.items[i]);
            var currentPosition = $item.data('currentPosition');
  
            var newPosition;
            if (data.currentDirection == 'forward') {
              newPosition = currentPosition - 1;
            } else {
              newPosition = currentPosition + 1;
            }
            // We keep both sides as even as possible to allow circular rotation to work.
            // We will "wrap" the item arround to the other side by negating its current position
            var flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
            if (Math.abs(newPosition) > flankingAllowance) {
              newPosition = currentPosition * -1;
              // If there's an uneven number of "flanking" items, we need to compenstate for that
              // when we have an item switch sides. The right side will always have 1 more in that case
              if (data.totalItems % 2 == 0) {
                newPosition += 1;
              } 
            }
  
            moveItem($item, newPosition);
          }
        }
      }
  
      /**
       * The event handler when an image within the carousel is clicked
       * This function will rotate the carousel the correct number of rotations
       * to get the clicked item to the center, or will fire the custom event
       * the user passed in if the center item is clicked
       */
      $(this).find('img').bind("click", function () {
        var itemPosition = $(this).data().currentPosition;
  
        if (options.imageNav == false) {
          return;
        }
        // Don't allow hidden items to be clicked
        if (Math.abs(itemPosition) >= options.flankingItems + 1) {
          return;
        }
        // Do nothing if the carousel is already moving
        if (data.currentlyMoving) {
          return;
        }
  
        data.previousCenterItem = data.currentCenterItem;
  
        // Remove autoplay
        autoPlay(true);
        options.autoPlay = 0;
        
        var rotations = Math.abs(itemPosition);
        if (itemPosition == 0) {
          options.clickedCenter($(this));
        } else {
          // Fire the 'moving' callbacks
          options.movingFromCenter(data.currentCenterItem);
          options.movingToCenter($(this));
          if (itemPosition < 0) {
            data.currentDirection = 'backward';
            rotateCarousel(rotations);
          } else if (itemPosition > 0) {
            data.currentDirection = 'forward';
            rotateCarousel(rotations);
          }
        }
      });
  
  
      /**
       * The user may choose to wrap the images is link tags. If they do this, we need to
       * make sure that they aren't active for certain situations
       */
      $(this).find('a').bind("click", function (event) {
        var isCenter = $(this).find('img').data('currentPosition') == 0;
        // should we disable the links?
        if (options.linkHandling === 1 || // turn off all links
            (options.linkHandling === 2 && !isCenter)) // turn off all links except center
        {
          event.preventDefault();
          return false;
        }
      });
  
      function nextItemFromCenter() {
        var $next = data.currentCenterItem.next();
        if ($next.length <= 0) {
          $next = data.currentCenterItem.parent().children().first();
        }
        return $next;
      }
  
      function prevItemFromCenter() {
        var $prev = data.currentCenterItem.prev();
        if ($prev.length <= 0) {
          $prev = data.currentCenterItem.parent().children().last();
        }
        return $prev;
      }
  
      /**
       * Intiate a move of the carousel in either direction. Takes care of firing
       * the 'moving' callbacks
       */
      function moveOnce(direction) {
        if (data.currentlyMoving === false) {
          data.previousCenterItem = data.currentCenterItem;
  
          options.movingFromCenter(data.currentCenterItem);
          if (direction == 'backward') {
            options.movingToCenter(prevItemFromCenter());
            data.currentDirection = 'backward';
          } else if (direction == 'forward') {
            options.movingToCenter(nextItemFromCenter());
            data.currentDirection = 'forward';
          }
        }
  
        rotateCarousel(1);
      }
      
      /**
       * Navigation with arrow keys
       */
      $(document).keydown(function(e) {
        if (options.keyboardNav) {
          // arrow left or up
          if ((e.which === 37 && options.orientation == 'horizontal') || (e.which === 38 && options.orientation == 'vertical')) {
            autoPlay(true);
            options.autoPlay = 0;
            moveOnce('backward');
          // arrow right or down
          } else if ((e.which === 39 && options.orientation == 'horizontal') || (e.which === 40 && options.orientation == 'vertical')) {
            autoPlay(true);
            options.autoPlay = 0;
            moveOnce('forward');
          }
          // should we override the normal functionality for the arrow keys?
          if (options.keyboardNavOverride && (
              (options.orientation == 'horizontal' && (e.which === 37 || e.which === 39)) ||
              (options.orientation == 'vertical' && (e.which === 38 || e.which === 40))
            )) {
            e.preventDefault();
            return false;
          }
        }
      });
  
      /**
       * Public API methods
       */
      this.reload = function (newOptions) {
        if (typeof newOptions === "object") {
          var combineDefaultWith = newOptions;
        } else {
          var combineDefaultWith = {};
        }
        options = $.extend({}, $.fn.waterwheelCarousel.defaults, newOptions);
  
        initializeCarouselData();
        data.itemsContainer.find('img').hide();
        forceImageDimensionsIfEnabled();
  
        preload(function () {
          setOriginalItemDimensions();
          preCalculatePositionProperties();
          setupCarousel();
          setupStarterRotation();
        });
      }
      
      this.next = function() {
        autoPlay(true);
        options.autoPlay = 0;
  
        moveOnce('forward');
      }
      this.prev = function () {
        autoPlay(true);
        options.autoPlay = 0;
  
        moveOnce('backward');
      }
  
      this.reload(startingOptions);
  
      return this;
    };
  
    $.fn.waterwheelCarousel.defaults = {
      // number tweeks to change apperance
      startingItem:               1,   // item to place in the center of the carousel. Set to 0 for auto
      separation:                 175, // distance between items in carousel
      separationMultiplier:       0.6, // multipled by separation distance to increase/decrease distance for each additional item
      horizonOffset:              0,   // offset each item from the "horizon" by this amount (causes arching)
      horizonOffsetMultiplier:    1,   // multipled by horizon offset to increase/decrease offset for each additional item
      sizeMultiplier:             0.7, // determines how drastically the size of each item changes
      opacityMultiplier:          0.8, // determines how drastically the opacity of each item changes
      horizon:                    0,   // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto
      flankingItems:              3,   // the number of items visible on either side of the center                  
  
      // animation
      speed:                      300,      // speed in milliseconds it will take to rotate from one to the next
      animationEasing:            'linear', // the easing effect to use when animating
      quickerForFurther:          true,     // set to true to make animations faster when clicking an item that is far away from the center
      edgeFadeEnabled:            false,    // when true, items fade off into nothingness when reaching the edge. false to have them move behind the center image
      
      // misc
      linkHandling:               2,                 // 1 to disable all (used for facebox), 2 to disable all but center (to link images out)
      autoPlay:                   0,                 // indicate the speed in milliseconds to wait before autorotating. 0 to turn off. Can be negative
      orientation:                'horizontal',      // indicate if the carousel should be 'horizontal' or 'vertical'
      activeClassName:            'carousel-center', // the name of the class given to the current item in the center
      keyboardNav:                false,             // set to true to move the carousel with the arrow keys
      keyboardNavOverride:        true,              // set to true to override the normal functionality of the arrow keys (prevents scrolling)
      imageNav:                   true,              // clicking a non-center image will rotate that image to the center
  
      // preloader
      preloadImages:              true,  // disable/enable the image preloader. 
      forcedImageWidth:           0,     // specify width of all images; otherwise the carousel tries to calculate it
      forcedImageHeight:          0,     // specify height of all images; otherwise the carousel tries to calculate it
  
      // callback functions
      movingToCenter:             $.noop, // fired when an item is about to move to the center position
      movedToCenter:              $.noop, // fired when an item has finished moving to the center
      clickedCenter:              $.noop, // fired when the center item has been clicked
      movingFromCenter:           $.noop, // fired when an item is about to leave the center position
      movedFromCenter:            $.noop  // fired when an item has finished moving from the center
    };
  
})(jQuery);
  