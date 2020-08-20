import React from 'react';
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css';
import styles from './Login.module.css';

const maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            {CreateField("Email", "email", Input, [required, maxLength20])}
            {CreateField("Password", "password", Input, [required, maxLength20], {type: "password"})}
            {CreateField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);