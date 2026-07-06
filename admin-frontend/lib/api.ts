import { url } from "inspector";
import { Reservations, User, Agent, Reservation } from "./data";

export type { User, Agent, Reservation };

const backendUrl = 'http://localhost:3001'

/* USER */
export async function getUsers(): Promise<User[]> {
  const response = await fetch(backendUrl + "/users");
  const Users = await response.json()
  console.log(Users)
  return Users
}

export async function addUser(user: Omit<User, "id" | "created_at">): Promise<User> {
  console.log("📤 Envoi addUser :", user);
  const response = await fetch(backendUrl + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const newUser = await response.json();
  console.log("📥 User créé reçu :", newUser);
  return newUser; // 👈 contient l'id généré par PostgreSQL, utile pour l'affichage
}

export async function updateUser(id: string, data: Partial<User>): Promise<User> {
  const res = await fetch(backendUrl + "/users"+ id ,{
    method : 'PATCH',
    headers : {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data) 
  }) 
  const updatedUser = await res.json()
  console.log("User "+ id + " updated")
  return updatedUser //type any but it should return User normalement 
}

export async function deleteUser(id: number): Promise<User> {
  console.log("🗑️ Suppression du user :", id);
  const res = await fetch(`${backendUrl}/users/${id}`, {
    method: "DELETE",
  });
  const deletedUser = await res.json()
  return deletedUser

  // we can call it like this 
  //await deleteAgent("1");
  // or 
  //const a: Agent = await deleteAgent("1");
  //but in general delete returns void is better 
  // or
  //  you can retun a message {"messgae" : "deleted"}
}

/* Agent*/

export async function getAgents(): Promise<Agent[]> {
  const res = await fetch(backendUrl + "/agents")
  const Agents = res.json()
  return Agents
}

export async function addAgent(agent : Omit<Agent, "id" | "role">) :Promise<Agent> {
  /*  Omit<Agent, "id" | "role">
  Take the Agent type, but remove the fields id and role.
  */
  const res = await fetch (backendUrl+"/agents",{
    method : "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(agent)
  })

  const newAgent = await res.json() 
  return newAgent


}


export async function updateAgent(id: string, data: Partial<Agent>): Promise<Agent> {
  const res = await fetch (`${backendUrl}/agents/${id}`,{
    method : "PATCH",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(data)
  })
  const updatedAgent = await res.json()
  console.log("Agent "+ id + " updated")
  return updatedAgent
}

export async function deleteAgent(id: string): Promise<Agent> {

  const res = await fetch (`${backendUrl}/agents/${id}`,{
    method : "DELETE"
  })
  const deletedAgent = await res.json()
  console.log(`Agent ${id} is deleted`)
  return deletedAgent
}


/*Reservation*/

export async function getReservations(): Promise<Reservation[]> {
  return Reservations;
}

export async function addReservation(reservation : Reservation) {
  // i don't know what i am supposed to do exactly hereand if the params are true
}

export async function deleteReservation(id: string): Promise<void> {
  console.log("suppression de l'Reservation", id);
}

export async function updateReservation(id: string, data: Partial<Reservation>): Promise<void> {
  //backendUrl + method + body  
  console.log("mise à jour du user", id, data);
}


