import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-addedit-qoute',
  templateUrl: './addedit-qoute.component.html',
  styleUrls: ['./addedit-qoute.component.scss']
})
export class AddeditQouteComponent implements OnInit{
  pagetitle="Create Qoute"

  constructor(private builder:FormBuilder){}

  ngOnInit(): void {
    
  }

  Qouteform= this.builder.group({
    qQouteNumber: this.builder.control(''),
    qPaymentTerms: this.builder.control(''),
    qDateCreated: this.builder.control(''),
    qExpirationDate: this.builder.control('',),
    qRequestDate: this.builder.control(''),
    qSource: this.builder.control(''),
    qResponseDays: this.builder.control(''),
    qEmpoloyee: this.builder.control(''),
    qRequrements: this.builder.control(''),
    
    qModeofTransportaion: this.builder.control(''),
    qIncoterms: this.builder.control(''),
    qFrequency: this.builder.control(''),
    qService: this.builder.control(''),

    qOriginPort: this.builder.control(''),
    qDestinationPort: this.builder.control(''),
    qShipper: this.builder.control(''),
    qConsignee: this.builder.control(''),
    qShipperAddress: this.builder.control(''),    
    qConsigneeAddress: this.builder.control(''),

    qInternalNotes: this.builder.control(''),
    qExternalNotes: this.builder.control(''),

    qICommodities: this.builder.array([]),

    qTotalvolumeLbs: this.builder.control(0),
    qTotalvolumeKg: this.builder.control(0),

    qTotalActualLbs: this.builder.control(0),
    qTotalActualKg: this.builder.control(0),

    qTotalCubicFt: this.builder.control(0),
    qTotalCubicMtr: this.builder.control(0),
    qTotalChargableWeightLbs: this.builder.control(0),
    qTotalChargableWeightKg: this.builder.control(0),


    qIcharges: this.builder.array([]),

    qTotalcharges: this.builder.control(0)


  });

  saveQoute(){
    console.log(this.Qouteform.value);

  }
}
