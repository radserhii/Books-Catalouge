import React, {Component} from 'react';

export default class AddPublicationModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {

        if (!this.refs.namePublication.value) {
            this.setState({error: true});
            return null;
        }
        this.setState({error: false});

        axios.post('/api/publication', {
            name: this.refs.namePublication.value
        })
            .then(response => {
                this.props.modalPublicationClose();
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
                    <h5>Add Publication House</h5>
                    <div className="offset-sm-2 col-sm-8">
                        Name:
                        <input
                            ref="namePublication"
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
                                onClick={this.props.modalPublicationClose}>Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}