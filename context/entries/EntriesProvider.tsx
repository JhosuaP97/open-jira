import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente :lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "In progress:Voluptatum, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Finished:veritatis, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

type EntriesProviderProps = {
  children: React.ReactNode;
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "Entry - Add-entry", payload: newEntry });
  };

  const updatedEntry = (entry: Entry) => {
    dispatch({ type: "Entry - Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Methods
        addNewEntry,
        updatedEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
