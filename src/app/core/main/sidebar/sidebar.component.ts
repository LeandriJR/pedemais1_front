import { Component } from '@angular/core';
import { RotasService } from '../../services/rotas.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../envirioments/envirioments.prod';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
    
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {
  data$: any;
  data: any;

  // permissoes$: Observable<any>;
  // permissoesSolicitadas: string[];
  permissoes: string[];

  readonly API = environment['API_BACKEND'];

  constructor(
    private rotasService: RotasService,
  //  private permissaoService PermissaoService
  ) {
    this.permissoes = [];
    this.data = this.rotasService.buscarRotas();
    console.log(this.data)

  }

  tirarShow(data: any): void {
    for (const dado of data) {
      if (dado.show) {
        dado.show = false;
      }
      if (dado.filhos.length > 0) {
        this.tirarShow(dado.filhos);
      }
    }
  }
  toggleDrop(event:any, item:any, itens:any): void {
    const isShow = item.show;

    event.stopPropagation();
    this.tirarShow(itens);

    item.show = !isShow;
  }

}
