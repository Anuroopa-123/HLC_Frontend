import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import { Navbar } from "./shared/navbar/navbar";
import { Header } from "./shared/header/header";
import { Topbar } from "./shared/topbar/topbar";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, Header, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end');
}
