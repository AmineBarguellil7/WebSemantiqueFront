import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvisAddComponent } from "./avis-add/avis-add.component";
import { AvisListComponent } from "./avis-list/avis-list.component";
import { AvisComponent } from "./avis.component";


import { AvisupdateshowComponent } from "./avisupdateshow/avisupdateshow.component";

const routes: Routes = [
    {path : 'avis' , component : AvisComponent },
    {path : 'addavis' , component : AvisAddComponent },
    {path : 'showavis' , component : AvisListComponent },
    
    
    {path : 'updateitem' , component : AvisupdateshowComponent },
    
    ];
    @NgModule({
        imports:[
            RouterModule.forChild(routes)
        ],
        exports:[RouterModule]
        })
        export class AvisRoutingModule {
        
        }