package com.example.backend.controller;

import com.example.backend.model.Cart;
import com.example.backend.model.CartItem;
import com.example.backend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;


//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    // Get cart by user ID
    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCart(@PathVariable String userId) {
        Optional<Cart> cart = cartRepository.findByUserId(userId);
        return cart.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add item to cart
    @PostMapping("/{userId}")
    public ResponseEntity<Cart> addItemToCart(@PathVariable String userId, @RequestBody CartItem item) {
        System.out.println("Adding item to cart for userId: " + userId + ", Item: " + item);

        // Fetch or create a new cart for the user
        Cart cart = cartRepository.findByUserId(userId).orElse(new Cart());
        cart.setUserId(userId);

        // Initialize the items list if null
        if (cart.getItems() == null) {
            cart.setItems(new ArrayList<>());
        }

        // Check if the item already exists in the cart
        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(cartItem -> cartItem.getProductId().equals(item.getProductId()))
                .findFirst();

        if (existingItem.isPresent()) {
            // Update quantity of the existing item
            existingItem.get().setQuantity(existingItem.get().getQuantity() + item.getQuantity());
        } else {
            // Add the new item to the cart
            cart.getItems().add(item);
        }

        // Save the updated cart
        Cart updatedCart = cartRepository.save(cart);
        System.out.println("Updated cart: " + updatedCart);

        return ResponseEntity.ok(updatedCart);
    }

    // Remove item from cart
    @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity<Cart> removeItemFromCart(@PathVariable String userId, @PathVariable Long productId) {
        Optional<Cart> cartOptional = cartRepository.findByUserId(userId);
        if (cartOptional.isPresent()) {
            Cart cart = cartOptional.get();
            cart.getItems().removeIf(item -> item.getProductId().equals(productId));
            Cart updatedCart = cartRepository.save(cart);
            return ResponseEntity.ok(updatedCart);
        }
        return ResponseEntity.notFound().build();
    }

    // Clear the cart
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> clearCart(@PathVariable String userId) {
        Optional<Cart> cartOptional = cartRepository.findByUserId(userId);
        cartOptional.ifPresent(cart -> {
            cart.getItems().clear();
            cartRepository.save(cart);
        });
        return ResponseEntity.noContent().build();
    }
}
