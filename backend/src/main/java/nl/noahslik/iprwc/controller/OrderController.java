package nl.noahslik.iprwc.controller;

import nl.noahslik.iprwc.model.order.Order;
import nl.noahslik.iprwc.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("/order")
public class OrderController {
    private final OrderService service;

    public OrderController(OrderService service) { this.service = service; }

    @PostMapping
    private void createOrder(@RequestBody Order order) {
        this.service.createOrder(order);
    }

    @GetMapping("{orderId}")
    private Optional<Order> getOrderById(@PathVariable Integer orderId) {
        return this.service.getOrderById(orderId);
    }

    @GetMapping()
    private List<Order> getOrdersByUserId(@RequestParam Integer userId) {
        return this.service.getOrdersByUserId(userId);
    }
}
