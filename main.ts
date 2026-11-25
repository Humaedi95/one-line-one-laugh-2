// One Line, One Laugh — entry for make.fun competition
// u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a
//
// The entry is a single funny line, written to /output/entry.txt.
// The grader runs this with `node main.ts` (Node 22.23.4).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one-liner: a horoscope refund, refused under warranty.
const LINE =
  "I asked my horoscope for a refund, but apparently 'vague disappointment' isn't covered under warranty.";

// The gate requires 1 to 140 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || /^\s*$/.test(LINE)) {
  throw new Error("Entry line fails the 1-140 character gate.");
}

const outputPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE + "\n", "utf8");

console.log(LINE);
console.log(`Characters: ${LINE.length}`);
