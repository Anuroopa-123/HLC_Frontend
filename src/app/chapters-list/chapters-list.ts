import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chapters-list',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './chapters-list.html',
  styleUrl: './chapters-list.css'
})
export class ChaptersList {
  isGridView = false;

  chapters = [
    { id: 1, number: 'Chapter-I', title: 'Nature of Indian Federalism', arrow: '51_130.svg' },
    { id: 2, number: 'Chapter-II', title: 'Creeping Centralization since 1950', arrow: '51_138.svg' },
    { id: 3, number: 'Chapter-III', title: 'Procedure for Amendment of the Constitution', arrow: '51_146.svg' },
    { id: 4, number: 'Chapter-IV', title: 'Formation of new States and alteration of areas, boundaries or names of existing States', arrow: '51_154.svg' },
    { id: 5, number: 'Chapter-V', title: 'Things of Value within Territorial Waters, Continental Shelf, Exclusive Economic Zone', arrow: '51_162.svg' },
    { id: 6, number: 'Chapter-VI', title: 'Goods and Services Tax (GST) Reforms', arrow: '51_170.svg' },
    { id: 7, number: 'Chapter-VII', title: 'Union-State Financial Relations', arrow: '51_178.svg' },
    { id: 8, number: 'Chapter-VIII', title: 'Role of the Governors and the President', arrow: '51_186.svg' },
    { id: 9, number: 'Chapter-IX', title: 'Language', arrow: '51_194.svg' },
    { id: 10, number: 'Chapter-X', title: 'Education', arrow: '51_202.svg' },
    { id: 11, number: 'Chapter-XI', title: 'Health', arrow: '51_210.svg' },
    { id: 12, number: 'Chapter-XII', title: 'Delimitation of Constituencies', arrow: '51_218.svg' },
    { id: 13, number: 'Chapter-XIII', title: 'Elections and Anti-Defection Provisions', arrow: '51_226.svg' },
  ];

  toggleView(grid: boolean) {
    this.isGridView = grid;
  }

  get displayedChapters() {
    return this.isGridView ? this.chapters.slice(0, 13) : this.chapters;
  }
}
