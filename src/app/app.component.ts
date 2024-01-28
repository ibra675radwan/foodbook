import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isbutoonclicke:boolean = true;
  it: any;

  constructor(private AuthService:AuthService){
  }

  isLoggedIn(): boolean{
    return this.AuthService.isAuthenticatedUser();
    
      }
    
  toogleSideBar(){
  this.isbutoonclicke=!this.isbutoonclicke;
  }
}
