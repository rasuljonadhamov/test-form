import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";

interface Book {
  title: string;
  pages: number;
  publishedAt: string;
}

interface BookListProps {
  books: Book[];
  onAddBook: (book: Book) => void;
}

const MainSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 30px;
`;

const BookItem = styled.div`
  margin-bottom: 10px;
`;

const BookList: React.FC<BookListProps> = ({ books, onAddBook }) => {
  const [newBook, setNewBook] = useState<Book>({
    title: "",
    pages: 0,
    publishedAt: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewBook({ title: "", pages: 0, publishedAt: "" });
  };

  const handleAddBook = () => {
    if (
      newBook.title.trim() !== "" &&
      newBook.pages > 0 &&
      newBook.publishedAt.trim() !== ""
    ) {
      onAddBook(newBook);
      handleCloseModal();
    }
  };

  return (
    <MainSection>
      <Typography variant="h4">My Books</Typography>

      <BookContainer>
        {books.map((book, index) => (
          <BookItem key={index}>
            <Typography variant="h6">{book.title}</Typography>
            <Typography>Pages: {book.pages}</Typography>
            <Typography>Published At: {book.publishedAt}</Typography>
          </BookItem>
        ))}
      </BookContainer>

      <Typography variant="h6">Total Books: {books.length}</Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        style={{ marginTop: "10px" }}
      >
        Add Book
      </Button>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Add New Book</DialogTitle>
        <DialogContent>
          <TextField
            label="Book Title"
            variant="outlined"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            style={{ marginTop: "10px" }}
          />

          <TextField
            label="Pages"
            variant="outlined"
            type="number"
            value={newBook.pages}
            onChange={(e) =>
              setNewBook({ ...newBook, pages: parseInt(e.target.value, 10) })
            }
            style={{ marginTop: "10px" }}
          />

          <TextField
            label="Published At"
            variant="outlined"
            type="date"
            value={newBook.publishedAt}
            onChange={(e) =>
              setNewBook({ ...newBook, publishedAt: e.target.value })
            }
            style={{ marginTop: "10px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleAddBook}
            style={{ marginTop: "10px" }}
          >
            Add Book
          </Button>
        </DialogContent>
      </Dialog>
    </MainSection>
  );
};

export default BookList;
