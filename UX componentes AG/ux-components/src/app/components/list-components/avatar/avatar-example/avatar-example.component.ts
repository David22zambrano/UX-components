import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-example',
  templateUrl: './avatar-example.component.html',
  styleUrl: './avatar-example.component.scss',
  standalone:false
})
export class AvatarExampleComponent {
  @Input() sizeAvatar: 'size-24' | 'size-20' | 'size-16' = 'size-24';
  @Input() type: 'text' | 'icon' | 'image' = 'text';
  @Input() initials: string = '';
  @Input() iconName: string = '';
  @Input() imageUrl: string = '';
}
