export default function cleanSet(aSet, aString) {
  if (!(aSet instanceof Set) || typeof aString !== 'string' || aString.length === 0) {
    return '';
  }
  let newString = '';
  for (const elem of aSet) {
    if (typeof elem === 'string' && elem.startsWith(aString)) {
      newString = newString.concat('-', elem.slice(aString.length));
    }
  }
  return newString.slice(1);
}
