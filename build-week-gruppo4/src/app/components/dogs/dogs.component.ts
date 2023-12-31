import { Component } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { Ianimals } from 'src/app/interfaces/ianimals';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent {
  dog: Ianimals = {
    id: 0,
    name: '',
    breed: '',
    description: '',
    url: '',
  };

  dogs: Ianimals[] = [];

  constructor(private crudSvc: CrudService) {}

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.crudSvc.getAll('cane').subscribe((data) => {
      this.dogs = data;
      console.log(this.dogs);
    });
  }
}
