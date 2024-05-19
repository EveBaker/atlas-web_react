import { TextEncoder, TextDecoder } from 'util';
import { StyleSheetTestUtils } from 'aphrodite';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });