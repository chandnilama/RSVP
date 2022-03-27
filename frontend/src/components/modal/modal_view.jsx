import React from "react";

import "./modal.css"

export default class ModalView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageLoaded: false
        }
        
    }
    fetchUserLocations(){
        this.props.fetchUserLocations(this.props.userId).then(response => {
            this.setState({pageLoaded: true})
        })
    }

    render(){
        if(!this.props.modal){
            
            return null;
        } 
        let component;
        switch (this.props.modal) {
            // case 'profile':
            //     component = <ModalProfileContainer userId={this.props.userId} closeModal={this.props.closeModal} fetchUserLocations={this.props.fetchUserLocations}/>;
            //     break;
            default:
                return null;
        }
        return(
            <div className="modal-main" onClick={this.props.closeModal}>
                <div className="modal-container" onClick={event => event.stopPropagation()}>
                    { component }
                    
                </div>
            </div>
        )
    }

}