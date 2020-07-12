import React, {useState} from 'react'


const HookForm = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwconfirmation, setPwconfirmation] = useState('')
    
    //const 

    //const submit = onSubmit( e = event.target.value )
    const handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit is accessed')
    }

    return (
        <>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>First Name</label>
                <input type='text'  onChange = { e => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' onChange = { e => setLastname(e.target.value)}/>
            </div>
            <div>
                <label>Email</label>
                <input type='text' onChange = { e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type='text' onChange = { e => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='text' onChange = { e => setPwconfirmation(e.target.value)}/>
            </div>
            <button type ="submit">Submit</button>
        </form>
        <h2>Your Form Data</h2>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {pwconfirmation}</p>
        </>
    )
    


}

export default HookForm 