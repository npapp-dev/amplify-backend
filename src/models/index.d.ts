import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Item {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}