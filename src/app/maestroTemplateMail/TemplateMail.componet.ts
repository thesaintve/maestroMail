import {Component} from '@angular/core';
import {TemplateMail} from '../models/TemplateMail';

@Component({
    selector: 'maestro-template-mail',
    templateUrl: './maestro-template-mail.html',
    styleUrls: ['./maestro-template-mail.css']    
})
export class TemplateMailComponet {
    public templateMailArray: TemplateMail[]=[{id: 0,rucEmpresa: '',asunto: '', formatoNombreXML: '', formatoNombrePDF: '', cuerpo: '',estado: '',fechaCreacion: '', nombreTemplate: '',parametro: '',tipoDocumento: '', version: ''}];
    public selectItem: TemplateMail = new TemplateMail();
    
    public agregaOactualiza() {        
        if (!(this.templateMailArray.filter(x => x.rucEmpresa === this.selectItem.rucEmpresa).filter(x => x.tipoDocumento === this.selectItem.tipoDocumento).length>0)){
            this.selectItem.id = this.templateMailArray.length+1;
            this.templateMailArray.push(this.selectItem); 
        }
        this.selectItem = new TemplateMail();
    }

    public editar(it: TemplateMail){
        this.selectItem = it;
    }

    public borrar(){
        if (confirm('¿Desea borrar este registro?')) {
            this.templateMailArray.forEach( (x, index) => {
                if(x.rucEmpresa === this.selectItem.rucEmpresa) {
                    this.templateMailArray.splice(index,1);
                    this.selectItem = new TemplateMail();
                }
            });

        }
    }

}