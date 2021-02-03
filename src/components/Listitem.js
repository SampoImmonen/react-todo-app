import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Listitem extends Component {

    handleDone = () => {
        console.log(this.props.id);
        this.props.onDone(this.props.id);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {

        
        if (this.props.isDone){
 
            return (
                <div className="ui purple raised text segment">
                    {this.props.name}
                    <i className="check circle icon" onClick={this.handleDone}></i>
                    <i className="delete icon" onClick={this.handleDelete}></i>
                </div>
            );
        }
        else{
            return(
                <div className="ui text segment">
                    {this.props.name}
                    <i className="circle outline icon" onClick={this.handleDone}></i>
                    <i className="delete icon" onClick={this.handleDelete}></i>
                </div>
                
            );
        }
    }
}

export default Listitem;