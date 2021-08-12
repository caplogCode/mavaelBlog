import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TempLoadingPage } from './temp-loading.page';

describe('TempLoadingPage', () => {
  let component: TempLoadingPage;
  let fixture: ComponentFixture<TempLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempLoadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TempLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
