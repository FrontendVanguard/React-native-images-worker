export const validatePesel = (pesel: string): boolean => {
  const monthWithCentury = Number(pesel.substring(2, 4));

  if (!monthWithCentury || monthWithCentury % 20 > 12) {
    return false;
  }

  const day = Number(pesel.substring(4, 6));
  if (!day || day < 1 || day > 31) {
    return false;
  }

  if (!/^[0-9]{11}$/u.test(pesel)) {
    return false;
  }

  const times = [1, 3, 7, 9];

  const digits = `${pesel}`.split(``).map((digit) => {
    return parseInt(digit, 10);
  });

  const [dig11] = digits.splice(-1);

  const control =
    digits.reduce((previousValue, currentValue, index) => {
      return previousValue + currentValue * (times[index % 4] as number);
    }) % 10;

  return 10 - (control === 0 ? 10 : control) === dig11;
};

export const validateNip = (nip: string): boolean => {
  const nipWithoutDashes = nip.replace(/-/gu, ``);
  const reg = /^[0-9]{10}$/u;
  if (!reg.test(nipWithoutDashes)) {
    return false;
  }

  const dig = String(nipWithoutDashes).split(``);
  const controlValues = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  const partialSums = controlValues.map((controlValue, index) => {
    return controlValue * parseInt(dig[index] as string, 10);
  });

  let sum = 0;
  partialSums.forEach((partialSum) => {
    sum += partialSum;
  });

  const control = sum % 11;

  return parseInt(dig[9] as string, 10) === control;
};
