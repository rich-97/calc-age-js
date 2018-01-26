const chai = require('chai')
const { assert } = chai

const Age = require('../Age')
const age = new Age(20, 6, 45)

describe('Test the constructor Age', function() {
    it('Years, months and days', function() {
        assert.typeOf(age.years , 'number')
        assert.typeOf(age.months, 'number')
        assert.typeOf(age.days  , 'number')
    })

    it('Converting to a string', function() {
        assert.equal(age.toString(), '20 years, 6 months and 45 days')
    })
})
