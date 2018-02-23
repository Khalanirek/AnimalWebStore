package com.tur.repository.repositoryImplementation;

import com.tur.domain.Cart;
import com.tur.repository.CartRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CartRepositoryImpl implements CartRepository {

    private List<Cart> listOfCarts = new ArrayList<Cart>();

    @Override
    public Cart create(Cart cart) {
        listOfCarts.add(cart);
        return cart;
    }

    @Override
    public Cart read(int cartId) {
        if(listOfCarts.size() != 0) {return listOfCarts.get(cartId);}
        listOfCarts.add(new Cart(0));
        return listOfCarts.get(0);
    }

    @Override
    public void update(int cartId, Cart cart) {
        if(listOfCarts.size() >= (cartId - 1)){listOfCarts.set(cartId, cart);}
    }

    @Override
    public void delete(int cartId) {
        if(listOfCarts.size() >= (cartId - 1)){listOfCarts.remove(cartId);}
    }

    @Override
    public List<Cart> getAll() {
        return listOfCarts;
    }

    @Override
    public void clear() {
        listOfCarts.clear();
    }
}
