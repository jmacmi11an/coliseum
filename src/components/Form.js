import Button from "./Button";

function Form ({ children, buttonText }){

    const handleSubmit = (event) => event.preventDefault();

  // you have to refactor the button out of this component, it's hardcoded
    return (
      <div className="form">
        <form onSubmit={handleSubmit} className="form">
          { children }
          <Button>{buttonText}</Button>
        </form>
      </div>
    )
}

export default Form