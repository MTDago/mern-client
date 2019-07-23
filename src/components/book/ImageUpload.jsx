import React, { Component } from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        // Defined in state
        this.state = {
            widget: window.cloudinary.createUploadWidget(
                {
                    cloudName: 'dfl9d6nrt',
                    uploadPreset: 'my_preset'
                },
                (error, result) => {
                    if (!error && result && result.event === 'success') {
                        console.log(
                            'Done! Here is the image info: ',
                            result.info
                        );
                    }
                }
            )
        };
        // Defined as local variable
        this.widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'yeetus',
                uploadPreset: 'unsigned_yeets'
            },
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    console.log('Done! Here is the image info: ', result.info);
                }
            }
        );
    }
    showWidget = () => {
        this.widget.open();
    };

    checkUploadResult = resultEvent => {
        if (resultEvent.event === 'success') {
            console.log(resultEvent);
        }
    };
    render() {
        return (
            <div className="columns is-mobile is-centered">
                <button
                    className="button is-rounded is-centered"
                    onClick={this.showWidget}
                >
                    {' '}
                    Upload file
                </button>
            </div>
        );
    }
}

export default ImageUpload;
