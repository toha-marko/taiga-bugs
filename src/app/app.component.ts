import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'taiga-bugs';

  columns$ = new BehaviorSubject(['title', 'id']);

  headings$ = new BehaviorSubject({
    title: 'Название',
    id: 'ID',
    prop: 'Проперти'
  });

  data$ = of([
    {
      id: '1',
      title: 'title1',
      prop: 'some prop'
    },
    {
      id: '1',
      title: 'title1',
      prop: 'some prop'
    }
  ])

  ngOnInit(): void {
    setTimeout(() => {
      this.columns$.next(['title', 'id', 'prop'])
    })
  }
}
