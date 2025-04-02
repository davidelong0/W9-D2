import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.asin} md={4} lg={3} sm={6}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;

