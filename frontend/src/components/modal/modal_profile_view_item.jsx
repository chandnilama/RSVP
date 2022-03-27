import React from "react";
import { Link } from "react-router-dom";

class ProfileItem extends React.Component{
    

    render(){
        return(
             <div className="profile-item-container">
                <div>Link to Project</div>
                  
                <div className="profile-edit-delete">
                    <div>Edit</div>
                    <div>Delete</div>
                </div>
                
              
            </div>
        )
    }
}

export default ProfileItem;


// import React from "react";
// import { Link } from "react-router-dom";

// class ProfileItem extends React.Component{
    

//     render(){
//         return(
//              <div className="profile-item-container">
//                 <div><Link to={`/projects/${this.props.project.id}`}>{this.props.project.title}</Link></div>
                  
//                 <div className="profile-edit-delete">
//                     <div><Link to={`/projects/${this.props.project.id}/edit`}>Edit</Link></div>
//                     <div><button onClick={this.props.removeProject}><Link to={`/`}>Delete</Link></button></div>
//                 </div>
                
              
//             </div>
//         )
//     }
// }

// export default ProfileItem;