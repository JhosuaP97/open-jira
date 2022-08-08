import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updatedEntry: (entry: Entry, showSnackbar?: boolean) => void;
  deleteEntry: (id: string) => Promise<void>;
}

export const EntriesContext = createContext({} as ContextProps);
