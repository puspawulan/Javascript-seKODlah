const isDivisibleBy = (number, divisor) => number % divisor === 0;

const isLeapYear = year => isDivisibleBy(year, 4) && !isDivisibleBy(year, 100) || isDivisibleBy(year, 400);

const commonYears = [1800, 1900, 1966, 1997, 2003]
const leapYears = [1600, 2000, 2008, 2012, 2016]

commonYears.forEach(y => console.log(y, isLeapYear(y)))
leapYears.forEach(y => console.log(y, isLeapYear(y)))