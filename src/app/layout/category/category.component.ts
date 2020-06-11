import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  currentItem: Category;
  createForm: FormGroup;
  isUupdate: boolean; // is true if user processing for data update 

  constructor(public router: Router, private fb: FormBuilder, private categoryService: CategoryService, private customerService: CustomerService) {
    this.currentItem = new Category();
    this.isUupdate = false;
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      id: [0],
      label: [''],
      description: [''],
    });

    if (!this.customerService.isLogged) {
      return;
    }
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll(this.customerService.getToken())
      .subscribe(
        resp => {
          console.log(resp);
          this.categories = resp.content;
        }
      )
  }

  onAdd() {
    debugger;
    // initialize current item
    this.currentItem.catLabel = this.createForm.get('label').value;
    this.currentItem.catDescription = this.createForm.get('description').value;
    console.log('Current item: ' + this.currentItem);

    if (!this.isUupdate) { // new creation
      this.categoryService.save(this.currentItem, this.customerService.getToken())
        .subscribe(
          resp => {
            debugger;
            this.getAll();
            // renitialize item
            document.getElementById("closeModal").click();
            this.createForm.reset();
          }
        )
    } else { // update data
      // get item id
      this.currentItem.catId = this.createForm.get('id').value;

      this.categoryService.update(this.currentItem.catId, this.currentItem, this.customerService.getToken())
        .subscribe(
          resp => {
            debugger;
            this.getAll();
            // renitialize item
            document.getElementById("closeModal").click();
            this.createForm.reset();
          })
    }
  }

  updateForm(data) {
    debugger;
    this.isUupdate = true;
    // initialize current item
    this.createForm.patchValue({
      id: data['catId'],
      label: data['catLabel'],
      description: data['catDescription']
    });
  }

  deleteItem(data) {
    this.categoryService.delete(data['catId'], this.customerService.getToken())
      .subscribe(
        resp => {
          debugger;
          this.getAll();
          alert('Delete operation success !')
        }
      )
  }

}
