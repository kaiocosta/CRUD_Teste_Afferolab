package com.teste.kaio.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.kaio.exception.ResourceNotFoundException;
import com.teste.kaio.Repository.ProdutoRepository;
import com.teste.kaio.model.Produto;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	//Buscar Produtos
	@GetMapping("/produtos")
	public List<Produto> getAllProdutos(){
		return produtoRepository.findAll();
	}
	
	//Adicionar Produtos
	@PostMapping("/produtos")
	public Produto cadastrarProduto(@RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
	
	// Buscar produto pela id
		@GetMapping("/produtos/{id}")
		public ResponseEntity<Produto> getProdutoById(@PathVariable Long id) {
			Produto produto = produtoRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Produto inexistente com esse código :" + id));
			return ResponseEntity.ok(produto);
	}
	
	// Atualizar produto
		
		@PutMapping("/produtos/{id}")
		public ResponseEntity<Produto> editarProduto(@PathVariable Long id, @RequestBody Produto detalhesProduto){
			Produto produto = produtoRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Produto inexistente com esse código :" + id));
			
			produto.setNome(detalhesProduto.getNome());
			produto.setDescricao(detalhesProduto.getDescricao());
			produto.setQuantidade(detalhesProduto.getQuantidade());
			produto.setCategoria(detalhesProduto.getCategoria());
			
			Produto editarProduto = produtoRepository.save(produto);
			return ResponseEntity.ok(editarProduto);
		}
		
		// Apagar produto
		@DeleteMapping("/produtos/{id}")
		public ResponseEntity<Map<String, Boolean>> apagarProduto(@PathVariable Long id){
			Produto produto = produtoRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Produto inexistente com esse código :" + id));
			
			produtoRepository.delete(produto);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
			
}
