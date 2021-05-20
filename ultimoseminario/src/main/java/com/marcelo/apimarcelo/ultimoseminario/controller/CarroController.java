package com.marcelo.apimarcelo.ultimoseminario.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.marcelo.apimarcelo.ultimoseminario.entities.Carro;
import com.marcelo.apimarcelo.ultimoseminario.repository.CarroRepository;
@Controller
public class CarroController {

	@Autowired
	CarroRepository carroRepository;
	
	@GetMapping("/signup")
	public String showCarForm(Carro carro) {
		return "add-carro";
	}
	
	@PostMapping("/addcarro")
	public String addCarro(@Valid Carro carro, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "add-carro";
		}
		carroRepository.save(carro);
		return "redirect:/index";
	}
	@GetMapping("/index")
	public String showCarList(Model model) {
		model.addAttribute("carros", carroRepository.findAll());
		return "/index";
	}
	@GetMapping("/home")
	public String showHome() {
		
		return "/home";
	}
	@GetMapping("/edit/{id}")
	public String showCarUpdateForm(@PathVariable("id") Long id, Model model) {
		Carro carro = carroRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("Carro do Id inválido:" + id));
		
		model.addAttribute("carro", carro);
		return "update-carro";
	}
	
	@PostMapping("/update/{id}")
    public String updateCarro(@PathVariable("id") long id, @Valid Carro carro, 
      BindingResult result, Model model) {
        if (result.hasErrors()) {
            carro.setId(id);
            return "update-carro";
        }
            
        carroRepository.save(carro);
        return "redirect:/index";
    }
	
	@GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") long id, Model model) {
        Carro carro = carroRepository.findById(id)
          .orElseThrow(() -> new IllegalArgumentException("Carro do Id inválido:" + id));
        carroRepository.delete(carro);
        return "redirect:/index";
    }
}
