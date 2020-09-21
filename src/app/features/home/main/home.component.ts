import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products } from 'src/app/core/model/products.interface';
import { selectProducts, selectProductsByMarca } from 'src/app/redux/products';
import { retrieveAllProducts } from 'src/app/redux/products/products.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  listaToShow: string = "";

  cambiaLista(lista: string) {
    this.listaToShow = lista;
  }

  constructor(private store: Store, config: NgbCarouselConfig, private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  get products(): Observable<Products[]> {
    return this.store.pipe(select(selectProductsByMarca, {marca: this.listaToShow}));
  }
}
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { Products } from 'src/app/core/model/products.interface';
// import { selectProducts, selectProductsByMarca } from 'src/app/redux/products';
// import { retrieveAllProducts } from 'src/app/redux/products/products.action';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   providers: [NgbCarouselConfig]
// })
// export class HomeComponent implements OnInit {

//   listaToShow: string = "";

//   cambiaLista(lista: string) {
//     this.listaToShow = lista;
//   }

//   constructor(private store: Store, config: NgbCarouselConfig, private router: Router) {
//     // customize default values of carousels used by this component tree
//     config.interval = 10000;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//   }

//   ngOnInit(): void {
//     this.store.dispatch(retrieveAllProducts())
//   }

//   images = ["../../../assets/logo/superga.png", "../../../assets/logo/adidas.jpg", "../../../assets/logo/vans.jpg"];
  

//   get products(): Observable<Products[]> {
//     return this.store.pipe(select(selectProducts));
//   }

//   get productsSuperga(): Observable<Products[]> {
//     return this.store.pipe(select(selectProductsByMarca, {marca: "superga"}));
//   }

//   get productsAdidas(): Observable<Products[]> {
//     return this.store.pipe(select(selectProductsByMarca, {marca: "adidas"}));
//   }

//   get productsVans(): Observable<Products[]> {
//     return this.store.pipe(select(selectProductsByMarca, {marca: "vans"}));
//   }
  
//   idslide(id: string, lista: string) {
//     console.log(id, lista)
//     let slideId :number = Number(id.substr(id.length - 1, id.length));
//     console.log(slideId)
//     switch (lista) {
//       case "superga" : {
//         this.productsSuperga.subscribe(products => {
//           let product = products[slideId];
//           console.log(product);
//           this.router.navigateByUrl("personalizza/" + product.id)
//         })
//          break;
//       }
//       case "vans" : {
//         this.productsVans.subscribe(products => {
//           let product = products[slideId];
//           console.log(product);
//           this.router.navigateByUrl("personalizza/" + product.id)
//         })
//          break;
//       }
//       case "adidas" : {
//         this.productsAdidas.subscribe(products => {
//           let product = products[slideId];
//           console.log(product);
//           this.router.navigateByUrl("personalizza/" + product.id)
//         })
//          break;
//       }

//     }
//   }
// }