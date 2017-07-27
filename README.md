# calc-age-js

[![npm](https://img.shields.io/npm/v/calc-age.svg)](https://www.npmjs.com/package/calc-age)
[![npm](https://img.shields.io/npm/dm/calc-age.svg)](https://www.npmjs.com/package/calc-age)

Simple function for calculate the age of a person from a date. This package can calculate the age in years, months and days.

## Installation

Via `npm`:

```shell
npm install calc-age
```

## Usage

Simple example:

```js
const calcAge = require('calc-age')
const date = { year: 1989, month: 3, day: 9 }
const myAge = calcAge(date)

console.log(myAge.years) // Should be equal to 28 (current year: 2017).
```

This function also accept an string as number, the following object is valid:

```js
const date = { year: '1989', month: '3', day: '9' }
```

If you use an string as number, the string always should be only one or more digits.
