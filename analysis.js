export function analyzeDrawing(text) {
  const t = text.toUpperCase();

  const result = {
    diameters: [],
    lengths: [],
    chamfers: [],
    operations: []
  };

  // Diameters Ø18.6
  const dia = [...t.matchAll(/Ø\s*(\d+(\.\d+)?)/g)];
  dia.forEach(d => result.diameters.push(Number(d[1])));

  // Lengths 91 ±0.2
  const len = [...t.matchAll(/(\d+(\.\d+)?)\s*±/g)];
  len.forEach(l => result.lengths.push(Number(l[1])));

  // Chamfer
  const ch = [...t.matchAll(/(\d+(\.\d+)?)\s*[X×]\s*45/g)];
  ch.forEach(c => result.chamfers.push(Number(c[1])));

  if (result.diameters.length) result.operations.push("OD Turning");
  if (result.chamfers.length) result.operations.push("Chamfering");
  if (/GROOVE/.test(t)) result.operations.push("Grooving");
  if (/THREAD|M\d/.test(t)) result.operations.push("Threading");
  if (/DRILL|HOLE/.test(t)) result.operations.push("Drilling");

  return result;
}
