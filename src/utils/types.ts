export type UserArgsType = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export type PaymentMethod = {
  id: string;
  last4: string;
  expMonth: number;
  expYear: number;
  userId: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  paymentMethod?: PaymentMethod[];
};
