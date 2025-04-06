import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



interface Election {
  id: number;
  title: string;
  description: string;
  endDate: string;
}

interface VoterData {
  name: string;
  dob: string;
  gender: string;
  nationality: string;
  voterId: string;
  mobile: string;
  email: string;
  govtId: File | null;
  address: string;
  district: string;
  pincode: string;
  termsAccepted: boolean;
}




@Component({
  selector: 'app-votingpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './votingpage.component.html',
  styleUrl: './votingpage.component.css'
})



export class VotingpageComponent implements OnInit {
  elections: Election[] = [];
  selectedElection: Election | null = null;
  faceVerified = false;
  voterData: VoterData = this.getInitialVoterData();
  visibleFields: Set<string> = new Set(['name']);
  isLoading = true;
  isHeroVisible = true;
  isAtTop = true;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {


    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    window.addEventListener('scroll', () => {
      this.isAtTop = window.scrollY < 50;
      this.isHeroVisible = window.scrollY < window.innerHeight;
    });




    this.elections = [
      {
        id: 1,
        title: 'Presidential Election 2025',
        description: 'National presidential election for the term 2025-2029',
        endDate: 'November 5, 2025'
      },
      {
        id: 2,
        title: 'Local Council Election',
        description: 'Election for city council representatives',
        endDate: 'June 15, 2025'
      },
      {
        id: 3,
        title: 'Student Body Election',
        description: 'University student council election',
        endDate: 'May 1, 2025'
      }
    ];
  }

  getInitialVoterData(): VoterData {
    return {
      name: '',
      dob: '',
      gender: '',
      nationality: '',
      voterId: '',
      mobile: '',
      email: '',
      govtId: null,
      address: '',
      district: '',
      pincode: '',
      termsAccepted: false
    };
  }

  selectElection(election: Election) {
    this.selectedElection = election;
  }

  startFaceVerification() {
    setTimeout(() => {
      this.faceVerified = true;
    }, 2000);
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.voterData.govtId = file;
      this.checkFieldVisibility('govtId');
    }
  }

  checkFieldVisibility(field: string) {
    const fieldOrder = [
      'name', 'dob', 'gender', 'nationality', 'voterId',
      'mobile', 'email', 'govtId', 'address', 'district',
      'pincode', 'terms'
    ];

    const currentIndex = fieldOrder.indexOf(field);
    if (currentIndex >= 0 && this.isFieldFilled(field)) {
      const nextField = fieldOrder[currentIndex + 1];
      if (nextField) {
        this.visibleFields.add(nextField);
      }
    }
  }

  isFieldFilled(field: string): boolean {
    const value = this.voterData[field as keyof VoterData];
    return value !== '' && value !== null;
  }

  isFieldVisible(field: string): boolean {
    return this.visibleFields.has(field);
  }

  isFormValid(): boolean {
    return (
      this.faceVerified &&
      this.voterData.name.trim() !== '' &&
      this.voterData.dob !== '' &&
      this.voterData.gender !== '' &&
      this.voterData.nationality.trim() !== '' &&
      this.voterData.voterId.trim() !== '' &&
      this.voterData.mobile.trim() !== '' &&
      this.voterData.email.trim() !== '' &&
      this.voterData.govtId !== null &&
      this.voterData.address.trim() !== '' &&
      this.voterData.district.trim() !== '' &&
      this.voterData.pincode.trim() !== '' &&
      this.voterData.termsAccepted
    );
  }

  submitVote() {
    if (!this.isFormValid()) {
      alert('Please fill all required fields and accept the terms');
      return;
    }
    
    console.log('Vote submitted:', {
      election: this.selectedElection,
      voter: this.voterData
    });
    
    alert('Vote submitted successfully!');
    this.resetForm();
  }

  goBack() {
    this.selectedElection = null;
    this.resetForm();
  }

  private resetForm() {
    this.faceVerified = false;
    this.voterData = this.getInitialVoterData();
    this.visibleFields = new Set(['name']);
  }
}
