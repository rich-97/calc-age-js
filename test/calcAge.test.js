const chai = require('chai')
const { assert } = chai

const calcAge = require('../')
const date    = { year: 1997, month: 7, day: 7 }

describe('Test the calcAge function', function() {
    it('Converting the burn date to an object with years, months and days', function() {
        const age = calcAge(date)
        
        assert.typeOf(age.years , 'number')
        assert.typeOf(age.months, 'number')
        assert.typeOf(age.days  , 'number')
    })
})
