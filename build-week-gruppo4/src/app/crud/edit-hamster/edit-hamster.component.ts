import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ianimals } from 'src/app/interfaces/ianimals';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-hamster',
  templateUrl: './edit-hamster.component.html',
  styleUrls: ['./edit-hamster.component.scss'],
})
export class EditHamsterComponent {
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
      this.crudSvc.getById(params.id, 'coniglio').subscribe((animal) => {
        this.animal = animal;
      });
    });
  }

  edit() {
    this.crudSvc.put(this.animal, 'coniglio').subscribe((animal) => {
      this.router.navigate(['/crud']);
    });
  }
}
