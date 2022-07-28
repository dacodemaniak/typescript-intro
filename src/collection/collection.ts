export class Collection {
    protected collection: any[] = []

    public getCollection(): any[] {
        return this.collection
    }

    public add(item: any): void {
        this.collection.push(item)
    }
}