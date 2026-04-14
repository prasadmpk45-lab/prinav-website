const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 120,
  subjectMax: 120,
  messageMax: 1000,
  companyMax: 120,
};

const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
const companyPattern = /^[A-Za-z0-9][A-Za-z0-9 &'().,\-/]*$/;

const trimValue = (value = "") => value.trim();

export const validateName = (value = "") => {
  const trimmed = trimValue(value);

  if (
    !trimmed ||
    trimmed.length < LIMITS.nameMin ||
    trimmed.length > LIMITS.nameMax ||
    !namePattern.test(trimmed)
  ) {
    return "Enter a valid name";
  }

  return "";
};

export const validateEmail = (value = "") => {
  const trimmed = trimValue(value);

  if (!trimmed || trimmed.length > LIMITS.emailMax || /\s/.test(trimmed)) {
    return "Enter a valid email";
  }

  const parts = trimmed.split("@");

  if (
    parts.length !== 2 ||
    !parts[0] ||
    !parts[1] ||
    parts[1].startsWith(".") ||
    parts[1].endsWith(".") ||
    !parts[1].includes(".")
  ) {
    return "Enter a valid email";
  }

  return "";
};

export const validateSubject = (value = "") => {
  const trimmed = trimValue(value);

  if (!trimmed || trimmed.length > LIMITS.subjectMax) {
    return "Enter a valid subject";
  }

  return "";
};

export const validateMessage = (value = "") => {
  const trimmed = trimValue(value);

  if (!trimmed || trimmed.length > LIMITS.messageMax) {
    return "Enter a valid message";
  }

  return "";
};

export const validateCompany = (value = "") => {
  const trimmed = trimValue(value);

  if (!trimmed) {
    return "";
  }

  if (trimmed.length > LIMITS.companyMax || !companyPattern.test(trimmed)) {
    return "Enter a valid company name";
  }

  return "";
};

export const validateContactForm = (values) => {
  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    subject: validateSubject(values.subject),
    message: validateMessage(values.message),
  };

  return errors;
};

export const validateDemoForm = (values) => {
  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    company: validateCompany(values.company),
    message: validateMessage(values.message),
  };

  return errors;
};

export const hasErrors = (errors) =>
  Object.values(errors).some((value) => Boolean(value));

export const sanitizeFormPayload = (values) =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, trimValue(value)])
  );

export { LIMITS };
