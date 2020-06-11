import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CategoryService } from '../../services/category.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  categoryDetailForm: FormGroup;
  category: Category;
  products: Array<Product>;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private customService: CustomerService, private categoryService: CategoryService) {
    this.category = new Category();
    this.products = new Array<Product>();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category.catId = +params.get('categoryId');
    });
    // get product from API
    this.categoryService.getOne(this.category.catId, this.customService.getToken()).subscribe(resp => {

      this.category = resp;
      console.log('Category: ' + JSON.stringify(this.category));
      // init formgroup
      this.categoryDetailForm = this.fb.group({
        id: [this.category.catId],
        label: [this.category.catLabel],
        description: [this.category.catDescription],
      });
    });

    // get category products
    this.categoryService.getProducts(this.category.catId, this.customService.getToken()).subscribe(resp => {
      this.products = resp.content;
      console.log('Products: ' + JSON.stringify(this.products));
    });
  }
}
