import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PayphoneFormComponent } from './pasarela-pago/payphone-form/payphone-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-comerce-numer';
}
