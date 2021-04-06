import {Component, OnInit} from '@angular/core';
import {AccessPointService} from '../services/acess-point.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AccessPoint} from '../models/AccessPoint';

@Component({
  selector: 'app-access-point-form',
  templateUrl: './access-point-form.component.html',
  styleUrls: ['./access-point-form.component.scss']
})
export class AccessPointFormComponent implements OnInit {
  accessPoint: AccessPoint;
  exchanges = [];
  errors: string[];
  edition: boolean;

  constructor(private accessPointService: AccessPointService, private toaster:
    ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.edition = this.router.url === '/access-points/edit';
    this.accessPoint = new AccessPoint();

    this.accessPointService.getExchanges().subscribe(data => {
      this.exchanges = data;
    });
  }

  onSubmit(): void {
    this.accessPointService.insert(this.accessPoint).subscribe(
      data => {
        this.router.navigate(['/access-points/list']);
        this.toaster.success(`Ponto de Acesso <b>${this.accessPoint.name}</b> criado com sucesso!`);
      },
      err => {
        this.errors = [err.error.message];
        this.errors.forEach(element => {
          this.toaster.error(`${element}`);
        });
      }
    );
  }

}
