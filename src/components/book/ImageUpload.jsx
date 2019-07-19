// import React from 'react';

// export default class ImageUpload extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {file: '',imagePreviewUrl: ''};
//     }
  
//     _handleSubmit(e) {
//       e.preventDefault();
//       // TODO: do something with -> this.state.file
//       console.log('handle uploading-', this.state.file);
//     }
  
//     _handleImageChange(e) {
//       e.preventDefault();
  
//       let reader = new FileReader();
//       let file = e.target.files[0];
  
//       reader.onloadend = () => {
//         this.setState({
//           file: file,
//           imagePreviewUrl: reader.result
//         });
//       }
  
//       reader.readAsDataURL(file)
//     }
  
//     render() {
//       let {imagePreviewUrl} = this.state;
//       let imagePreview = null;
//       if (imagePreviewUrl) {
//         imagePreview = (<img src={imagePreviewUrl} />);
//       } else {
//         imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//       }
  
//       return (
//         <div className="previewComponent">
//           <form onSubmit={(e)=>this._handleSubmit(e)}>
//             <input className="fileInput" 
//               type="file" 
//               onChange={(e)=>this._handleImageChange(e)} />
//             <button className="submitButton" 
//               type="submit" 
//               onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
//           </form>
//           <div className="imgPreview">
//             {imagePreview}
//           </div>
//         </div>
//       )
//     }
//   }
    
import React from 'react'
import axios from 'axios';

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                console.log(response)
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="image" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ImageUpload
