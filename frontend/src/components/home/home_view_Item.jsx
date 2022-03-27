import React from "react";
import { Link } from "react-router-dom";

class HomeItem extends React.Component{
    constructor(props){
        super(props);
       
    }
    tabSelect(field){
        this.props.tabSelect(field)
    }

    


    render(){
        let that = this;
       switch(this.props.tab){
            case "Nearby":
                
                return (
                <div> 
                    nearby
                    <span>{this.props.location._id}</span>
                    <span>{this.props.location.title}</span>
                    <span>{this.props.location.author}</span>
                </div>)
                break            
            case "Friends":
                    
                return (

                <div key={this.props.friend._id}>
                     friends
                    <span>{this.props.friend._id}</span>
                    <span>{this.props.friend.username}</span>
                </div>)
                break
            case "Following":
                return (
                <div> You are in the following Section
                    <span>{this.props.friend._id}</span>
                    <span>{this.props.friend.username}</span>
                </div>)
                break
            default:
                
                let key = this.props.friend? this.props.friend_id:
                            this.props.location? this.props.location_id : "temp"
                return <div key={key}>No Data</div>
        }
    }
}

export default HomeItem;