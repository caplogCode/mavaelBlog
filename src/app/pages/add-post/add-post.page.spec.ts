import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Camera } from "@ionic-native/camera/ngx";
import { Storage } from "@ionic/storage";

import { AddPostPage } from "./add-post.page";

describe("AddPostPage", () => {
  let component: AddPostPage;
  let fixture: ComponentFixture<AddPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Storage],
      providers: [Camera, Storage],
      declarations: [AddPostPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
