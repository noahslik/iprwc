package nl.noahslik.iprwc.controller;

import nl.noahslik.iprwc.model.order.Order;
import nl.noahslik.iprwc.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("/order")
public class OrderController {
    private final OrderService service;

    public OrderController(OrderService service) { this.service = service; }

    @PostMapping
    private Order createOrder(@RequestBody Order order) {
        return this.service.createOrder(order);
    }

    @GetMapping("{orderId}")
    private ResponseEntity<Optional<Order>> getOrderById(@PathVariable Integer orderId) {
        Optional<Order> order = this.service.getOrderById(orderId);
        if (order.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @GetMapping()
    private List<Order> getOrdersByUserId(@RequestParam Integer userId) {
        return this.service.getOrdersByUserId(userId);
    }
}
