package com.tur.domain;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Cart {

    private int cartId;
    private List<CartItem> cartList = new ArrayList<CartItem>();
    private BigDecimal totalPrice = BigDecimal.valueOf(0);

    public Cart(int cartId){
        this.cartId = cartId;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public List<CartItem> getCartList() {
        return cartList;
    }

    public void setCartList(List<CartItem> cartList) {
        this.cartList = cartList;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void updateTotalPrice(){
        List<CartItem> localCartList = getCartList();
        BigDecimal localTotalPrice = BigDecimal.valueOf(0);
        for (CartItem cartItem: localCartList) {
            localTotalPrice = localTotalPrice.add(BigDecimal.valueOf(cartItem.getAnimal().getUnitPrice()));
        }
        setTotalPrice(localTotalPrice);
    }

    public void addCartItem(CartItem cartItem){
        List<CartItem> localCartList = getCartList();
        localCartList.add(cartItem);
        setCartList(localCartList);
        updateTotalPrice();
    }

    public void removeCartItem(int index){
        List<CartItem> localCartList = getCartList();
        localCartList.remove(index);
        setCartList(localCartList);
        updateTotalPrice();
    }
}
