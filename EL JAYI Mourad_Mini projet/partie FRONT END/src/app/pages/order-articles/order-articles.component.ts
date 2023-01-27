import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-order-articles',
  templateUrl: './order-articles.component.html',
  styleUrls: ['./order-articles.component.css']
})
export class OrderArticlesComponent implements OnInit {

  articles: Article [] =  [];
  idOrder: any
  success?: string

  constructor(
    private orderService: OrdersService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.idOrder = this.activatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.getOrderArticles();
  }

  getOrderArticles() {
    //const idOrder =this.activatedRoute.snapshot.params['id'];

    this.orderService.getOrderArticles(this.idOrder).subscribe( 
      res => {
        this.articles = res;
        console.log(res)
      },error => {
        console.log(error);
      }
    )
  }

  deleteArticleFromOrder(article:Article) {
   if(article && article.id) {
    this.orderService.updateOrder(this.idOrder, article.id).subscribe(() => {
      console.log("article deleted")
      this.getOrderArticles()
      this.success="article deleted successfully"
    }, error => {
      console.log(error)
    });
   } else {
    console.log("article is not found")
   }
  }


}
