import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { UrlServiceService } from 'src/app/urlService/url-service.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  products: any;
  activeIndices: { [Category: string]: number } = {};
  categories: any = [];
  visibleItems = 3;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight
  shopCategoryObjs: any;
  constructor(
    private http: HttpClient,
    protected urlService: UrlServiceService
  ) { }
  ngOnInit() {
    this.getShops();
  }

  getCategories() {
    for (let i in this.products) {
      this.categories.push(this.products[i].shop_category.name
      )
    }
    this.categories = Array.from(new Set(this.categories)); // Convert set to array
  }

  initializeActiveIndices() {
    for (let Category of this.categories) {
      this.activeIndices[Category] = 0;
    }
  }

  prev(Category: string) {
    this.activeIndices[Category] = Math.max(this.activeIndices[Category] - 1, 0);
  }

  next(Category: string) {
    const CategoryProducts = this.getCategoryProducts(Category);
    this.activeIndices[Category] = Math.min(this.activeIndices[Category] + 1, CategoryProducts.length - this.visibleItems);
  }

  getCategoryProducts(Category: string): any[] {
    return this.products.filter((prod: any) => prod.shop_category.name === Category);
  }

  getActiveIndex(Category: string): number {
    return this.activeIndices[Category];
  }

  diplay(param: string) {
    // this.router.navigate([`pharmacyCategory/${param}`]);
    console.log(param)
  }

  getShops() {
    this.urlService.get('/shop-owners', '').subscribe(
      (res: any) => {
        this.products = res
        this.getCategories();
        this.initializeActiveIndices();
      },
      (error: any) => {
        console.log(error)
      }
    )
  }


}
