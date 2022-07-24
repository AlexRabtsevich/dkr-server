import { SLASH_CHAR } from '@dkr/common/constants';

export const concatPath = (...partsOfPath: string[]): string => {
  return partsOfPath.reduce((path, partOfPath) => {
    const pathDivider = partOfPath.startsWith(SLASH_CHAR) ? '' : SLASH_CHAR;

    return path.concat(pathDivider, partOfPath);
  }, '');
};
