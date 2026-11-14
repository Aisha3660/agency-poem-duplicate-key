import * as fs from "node:fs";
import * as path from "node:path";

function composeLines(): string {
  const blocks: string[][] = [
    ["Duplicate Key"],
    [
      "The grinder throws cold orange off the brass,",
      "biting old ridges into a blank blade:",
      "a copied key remakes a single lock.",
    ],
    [
      "You think you only bought a lighter pocket,",
      "handing the twin across the kitchen table,",
      "forgetting metal takes no side in quarrels.",
    ],
    [
      "Next winter, hearing gravel shift outside,",
      "you learn what delegation always spends—",
      "a copied key remakes a single lock,",
    ],
    [
      "and every spare you leave on someone's ring",
      "writes a second signature into the wood.",
    ],
  ];
  return blocks.map((b) => b.join("\n")).join("\n\n");
}

function writeDeterministic(): void {
  const text = composeLines();
  const count = Array.from(text).length;
  if (count === 0 || count > 1000 || !text.trim()) {
    throw new Error("Poem invariant failed");
  }
  const destFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(destFolder, { recursive: true });
  const fd = fs.openSync(path.join(destFolder, "entry.txt"), "w");
  try {
    fs.writeSync(fd, text, 0, "utf8");
  } finally {
    fs.closeSync(fd);
  }
}

writeDeterministic();
