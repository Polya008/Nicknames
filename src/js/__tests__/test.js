import Validator from '../Validator';

test.each([
  ['45365_', false],
  ['Hgbkghkj123', false],
  ['%%%', false],
  ['ff-ff', true],
  ['-fjhgf-', false],
  ['foun76587659659poi', false],
  ['polya12pp', true],
  ['5fff', false],
  ['Polya', true],

])('regexp', (obj, expected) => {
  const result = new Validator(obj).validateUsername();
  expect(result).toBe(expected);
});