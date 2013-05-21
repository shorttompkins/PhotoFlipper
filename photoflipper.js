var PhotoFlipper = function (options) {
    var self = this;

    this.$el = $(options.sel);
    this.count = options.count;
    this.photos = options.photos;
    this.w = options.width;
    this.h = options.height;
    this.min = 10;
    this.max = 20;

    if (options.delaymin != undefined)
        this.min = options.delaymin;
    if (options.delaymax != undefined)
        this.max = options.delaymax;

    this.getNext = function (crntX) {
        var crnt = crntX.split(' ');
        var next = 0;
        do {
            next = Math.floor(Math.random() * self.count) * self.w;
        } while (crnt[0].replace('-','').replace('px','')*1 === next);
           
        return next;
    };

    //pump in the necessary starter html
    var flippable = 'flop';
    if ($('html').hasClass('csstransforms3d') && !$.browser.msie)
        flippable = 'flip';
    this.$el.html('<div class="' + flippable + '-container ' + flippable + '" style="width: ' + this.w + 'px; height: ' + this.h + 'px;"><div class="flipper"><div class="front" style="width: ' + this.w + 'px; height: ' + this.h + 'px; background: transparent url(' + this.photos + ') no-repeat -' + self.getNext("-1px -1px") + 'px 0px;">&nbsp;</div><div class="back" style="width: ' + this.w + 'px; height: ' + this.h + 'px; background: transparent url(' + this.photos + ') no-repeat 0px 0px;">&nbsp;</div></div></div>');

        
    var timer = function () {
        //randomize the delay (1 - 5 seconds):
        var delay = (Math.floor(Math.random() * (self.max - self.min + 1)) + self.min)*1000;

        setTimeout(function () {
            var $container = self.$el.find('.' + flippable + '-container');
            if ($container.hasClass('flip')) {
                if ($container.hasClass('hover')) {
                    $container.find('.front').css('backgroundPosition', '-' + self.getNext($container.find('.front').css('backgroundPosition')) + 'px 0px');
                    $container.removeClass('hover');
                } else {
                    $container.find('.back').css('backgroundPosition', '-' + self.getNext($container.find('.back').css('backgroundPosition')) + 'px 0px');
                    $container.addClass('hover');
                }
            } else {
                //gracefully handle older browsers using a simple fade:
                if ($container.hasClass('hover')) {
                    $container.find('.front').fadeIn(function () {
                        $container.find('.back').css('backgroundPosition', '-' + self.getNext($container.find('.front').css('backgroundPosition')) + 'px 0px');
                    });
                    $container.removeClass('hover');
                } else {
                    $container.find('.front').fadeOut(function () {
                        $container.find('.front').css('backgroundPosition', '-' + self.getNext($container.find('.front').css('backgroundPosition')) + 'px 0px');
                    });
                    $container.addClass('hover');
                }
            }
            timer();
        }, delay);
    };

    timer();
};
