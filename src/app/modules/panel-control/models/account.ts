export class Account {
  id?: number;
  name: string;
  exchange: string;
  balance: [{ name: string; name2: string }, { name: string; name2: string }];
  isCollapsed: boolean;
}
