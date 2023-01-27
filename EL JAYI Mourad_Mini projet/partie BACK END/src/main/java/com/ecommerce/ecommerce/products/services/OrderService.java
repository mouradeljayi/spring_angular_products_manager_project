package com.ecommerce.ecommerce.products.services;

import com.ecommerce.ecommerce.products.model.Article;
import com.ecommerce.ecommerce.products.model.Order;
import com.ecommerce.ecommerce.products.repositories.ArticleRepository;
import com.ecommerce.ecommerce.products.repositories.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ArticleRepository articleRepository;

    public OrderService(OrderRepository orderRepository, ArticleRepository articleRepository) {
        this.orderRepository = orderRepository;
        this.articleRepository = articleRepository;
    }

    public Order createOrder(List<Long> articlesIds) {
        List<Article> articles = articlesIds.stream()
                .map(articleRepository::findById)
                .filter(Optional::isPresent)
                .map(Optional::get)
                .collect(Collectors.toList());
        Order order = new Order();
        order.setDate(LocalDateTime.now());
        order.setArticles(articles);
        articles.forEach(article -> article.getOrders().add(order));
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<Article> getArticlesForOrder(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Order Not Found"));
        return order.getArticles();
    }

    public Order updateOrder(Long orderId, Long articleId) {

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article not found"));

            order.getArticles().remove(article);
            article.getOrders().remove(order);

        return orderRepository.save(order);
    }

}
