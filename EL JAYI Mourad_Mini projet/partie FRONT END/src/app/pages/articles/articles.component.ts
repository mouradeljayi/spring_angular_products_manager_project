import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article [] = [];
  article: Article =  {
    name: '',
    price: 0,
    pircture: null
  }

  constructor(private articleService: ArticlesService) { }


  ngOnInit(): void {
    this.allArticles();
  }

  allArticles() {
    this.articleService.getAllArticles().subscribe(
      res => {
        this.articles = res
      }, error => {
        console.log(error);
      }
    )
  }

  addArticle() {
    const formData = new FormData();

    formData.append("name", this.article.name);
    formData.append("price", this.article.price.toString());
    formData.append("pircture", this.article.pircture);

    this.articleService.createArticle(formData).subscribe(res => {
      console.log(res)
      location.reload()
    }, error => {
      console.log(error)
    });
    ;
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    this.article.pircture = event.target.files[0];
  }

}
