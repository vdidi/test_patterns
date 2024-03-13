import crypto from "crypto";

export default class User {
    private constructor(readonly userId: string, readonly name: string, readonly birthdate: Date, readonly address: string, readonly cpf: string, readonly telephone: string, readonly userName: string, readonly password: string, readonly email: string, readonly createDate: Date) {
        this.password = this.encrypt(password);
    }

    static create(name: string, birthdate: Date, address: string, cpf: string, telephone: string, userName: string, password: string, email: string, createDate: Date) {
        const userId = crypto.randomUUID();
        return new User(userId, name, birthdate, address, cpf, telephone, userName, email, password, createDate);
    }

    encrypt (password: string) {
        const algoritmo = 'aes-256-ctr';
        const chaveSecreta = 'v6tsoLj97lD3vnwjQY5zvumFJ0jM8N7d';
        const iv = crypto.randomBytes(16);
        const cifra = crypto.createCipheriv(algoritmo, chaveSecreta, iv);
        const encriptar = Buffer.concat([cifra.update(password), cifra.final()]);
    
        return iv.toString('hex') + '_' + encriptar.toString('hex');
    }

    getUserByEmail () {

    }
}
