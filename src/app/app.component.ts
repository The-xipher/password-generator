import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  slider:number= 12
  includeuppercase:boolean=true
  includelowercase:boolean=true
  includenumbers:boolean=true
  includesymbols:boolean=true
  generatedPassword:string=''
  passwordStrength=0
  Strength:string=''

  uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  updateDifficulty() {
    const activeOptions = [
      this.includeuppercase,
      this.includelowercase,
      this.includenumbers,
      this.includesymbols
    ].filter(opt => opt).length;
  }



  generatepassword() {

    let charSet='';
    if(this.includeuppercase) charSet+=this.uppercaseLetters
    if(this.includelowercase) charSet+=this.lowercaseLetters
    if(this.includenumbers) charSet+=this.numbers
    if(this.includesymbols) charSet+=this.symbols
    
this.generatedPassword=Array.from({length:this.slider}).map(()=>charSet.charAt(Math.floor(Math.random()*charSet.length))).join('')

  this.calculateStrength();
  } 

  calculateStrength() {
    this.passwordStrength = 0;
    if (this.includeuppercase) this.passwordStrength++;
    if (this.includelowercase) this.passwordStrength++;
    if (this.includenumbers) this.passwordStrength++;
    if (this.includesymbols) this.passwordStrength++;
 
    if(this.passwordStrength==1)this.Strength="Weak"
    if(this.passwordStrength==2)this.Strength="Light"
    if(this.passwordStrength==3)this.Strength="Medium"
    if(this.passwordStrength==4)this.Strength="Strong"
 
}
}

