export default function objToSearchStr(obj: Record<string, any>) {
  const arr: string[] = [];
  Object.entries(obj).forEach(([key, value]) => {
    arr.push(`${key}=${value}`);
  });
  return arr.join('&');
}
