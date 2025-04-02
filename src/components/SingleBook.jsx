import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";
import '../assets/SingleBook.css';  

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, 
    };
  }

  // Funzione per alternare lo stato "selected"
  toggleSelected = () => {
    this.setState((prevState) => {
      console.log('Current selected state:', prevState.selected);
      return { selected: !prevState.selected };
    });
  };

  render() {
    const { book } = this.props; 
    const { selected } = this.state;  

    // Usa una classe dinamica che viene applicata quando "selected" è true
    const cardClass = selected ? "selected-card" : ""; // Applica la classe "selected-card" se "selected" è true

    return (
      <Container className="mt-4">
        <Row className="g-4">
          <Card
            className={`shadow-lg border-0 rounded-4 h-100 bg-dark text-light ${cardClass}`}  // Applica la classe condizionale
            onClick={this.toggleSelected} 
          >
           
            <Card.Img
              className="w-100"
              variant="top"
              src={book.img}
              alt={book.title}
              style={{ aspectRatio: "2/3", objectFit: "contain" }}
            />

           
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
