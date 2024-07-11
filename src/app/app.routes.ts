import { Routes } from '@angular/router';
import { BlogChooseComponent } from '../components/blog-choose/blog-choose.component';
import { ArticuloChooseComponent } from '../components/articulo-choose/articulo-choose.component';
import { ElOrigenDeLaLeyDelOlvidoComponent } from '../components/articulo-choose/el-origen-de-la-ley-del-olvido/el-origen-de-la-ley-del-olvido.component';
import { LaLeyDelOlvidoProtegeTuReputacionConChooseComponent } from '../components/articulo-choose/la-ley-del-olvido-protege-tu-reputacion-con-choose/la-ley-del-olvido-protege-tu-reputacion-con-choose.component';

export const routes: Routes = [
    {  path: '', component: BlogChooseComponent },
    {  path: 'articulo/el-origen-de-la-ley-del-olvido', component: ElOrigenDeLaLeyDelOlvidoComponent },
    {  path: 'articulo/la-ley-del-olvido-protege-tu-reputacion-con-choose', component: LaLeyDelOlvidoProtegeTuReputacionConChooseComponent },

];
