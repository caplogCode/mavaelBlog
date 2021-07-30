import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostEditerPage } from './post-editer.page';

describe('PostEditerPage', () => {
  let component: PostEditerPage;
  let fixture: ComponentFixture<PostEditerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostEditerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
