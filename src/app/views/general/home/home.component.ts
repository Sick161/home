import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public agendas: any[] = [];

  @ViewChild('parallax', { static: false }) parallaxDiv: ElementRef;

  constructor() { }

  ngOnInit() {
    this.getAgendas();
  }

  getAgendas() {
    this.agendas = [
      {
        local: 'Casa da Música (SP)',
        data_hora: '10/04/2020 18:00',
      },
      {
        local: 'Prédio da Música (RJ)',
        data_hora: '12/04/2020 20:00',
      },
      {
        local: 'Mansão da Música (TO)',
        data_hora: '14/04/2020 22:00',
      },
      {
        local: 'Iate da Música (PR)',
        data_hora: '16/04/2020 00:00',
      },
      {
        local: 'Barraco da Música (RS)',
        data_hora: '18/04/2020 02:00',
      },
    ];
  }

  // onMouseMove(event) {
  //   const width = window.innerWidth / 2;
  //   const heigth = window.innerHeight / 2;
  //   const mouseX = event.clientX;
  //   const mouseY = event.clientY;
  //   const depth1 = `${50 - (mouseX - width) * 0.01}% ${50 - (mouseY - heigth) * 0.01}%`;
  //   const depth2 = `${50 - (mouseX - width) * 0.02}% ${50 - (mouseY - heigth) * 0.02}%`;
  //   const depth3 = `${50 - (mouseX - width) * 0.06}% ${50 - (mouseY - heigth) * 0.06}%`;

  //   const x = `${depth3}, ${depth2}, ${depth1}`;

  //   console.log(x);

  //   this.parallaxDiv.nativeElement.style.backgroundPosition = x;
  // }
}
