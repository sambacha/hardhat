import * as t from "io-ts";

export const rpcCompilerInput = t.type(
  {
    language: t.string,
    sources: t.unknown,
    settings: t.unknown,
  },
  "RpcCompilerInput"
);

export type RpcCompilerInput = t.TypeOf<typeof rpcCompilerInput>;

export const rpcCompilerOutput = t.type(
  {
    sources: t.unknown,
    contracts: t.unknown,
  },
  "RpcCompilerOutput"
);

export type RpcCompilerOutput = t.TypeOf<typeof rpcCompilerOutput>;
