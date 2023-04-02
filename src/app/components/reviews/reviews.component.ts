import { Component, OnInit } from '@angular/core';+
import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit{

  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
