(() => {
  "use strict";

  const MAX_PLAYBACK_RATE = 1;
  const mediaPrototype = HTMLMediaElement.prototype;

  function capRateDescriptor(propertyName) {
    const descriptor = Object.getOwnPropertyDescriptor(mediaPrototype, propertyName);
    if (!descriptor?.get || !descriptor?.set || !descriptor.configurable) {
      return;
    }

    Object.defineProperty(mediaPrototype, propertyName, {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,
      get: descriptor.get,
      set(value) {
        descriptor.set.call(this, Math.min(value, MAX_PLAYBACK_RATE));
      }
    });
  }

  capRateDescriptor("playbackRate");
  capRateDescriptor("defaultPlaybackRate");
})();
