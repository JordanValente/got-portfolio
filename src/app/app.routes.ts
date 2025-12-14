import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  }, // Eager loading – page d’accueil chargée directement

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }, // Redirection vers la racine

  {
    path: 'continents',
    loadComponent: () =>
      import('./components/continents-list/continents-list').then(
        (c) => c.ContinentsList
      )
  }, // Lazy loading – composant chargé uniquement si la route est activée

  {
    path: 'characters',
    loadComponent: () =>
      import('./components/characters-list/characters-list').then(
        (c) => c.CharactersList
      )
  } // Lazy loading – idem pour les personnages
];
