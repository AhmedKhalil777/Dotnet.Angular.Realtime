import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'spacex', loadChildren: () => import('./spaceX/space-x.module').then(x => x.SpaceXModule) },
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(x => x.ChatModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
