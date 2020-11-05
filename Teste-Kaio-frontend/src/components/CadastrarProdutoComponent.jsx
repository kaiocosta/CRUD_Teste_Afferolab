import React, { Component } from 'react';
import ProdutoService from '../services/ProdutoService';

class CadastrarProdutoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nome: '',
      descricao: '',
      quantidade: '',
      categoria: ''
    }

    this.changeNomeHandler = this.changeNomeHandler.bind(this);
    this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
    this.changeQuantidadeHandler = this.changeQuantidadeHandler.bind(this);
    this.changeCategoriaHandler = this.changeCategoriaHandler.bind(this);
    this.salvarOuAtualizarProduto = this.salvarOuAtualizarProduto.bind(this);
  }

  componentDidMount(){

    if(this.state === '_cad'){
      return
    }else{
      ProdutoService.getProdutosById(this.state.id).then((res) => {
        let produto = res.data;
        this.setState({nome: produto.nome,
         descricao: produto.descricao,
         quantidade: produto.quantidade,
         categoria: produto.categoria
       });
      });
    }
     
  }

  salvarOuAtualizarProduto = (e) => {
    e.preventDefault();
    let produto = {
      nome: this.state.nome,
      descricao: this.state.descricao,
      quantidade: this.state.quantidade,
      categoria: this.state.categoria
    };
    console.log('produto => ' + JSON.stringify(produto));

    if (this.state.id === '_cad') {
    ProdutoService.cadastrarProduto(produto).then((res) => {
      this.props.history.push('/produtos');
    });
    } else {
      ProdutoService.editarProduto(produto, this.state.id).then((res) => {
        this.props.history.push('/produtos');
      });
    }
  };

  changeNomeHandler = (event) => {
    this.setState({ nome: event.target.value });
  };

  changeDescricaoHandler = (event) => {
    this.setState({ descricao: event.target.value });
  };

  changeQuantidadeHandler = (event) => {
    this.setState({ quantidade: event.target.value });
  };

  changeCategoriaHandler = (event) => {
    this.setState({ categoria: event.target.value });
  };

  cancelar() {
    this.props.history.push('/produtos');
  }
  getTitle(){
    if(this.state.id === '_cad'){
        return <h3 className="text-center">Criar Produto</h3>
    }else{
        return <h3 className="text-center">Editar Produto</h3>
    }
}
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Nome </label>
                    <input
                      placeholder="Nome"
                      name="nome"
                      className="form-control"
                      value={this.state.nome}
                      onChange={this.changeNomeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Descrição: </label>
                    <input
                      placeholder="Descrição"
                      name="descricao"
                      className="form-control"
                      value={this.state.descricao}
                      onChange={this.changeDescricaoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Quantidade: </label>
                    <input
                      placeholder="Quantidade"
                      name="quantidade"
                      className="form-control"
                      value={this.state.quantidade}
                      onChange={this.changeQuantidadeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Categoria: </label>
                    <input
                      placeholder="Categoria"
                      name="categoria"
                      className="form-control"
                      value={this.state.categoria}
                      onChange={this.changeCategoriaHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.salvarOuAtualizarProduto}
                  >
                    Salvar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancelar.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    {' '}
                    Cancelar{' '}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CadastrarProdutoComponent;
