export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    isActive: boolean;
    registered: any;
    withLoan: boolean;
    withSavings: boolean;
  }