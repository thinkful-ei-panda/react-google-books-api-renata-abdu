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
            <div className="searchBar">
                <form
                onSubmit={this.formSubmit}
                >
                  <label htmlFor="search">Search</label>
                  :<input 
                  onChange={this.handleSearch}
                  type="text" id="search"/>
                   <input type="submit" value="Search"/>
                </form>   
            </div>
        )
    }
}

export default Search;