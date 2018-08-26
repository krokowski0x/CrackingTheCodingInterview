export default function URLify(string) {
  return string.trim().replace(/\s/g, "%20");
}
