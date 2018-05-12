import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from "../firebase";

class App extends Component{
    signOut(){
        firebaseApp.auth().signOut();
    }
   render() {
       return (
           <div>
               <h3>Goals</h3>
               <div>Add goal</div>
               <div>Goal list</div>
            <button
                className="btn btn-danger"
                onClick={()=>this.signOut()}>
            Sign Out
            </button>
           </div>
       )
   }
}
function mapStateToProps(state) {
    console.log('state',state);
    return{};
}


export default connect (mapStateToProps, null)(App);