import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() bucketAdded = new EventEmitter<any>();

  constructor(private bucketService: BucketService) {}
  bucketName: any = "";
  myObj: any = {};
  result: any = [];

  ngOnInit() {
    this.bucketService.GetBuckets().subscribe((obj: any) => {
      this.result["Data"] = obj.data;
    });
  }

  updateChildComponent(){
    this.bucketService.GetBuckets().subscribe((obj: any) => {
      this.result["Data"] = obj.data;
    });
  }

  addBucket() {
    console.log("Bucket Name", this.bucketName);
    this.myObj["bucketName"] = this.bucketName;
    this.myObj["userId"] = localStorage.getItem("UserId");
    this.bucketService.AddBucket(this.myObj).subscribe((res: any) => {
      this.bucketService.GetBuckets().subscribe((obj: any) => {
        this.result["Data"] = obj.data;
        // this.bucketAdded.emit();
        this.bucketName = ""
        
      });
    });
  }
}
