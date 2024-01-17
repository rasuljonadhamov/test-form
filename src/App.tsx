import { useState } from "react";
import BookList from "./components/Main";
import Navbar from "./components/Navbar";

const sampleBooks = [
  {
    title: "The Catcher in the Rye",
    pages: 224,
    publishedAt: "1951-07-16",
  },
  {
    title: "To Kill a Mockingbird",
    pages: 281,
    publishedAt: "1960-07-11",
  },
  {
    title: "1984",
    pages: 328,
    publishedAt: "1949-06-08",
  },
  {
    title: "The Great Gatsby",
    pages: 180,
    publishedAt: "1925-04-10",
  },
  {
    title: "The Hobbit",
    pages: 310,
    publishedAt: "1937-09-21",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    pages: 320,
    publishedAt: "1997-06-26",
  },
  {
    title: "The Lord of the Rings",
    pages: 1178,
    publishedAt: "1954-07-29",
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    publishedAt: "1813-01-28",
  },
  {
    title: "The Shining",
    pages: 447,
    publishedAt: "1977-01-28",
  },
  {
    title: "The Da Vinci Code",
    pages: 454,
    publishedAt: "2003-03-18",
  },
];

function App() {
  const [books, setBooks] = useState(sampleBooks);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <Navbar />
      <BookList books={books} onAddBook={handleAddBook} />
    </div>
  );
}

export default App;
