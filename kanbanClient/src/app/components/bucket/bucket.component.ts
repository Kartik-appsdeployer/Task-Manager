import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnChanges {
  constructor(private bucketService: BucketService, private taskService: TaskService) {}

  @Input() data: any;
  childObject: any[] = [];
  cardName: any = "";
  myObj: any = {};
  result: any = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.childObject = Object.values(this.data);
      console.log(this.childObject, "This is Object");
    }
  }

  addTask(Id: any) {
    console.log(Id);
    this.myObj["cardName"] = this.cardName;
    this.myObj["bucketId"] = Id;
    this.taskService.AddCard(this.myObj).subscribe(() => {
      this.bucketService.GetBuckets().subscribe((obj: any) => {
        this.childObject = obj.data;
        this.cardName = ""
        
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
}
