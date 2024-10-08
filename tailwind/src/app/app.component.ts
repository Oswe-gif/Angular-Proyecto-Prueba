import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilesComponent } from "./profiles/profiles.component";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind';
  currentEnvironment = environment;
  albums = [['The Dark Side Of The Moon', 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2023/03/the_dark_side_of_the_moon_album_cover_74290244.jpg'],['Scream', 'https://th.bing.com/th/id/R.ded26a69cf9d733bfb2eb16423707d1e?rik=Of9qqWIzO0VqaA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f11600000%2fScream-michael-jackson-11632976-940-1325.jpg&ehk=Ov42MvCbEuXRsdJR05dq%2bxxahFLQNcHqkCHVNyavaJA%3d&risl=&pid=ImgRaw&r=0']];
}
