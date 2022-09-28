import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";

type UsuarioUpdateRequest = {
    id: string;
    nome: string;
    senha: string;
}

export class UpdateUsuarioService{
    async execute({id, nome, senha}: UsuarioUpdateRequest) {
        const repo = getRepository(Usuario);

        const usuario = await repo.findOneBy({id});

        if (!usuario){
            return new Error("Usuario não existe");
        }   
        
        usuario.nome = nome;
        usuario.senha = senha;

        await repo.save(usuario);

        return usuario;
    }    
}