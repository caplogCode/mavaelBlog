import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'add-post',
   loadChildren: () => import('./pages/add-post/add-post.module').then( m => m.AddPostPageModule)
 },   {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./src/app/pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'favorite-list',
    loadChildren: () => import('./src/favorite-list/favorite-list.module').then( m => m.FavoriteListPageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./pages/user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'video-intro-player',
    loadChildren: () => import('./pages/video-intro-player/video-intro-player.module').then( m => m.VideoIntroPlayerPageModule)
  },
  {
    path: 'temp-loading',
    loadChildren: () => import('./pages/temp-loading/temp-loading.module').then( m => m.TempLoadingPageModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
