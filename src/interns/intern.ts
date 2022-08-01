export class Intern {

    public id: number
    private lastname: string
    public firstname: string
    public birthDate: Date
    public phoneNumber: string
    public email: string
    
    public setLastname(lastname: string): void {
        this.lastname = lastname.toUpperCase()
    }

    public getLastname(): string {
        return this.lastname
    }
}