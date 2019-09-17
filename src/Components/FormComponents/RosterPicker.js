import React from 'react';
import { Col, Alert, FormGroup, Label, InputGroup, Input } from 'reactstrap';

const RosterPicker = (props) => {

    const compare = function(a,b){
        if(a.person.fullName < b.person.fullName) return -1;
        if(a.person.fullName > b.person.fullName) return 1;
        return 0;
    }

    return (
        <Col lg="6">
            {!props.error && 
                <FormGroup>
                    <Label for="playerSelect">Select a Player</Label>
                    <InputGroup>
                        <Input type="select" name="playerSelect" id='playerSelect'onChange={props.getPlayer} enabled={!props.roster}>
                            {props.roster && props.roster.sort(compare).map((player) => <option key={player.person.id} value={player.person.id}>{player.person.fullName}</option>)}
                        </Input>
                    </InputGroup>
                </FormGroup>
            }
            {props.error && 
                <Alert className='playerPicker__Warning' color='danger'>
                    {props.error}
                </Alert>
            }
        </Col>
    );
}

export default RosterPicker;