package com.ecommerce.ecommerce.products.controllers;

import com.ecommerce.ecommerce.products.model.Article;
import com.ecommerce.ecommerce.products.services.ArticleService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public ResponseEntity<List<Article>> getAllArticles() {
        return ResponseEntity.ok(articleService.findAllArticles());
    }

    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestParam("name") String name,
                                                 @RequestParam("price") double price,
                                                 @RequestParam("pircture") MultipartFile pircture)
    {

        try {
            Article savedArticle = articleService.createArticle(name, price, pircture);
                     return ResponseEntity.status(HttpStatus.CREATED)
                             .header(HttpHeaders.CACHE_CONTROL, "no-cache")
                             .body(savedArticle);
                 } catch (Exception e) {
                     return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
                 }
    }



    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable Long id) {
        Article article = articleService.findArticle(id);
        if (article == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(article);
    }


}
