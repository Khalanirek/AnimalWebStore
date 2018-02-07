package com.tur.services.implementation;


import com.tur.domain.Animal;
import com.tur.repository.AnimalRepository;
import com.tur.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<Animal> getAll(){
        List<Animal> animalList = new ArrayList<Animal>();
        Iterable<Animal> animalIterable = animalRepository.findAll();
        Iterator<Animal> iterator = animalIterable.iterator();
        animalIterable.forEach((Animal animal) -> animalList.add(iterator.next()));

        return animalList;
    }

    @Override
    public Set<String> getAnimalsTypes() {
        Set<String> types = new HashSet<String>();
        Iterable<Animal> animalIterable = animalRepository.findAll();
        Iterator<Animal> iterator = animalIterable.iterator();
        animalIterable.forEach((Animal animal) -> types.add(animal.getType()));
        return types;
    }
    @Override
    public List<Animal> getAllSortedAlphabetically() {
        List<Animal> animalList = getAll();
        animalList.sort((Animal first, Animal second)-> first.getType().compareTo(second.getType()));
        return animalList;
    }

    @Override
    public List<Animal> getAllSortedReverseAlphabetically() {
        List<Animal> animalList = getAll();
        animalList.sort((Animal first, Animal second)-> second.getType().compareTo(first.getType()));
        return animalList;
    }

    @Override
    public List<Animal> getAllSortedPriceAscending() {
        List<Animal> animalList = getAll();
        animalList.sort((Animal first, Animal second)-> first.getUnitPrice()- second.getUnitPrice());
        return animalList;
    }

    @Override
    public List<Animal> getAllSortedPriceDescending() {
        List<Animal> animalList = getAll();
        animalList.sort((Animal first, Animal second)-> second.getUnitPrice()- first.getUnitPrice());
        return animalList;
    }
}
