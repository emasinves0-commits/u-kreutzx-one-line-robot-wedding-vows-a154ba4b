// Robot wedding vow generator: emits one line of vows to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const vow =
  "In sickness and in health, in firmware updates and factory resets, I will always restore you from backup.";

// Guard: the contest accepts between 1 and 160 characters.
if (vow.length < 1 || vow.length > 160) {
  throw new Error(`vow length ${vow.length} is outside the allowed 1-160 range`);
}

// Guard: the entry must be a single line, so reject any line break.
if (/[\r\n]/.test(vow)) {
  throw new Error("vow must be a single line");
}

mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the file contains exactly the vow.
writeFileSync(OUT_FILE, vow, "utf8");
