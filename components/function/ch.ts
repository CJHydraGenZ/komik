export const ch = (...classNamees: any[]) => {
  return classNamees.filter(Boolean).join("");
};
