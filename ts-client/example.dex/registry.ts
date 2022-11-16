import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePool } from "./types/example/dex/tx";
import { MsgUpdatePool } from "./types/example/dex/tx";
import { MsgDeletePool } from "./types/example/dex/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/example.dex.MsgCreatePool", MsgCreatePool],
    ["/example.dex.MsgUpdatePool", MsgUpdatePool],
    ["/example.dex.MsgDeletePool", MsgDeletePool],
    
];

export { msgTypes }