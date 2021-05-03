import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { addListItem } from 'src/app/list/store/list.actions';

interface IFormInput {
  for: string;
  labelName: string;
  inputId: string;
  type: string;
  placeholder: string;
  controlName: string;
}
@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.scss']
})
export class AddListItemComponent implements OnInit {
  @Input() userId: number;

  formInputs: IFormInput[] = [
    { for: 'itemId', labelName: 'Id', inputId: 'itemId', type: 'text', placeholder: 'id', controlName: 'id' },
    { for: 'itemTitle', labelName: 'Title', inputId: 'itemTitle', type: 'text', placeholder: 'title', controlName: 'title' },
    { for: 'itemContent', labelName: 'Content', inputId: 'itemTitle', type: 'text', placeholder: 'content', controlName: 'content' },
  ];
  formGroup: FormGroup;

  private subGuard$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.createForm();
  }

  addItem(): void {
    this.store.dispatch(
      addListItem({ list: { userId: this.userId, list: [this.formGroup.value] } }));
    this.formGroup.reset();
  }

  ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(''),
      title: new FormControl(''),
      content: new FormControl('')
    });
  }
}
