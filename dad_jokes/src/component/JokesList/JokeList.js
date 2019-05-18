import React, { Component } from 'react';
import axios from 'axios';
import styles from './JokeList.module.css';
import Joke from '../Joke/Joke';
import uuid from 'uuid/v4'

class JokeList extends Component{
    static defaultProps = {
        numJokesToGet: 10,
    }

    constructor(props){
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]"),
            loading: false,
        }
    }

    async getJokes(){
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com", {headers: {Accept :"application/json"}});
            // console.log(res.data.joke);
            jokes.push({id: uuid(), text: res.data.joke, votes: 0});
        }
        this.setState(st => ({
            loading: false,
            jokes: [...st.jokes, ...jokes]
        }),
        () => window.localStorage.setItem('jokes' , JSON.stringify(this.state.jokes)));
        window.localStorage.setItem('jokes', JSON.stringify(jokes));

    }
     componentDidMount(){
         if (this.state.jokes.length === 0){
             this.getJokes();
         }
    }

    handleVote(id, delta){
        this.setState(st => ({
            jokes: st.jokes.map(j => 
                j.id === id ? {...j, votes: j.votes + delta} : j
            )
        }),
        () => window.localStorage.setItem('jokes' , JSON.stringify(this.state.jokes))
        );

    }

    handleClick = () => {
        this.setState({loading: true}, this.getJokes);
        // this.getJokes();
    }
    
    render (){
        if (this.state.loading){
            return (
                <div className={styles.spinner}>
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                    <h1>Loading...</h1>
                </div>
            )
        }
        let jokess = this.state.jokes.sort((a, b) => b.votes - a.votes ); 
        return (
            <div className={styles.jokelist}>
                <div className={styles.sidebar}>
                    <h1 className={styles.title}><span className={styles.dad}>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="x"/>
                    <button className={styles.button} onClick={this.handleClick}>Get More</button>
                </div>
                <div className={styles.jokes}>
                    {jokess.map((joke) => (
                        <Joke key={joke.id} votes={joke.votes} text={joke.text}
                        upvote={() => this.handleVote(joke.id, 1)}
                        downvote={() => this.handleVote(joke.id, -1)}/>
                    ))}

                </div>
            </div>
        );
    }
}

export default JokeList;