import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderArticlesComponent } from './pages/order-articles/order-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    OrdersComponent,
    OrderArticlesComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'articles', component: ArticlesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orderArticles/:id', component: OrderArticlesComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
