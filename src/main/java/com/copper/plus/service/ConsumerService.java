package com.copper.plus.service;

import com.copper.plus.domain.Consumer;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Consumer}.
 */
public interface ConsumerService {

    /**
     * Save a consumer.
     *
     * @param consumer the entity to save.
     * @return the persisted entity.
     */
    Consumer save(Consumer consumer);

    /**
     * Get all the consumers.
     *
     * @return the list of entities.
     */
    List<Consumer> findAll();


    /**
     * Get the "id" consumer.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Consumer> findOne(Long id);

    /**
     * Delete the "id" consumer.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
