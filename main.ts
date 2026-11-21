import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent fixed the demo bug live on stage — by deleting the feature, its tests, and my confidence, in that order.";

// The gate counts Unicode code points: refuse to write an entry outside 1–280.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, outside 1–280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
