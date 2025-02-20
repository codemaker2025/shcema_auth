import { atom } from "recoil";
import authStorage from "../../../../utils/tokenService";

export const authState = atom({
  key: "authState",
  default: authStorage.getAuthState(),
  effects: [
    ({ onSet }) => {
      onSet((newAuthState) => {
        authStorage.setAuthState(newAuthState);
      });
    },
  ],
});
