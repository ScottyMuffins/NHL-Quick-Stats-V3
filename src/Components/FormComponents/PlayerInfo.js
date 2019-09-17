import React from 'react';
import {Media, ListGroup, ListGroupItem } from 'reactstrap'

// Maximum size of headshot is 336x336. 168x168 is default for display on applications

const PlayerInfo = (props) => {

    return(
        <div className='player__info__container no__select' >
            {props.playerData &&
                <div>
                    <div className="player__info__header">
                        <Media style={{maxWidth: '500px', margin: '0 auto'}}>
                            <Media left top href="#">
                                <Media src={'https://nhl.bamcontent.com/images/headshots/current/168x168/'+props.playerData.id+'@2x.jpg'} alt="Must be a young hopeful ¯\_(ツ)_/¯" className='player__Headshot'/>
                            </Media>
                            <Media className='player__meta__list' body style={{display: 'inline'}}>
                                <Media heading>
                                    {props.playerData.firstName} {props.playerData.lastName}
                                </Media>
                                Age: {props.playerData.currentAge}
                                <br/>
                                Country: {props.playerData.nationality}
                                <br/>
                                Current Team: {props.playerData.currentTeam.name}
                            </Media>
                        </Media>
                    </div>
                    <ListGroup className='player__info__list'>
                        <ListGroupItem>Number: {props.playerData.primaryNumber}</ListGroupItem>
                        <ListGroupItem>Position: {props.playerData.primaryPosition.name}</ListGroupItem>
                        <ListGroupItem>Height: {props.playerData.height}</ListGroupItem>
                        <ListGroupItem>Weight: {props.playerData.weight}</ListGroupItem>
                        <ListGroupItem>{props.playerData.primaryPosition.name === 'Goalie' ? 'Catches: ' + props.playerData.shootsCatches : 'Shoots: ' + props.playerData.shootsCatches }</ListGroupItem>
                    </ListGroup>
                </div>
            }
        </div>
    );
}

export default PlayerInfo;