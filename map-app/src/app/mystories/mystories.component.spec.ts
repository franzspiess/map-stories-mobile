import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystoriesComponent } from './mystories.component';

describe('MystoriesComponent', () => {
  let component: MystoriesComponent;
  let fixture: ComponentFixture<MystoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
