import React, {Component} from 'react';

export default class AddBookModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            publications: [],
            error: false
        };
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        axios.get('/api/authors')
            .then(response => {
                this.setState({authors: response.data});
            })
            .catch(error => {
                console.log(error);
            });
        axios.get('/api/publications')
            .then(response => {
                this.setState({publications: response.data});
            })
            .catch(error => {
                console.log(error);
            });

    }

    handleSave() {

        if (!this.refs.titleBook.value || !this.refs.publishedBook.value) {
            this.setState({error: true});
            return null;
        }
        this.setState({error: false});

        axios.post('/api/book', {
            title: this.refs.titleBook.value,
            author_id: this.refs.authorBook.value || null,
            publication_id: this.refs.publicationBook.value || null,
            published_at: this.refs.publishedBook.value
        })
            .then(response => {
                this.props.modalBookClose();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        const error = "Input title and published fields";

        const listAuthors = this.state.authors.map((author) =>
            <option key={author.id} value={author.id}>{author.name}</option>
        );

        const listPublications = this.state.publications.map((publication) =>
            <option key={publication.id} value={publication.id}>{publication.name}</option>
        );


        return (
            <div className="_modal">
                <div className="_modal-content">
                    <div className={this.state.error ? "text-danger" : ""}>{this.state.error ? error : ""}</div>
                    <h5>Add Book</h5>
                    <div className="offset-sm-2 col-sm-8">
                        Title:
                        <input
                            ref="titleBook"
                            type="text"
                            className="form-control"/>
                    </div>
                    <div className="offset-sm-2 col-sm-8">
                        Author:
                        <select
                            ref="authorBook"
                            defaultValue=""
                            className="form-control">
                            <option value=""></option>
                            {listAuthors}
                        </select>
                    </div>
                    <div className="offset-sm-2 col-sm-8">
                        Publication house:
                        <select
                            ref="publicationBook"
                            defaultValue=""
                            className="form-control">
                            <option value=""></option>
                            {listPublications}
                        </select>
                    </div>
                    <div className="offset-sm-2 col-sm-8">
                        Published at:
                        <input
                            ref="publishedBook"
                            type="date"
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
                                onClick={this.props.modalBookClose}>Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}