import { Injectable } from '@nestjs/common';
import { AgentsRepository } from './agents.repository';

@Injectable()
export class AgentsService {
    constructor(private agentsRepository : AgentsRepository){}

    async getAllAgents(): Promise<any[]> {
        const agents = await this.agentsRepository.findAll()
        return agents 
    }

    async addNewAgent(name : string , category:string , phone:string , password:string , ville:string , published:boolean) : Promise<any>{
        const agent = this.agentsRepository.addAgent(name,category,phone,password,ville,published)
        return agent 
    }

    async updateAgent(published : boolean , id : number) : Promise<any>{
        const agent = this.agentsRepository.updateAgent(published , id)
        return agent 
    }

    async deleteAgent(id : number ) : Promise<any>{
        const agent = this.agentsRepository.deleteAgent(id)
        return agent 
    }
}
