import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from 'src/app/urlService/url-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  shopCategoryObjs: any;
  isFiltered: boolean = false;
  fiteredShops!: object[];
  constructor(private urlService: UrlServiceService) {}

  ngOnInit(): void {
    this.shopCategories();
  }

  shopCategories() {
    this.urlService.get('/shop_category', '').subscribe(
      (res: any) => {
        this.shopCategoryObjs = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  filterationCategory(event: any) {
    const selectedCategory = event.target.getAttribute('data-category');
    // console.log(selectedCategory);
    this.urlService.get('/filteration', selectedCategory).subscribe(
      (res: any) => {
        console.log(res);
        this.fiteredShops = res;
        this.isFiltered = true;
      },
      (error: any) => console.log(error)
    );
  }
}
