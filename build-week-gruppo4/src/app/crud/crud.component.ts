import { Component, ViewChild } from '@angular/core';
import { Ianimals } from '../interfaces/ianimals';
import { CrudService } from './crud.service';
import { NgForm } from '@angular/forms';

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

  specie!: string;

  @ViewChild('f') form!: NgForm;

  constructor(private crudSvc: CrudService) {}

  ngOnInit() {
    this.crudSvc.getAll().subscribe((animals) => {
      this.animals = animals;
      console.log(animals);
    });
  }

  delete(id: number) {
    this.crudSvc.delete(id, 'cane').subscribe((data) => {
      let index = this.animals.findIndex((p) => p.id == id);
      this.animals.splice(index, 1);
    });
  }

  create(specie: string) {
    console.log(specie);

    this.crudSvc.post(this.newAnimal, specie).subscribe((data) => {
      this.animals.push(data);
      this.form.reset();
    });
  }
}
