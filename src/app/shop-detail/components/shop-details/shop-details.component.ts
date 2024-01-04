import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent {

  constructor(){}
  faHeart = faHeart;
  isFavorited = false;
  favoriteCount = 0;

  addToFav() {
    // Toggle the favorite status
    this.isFavorited = !this.isFavorited;

    // Update the favorite count
    this.favoriteCount = this.isFavorited ? this.favoriteCount + 1 : this.favoriteCount - 1;
  }
}
