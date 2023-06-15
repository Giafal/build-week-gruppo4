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
  dogs: Ianimals[] = [];
  cats: Ianimals[] = [];
  birds: Ianimals[] = [];
  hamsters: Ianimals[] = [];

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
    this.getAnimals();
  }

  getAnimals() {
    this.crudSvc.getAll('cane').subscribe((data) => {
      this.dogs = data;
      console.log(data);
    });
    this.crudSvc.getAll('gatto').subscribe((data) => {
      this.cats = data;
      console.log(data);
    });
    this.crudSvc.getAll('uccelli').subscribe((data) => {
      this.birds = data;
      console.log(data);
    });
    this.crudSvc.getAll('coniglio').subscribe((data) => {
      this.hamsters = data;
      console.log(data);
    });
  }

  deleteDog(id: number) {
    this.crudSvc.delete(id, 'cane').subscribe((data) => {
      let index = this.dogs.findIndex((p) => p.id == id);
      this.dogs.splice(index, 1);
    });
  }

  deleteCat(id: number) {
    this.crudSvc.delete(id, 'gatto').subscribe((data) => {
      let index = this.cats.findIndex((p) => p.id == id);
      this.cats.splice(index, 1);
    });
  }

  deleteBird(id: number) {
    this.crudSvc.delete(id, 'uccelli').subscribe((data) => {
      let index = this.birds.findIndex((p) => p.id == id);
      this.birds.splice(index, 1);
    });
  }

  deleteHamster(id: number) {
    this.crudSvc.delete(id, 'hamster').subscribe((data) => {
      let index = this.hamsters.findIndex((p) => p.id == id);
      this.hamsters.splice(index, 1);
    });
  }

  create(specie: string) {
    console.log(specie);

    this.crudSvc.post(this.newAnimal, specie).subscribe((data) => {
      // this.animals.push(data);
      this.form.reset();
    });
  }
}
