import { Component, Input, EventEmitter } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product []
constructor (){
  this.products = [ 
    new Product(
    'NATOJACKET',
    'Blue Jacket',
    'https://is4.fwrdassets.com/images/p/fw/z/SLAU-MO89_V1.jpg',
    ['Men', 'Accessories', 'Hats'],
    29.99
  ),
  new Product(
    'MYSHOES',
    'Black running shoes',
    'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/C/115787_1636905931.jpg',
    ['Men', 'Accessories', 'Hats'],
    29.99
  ),

  new Product(
    'NICEHAT',
    'A nice black hat',
    'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28643/top-hat-clipart-md.png',
    ['Men', 'Accessories', 'Hats'],
    29.99
  )

]
}
productWasSelected($event: any): void {
  console.log($event);
}

}
