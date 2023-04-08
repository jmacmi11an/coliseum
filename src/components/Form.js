function Form ({ children }){

    const handleSubmit = (event) => {
      event.preventDefault();
    }
  // you have to refactor the button out of this component, it's hardcoded
    return (
      <div className="form">
        <form onSubmit={handleSubmit} className="form">

          { children }

          <button className="form--button">Run the simulation</button>
        </form>
      </div>
    )
}

export default Form