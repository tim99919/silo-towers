import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerInfoComponent } from './tower-info.component';

describe('TowerInfoComponent', () => {
  let component: TowerInfoComponent;
  let fixture: ComponentFixture<TowerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
