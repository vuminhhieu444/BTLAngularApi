import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private itemsSubject = new BehaviorSubject<any[]>([]);
  items = this.itemsSubject.asObservable();
  constructor() {
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    if (!local_storage) {
      local_storage = [];
    }
    this.itemsSubject.next(local_storage);
  }

  addToCart(item) {
    // item.quantity = 1;
    let local_storage:any;
    if (localStorage.getItem('cart') == null) {
      local_storage = [item];
    } else {
      local_storage = JSON.parse(localStorage.getItem('cart'));
      let ok = true;
      for (let x of local_storage) {
        if (x.maSanPham == item.maSanPham) {
          x.soluong += 1;
          ok = false;
          break;
        }
      }
      if(ok){
        local_storage.push(item);
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  getItems() {
    if (localStorage.getItem('cart') == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }

  deleteItem(item_id) {
    let local_storage = this.getItems().filter((x) => x.maSanPham != item_id);
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  addQty(item) {
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    for (let x of local_storage) {
      if (x.maSanPham == item.id) {
        x.soluong = item.quantity;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    this.itemsSubject.next(local_storage);
  }

  numberOfItems() {
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    let quantity=0;
    for (let index = 0; index < local_storage.length; index++) {
      quantity += Number(local_storage[index].soluong);

    }
    return quantity;
  }
  total(){
    let local_storage = JSON.parse(localStorage.getItem('cart'));
    let sum=0;
    for (let index = 0; index < local_storage.length; index++) {
      sum += Number(local_storage[index].dongia)*Number(local_storage[index].soluong);
    }
    return sum;
  }
  clearCart() {
   localStorage.clear();
   this.itemsSubject.next(null);
  }
}
