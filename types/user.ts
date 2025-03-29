export type UserRole = "guest" | "teacher" | "parent" | "admin";

export type User = {
  id: string;
  email: string;
  phone?: string;
  image?: string;
  username: any;
  role: UserRole;
  name: string;
  surname: string;
  organization_id: number;
  organization_name: string;
};

export type UserDto = {
  email: string;
  phone: string;
  role: UserRole;
  name: string;
  surname: string;
  balance: number;
  password?: string;
};
