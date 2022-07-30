export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntrieStatus;
}

export type EntrieStatus = "pending" | "in-progress" | "finished";
