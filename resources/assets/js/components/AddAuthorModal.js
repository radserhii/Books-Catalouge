import React, {Component} from 'react';

export default class AddAuthorModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {

        console.log('Save');
        if (!this.refs.nameAuthor.value) {
            this.setState({error: true});
            return null;
        }
        this.setState({error: false});

        axios.post('/api/author', {
            name: this.refs.nameAuthor.value
        })
            .then(response => {
                this.props.modalAuthorClose();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        const error = "Input field";

        return (
            <div className="_modal">
                <div className="_modal-content">
                    <div className={this.state.error ? "text-danger" : ""}>{this.state.error ? error : ""}</div>
                    <h5>Add Author</h5>
                    <div className="offset-sm-2 col-sm-8">
                        Name:
                        <input
                            ref="nameAuthor"
                            type="text"
                            className="form-control"/>
                    </div>
                    <hr/>
                    <div>
                        <button type="button"
                                className="btn btn-primary"
                                onClick={this.handleSave}>Save
                        </button>
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={this.props.modalAuthorClose}>Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}