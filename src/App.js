import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utiles';

import './App.css';
const HomePage = () => (
    <div>
        <h1>HomePage</h1>
        <Link to="/signIn">Sign In</Link>
    </div>
);
class App extends React.Component {
    state = {
        currentUser: {
            displayName: '',
            email: '',
            id: ''
        }
    }
    unsubscribeFromAuth = null
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if(user){
                const userRef = await createUserProfileDocument(user);
                
                userRef.onSnapshot((userAuth)=> {
                    
                        const {displayName, email, id} = userAuth.data();
                        
                        this.setState({
                            currentUser: {
                                displayName,
                                email,
                                id
                            }
                        });
                        console.log(this.state.currentUser);
                       
                    
                    
                });
            } else {this.setState({currentUser: user})}
            console.log(this.state.currenUser);
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render(){
        return(
            <BrowserRouter>
                <Header user={this.state.currentUser} />
                <Route path="/" exact component={HomePage} />
                <Route path="/signIn" component={SignInAndSignUp} />
            </BrowserRouter>
            
        );
    }
}

export default App;