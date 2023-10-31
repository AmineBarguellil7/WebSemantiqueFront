import { Component,  Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-universite-item',
  templateUrl: './universite-item.component.html',
  styleUrls: ['./universite-item.component.css']
})
export class UniversiteItemComponent implements OnInit {
  @Output() universiteDeleted=new EventEmitter();
  @Input() universite:{idUniv,nomUniv:String,nombre_departement:number,email:String,numero:String};
  constructor(private dataservice:DataService) { }
  universites: any;
  ngOnInit(): void {
    this.dataservice.retriveAllUniversite().subscribe(res => {
      this.universites=res;
  });
}
OneuniversiteDeleted(universite) {
  this.dataservice.deleteUniversite( universite.idUniv).subscribe(); 
  this.universiteDeleted.emit(); 
}
}
