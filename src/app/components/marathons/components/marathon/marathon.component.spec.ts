import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonComponent } from './marathon.component';

describe('MarathonComponent', () => {
  let component: MarathonComponent;
  let fixture: ComponentFixture<MarathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MarathonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
