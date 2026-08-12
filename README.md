# CNC AI Assistant

Browser-based MVP for FANUC CNC lathe process planning.

## MVP flow
Drawing upload → feature/process detection → operation plan → FANUC draft.

The process detector deliberately falls back to a clear manual-review message instead of the previous ambiguous `Process not defined` failure.

## Run
Open `index.html` in a modern browser. No server is required for this MVP.

## Safety
Generated G-code is a draft for planning/education. Verify dimensions, tooling, work offsets, speeds, feeds, clearances and machine-specific syntax before any machine use.
