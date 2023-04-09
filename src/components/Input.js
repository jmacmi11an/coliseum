function Input({ children, type, value, handleInput, ...rest }){
    
    const handleChange = (event) => {
        handleInput(event.target.value);
    }

    return (
        <div>
            <div>{children}</div>
            <input type={type} {...rest} onChange={handleChange} value={value}/>
        </div>
    )
}

export default Input