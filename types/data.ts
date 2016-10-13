export interface Data {
  domain: string;
  action: "create" | "update" | "remove";
  key: string;
}

export interface CreateData<T> extends Data {
  action: "create";
  values: T
}

export interface UpdateData<T> extends Data {
  action: "update";
  values: T
}

export interface RemoveData extends Data {
  action: "remove";
}
