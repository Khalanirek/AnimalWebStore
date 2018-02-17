package com.tur.domain;

public class CartItem {

    private int cartItemId = 1;
    private Animal animal;

    public CartItem(Animal animal){
        this.animal = animal;
    }
    public int getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(int cartItemId) {
        this.cartItemId = cartItemId;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }
}
