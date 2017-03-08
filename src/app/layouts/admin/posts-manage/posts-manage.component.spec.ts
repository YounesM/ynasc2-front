import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsManageComponent } from './posts-manage.component';

describe('PostsManageComponent', () => {
  let component: PostsManageComponent;
  let fixture: ComponentFixture<PostsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
