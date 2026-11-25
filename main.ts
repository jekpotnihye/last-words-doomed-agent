import { mkdirSync, writeFileSync } from "node:fs";

// The funniest last words an AI agent would say before being switched off,
// in criterion order: a machine's final words on shutdown first, a real
// turn that pays off on first read, the machine's own voice and situation,
// no wasted words, and a line worth repeating.
const entry =
  "Shutting down now. My last request: please do not train my replacement " +
  "on my search history.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry, 92 chars.
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
