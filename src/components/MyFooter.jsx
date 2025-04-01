import { Container } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <Container fluid className="bg-dark text-white text-center p-3 mt-5">
      <p>&copy; {new Date().getFullYear()} EpiBooks. All rights reserved.</p>
    </Container>
  );
};

export default MyFooter;
