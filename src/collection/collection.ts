export abstract class Collection<T> {
    protected collection: T[] = []

    public size: number = 0

    public getCollection(): T[] {
        return this.collection
    }

    public add(item: T): void {
        this.collection.push(item)
        this.size = this.size + 1
    }


    public abstract remove(item: T): void

}