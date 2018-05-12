import React, {Component} from 'react';

class AddGoal extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }
    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input type="text"
                            placeholder="Add a goal"
                            className="form-control"
                            style={{marginRight:'5px'}}/>
                    <button
                            className="btn btn-success"
                            type="button">
                            Submit
                    </button>
                </div>
            </div>
        )
    }
}


export default AddGoal;