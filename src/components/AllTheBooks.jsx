import { Card, Container, Row, Col } from 'react-bootstrap';
import books from '../data/fantasy.json';

const AllTheBooks = () => {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.asin} md={4} lg={3} sm={6}>
            <Card className="shadow-lg border-0 rounded-4 h-100 d-flex flex-column bg-dark text-light container-fluid img-fluid">
z
              <Card.Img 
  className="w-100" 
  variant="top" 
  src={book.img} 
  alt={book.title} 
  style={{ aspectRatio: "2/3", objectFit: "contain" }} 
/>

              {/* Corpo della card con flex per allineare il contenuto */}
              <Card.Body className="text-center flex-grow-1 d-flex flex-column text-light">
                <Card.Title className="fw-bold flex-grow-1">{book.title}</Card.Title>
                <Card.Text className="text-light">€{book.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

