import document from 'global/document';

import QUnit from 'qunit';
import sinon from 'sinon';
import videojs from 'video.js';

import HlsjsSourceHandler from '../src/index';

QUnit.test('the environment is sane', function(assert) {
  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
  assert.strictEqual(typeof HlsjsSourceHandler, 'object', 'plugin is an object');
});

QUnit.module('videojs-hlsjs', {
  before() {
    this.fixture = document.createElement('div');
    document.body.appendChild(this.fixture);
  },

  beforeEach() {
    this.video = document.createElement('video');
    this.fixture.appendChild(this.video);
    this.player = videojs(this.video, {
      muted: true
    });
  },

  afterEach() {
    this.player.dispose();
  }
});

QUnit.test('registers itself with video.js', function(assert) {
  assert.strictEqual(
    videojs.getTech('html5').sourceHandlers[0].name,
    'videojs-hlsjs',
    'videojs-hlsjs plugin was registered first'
  );
});

QUnit.test('plays', function(assert) {
  assert.expect(1);
  const done = assert.async();

  this.player.src({
    src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
    type: 'application/x-mpegURL',
    hlsjs: {
      debug: true
    }
  });

  this.player.on('timeupdate', () => {
    if (this.player.currentTime() > 1) {
      assert.ok(true, 'played for at least one second');
      done();
    }
  });

  this.player.play();
});
