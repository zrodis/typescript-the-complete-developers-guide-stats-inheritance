//date input format US, MM/DD/YYYY
export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/')
    const datePartsNum = dateParts.map((value: string): number => parseInt(value))

    return new Date(datePartsNum[2], datePartsNum[1] - 1, datePartsNum[0])
}
