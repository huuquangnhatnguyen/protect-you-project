import { createContext } from "react";
import { DocumentData } from "firebase/firestore";

interface MyContextType {
  dataDB: DocumentData;
  currentSeason?: string;
}

export const MyContext = createContext<MyContextType>({
  dataDB: {},
  currentSeason: "",
});
