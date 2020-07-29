import React from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utiles';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onInputChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value})
    }

    onFormSubmit = async (e) =>{
        e.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            
        } catch (error){
            console.error(error.message);
        }

        

        this.setState({
            email:'',
            password: ''
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">Already Have An Account ?</h2>
                <h3 className="sub-title">Sign In</h3>
                <form onSubmit={this.onFormSubmit}>
                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        handleInputChange={this.onInputChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        handleInputChange={this.onInputChange}
                        value={this.state.password}
                        required
                    />
                    <div className="button-group">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton isGoogleButton onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                        <CustomButton onClick={() => auth.signOut()}>Sign out</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;