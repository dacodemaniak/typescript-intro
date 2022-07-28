import { IModel } from "./inerfaces/i-model"

export class Intern implements IModel {

    public id: number
    private lastname: string
    public firstname: string
    public birthDate: Date
    public phoneNumber: string
    public email: string

    getId(): number {
        throw new Error("Method not implemented.")
    }
    setId(id: number) {
        throw new Error("Method not implemented.")
    }
    
    public setLastname(lastname: string): void {
        this.lastname = lastname.toUpperCase()
    }

    public getLastname(): string {
        return this.lastname
    }
}