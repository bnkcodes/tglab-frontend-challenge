export function getInitials(fullName: string, maxLetters: number = 2): string {
  if (!fullName) return '';

  const words = fullName.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';

  const letters: string[] = [];

  for (const w of words) {
    const match = w.match(/\p{L}/u);
    if (match) letters.push(match[0]);
    if (letters.length === maxLetters) break;
  }

  return letters.map(l => l.toLocaleUpperCase('pt-BR')).join('');
}
