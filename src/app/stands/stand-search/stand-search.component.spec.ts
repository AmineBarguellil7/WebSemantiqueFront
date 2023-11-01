import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandSearchComponent } from './stand-search.component';

describe('StandSearchComponent', () => {
  let component: StandSearchComponent;
  let fixture: ComponentFixture<StandSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
