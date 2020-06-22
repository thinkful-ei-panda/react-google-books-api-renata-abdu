import React from 'react';

class Search extends React.Component {

    handleSearch = (event) => {
        this.props.search(event.target.value);
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.props.getBooks();
    }

    render(){
        return (
            
            
        )
    }
}

export default Search;