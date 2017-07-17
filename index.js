/**
 * (c) Ricardo Moreno <morenoricardo237@gmail.com>
 *
 * For more details about the license of this source code,
 * please view the license file LICENSE.
 */

/* Module export */

module.exports = calcAge

/* Constants */
const yearInMonths = 12
const yearInDays = 365
const monthInDays = yearInDays / yearInMonths

/**
 * Age - Function for build a simple object.
 * (Private function).
 * 
 * @param {Number|String} years
 * @param {Number|String} months
 * @param {Number|String} days
 */
function Age (years, months, days) {
  this.years = years
  this.months = months
  this.days = days
}

Age.prototype.toString = function () {
  return `${this.years} years, ${this.months} months and ${this.days} days`
}

/**
 * calcAge - Function for calculate the age from a date.
 * 
 * @param {Object} dateObject
 * @return {Object} Instance of `Age`.
 *   @property {Number|String} years
 *   @property {Number|String} months
 *   @property {Number|String} days
 */
function calcAge (dateObject) {
  // Validation for secure use.
  // When date object is not an object.
  if (typeof dateObject !== 'object') {
    throw new Error('The date must be an object.')
  }

  // When the date object is an array.
  if (Array.isArray(dateObject)) {
    throw new Error('The date is array, not an object.')
  }

  // Validation for the values of the date object.
  Object.keys(dateObject).forEach(function (key) {
    const value = dateObject[key]

    if (typeof value === 'string') {
      if (!/^\d+$/.exec(value)) {
        throw new Error(`The value ${value} is not a valid number.`)
      }
    }
  })

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1
  const currentDay = currentDate.getDate()
  
  const { year, month, day } = dateObject
  
  let years, months, days

  if (currentMonth < month) {
    years = (currentYear - 1) - year
  } else {
    if (currentMonth === month) {
      if (currentDay < day) {
        years = (currentYear - 1) - year
      } else {
        years = currentYear - year
      }
    } else {
      years = currentYear - year
    }
  }

  months = (years * yearInMonths) - month
  days = (years * yearInDays) - (currentMonth * (yearInDays / yearInMonths))

  return new Age(years, months, days)
}