import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() data: string;

  onSubmit(postFrom: any) {
    const { email, password } = postFrom.value;
    console.log(email, password);
  }
}
