package com.tur.repository;

import com.tur.domain.Cart;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface CartRepository {

    Cart create(Cart cart);

    Cart read(int cartId);

    void update(int cartId, Cart cart);

    void delete(int cartId);

    List<Cart> getAll();
}
