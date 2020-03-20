import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  @Input() name: string;
  @Output() eventClicked = new EventEmitter<{name: string, description: string}>();
  @ViewChild('serverNameInput', { static: false}) serverNameInput: ElementRef;
  @ViewChild('serverContentInput', { static: false}) serverContentInput: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onEvClick() {
    this.eventClicked.emit({
                          name: this.serverNameInput.nativeElement.value,
                          description: this.serverContentInput.nativeElement.value
                        });
  }
}
