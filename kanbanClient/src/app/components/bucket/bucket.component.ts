import { Component, Input, OnChanges, SimpleChanges, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { TaskService } from 'src/app/services/task.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css'],
})
export class BucketComponent implements OnChanges {
  constructor(private bucketService: BucketService, private taskService: TaskService, private renderer: Renderer2) {}

  @Input() data: any;
  childObject: any[] = [];
  cardName: any = "";
  myObj: any = {};
  result: any = [];
  description: any = "";
  desObj: any = {};

  @ViewChild('draggableDiv') draggableDivRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.childObject = Object.values(this.data);
      console.log(this.childObject, "This is Object");
    }
  }
  isContentExceedsMaxHeight(): boolean {
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    
    if (container && content) {
      return content.scrollHeight > container.clientHeight;
    }
    
    return false;
  }

  addDescription(cardId: any, bucketId: any){
    console.log(cardId, bucketId)
    this.desObj["bucketId"] = bucketId;
    this.desObj["cardId"] = cardId;
    this.desObj["cardDesc"] = this.description
    this.bucketService.AddDescription(this.desObj).subscribe((res: any) => {
      this.description = ""
    })
  }
  
  addTask(Id: any) {
    console.log(Id);
    this.myObj["cardName"] = this.cardName;
    this.myObj["bucketId"] = Id;
    this.taskService.AddCard(this.myObj).subscribe(() => {
      this.bucketService.GetBuckets().subscribe((obj: any) => {
        this.childObject = obj.data;
        this.cardName = "";
      });
    });
  }

  deleteCard(cardId: any){
    this.bucketService.DeleteBucket(cardId).subscribe((res) => {
      this.bucketService.GetBuckets().subscribe((obj: any) => {
        this.childObject = obj.data;
      });
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
