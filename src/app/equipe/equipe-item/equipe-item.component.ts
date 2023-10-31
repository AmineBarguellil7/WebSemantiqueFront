import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equipe-item',
  templateUrl: './equipe-item.component.html',
  styleUrls: ['./equipe-item.component.css']
})
export class EquipeItemComponent implements OnInit {
  @Output() equipeDeleted=new EventEmitter();
  @Input() equipe:{idEquipe,nomEquipe:string,niveau:string,salle:number,dateCreation:Date};
  equipes: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getEquipes().subscribe(res => {
      this.equipes=res;
    }
      );
  }
  OnequipeDeleted(equipe) {
    this.dataService.deleteEquipe(equipe.idEquipe).subscribe(); 
    this.equipeDeleted.emit(); 
  }
}
