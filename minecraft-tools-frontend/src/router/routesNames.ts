import Vue from "vue";

export interface IRoutesNames {
  home: string;

  about: string;
  contact: string;
  news: string;

  //authLogin: string;
  //authRegister: string;

  //articleCreate: string;
  //articleEdit: string;
  //articleView: string;

  //profileIndex: string;
  //profileSettings: string;
}

const routesNames: Readonly<IRoutesNames> = {
  home: "home",

  about: "about",
  contact: "contact",
  news: "news"

  //authLogin: "authLogin",
  //authRegister: "authRegister",

  //articleCreate: "articleCreate",
  //articleEdit: "articleEdit",
  //articleView: "articleView",

  //profileIndex: "profileIndex",
  //profileSettings: "profileSettings"
};

declare module "vue/types/vue" {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Vue {
    $routesNames: IRoutesNames;
  }
}

export default routesNames;