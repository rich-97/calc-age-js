/**
 * Age - Function for build a simple object.
 * (Private function).
 * 
 * @param {Number|String} years
 * @param {Number|String} months
 * @param {Number|String} days
 */
function Age(years, months, days) {
  this.years  = years
  this.months = months
  this.days   = days
}

Age.prototype.toString = function() {
  return `${this.years} years, ${this.months} months and ${this.days} days`
}

module.exports = Age
