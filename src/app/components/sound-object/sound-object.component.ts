import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { environment } from 'src/environments/environment';
import { AuthorType, SoundObject } from './sound-object';

@Component({
  selector: 'app-sound-object',
  templateUrl: './sound-object.component.html',
  styleUrls: ['./sound-object.component.scss']
})

export class SoundObjectComponent implements OnInit {

  @Input() SoundObject: SoundObject = new SoundObject(AuthorType.All, "", "");
  public ProfilePictureImage: string = "./assets/avatar/all.jpg";
  public ActivePlaying: boolean = false;

  constructor(public audioService: AudioService) { }

  ngOnInit(): void {
    switch (this.SoundObject.Author) {
      case AuthorType.Freddy:
        this.ProfilePictureImage = "./assets/avatar/freddyd.jpg";
        break;
      case AuthorType.Gergo:
        this.ProfilePictureImage = "./assets/avatar/gergo.jpg";
        break;
      case AuthorType.Blacksheep:
        this.ProfilePictureImage = "./assets/avatar/blacksheep.jpg";
        break;
      case AuthorType.Sorter:
        this.ProfilePictureImage = "./assets/avatar/sorter.jpg";
        break;
      case AuthorType.Anna:
        this.ProfilePictureImage = "./assets/avatar/anna.jpg";
        break;
      case AuthorType.Zoly:
        this.ProfilePictureImage = "./assets/avatar/zoly.jpg";
        break;
      case AuthorType.All:
        this.ProfilePictureImage = "./assets/avatar/all.jpg";
        break;
    }

    this.audioService.observableActiveAudioSource.subscribe((resp) => {
      if (resp == `${environment.audioURL}${this.SoundObject.AudioFile}.mp3`) {
        this.ActivePlaying = true;
      }
      else {
        this.ActivePlaying = false;
      }
    })
  }

  soundObjectOnClick() {
    const audioPath = `${environment.audioURL}${this.SoundObject.AudioFile}.mp3`;
    const audio = this.audioService.playAudio(audioPath);
    if (audio){
      audio.load();
      audio.play();
    }
  }
}
