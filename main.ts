import * as fs from "node:fs";

const word = "Echo";

// Gate: 1-30 characters, single word, not whitespace-only.
const chars = [...word];
if (chars.length < 1 || chars.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${chars.length}`);
}
if (/\s/.test(word) || word.trim().length === 0) {
  throw new Error("entry must be exactly one word with no spaces");
}
// A single word describing a boss: letters only, no digits or punctuation.
if (!/^[A-Za-z]+$/.test(word)) {
  throw new Error("entry must be a single alphabetic word");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", word, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
