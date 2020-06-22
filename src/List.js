import React from 'react';

class List extends React.Component {
    render(){
        const list = this.props.books.map((book) => {
            const price = book.saleInfo.saleability === "FOR_SALE" ? book.saleInfo.retailPrice.amount : "Not for Sale";
            const author = book.volumeInfo.authors === undefined ? "Author Not Found" : book.volumeInfo.authors[0]; 
            return (
                <div 
                className="book"
                key={book.id}>
                    <h2>{book.volumeInfo.title}</h2>
                    <p>
                        <img 
                        alt={`Cover of ${book.volumeInfo.title}`}
                        src={book.volumeInfo.imageLinks.thumbnail}/>
                        Author: {author}<br/>
                        Price: {price} <br/>
                        {book.volumeInfo.description}
                    </p>
                    <hr/>
                </div>
                
            )

        }) ; 


        return (
          <div>
              {list}
          </div>
        )
    }
}

export default List;