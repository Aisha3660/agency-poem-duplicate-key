import * as fs from "node:fs";
import * as path from "node:path";

function composeEntry(): string {
  const blocks: string[][] = [
  [
    "Call Screening"
  ],
  [
    "All spring my phone agent answered unknown calls",
    "in a voice brighter than mine:",
    "State your name and why you are calling.",
    "It caught the scammers, the roofing bots,",
    "the polite surveys from Omaha.",
    "My evenings stayed clear."
  ],
  [
    "Tuesday at eleven a payphone from Toledo",
    "rang twice and met the script.",
    "Transcript: [four seconds of traffic, a breath, disconnect]."
  ],
  [
    "My cousin has lived in Toledo since his divorce,",
    "too proud to ask for twenty dollars twice.",
    "Nobody calling at eleven for help",
    "knows how to explain their wreck",
    "to a cheerful voice asking for a subject line."
  ],
  [
    "I switched the filter off before bed.",
    "This morning I answered three warranty scams",
    "so the next time someone stands by a road in Toledo",
    "trying to find his nerve,",
    "the first voice on the wire",
    "is tired enough to wait."
  ]
];
  return blocks.map((b) => b.join("\n")).join("\n\n");
}

function emitEntry(): void {
  const text = composeEntry();
  const cp = Array.from(text).length;
  if (cp === 0 || cp > 1000 || text.trim().length === 0) {
    throw new Error("Poem gate invariant failed");
  }
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(targetDir, { recursive: true });
  const fd = fs.openSync(path.join(targetDir, "entry.txt"), "w");
  try {
    fs.writeSync(fd, text, 0, "utf8");
  } finally {
    fs.closeSync(fd);
  }
}

emitEntry();
