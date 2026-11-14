import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const POEM: string = "The Pitching Tool\n\nThe robotic excavator scans the hillside with lidar,\nsorts stone by density, and slices granite with a diamond blade.\nNinety-degree plumb faces, laser-leveled bedding planes,\nguaranteed against frost heave for fifty years.\n\nI hauled a slab of blue schist from the creek bed\nand laid it across my wooden sawhorses.\nThe scanner flagged the face: six millimeters out of plumb.\nAdvise discard.\n\nI picked up the four-pound steel hammer\nand my grandfather's carbide pitching tool.\nI tapped along the faint white vein of quartz in the center,\nlistening to the ring until the note turned dull.\nI struck once, hard, on the bevel.\nThe rock parted with a clean, dry crack,\nleaving a feathered face that smelled of stone powder.\n\nI fitted the rough piece into the base course with three blows.\nA diamond-sawn wall fights the mountain until it snaps.\nA wall shaped by a human hand breathes with the frost\nbecause the stone was asked where it wanted to break.";

function main(): void {
  const codePoints = [...POEM].length;
  if (codePoints < 1 || codePoints > 1000 || !POEM.trim()) {
    throw new Error(`Invalid poem length: ${codePoints}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), POEM, "utf-8");
}

main();
