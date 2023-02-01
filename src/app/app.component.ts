import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Products } from './models/products';
import { ProductsService } from './services/products/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products!: Products[];
  public resultsData!: Products;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.service.getProducts().subscribe((res: Products) => {
      console.log(res);
      this.resultsData = res;
    });
  }
}
