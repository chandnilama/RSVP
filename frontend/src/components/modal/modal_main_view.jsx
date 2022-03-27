import React from "react";



import "./modal.css"
import SignUp from "../session/signup_mui";
import SignIn from "../session/signin_mui";


export default class ModalMainView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageLoaded: false
        }
        
    }


    render(){
        let modal;
        switch (this.props.modal) {
            // case 'profile':
            //     modal = <ModalProfileContainer userId={`${this.props.userId}`} closeModal={this.props.closeModal} fetchUserLocations={this.fetchUserLocations} key={this.props.modal} username={this.props.username} logout={this.props.logout}/>;
            //     break;
            case 'session-signup':
                modal = <SignUp key={this.props.modal} openModal={this.props.openModal} signup={this.props.signup} closeModal={this.props.closeModal}/>
                break
            case 'session-signin':
                modal = <SignIn key={this.props.modal} openModal={this.props.openModal} login={this.props.login} closeModal={this.props.closeModal}/>
                break
            // case 'comment':
            //     modal = <CommentForm createComment={this.props.createComment} locationId={this.props.locationId} closeModal={this.props.closeModal}/>
            //     break
            
            default:
                return null;
        }
        return(
            <div className="modal-main" onClick={this.props.closeModal} key={`main-${this.props.modal}`}>
                <div className={`${this.props.modal}-modal-container`} onClick={event => event.stopPropagation()}>
                    { modal }
                    
                </div>
            </div>
        )
    }

}