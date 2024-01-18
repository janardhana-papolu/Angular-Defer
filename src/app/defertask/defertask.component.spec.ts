import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefertaskComponent } from './defertask.component';

describe('DefertaskComponent', () => {
  let component: DefertaskComponent;
  let fixture: ComponentFixture<DefertaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefertaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
