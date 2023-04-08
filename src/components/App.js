import '../styles/App.css';
import { useState } from 'react';
import Form from './Form';
import Input from './Input';

function App() {
  // you must find a better state solution, either with context, a reducer, or a state object instead
  
  const [age, setAge] = useState(null)
  const [mass, setMass] = useState(null)
  const [grit, setGrit] = useState(null)
  const [skill, setSkill] = useState(null)
  const [stamina, setStamina] = useState(null)
  const [strength, setStrength] = useState(null)

  const updateAge = (value) => setAge(value);
  const updateMass = (value) => setMass(value);
  const updateGrit = (value) => setGrit(value);
  const updateSkill = (value) => setSkill(value);
  const updateStamina = (value) => setStamina(value);
  const updateStrength = (value) => setStrength(value);


  return (
    <div className="App">
      <div className="header">
        <h1>Coliseum</h1>
        <p>
          What are your odds of winning a fight against various groups of opponents?
        </p>
      </div>

      <Form>
        <Input type="number" handleInput={updateAge}>{age ? `Your age is ${age}` : "Age"}</Input>
        <Input type="number" handleInput={updateMass}>{mass ? `Your mass is ${mass}` : "Mass"}</Input>

        <p><i>When thinking of the following categories, the idea is to objectively rank yourself against the population of the world. Literally everyone. From the oldest and sickest to the strongest and most skillful.</i></p><br></br>
        <Input type="number" handleInput={updateStamina}>{stamina ? `Your stamina is ${stamina}` : "Stamina"}</Input>
        <Input type="number" handleInput={updateStrength}>{strength ? `Your strength is ${strength}` : "Strength"}</Input>
        <Input type="number" handleInput={updateSkill}>{skill ? `Your skill is ${skill}` : "Skill"}</Input>
 
        <p><i>Think of this as your fighting X factor. You're drive to survive. Your toughness</i><br></br></p>

        <Input type="number" handleInput={updateGrit}>{grit ? `Your grit is ${grit}` : "Grit"}</Input>
      </Form>
    </div>
  );
}

export default App;
