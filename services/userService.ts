import type {
  LoginDto,
  ChangePasswordDto,
  LoginResponse,
  RegisterDto,
} from "@/types/auth";
import type { UserDto, User } from "@/types/user";
import type { NitroFetchRequest, $Fetch } from "nitropack";

const endpoint = "users";

export default (ofetch: $Fetch<any, NitroFetchRequest>) => ({
  endpoint,

  register: async (data: RegisterDto): Promise<User> => {
    return await ofetch<User>(`auth/register`, {
      body: data,
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      async onRequestError() {
        throw new Error("Ошибка регистрации");
      },
      async onResponseError(response) {
        console.log("Ошибка регистрации");
        throw new Error("Ошибка регистрации");
      },
    });
  },

  login: async (data: LoginDto): Promise<LoginResponse> => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    return await ofetch<LoginResponse>(`auth/login`, {
      body: formData,
      method: "POST",
      async onRequestError() {
        throw new Error("Ошибка авторизации");
      },
      async onResponseError(response) {
        throw new Error("Ошибка авторизации");
      },
    });
  },

  async logout(): Promise<any> {
    return await ofetch<any>(`auth/logout`, {
      method: "POST",
    });
  },

  async update(id: number, data: UserDto): Promise<any> {
    return await ofetch<any>(`${endpoint}/${id}`, {
      body: data,
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  async changePassword(id: number, data: ChangePasswordDto): Promise<any> {
    return await ofetch<any>(`${endpoint}/${id}`, {
      body: data,
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    });
  },

  async getUserData(): Promise<User> {
    const response = await ofetch<User>(`auth/me`, {
      async onRequestError() {
        throw new Error("Ошибка ");
      },
      async onResponseError(response) {
        throw new Error("Ошибка ");
      },
    });

    return response;
  },

  async validateToken(token: string): Promise<any> {
    return await ofetch<any>(`auth/validate`, {
      body: { token },
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
  },
});
