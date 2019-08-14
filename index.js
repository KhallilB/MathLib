Number.goldenRatio = 1 + Math.sqrt(5) / 2;

Number.prototype.round = function round() {
  return Math.round(this);
};

Number.prototype.floor = function floor() {
  return Math.floor(this);
};

Number.prototype.ceiling = function ceiling() {
  return Math.ceil(this);
};

Number.prototype.pad = function pad(left, right) {
  if (left < 0 || right < 0) {
    throw RangeError('numbers cannot be negative');
  }

  const number = String(this);
  const splitNumber = number.split('.');
  splitNumber[0] = splitNumber[0].padStart(left, '0');

  if (right > 0 && splitNumber.length === 1) {
    splitNumber.push('');
  }
  if (splitNumber.length === 2) {
    splitNumber[1] = splitNumber[1].padEnd(right, '0');
  }

  return splitNumber.join('.');
};

Number.prototype.degToRad = function degToRad() {
  return this * (Math.PI / 180);
};

Number.prototype.radToDeg = function radToDeg() {
  return this / (Math.PI / 180);
};

Number.prototype.toDollars = function toDollars(value) {
  if (value > -1 && value < 1) {
    let cents;
    if (value < 0) {
      cents = Math.ceil(value * 100) / 100;
      cents *= -1;
      return '-¢' + cents;
    }
    cents = Math.floor(value * 100) / 100;
    return '¢' + cents;
  }

  if (value < 0) {
    let dollars;
    dollars = Math.ceil(value * 100) / 100;
    value *= -1;
    return '-$' + dollars;
  }
  dollars = Math.floor(value * 100) / 100;
  return '$' + dollars;
};

Number.prototype.tax = function tax(value, rate) {
  return rate * value;
};

Number.prototype.withTax = function withTax(value, rate) {
  return value + rate * value;
};

Number.prototype.interest = function interest(total, year, rate) {
  let interest = rate / 100 + 1;
  return parseFloat((total * Math.pow(interest, year)).toFixed(4));
};

Number.prototype.calculateInterest = function calculateInterest(
  total,
  years,
  ratePercent,
  roundToPlaces
) {
  let interestRate = ratePercent / 100 + 1;
  return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
};

Number.prototype.mortage = function mortage(principle, payments, interest) {
  return (
    (principle * interest * Math.pow(1 + interest, payments)) /
    (Math.pow(1 + interest, payments) - 1)
  );
};
