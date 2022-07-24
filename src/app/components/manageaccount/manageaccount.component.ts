import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/Account/account.service';

@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.css']
})
export class ManageaccountComponent implements OnInit {

  emailtoupdate : "";
  password:"";
  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
  }
updateemail(email:String){
  if(confirm("Are you sure to update your email?"))
  {  
    this.accountservice.get(13).subscribe({next : (res) => {
      console.log(res);

      this.accountservice.updateemail(res.id,email).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    },
    error : (e) => console.error(e)
  });
  }

}
updatepassword(paasword :String){
  if(confirm("Are you sure to update your password?"))
  {  
    this.accountservice.get(13).subscribe({next : (res) => {
    console.log(res);

    this.accountservice.updatepassword(res.id,this.password).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  },
  error : (e) => console.error(e)
});

  }
}
}
