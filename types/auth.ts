import type { User } from "@/types/user";

export type RegisterDto = {
  email: string;
  password: string;
  phone: string;
  name: string;
  role: "USER" | "ADMIN" | "SUPERADMIN" | "UNDEFINED" | "guest";
  surname: string;
  role_id: number;
  group_id: number;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type ChangePasswordDto = {
  oldPassword: string;
  newPassword: string;
};
