import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-question-view',
  imports: [FormsModule,CommonModule],
  templateUrl: './question-view.html',
  styleUrl: './question-view.css'
})
export class QuestionView {
  chapters = [
    {
      number: 'Chapter I',
      title: 'Nature of Indian Federalism',
      questions: [
        {
          title:
            'Re-examining India’s Federal Foundations: Colonial Legacy, Centralisation, and the case for Stronger States',
          subQuestions: [
            {
              title: "1.1 Colonial Legacy and Centralization in India's Federal Structure",
              text: "Do you agree with this critique of India's federal structure?",
            },
            {
              title: '1.2 India’s Federal System and Regional Diversity',
              text: 'Do you believe India’s federal system fails to reflect regional diversity?',
            },
            {
              title: '1.3 Post-Partition Centralization and Its Relevance',
              text: 'Is centralization still justified today?',
            },
            {
              title: '1.4 Amending the Constitution for Stronger States',
              text: 'Should the Constitution be amended to support stronger States?',
            },
          ],
        },
        {
          title: 'Democracy Without Participation? Centralisation, Referendums, and the Missing Citizen',
          subQuestions: [],
        },
        {
          title: 'Revisiting the Division of Powers',
          subQuestions: [],
        },
        {
          title: 'Private Sector Involvement vs. State Participation',
          subQuestions: [],
        },
        {
          title: 'Stifling State Innovation Through Over-Centralization',
          subQuestions: [],
        },
      ],
    },
    {
      number: 'Chapter II',
      title: 'Creeping centralisation since 1950.',
      questions: [
        {
          title: 'Some Question in Chapter II',
          subQuestions: [],
        },
      ],
    },
    {
      number: 'Chapter III',
      title: 'Procedure for amendment of the Constitution.',
      questions: [],
    },
    {
      number: 'Chapter IV',
      title: 'Formation of new States and alteration of areas, boundaries or names of existing States.',
      questions: [],
    },
    {
      number: 'Chapter V',
      title:
        'Things of value within territorial waters, continental shelf, exclusive economic zone.',
      questions: [],
    },
    {
      number: 'Chapter VI',
      title: 'Education',
      questions: [],
    },
    // Add more chapters here as needed
  ];

  activeChapterId = 1;
  currentChapter: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('chapterId') || '1', 10);
      this.activeChapterId = id;
      this.currentChapter = this.chapters[id - 1];
    });
  }

  navigateToChapter(id: number) {
    this.router.navigate(['/question', id]);
  }
}
