const PubSub = {
  // push events to this array
  actions: [],

  /**
   * Store a callback in an event
   * @param {string} e - A custom event name
   * @param {callback} cb - A callback function
   */
  on: function on(e, cb) {
    if (!this.actions[e]) {
      this.actions[e] = [cb];
    } else {
      this.actions[e].push(cb);
    }
  },

  /**
   * Remove a callback from an event
   * @param {string} e - A custom event name
   * @param {callback} cb - An optional callback function
   */
  off: function off(e, cb) {
    if (this.actions[e]) {
      if (!cb) {
        // if no callback is passed, delete the entire event
        // from the actions array
        delete this.actions[e];
      } else {
        // if a callback is passed, check for its presense
        // and remove it from from its action parent
        this.actions[e].forEach((fn, i) => {
          if (fn === cb) {
            this.actions[e].splice(i, 1);
          }
        });
      }
    }
  },

  /**
   * Trigger an event
   * @param {string} e - A custom event name
   * @param {Object} [d] - Optional data packet
   */
  trigger: function trigger(e, d) {
    const data = d || {};

    if (this.actions[e]) {
      this.actions[e].forEach(cb => cb(data));
    }
  }
};

export default PubSub;
