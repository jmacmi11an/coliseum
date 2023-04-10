import '../styles/App.css';
import { useState } from 'react';
import Form from './Form';
import Input from './Input';

function App() {  
  const [player, setPlayer] = useState({});
  const [age, setAge] = useState('')
  const [mass, setMass] = useState('')
  const [grit, setGrit] = useState('')
  const [skill, setSkill] = useState('')
  const [stamina, setStamina] = useState('')
  const [strength, setStrength] = useState('')

  const updateAge = (value) => value >=0 && value <= 100 && setAge(value);
  const updateMass = (value) => value >=0 && value <= 400 && setMass(value);
  const updateGrit = (value) => value >=0 && value <= 100 && setGrit(value);
  const updateSkill = (value) => value >=0 && value <= 100 && setSkill(value);
  const updateStamina = (value) => value >=0 && value <= 100 && setStamina(value);
  const updateStrength = (value) => value >=0 && value <= 100 && setStrength(value);

  const handleSubmit = () => {
    setPlayer({
      age,
      mass,
      stamina,
      strength,
      skill,
      grit
    })
    console.log(player.age, 'this worked');
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Coliseum</h1>
        <p>
          What are your odds of winning a fight against various groups of opponents?
        </p>
      </div>

      {player.age 
        ? <p>Your age is {player.age}</p>
        :
      <Form buttonText={"Run the simulation"} onSubmit={handleSubmit}>
        <Input type="number" min="2" max="100" required value={age} handleInput={updateAge}>{age ? `Your age is ${age}` : "Age"}</Input>
        <Input type="number" min="10" max="400" required value={mass} handleInput={updateMass}>{mass ? `Your mass is ${mass}` : "Mass"}</Input>

        <p><i>
          When thinking of the following categories, the idea is to objectively rank yourself against the population of the world. Literally everyone. From the oldest and sickest to the strongest and most skillful.
        </i></p>
        <br></br>

        <Input type="number" min="0" max="100" required value={stamina} handleInput={updateStamina}>{stamina ? `Your stamina is ${stamina}` : "Stamina"}</Input>
        <Input type="number" min="0" max="100" required value={strength} handleInput={updateStrength}>{strength ? `Your strength is ${strength}` : "Strength"}</Input>
        <Input type="number" min="0" max="100" required value={skill} handleInput={updateSkill}>{skill ? `Your skill is ${skill}` : "Skill"}</Input>
 
        <p><i>Think of this as your fighting X factor. You're drive to survive. Your toughness</i><br></br></p>

        <Input type="number" min="0" max="100" required value={grit} handleInput={updateGrit}>{grit ? `Your grit is ${grit}` : "Grit"}</Input>
      </Form>
      }
    </div>
  );
}

export default App;
