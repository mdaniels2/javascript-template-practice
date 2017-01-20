class Api {
  constructor(method) {
    this.method = method;
  }

  makeCall() {
    return `I am making a ${this.method} method call.`;
  }
}

module.exports = new Api.('GET');
