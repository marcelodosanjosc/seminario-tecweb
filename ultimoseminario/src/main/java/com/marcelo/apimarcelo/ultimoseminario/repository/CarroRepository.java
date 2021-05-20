package com.marcelo.apimarcelo.ultimoseminario.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.apimarcelo.ultimoseminario.entities.Carro;

@Repository
public interface CarroRepository extends CrudRepository<Carro, Long> {

	
}
