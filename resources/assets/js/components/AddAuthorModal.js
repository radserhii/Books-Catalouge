import React, {Component} from 'react';

export default class AddAuthorModal extends Component {


    render() {
        return (
            <div className="_modal">
                <div className="_modal-content">
                    <h5>Add Author</h5>
                    <div className="offset-sm-2 col-sm-8">
                        Name:
                        <input type="text" className="form-control"/>
                    </div>
                    <hr/>
                    <div>
                        <button type="button" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary"
                                onClick={this.props.modalAuthorClose}>Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}