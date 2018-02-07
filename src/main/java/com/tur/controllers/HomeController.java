package com.tur.controllers;

import com.tur.domain.Animal;
import com.tur.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {


    @Autowired
    AnimalService animalService;

    @RequestMapping("/")
        public String index(Model model){
        return "index";
        }
    @RequestMapping("/welcome")
    public String welcome(Model model) {
        model.addAttribute("greeting", "Welcome to Web Store!");
        model.addAttribute("tagline", "The one and only amazing webstore");

        Animal animal = animalService.read(16L);
        animal.setType("Papuga");
        animal.setSize("Big");
        animal.setCountry("Polska");
        animal.setUnitPrice(333);

        animalService.update(16L, animal);
        //animalService.delete(12L);
        return "welcome";
    }
}
