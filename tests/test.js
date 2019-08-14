require('../index');

test('Rounds a number to closest whole number', () => {
  expect(Number(5.75).round()).toBe(6);
  expect(Number(2.21).round()).toBe(2);
  expect(Number((71.9).round())).not.toBe(71);
});

test('Rounds a number down', () => {
  expect(Number(12.2).floor()).toBe(12);
  expect(Number(3.79).floor()).toBe(3);
  expect(Number(8.11).floor()).not.toBe(9);
});

test('Rounds a number up', () => {
  expect(Number(7.12).ceiling()).toBe(8);
  expect(Number(2.99).ceiling()).toBe(3);
  expect(Number(4.14).ceiling()).not.toBe(4);
});

test('Padding a number to either side of a number', () => {
  expect(Number(4.8).pad(4, 4)).toBe('0004.8000');
  expect(Number(10.1).pad(2, 2)).toBe('10.10');
  expect(Number(10.1).pad(0, 0)).toBe('10.1');
  expect(Number(200).pad(3, 3)).toBe('200.000');
  expect(Number(0.0).pad(2, 2)).toBe('00.00');
  expect(Number(2434.3443).pad(2, 2)).toBe('2434.3443');
  expect(Number(2.3456789).pad(10, 0)).toBe('0000000002.3456789');
});

test('Converting a number from degress to radians', () => {
  expect(Number(0).degToRad()).toBe(0);
  expect(Number(1).degToRad()).toBeCloseTo(0.0174533);
  expect(Number(-200).degToRad()).toBeCloseTo(-3.49066, 5);
  expect(Number(200).degToRad()).toBeCloseTo(3.49066, 5);
});

test('Converting a number from radians to degrees', () => {
  expect(Number(0).radToDeg()).toBe(0);
  expect(Number(1).radToDeg()).toBeCloseTo(57.2958, 4);
  expect(Number(200).radToDeg()).toBeCloseTo(11459.2, 1);
  expect(Number(-200).radToDeg()).toBeCloseTo(-11459.2, 1);
});

test('Converts number to dollars', () => {
  expect(Number().toDollars(0.0174532)).toBe('¢0.01');
  expect(Number().toDollars(108.2962)).toBe('$108.29');
  expect(Number().toDollars(-0.09)).toBe('-¢0.09');
  expect(Number().toDollars(-21)).toBe('-$-21');
  expect(Number(9.01).toDollars(9.01)).not.toBe(9.01);
});

test('Calculates the task of a value', () => {
  expect(Number(70).tax(70, 0.06)).toBe(4.2);
  expect(Number(220.19).tax(220.19, 0.04)).toBeCloseTo(8.81);
  expect(Number(702.01).tax(702.01, 0.08)).not.toBe(12);
});

test('Calculates total value with tax', () => {
  expect(Number().withTax(70, 0.06)).toBe(74.2);
  expect(Number().withTax(220.19, 0.04)).toBeCloseTo(229);
  expect(Number().withTax(702.01, 0.08)).not.toBe(12);
});

test('Calculates Interest', () => {
  expect(Number().calculateInterest(400000, 2, 25, 2)).toBe('625000.00');
  expect(Number().calculateInterest(120000, 5, 30, 2)).toBe('445551.60');
});

test('Calculate monthly mortage', () => {
  expect(Number().mortage(20000, 25, 0.25)).toBe(5018.961098937961);
  expect(Number().mortage(30000, 18, 0.32)).toBe(9665.295669966428);
});
