import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

    public condition: boolean = true;
    public nome: string = "AAAAAAAA"; //Não sei pq não funciona, ferificar na no template tbm :(
    public conditionClick: boolean = true;
    public list: Array<{nome: string, idade: number}> = [
      {nome: "Júlia", "idade": 28},
      {nome: "Pedro", "idade": 26},
      {nome: "Fernanda", "idade": 26},
      {nome: "Amanda", "idade": 29},
  ];

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition){
      this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick (){
    if(this.conditionClick){
      this.conditionClick = false;
      } else {
        this.conditionClick = true;
      }
  }

  public onClickAddList() {
    this.list.push({nome: "Liru", idade: 1})
  }

  public onClickEventList(event : number) {
    this.list.splice(event, 1)
  }

}
