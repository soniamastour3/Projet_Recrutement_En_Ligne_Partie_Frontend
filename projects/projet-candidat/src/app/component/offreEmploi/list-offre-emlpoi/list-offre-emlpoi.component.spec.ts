import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffreEmlpoiComponent } from './list-offre-emlpoi.component';

describe('ListOffreEmlpoiComponent', () => {
  let component: ListOffreEmlpoiComponent;
  let fixture: ComponentFixture<ListOffreEmlpoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOffreEmlpoiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOffreEmlpoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
