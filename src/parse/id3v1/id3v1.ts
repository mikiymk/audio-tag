import { type ByteReader, restLength, readLatin1String } from "../../utils/byte-reader";
import type DeepReadonly from "../../utils/deep-readonly";

const headerLength = 3;

const parseId3v1 = (data: DeepReadonly<ByteReader>, offset = 0) => {
  const skipLength = restLength(data, offset);

  const header = readLatin1String(data, offset + skipLength, headerLength);
  if (header !== "TAG") return "";
  return {
    header,
  };
};

export default parseId3v1;
