import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateListingPage } from './create-listing.page';

describe('CreateListingPage', () => {
  let component: CreateListingPage;
  let fixture: ComponentFixture<CreateListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
