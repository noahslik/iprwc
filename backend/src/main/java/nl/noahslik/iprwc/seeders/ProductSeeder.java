package nl.noahslik.iprwc.seeders;

import nl.noahslik.iprwc.model.Product;
import nl.noahslik.iprwc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ProductSeeder implements CommandLineRunner {
    private final ProductService service;

    @Autowired
    public ProductSeeder(ProductService service) {
        this.service = service;
    }

    @Override
    public void run(String... args) {
        this.service.createProduct(new Product(
                "To Pimp A Butterfly",
                "Kendrick Lamar",
                19.95F,
                "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png"
        ));
        this.service.createProduct(new Product(
                "Ok Computer",
                "Radiohead",
                19.95F,
                "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png"
        ));
        this.service.createProduct(new Product(
                "Wish You Were Here",
                "Pink Floyd",
                19.95F,
                "https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png"
        ));
    }
}
