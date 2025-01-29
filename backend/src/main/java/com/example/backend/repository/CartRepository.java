package com.example.backend.repository;

import com.example.backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    // Find a cart by user ID
    Optional<Cart> findByUserId(String userId);
}
