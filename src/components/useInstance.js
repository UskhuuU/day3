import axios from "axios";

export const useInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "app-id": "63104c3120f6e665ecf628ba",
  },
});

/*useInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 404:
        window.alert("huselt buruu");
        break;
      case 403:
        window.alert("App id buruu baina");
        break;
        case 400:
          window.alert("dahin shalga");
          break;
    }
  }
);*/

useInstance.interceptors.request.use(
  function (config) {
    console.log("req intercepotor");


    return config;
  },
  function (error) {
    
    console.log("req intercepotor error");
    return Promise.reject(error);
  }
);
