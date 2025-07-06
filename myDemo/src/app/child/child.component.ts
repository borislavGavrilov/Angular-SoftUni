import { Component, Input ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message: string = '';

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    this.notify.emit('Детето каза: Натиснат е бутон!');
  }
}