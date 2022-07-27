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
        this.collection = [... new Set(poes)]
    }
}