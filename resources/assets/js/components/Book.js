import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Book extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         operations: [],
    //         sum: null,
    //         error: false
    //     };
    //     this.handleDateSearch = this.handleDateSearch.bind(this);
    //     this.handleEdit = this.handleEdit.bind(this);
    //     this.handleDelete = this.handleDelete.bind(this);
    //     this.updateStateFromStore = this.updateStateFromStore.bind(this);
    // }

    // componentDidMount() {
    //     axios.get('/api/operations')
    //         .then(response => {
    //             this.setState({operations: response.data});
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

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

    // handleDelete(id) {
    //     confirm("Are you sure? Operation will be delete!");
    //
    //     axios.delete(`/api/operations/${id}`)
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //
    //     this.componentDidMount();
    // }

    // // Update list operations after store new operation
    // updateStateFromStore(operation) {
    //     // this.setState({operations: [operation, ...this.state.operations]});
    //     this.componentDidMount();
    // }

    render() {

        return (
            <p>JJ</p>
        );
    }
}

if (document.getElementById('book')) {
    ReactDOM.render(<Book/>, document.getElementById('book'));
}
