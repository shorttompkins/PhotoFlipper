Usage:
<pre>
var myflip = new PhotoFlipper({ 
    sel: '#galleryFlipper1',
    width: 100,
    height: 100, 
    photos: '/url/to/photos_sprite.jpg', 
    count: '8'
    //optional parameters:
    //delaymin: 5,    //delay in seconds to start of flip
    //delaymax: 20    //max random amount of time to flip to another
});
</pre>

NECESSARY CSS:
<pre>
.flip-container { -moz-perspective: 1000; -ms-perspective: 1000; -webkit-perspective: 1000; perspective: 1000; }
.flip-container.hover .flipper { -moz-transform: rotateY(180deg); -ms-transform: rotateY(180deg); -o-transform: rotateY(180deg); -webkit-transform: rotateY(180deg); transform: rotateY(180deg);  }
.flipper { position: relative; }
.flip-container .flipper { -moz-transition: 0.6s; -o-transition: 0.6s; -webkit-transition: 0.6s; transition: 0.6s; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; }
.front, .back { position: absolute; top: 0; left: 0; -webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px; }
.front { z-index: 2; }
.flip-container .front, .flip-container .back {  -moz-backface-visibility: hidden; -webkit-backface-visibility: hidden; backface-visibility: hidden; -moz-background-size: cover; -o-background-size: cover; -webkit-background-size: cover; background-size: cover;  }
.flip-container .back { -moz-transform: rotateY(-180deg); -ms-transform: rotateY(-180deg); -o-transform: rotateY(-180deg); -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); }
</pre>

HTML:
<pre>
<div id="galleryFlipper1"></div>
</pre>
