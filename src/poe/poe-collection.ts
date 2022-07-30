import { Collection } from "../collection/collection";
import { POE } from "./poe";

export class POECollection extends Collection<POE> {
    public remove(item: POE): void {
        this.collection.splice(
            this.collection.findIndex((inItem: POE) => inItem.id === item.id),
            1
        )
        this.size = this.collection.length

        /**
        const resultArray: POE[] = []
        for (let index: number = 0; index < this.collection.length; index++) {
            if (this.collection[index].id !== item.id) {
                resultArray.push(this.collection[index])
            }
        }
        this.collection = [...resultArray]
        */
    }

    public add(poe: POE): void {
        if (
            this.collection.findIndex((inPoe: POE) => inPoe.id === poe.id) === -1
        ) {
            super.add(poe)
        }
    }
}