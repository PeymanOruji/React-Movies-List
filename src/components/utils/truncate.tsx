export default function truncate(string: string, length: number = 50) {
  if (string && string.length > length) {
    return `${string.substr(0, length)}...`
  }
  return string
}
