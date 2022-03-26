import * as t from "io-ts";

import { optionalOrNullable } from "../../../../util/io-ts";
import { rpcData, rpcQuantity } from "../base-types";

// @ts-ignore 
export const rpcNewBlockTagObjectWithNumber = t.type({
  blockNumber: rpcQuantity,
});

export const rpcNewBlockTagObjectWithHash = t.type({
  blockHash: rpcData,
  requireCanonical: optionalOrNullable(t.boolean),
});

export const rpcBlockTagName = t.keyof({
  earliest: null,
  latest: null,
  pending: null,
});

// This is the new kind of block tag as defined by https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1898.md
// @ts-ignore 
export const rpcNewBlockTag = t.union([
  rpcQuantity,
  rpcNewBlockTagObjectWithNumber,
  rpcNewBlockTagObjectWithHash,
  rpcBlockTagName,
]);

export type RpcNewBlockTag = t.TypeOf<typeof rpcNewBlockTag>;
// @ts-ignore 
export const optionalRpcNewBlockTag = optionalOrNullable(rpcNewBlockTag);

export type OptionalRpcNewBlockTag = t.TypeOf<typeof optionalRpcNewBlockTag>;

// This is the old kind of block tag which is described in the ethereum wiki
// @ts-ignore 
export const rpcOldBlockTag = t.union([rpcQuantity, rpcBlockTagName]);

export type RpcOldBlockTag = t.TypeOf<typeof rpcOldBlockTag>;
// @ts-ignore 
export const optionalRpcOldBlockTag = optionalOrNullable(rpcOldBlockTag);

export type OptionalRpcOldBlockTag = t.TypeOf<typeof optionalRpcOldBlockTag>;
