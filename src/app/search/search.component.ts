import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchQuery: string = '';

  onSearch() {
    console.log('Search Query:', this.searchQuery);
    // Add your search functionality here
  }
}
