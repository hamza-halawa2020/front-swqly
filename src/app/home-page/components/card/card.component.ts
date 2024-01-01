import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() prod: any;
  @Input() product!: any;
  
  x:number=0;
  constructor(
    private routeUrl:ActivatedRoute, 
    private rouer: Router
    ){}
  
  ngOnInit(){}

}