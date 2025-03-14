interface IForm {
  login: string;
  password: string;
}

// It is necessary to type the validation object
// Keep in mind that the data in the form may expand, and these fields
// must also appear in the validation object.

interface IKey {
  isValid: boolean;
  errorMsg?: string;
}

type IValidationDataGeneric<T> = {
  [P in keyof T]: { isValid: boolean } | { isValid: boolean; errorMsg: string };
};

type IValidatinData = IValidationDataGeneric<IForm>;

const validationData: IValidatinData = {
  login: {
    isValid: false,
    errorMsg: 'At least 3 characters',
  },
  password: { isValid: true },
};
