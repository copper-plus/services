package com.copper.plus.service.impl;

import com.copper.plus.service.ConsumerService;
import com.copper.plus.domain.Consumer;
import com.copper.plus.repository.ConsumerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Consumer}.
 */
@Service
@Transactional
public class ConsumerServiceImpl implements ConsumerService {

    private final Logger log = LoggerFactory.getLogger(ConsumerServiceImpl.class);

    private final ConsumerRepository consumerRepository;

    public ConsumerServiceImpl(ConsumerRepository consumerRepository) {
        this.consumerRepository = consumerRepository;
    }

    @Override
    public Consumer save(Consumer consumer) {
        log.debug("Request to save Consumer : {}", consumer);
        return consumerRepository.save(consumer);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Consumer> findAll() {
        log.debug("Request to get all Consumers");
        return consumerRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Consumer> findOne(Long id) {
        log.debug("Request to get Consumer : {}", id);
        return consumerRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Consumer : {}", id);
        consumerRepository.deleteById(id);
    }
}
