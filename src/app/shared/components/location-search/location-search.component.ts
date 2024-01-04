import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from 'src/app/urlService/url-service.service';
import { faAngleDown, faLocationDot, faAngleRight, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  pharmArr!:any;
  idArr!: any;
  faSearch = faSearch;
  searchText='';
  faAngleRight = faAngleRight
  faLocation = faLocationDot
  faAngleDown =faAngleDown;
  faAngleLeft = faAngleLeft
  showList: boolean = false;
  showSubList: boolean = false;
  cities: any;
  GovernorateName: any;
  location: string = "موقعك";
  data: any= "not yet";
  page :number=1;
  totalLength:any;
  originalPharmArr: any[] = [];
  phone: any;
  isLoading:boolean = true;
  constructor(
    protected urlService: UrlServiceService
  ){}

  ngOnInit(){
    this.getData()
  }

// function to get all gavernorates 
getData() {
  this.urlService.get('/governorates', '').subscribe(
    (res) => {
      this.data = res;
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}

// function to open or close the list of governorates 
openList() {
  this.showList = !this.showList;
  if (this.showSubList === true) {this.showSubList = false}
}
// function to open the list of cities in governorates
openSubList(val: any) {
  // this.dropService.openSubList(val)
  this.cities = val.cities;
  this.GovernorateName = val.name;
  this.showList = !this.showList;
  this.showSubList = !this.showSubList;
}
// function to close list of cities 
closeSubList(){
  this.showSubList = !this.showSubList
  this.showList = !this.showList;
}


// function to show the selected location 
sendLocation(val: any) {
  // this.dropService.sendLocation(val);
  this.location = this.GovernorateName + ", " + val;
  this.showSubList = false;
  this.showList = false;

  // Apply filtering to originalPharmArr instead of creating a new array
  this.pharmArr = this.originalPharmArr.filter((pharma: any) => {
    return pharma['Governorate'] === this.GovernorateName && pharma['city'] === val;
  });
}
}
