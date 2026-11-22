import { Component } from '@angular/core';
import { MaterialModule } from 'modules/material.module';

type AboutFeature = {
  icon: string;
  title: string;
  description: string;
};

type AboutLink = {
  icon: string;
  label: string;
  url: string;
};

@Component({
  selector: 'app-about',
  imports: [MaterialModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly features: AboutFeature[] = [
    {
      icon: 'view_sidebar',
      title: 'Layout responsivo',
      description: 'Menu lateral que vira gaveta no celular, cabeçalho fixo e conteúdo adaptado a cada tela.'
    },
    {
      icon: 'dark_mode',
      title: 'Tema claro e escuro',
      description: 'Troca de tema direto no cabeçalho, com os componentes do Angular Material.'
    },
    {
      icon: 'table_chart',
      title: 'Listagem de dados',
      description: 'Tabela com ordenação, paginação e estados de carregamento e lista vazia.'
    },
    {
      icon: 'account_tree',
      title: 'Organização por feature',
      description: 'Cada tela com seu componente, controller, service e tipos; estado com Signals.'
    }
  ];

  readonly technologies: string[] = [
    'Angular 19',
    'TypeScript',
    'Angular Material',
    'Signals',
    'RxJS',
    'SCSS',
    'GitHub Actions',
    'GitHub Pages'
  ];

  readonly links: AboutLink[] = [
    {
      icon: 'code',
      label: 'Código no GitHub',
      url: 'https://github.com/diegoferreirax/angular-web-app'
    },
    {
      icon: 'person',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/diegoferreirax'
    }
  ];
}
