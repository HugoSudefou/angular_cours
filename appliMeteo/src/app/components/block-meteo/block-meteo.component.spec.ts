import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMeteoComponent } from './block-meteo.component';

describe('BlockMeteoComponent', () => {
  let component: BlockMeteoComponent;
  let fixture: ComponentFixture<BlockMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockMeteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
