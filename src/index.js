import videojs from 'video.js';
import {version as VERSION} from '../package.json';
import Hls from 'hls.js';

// Default options for the source handler.
// see https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning
// for more options
const defaults = {};

const HlsjsSourceHandler = {
  name: 'videojs-hlsjs',
  VERSION,

  canHandleSource(srcObj) {
    return HlsjsSourceHandler.canPlayType(srcObj.type);
  },

  handleSource(source, tech) {
    const hlsjsOptions =
      videojs.mergeOptions(defaults, source.hlsjs || {});
    const hls = new Hls(hlsjsOptions);

    hls.attachMedia(tech.el_);
    hls.loadSource(source.src);
  },

  canPlayType(type) {
    // HLS manifests can go by many mime-types
    const supportedTypes = [
      // Apple santioned
      'application/vnd.apple.mpegurl',
      // Apple sanctioned for backwards compatibility
      'audio/mpegurl',
      // Very common
      'audio/x-mpegurl',
      // Very common
      'application/x-mpegurl',
      // Included for completeness
      'video/x-mpegurl',
      'video/mpegurl',
      'application/mpegurl'
    ];

    if (Hls.isSupported() &&
        supportedTypes.indexOf(type.toLowerCase()) > -1) {
      return 'maybe';
    }

    return '';
  }
};

// Register the source handler with video.js.
videojs.getTech('Html5').registerSourceHandler(HlsjsSourceHandler, 0);

export default HlsjsSourceHandler;
