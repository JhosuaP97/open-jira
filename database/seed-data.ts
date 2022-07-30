interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente :lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "In progress:Voluptatum, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished:veritatis, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
