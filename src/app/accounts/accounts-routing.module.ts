import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';

const routes: Routes = [

  {
    path: '',
    children: [

      {
        path: 'list',
        component: AccountsListComponent
      },
      { path: '**', redirectTo: 'list' }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
