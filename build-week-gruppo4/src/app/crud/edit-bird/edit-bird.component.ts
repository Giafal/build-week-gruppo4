import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ianimals } from 'src/app/interfaces/ianimals';

@Component({
  selector: 'app-edit-bird',
  templateUrl: './edit-bird.component.html',
  styleUrls: ['./edit-bird.component.scss'],
})
export class EditBirdComponent {
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
      this.crudSvc.getById(params.id, 'uccelli').subscribe((animal) => {
        this.animal = animal;
      });
    });
  }

  edit() {
    this.crudSvc.put(this.animal, 'uccelli').subscribe((animal) => {
      this.router.navigate(['/crud']);
      console.log(animal);
    });
  }
}
