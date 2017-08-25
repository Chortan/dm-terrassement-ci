import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.component.html',
  styleUrls: ['./onglets.component.css']
})
export class OngletsComponent implements OnInit {

  view:number=0;

  motifs:string[] = ["Demande d'information","Demande de devis","Problèmes technique", "Autre"];
  motif:string ;
  textInitial:string= "Choisir type de demande";

  constructor() {
    this.motif=this.textInitial;
   }

  ngOnInit() {
  }

  onChange(motif:string){
    this.motif = motif;
  }

}
