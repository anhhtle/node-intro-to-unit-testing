const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

    //test normal cases
    it(`should return 'fizz', 'buzz', 'fizz-buzz', or num`, () => {
        //range of normal inputs
        const normalInputs = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 5, expected: 'buzz'},
            {a: 3, expected: 'fizz'},
            {a: 11, expected: 11}
        ];
        //test input vs expected
        normalInputs.forEach(input => {
            () => {
                fizzBuzzer(input.a).should.equal(input.expected);
            };
        }); // end of test
    });// ennd of it
    
    // test bad cases
    it('should raise error if arg it not a number', () => {
        //range of bad inputs where input is not num
        const badInputs = ['a', '1', true, {num: 1}];
        //prove that an error was raised
        badInputs.forEach(input => {
            () => {
                fizzBuzzer(input).should.throw(Error)
            };
        }); // end of test
    }); // end of it
});