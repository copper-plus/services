package com.copper.plus.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Consumer.
 */
@Entity
@Table(name = "consumer")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Consumer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "rating")
    private Long rating;

    @Column(name = "details")
    private String details;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Consumer name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean isStatus() {
        return status;
    }

    public Consumer status(Boolean status) {
        this.status = status;
        return this;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Long getRating() {
        return rating;
    }

    public Consumer rating(Long rating) {
        this.rating = rating;
        return this;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }

    public String getDetails() {
        return details;
    }

    public Consumer details(String details) {
        this.details = details;
        return this;
    }

    public void setDetails(String details) {
        this.details = details;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Consumer)) {
            return false;
        }
        return id != null && id.equals(((Consumer) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Consumer{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", status='" + isStatus() + "'" +
            ", rating=" + getRating() +
            ", details='" + getDetails() + "'" +
            "}";
    }
}
