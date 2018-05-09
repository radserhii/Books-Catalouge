import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddBookModal from './AddBookModal';
import AddAuthorModal from './AddAuthorModal';
import AddPublicationModal from './AddPublicationModal';

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            modalBook: false,
            modalAuthor: false,
            modalPublication: false,
            image: null
            // error: false
        };

        this.modalBookOpen = this.modalBookOpen.bind(this);
        this.modalBookClose = this.modalBookClose.bind(this);
        this.modalAuthorOpen = this.modalAuthorOpen.bind(this);
        this.modalAuthorClose = this.modalAuthorClose.bind(this);
        this.modalPublicationOpen = this.modalPublicationOpen.bind(this);
        this.modalPublicationClose = this.modalPublicationClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.imageChangedHandler = this.imageChangedHandler.bind(this);
        this.uploadImageHandler = this.uploadImageHandler.bind(this);
    }

    componentDidMount() {
        axios.get('/api/books')
            .then(response => {
                this.setState({books: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    modalBookOpen() {
        this.setState({modalBook: true});
    }

    modalBookClose() {
        this.setState({modalBook: false});
        this.componentDidMount();
    }

    modalAuthorOpen() {
        this.setState({modalAuthor: true});
    }

    modalAuthorClose() {
        this.setState({modalAuthor: false});
    }

    modalPublicationOpen() {
        this.setState({modalPublication: true});
    }

    modalPublicationClose() {
        this.setState({modalPublication: false});
    }

    handleDelete(id) {
        confirm("Are you sure? Book will be delete!");

        axios.delete(`/api/book/${id}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        setTimeout(() => {
            this.componentDidMount();
        }, 1000);
    }

    // Upload Image
    imageChangedHandler(event) {
        this.setState({image: event.target.files[0]});
    }

    uploadImageHandler(id) {
        let formData = new FormData();
        let imageFile = this.state.image;
        formData.append('image', imageFile);
        axios.post(`/api/book_img/${id}`, formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            this.componentDidMount();
        }, 1000);

    }

    render() {

        const listBooks = this.state.books.map((book, index) =>

            <li className="list-group-item" key={index}>
                <div className="row">
                    {book.image ?
                        <div className="col-sm-2"><img src={book.image} className="img-thumbnail" width="100px"/>
                        </div> : null}

                    <div className="col-sm-6">
                        <b>ID:</b> {book.id}&nbsp;|&nbsp;
                        <b>Title:</b> {book.title}&nbsp;|&nbsp;
                        {book.author ? <span><b>Author:</b> {book.author.name} &nbsp;|&nbsp;</span> : null}
                        {book.publication ?
                            <span><b>Publishing house:</b> {book.publication.name}&nbsp;|&nbsp;</span> : null}
                        <b>Published at:</b> {book.published_at}<br/>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.handleDelete(book.id)}>Delete
                        </button>
                    </div>
                    <div className="col-sm-4">
                        <p>Upload image for book:</p>
                        <input type="file" onChange={this.imageChangedHandler}/>
                        <button
                            className="btn btn-success"
                            onClick={() => this.uploadImageHandler(book.id)}>Upload
                        </button>
                    </div>
                </div>
            </li>
        );


        if (this.state.modalBook) return <AddBookModal modalBookClose={this.modalBookClose}/>;
        if (this.state.modalAuthor) return <AddAuthorModal modalAuthorClose={this.modalAuthorClose}/>;
        if (this.state.modalPublication) return <AddPublicationModal
            modalPublicationClose={this.modalPublicationClose}/>;

        return (
            <div>
                <button
                    className="btn btn-warning"
                    onClick={this.modalBookOpen}>Add Book
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.modalAuthorOpen}>Add Author
                </button>
                <button
                    className="btn btn-success"
                    onClick={this.modalPublicationOpen}>Add Publishing House
                </button>
                <ul className="list-group list-group-flush">{listBooks}</ul>
            </div>
        );

    }
}

if (document.getElementById('book')) {
    ReactDOM.render(<Book/>, document.getElementById('book'));
}
