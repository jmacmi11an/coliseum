import Button from "./Button";

function Form ({ children, buttonText, onSubmit }){

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit()
    }

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