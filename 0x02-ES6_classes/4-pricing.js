import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Store attributes with underscore prefix
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for amount
  set amount(amount_) {
    this._amount = amount_;
  }

  // Setter for currency
  set currency(currency_) {
    this._currency = currency_;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

