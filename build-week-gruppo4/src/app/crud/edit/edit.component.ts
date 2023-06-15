import { Component } from '@angular/core';
import { Ianimals } from 'src/app/interfaces/ianimals';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  animal: Partial<Ianimals> = {
    name: '',
    breed: '',
    description: '',
    url: '',
  };

  constructor(
    private crudSvc: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.crudSvc.getById(params.id, 'cane').subscribe((animal) => {
        this.animal = animal;
      });
    });
  }

  edit() {
    this.crudSvc.put(this.animal, 'cane').subscribe((animal) => {
      this.router.navigate(['/crud']);
    });
  }
}
