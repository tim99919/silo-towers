import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerImageComponent } from './tower-image.component';

describe('TowerImageComponent', () => {
  let component: TowerImageComponent;
  let fixture: ComponentFixture<TowerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
