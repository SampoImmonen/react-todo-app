import React, { Component } from 'react';
import TodoList from './TodoList.js'
import AddForm from './AddForm.js'

import { DragDropContext } from 'react-beautiful-dnd';


class EditableTodoList extends Component {

    state = {
        items: [
            {
                id:1,
                name:'react',
                isDone: false,
            },
            {
                id:2,
                name:'Einstein',
                isDone: true,
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
            id: Math.floor(Math.random() * 10),
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

    render() {
        
        return (
            <div className="ui center aligned container">
                <h1>Things to do</h1>
                <DragDropContext onDragEnd= {() => {}}>
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