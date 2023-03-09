import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LijingSecondComponent } from './a/b/c/lijing-second/lijing-second.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
@NgModule({
  // 项目中使用组件的声明
  declarations: [AppComponent, LijingSecondComponent, HeroesComponent, HeroDetailComponent],
  // 引用的第三方库
  imports: [BrowserModule, FormsModule],
  // 与整个 app 生命周期关联的服务（service）
  providers: [],
  // 启动时最先访问的组件
  bootstrap: [AppComponent],
})
export class AppModule {}
