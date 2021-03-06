import React, {Component} from 'react';
import {firebaseApp} from "../firebase";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error:{
                message: ''
            }
        }
    }

    signUp(){
        console.log('this.state', this.state);
        const {email,password}=this.state;
        firebaseApp.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error})
            });
    }
    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>SignUp</h2>
                <div className="form-group">
                    <input type="text"
                           style={{marginRight: '5px'}}
                            className="form-control"
                            placeholder="email"
                            onChange={event => this.setState({email: event.target.value})}/>
                    <input type="password"
                           style={{marginRight: '5px'}}
                            className="form-control"
                            placeholder="password"
                           onChange={event => this.setState({password: event.target.value})}/>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={()=> this.signUp()}
                        >Sign Up</button>
                </div>
                <div>
                    {this.state.error.message}
                </div>
                <div><a href="/signin">Already a user?Sign in</a></div>
            </div>
        )
    }
}

export default SignUp;