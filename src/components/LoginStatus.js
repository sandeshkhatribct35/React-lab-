import React, { useState } from 'react';

function LoginStatus() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const toggleLogin = () => {   setIsLoggedIn(!isLoggedIn); };

    return (
        <div>
            <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>
            {isLoggedIn && <p>You have 3 new messages.</p>}

            {isLoggedIn && <p>Log in to see your messages</p>}
            <button onClick = {toggleLogin}>{isLoggedIn ? "Log out" : "Log in"}</button>
        </div>
    );


}
export default LoginStatus;