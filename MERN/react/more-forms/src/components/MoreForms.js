import React, {useState} from 'react'


const MoreForms = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwconfirmation, setConfirmation] = useState('')
    const [submission, setSubmission] = useState(false)
    const [firstnameError, setFirstnameerror] = useState('')
    const [lastnameError, setLastnameerror] = useState('')
    const [emailError, setEmailerror] = useState('')
    const [passwordError, setPassworderror] = useState('')

    const handleClick = e => {
        e.preventDefault()
        const newUser = {firstname, lastname, email, password, pwconfirmation}
        console.log(newUser)
        setSubmission(true)
    }
    
    const handleFirstname = e => {
        setFirstname(e.target.value);
        if(e.target.value.length<2 && e.target.value.length > 0) {
            setFirstnameerror('First name must be at least 2 characters')
        } else {
            setFirstnameerror('')
        }
    }
    const handleLastname = e => {
        setLastname(e.target.value);
        if(e.target.value.length<2 && e.target.value.length > 0) {
            setLastnameerror('Last name must be at least 2 characters')
        } else {
            setLastnameerror('')
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if(e.target.value.length<5 && e.target.value.length > 0 ) {
            setEmailerror('Email must be at least 5 characters')
        } else {
            setEmailerror('')
        }
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        if(e.target.value.length<8 && e.target.value.length > 0) {
            setPassworderror('Password must be at least 8 characters')
        } else {
            setPassworderror('')
        }
    }

    const handleConfirmation = e => {
        setConfirmation(e.target.value)
        if(e.target.value !== password) {
            setPassworderror('Passwords do not match')
        } else {
            setPassworderror('')
        }
    }


    return (
        <>
        {
            submission?
            <h1>Thank you for submission</h1>:
            <h1>Please submit the form</h1>
        }
        <form onSubmit = {handleClick}>
            <div>
                <label>First Name</label>
                <input type='text' onChange ={handleFirstname}/>
                {firstnameError?
                    <p>{firstnameError}</p>: ''
                }
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' onChange= {handleLastname}/>
                {
                    lastnameError?
                        <p>{lastnameError}</p>: ''

                }
            </div>
            <div>
                <label>Email</label>
                <input type='text' onChange= {handleEmail}/>
                {emailError?
                    <p>{emailError}</p>: ''
                }
            </div>
            <div>
                <label>Password</label>
                <input type='password' onChange= {handlePassword}/>
                {passwordError?
                    <p>{passwordError}</p>: ''
                }
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='password' onChange= {handleConfirmation}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{pwconfirmation}</p>

        </>
    )
}

export default MoreForms 