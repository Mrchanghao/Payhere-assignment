export function numberFormat(num: number) {
  return new Intl.NumberFormat('en-In', {maximumSignificantDigits: 3}).format(num)
}