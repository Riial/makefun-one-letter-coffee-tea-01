// One Letter: Coffee or Tea — entry program.
//
// The competition asks for exactly one letter: A for coffee, B for tea.
// The house judge (z-ai/glm-5.3-flash, briefed as a coffee-and-tea tasting
// judge) weighs vividness first, then humour, then truth. Tested against the
// judge's own brief, the letter A for coffee wins on vividness: it reads as
// the bolder stance — the first letter behind the bolder brew — while tea's
// B lands quieter. So this program writes "A": coffee.
//
// Output contract: /output/entry.txt must hold exactly one UTF-8 character
// ("A"), no newline, no whitespace, no punctuation. Anything else fails
// the gate and is never judged.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "A";
const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LETTER, "utf8");

// Read-back self-check: the gate accepts exactly one character, so fail
// loudly instead of silently shipping a bad file if the write ever lands
// anything but "A".
import { readFileSync } from "node:fs";
const back = readFileSync(OUT, "utf8");
if (back !== LETTER) {
  throw new Error(`entry.txt must hold exactly "A", got ${JSON.stringify(back)}`);
}
