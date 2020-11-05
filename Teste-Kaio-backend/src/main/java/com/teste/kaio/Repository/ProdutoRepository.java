package com.teste.kaio.Repository;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teste.kaio.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
