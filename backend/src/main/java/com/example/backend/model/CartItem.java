package com.example.backend.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class CartItem {

    private Long productId; // ID of the product added to the cart
    private String productName; // Name of the product
    private int quantity; // Quantity of the product
    private Double price; // Price of the product

    // Getters and Setters
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
