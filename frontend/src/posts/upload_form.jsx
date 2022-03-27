import timespan from 'jsonwebtoken/lib/timespan';
import React from 'react';


class UploadForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: null,
            description: '',
            images: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fileSelected = this.fileSelected.bind(this)
    }

    handleSubmit(){
        this.props.uploadImage(this.state.file,this.state.description)
    }
    fileSelected = event => {
        const file = event.target.files[0]
        this.setState({file: file})
    }
    

    render(){
       
        // debugger
        return(
             <div className="uploadImage">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.fileSelected} type="file" accept="image/*"></input>
                    <input value={this.state.description} onChange={e => this.setState({description:e.target.value})} type="text"></input>
                    <button type="submit">Submit</button>

                </form>
                
                <img src="https://pichaven.s3.us-east-2.amazonaws.com/4e021652c050eff988351afc9ad4f89d" alt="Logo" />


                { this.state.images.map( image => (
                    <div key={image}>
                    <img src={image}></img>
                    </div>
                ))}

                

            </div>
        )
        
    }
}

export default UploadForm;