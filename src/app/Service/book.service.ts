import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookArray:any[]=[
    {
      id:1,
      title:'one',
      author:'one',
      publishDate:'one',
      price:'one'
    },
    {
      id:2,
      title:'two',
      author:'two',
      publishDate:'two',
      price:'two'
    },
    {
      id:3,
      title: 'Laravel 5.x Cookbook',
      author: 'Alfred Nutile',
      publishDate: 'September 2016',
      price:'200'
      },
      {
       id:4,
      title: 'Sitecore Cookbook for Developers',
      author: 'Yogesh Patel',
      publishDate: 'April 2016',
      price:'200',

      },
      {
      title: 'Sass and Compass Designers Cookbook',
      author: 'Bass Jobsen',
      publishDate: 'April 2016',
      price:'250'
      }
  ]
  constructor() { }
getBooks(){
  return this.bookArray;
}
}
