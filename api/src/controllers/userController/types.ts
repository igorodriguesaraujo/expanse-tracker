import { Expanse } from "@prisma/client";

export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_att: Date;
  expanses: Expanse[];
}
