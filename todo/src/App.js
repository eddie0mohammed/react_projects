import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos/Todos';
import Header from './components/Layout/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';

class App extends Component {
  state =  {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Prepare food',
        completed: false
      },
      {
        id: 3,
        title: 'Go to the gym',
        completed: true
      }
    ]
  }

  markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if (todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        })})
  }

  delItem = (id) => {
    this.setState({ todos: [...this.state.todos].filter(elem => {
      return elem.id !== id;
    })})
  }

  addTodo = (title) => {
    // console.log(title);
    let updatedTodos = [...this.state.todos];
    let id = Math.random();
    const newTodo = {id: id, title: title, completed: false};
    updatedTodos.push(newTodo);
    this.setState({todos: updatedTodos});
    
  }


  render(){
      return (
        <div className="App">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delItem={this.delItem}/>
        </div>
      );
  }
}

export default App;
