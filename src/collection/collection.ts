export class Collection {
    protected collection: any[] = []
    
    public size: number = 0

    public getCollection(): any[] {
        return this.collection
    }

    public add(item: any): void {
        this.collection.push(item)
        this.size = this.size + 1
    }
}