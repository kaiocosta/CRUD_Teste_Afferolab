/* eslint-disable react/jsx-no-undef */
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListarProdutoComponent from './components/ListarProdutoComponent';
import CadastrarProdutoComponent from './components/CadastrarProdutoComponent';
import DetalhesProdutoComponent from './components/DetalhesProdutoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListarProdutoComponent}></Route>
            <Route path="/produtos" component={ListarProdutoComponent}></Route>
            <Route path="/cad-produtos/:id" component={CadastrarProdutoComponent}></Route>
            <Route path="/detalhe-produtos/:id" component={DetalhesProdutoComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
