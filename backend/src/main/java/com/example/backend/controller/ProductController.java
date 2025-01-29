package com.example.backend.controller;

import com.example.backend.model.Admin;
import com.example.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private AdminRepository adminRepository;

    

    /**
     * Get all Products.
     *
     * @return A list of all Product objects.
     */
    @GetMapping
    public ResponseEntity<List<Admin>> getAllProducts() {
        List<Admin> products = adminRepository.findAll();
        return ResponseEntity.ok(products);
    }

   
    
    

   
}
