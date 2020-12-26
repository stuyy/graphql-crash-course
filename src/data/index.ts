import { PaymentMethod, User } from "../utils/types";

export const users: User[] = [
  {
    id: "123",
    name: "Arizona",
    email: "arizona@gmail.com",
    age: 20,
  },
  {
    id: "124",
    name: "Mike",
    email: "mike@gmail.com",
    age: 21,
  },
  {
    id: "125",
    name: "Ryan",
    email: "ryan@gmail.com",
    age: 22,
  },
  {
    id: "126",
    name: "Christina",
    email: "christina@gmail.com",
    age: 25,
  },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    last4: "4567",
    expMonth: 8,
    expYear: 2021,
    userId: "123",
  },
  {
    id: "2",
    last4: "4568",
    expMonth: 9,
    expYear: 2021,
    userId: "123",
  },
  {
    id: "3",
    last4: "4567",
    expMonth: 10,
    expYear: 2021,
    userId: "124",
  },
  {
    id: "4",
    last4: "4568",
    expMonth: 10,
    expYear: 2022,
    userId: "125",
  },
  {
    id: "5",
    last4: "4568",
    expMonth: 10,
    expYear: 2022,
    userId: "125",
  },
  {
    id: "6",
    last4: "4568",
    expMonth: 10,
    expYear: 2022,
    userId: "125",
  },
  {
    id: "7",
    last4: "4568",
    expMonth: 10,
    expYear: 2022,
    userId: "126",
  },
];
