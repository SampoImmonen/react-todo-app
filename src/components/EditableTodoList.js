import React, { Component } from 'react';
import TodoList from './TodoList.js'
import AddForm from './AddForm.js'

import { DragDropContext } from 'react-beautiful-dnd';


class EditableTodoList extends Component {

    state = {
        items: [
            {
                id:1,
                name:'To do Item 1',
                isDone: false,
            },
            {
                id:2,
                name:'To do Item 2',
                isDone: false,
            },
            {
                id:3,
                name:'To do Item 3',
                isDone: false,
            }
        ]
    };

    handleonDone = (id) => {
        console.log("editable"+id);
        const newItems = this.state.items.map((item) => {
            if (item.id === id){
                return Object.assign({}, item, {
                    isDone : !item.isDone
                })
            }
            else {
                return item;
            }
        })

        this.setState({
            items: newItems.sort((a,b) => a.isDone-b.isDone),
        });
    }

    handleDelete = (id) => {
        const newItems = this.state.items.filter((item) => item.id !==id)
        this.setState({items:newItems});
    }

    addItem = (item) => {
        let newitem = {
            id: Math.floor(Math.random() * 1000),
            name: item.name,
            isDone: false,
        }

        this.setState({
            items: this.state.items.concat(newitem).sort((a,b) => a.isDone - b.isDone),
        })
        console.log(this.state.items.length)
    }

    handleFormSubmit = (attrs) => {
        this.addItem(attrs);
    };

    handleDragEnd = (result) => {

        if (!result.destination) {
            return
        }

        const newitems = Array.from(this.state.items);
        const [reorderedItem] = newitems.splice(result.source.index, 1)
        newitems.splice(result.destination.index, 0, reorderedItem)
        this.setState({
            items:newitems
        })
    }

    render() {
        
        return (
            <div className="ui center aligned small segment lifted">
                <h1>Things to do</h1>
                <DragDropContext onDragEnd={this.handleDragEnd}>
                    <TodoList 
                        items={this.state.items}
                        onDone={this.handleonDone}
                        onDelete={this.handleDelete}
                    />
                </DragDropContext>

                <AddForm 
                    onFormSubmit={this.handleFormSubmit}
                />
            </div>
            
        );
    }
}

export default EditableTodoList;