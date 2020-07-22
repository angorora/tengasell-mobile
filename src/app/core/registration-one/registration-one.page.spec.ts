import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationOnePage } from './registration-one.page';

describe('RegistrationOnePage', () => {
  let component: RegistrationOnePage;
  let fixture: ComponentFixture<RegistrationOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
