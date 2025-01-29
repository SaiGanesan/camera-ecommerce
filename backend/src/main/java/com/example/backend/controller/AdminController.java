package com.example.backend.controller;

import com.example.backend.model.Admin;
import com.example.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    /**
     * Create a new Admin (product).
     * @param admin The Admin object to be saved.
     * @return The saved Admin object.
     */
    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        // Ensure all required fields are set (brand, category, suitability)
        validateAdminFields(admin);
        return adminRepository.save(admin);
    }

    /**
     * Get all Admin (products).
     * @return A list of all Admin objects.
     */
    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    /**
     * Update an existing Admin (product).
     * @param id The ID of the Admin to be updated.
     * @param admin The updated Admin object.
     * @return The updated Admin object.
     */
    @PutMapping("/{id}")
    public Admin updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {
        // Set the ID to ensure proper update
        admin.setId(id);
        validateAdminFields(admin);
        return adminRepository.save(admin);
    }

    /**
     * Delete an Admin (product) by ID.
     * @param id The ID of the Admin to be deleted.
     */
    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminRepository.deleteById(id);
    }

    /**
     * Validate the Admin fields for completeness.
     * @param admin The Admin object to validate.
     */
    private void validateAdminFields(Admin admin) {
        if (admin.getBrand() == null || admin.getBrand().isEmpty()) {
            throw new IllegalArgumentException("Brand is required.");
        }
        if (admin.getCategory() == null || admin.getCategory().isEmpty()) {
            throw new IllegalArgumentException("Category is required.");
        }
        if (admin.getSuitability() == null || admin.getSuitability().isEmpty()) {
            throw new IllegalArgumentException("Suitability is required.");
        }
    }
}
