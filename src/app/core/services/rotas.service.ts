import { Injectable } from '@angular/core';

export interface TreeNode {
  path: string;
  texto: string;
  img: string;
  permissao?: string;
  urlCarregarTemplate?: string;
  ativarStatus?: boolean;
  urlPaginado?: string;
  filhos: TreeNode[] | [];
  ptFuncao?: string;
  camposExcel?: any;
}

@Injectable({
  providedIn: 'root'
})


export class RotasService {

  rotas: TreeNode[];
  
  constructor(){
    this.rotas = [
      {
        path: '',
        texto: 'Serviços',
        img: 'assets/img/icons/icon_vacinas.svg',
        permissao: 'acessar_servico',
        filhos: [
          {
            path: 'agendamento',
            texto: 'Agendamentos',
            permissao: 'acessar_servico_agendamento',
            img: 'assets/img/agendamentos/icons_agendamentos.svg',
            filhos: []
          }
        ]
      },
      ]
  }
  buscarRotas(): TreeNode[] {
    return this.rotas;
  }
}
