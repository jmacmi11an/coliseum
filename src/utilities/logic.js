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

// you need to figure out health logic
// how much does time and opponent strength/mass/age/stamina/skill/grit etc. determine strike power.
// do you need other factors?
// recovery speed -> related to stamina?
// health -> related to strength/age?
// strike power -> related to strength/skill/mass?
// what does grit determine?
