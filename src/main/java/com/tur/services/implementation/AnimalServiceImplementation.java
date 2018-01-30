package com.tur.services.implementation;


import com.tur.domain.Animal;
import com.tur.repository.AnimalRepository;
import com.tur.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnimalServiceImplementation implements AnimalService{

    @Autowired
    AnimalRepository animalRepository;

    public Long create(Animal animal) {

        //Check if animal exist in databes
        if (animalRepository.existsById(animal.getAnimalId()))
        {
            System.out.println("Animal already exist.");
            //throw new IllegalArgumentException("This animal already exist."); Zamienic przy robieniu ExceptionHandler
        }
        else{
            animalRepository.save(animal);
        }
        return animal.getAnimalId();
    }

    public Animal read(Long animalId) {


        Optional<Animal> animalOptional = animalRepository.findById(animalId);
        return animalOptional.get();
    }

    public void update(Long animalId, Animal animal) {
        //Save up to date animal entity in animalwebstoredb
        animalRepository.save(animal);

    }

    public void delete(Long animalId) {
        //Check if animal exist in databes
        if (animalRepository.existsById(animalId))
        {
            animalRepository.deleteById(animalId);
        }

    }
}
