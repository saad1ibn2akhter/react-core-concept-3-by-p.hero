import React, { useState } from 'react';

const StatefulForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        const newPassword = e.target.value;
        if (newPassword.length < 5) {
            setError('Password must be at least 5 characters long');
        } else {
            setError('');
            setPassword(newPassword);
        }
    }

    const handleEvent = e => {
        e.preventDefault();
        console.log('button clicked');
        console.log(email, password);
    }

    return (
        <div>
            <form onSubmit={handleEvent}>
                <input type="text" name="name" id="name" />
                <br />
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email" />
                <br />
                <input
                    onChange={handlePassword}
                    type="password"
                    name="password"
                    id="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;
