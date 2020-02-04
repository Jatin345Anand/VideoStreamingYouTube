import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// import { Component, OnInit } from '@angular/core';
// import {  Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
// import { SearchDataMobileService } from '../search-data-mobile.service';
// import { Mobileproduct } from '../mobileproduct';

// @Component(
//     {
//         selector: 'app-header',
//         templateUrl: 'header.component.html',
//         styleUrls: ['header.component.css']
//     }
// )
// export class HeaderComponent implements OnInit{
//     title: string;
//     itemMobileArray: Mobileproduct[];
//     itemMobileArray2:Mobileproduct[];
//     @Input()
//     sendtoAnathorCom: string;
//     @Output()
//     callparentEmit: EventEmitter<string> = new EventEmitter<string>();
//     constructor(private MobileService:SearchDataMobileService) {
//         this.title = "HEADER";
//     }
//     AjaxByHTTP() {
//         this.MobileService.DoAjaxByhttp().then(item => {
//             console.log("Getting the data in Promise = ", item);
//             this.itemMobileArray = item;
//             this.MobileService.SetMobileProductList(this.itemMobileArray);
//             this.MobileService.isSearchMobileButtonClick=true;
//             console.log("The Mobile Item Array come from service= ",this.MobileService.GetMobileProductList());
//         })
//     }
//     ngOnInit(){
     
//     }
//     // DOLOGIN(){
//     //     // this.MobileService.CallbyLoginRegister();
//     // }
//     DOREGISTER(){
//         console.log('Register called...');
//     }
//     AjaxByObservalbe() {
//         console.log(`Oninit called...`);
//         var REFSUB = this.MobileService.DoAjaxByObservable().subscribe(
//             (response)=>{
//                 console.log("Response is ",response);
//                 if(response){
//                     console.log(' Response in product is ',response["asusmobile"]);
//                     this.itemMobileArray2=response["asusmobile"];
//                     console.log("Item array is "+this.itemMobileArray2[0]);
//                 }

//             },(err)=>{
//                 console.log('Error is ',err);
//             }
//         );
//         setTimeout(()=>{
//             console.log("Unsubscribe Call...");
//             REFSUB.unsubscribe();

//         },7000);
//     }
//     DOSEARCH(event): void {
//         console.log(`do search...`);
//         this.callparentEmit.emit('Hi am header...');
//         console.log("Do ajax by http...");
//         this.AjaxByHTTP();
//         console.log("Do ajax by observable...");
//         this.AjaxByObservalbe();
//     }

// }

