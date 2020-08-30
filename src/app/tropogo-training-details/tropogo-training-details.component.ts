import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tropogo-training-details',
  templateUrl: './tropogo-training-details.component.html',
  styleUrls: ['./tropogo-training-details.component.css']
})
export class TropogoTrainingDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  brochureFiles: File[] = [];
  certFiles: File[] = [];
  galleryFiles: File[] = [];
  validationColor: string;
  showValidation: boolean;

  fileChangeEventForIB = function (fileInput: any) {
    this.brochureFiles = [];

    if (fileInput.target.files && fileInput.target.files[0]) {

      for (let i = 0; i < fileInput.target.files.length; i++) {
        this.brochureFiles.push(fileInput.target.files[i])
      }

    }
  }

  removeBrochureIB(brochure) {
    var index = this.brochureFiles.findIndex(x => x.name === brochure.name);
    this.brochureFiles.splice(index, 1);
  }

  fileChangeEventForCert = function(fileInputbr: any) {
    this.certFiles = [];

    if (fileInputbr.target.files && fileInputbr.target.files[0]) {

      for (let i = 0; i < fileInputbr.target.files.length; i++) {
        this.certFiles.push(fileInputbr.target.files[i])
      }

    }
  }

  removeBrochureForCert(brochure) {
    var index = this.certFiles.findIndex(x => x.name === brochure.name);
    this.certFiles.splice(index, 1);
  }

  fileChangeEventForGallery = function(fileInputbr: any) {
    this.galleryFiles = [];
    this.validationColor = 'black';

    if (fileInputbr.target.files && fileInputbr.target.files[0]) {

      for (let i = 0; i < fileInputbr.target.files.length; i++) {
        this.galleryFiles.push(fileInputbr.target.files[i])
      }

    }
  }

  removeBrochureForGallery(brochure) {
    var index = this.galleryFiles.findIndex(x => x.name === brochure.name);
    this.galleryFiles.splice(index, 1);
  }

  submitDetails() {
    if(this.galleryFiles.length > 0) {
      this.router.navigate(['courseDetails']);
    } else {
      this.validationColor = 'red';
      this.showValidation  = true;
    }
  }

  closeAlert() {
    this.showValidation  = false;
  }

}
