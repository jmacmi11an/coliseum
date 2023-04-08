function Form ({ children }){

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target) 
    }
  
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