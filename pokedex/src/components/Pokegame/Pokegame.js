import React, { Component } from 'react';

import Pokedex from '../Pokedex/Pokedex';

class Pokegame extends Component{
    static defaultProps = {
        pokemon:[
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 92},
            {id: 1, name: 'Charmander', type: 'fire', base_experience: 42},
            {id: 16, name: 'Charmander', type: 'fire', base_experience: 121},
            {id: 21, name: 'Charmander', type: 'fire', base_experience: 122},
            {id: 51, name: 'Charmander', type: 'fire', base_experience: 462},
            {id: 22, name: 'Charmander', type: 'fire', base_experience: 362},
            {id: 33, name: 'Charmander', type: 'fire', base_experience: 262},
            {id: 12, name: 'Charmander', type: 'fire', base_experience: 162}
        ]

    }
    render (){
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand2 > hand1){
            let rand = Math.floor(Math.random() * hand2.length);
            let temp =(hand2.splice(rand, 1))[0];
            hand1.push(temp);
        }
        let exp1 = hand1.reduce((acc, elem)=> {
            return acc + elem.base_experience;
        }, 0);
        let exp2 = hand2.reduce((acc, elem)=> {
            return acc + elem.base_experience;
        }, 0);
        // console.log(exp1, exp2);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        );
    }
}

export default Pokegame;