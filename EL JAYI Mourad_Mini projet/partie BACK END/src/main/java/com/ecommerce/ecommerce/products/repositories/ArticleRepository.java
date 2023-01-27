package com.ecommerce.ecommerce.products.repositories;

import com.ecommerce.ecommerce.products.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
