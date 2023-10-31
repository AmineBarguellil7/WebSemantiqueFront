import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat/contrat.component';
import { AfficherEquipeComponent } from './equipe/afficher-equipe/afficher-equipe.component';
import { OrderListComponent } from './order_folder/order-list/order-list.component';
import { AddOrderComponent } from './order_folder/addorder/addorder.component';
import { ListeProductComponent } from './product/afficherList/liste-product.component';
import { ModifyOrderComponent } from './order_folder/modifyorder/modifyorder.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./article/article.module').then((m) => m.ArticleModule),
  },
  { path: 'products', component: ListeProductComponent },

  {
    path: '',
    loadChildren: () =>
      import('./equipe/equipe.module').then((m) => m.EquipeModule),
  },
  {
    path: 'home',
    component: AfficherEquipeComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./universite_folder/update-universite/universite.module').then(
        (m) => m.UniversiteModule
      ),
  },
  { path: 'contrat', component: ContratComponent },
  {
    path: '',
    loadChildren: () =>
      import('./contrat/contrat.module').then((m) => m.ContratModule),
  },
  {
    path: 'etudiants',
    loadChildren: () =>
      import('./etudiant/etudiant.module').then((m) => m.EtudiantModule),
  
},
{ path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },

{path : 'AddOrder' , component : AddOrderComponent },
{ path: 'orderlist', component: OrderListComponent },
{ path: 'modifyorder/:id', component: ModifyOrderComponent },

{path:"",loadChildren: () => import('./avis/avis.module').then(m => m.AvisModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
