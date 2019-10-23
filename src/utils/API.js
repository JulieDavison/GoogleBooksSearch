import {} from "dotenv/config";
import axios from "axios";

//API Key goes here
const BASEURL = "https://books.google.com/books?q=";
const APIKEY = process.env.APIKEY;

export default {

  // Gets all books
  getBooks: function(query) {
    console.log(BASEURL + query + APIKEY);
    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
