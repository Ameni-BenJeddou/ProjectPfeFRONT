import { Component,  OnInit }from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private securityservice : SecurityService) { }

  ngOnInit(): void {
  }
  signout():void{
    this.securityservice.signOut();
  }
}
