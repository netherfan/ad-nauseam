import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-builder',
  templateUrl: './book-builder.component.html',
  styleUrls: ['./book-builder.component.scss']
})
export class BookBuilderComponent {

  new_recipe : any;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    published: new FormControl(false),
    difficulty: new FormControl(''),
  });

//   Editor = ClassicEditorBuild;

//   editorConfig = {
//     toolbar: {
//         items: [
//             'bold',
//             'italic',
//             'link',
//             'bulletedList',
//             'numberedList',
//             '|',
//             'indent',
//             'outdent',
//             '|',
//             'codeBlock',
//             'imageUpload',
//             'blockQuote',
//             'insertTable',
//             'undo',
//             'redo',
//         ]
//     },
//     image: {
//         toolbar: [
//             'imageStyle:full',
//             'imageStyle:side',
//             '|',
//             'imageTextAlternative'
//         ]
//     },
//     table: {
//         contentToolbar: [
//             'tableColumn',
//             'tableRow',
//             'mergeTableCells'
//         ]
//     },
//     height: 300,
// };


  constructor(
    private router: Router,
    private bookService: BookService,
    private modalService: NgbModal
    ) {}

  onSubmit() {
    const book = this.form.value;
    this.bookService
      .postBook(book)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.new_recipe = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onClose(){
    this.new_recipe = '';
    this.router.navigate(['ricette']);
  }

  onNewRecipe(){
    this.new_recipe = '';
        this.form.patchValue({
            title: '',
            description: '',
            image: '',
            difficulty: '',
            published: false,
        })
  }
}
