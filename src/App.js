import React from 'react';
import Title from './Title';
import Search from './Search';
import Filter from './Filter';
import List from './List';

class App extends React.Component {
  state = {
    searchTerm: "",
    filter: "partial",
    type: "all",
    results:[]
  }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  updateType = (type) => {
    this.setState({
      type: type
    })
  }

  getBooks = () => {
    //const key = 'AIzaSyCsbCxl60M3lLdVQrlpl2xmwpX8qmjv0C8'  
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.type}&filter=${this.state.filter}&key=AIzaSyCsbCxl60M3lLdVQrlpl2xmwpX8qmjv0C8`
    

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({
        results: data.items
      })
      console.log(data)
    })
    .catch(error => {
      alert("Ops! Something went wrong!")
    })
  }

  render(){
    return (
      <>
        <Title/>
        <Search
        search={this.updateSearchTerm}
        getBooks={this.getBooks}
        />
        <Filter
        filter={this.updateFilter}
        type={this.updateType}
        />
        <List
        books={this.state.results}
        />
      </>
    )
  }
}

export default App;
