import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from "../firebase";
import {setGoals} from "../actions";

class GoalList extends Component {
    componentDidMount(){
        goalRef.on('value',snap=>{
            let goals = [];
            snap.forEach(goal=>{
                const {email,title} = goal.val();
                goals.push({email,title});
            });
            console.log('goals',goals);
            this.props.setGoals(goals);
        });
    }
    render() {
         return (
            <div>Goal list</div>
        )
    }
}
function mapStateToProps(state) {
    const {goals} = state;
    return{
        goals
    }
}


export default connect(mapStateToProps,{setGoals})(GoalList);