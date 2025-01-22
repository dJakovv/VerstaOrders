import { validationRules } from "./validationRules";

export default function validateField(fieldName, value) {
  const rules = validationRules[fieldName];

  if (!rules) {
    return "";
  }

  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }

  return "";
}