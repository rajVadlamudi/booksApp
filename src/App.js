import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Book from "./book.js";
import Pagination from 'react-bootstrap/lib/Pagination';


class App extends Component {

  constructor(){
    super();
    this.state = {
      booksList: [],
      total: 0,
      currentPage: 1,
      booksPerPage: 5,
      search:''
    }


    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){

    this.setState({
          currentPage: Number(event.target.id)
        });

  }

  updateSearch(event){

    this.setState({search: event.target.value.substr(0, 20)});
    console.log(this.state.search)
  }

  bookRender(arg){
    const result = arg.map((book) => {
           return (<Book 
                        author={book.book_author} 
                        title={book.book_title} 
                        year={book.book_publication_year} 
                        country={book.book_publication_country} 
                        city={book.book_publication_city} 
                        key={book.id}>{book.book_pages}
                        </Book>)
    });

    return result;
  }

  componentDidMount(){
     console.log("Hello Success!!");
    
    axios
      .post("http://nyx.vima.ekt.gr:3000/api/books/?page=1")
      .then(response => this.setState({total: response.data.count, booksList: response.data.books}))
  }

  render() {
    

    const { booksList, currentPage, booksPerPage } = this.state;

        /* Logic for displaying books in the current page */
        const indexOfLastBook = currentPage * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentBooks = booksList.slice(indexOfFirstBook, indexOfLastBook);

        let renderBooks = this.bookRender(currentBooks);

        /*Filter books by Publication year entered in the search box */
        if(this.state.search != '')
        {
          const filteredBooks = currentBooks.filter((book) => {
                return book.book_publication_year ==  this.state.search
          });
          renderBooks = this.bookRender(filteredBooks);  
        }
        

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(booksList.length / booksPerPage); i++) {
          pageNumbers.push(i);
        }
        

        //let active = 1;
        let items = [];
        for (let number = 1; number <= pageNumbers.length; number++) {
          items.push(
            <Pagination.Item active={number === currentPage}  id={number} onClick={this.handleClick} >{number}</Pagination.Item>
          );
        }

        //Set Pagination buttons size
        const paginationBasic = (
          <div>            
            <Pagination bsSize="small">{items}</Pagination>
          </div>
        );


        return (
          <div>
          {/* Displays Title */}
            <h1 align="center" className='App-title'>Books Listing!!!</h1>

          {/* Displays page numbers with default page1 active, uses react-bootstrap paginator component */}
            {paginationBasic}
          
          {/*Displays the search box */}
            <div align="center">
              <input  type="text" placeholder="Search:Publication Year.."
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </div>
            <br />
            <br />

            {/* Displays the books information, uses react-bootstrap GroupList component */}
            <ul>
              {renderBooks}
            </ul>
            
            {/* Displays (currentpageNumber/totalPages) */}
            <p align="center">Page:{this.state.currentPage}/{pageNumbers.length} </p>
          </div>
        );
  }
}

export default App;
