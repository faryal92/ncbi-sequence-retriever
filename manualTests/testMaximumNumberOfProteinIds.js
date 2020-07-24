/**
 * test maximum number of ids can be retreived from one request
 */


var Retriever = require ("../index");
var retriever = new Retriever();

var proteinIds = [
  "NP_001072811.1",
  "NP_001126892.1",
  "KAB1256627.1",
  "NP_990844.1",
  "NP_114190.1",
  "NP_001069663.1",
  "NP_001075581.1",
  "NP_001286511.1",
  "NP_476838.1", // 10
  "AHN56307.1",
  "AAF57925.1",
  "NP_001268276.1",
  "NP_001157424.1",
  "DAA22537.1",
  "NP_001271489.1",
  "NP_001123698.1",
  "AAA53198.1",
  "XP_003821190.1",
  "XP_002923342.1",
  "ALC44016.1", //20
  "XP_015473122.1",
  "XP_004283275.1",
  "XP_006188612.1", 
  "XP_020353047.1",
  "XP_015093162.1",
  "XP_021398864.1",
  "XP_006729490.1",
  "XP_004047309.1",
  "XP_010352153.1",
  "XP_003268327.1",
  "XP_022440535.1",
  "XP_029078260.1",
  "XP_015001161.1",
  "THD29071.1",
  "XP_004011895.1",
  "XP_027470292.1",
  "XP_026920064.1",
  "XP_005479579.1",
  "XP_026351562.1",
  "XP_026239894.1",
  "XP_025917524.1",
  "XP_025910347.1",
  "XP_025869200.1",
  "XP_025778497.1",
  "XP_025289402.1",
  "XP_025250790.1",
  "XP_025120792.1",
  "XP_011766592.1",
  "XP_017393549.1",
  "XP_015341435.1"
];
retriever.retrieveProteinSequences(proteinIds, "JSON").then((sequences)=>{
  console.log(sequences);
  console.log(Object.keys(sequences).length);
});