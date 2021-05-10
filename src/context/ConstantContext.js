import { createContext } from "react";

const Constants = {
  API_ROOT: "http://localhost:8000/api/",
};

const ConstantsContext = createContext(Constants);

export { ConstantsContext, Constants };
