import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatetodoPage } from './createtodo.page';

describe('CreatetodoPage', () => {
  let component: CreatetodoPage;
  let fixture: ComponentFixture<CreatetodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatetodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
