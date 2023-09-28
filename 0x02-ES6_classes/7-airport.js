export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}
// string description of the class
Airport.prototype.toString = function defaul() {
  const ret = `[object ${this._code}]`;
  return ret;
};
