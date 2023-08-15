export interface BasicResult {
  took: number;
  servers: ServerInfo[];
  status: string;
  total: number;
}

export interface ServerInfo {
  char_maker: number;
  count: number;
  diamonds: number;
  farmers: number;
  open: boolean;
  server_id: number;
  states1: string;
}
