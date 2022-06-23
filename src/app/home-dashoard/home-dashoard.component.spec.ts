import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashoardComponent } from './home-dashoard.component';

describe('HomeDashoardComponent', () => {
  let component: HomeDashoardComponent;
  let fixture: ComponentFixture<HomeDashoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDashoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
