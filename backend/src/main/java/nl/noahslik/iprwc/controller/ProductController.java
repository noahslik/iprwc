package nl.noahslik.iprwc.controller;

import nl.noahslik.iprwc.model.Product;
import nl.noahslik.iprwc.service.ProductService;
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
    private Optional<Product> getProductById(@PathVariable Integer id) {
        return service.getProductById(id);
    }

    @PostMapping()
    private void createProduct(@RequestBody Product product) {
        service.createProduct(product);
    }
}
