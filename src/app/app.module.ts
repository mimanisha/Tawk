import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';
import { FourthpageComponent } from './pages/fourthpage/fourthpage.component';
import { LivechatComponent } from './livechat/livechat/livechat.component';
import { GetstartComponent } from './livechat/getstart/getstart.component';
import { MonitorComponent } from './livechat/monitor/monitor.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ConverstionComponent } from './chatpages/converstion/converstion.component';
import { CustomerlandingComponent } from './chatpages/customerlanding/customerlanding.component';
import { NofricationComponent } from './chatpages/nofrication/nofrication.component';
import { LastoneComponent } from './chatpages/lastone/lastone.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { LeadComponent } from './contacts/lead/lead.component';
import { BussinessComponent } from './contacts/bussiness/bussiness.component';
import { StreamlineComponent } from './contacts/streamline/streamline.component';
import { LastComponent } from './contacts/last/last.component';
import { KnowledgeComponent } from './knowledge/knowledge/knowledge.component';
import { TeamComponent } from './knowledge/team/team.component';
import { LaunchComponent } from './knowledge/launch/launch.component';
import { ExampleComponent } from './knowledge/example/example.component';
import { ThankComponent } from './knowledge/thank/thank.component';
import { ChatComponent } from './hirechat/chat/chat.component';
import { SiteComponent } from './hirechat/site/site.component';
import { Card6Component } from './hirechat/card6/card6.component';
import { DifferentiatorComponent } from './hirechat/differentiator/differentiator.component';
import { CompareComponent } from './hirechat/compare/compare.component';
import { Card4Component } from './hirechat/card4/card4.component';
import { VideoComponent } from './hirechat/video/video.component';
import { FaqComponent } from './hirechat/faq/faq.component';
import { AgentComponent } from './hirechat/agent/agent.component';
import { HelpComponent } from './hirechat/help/help.component';
import { WhyfreeComponent } from './common/whyfree/whyfree.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { VirtualassistantComponent } from './hirevirtualassistant/virtualassistant/virtualassistant.component';
import { HelpcenterComponent } from './resources/helpcenter/helpcenter.component';
import { BookkeepingvaComponent } from './virtualassistant/bookkeepingva/bookkeepingva.component';
import { DigitalmarketingvaComponent } from './virtualassistant/digitalmarketingva/digitalmarketingva.component';
import { ExecutivevaComponent } from './virtualassistant/executiveva/executiveva.component';
import { EcommercevaComponent } from './virtualassistant/ecommerceva/ecommerceva.component';
import { HealthservicevaComponent } from './virtualassistant/healthserviceva/healthserviceva.component';
import { RealeastvaComponent } from './virtualassistant/realeastva/realeastva.component';
import { WebdevelopmentvaComponent } from './virtualassistant/webdevelopmentva/webdevelopmentva.component';
import { BecomeapartnerComponent } from './partner/becomeapartner/becomeapartner.component';
import { PartnerdirectoryComponent } from './partner/partnerdirectory/partnerdirectory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    FourthpageComponent,
    LivechatComponent,
    GetstartComponent,
    MonitorComponent,
    QuestionsComponent,
    ConverstionComponent,
    CustomerlandingComponent,
    NofricationComponent,
    LastoneComponent,
    ContactComponent,
    LeadComponent,
    BussinessComponent,
    StreamlineComponent,
    LastComponent,
    KnowledgeComponent,
    TeamComponent,
    LaunchComponent,
    ExampleComponent,
    ThankComponent,
    ChatComponent,
    SiteComponent,
    Card6Component,
    DifferentiatorComponent,
    CompareComponent,
    Card4Component,
    VideoComponent,
    FaqComponent,
    AgentComponent,
    HelpComponent,
    WhyfreeComponent,
    CustomersComponent,
    VirtualassistantComponent,
    HelpcenterComponent,
    BookkeepingvaComponent,
    DigitalmarketingvaComponent,
    ExecutivevaComponent,
    EcommercevaComponent,
    HealthservicevaComponent,
    RealeastvaComponent,
    WebdevelopmentvaComponent,
    BecomeapartnerComponent,
    PartnerdirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
