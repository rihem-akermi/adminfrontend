export type User = {
  id: string;
  name: string;
  email: string;
  role: "CLIENT" | "AGENT" | "ADMIN";
  createdAt: string;
};

export type Agent = {
  id: string;
  userId: string;
  name: string;
  category: string;
  phone: string;
  address: string;
  published: boolean;
};

export type Reservation = {
  id: string;
  clientName: string;
  agentName: string;
  date: string;
  status: "EN_ATTENTE" | "CONFIRMEE" | "ANNULEE";
};

export const Users: User[] = [
  { id: "1", name: "Sarra Ben Ali", email: "sarra@mail.com", role: "CLIENT", createdAt: "2026-01-10" },
  { id: "2", name: "Karim Plombier", email: "karim@mail.com", role: "AGENT", createdAt: "2026-02-03" },
  { id: "3", name: "Yassine Technicien", email: "yassine@mail.com", role: "AGENT", createdAt: "2026-02-15" },
  { id: "4", name: "Rihem Admin", email: "rihem@mail.com", role: "ADMIN", createdAt: "2026-01-01" },
];

export const Agents: Agent[] = [
  { id: "a1", userId: "2", name: "Karim Plombier", category: "Plomberie", phone: "+216 20 111 222", address: "Tunis", published: true },
  { id: "a2", userId: "3", name: "Yassine Technicien", category: "Électricité", phone: "+216 22 333 444", address: "Sfax", published: false },
];

export const Reservations: Reservation[] = [
  { id: "r1", clientName: "Sarra Ben Ali", agentName: "Karim Plombier", date: "2026-07-10", status: "CONFIRMEE" },
  { id: "r2", clientName: "Sarra Ben Ali", agentName: "Yassine Technicien", date: "2026-07-15", status: "EN_ATTENTE" },
];
