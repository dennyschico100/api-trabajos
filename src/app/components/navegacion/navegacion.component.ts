import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../Servicios/token-storage.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService
 ) { }

  
  isLoggedIn = false;
  username:string;
  ngOnInit(): void {
    

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.email;
      

    }

  }


  
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();

  } 
}
