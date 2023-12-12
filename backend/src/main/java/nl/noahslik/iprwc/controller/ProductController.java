package nl.noahslik.iprwc.controller;

import nl.noahslik.iprwc.model.Product;
import nl.noahslik.iprwc.service.ProductService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping()
    private Iterable<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("{id}")
    private ResponseEntity<Optional<Product>> getProductById(@PathVariable Integer id) {
        Optional<Product> product = service.getProductById(id);
        if (product.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping()
    private Product createProduct(@RequestBody Product product) {
        return service.createProduct(product);
    }
}
