import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  products:any;
  activeIndices: { [Category: string]: number } = {};
  categories: any = [];
  visibleItems = 3;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight
  // constructor( private http: HttpClient){}
  constructor(private http: HttpClient) { }
  ngOnInit(){
    this.getProducts()
  }
  getProducts(){
    this.http.get(`https://fakestoreapi.com/products`).subscribe(
      (res:any) => { 
        this.products = res
        console.log(this.products)
        this.getCategories();
        this.initializeActiveIndices();
      },
      (error) => console.log(error)
    )
  }
  getCategories(){
    for(let i in this.products){
      this.categories.push(this.products[i].category)
      console.log(this.categories)
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
    return this.products.filter((prod: any) => prod.category === Category);
  }

  getActiveIndex(Category: string): number {
    return this.activeIndices[Category];
  }

  diplay(param: string){
    // this.router.navigate([`pharmacyCategory/${param}`]);
  }
}
