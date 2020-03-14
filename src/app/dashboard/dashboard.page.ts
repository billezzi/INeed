import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public searchTerm: string = "";
  public categories:any = [];
  public cats:any = [];
  // this.loggedIn:any;

  constructor(private imagePicker: ImagePicker,
    private router: Router ,
    public navCtrl: NavController,
    private auth: AuthenticationService) {
  //   this.categories = [
  // {
  //   'catIcon':'././assets/icon/favicon.png',
  //   'catId':1,
  //   'catNameEn':'Barber Shop / حلاق'
  // },
  // {
  //   'catIcon':'././assets/icon/favicon.png',
  //   'catId':2,
  //   'catNameEn':'hussein / حداد'
  // },
  // {
  //   'catIcon':'././assets/icon/favicon.png',
  //   'catId':3,
  //   'catNameEn':'bilal / حلاق'
  // }];

}
   gotoBusinessesPage(id) {
let navigationExtras: NavigationExtras = {
    queryParams: {
        id: id
    }
};

    this.navCtrl.navigateForward(['businesses/'+ id],navigationExtras);

  }

  ngOnInit() {
  
     this.auth.getAllCategories().then(()=>{
         this.setFilteredItems();
     });
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  
 setFilteredItems() {

   this.cats = this.auth.categories;
    this.cats = this.filterItems(this.searchTerm);
 }

 filterItems(searchTerm) {
   console.log(this.searchTerm);
    return this.cats.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
