import type DeepReadonly from "./deep-readonly";

const latin1Decoder = new TextDecoder("latin1");

export interface ByteReader {
  readonly u8array: Uint8Array;
  readonly dataview: DataView;
}

export const newReader = (data: DeepReadonly<ArrayBufferLike> | DeepReadonly<Uint8Array>): ByteReader => {
  const buffer = data instanceof Uint8Array ? data.buffer : data;

  return {
    u8array: new Uint8Array(buffer),
    dataview: new DataView(buffer),
  };
};

export const restLength = (reader: DeepReadonly<ByteReader>, offset: number) => reader.u8array.byteLength - offset;

export const readLatin1String = (reader: DeepReadonly<ByteReader>, offset: number, length: number) =>
  latin1Decoder.decode(reader.u8array.subarray(offset, offset + length).buffer);
