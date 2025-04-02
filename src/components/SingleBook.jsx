import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";
import '../App.css'; 

class SingleBook extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      selected: false,
    };
  }

  // Funzione per alternare lo stato "selected"
  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props; 
    const { selected } = this.state; 

    return (
      <Container className="mt-4">
        <Row className="g-4">
          <Card
            className={`shadow-lg border-0 rounded-4 h-100 bg-dark text-light ${selected ? "selected" : ""}`} 
            style={{ maxWidth: "500px", cursor: "pointer" }} 
            onClick={this.toggleSelected} // Gestore evento di clic
          >
            {/* Immagine del libro */}
            <Card.Img
              className="w-100"
              variant="top"
              src={book.img}
              alt={book.title}
              style={{ aspectRatio: "2/3", objectFit: "contain" }}
            />

            {/* Corpo della Card */}
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
