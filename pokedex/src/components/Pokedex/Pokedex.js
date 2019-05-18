import React, { Component } from 'react';

import styles from './Pokedex.module.css';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends Component{

    static defaultProps = {
        pokemon:[ ]

    }
    render (){
        return (
            <div className={styles.pokedex}>
            <p>Total EXP: {this.props.exp}</p>
            <p>{this.props.isWinner ? 'WINNER' : 'LOSER' }</p>
            <h1>Pokedex</h1>
                <div className={styles.pokedex1}>
                    {this.props.pokemon.map(p => (
                        <Pokecard key={Math.random()} name={p.name} id={p.id} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            
            </div>
        );
        
    }
}

export default Pokedex;