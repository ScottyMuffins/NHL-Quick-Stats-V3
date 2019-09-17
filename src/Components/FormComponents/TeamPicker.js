import React from 'react';
import { Col, Alert, FormGroup, Label, InputGroup, Input } from 'reactstrap';

const TeamPicker = (props) => {

    const compare = function(a,b){
        if(a.name && b.name){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
        }
        return 0;
    }

    return (
        <Col lg="6">
            {props.teams && 
                <FormGroup>
                    <Label for="teamSelect">Select an NHL Team</Label>
                    <InputGroup>
                        <Input type="select" name="teamSelect" id='teamSelect' onChange={props.getRoster}>
                            {props.teams.sort(compare).map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
                        </Input>
                    </InputGroup>
                </FormGroup>
            }
            {props.error && 
                <Alert className='teamPicker__Warning' color='danger'>
                    {props.error}
                </Alert>
            }
        </Col>
    );
}

export default TeamPicker;