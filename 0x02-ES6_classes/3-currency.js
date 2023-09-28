export default class Currency {
  constructor(code, name) {
    // Store attributes with underscore prefix
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for code
  set code(code_) {
    this._code = code_;
  }

  // Setter for name
  set name(name_) {
    this._name = name_;
  }

  // Method that returns attributes in the following format name (code).
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
