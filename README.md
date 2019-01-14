<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [videojs-hlsjs](#videojs-hlsjs)
  - [Installation](#installation)
  - [Usage](#usage)
    - [`<script>` Tag](#script-tag)
    - [Browserify/CommonJS](#browserifycommonjs)
    - [RequireJS/AMD](#requirejsamd)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# videojs-hlsjs

Source handler for [hls.js][hlsjs]

## Installation

```sh
npm install --save videojs-hlsjs
```

## Usage

To include videojs-hlsjs on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-hlsjs.min.js"></script>
<script>
  var player = videojs('my-video');

  player.src({
    src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
    type: 'application/x-mpegURL'
  });
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-hlsjs via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The source handler is automatically registered
require('videojs-hlsjs');

var player = videojs('my-video');

player.src({
  src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
  type: 'application/x-mpegURL'
});
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-hlsjs'], function(videojs) {
  var player = videojs('my-video');

  player.src({
    src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
    type: 'application/x-mpegURL'
  });
});
```

## License

MIT. Copyright (c) jforbes &lt;jforbes@brightcove.com&gt;


[videojs]: http://videojs.com/
[hlsjs]: https://github.com/video-dev/hls.js/
