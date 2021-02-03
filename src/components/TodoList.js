import React, { Component } from 'react';
import Listitem from './Listitem.js'
import { Droppable, Draggable} from 'react-beautiful-dnd';

class TodoList extends Component {
    
    onDone = (id) => {
        //console.log("lisää"+id);
        this.props.onDone(id);
    }

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render() {
        const listitems = this.props.items.map((item, index) => (
                <Listitem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isDone={item.isDone}
                    onDone={this.onDone}
                    onDelete={this.onDelete}
                />
        ));

        return (
            <div className="ui raised padded container segment">
                {listitems}
            </div>
        );
    }
}

export default TodoList;