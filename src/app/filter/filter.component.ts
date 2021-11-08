import { Component, OnInit } from '@angular/core';
import {Tag} from "../shared/models/tag.model";
import {VideoService} from "../services/video/video.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.tags = this.videoService.getAllTags();
  }

}
