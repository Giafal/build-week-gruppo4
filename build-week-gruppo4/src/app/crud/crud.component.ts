import { Component } from '@angular/core';
import { Ianimals } from '../interfaces/ianimals';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  animals: Ianimals[] = [];

  newAnimal: Partial<Ianimals> = {
    name: '',
    breed: '',
    description: '',
    url: '',
  };

  constructor(private crudSvc: CrudService) {}

  ngOnInit() {
    this.crudSvc.getAll().subscribe((animals) => {
      this.animals = animals;
      console.log(animals);
    });
  }

  delete(id: number) {
    this.crudSvc.delete(id).subscribe((data) => {
      let index = this.animals.findIndex((p) => p.id == id);
      this.animals.splice(index, 1);
    });
  }

  create() {
    this.crudSvc.post(this.newAnimal).subscribe((data) => {
      this.animals.push(data);
    });
  }
}
