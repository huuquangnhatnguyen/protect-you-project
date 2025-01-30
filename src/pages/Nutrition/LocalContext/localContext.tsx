import { createContext } from "react";
import { DocumentData } from "firebase/firestore";

interface curIngredient {}
interface LocalContextType {
  dataDB?: DocumentData;
  currentSeason?: string;
  currentChosenIngredient?: string;
}

export const LocalContext = createContext<LocalContextType>({
  currentChosenIngredient: "",
});
