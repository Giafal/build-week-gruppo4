import { Component } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { Ianimals } from 'src/app/interfaces/ianimals';

@Component({
  selector: 'app-hamsters',
  templateUrl: './hamsters.component.html',
  styleUrls: ['./hamsters.component.scss'],
})
export class HamstersComponent {
  hamster: Ianimals = {
    id: 0,
    name: '',
    breed: '',
    description: '',
    url: '',
  };

  hamsters: Ianimals[] = [];

  constructor(private crudSvc: CrudService) {}

  ngOnInit() {
    this.getHamsters();
  }

  getHamsters() {
    this.crudSvc.getAll('coniglio').subscribe((data) => {
      this.hamsters = data;
      console.log(this.hamsters);
    });
  }
}
