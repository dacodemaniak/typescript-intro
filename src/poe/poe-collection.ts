import { POE } from "./poe";

export class POECollection {
    private collection: POE[]

    public constructor() {
        this.collection = []
    }

    public getCollection(): POE[] {
        return this.collection
    }

    /**
     * 
     * @param poes 
     * @todo Remove all doublons before to store
     */
    public setCollection(poes: POE[]): void {
        this.collection = []
        for (const poe of poes) {
            if (this.collection.includes(poe) === false) {
                this.collection.push(poe)
            }
        }
    }

    public addPOE(...args: POE[]): void {
        for (const poe of args) {
            if (this.collection.includes(poe) === false) {
                this.collection.push(poe)
            }
        }
    }
}