import { Component } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { Ianimals } from 'src/app/interfaces/ianimals';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss'],
})
export class BirdsComponent {
  bird: Ianimals = {
    id: 0,
    name: '',
    breed: '',
    description: '',
    url: '',
  };

  birds: Ianimals[] = [];

  constructor(private crudSvc: CrudService) {}

  ngOnInit() {
    this.getBirds();
  }
  getBirds() {
    this.crudSvc.getAll('uccelli').subscribe((data) => {
      this.birds = data;
    });
  }
}
