export class POE {
    private _id: number

    public title: string

    private _beginDate: Date

    private _endDate: Date

    public get beginDate(): Date {
        return this._beginDate;
    }

    public set beginDate(beginDate: Date) {
        this._beginDate = beginDate;
    }

    public get endDate(): Date {
        return this._endDate;
    }

    public set endDate(endDate: Date) {
        this._endDate = endDate;
    }

    
    public set id(id: number) {
        if (this._id === undefined) {
            this._id = id
        }
    }

    public get id(): number {
        return this._id
    }

    public setId(id: number):void {
        if (this._id === undefined) {
            this._id = id
        }
    }

    public getId(): number | undefined {
        return this._id
    }
}