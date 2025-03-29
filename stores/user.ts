import type { LoginDto, RegisterDto, LoginResponse } from "~/types/auth";
import type { User } from "~/types/user";

export const useUserStore = defineStore("user", () => {
  const { $userService } = useNuxtApp();
  const userService = $userService as any;

  const isAuthDialogOpen = ref(false);
  const isLoggedIn = ref(!!useCookie("token").value);

  const userData: Ref<User> = ref({
    id: "0",
    username: "",
    name: "",
    surname: "",
    email: "",
    role: "guest",
    password: "",
    role_id: 0,
    group_id: 1,
    createdAt: new Date(),
    hasAccess: false,
    organization_id: 0,
  });

  const errorMessage: { message: string | null } = reactive({ message: null });

  const toBanUserPhone = ref("");
  const banDialogVisible = ref(false);

  watch(isAuthDialogOpen, () => {
    errorMessage.message = "";
  });

  const updateMe = async (payload: User) => {
    const res = (await userService.update(userData.value.id, payload)) as User;

    return res;
  };

  const onSuccessfulAuth = (data: any) => {
    if (!data.token) return;
    isAuthDialogOpen.value = false;

    setUserData(data);

    if (isLoggedIn.value) {
      if (userData.value.role === "admin") {
        navigateTo("/admin/chat");
      } else {
        navigateTo("/dashboard/tasks");
      }
    }
  };

  const onError = (error: any) => {
    if (error) {
      errorMessage.message = error;
    } else {
      errorMessage.message = "Ошибка";
    }
  };

  const register = async (payload: RegisterDto) => {
    errorMessage.message = "";
    await userService.register(payload).then(onSuccessfulAuth).catch(onError);
  };

  const login = async (payload: LoginDto) => {
    errorMessage.message = "";
    await userService.login(payload).then(onSuccessfulAuth).catch(onError);
  };

  const logout = async () => {
    errorMessage.message = "";
    userService.logout();

    isLoggedIn.value = false;
    Object.assign(userData, {});

    useCookie("token").value = null;
    useCookie("userData").value = encodeURIComponent(JSON.stringify(null));

    if (useRoute().fullPath.includes("bastyq")) navigateTo("/bastyq/auth");
    else if (useRoute().fullPath === "/") return;
    else navigateTo("/auth");
  };

  const setUserData = (payload: LoginResponse) => {
    isLoggedIn.value = true;

    userData.value = payload.user;

    const myCookieToken = useCookie("token", { maxAge: 60 * 60 * 24 * 30 });
    myCookieToken.value = payload.token;

    useCookie("userData").value = encodeURIComponent(
      JSON.stringify(payload.user)
    );
  };

  const initUser = async () => {
    const token = useCookie("token").value;

    if (token) {
      // validate token
      isLoggedIn.value = true;
      try {
        userData.value = JSON.parse(
          decodeURIComponent(useCookie("userData").value ?? "")
        );
      } catch (error) {}

      userService
        .getUserData()
        .then((data: User) => {
          isAuthDialogOpen.value = false;

          try {
            setUserData({
              token: useCookie("token").value as string,
              user: data,
            });
          } catch (error) {}
        })
        .catch((error: any) => {
          console.log(error);
          logout();
        });
    }
  };

  return {
    isAuthDialogOpen,
    isLoggedIn,
    userData,
    errorMessage,
    banDialogVisible,
    toBanUserPhone,
    setUserData,
    initUser,
    login,
    register,
    logout,
    updateMe,
  };
});
