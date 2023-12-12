package nl.noahslik.iprwc.service;

import nl.noahslik.iprwc.model.order.Order;
import nl.noahslik.iprwc.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository repository;

    public OrderService(OrderRepository repository) { this.repository = repository; }

    public Order createOrder(Order order) {
        return this.repository.save(order);
    }

    public Optional<Order> getOrderById(Integer orderId) {
        return this.repository.findById(orderId);
    }

    public List<Order> getOrdersByUserId(Integer userId) {
        return this.repository.findByUserId(userId);
    }
}
