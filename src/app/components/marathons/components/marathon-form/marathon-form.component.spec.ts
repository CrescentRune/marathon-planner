import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonFormComponent } from './marathon-form.component';

describe('MarathonFormComponent', () => {
  let component: MarathonFormComponent;
  let fixture: ComponentFixture<MarathonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MarathonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarathonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
