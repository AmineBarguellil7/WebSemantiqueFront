import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-departement-item',
  templateUrl: './departement-item.component.html',
  styleUrls: ['./departement-item.component.css']
})
export class DepartementItemComponent implements OnInit {

  @Output() departementDeleted=new EventEmitter();
  @Input() departement:{idDepart,nomDepart:string,emplacement:string,prix:string,surface:string};
  departList:any;
  constructor(private departementService:DataService) { }

  ngOnInit(): void {
    this.departementService.getListDepartements().subscribe((res)=>this.departList=res);
  }
  OnDeleteDepartement(depart) {
    this.departementService.deleteDepartement(depart.idDepart).subscribe(); 
    this.departementDeleted.emit();  
  }
}
