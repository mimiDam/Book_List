import books from "./json/books.json";
import React, { useState } from "react";
import "./book.css";
import "./mobile.css";

function App() {
  const [book, setbook] = useState(books);
  const [letter, setletter] = useState("");
  const searchAuthor = (e) => {
    e.preventDefault();
    console.log(books);
    books.filter((data) => {
      if (letter === "") {
        return data;
      } else if (data.author.toUpperCase().includes(letter.toUpperCase())) {
        return data;
      }
    });
  };

  return (
    <>
      <div className="container blue-color">
        <div className="header">
          <h1>BOOK LIST</h1>
        </div>
        <div className="search">
          <form onSubmit={searchAuthor}>
            <input
              type="text"
              id="fname"
              name="fname"
              value={letter}
              onChange={(e) => {
                setletter(e.target.value);
              }}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="line container">
        <p>AUTHOR</p>
        <p>TITLE</p>
        <p>GENRE</p>
      </div>
      <div className="list container">
        {books
          .filter((data) => {
            if (letter === "") {
              return data;
            } else if (
              data.author.toUpperCase().includes(letter.toUpperCase())
            ) {
              return data;
            }
          })
          .sort((a, b) => {
            var authorA = a.author.toUpperCase();
            var authorB = b.author.toUpperCase();
            if (authorA < authorB) {
              return -1;
            }
            if (authorA > authorB) {
              return 1;
            }
            return 0;
          })
          .map((data) => {
            const { author, title, genre } = data;
            return (
              <>
                <div className="row">
                  <div className="author border">{author}</div>
                  <div className="author">{title}</div>
                  <div className="author">{genre}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
