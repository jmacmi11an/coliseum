function Input({ children, type, handleInput }){
    
    const handleChange = (event) => {
        handleInput(event.target.value)
    }

    return (
        <div>
            <div>{children}</div>
            <input type={type} onChange={handleChange}></input>
        </div>
    )
}

export default Input