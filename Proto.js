var EventEmitter = require('events').EventEmitter;


module.exports = Object.create(EventEmitter.prototype, {

  extend: {

    value: function(definition) {

      this.__preCreate__(definition);

      //  get a new object
      var object = Object.create(typeof this === "function" ? this.prototype: this, definition || {});

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

      var object = Object.create(this);

      EventEmitter.init.call(object);

      if (typeof object.__init__ === 'function') {
        object.__init__.apply(object, arguments);
      }

      return object;

    },
    enumerable: false

  }

});