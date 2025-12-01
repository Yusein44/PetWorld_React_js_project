import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(onRegisterSubmit, {
        email: '',
        password: '',
        confirmPassword: ''
    });

    return (
        <section id="register-page" className="auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={onChange}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={onChange}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        value={values.confirmPassword}
                        onChange={onChange}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}