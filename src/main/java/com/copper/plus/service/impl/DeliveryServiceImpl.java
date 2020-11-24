package com.copper.plus.service.impl;

import com.copper.plus.service.DeliveryService;
import com.copper.plus.domain.Delivery;
import com.copper.plus.repository.DeliveryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Delivery}.
 */
@Service
@Transactional
public class DeliveryServiceImpl implements DeliveryService {

    private final Logger log = LoggerFactory.getLogger(DeliveryServiceImpl.class);

    private final DeliveryRepository deliveryRepository;

    public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public Delivery save(Delivery delivery) {
        log.debug("Request to save Delivery : {}", delivery);
        return deliveryRepository.save(delivery);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Delivery> findAll() {
        log.debug("Request to get all Deliveries");
        return deliveryRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Delivery> findOne(Long id) {
        log.debug("Request to get Delivery : {}", id);
        return deliveryRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Delivery : {}", id);
        deliveryRepository.deleteById(id);
    }
}
