const { deterministicPartitionKey } = require("./dpk");
​
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
​
  it("Returns the literal '5' when given 5 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 5 });
    expect(trivialKey).toBe("5");
  });
​
  it("Returns the correct literal when given { value: 'abc' } as input", () => {
    const trivialKey = deterministicPartitionKey({ value: 'abc' });
    expect(trivialKey).toBe("82fb584454fed2a3682035667332a7d993159fe988c6e879581e417a05cd30571d3a1ef9ca3b73648f25bfe75bb22bdea9e1995b0dbaff3a69534ef9076fefc3");
  });
});
