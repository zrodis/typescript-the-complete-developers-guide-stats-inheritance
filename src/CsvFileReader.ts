import fs from 'fs'

export default abstract class CsvFileReader<DataTuple> {
    data: DataTuple[] = []
    constructor(public filename: string) {
        this.read()
    }

    read(): void {
        const data = fs.readFileSync(this.filename, { encoding: 'utf-8' })

        const rowData = data.split('\n').map((row) => row.split(','))

        const rowsTyped = rowData.map(this.mapRow)

        this.data = rowsTyped
    }

    abstract mapRow(row: string[]): DataTuple
}
