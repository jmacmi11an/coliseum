import '../styles/App.css';
import React, { useState } from "react";

function App() {

  const [individualStats, setIndividualStats] = useState({});
  const updateAge = age => setIndividualStats({...individualStats, age: age.target.value});
  const updateMass = mass => setIndividualStats({...individualStats, mass: mass.target.value});
  const updateStrength = strength => setIndividualStats({...individualStats, strength: strength.target.value});
  const updateStamina = stamina => setIndividualStats({...individualStats, stamina: stamina.target.value});
  const updateSkill = skill => setIndividualStats({...individualStats, skill: skill.target.value});
  const updateGrit = grit => setIndividualStats({...individualStats, grit: grit.target.value});

  return (
    <div className="App">
      <div className="header">
        <h1>Coliseum</h1>
        <p>
          The question: what are your odds of winning a fight against various groups of opponents?
        </p>
      </div>

      <div className="form">
        <form className="form">
          <label className="form--label">
            <div className="form-label-text">Age</div>
            <input type="number" className="form--input"
            onChange={updateAge}
            />
          </label><br></br>
          <label className="form--label">
          <div className="form-label-text">Mass</div>
            <input type="number" className="form--input" onChange={updateMass}/>
          </label><br></br>
          <p><i>When thinking of the following categories, the idea is to objectively rank yourself against the population of the world. Literally everyone. From the oldest and sickest to the strongest and most skillful.</i></p><br></br>
          <label className="form--label">
          <div className="form-label-text">Strength</div>
            <input type="number" className="form--input" onChange={updateStrength}/>
          </label><br></br>
          <label className="form--label">
          <div className="form-label-text">Stamina</div>
            <input type="number" className="form--input" onChange={updateStamina}/>
          </label><br></br>
          <label className="form--label">
          <div className="form-label-text">Skill</div>
            <input type="number" className="form--input" onChange={updateSkill}/>
          </label><br></br>
          <p><i>Think of this as your fighting X factor. You're drive to survive. Your toughness</i><br></br></p>
          <label className="form--label">
          <div className="form-label-text">Grit</div>
            <input type="number" className="form--input" onChange={updateGrit}/>
          </label><br></br>
          <input type="submit" value="Run the simulation" className="form--button"/>
        </form>
      </div>

    </div>
  );
}

export default App;
