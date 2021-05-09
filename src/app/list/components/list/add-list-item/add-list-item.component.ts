import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input() lastId: number;
  formInputs: IFormInput[] = [
    { for: 'itemTitle', labelName: 'Title', inputId: 'itemTitle', type: 'text', placeholder: 'title', controlName: 'title' },
    { for: 'itemContent', labelName: 'Content', inputId: 'itemContent', type: 'text', placeholder: 'content', controlName: 'content' },
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
    const addedValues = {
      ...this.formGroup.value,
      id: this.lastId
    }
    this.store.dispatch(
      addListItem({ list: { userId: this.userId, list: [addedValues] } }));
    this.formGroup.reset();
  }

  ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }
}
