import React, { Component } from 'react'
import ProdutoService from '../services/ProdutoService'

class DetalhesProdutoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            produto: {}
        }
    }

    componentDidMount(){
      ProdutoService.getProdutosById(this.state.id).then( res => {
            this.setState({produto: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes do Produto</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome: </label>
                            <div> { this.state.produto.nome }</div>
                        </div>
                        <div className = "row">
                            <label> Descrição: </label>
                            <div> { this.state.produto.descricao }</div>
                        </div>
                        <div className = "row">
                            <label> Quantidade: </label>
                            <div> { this.state.produto.quantidade }</div>
                        </div>
                        <div className = "row">
                            <label> Categoria: </label>
                            <div> { this.state.produto.categoria }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default DetalhesProdutoComponent