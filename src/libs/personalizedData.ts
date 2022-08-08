import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

export const getPostalCode = (postalCodeString: string) => {
  return `${postalCodeString.substring(0, 3)}-${postalCodeString.substring(3, 7)}`;
};

export const getPhoneNumber = (phoneNumberString: string) => {
  const region = 'JP';
  const util = PhoneNumberUtil.getInstance();
  const num = util.parseAndKeepRawInput(phoneNumberString, region);
  return !util.isValidNumberForRegion(num, region)
    ? ''
    : util.format(num, PhoneNumberFormat.NATIONAL);
};

export const headerWithAuthToken = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
