package nl.noahslik.iprwc.service;

import nl.noahslik.iprwc.model.Product;
import nl.noahslik.iprwc.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Iterable<Product> getAllProducts() {
        return repository.findAll();
    }

    public Product createProduct(Product product) {
        return repository.save(product);
    }

    public Optional<Product> getProductById(Integer id) {
        return repository.findById(id);
    }
}
