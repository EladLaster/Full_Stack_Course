const { isEven, removeAtLeastOne, simplify, validate, add } = require('./Exercises');

describe('isEven function', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  describe('edgeCases', () => {
    test('should return false for no input or invalid types', () => {
      expect(isEven()).toBe(false);
      expect(isEven(null)).toBe(false);
      expect(isEven("2")).toBe(false);
      expect(isEven({})).toBe(false);
    });
  });
});

describe('removeAtLeastOne function', () => {
  test('should remove at least one item', () => {
    const arr = [1, 2, 3];
    const result = removeAtLeastOne([...arr]);
    expect(result.length).toBeLessThan(arr.length);
  });

  test('should handle array with 1 element', () => {
    const result = removeAtLeastOne([42]);
    expect(result.length).toBe(0);
  });

  describe('edgeCases', () => {
    test('should throw error if input is not an array', () => {
      expect(() => removeAtLeastOne()).toThrow();
      expect(() => removeAtLeastOne(123)).toThrow();
      expect(() => removeAtLeastOne({})).toThrow();
    });
  });
});

describe('simplify function', () => {
  test('should remove specific symbols', () => {
    expect(simplify("he#l.lo!")).toBe("hello");
    expect(simplify("!#.',")).toBe("");
  });

  test('should not change string without symbols', () => {
    expect(simplify("hello world")).toBe("hello world");
  });

  describe('edgeCases', () => {
    test('should throw for non-string input or missing input', () => {
      expect(() => simplify()).toThrow();
      expect(() => simplify(null)).toThrow();
    });

    test('should return empty string for empty input', () => {
      expect(simplify("")).toBe("");
    });
  });
});

describe('validate function', () => {
  test('should return true if more trues than falses', () => {
    expect(validate([true, true, false])).toBe(true);
  });

  test('should return false if falses >= trues', () => {
    expect(validate([true, false, false])).toBe(false);
    expect(validate([false])).toBe(false);
  });

  test('should ignore non-booleans and count only real booleans', () => {
    expect(validate(['true', false])).toBe(false); // 'true' is string
  });

  describe('edgeCases', () => {
    test('should return error if no booleans present', () => {
      expect(validate([])).toEqual({ error: "Need at least one boolean" });
      expect(validate([1, 2, "false"])).toEqual({ error: "Need at least one boolean" });
      expect(validate(null)).toEqual({ error: "Need at least one boolean" });
    });
  });
});
describe('add function', () => {
  test('should call push with x and y', () => {
    const pushSpy = jest.spyOn(Array.prototype, 'push');

    add(5, 10);

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledWith(5, 10);

    pushSpy.mockRestore();
  });
});
