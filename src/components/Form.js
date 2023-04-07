import { useState } from "react";

function Form (){

    const [individualStats, setIndividualStats] = useState({});
    const updateAge = age => setIndividualStats({...individualStats, age: age.target.value});
    const updateMass = mass => setIndividualStats({...individualStats, mass: mass.target.value});
    const updateStrength = strength => setIndividualStats({...individualStats, strength: strength.target.value});
    const updateStamina = stamina => setIndividualStats({...individualStats, stamina: stamina.target.value});
    const updateSkill = skill => setIndividualStats({...individualStats, skill: skill.target.value});
    const updateGrit = grit => setIndividualStats({...individualStats, grit: grit.target.value});

    console.log(individualStats);
  
    return (
        <div className="form">
        <form className="form">

            <div className="form-label-text">
                {individualStats.age 
                    ? <p>You're {individualStats.age} years old</p>
                    : <p>Age</p>
                }
            </div>
            <input type="number" className="form--input"
            onChange={updateAge}
            />

          <div className="form-label-text">Mass</div>
            <input type="number" className="form--input" onChange={updateMass}/>


          <p><i>When thinking of the following categories, the idea is to objectively rank yourself against the population of the world. Literally everyone. From the oldest and sickest to the strongest and most skillful.</i></p><br></br>

          <div className="form-label-text">Strength</div>
            <input type="number" className="form--input" onChange={updateStrength}/>

          <div className="form-label-text">Stamina</div>
            <input type="number" className="form--input" onChange={updateStamina}/>

          <div className="form-label-text">Skill</div>
            <input type="number" className="form--input" onChange={updateSkill}/>

          <p><i>Think of this as your fighting X factor. You're drive to survive. Your toughness</i><br></br></p>

          <div className="form-label-text">Grit</div>
            <input type="number" className="form--input" onChange={updateGrit}/>

          <input type="submit" value="Run the simulation" className="form--button"/>
        </form>
      </div>
    )
}

export default Form