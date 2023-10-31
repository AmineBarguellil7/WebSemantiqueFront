import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css'],
})
export class ListeProductComponent implements OnInit {
  name: string = '';
  Id: string = '';
  product: Product = new Product();

  productToModify = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    weight: 0,
    image_url: '',
    store_id: 0,
  };

  listProducts: any;
  router: any;

  constructor(private productService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.getProducts().subscribe((res) => {
      this.listProducts = res;
      console.log(this.listProducts);
    });
  }

  onUpdateProduct(product) {
    this.productToModify = product;
  }

  ModifierProduct() {
    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: 'annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Modification avec succès!', '', 'success');
        this.productService.updateProduct(this.product).subscribe(
          (res) => {
            console.log(res);
            this.loadData(); // Reload the data after update
          },
          (err) => console.log(err)
        );
      } else if (result.isDenied) {
        this.loadData(); // Reload the data if changes are not saved
        Swal.fire('Les modifications ne sont pas enregistrées', '', 'info');
      }
    });
  }

  deleteProduct(product: any) {
    Swal.fire({
      title: 'Vous Etes sur?',
      text: 'Vous ne pouvez pas revenir en arrière!',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Supprimé!', 'Produit supprimé', 'success');
        this.productService.deleteProduct(product.idProduct).subscribe(
          (res) => {
            console.log(res);
            this.loadData(); // Reload the data after deletion
          },
          (err) => console.log(err)
        );
      } else if (result.isDismissed) {
        Swal.fire('Annulé', 'Produit non supprimé', 'error');
      }
    });
  }

  ShowDetails(id: number, name: string, description: string) {
    this.router.navigate(['/listeProducts/' + id, name, description]);
  }

  SearchProductById(id: string) {
    return !this.Id || id == this.Id;
  }

  TestStatus(productName: string) {
    return !this.name || !productName.startsWith(this.name);
  }

  AfficherList() {
    this.loadData(); // Reload the data
  }
}
