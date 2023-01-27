package com.ecommerce.ecommerce.products.controllers;

import com.ecommerce.ecommerce.products.model.Article;
import com.ecommerce.ecommerce.products.model.Order;
import com.ecommerce.ecommerce.products.services.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/{id}/articles")
    public ResponseEntity<List<Article>> getArticlesForOrder(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getArticlesForOrder(id));
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody List<Long> articlesIds) {
        return ResponseEntity.ok(orderService.createOrder(articlesIds));
    }


    @PutMapping("/{id}/articles/{articleId}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @PathVariable Long articleId) {
        return ResponseEntity.ok(orderService.updateOrder(id, articleId));
    }
}
