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
                "https://e.snmc.io/i/300/w/3a6ce8e5e033c643a146529fd774de12/8121875/Kendrick%20Lamar%20-%20To%20Pimp%20a%20Butterfly%2C%20Cover%20art.webp"
        ));
        this.service.createProduct(new Product(
                "Ok Computer",
                "Radiohead",
                19.95F,
                "https://e.snmc.io/i/300/w/cb41b0acd3d7c304e1d1052b615ea300/8862252/Radiohead%20-%20OK%20Computer%2C%20Cover%20art.webp"
        ));
        this.service.createProduct(new Product(
                "Wish You Were Here",
                "Pink Floyd",
                19.95F,
                "https://e.snmc.io/i/300/w/4a254e6f1a9d64edae48659b98939b2e/4184635/Pink%20Floyd%20-%20Wish%20You%20Were%20Here%2C%20Cover%20art.webp"
        ));
    }
}
