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
            // error: false
        };

        this.modalBookOpen = this.modalBookOpen.bind(this);
        this.modalBookClose = this.modalBookClose.bind(this);
        this.modalAuthorOpen = this.modalAuthorOpen.bind(this);
        this.modalAuthorClose = this.modalAuthorClose.bind(this);
        this.modalPublicationOpen = this.modalPublicationOpen.bind(this);
        this.modalPublicationClose = this.modalPublicationClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

        this.componentDidMount();
    }

    render() {

        const listBooks = this.state.books.map((book, index) =>

            <li className="list-group-item" key={index}>
                <b>ID:</b> {book.id}&nbsp;|&nbsp;
                <b>Title:</b> {book.title}&nbsp;|&nbsp;
                {book.author ? <span><b>Author:</b> {book.author.name} &nbsp;|&nbsp;</span> : null}
                {book.publication ? <span><b>Publishing house:</b> {book.publication.name}&nbsp;|&nbsp;</span> : null}
                <b>Published at:</b> {book.published_at}&nbsp;|&nbsp;
                <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(book.id)}>Delete
                </button>
            </li>
        );


        if (this.state.modalBook) return <AddBookModal modalBookClose={this.modalBookClose}/>;
        if (this.state.modalAuthor) return <AddAuthorModal modalAuthorClose={this.modalAuthorClose}/>;
        if (this.state.modalPublication) return <AddPublicationModal modalPublicationClose={this.modalPublicationClose}/>;

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
                    onClick={this.modalPublicationOpen}>Add Publication House
                </button>
                <ul className="list-group list-group-flush">{listBooks}</ul>
            </div>
        );

    }
}

if (document.getElementById('book')) {
    ReactDOM.render(<Book/>, document.getElementById('book'));
}
