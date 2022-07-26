import * as moment from 'moment'

export class POE {
    private _id: number
    public title: string
    private _beginDate: moment.Moment
    private _endDate: moment.Moment


    public constructor() {
        this._id = 0;
        this._beginDate = moment()
        this._endDate = moment()

        this._endDate.add(57, 'days')
    }

    public set id(id: number) {
        this._id = id
    }

    public get id(): number {
        return this._id
    }

    public get beginDate(): Date {
        return this._beginDate.toDate();
    }

    public set beginDate(beginDate: Date) {
        try {
            this._checkDates(beginDate, this._endDate)
            this._beginDate = moment(beginDate) 
        } catch(error) {
            console.log(error)
        }
        
    }

    public get endDate(): Date {
        return this._endDate.toDate();
    }

    public set endDate(endDate: Date) {
        try {
            this._checkDates(this._beginDate, endDate)
            this._endDate = moment(endDate) 
        } catch(error) {
            console.log(error)
        }
    }

    private _checkDates(...args): void {
        const beginDate: moment.Moment = moment(args[0])
        const endDate: moment.Moment = moment(args[1])
        if (beginDate.isAfter(endDate)) {
            throw new Error(`Dates are invalid`)
        }
    }
}