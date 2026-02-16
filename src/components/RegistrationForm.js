import React, { useState } from 'react';

function Registration() {
    const[formData, setFormData] = useState({
        username: '',
        email: '',
        age: ''
    });
    const handleChange = (e) => {
        setFormatData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome ${formData.username}!`);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name = "username" placeholder= "Username" value={formData.username} onChange={handleChange} />
                <input name = "email" placeholder= "Email" value={formData.email} onChange={handleChange} />
                <input name = "age" placeholder= "Age" value={formData.age} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );

}
export default RegistrationForm;