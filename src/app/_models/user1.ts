import { Role } from "./Role";


export class User1 {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role: Role;
    token?: string;
}