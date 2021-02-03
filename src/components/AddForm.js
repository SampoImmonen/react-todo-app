import React, { Component } from 'react';

class AddForm extends Component {

    state = {
        name: '',
    }

    handleNameChange = (e) => {
        //console.log(this.state.name)
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
    
        //console.log(this.state.name)
        this.props.onFormSubmit({
            name: this.state.name,
        });
        this.setState({name: ''})
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="ui form">
                    <div className=" purple field">
                        <label>
                            New item
                        </label>
                        <input type="text" value={this.state.name} name="name" onChange={this.handleNameChange} placeholder="Add item"/>
                    </div>
                    <button className="ui basic purple button icon" type="submit" value="Submit" onClick={this.handleSubmit}>
                        <i className="ui plus icon"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default AddForm;