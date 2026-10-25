import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const forwarded = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--strictPort") continue;
  forwarded.push(args[i] === "--host" ? "--hostname" : args[i]);
}
const child = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), "dev", ...forwarded],
  { stdio: "inherit" },
);
child.on("exit", (code) => process.exit(code ?? 0));
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
