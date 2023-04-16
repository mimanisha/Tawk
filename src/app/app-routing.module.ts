import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverstionComponent } from './chatpages/converstion/converstion.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { WhyfreeComponent } from './common/whyfree/whyfree.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { ChatComponent } from './hirechat/chat/chat.component';
import { VirtualassistantComponent } from './hirevirtualassistant/virtualassistant/virtualassistant.component';
import { KnowledgeComponent } from './knowledge/knowledge/knowledge.component';
import { LivechatComponent } from './livechat/livechat/livechat.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { BecomeapartnerComponent } from './partner/becomeapartner/becomeapartner.component';
import { PartnerdirectoryComponent } from './partner/partnerdirectory/partnerdirectory.component';
import { HelpcenterComponent } from './resources/helpcenter/helpcenter.component';
import { BookkeepingvaComponent } from './virtualassistant/bookkeepingva/bookkeepingva.component';
import { DigitalmarketingvaComponent } from './virtualassistant/digitalmarketingva/digitalmarketingva.component';
import { EcommercevaComponent } from './virtualassistant/ecommerceva/ecommerceva.component';
import { ExecutivevaComponent } from './virtualassistant/executiveva/executiveva.component';
import { HealthservicevaComponent } from './virtualassistant/healthserviceva/healthserviceva.component';
import { RealeastvaComponent } from './virtualassistant/realeastva/realeastva.component';
import { WebdevelopmentvaComponent } from './virtualassistant/webdevelopmentva/webdevelopmentva.component';

const routes: Routes = [
  {path:'',redirectTo:'tawk',pathMatch:'full'},
  {path:'tawk',component:FirstpageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'livechat',component:LivechatComponent},
  {path:'chatpages',component:ConverstionComponent},
  {path:'contact',component:ContactComponent},
  {path:'knowledgebase',component:KnowledgeComponent},
  {path:'service/hire-chat-agent',component:ChatComponent},
  {path:'service/hire-virtual-assistance',component:VirtualassistantComponent},
  {path:'customers',component:CustomersComponent},
  {path:'whyfree',component:WhyfreeComponent},
  {path:'service/bookkeepingandfinance',component:BookkeepingvaComponent},
  {path:'service/digitalmarketing',component:DigitalmarketingvaComponent},
  {path:'service/executivemarketing',component:ExecutivevaComponent},
  {path:'service/ecommerce',component:EcommercevaComponent},
  {path:'service/healthservice',component:HealthservicevaComponent},
  {path:'service/realestate',component:RealeastvaComponent},
  {path:'service/webdevelopment',component:WebdevelopmentvaComponent},
  {path:'resources/helpcenter',component:HelpcenterComponent},
  {path:'partner/become-partner',component:BecomeapartnerComponent},
  {path:'partner/partner-directory',component:PartnerdirectoryComponent},
  {path:'**',redirectTo:'twak',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
