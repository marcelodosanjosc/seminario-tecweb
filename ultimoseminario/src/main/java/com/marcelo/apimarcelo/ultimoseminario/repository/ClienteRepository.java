package com.marcelo.apimarcelo.ultimoseminario.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.apimarcelo.ultimoseminario.entities.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {

	
}
