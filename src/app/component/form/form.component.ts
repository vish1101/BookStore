import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  searchBook = '';
  bookForm!: FormGroup;
  id!: string;
  title!: string;
  author!: string;
  publishDate!: string;
  price!: string;
  bookArray: any[] = [];
  isUpdate: boolean = false;
  constructor(private bookservice: BookService, private route: Router) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      publishDate: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
    this.bookArray = this.bookservice.getBooks();
  }
  addBookFormHandler(d: any) {
    this.bookArray.push(d.value);

    this.bookForm.reset();
  }
  editHandler(b: any) {
    localStorage.setItem('bookId', b.id);
    this.isUpdate = true;
    this.bookArray.forEach((ele) => {
      if (ele === b) {
        this.id = ele.id;
        this.title = ele.title;
        this.author = ele.author;
        this.publishDate = ele.publishDate;
        this.price = ele.price;
      }
    });
  }
  updatedBook() {
    this.isUpdate = false;
    let getId = localStorage.getItem('bookId');
    console.log(getId);
    this.bookservice.getBooks().forEach((ele) => {
      if (ele.id == getId) {
        console.log(ele.id);
        ele.id = this.id;
        ele.title = this.title;
        ele.author = this.author;
        ele.publishDate = this.publishDate;
        ele.price = this.price;
      }
    });
    this.bookForm.reset();
  }
  deleteHandler(b: any) {
    this.bookArray = this.bookArray.filter((ele) => ele !== b);
  }
  logout() {
    this.route.navigate(['/login']);
  }
  get titleControl() {
    return this.bookForm.get('title');
  }
  get authorControl() {
    return this.bookForm.get('author');
  }
  get publishDateControl() {
    return this.bookForm.get('publishDate');
  }
  get priceControl() {
    return this.bookForm.get('price');
  }
  get idControl() {
    return this.bookForm.get('id');
  }
}
