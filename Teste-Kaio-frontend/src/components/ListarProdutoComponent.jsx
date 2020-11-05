/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from 'react';
import ProdutoService from '../services/ProdutoService';

class ListarProdutoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produtos: [],
    };

    this.cadProduto = this.cadProduto.bind(this);
    this.editarProduto = this.editarProduto.bind(this);
    this.apagarProduto = this.apagarProduto.bind(this);
  }

  detalheProduto(id){
    this.props.history.push(`/detalhe-produtos/${id}`);
  }

  apagarProduto(id){
    ProdutoService.apagarProduto(id).then( res => {
      this.setState({produtos: this.state.produtos.filter(produto => produto.id !== id)});
  });
  }

  editarProduto(id) {
    this.props.history.push(`/cad-produtos/${id}`);
  }

  componentDidMount() {
    ProdutoService.getProdutos().then((res) => {
      this.setState({ produtos: res.data });
    });
  }

  cadProduto() {
    this.props.history.push('/cad-produtos/_cad');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Produtos em estoque</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.cadProduto}>
            Cadastrar Produto
          </button>
        </div>
        <br></br>
        <div className="row">
        <table className = "table table-striped table-bordered">

          <thead>
              <tr>
                  <th> Nome</th>
                  <th> Descrição</th>
                  <th> Quantidade</th>
                  <th> Categoria</th>
                  <th> Ações</th>
              </tr>
          </thead>
          <tbody>
              {
                  this.state.produtos.map(
                      produto => 
                      <tr key = {produto.id}>
                          <td> { produto.nome} </td>   
                          <td> {produto.descricao}</td>
                          <td> {produto.quantidade}</td>
                          <td> {produto.categoria}</td>
                          <td>
                              <button onClick={ () => this.editarProduto(produto.id)} className="btn btn-info">Editar </button>
                              <button style={{marginLeft: "10px"}} onClick={ () => this.apagarProduto(produto.id)} className="btn btn-danger">Apagar </button>
                              <button style={{marginLeft: "10px"}} onClick={ () => this.detalheProduto(produto.id)} className="btn btn-info">Detalhes </button>
                          </td>
                      </tr>
                  )
              }
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListarProdutoComponent;
