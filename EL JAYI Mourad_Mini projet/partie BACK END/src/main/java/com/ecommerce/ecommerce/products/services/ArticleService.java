package com.ecommerce.ecommerce.products.services;

import com.ecommerce.ecommerce.products.model.Article;
import com.ecommerce.ecommerce.products.repositories.ArticleRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public Article createArticle(String name, double price, MultipartFile pircture) {
        // Enregistrez le produit en base de données
        String imageUrl = saveImage(pircture);

        Article article = new Article();
        article.setName(name);
        article.setPrice(price);
        article.setPircture(imageUrl);

        return articleRepository.save(article);

    }

    private String saveImage(MultipartFile image) {
        try {
            byte[] bytes = image.getBytes();
            Path path = Paths.get("src/main/resources/static/images/" + image.getOriginalFilename());
            Files.write(path, bytes);
            return image.getOriginalFilename();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<Article> findAllArticles() {
        return articleRepository.findAll();
    }

    public Article findArticle(Long id) {
        return articleRepository.findById(id).orElseThrow(() -> new
                RuntimeException("Product not found"));
    }
}
