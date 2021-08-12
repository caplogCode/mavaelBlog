import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoIntroPlayerPage } from './video-intro-player.page';

describe('VideoIntroPlayerPage', () => {
  let component: VideoIntroPlayerPage;
  let fixture: ComponentFixture<VideoIntroPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIntroPlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoIntroPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
