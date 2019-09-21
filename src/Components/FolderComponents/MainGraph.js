import React, { Component } from 'react';

class MainGraph extends Component {

    state = {
        error: undefined
    }

    componentDidMount = async (e) => {
        try{
           
        }catch(error){
            this.setState({
                error: 'Some Error'
            }, () => console.log(this.state.error));
        }
    }

    render(){
        return (
            <div className='form__container'>
               <p>Some Dynamic Graph based on what is selected.</p>
            </div>
        );
    }
   
}

export default MainGraph;