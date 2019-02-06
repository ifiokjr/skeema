/**
 * Useful for acting on mocked libraries without breaking TypeScript
 */
export const typeSafeMockReset: (mock: any) => void = jest.fn((mock: jest.Mock) => {
  mock.mockReset();
});

/**
 * Useful for adding the rejected value to typescript.
 */
export const typeSafeMockRejectsOnce: (mock: any, value: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, value) => {
    return mock.mockRejectedValueOnce(value);
  },
);

export const typeSafeMockRejects: (mock: any, value: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, value) => {
    return mock.mockRejectedValue(value);
  },
);

export const typeSafeMockResolvesOnce: (mock: any, value: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, value) => {
    return mock.mockResolvedValueOnce(value);
  },
);

export const typeSafeMock: (mock: any) => jest.Mock = jest.fn((mock: jest.Mock) => mock);

export const typeSafeMockResolves: (mock: any, value: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, value) => {
    return mock.mockResolvedValue(value);
  },
);

export const typeSafeMockReturn: (mock: any, value: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, value) => {
    return mock.mockReturnValue(value);
  },
);

export const typeSafeMockReturnOnce: (mock: any, value: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, value) => {
    return mock.mockReturnValueOnce(value);
  },
);

export const typeSafeMockImplementation: (mock: any, fn: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, fn) => {
    return mock.mockImplementation(fn);
  },
);

export const typeSafeMockImplementationOnce: (mock: any, fn: any) => jest.Mock = jest.fn(
  (mock: jest.Mock, fn) => {
    return mock.mockImplementationOnce(fn);
  },
);

export const typeSafeMockClear: (mock: any) => jest.Mock = jest.fn((mock: jest.Mock) => {
  mock.mockClear();
  return mock;
});
