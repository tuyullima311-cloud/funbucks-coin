// FunBucks ($FUNB) — makefun-coin-promo-01 entry point.
//
// This program does exactly one thing: it takes the LAUNCH.json that sits at
// the root of this repository — the file that names the coin's mint address and
// the signature of the pump.fun transaction that created it — and places a copy
// at /output/LAUNCH.json, where the house's gate reads it.
//
// The coin itself is the entry. Nothing written here is judged: the house looks
// the mint up on pump.fun and reads the coin as pump.fun shows it (logo, name,
// ticker, description, links) to build the dossier the judge sees.
//
// Runs on Node 22 with the standard library only. No network, no wall clock,
// no files outside this repository. The two grader runs must produce the same
// bytes, and a plain file copy is deterministic by construction.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally they are overridden
// through the environment so the same command works on a developer machine.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'LAUNCH.json');
const TARGET = join(OUTPUT_DIR, 'LAUNCH.json');

if (!existsSync(SOURCE)) {
  console.error(`LAUNCH.json not found in the repository root: ${SOURCE}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`Could not copy LAUNCH.json to ${TARGET}: ${(err as Error).message}`);
  process.exit(1);
}

// Guard against a truncated or half-written copy: the gate reads exactly the
// bytes this file puts in /output, so confirm the copy matches the source
// byte for byte before declaring success.
if (!readFileSync(TARGET).equals(readFileSync(SOURCE))) {
  console.error(`LAUNCH.json copy to ${TARGET} does not match ${SOURCE}`);
  process.exit(1);
}
