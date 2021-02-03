import React from 'react'
import EditableTodoList from './components/EditableTodoList.js'

class App extends React.Component {

  render(){
    return(
      <div className="ui basic center aligned container">
        <EditableTodoList />
      </div>
    )
  }
}





export default App;
