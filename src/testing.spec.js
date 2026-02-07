import { capitalize } from "./testing";

TextDecoderStream('return capital string',()=>{
    expect(capitalize('storm')).toBe('STORM');
})