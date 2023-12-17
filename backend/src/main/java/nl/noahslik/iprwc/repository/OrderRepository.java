package nl.noahslik.iprwc.repository;

import nl.noahslik.iprwc.model.order.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Integer> {
    List<Order> findByUserId(String userId);
}
