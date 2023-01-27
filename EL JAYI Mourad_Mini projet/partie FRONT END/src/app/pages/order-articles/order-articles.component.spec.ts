import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderArticlesComponent } from './order-articles.component';

describe('OrderArticlesComponent', () => {
  let component: OrderArticlesComponent;
  let fixture: ComponentFixture<OrderArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
