var EventEmitter = require('events').EventEmitter;


module.exports = Object.create(EventEmitter.prototype, {

  extend: {

    value: function(definition) {

      if (typeof this.__preCreate__ === 'function') {

        this.__preCreate__(definition);
      }

      //  get a new object
      var object = Object.create(this, definition || {});

      //   mr freeze...
      Object.freeze(object);

      return object;

    },

    enumerable: false

  },


  /**
    @public   creates a new copy of "this" with no extending definition
    @return   object
  */
  init: {

    value: function() {

      var object = Object.create(this, {

        _events: {
          value: {}
        },
        domain: {
          value: null,
          writable: true
        },
        _maxListeners: {
          value: null,
          writable: true
        }

      });

      if (typeof object.__init__ === 'function') {
        object.__init__.apply(object, arguments);
      }

      EventEmitter.init.call(object);

      return object;

    },
    enumerable: false

  }

});