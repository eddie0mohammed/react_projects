import React, { Component } from 'react';

import styles from '../AddTodo/AddTodo.module.css';

class AddTodo extends Component {
    state = {
        title: ''
    }

    changed = (e) => {
        this.setState({ [e.target.name]: e.target.value});
        // console.log(this.state.title);
    }

    submitted = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render(){
        return (
            <form  onSubmit={this.submitted}>
                <input className={styles.text}  type="text" name="title" placeholder="Add Todo..."
                onChange={this.changed} value={this.state.title}/>
                <input  className={styles.submit} type="submit" value="Submit"
               />
            </form>
        );
    }

}

export default AddTodo;