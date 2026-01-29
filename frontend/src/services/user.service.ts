import { api } from "@/lib/request";

interface UserCredit {
  balance: number;
  token: number;
}

const USER_ENDPOINTS = {
  CREDIT: "/user/credit",
};

export const userService = {
  async getUserCredit() {
    return api.get<UserCredit>(USER_ENDPOINTS.CREDIT);
  },
};
