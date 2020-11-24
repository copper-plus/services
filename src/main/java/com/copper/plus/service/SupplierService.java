package com.copper.plus.service;

import com.copper.plus.domain.Supplier;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Supplier}.
 */
public interface SupplierService {

    /**
     * Save a supplier.
     *
     * @param supplier the entity to save.
     * @return the persisted entity.
     */
    Supplier save(Supplier supplier);

    /**
     * Get all the suppliers.
     *
     * @return the list of entities.
     */
    List<Supplier> findAll();


    /**
     * Get the "id" supplier.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Supplier> findOne(Long id);

    /**
     * Delete the "id" supplier.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
