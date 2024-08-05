import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
    standalone: true,
    templateUrl: './template.html',
    selector: 'componentD',
    styleUrl: './style.scss',
    imports: [CommonModule, MatSlideToggleModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
        MatIconModule, MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentD {

}
