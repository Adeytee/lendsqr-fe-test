export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    isActive: boolean;
    registered: any;
    withLoan: boolean;
    withSavings: boolean;
    loanRepayment: string;
    rating: number;
    maritalStatus: string;
    levelOfEducation: string
    employmentStatus: string
    sectorOfEmployment: string
    durationOfEmployment: string
    guarantorName: string
    guarantorPhoneNumber: string
    guarantorRelationship: string
    bvn: number
    picture: string
    age: number;
    children: number
    gender: string
    company: string
    officeEmail: string
    salary: string
    tags: Array<string>
    friends: Array<string>
  }
  