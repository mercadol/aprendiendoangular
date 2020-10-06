import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginarandComponent } from './paginarand.component';

describe('PaginarandComponent', () => {
  let component: PaginarandComponent;
  let fixture: ComponentFixture<PaginarandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginarandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginarandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
