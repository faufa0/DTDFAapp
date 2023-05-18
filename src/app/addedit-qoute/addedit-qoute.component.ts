import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { Router } from '@angular/router';

//--------------- metric dropdown
interface metricsoptions {
  value: number;
  viewValue: string;
}
interface metricsoptions2 {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-addedit-qoute',
  templateUrl: './addedit-qoute.component.html',
  styleUrls: ['./addedit-qoute.component.scss']
})
export class AddeditQouteComponent implements OnInit {
  pagetitle = "Create Qoute"


  //----------------------------------------------
  ComArry !: FormArray<any>;
  SerArry !: FormArray<any>;

  Schanges !: FormGroup<any>;
  comcharges !: FormGroup<any>;

  //--------------------------- Master Variable
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

  metricoption: metricsoptions[] = [
    { value: 16.3871, viewValue: 'Cm' },
    { value: 1, viewValue: 'In' },

  ];
  metricoption2: metricsoptions2[] = [
    { value: 2.205, viewValue: 'Kg' },
    { value: 1, viewValue: 'Lb' },

  ];

  //------dropdown options
  paymentterms: string[] = ['7 Days', '14 Days', '30 Days']
  ExpirationDate: string[] = ['7 days', '14 days', '30 days']
  Source: string[] = ['Social Media', 'Website', 'Search Engine', 'Inside Sales Agent', 'Client Referral']
  Mot: string[] = ['International Air', 'International Sea', 'Domestic Air', 'Domestic Ground']
  Incoterm: string[] = ['Incoterms1', 'Incoterms2', 'Incoterms3']
  Frequency: string[] = ['Daily', 'Weekly', 'Twice Monthly', 'Monthly']
  Service: string[] = ['Export', 'Import', 'Shuttle', 'Cartage', 'Storage', 'Venue']

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
      qservicename: this.builder.control(''),
      qcharges: this.builder.control(''),

    });
  }










  //-----------  CHANGES
  shipperchange() {
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
    this.Schanges = this.SerArry.at(service) as FormGroup;

    let qservice = this.Schanges.get("qserviceid")?.value;
    this.service.Getservicebyid(qservice).subscribe(res => {
      let proddata: any;
      proddata = res;


      if (proddata != null) {
        this.Schanges.get("qcharges")?.setValue(proddata.charges);
        this.Schanges.get("qservicename")?.setValue(proddata.service);
        this.chargescalculation();
      }

    });
  }
  //-----------  calculations

  comoditiescalculation(index: any) {
    this.ComArry = this.Qouteform.get("qICommodities") as FormArray;
    this.comcharges = this.ComArry.at(index) as FormGroup;

    let qMetricoption = this.comcharges.get("qMetricoption")?.value;
    let qLength = this.comcharges.get("qLength")?.value;
    let qWidth = this.comcharges.get("qWidth")?.value;
    let qHeight = this.comcharges.get("qHeight")?.value;

    let qMetricoption2 = this.comcharges.get("qMetricoption2")?.value;
    let qWeigth = this.comcharges.get("qWeigth")?.value;
    let qPieces = this.comcharges.get("qPieces")?.value;

    let cubicIn = qPieces * qLength * qWidth * qHeight / qMetricoption;

    let qVWeigthLb = cubicIn / 166;
    let qVWeigthKg = qVWeigthLb / 2.2046;
    let cubicFt = cubicIn / 1728;
    let cubicMet = cubicFt / 35.31;

    let qAcutalweightLb = qPieces * qWeigth / qMetricoption2;
    let qAcutalweightKg = qAcutalweightLb / 2.205;

    this.comcharges.get("cubicIn")?.setValue(cubicIn.toFixed(0));
    this.comcharges.get("qVWeigthLb")?.setValue(qVWeigthLb.toFixed(0));
    this.comcharges.get("qVWeigthKg")?.setValue(qVWeigthKg.toFixed(0));
    this.comcharges.get("cubicFt")?.setValue(cubicFt.toFixed(3));
    this.comcharges.get("cubicMet")?.setValue(cubicMet.toFixed(3));

    this.comcharges.get("qAcutalweightLb")?.setValue(qAcutalweightLb.toFixed(3));
    this.comcharges.get("qAcutalweightKg")?.setValue(qAcutalweightKg.toFixed(3));

    this.totalcalculation();

  }
  totalcalculation() {
    const testarray = this.Qouteform.getRawValue().qICommodities;
    let VwLb = 0;
    let VwKg = 0;
    let CFt = 0;
    let CMet = 0;
    let AwLb = 0;
    let AwKg = 0;
    let CwLb = 0;
    let CwKg = 0;

    testarray.forEach((x: any) => {


      VwLb += Number(x.qVWeigthLb);
      VwKg += Number(x.qVWeigthKg);

      CFt += Number(x.cubicFt);
      CMet += Number(x.cubicMet);

      AwLb += Number(x.qAcutalweightLb);
      AwKg += Number(x.qAcutalweightKg);



    });


    if (AwKg > VwKg) {
      CwLb = AwLb;
      CwKg = AwKg;

    } else if (AwKg < VwKg) {
      CwLb = VwLb;
      CwKg = VwKg;

    } else {
      CwLb = 999999;
      CwKg = 999999;
    }


    console.log(CwLb);
    console.log(CwKg);

    this.Qouteform.get("qTotalvolumeLbs")?.setValue(VwLb);
    this.Qouteform.get("qTotalvolumeKg")?.setValue(VwKg);

    this.Qouteform.get("qTotalCubicFt")?.setValue(CFt);
    this.Qouteform.get("qTotalCubicMtr")?.setValue(CMet);

    this.Qouteform.get("qTotalActualLbs")?.setValue(AwLb);
    this.Qouteform.get("qTotalActualKg")?.setValue(AwKg);

    this.Qouteform.get("qTotalChargableWeightLbs")?.setValue(CwLb);
    this.Qouteform.get("qTotalChargableWeightKg")?.setValue(CwKg);

  }
  chargescalculation() {
    const chaArryV = this.Qouteform.getRawValue().qIservice;
    let chatotal = 0;

    chaArryV.forEach((x: any) => {

      chatotal += Number(x.qcharges);

    });


    this.Qouteform.get("qTotalcharges")?.setValue(chatotal);
  }





}
