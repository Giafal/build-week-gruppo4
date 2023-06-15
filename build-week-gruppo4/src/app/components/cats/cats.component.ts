import { Component } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { Ianimals } from 'src/app/interfaces/ianimals';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent {
  cat: Ianimals = {
    id: 0,
    name: '',
    breed: '',
    description: '',
    url: '',
  };

  cats: Ianimals[] = [];

  constructor(private crudSvc: CrudService) {}

  ngOnInit() {
    this.getCats();
  }
  getCats() {
    this.crudSvc.getAll('gatto').subscribe((data) => {
      this.cats = data;
    });
  }
}
