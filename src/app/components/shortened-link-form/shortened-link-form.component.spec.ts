import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedLinkFormComponent } from './shortened-link-form.component';

describe('ShortenedLinkFormComponent', () => {
  let component: ShortenedLinkFormComponent;
  let fixture: ComponentFixture<ShortenedLinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenedLinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenedLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
