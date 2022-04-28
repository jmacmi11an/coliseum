const primeAge = 27;
const maxAge = 100;
const ageFactor = 100;
const youthMultiple = 100/(primeAge-0);
const ageMultiple = 100/Math.abs(maxAge-primeAge);

function CalculateAgeFactor (age) {
  return age === primeAge
    ? ageFactor
    : age < primeAge
      ? age * youthMultiple
      : ageFactor - ageMultiple * (age - primeAge)
}

// 100 - 27 = 73
// so 100/73 = 1.36
// 73/100 = .73
// so for 27 = 28 -27 = 100 - 1.36 = 98.64

// 100 - 1.3 (30-27) = 0
//
// .73 (1)

const primeMass = 165;
const maxMass = 400;
const massFactor = 100;
const lightMultiple = 100/(primeMass-0);
const heavyMultiple = 100/Math.abs(maxMass-primeMass)

function CalculateMassFactor (mass) {
  return mass === primeMass
    ? massFactor
    : mass < primeMass
      ? mass * lightMultiple
      : massFactor - heavyMultiple * (mass -primeMass)
}

const health = 100;
