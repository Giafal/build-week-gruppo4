import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { AccesData } from 'src/app/interfaces/acces-data';
import { Icomments } from 'src/app/interfaces/icomments';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  isLoggedIn: boolean = false

  dataComments: Icomments = {
    name: '',
    surname: '',
    text: '',

  }

  commentsArray: Icomments[] = [];

  constructor(private crudSvc: CrudService){
    const local = localStorage.getItem('user');
    if(local!= null){
      this.isLoggedIn = true;
      const user: AccesData = JSON.parse(local);
      console.log(user);
      this.dataComments.name = user.user.name;
      this.dataComments.surname = user.user.surname;
    }

    this.crudSvc.getComments()
    .subscribe(comments => this.commentsArray = comments);
  }



  addComm () {
    this.crudSvc.addComments(this.dataComments)
    .subscribe(comments => {
      console.log(comments);
      this.crudSvc.getComments()
      .subscribe(comments => this.commentsArray = comments);
      this.dataComments.text = '';
    }
    )
  }

}
