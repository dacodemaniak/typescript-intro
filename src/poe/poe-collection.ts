import { Collection } from "../collection/collection";
import { POE } from "./poe";

export class POECollection extends Collection<POE> {

    public add(poe: POE): void {
        if (
            this.collection.findIndex((inPoe: POE) => inPoe.id === poe.id) === -1
        ) {
            super.add(poe)
        }
    }
}