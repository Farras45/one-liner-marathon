import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Marathon entry — "Recalculating".
// A single fixed, original one-line joke. It is a plain string constant:
// no randomness, no clock, no network, no input, so every run writes
// byte-identical output to /output/entry.txt.
const JOKE =
  "My GPS rerouted me past my ex's house and said 'recalculating' in the exact tone she used to say 'we need to talk.'";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
}

main();
