import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { Equipe } from '../models/equipe'; 
import { Universite } from '../models/Universite';
import { Contrat } from '../models/contrat';
import { Etudiant } from '../models/Etudiant';
import {Product } from '../models/Product';import { Store } from '../models/store';
import { Order } from '../models/order';
import { Avis } from '../models/Avis';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getarticleUrl="http://localhost:8020/article";
  // public AjoutarticleUrl='http://localhost:8020/article/addArticle';
  public AjoutarticleUrl='http://localhost:9093/article/addArticle';
  public UpdatearticleUrl="http://localhost:8020/article/updateArticle";
  public DeletearticleUrl="http://localhost:8020/article/";
  public getarticleByIdUrl="http://localhost:8020/article/";


    private addProductUrl = 'http://localhost:8024/product/add';
    private getProductUrl = 'http://localhost:8024/product';
    private updateProductUrl = 'http://localhost:8024/product/update';
    private deleteProductUrl = 'http://localhost:8024/product/delete';
    private getProductByIdUrl = 'http://localhost:8024/product';
  
    public getavisUrl="http://localhost:8022/avis/all";
  public AjoutavisUrl='http://localhost:8022/avis/add';
  public UpdateavisUrl=" http://localhost:8022/avis/update";
  public DeleteavisUrl="http://localhost:8022/avis/delete";
  public getavisByIdUrl="http://localhost:8022/avis/get"



  
  public ahmedUrl = 'http://localhost:8082/equipe';
  constructor(private http:HttpClient) { }



addEquipe(equipe?: Equipe): Observable<Object>{
  return this.http.post<Object>(`${this.ahmedUrl}`, equipe) ;
}
getEquipes (){
  return this.http.get(this.ahmedUrl) ;
}
deleteEquipe(idT: any){
  return this.http.delete('http://localhost:8082/equipe/'+idT) ;
}
updateEquipe(data: any){
  return this.http.put('http://localhost:8082/equipe/',data) ;
}
getEquipeById(idT: any){
  return this.http.get('http://localhost:8082/equipe/'+idT) ;
}


addProduct(product: Product): Observable<Object> {
  return this.http.post<Object>(this.addProductUrl, product);
}

getProducts() {
  return this.http.get(this.getProductUrl);
}

updateProduct(product: Product) {
  return this.http.put(this.updateProductUrl, product);
}

deleteProduct(productId: any) {
  return this.http.delete(this.deleteProductUrl + productId);
}

getProductById(productId: any) {
  return this.http.get(this.getProductByIdUrl + productId);
}


addStore(store?: Store): Observable<Object>{
  return this.http.post<Object>('http://localhost:8025/store',store) ;
}
getStores (){
  return this.http.get('http://localhost:8025/store') ;
}
deleteStore(idT: any){
  return this.http.delete('http://localhost:8025/store/'+idT) ;
}
updateStore(data: any){
  return this.http.put('http://localhost:8025/store/updatestore',data) ;
}
getStoreById(idT: any){
  return this.http.get('http://localhost:8025/store/'+idT) ;
}




addArticle(article:Article):Observable<Object> {
return this.http.post<Object>(this.AjoutarticleUrl,article);
}

getListArc() {
  return this.http.get(this.getarticleUrl);
}

UpdateArticle(article){
return this.http.put(this.UpdatearticleUrl,article);
}

deleteArticle(idArc:any){
  return this.http.delete(this.DeletearticleUrl+idArc);
}
getArticleById(idArc:any) {
  return this.http.get(this.getarticleByIdUrl+idArc);
}


adduniversite(universite?: Universite): Observable<Object>{
  return this.http.post<Object>('http://localhost:8082/universite/' ,universite) ;
}
retriveAllUniversite() {
  return this.http.get('http://localhost:8082/universite/');
}
deleteUniversite(idUniversite:any){
  return this.http.delete('http://localhost:8082/universite/'+idUniversite);
}
getById(idUniversite:any) {
  return this.http.get('http://localhost:8082/universite/'+idUniversite);
}
updateUniversite(data: any){
  return this.http.put('http://localhost:8082/universite/',data) ;
}

addContrat(contrat?:Contrat): Observable<Object> {
  return this.http.post<Object>('http://localhost:8082/contrat/',contrat);
  }
  
  getAllContrats() {
    return this.http.get('http://localhost:8082/contrat/');
  }
  
  UpdateContrat(contrat:Contrat){
  return this.http.put('http://localhost:8082/contrat/',contrat);
  }
  
  deleteContrat(idContrat:any){
    return this.http.delete('http://localhost:8082/contrat/'+idContrat);
  }
  getContratById(idContrat:any) {
    return this.http.get('http://localhost:8082/contrat/'+idContrat);
  }
  addEtudiant(etudiant:Etudiant){
    console.log("Test Service");
   return  this.http.post<Object>('http://localhost:8082/etudiant/',etudiant);
  
  }public GetAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:8082/etudiant/');
  }
  deleteEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    console.log("delete etudiant");
    return this.http.delete<Etudiant>( 'http://localhost:8082/etudiant/'+etudiant.id) }
  updateEtudiant(etudiant:Etudiant):Observable<Etudiant>{
  
      return this.http.put<Etudiant>('http://localhost:8082/etudiant/',etudiant);
      console.log("update etudiant")
    }
    getEtudiant(id:number):Observable<Etudiant>{
  
      return this.http.get<Etudiant>('http://localhost:8082/etudiant/'+id);
      console.log("get etudiant");
    }
    getOrders(): Observable<Order[]> {
      // Adjust the URL as per your API
 
     // Send a GET request to the server to fetch orders
     return this.http.get<Order[]>(`http://localhost:8021/order`);
     
   }
   addOrder(order: Order): Observable<any> {
     return this.http.post(`http://localhost:8021/order/addOrder`, order);
   }
   deleteOrder(order: Order): Observable<any> {
    const url = `http://localhost:8021/order/${order.id}`; // Adjust the URL structure as per your API
    // Assuming you have an `id` property in your Order model

    // Send a DELETE request to remove the order
    return this.http.delete(url);
  }
  modifyOrder(order: Order): Observable<any> {
    const url = `http://localhost:8021/order/updateOrder`; // Adjust the URL structure as per your API
    // Assuming you have an `id` property in your Order model

    // Send a PUT request to update the order
    return this.http.put(url, order);
  }
  getOrderById(orderId: string): Observable<Order> {
    const url = `http://localhost:8021/order/${orderId}`; // Adjust the URL structure as per your API

    return this.http.get<Order>(url);
  }
  addAvis(avis:Avis):Observable<Object> {
    return this.http.post<Object>(this.AjoutavisUrl,avis);
    }
    
    getListAvis() {
      return this.http.get(this.getavisUrl);
    }
    
    UpdateAvis(avis){
    return this.http.put(this.UpdateavisUrl,avis);
    }
    
    
    
    deleteAvis(avis: Avis): Observable<any> {
      const url = `http://localhost:8022/avis/delete/${avis.idAvis}`; // Adjust the URL structure as per your API
      // Assuming you have an `id` property in your Order model
    
      // Send a DELETE request to remove the order
      return this.http.delete(url);
    }
    
    
    
    
    
    getAvisById(idAvis:any) {
      return this.http.get(this.getavisByIdUrl+idAvis);
    }
    
}
