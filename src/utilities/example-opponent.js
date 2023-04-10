import { CalculateAgeFactor, CalculateMassFactor } from "./logic";

const fiveYearOld = {
    age: {
        actualAge: 5,
        ageFactor: CalculateAgeFactor(this.actualAge)
    },
    mass: {
        actualMass: 26,
        massFactor: CalculateMassFactor(this.actualMass)
    },
    stamina: 70,
    strength: 10,
    skill: 5,
    grit: 15,
    health: 100
}

