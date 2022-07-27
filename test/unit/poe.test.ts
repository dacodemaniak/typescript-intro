import { POE } from "../../src/poe"

import * as moment from 'moment'

describe(`POE class test suite`, () => {
    test(
        `POE should be complete`, () => {
            const poe: POE = new POE()
            poe.title = 'Fullstack'
            poe.beginDate = new Date(2022, 6, 18)
            poe.endDate = new Date(2022, 9, 10)
            poe.id = 1

            expect(poe).toBeInstanceOf(POE)

            const begin: moment.Moment = moment(poe.beginDate)
            const end: moment.Moment = moment(poe.endDate)

            expect(begin.format('YYYY-MM-DD')).toBe('2022-07-18')
            expect(end.format('YYYY-MM-DD')).toBe('2022-10-10')
        }
    )

    test(
        `POE should NOT have a endDate lower than begin Date`, () => {
            
            const begin: moment.Moment = moment(new Date(2022, 6, 18))
            const end: moment.Moment = begin.clone().add(57, 'days')

            const poe: POE = new POE()
            poe.title = 'Fullstack'
            poe.beginDate = new Date(2022, 6, 18)
            poe.endDate = new Date(2022, 6, 15)
            poe.id = 1

            expect(moment(poe.endDate).format('YYYY-MM-DD')).toEqual(end.format('YYYY-MM-DD'))
        }
    )
})