import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetailForm: FormGroup;
  product: Product;
  categoryLabel :string = '';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private customService: CustomerService, private productService: ProductService) {
    this.product = new Product();
    this.productDetailForm = this.fb.group({
      id: ['0'],
      label: ['label'],
      unitPrice: [0.0],
      description: ['description'],
      imageUrl: ['imagePath'],
      category: [null]
    });
  }

  ngOnInit(): void {
    // retrieve productId
    this.route.paramMap.subscribe(params => {
      this.product.prdId = +params.get('productId');
    });

    // get product from API
    this.productService.getOne(this.product.prdId, this.customService.getToken()).subscribe(resp => {
      this.product = resp;
      this.categoryLabel = resp.category['catLabel'];
      // init formgroup
      this.productDetailForm = this.fb.group({
        id: [this.product.prdId],
        label: [this.product.prdLabel],
        unitPrice: [this.product.prdUP],
        description: [this.product.prdDescription],
        imageUrl: [this.product.imagePath],
        category: [resp['category']]
      });
    });
  }

}
