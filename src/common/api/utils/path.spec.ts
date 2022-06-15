import { concatPath } from './path';

describe('concatPath', () => {
  it('should return contacted path', () => {
    const basePath = '/test-path';
    const uuid = 'test-uuid';
    const additionalPath = '/update';

    expect(concatPath(basePath, uuid, additionalPath)).toEqual(`${basePath}/${uuid}${additionalPath}`);
    expect(concatPath(basePath, uuid)).toEqual(`${basePath}/${uuid}`);
    expect(concatPath(basePath)).toEqual(basePath);
    expect(concatPath(basePath, additionalPath)).toEqual(`${basePath}${additionalPath}`);
  });
});
