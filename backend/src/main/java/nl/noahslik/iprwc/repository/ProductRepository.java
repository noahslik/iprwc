package nl.noahslik.iprwc.repository;

import nl.noahslik.iprwc.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository  extends CrudRepository<Product, Integer> {
}
