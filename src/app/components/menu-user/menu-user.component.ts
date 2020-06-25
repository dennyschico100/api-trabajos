import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Servicios/user.service'
import {TokenStorageService} from '../../Servicios/token-storage.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {


  me:string;
  constructor(
    private m:UserService,
    private tokenServicio:TokenStorageService
    ) { }

  ngOnInit():void{
    this.m.getUserBoard().subscribe(
      data=>{
        alert(data)
      },err=>{
        alert(err)
        
      }
    )

    //ESTO IMPRIME TODA LA RESPUSTA CUANDO SE LOGEA
      console.error(this.tokenServicio.getUser());
      
  }
}
