import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainView } from './components/main-view/main-view';
import { LookupService } from './services/utility/lookup-service';
import { InitializationService } from './services/utility/initialization-service';

@Component({
  selector: 'app-root',
  imports: [MainView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organizer');

  constructor(private initializationService: InitializationService)
  {

  }

  ngOnInit() {
    this.initializationService.preloadData();
  }
}
