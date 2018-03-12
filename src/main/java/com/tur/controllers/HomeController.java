package com.tur.controllers;

import com.tur.domain.Animal;
import com.tur.domain.Cart;
import com.tur.repository.CartRepository;
import com.tur.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {


    @Autowired
    AnimalService animalService;

    /**
     * It is method which return name of index.html page. It is one page application.
     * @param model
     * @return index.html
     */
    @RequestMapping("/")
        public String index(Model model){

        return "index";
        }
    @RequestMapping("/welcome")
    public String welcome(Model model) {
        model.addAttribute("greeting", "Welcome to Web Store!");
        model.addAttribute("tagline", "The one and only amazing webstore");

        return "welcome";
    }
}
