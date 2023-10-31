import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailNameComponent } from './event-detail-name.component';

describe('EventDetailNameComponent', () => {
  let component: EventDetailNameComponent;
  let fixture: ComponentFixture<EventDetailNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
