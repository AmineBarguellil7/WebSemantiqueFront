import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contrat-item',
  templateUrl: './contrat-item.component.html',
  styleUrls: ['./contrat-item.component.css']
})
export class ContratItemComponent implements OnInit {
  @Output() contratDeleted=new EventEmitter();
  @Input() contrat:{idContrat,dateDebutContrat:String,dateFinContrat:String,archive:String,specialite:String};
  contrats: any;
  
  constructor(private contratService:DataService) { }

  ngOnInit(): void {
    this.contratService.getAllContrats().subscribe(res => {
      this.contrats=res;
    }
      );
  }
  OnecontratDeleted(contrat) {
    this.contratService.deleteContrat( contrat.idContrat).subscribe(); 
    this.contratDeleted.emit(); 
  }

}
