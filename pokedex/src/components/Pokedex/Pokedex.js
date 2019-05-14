import React, { Component } from 'react';

import styles from './Pokedex.module.css';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends Component{

    static defaultProps = {
        pokemon:[
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 92},
            {id: 1, name: 'Charmander', type: 'fire', base_experience: 42},
            {id: 16, name: 'Charmander', type: 'fire', base_experience: 121},
            {id: 21, name: 'Charmander', type: 'fire', base_experience: 122},
            {id: 51, name: 'Charmander', type: 'fire', base_experience: 462},
            {id: 22, name: 'Charmander', type: 'fire', base_experience: 362},
            {id: 33, name: 'Charmander', type: 'fire', base_experience: 262},
            {id: 44, name: 'Charmander', type: 'fire', base_experience: 162}
        ]

    }
    render (){
        return (
            <div className={styles.pokedex}>
            <p>Total EXP: {this.props.exp}</p>
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