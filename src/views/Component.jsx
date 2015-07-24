import { Component as ReactComponent } from 'react';

export default class Component extends ReactComponent {
  constructor() {
    super(...arguments);

    if (typeof this.getInitialState === 'function') {
      this.state = this.state || this.getInitialState();
    }
    this.state = this.state || {};

    this.autoBind();
  }

  bind(methods) {
    methods.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  autoBind() {
    this.bind(
      Object.getOwnPropertyNames(this.constructor.prototype)
        .filter(prop => typeof this[prop] === 'function')
    );
  }
}
