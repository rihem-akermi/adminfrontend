import { Users, Agents, Reservations, User, Agent, Reservation } from "./data";

export type { User, Agent, Reservation };

export async function getUsers(): Promise<User[]> {
  //normalement m database
  //normalement requete vers la base
  //fetch("url du nestjs")
  return Users; 
}

export async function deleteUser(id: string): Promise<void> {
  //fetc("url",{
  //method : "DELETE"})
  console.log("suppression du user", id);
}

export async function updateUser(id: string, data: Partial<User>): Promise<void> {
  //url + method + body  
  console.log("mise à jour du user", id, data);
}


export async function getAgents(): Promise<Agent[]> {
  return Agents;
}

export async function deleteAgent(id: string): Promise<void> {
  console.log("suppression de l'agent", id);
}

export async function getReservations(): Promise<Reservation[]> {
  return Reservations;
}

