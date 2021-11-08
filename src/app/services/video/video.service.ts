import { Injectable } from '@angular/core';
import {Video} from '../../shared/models/video.model'
import {Tag} from "../../shared/models/tag.model";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  getAllTags(): Tag[] {
    return [
      {name: 'all', count: 15},
      {name: 'favorites', count: 5},
      {name: 'latest releases', count: 3},
      {name: 'culture', count: 2},
      {name: 'animals', count: 2},
      {name: 'humans', count: 2},
      {name: 'robots', count: 2},
    ]
  }

  getTag(tag: string): Video[] {
    if(tag == 'all')
      return this.getAll();
    else
      return this.getAll().filter(video => video.tags?.includes(tag));
  }

  getAll(): Video[] {
    return [
      {
        author: 'Mark Twain',
        channel: 'Animal Planet',
        id: 1,
        rating: 4.7,
        imageUrl: 'assets/images/videos/img1.jpg',
        name: 'Culture',
        tags: 'favorites, culture'
      },
      {
        author: 'Jack London',
        channel: 'National Geographic',
        id: 2,
        rating: 4.8,
        imageUrl: 'assets/images/videos/img2.jpg',
        name: 'Animals',
        tags: 'latest releases, animals'
      },
      {
        author: 'Jules Verne',
        channel: 'The Economist',
        id: 3,
        rating: 4.6,
        imageUrl: 'assets/images/videos/img3.jpg',
        name: 'Humans',
        tags: 'humans'
      },
      {
        author: 'Edgar Poe',
        channel: 'Rolling Stone',
        id: 4,
        rating: 4.7,
        imageUrl: 'assets/images/videos/img4.jpg',
        name: 'Robots',
        tags: 'robots'
      },
      {
        author: 'Ernest Hemingway',
        channel: 'Business Insider',
        id: 5,
        rating: 4.9,
        imageUrl: 'assets/images/videos/img5.jpg',
        name: 'Robots',
        tags: 'favorites, robots'
      },
      {
        author: 'Mark Twain',
        channel: 'Animal Planet',
        id: 6,
        rating: 4.7,
        imageUrl: 'assets/images/videos/img6.jpg',
        name: 'Humans',
        tags: 'latest releases, humans'
      },
      {
        author: 'Jack London',
        channel: 'National Geographic',
        id: 7,
        rating: 4.8,
        imageUrl: 'assets/images/videos/img7.jpg',
        name: 'Animals',
        tags: 'animals'
      },
      {
        author: 'Jules Verne',
        channel: 'The Economist',
        id: 8,
        rating: 4.9,
        imageUrl: 'assets/images/videos/img8.jpg',
        name: 'Culture',
        tags: 'culture'
      },
      {
        author: 'Edgar Poe',
        channel: 'Rolling Stone',
        id: 9,
        rating: 4.5,
        imageUrl: 'assets/images/videos/img9.jpg',
        name: 'Works',
        tags: 'favorites, works'
      },
      {
        author: 'Ernest Hemingway',
        channel: 'Business Insider',
        id: 10,
        rating: 4.5,
        imageUrl: 'assets/images/videos/img10.jpg',
        name: 'Science',
        tags: 'latest releases, science'
      },
      {
        author: 'Mark Twain',
        channel: 'Animal Planet',
        id: 11,
        rating: 4.6,
        imageUrl: 'assets/images/videos/img11.jpg',
        name: 'Works',
        tags: 'works'
      },
      {
        author: 'Jack London',
        channel: 'National Geographic',
        id: 12,
        rating: 4.7,
        imageUrl: 'assets/images/videos/img12.jpg',
        name: 'Health',
        tags: 'health'
      },
      {
        author: 'Jules Verne',
        channel: 'The Economist',
        id: 13,
        rating: 4.6,
        imageUrl: 'assets/images/videos/img13.jpg',
        name: 'Earth',
        tags: 'favorites, earth'
      },
      {
        author: 'Edgar Poe',
        channel: 'Rolling Stone',
        id: 14,
        rating: 4.5,
        imageUrl: 'assets/images/videos/img14.jpg',
        name: 'Earth',
        tags: 'favorites, earth'
      },
      {
        author: 'Ernest Hemingway',
        channel: 'Business Insider',
        id: 15,
        rating: 4.8,
        imageUrl: 'assets/images/videos/img15.jpg',
        name: 'Science',
        tags: 'science'
      }
    ]
  }
}
