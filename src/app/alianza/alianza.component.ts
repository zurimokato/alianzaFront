import { Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, UntypedFormGroup, UntypedFormControl} from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../interfaces/client.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-alianza',
  templateUrl: './alianza.component.html',
  styleUrls: ['./alianza.component.css']
})
export class AlianzaComponent implements OnInit{

  clientForm: UntypedFormGroup;

  loading:boolean=false;

  displayedColumns: string[] = ['name', 'userName','document', 'email','phone','fechaAdd', 'actions'];
  dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>([]);

  clients:Client[]=[];




  constructor (private fb: FormBuilder,private clientService: ClientService) { 
    this.clientForm = new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.compose([Validators.required])),
      userName: new UntypedFormControl('', Validators.compose([])),
      email: new UntypedFormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      phone: new UntypedFormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
      document: new UntypedFormControl('', Validators.compose([Validators.required])),

    })
  }
  ngOnInit(): void {
    console.log("init");
    this.loadClients();
  }

  //obtener el email form para validar sus valores
  get email() {
    return this.clientForm.get('email') as UntypedFormControl;
  }
  //obtener el firtsName control para validar si es requerido
  get name(){
    return this.clientForm.get('name') as UntypedFormControl;
  }

   //obtener el firtsName control para validar si es requerido
   get phone(){
    return this.clientForm.get('phone') as UntypedFormControl;
  }

   //obtener el firtsName control para validar si es requerido
   get document(){
    return this.clientForm.get('document') as UntypedFormControl;
  }

   //obtener el firtsName control para validar si es requerido
   get userName(){
    return this.clientForm.get('userName') as UntypedFormControl;
  }

  createClient():void{
    let client:Client=this.clientForm.value;
    this.clientService.createClient(client).subscribe(res=>{
      console.log(res)
    });

    this.loadClients();

  }


  openDialog(row:any) {
    console.log("crear")
  }

  loadClients() {
    this.clientService.getClients(0, 10).subscribe(response => {
      this.clients = response.content;
      console.log(this.clients);
      this.dataSource = new MatTableDataSource(this.clients);
    });
  }
}
