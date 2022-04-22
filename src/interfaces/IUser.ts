export interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  isChecked?: boolean;

  address: {
    street: string;
  };
}
