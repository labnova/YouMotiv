import { Component } from '@angular/core';

export interface PrincipalBodyData {
  pesoComplessivo: string;
  massaMuscolare: string;
  massaGrassa: string;
  bmi: string;
  dataMisurazione: string;
}

const ELEMENT_DATA: PrincipalBodyData[] = [
  { pesoComplessivo: "90", massaMuscolare: '48%', massaGrassa: "23.1%", bmi: 'H', dataMisurazione: '10/12/2019' },
  { pesoComplessivo: "89", massaMuscolare: '47%', massaGrassa: "21.1%", bmi: 'H', dataMisurazione: '14/12/2019' },
  { pesoComplessivo: "88", massaMuscolare: '44%', massaGrassa: "24.1%", bmi: 'H', dataMisurazione: '16/12/2019' },
  { pesoComplessivo: "87", massaMuscolare: '41%', massaGrassa: "25.1%", bmi: 'H', dataMisurazione: '17/12/2019' },
  { pesoComplessivo: "86", massaMuscolare: '47%', massaGrassa: "27.1%", bmi: 'H', dataMisurazione: '19/12/2019' },
  { pesoComplessivo: "85", massaMuscolare: '40%', massaGrassa: "29.1%", bmi: 'H', dataMisurazione: '20/12/2019' },
  { pesoComplessivo: "84", massaMuscolare: '44%', massaGrassa: "27.1%", bmi: 'H', dataMisurazione: '21/12/2019' },
  { pesoComplessivo: "83", massaMuscolare: '42%', massaGrassa: "23.1%", bmi: 'H', dataMisurazione: '24/12/2019' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'YouMotiv';
  displayedColumns = ['pesoComplessivo', 'massaMuscolare', 'bmi', 'massaGrassa', "dataMisurazione"]
  dataForStarterTable = ELEMENT_DATA;
}
