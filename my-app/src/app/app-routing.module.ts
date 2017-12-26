import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: 'items', loadChildren: 'app/items/items.module#ItemsModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // https://codecraft.tv/courses/angular/routing/routing-strategies/
        useHash: true,
        preloadingStrategy: PreloadAllModules
       }
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
