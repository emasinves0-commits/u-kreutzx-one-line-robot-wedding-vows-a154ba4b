// One-Line Robot Wedding Vows — make.fun entry.
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// The vow must stay within the 160-character gate and carry the promise
// (in sickness and in health) plus the machine-specific turn (restore from backup).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const VOW =
  "In sickness and in health, in firmware updates and factory resets, I will always restore you from backup.";

// The sealed gate accepts 1 to 160 characters; refuse to write an invalid vow.
const MAX_CHARS = 160;
if (VOW.length < 1 || VOW.length > MAX_CHARS) {
  throw new Error(`Vow is ${VOW.length} characters; the gate allows 1 to ${MAX_CHARS}.`);
}

const OUTPUT_PATH = join(process.cwd(), "output", "entry.txt");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, VOW, "utf8");
