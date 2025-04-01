import { Alert, Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-4">
      <Alert variant="danger">
        <h1>Benvenuto su EpiBooks!</h1>
        <p>Trova il tuo prossimo libro preferito!</p>
      </Alert>
    </Container>
  );
};

export default Welcome;
