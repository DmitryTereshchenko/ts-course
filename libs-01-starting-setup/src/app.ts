import Product from './product.model';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

const products = [
  {
    title: 'A Carpet',
    price: 29.99
  },
  {
    title: 'A Book',
    price: 19.99
  }
];

const newProd = new Product('', -99);
validate(newProd).then(errors => {
  if (errors.length) {
    console.log(errors.map(e => {
      let val = '';
      for (const key in e.constraints) {
        val = e.constraints[key];
      }
      return val;
    }));
    return;
  }

  console.log(newProd.getInformation());
})


const loadedProducts = plainToClass(Product, products);

for (let prod of loadedProducts) {
  console.log(prod.getInformation());
}