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
        for (const poe of poes) {
            let alreadyExists = false
            for (const existingPOE of this.collection) {
                if (existingPOE.getId() === poe.getId()) {
                    alreadyExists = true
                    break
                }
            }
            if (alreadyExists === false) {
                this.collection.push(poe)
            }
        }
    }
}