import SingleTargetAttack from './singletargetattack';

test('Damage higher than remaining hp test', () => {
  let raiders = [{hp: 1999}, {hp: 1000}];
  let index = 0;
  let dmg = 2000;
  let expected = [{hp: 0}, {hp: 1000}];

  expect(SingleTargetAttack(raiders, index, dmg)).toEqual(expected);
});

//
// test('Index greater than length of array test', () => {
//   let raiders = [{hp: 1000}, {hp: 1000}];
//   let index = 2;
//   let dmg = 100;
//
//   function functionToTest(){
//     SingleTargetAttack(raiders, index, dmg);
//   }
//   expect(functionToTest()).toThrow('Index > array length - 1');
// });
//
//
// test('Index less than 0 test', () => {
//   let raiders = [{hp: 1000}, {hp: 1000}];
//   let index = -1;
//   let dmg = 100;
//
//   expect(SingleTargetAttack(raiders, index, dmg)).toThrow();
// });
