import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AccessPoint} from './models/AccessPoint';
import {Subject} from 'rxjs';

import {ModalDirective} from 'ngx-bootstrap/modal';
import {AccessPointService} from '../access-points/services/acess-point.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-access-points',
  templateUrl: './access-points.component.html',
  styleUrls: ['./access-points.component.scss']
})
export class AccessPointsComponent implements OnDestroy, OnInit {
  @ViewChild('deleteAccessPointModal') public deleteAccessPointModal: ModalDirective;
  accessPoints: AccessPoint[] = [];
  accessPointDelete: AccessPoint;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private accessPointService: AccessPointService, private toastr:
    ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.accessPointService.findAll().subscribe(data => {
      this.accessPoints = data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  insert() {
    this.router.navigate(['/access-points/new']);
  }

  deletePreview(accessPoint: AccessPoint) {
    this.accessPointDelete = accessPoint;
    this.deleteAccessPointModal.show();
  }

  delete(id: number) {
    this.deleteAccessPointModal.hide();
    this.accessPointService.delete(id).subscribe(
      (response) => {
        this.toastr.success(`Ponto de Acesso <b>${this.accessPointDelete.name}</b> deletado com sucesso!`);
        this.ngOnInit();
      },
      (error) => {
        this.toastr.error('Ocorreu um erro ao deletar o Ponto de Acesso.');
      }
    );
  }

}
