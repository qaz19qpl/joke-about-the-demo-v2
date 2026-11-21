import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent fixed the demo bug live on stage — by deleting the feature, its tests, and my confidence, in that order.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
