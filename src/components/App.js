import '../styles/App.css';
import { useReducer } from 'react';
import Form from './Form';
import Input from './Input';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateAge':
      return {
        ...state,
        age: action.payload
      };
    case 'updateMass':
      return {
        ...state,
        mass: action.payload
      };    
    case 'updateStrength':
       return {
        ...state,
        strength: action.payload
      };
      case 'updateSkill':
        return {
          ...state,
          skill: action.payload
        };
      case 'updateStamina':
        return {
          ...state,
          stamina: action.payload
        };    
      case 'updateGrit':
         return {
          ...state,
          grit: action.payload
        };
      default:
        throw new Error ("how'd we get here", action.payload);
  }
}

function App() {  
  const [state, dispatch] = useReducer(reducer, {
    age: '',
    mass: '',
    skill: '',
    stamina: '',
    strength: '',
    grit: ''
  })

  const updateAge = (value) => value >=0 && value <= 100 && dispatch({type: 'updateAge', payload: value});
  const updateMass = (value) => value >=0 && value <= 400 && dispatch({type: 'updateMass', payload: value});
  const updateSkill = (value) => value >=0 && value <= 100 && dispatch({type: 'updateSkill', payload: value});
  const updateStamina = (value) => value >=0 && value <= 100 && dispatch({type: 'updateStamina', payload: value});
  const updateStrength = (value) => value >=0 && value <= 100 && dispatch({type: 'updateStrength', payload: value});
  const updateGrit = (value) => value >=0 && value <= 100 && dispatch({type: 'updateGrit', payload: value});


  const {age, mass, skill, stamina, strength, grit} = state;

  const handleSubmit = () => {
    console.log(state, 'this worked');
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Coliseum</h1>
        <p>
          What are your odds of winning a fight against various groups of opponents?
        </p>
      </div>

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
    </div>
  );
}

export default App;
