export function fullName (obj) {
  if (!obj) return "";
  const {firstName, lastName} = obj;
  if (!firstName && !lastName) return "";
  return [(firstName || ""), (lastName || "")].join(" ").trim();
}
