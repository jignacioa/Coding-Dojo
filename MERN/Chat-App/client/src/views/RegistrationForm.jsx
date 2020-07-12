import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

export default function RegistrationForm(){
    const [formState, setFormState]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        passwordConfirmation:''
    });
    function handleChange(e){
        const{name, value}=e.target;
        setFormState({
        ...formState,
        [name]:value
        });
    }
    function handleSubmit(e){
        e.preventDefault();

        axios.post('http://localhost:4000/api/users', formState,{withCredentials:true})
        .then(()=>navigate('/chat'))
        .catch(console.log);
    }
    return(
        <>
        <h1>Convergence</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Last Name</label>
                <input
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input
                name="email"
                value={formState.email}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input
                name="password"
                type='password'
                value={formState.password}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                name="passwordConfirmation"
                type='password'
                value={formState.passwordConfirmation}
                onChange={handleChange}/>
            </div>
            <button>Register</button>
        </form><br/>
        <button onClick = {e => navigate('/login')}>Member Login</button>
        </>
    )
}