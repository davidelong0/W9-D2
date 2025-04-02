
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import SingleBook from './components/SingleBook';
import onebook from './data/fantasy.json';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />

      <SingleBook book={onebook[0]} /> 

      <BookList books={onebook} />  
      
      <MyFooter />
    </>
  );
}

export default App;

