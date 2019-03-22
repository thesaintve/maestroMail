export class TemplateMail {
    public id: number;
    public rucEmpresa: string;
	public asunto: string;
	public formatoNombreXML: string; 
	public formatoNombrePDF: string; 
	public cuerpo: string;
	public estado: string;
    public fechaCreacion: Date;
	public nombreTemplate: string;
	public parametro: string;
	public tipoDocumento: string;
	public version: string;

}