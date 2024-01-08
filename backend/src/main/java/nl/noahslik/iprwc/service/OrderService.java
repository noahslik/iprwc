package nl.noahslik.iprwc.service;

import nl.noahslik.iprwc.model.Product;
import nl.noahslik.iprwc.model.order.Order;
import nl.noahslik.iprwc.model.order.OrderItem;
import nl.noahslik.iprwc.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository repository;
    private final ProductService productService;

    public OrderService(OrderRepository repository, ProductService productService) {
        this.repository = repository;
        this.productService = productService;
    }

    public Order createOrder(Order order) {
        List<OrderItem> orderItems = order.getOrderItems();
        BigDecimal totalPrice = new BigDecimal(0);
        for (int i = 0; i < orderItems.size(); i++) {
            OrderItem orderItem = orderItems.get(i);
            Product product = productService.getProductById(orderItem.getProductId()).get();
            orderItem.setPrice(product.getPrice().multiply(BigDecimal.valueOf(orderItem.getAmount())));
            orderItem.setProductName(product.getName());
            orderItems.set(i, orderItem);
            totalPrice = totalPrice.add(orderItem.getPrice());
        }
        order.setOrderItems(orderItems);
        order.setPrice(totalPrice);
        return this.repository.save(order);
    }

    public Optional<Order> getOrderById(Integer orderId) {
        return this.repository.findById(orderId);
    }

    public List<Order> getOrdersByUserId(String userId) {
        return this.repository.findByUserId(userId);
    }
}
