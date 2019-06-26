import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
user;
  constructor(
  private userService: UserService,
  private route:ActivatedRoute
  
  ) {

   }

  ngOnInit() {
    // grab the user name out of the url
  this.route.params.subscribe(params =>{
    const username =params['username'];
    this.userService.getuser(username).subscribe(user => this.user=user)
  })
    // Use the servise to get the data from the git Api
    // Binde that the user vari able
  }

}
