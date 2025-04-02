import { Container, Row, Col, Card } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {  
  if (!books || !Array.isArray(books)) {
    return <p>No books available</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.asin} md={4} lg={3} sm={6}>
            <Card className="shadow-lg border-0 rounded-4 h-100 d-flex flex-column bg-dark text-light">
              <SingleBook book={book} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
