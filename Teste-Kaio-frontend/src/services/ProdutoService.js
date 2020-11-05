import axios from 'axios';

const PRODUTO_API_BASE_URL = 'http://localhost:8080/api/v1/produtos';

class ProdutoService {
  getProdutos() {
    return axios.get(PRODUTO_API_BASE_URL);
  }

  cadastrarProduto(produto) {
    return axios.post(PRODUTO_API_BASE_URL, produto);
  }

  getProdutosById(produtoId) {
    return axios.get(PRODUTO_API_BASE_URL + '/' + produtoId);
  }
  editarProduto(produto, produtoId){
    return axios.put(PRODUTO_API_BASE_URL + '/' + produtoId, produto);
  }

  apagarProduto(produtoId){
    return axios.delete(PRODUTO_API_BASE_URL + '/' + produtoId);
  }
}

export default new ProdutoService();
