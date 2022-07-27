import { POE } from "./poe";

export class POECollection {
    private collection: POE[]

    public constructor() {
        this.collection = []
    }

    public getCollection(): POE[] {
        return this.collection
    }

    public addPOE(...args: POE[]): void {
        for (const poe of args) {
            if (this.collection.includes(poe) === false) {
                this.collection.push(poe)
            }
        }
    }
}