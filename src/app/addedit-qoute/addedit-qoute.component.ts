import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addedit-qoute',
  templateUrl: './addedit-qoute.component.html',
  styleUrls: ['./addedit-qoute.component.scss']
})
export class AddeditQouteComponent implements OnInit {
  pagetitle = "Create Qoute"

  ComArry !: FormArray<any>;
  SerArry !: FormArray<any>;

  Scharges !: FormGroup<any>;
  testgroup !: FormGroup<any>;

  masterClient: any;

  masterEmployee: any;
  masterPort: any;

  masterCommodities: any;
  masterCharges: any;



  constructor(
    private builder: FormBuilder,
    private service: MasterService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.getClientload();

    this.getEmployeeload();
    this.getPortload();

    this.getCommoditiesload();
    this.getChargesload();
  }

  Qouteform = this.builder.group({
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
    qShipperno: this.builder.control(''),
    qConsignee: this.builder.control(''),
    qConsigneeno: this.builder.control(''),
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


    qIservice: this.builder.array([]),

    qTotalcharges: this.builder.control(0)


  });
  //----------- Matselect Datbase Service
  getClientload() {
    this.service.Getclient().subscribe(res => { this.masterClient = res; });
  }

  getEmployeeload() {
    this.service.Getemployee().subscribe(res => { this.masterEmployee = res; });
  }
  getPortload() {
    this.service.Getport().subscribe(res => { this.masterPort = res; });
  }
  getCommoditiesload() {
    this.service.Getcommodities().subscribe(res => { this.masterCommodities = res; });
  }
  getChargesload() {
    this.service.Getcharges().subscribe(res => { this.masterCharges = res; });
  }





  //----------- general SAVE
  saveQoute() {
    console.log(this.Qouteform.value);

  }
  //----------- adding commodities btn
  addnewCommodities() {
    this.ComArry = this.Qouteform.get("qICommodities") as FormArray;
    this.ComArry.push(this.commoditiesgenrow());
  }
  //----------- getting rows for commodities
  get Hcommodities() {
    return this.Qouteform.get("qICommodities") as FormArray;
  }
  //-----------  commodities controlnames
  commoditiesgenrow() {
    return this.builder.group({

      qPackage: this.builder.control(''),
      qDescription: this.builder.control(''),

      qMetricoption: this.builder.control(1),
      qLength: this.builder.control(0),
      qWidth: this.builder.control(0),
      qHeight: this.builder.control(0),

      qMetricoption2: this.builder.control(1),
      qWeigth: this.builder.control(0),
      qPieces: this.builder.control(0),

      cubicIn: this.builder.control(0),

      qVWeigthKg: this.builder.control(0),
      qVWeigthLb: this.builder.control(0),
      cubicFt: this.builder.control(0),
      cubicMet: this.builder.control(0),

      qAcutalweightLb: this.builder.control(0),
      qAcutalweightKg: this.builder.control(0),

    });

  }
  //----------- adding service btn
  addnewService() {
    this.SerArry = this.Qouteform.get("qIservice") as FormArray;
    this.SerArry.push(this.servicegenrow());
  }
  //----------- getting rows for service
  get Hservice() {
    return this.Qouteform.get("qIservice") as FormArray;
  }
  //-----------  service controlnames
  servicegenrow() {
    return this.builder.group({

      qserviceid: this.builder.control(''),
      qservice: this.builder.control(''),
      qcharges: this.builder.control(''),

    });
  }










  //-----------  CHANGES
  shipperchange() {//-----------  ERROR not getting
    let cnumbercouter = this.Qouteform.get('qShipperno')?.value;

    this.service.Getclientbyclientno(cnumbercouter).subscribe(res => {
      let cnumber: any;
      cnumber = res;
      console.log(cnumber);     
      if (cnumber != null) {
        this.Qouteform.get("qShipperAddress")?.setValue(cnumber.adress);
        this.Qouteform.get("qShipper")?.setValue(cnumber.name);
        console.log(cnumber.adress);

        console.log(cnumber.name);
      }
    });
  }

  consigneechange() {//-----------  ERROR not getting
    let cnumbercouter = this.Qouteform.get('qConsigneeno')?.value;

    this.service.Getclientbyclientno(cnumbercouter).subscribe(res => {
      let cnumber: any;
      cnumber = res;
      console.log(cnumber);     
      if (cnumber != null) {
        this.Qouteform.get("qConsigneeAddress")?.setValue(cnumber.adress);
        this.Qouteform.get("qConsignee")?.setValue(cnumber.name);
        console.log(cnumber.adress);

        console.log(cnumber.name);
      }
    });
  }

  servicechange(service: any) {
    this.SerArry = this.Qouteform.get("qIservice") as FormArray;
    this.Scharges = this.SerArry.at(service) as FormGroup;

    let qservice = this.Scharges.get("qserviceid")?.value;
    this.service.Getservicebyid(qservice).subscribe(res => {
      let proddata: any;
      proddata = res;
      console.log(qservice);
      console.log(proddata);
      console.log(proddata.charges);
      if (proddata != null) {
        this.Scharges.get("qcharges")?.setValue(proddata.charges);
      }
    });
  }









}
