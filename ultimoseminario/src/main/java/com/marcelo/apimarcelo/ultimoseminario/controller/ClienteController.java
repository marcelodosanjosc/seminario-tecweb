package com.marcelo.apimarcelo.ultimoseminario.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


import com.marcelo.apimarcelo.ultimoseminario.entities.Cliente;
import com.marcelo.apimarcelo.ultimoseminario.repository.ClienteRepository;
@Controller
public class ClienteController {

	@Autowired
	ClienteRepository clienteRepository;
	
	@GetMapping("/signup-cliente")
	public String showCliForm(Cliente cliente) {
		return "add-cliente";
	}
	
	@PostMapping("/addcliente")
	public String addCliente(@Valid Cliente cliente, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "add-cliente";
		}
		clienteRepository.save(cliente);
		return "redirect:/index-cliente";
	}
	@GetMapping("/index-cliente")
	public String showCliList(Model model) {
		model.addAttribute("clientes", clienteRepository.findAll());
		return "/index-cliente";
	}
	@GetMapping("/edit-cliente/{id}")
	public String showCliUpdateForm(@PathVariable("id") Long id, Model model) {
		Cliente cliente = clienteRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("Cliente do Id inválido:" + id));
		
		model.addAttribute("cliente", cliente);
		return "update-cliente";
	}
	
	@PostMapping("/update-cliente/{id}")
    public String updateCliente(@PathVariable("id") long id, @Valid Cliente cliente, 
      BindingResult result, Model model) {
        if (result.hasErrors()) {
            cliente.setId(id);
            return "update-cliente";
        }
            
        clienteRepository.save(cliente);
        return "redirect:/index-cliente";
    }
	
	@GetMapping("/delete-cliente/{id}")
    public String deleteCliente(@PathVariable("id") long id, Model model) {
        Cliente cliente = clienteRepository.findById(id)
          .orElseThrow(() -> new IllegalArgumentException("Cliente do Id inválido:" + id));
        clienteRepository.delete(cliente);
        return "redirect:/index-cliente";
    }
}
