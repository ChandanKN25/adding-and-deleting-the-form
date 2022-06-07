import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 orderForm!: FormGroup;
 

  constructor(private fb : FormBuilder) { }
  
  
  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.orderForm = this.fb.group({
      details: this.fb.array([])
    });
  }

  details() : FormArray{
    return this.orderForm.get("details") as FormArray
  }

  newDetails(): FormGroup {
    return this.fb.group({
      CountryName: [''],
      VisaType: [''],
      ExpiryDate: ['']
    })
  }

  addDetails() {
   
    this.details().push(this.newDetails());
    //this.count+=1;
  }

  removeDetails(i: number) {
    
    this.details().removeAt(i);
   //this.count-=1;
    
  }

  // incrementCount(){
  //     this.count=this.count + 1;
     
  //     return this.count;
  // }

  // decrementCount(){
  //   this.count = this.count-1;
  //   return this.count;
  // }
  
  // allCount(){

  //   this.incrementCount();
  //   this.decrementCount();
  // }

}
