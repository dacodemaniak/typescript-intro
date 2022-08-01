import { HTMLBuilder } from "../builder/html-builder";
import { TableBuilder } from "../builder/table-builder";
import { TBodyBuilder } from "../builder/tbody-builder";
import { TDBuilder } from "../builder/td-builder";
import { THBuilder } from "../builder/th-builder";
import { THeadBuilder } from "../builder/thead-builder";
import { TRBuilder } from "../builder/tr-builder";
import { Intern } from "./intern";
import { InternCollection } from './intern-collection'

export class ToTable {
    private builder: HTMLBuilder = new TableBuilder()

    private collection: InternCollection = new InternCollection()
    private headers: string[] = ['Id', 'Lastname', 'Firstname', 'Email', 'Phone']

    public constructor() {
        this._hydrate()

        this.makeBuilder()
    }

    public build(): HTMLElement {
        return this.builder.build()
    }

    private makeBuilder(): void {
        // First add a thead
        const theadBuilder: THeadBuilder = new THeadBuilder()
        const trBuilder: TRBuilder = new TRBuilder()
        theadBuilder.add(trBuilder)

        for (const header of this.headers) {
            const thBuilder: THBuilder = new THBuilder()
            thBuilder.setContent(header)
            trBuilder.add(thBuilder)
        }

        this.builder.add(theadBuilder)

        // Next add tbody
        const tbodyBuilder: TBodyBuilder = new TBodyBuilder()
        const rowBuilder: TRBuilder = new TRBuilder()
        tbodyBuilder.add(rowBuilder)

        this.collection.getCollection().forEach((intern: Intern) => {
            tbodyBuilder.add(rowBuilder)

            let tdBuilder: TDBuilder = new TDBuilder()

            tdBuilder.setContent(intern.id.toString())
            rowBuilder.add(tdBuilder)

            tdBuilder = new TDBuilder()
            tdBuilder.setContent(intern.getLastname())
            rowBuilder.add(tdBuilder)

            tdBuilder = new TDBuilder()
            tdBuilder.setContent(intern.firstname)
            rowBuilder.add(tdBuilder)

            tdBuilder = new TDBuilder()
            tdBuilder.setContent(intern.email)
            rowBuilder.add(tdBuilder)

            tdBuilder = new TDBuilder()
            tdBuilder.setContent(intern.phoneNumber)

            rowBuilder.add(tdBuilder)
        })
        this.builder.add(tbodyBuilder)
    }

    private _hydrate(): void {
        const intern: Intern = new Intern()
        intern.id = 1
        intern.setLastname('aubert')
        intern.firstname = 'Jean-Luc'
        intern.birthDate = new Date(1968, 3, 30)
        intern.email = 'jla.webprojet@gmail.com'
        intern.phoneNumber = '06 11 61 83 80'

        this.collection.add(intern)
    }
}