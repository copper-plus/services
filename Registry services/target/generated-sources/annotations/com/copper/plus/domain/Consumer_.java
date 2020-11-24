package com.copper.plus.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Consumer.class)
public abstract class Consumer_ {

	public static volatile SingularAttribute<Consumer, String> name;
	public static volatile SingularAttribute<Consumer, Long> rating;
	public static volatile SingularAttribute<Consumer, String> details;
	public static volatile SingularAttribute<Consumer, Long> id;
	public static volatile SingularAttribute<Consumer, Boolean> status;

	public static final String NAME = "name";
	public static final String RATING = "rating";
	public static final String DETAILS = "details";
	public static final String ID = "id";
	public static final String STATUS = "status";

}

