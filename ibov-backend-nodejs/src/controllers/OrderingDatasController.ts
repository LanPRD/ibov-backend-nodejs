export type TypeOrdering = "ascending" | "descending";

export class OrderingDataController {
  constructor() {}

  protected ascendingOrDescending(array: any[], type: TypeOrdering) {
    const order = {
      ascending: array.reverse(),
      descending: array
    };

    return order[type];
  }
}
