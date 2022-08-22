import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitilistComponent } from './universitilist.component';

describe('UniversitilistComponent', () => {
  let component: UniversitilistComponent;
  let fixture: ComponentFixture<UniversitilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
