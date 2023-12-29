// import { Component, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {
//   @Input() prod: any;
//   @Input() medication!: any;
  
//   role: string | null = 'client';
//   cartArr: any = [];
//   pharmacyID:any;
//   x:number=0;
//   constructor(
//     private routeUrl:ActivatedRoute, 
//     private rouer: Router
//     ){
//       this.routeUrl.paramMap.subscribe(params => {
//         // this.service.pharmacyId = Number(params.get("id"));
//         // this.pharmacyId = Number(params.get("id"));
//         this.pharmacyID = JSON.parse(sessionStorage.getItem('pharamcyID')|| '')
//       });
//     }
  
//   ngOnInit(){
//     // get data from cart
//     this.role = localStorage.getItem('role');
//     this.cartArr = this.service.cartItems;
//     if(this.cartArr.length > 0){
//       let producatFound = this.cartArr.find((item:any) => item.id == this.medication.id)
//       if(producatFound){
//         this.medication.added = true;
//       }
//     }
//     this.routeUrl.paramMap.subscribe(
//       (params:any) => {
//         this.service.pharmacyId = Number(params.get("id"));
//     });
//   }

//   addToCart(val:any){
//     val.added = true;
//     this.service.addItemToCart(val);
//     this.service.pharmacyId = this.pharmacyID;
//   }

//   removeFromCart(val:any){
//   this.service.removeItemFromCart(val.id);
//   val.added = false;
//   }

//   goToDetails(val:any){
//     this.rouer.navigate([`product/${val}`])
//   }
//   generateImageUrl(val:any) {
//     return `http://localhost:8000/storage/${val}`;
//   }
// }
