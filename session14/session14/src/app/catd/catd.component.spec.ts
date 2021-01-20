import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdComponent } from './catd.component';

describe('CatdComponent', () => {
  let component: CatdComponent;
  let fixture: ComponentFixture<CatdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
