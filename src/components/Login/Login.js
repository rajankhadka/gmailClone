import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";

import { auth,provider} from "../../firebase";

import { connect } from "react-redux";
import { login } from "../../redux/action/userSliceAction";

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                console.log(user);
                props.loginAction({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                });
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://images.indianexpress.com/2020/10/Gmail-new-logo.jpg"
                    alt="gmail logo"
                />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        loginAction : (data) => dispatch(login(data))
    }
}

export default connect(undefined,mapDispatchToProps)(Login);
