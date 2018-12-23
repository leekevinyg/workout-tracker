import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import WrapperSC from './styled/WrapperSC';
import TitleSC from './styled/TitleSC';
import SetListSC from './styled/SetListSC';
import SetListItemSC from './styled/SetListItemSC';
import FooterSC from './styled/FooterSC';
import Button from './Button';

const MAX_SETS = 7;

class ExerciseCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sets: [],
        }
        this.addSet = this.addSet.bind(this);
        this.clearSets = this.clearSets.bind(this);
    }

    addSet (event, data = { pounds: 130, reps: 10 }) {
        this.setState(state => ({
            sets: [...state.sets, data],
        }));
    }

    clearSets () {
        this.setState({
            sets: [],
        });
    }

    renderSets () {
        const { sets } = this.state;
        return sets.map((set) => {
            const { pounds, reps} = set;
            return (
                <SetListItemSC key={uuidv1()}>
                    {`${pounds} pounds, ${reps} reps`} 
                </SetListItemSC>
            );
        });
    }

    renderEmptyState () {
        return <img style={{width: '200px'}} src='http://i63.tinypic.com/jg4ck4.png'/>
    }

    render() {
        const { sets } = this.state;
        const setsLogged = sets.length > 0;
        const maxSetsReached = sets.length === MAX_SETS;

        return (
            <WrapperSC>
                <TitleSC>
                    Bicep Curl
                </TitleSC>
                <SetListSC>
                    {setsLogged ? this.renderSets() : this.renderEmptyState()}
                </SetListSC>
                <FooterSC>
                    <Button buttonAction={maxSetsReached ? this.clearSets : this.addSet} 
                            text={maxSetsReached ? 'Finish!' : 'Add Set'} />
                    {setsLogged && !maxSetsReached ? 
                        <Button buttonAction={this.clearSets} 
                                primary={false}
                                text={'Clear'} 
                        /> : 
                        null
                    }
                </FooterSC>
                
            </WrapperSC>
        );
    }
}

export default ExerciseCard;