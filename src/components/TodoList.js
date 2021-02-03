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
            <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Listitem
                    id={item.id}
                    name={item.name}
                    isDone={item.isDone}
                    onDone={this.onDone}
                    onDelete={this.onDelete}
                    />
                </div>
                )}
            </Draggable>

        ));
        
        return (
            <Droppable droppableId="droppable-1">
                {(provided) => (
                    <div className="ui raised padded container segment" ref={provided.innerRef} {...provided.droppableProps}>
                        {listitems}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}

export default TodoList;