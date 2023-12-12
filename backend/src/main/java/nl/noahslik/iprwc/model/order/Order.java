package nl.noahslik.iprwc.model.order;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "product_order")
public class Order {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer userId;
    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderItem> orderItems;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }
}
