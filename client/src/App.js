import './App.css';
import logo from './logo.jpg';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/launches';
import Launch from './components/Launch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri:"http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>  
      <div className="container">
      <img src={logo} alt="SpaceX" style={{ width:300 , display: "block", margin:"auto"}}/> 
      <Routes>
        <Route exact path="/" element={<Launches/>}/>
        <Route exact path="/launch/:flight_number" element={<Launch/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
