/*
 *  Sanitizes the provided input by replacing certain special characters
 *  with entities.
 */
export function sanitize(data: string) {
  const characters: Record<string, string> = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  for(const char in characters) {
    const entity = characters[char]

    data = data.replaceAll(char, entity)
  }

  return data
}
