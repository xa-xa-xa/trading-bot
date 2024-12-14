// types/msgpack5.d.ts
declare module "msgpack5" {
  interface MessagePack {
    encode(input: any): Buffer;
    decode(buffer: Buffer): any;
  }

  function msgpack5(): {
    encode(input: any): Buffer;
    decode(buffer: Buffer): any;
    // Add more methods if you know them from the msgpack5 docs
  };

  export { MessagePack };
  export default msgpack5;
}
