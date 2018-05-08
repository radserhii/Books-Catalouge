import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddAuthorModal from './AddAuthorModal';
import AddPublicationModal from './AddPublicationModal';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            modalAuthor: false,
            modalPublication: false,
            // error: false
        };
        // this.handleDateSearch = this.handleDateSearch.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.modalAuthorOpen = this.modalAuthorOpen.bind(this);
        this.modalAuthorClose = this.modalAuthorClose.bind(this);
        this.modalPublicationOpen = this.modalPublicationOpen.bind(this);
        this.modalPublicationClose = this.modalPublicationClose.bind(this);
        // this.updateStateFromStore = this.updateStateFromStore.bind(this);
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

    // handleDateSearch() {
    //     if (!this.refs.dateStart.value || !this.refs.dateEnd.value) {
    //         this.setState({error: true});
    //         return null;
    //     }
    //
    //     this.setState({error: false});
    //
    //     axios.get(`/api/operations/${this.refs.dateStart.value}/${this.refs.dateEnd.value}`)
    //         .then(response => {
    //             this.setState({operations: response.data});
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    // handleEdit(id) {
    //     window.location.pathname = `api/operation/${id}/edit`;
    // }

    handleDelete(id) {
        confirm("Are you sure? Book will be delete!");

        axios.delete(`/api/books/${id}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        this.componentDidMount();
    }

    // // Update list operations after store new operation
    // updateStateFromStore(operation) {
    //     // this.setState({operations: [operation, ...this.state.operations]});
    //     this.componentDidMount();
    // }

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


        if (this.state.modalAuthor) return <AddAuthorModal modalAuthorClose={this.modalAuthorClose}/>;
        if (this.state.modalPublication) return <AddPublicationModal modalPublicationClose={this.modalPublicationClose}/>;

        return (
            <div>
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
