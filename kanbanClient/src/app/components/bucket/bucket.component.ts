import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnChanges {
  constructor(private bucketService: BucketService) {}

  @Input() data: any;
  childObject: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.childObject = Object.values(this.data);
      console.log(this.childObject, "Arrayyyyyyyyyyyy")
    }
  }
}
