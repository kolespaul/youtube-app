import { Component, OnInit } from '@angular/core';
import {VideoService} from "../services/video/video.service";
import {Video} from "../shared/models/video.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.videos = this.videoService.getAll().filter(video =>
        video.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else if (params.tag)
        this.videos = this.videoService.getTag(params.tag);
      else
        this.videos = this.videoService.getAll();
    })
  }
}
