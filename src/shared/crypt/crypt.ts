import bcrypt from 'bcryptjs';

const DEFAULT_SALT_ROUNDS = 12;

export const hashValue = async (valueToHash: string, saltRounds = DEFAULT_SALT_ROUNDS) => {
  return await bcrypt.hash(valueToHash, saltRounds);
};

export const compareValueWithHashed = async (value: string, hashedValue: string) => {
  return await bcrypt.compare(value, hashedValue);
};
