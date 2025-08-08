import { Doyens } from './doyens/doyens';
import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { Committeemembers } from './committeemembers/committeemembers';
import { MembersProfile } from './members-profile/members-profile';
import { Contact } from './contact/contact';
import { ReferenceMaterials } from './reference-materials/reference-materials';
import { Gallery } from './gallery/gallery';
import { PreviousCommittee } from './previous-committee/previous-committee';
import { ChaptersList } from './chapters-list/chapters-list';
import { QuestionView } from './question-view/question-view';
import { Register } from './register/register';
import { Login } from './login/login';
import { GetOtp } from './get-otp/get-otp';
import { RegisterLogin } from './register-login/register-login';
import { RegSuccessful } from './reg-successful/reg-successful';



export const routes: Routes = [
  { path: '', component: Hero, pathMatch: 'full' },
  { path: 'hero', component: Hero },
  // {path:'hero',component:Hero},
  {path:'dozens',component:Doyens},
  {path:'committeemembers',component:Committeemembers},
  {path:'members-profile',component:MembersProfile},
  {path:'contact',component:Contact},
  {path:'reference-materials',component:ReferenceMaterials},
  {path:'gallery',component:Gallery},
  {path:'previous-committee',component:PreviousCommittee},
  {path:'chapters-list',component:ChaptersList},
  { path: 'question/:chapterId', component: QuestionView },
  {path:'register',component:Register},
  {path:'login',component:Login},
  {path:'get-otp',component:GetOtp},
  {path:'register-number',component:RegisterLogin},
  {path:'register-success',component:RegSuccessful}
];
