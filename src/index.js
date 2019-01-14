import videojs from 'video.js';
import {version as VERSION} from '../package.json';
import Hls from 'hls.js';

// Default options for the source handler.
const defaults = {};

const HlsjsSourceHandler = {
  name: 'videojs-hlsjs',
  VERSION,

  canHandleSource(srcObj, options = {}) {
    const localOptions = videojs.mergeOptions(defaults, options);

    return HlsjsSourceHandler.canPlayType(srcObj.type, localOptions);
  }

  handleSource(source, tech, options = {}) {
    const localOptions = videojs.mergeOptions(defaults, options);
    const hls = new Hls();

    hls.attachMedia(tech.el_);
    hls.loadSource(source.src);
  }

  canPlayType(type, options = {}) {
    const localOptions = videojs.mergeOptions(defaults, options);

    if (Hls.isSupported()) {
      return 'maybe';
    }

    return '';
  }

  // should this be on the object or what handleSource returns?
  dispose() {}
}

// Register the source handler with video.js.
videojs.getTech('Html5').registerSourceHandler(HlsjsSourceHandler, 0);

export default HlsjsSourceHandler;
