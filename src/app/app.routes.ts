import { Routes } from '@angular/router';
import { BlogChooseComponent } from '../components/blog-choose/blog-choose.component';
import { ArticuloChooseComponent } from '../components/articulo-choose/articulo-choose.component';
import { ElOrigenDeLaLeyDelOlvidoComponent } from '../components/articulo-choose/el-origen-de-la-ley-del-olvido/el-origen-de-la-ley-del-olvido.component';
import { LaLeyDelOlvidoProtegeTuReputacionConChooseComponent } from '../components/articulo-choose/la-ley-del-olvido-protege-tu-reputacion-con-choose/la-ley-del-olvido-protege-tu-reputacion-con-choose.component';
import { TendenciasDeDisenoWeb2024UnaMiradaAlFuturoComponent } from '../components/articulo-choose/tendencias-de-diseno-web-2024-una-mirada-al-futuro/tendencias-de-diseno-web-2024-una-mirada-al-futuro.component';
import { ContenidoComponent } from '../components/panel-principal/contenido/contenido.component';

export const routes: Routes = [
    {  path: '', component: BlogChooseComponent },
    {  path: 'articulo/el-origen-de-la-ley-del-olvido', component: ElOrigenDeLaLeyDelOlvidoComponent },
    { path: 'article/:id', component: ContenidoComponent },
    {  path: 'articulo/la-ley-del-olvido-protege-tu-reputacion-con-choose', component: LaLeyDelOlvidoProtegeTuReputacionConChooseComponent },
    {  path: 'articulo/tendencias-de-diseno-web-2024-una-mirada-al-futuro', component: TendenciasDeDisenoWeb2024UnaMiradaAlFuturoComponent},
];
