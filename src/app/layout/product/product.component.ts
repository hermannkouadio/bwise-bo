import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  categoryGroup: FormGroup;
  categories: Array<Category>;
  isUpdate: boolean;
  createForm: FormGroup;
  currentItem: Product = new Product();
  selectedCat: Category = new Category();

  constructor(private fb: FormBuilder, private productService: ProductService, private categoryService: CategoryService, private customerService: CustomerService) {
    // init value to display 
    /* this.categoryGroup = this.fb.group({
      category: [null]
    }); */
    this.categories = new Array<Category>();
  }

  ngOnInit(): void {

    this.createForm = this.fb.group({
      id: [0],
      label: [''],
      unitPrice: [''],
      description: [''],
      category: [null],
      imagePath: ['']
    });

    this.categoryService.getAll(this.customerService.getToken()).subscribe(resp => {
      console.log('Categories: ' + JSON.stringify(resp.content))
      this.categories = resp.content;
    });

    if (!this.customerService.isLogged) {
      return;
    }
    console.log(this.customerService.getToken());
    this.productService.getAll(this.customerService.getToken())
      .subscribe(
        resp => {
          console.log(resp);
          this.products = resp.content;
        }
      )
  }

  initProduct() {
    this.createForm = this.fb.group({
      id: [0],
      label: [''],
      unitPrice: [''],
      description: [''],
      category: [null],
      imagePath: ['']
    });
  }

  onAdd() {
    debugger;
    // initialize current item
    this.currentItem.prdLabel = this.createForm.get('label').value;
    this.currentItem.prdUP = this.createForm.get('unitPrice').value;
    this.currentItem.prdDescription = this.createForm.get('description').value;
    var cat : Category = new Category();
    cat.catId = this.createForm.get('category').value;
    this.currentItem.category = cat;
    //this.currentItem.imagePath = this.createForm.get('imagePath').value;

    if (!this.isUpdate) { // new creation
      this.productService.save(this.currentItem, this.customerService.getToken())
        .subscribe(
          () => {
            this.getAll();
            // renitialize item
            document.getElementById("closeModal").click();
            this.createForm.reset();
          }
        )
    } else { // update data
      // get item id
      this.currentItem.prdId = this.createForm.get('id').value;

      alert(JSON.stringify(this.currentItem));
      this.productService.update(this.currentItem.prdId, this.currentItem, this.customerService.getToken())
        .subscribe(
          () => {
            this.getAll();
            document.getElementById("closeModal").click();
            this.createForm.reset();
          });
    }
  }

  updateForm(data) {
    this.isUpdate = true;

    // initialize current item
    this.createForm.patchValue({
      id: data['prdId'],
      label: data['prdLabel'],
      unitPrice: data['prdUP'],
      description: data['prdDescription'],
      category: data['category'].catId
    });
  }

  delete(data) {
    // initialize current item
    this.createForm.patchValue({
      id: data['prdId'],
      label: data['prdLabel'],
      unitPrice: data['prdUP'],
      description: data['prdDescription'],
      category: data['category'].catId
    });
  }

  confirmDelete() {
    this.productService.delete(this.createForm.get('id').value, this.customerService.getToken())
      .subscribe(() => {
        this.getAll();
        document.getElementById("closeDeleteModal").click();
      })
  }

  getAll() {
    this.productService.getAll(this.customerService.getToken())
      .subscribe(
        resp => {
          console.log(resp);
          this.products = resp.content;
        }
      )
  }
}
