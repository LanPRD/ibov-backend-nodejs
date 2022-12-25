export type TypeOrdering = "ascending" | "descending";

export class OrderingDataController {
  constructor() {}

  ascendingOrDescending(array: any[], type: TypeOrdering, key: string) {
    const arrayFiltered = array.filter(data => (data[key] && data[key] > 0) || (data[key] && data[key] !== ""));

    if (type === "ascending") {
      return arrayFiltered.sort((a, b) => a[key] - b[key]);
    }

    return arrayFiltered.sort((a, b) => b[key] - a[key]);
  }
}
