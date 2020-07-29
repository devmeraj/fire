import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utiles';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    onInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('Password Doesn\'t match');
        }

        const userWithEmailPassword = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocument(userWithEmailPassword.user, {displayName});
    }

    render() {
        return (
            <div className="sign-up">
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={this.state.displayName}
                        handleInputChange={this.onInputChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleInputChange={this.onInputChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleInputChange={this.onInputChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        handleInputChange={this.onInputChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                    
                </form>
            </div>
        );
    }
}

export default SignUp;