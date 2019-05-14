import React, { Component } from 'react';

import styles from './Pokecard.module.css';



const POKE_API = 'https://raw.githubusercontent.com/POKEAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component{
    render (){
        let imgsrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className={styles.pokecard}>
                <h1>{this.props.name}</h1>
                <img src={imgsrc} alt={this.props.name}/>
                <p>Type: {this.props.type}</p>
                <p>EXP: {this.props.exp}</p>
            </div>
        );
    }
}

export default Pokecard;