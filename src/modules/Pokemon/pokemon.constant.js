/**
 * NA API do Pokemon: https://pokeapi.co/api/v2/ não foi encontrado como pegar
 * o id do pokemon utilizado para buscar as evoluções
 */

const POKEMON_ID_BY_NAME = {
  bulbasaur: {
    id: 1,
    name: "bulbasaur"
  },
  charmander: {
    id: 2,
    name: "charmander"
  },
  squirtle: {
    id: 3,
    name: "squirtle"
  },
  caterpie: {
    id: 4,
    name: "caterpie"
  },
  weedle: {
    id: 5,
    name: "weedle"
  },
  pidgey: {
    id: 6,
    name: "pidgey"
  },
  rattata: {
    id: 7,
    name: "rattata"
  },
  spearow: {
    id: 8,
    name: "spearow"
  },
  ekans: {
    id: 9,
    name: "ekans"
  },
  pichu: {
    id: 10,
    name: "pichu"
  },
  sandshrew: {
    id: 11,
    name: "sandshrew"
  },
  "nidoran-f": {
    id: 12,
    name: "nidoran-f"
  },
  "nidoran-m": {
    id: 13,
    name: "nidoran-m"
  },
  cleffa: {
    id: 14,
    name: "cleffa"
  },
  vulpix: {
    id: 15,
    name: "vulpix"
  },
  igglybuff: {
    id: 16,
    name: "igglybuff"
  },
  zubat: {
    id: 17,
    name: "zubat"
  },
  oddish: {
    id: 18,
    name: "oddish"
  },
  paras: {
    id: 19,
    name: "paras"
  },
  venonat: {
    id: 20,
    name: "venonat"
  },
  diglett: {
    id: 21,
    name: "diglett"
  },
  meowth: {
    id: 22,
    name: "meowth"
  },
  psyduck: {
    id: 23,
    name: "psyduck"
  },
  mankey: {
    id: 24,
    name: "mankey"
  },
  growlithe: {
    id: 25,
    name: "growlithe"
  },
  poliwag: {
    id: 26,
    name: "poliwag"
  },
  abra: {
    id: 27,
    name: "abra"
  },
  machop: {
    id: 28,
    name: "machop"
  },
  bellsprout: {
    id: 29,
    name: "bellsprout"
  },
  tentacool: {
    id: 30,
    name: "tentacool"
  },
  geodude: {
    id: 31,
    name: "geodude"
  },
  ponyta: {
    id: 32,
    name: "ponyta"
  },
  slowpoke: {
    id: 33,
    name: "slowpoke"
  },
  magnemite: {
    id: 34,
    name: "magnemite"
  },
  farfetchd: {
    id: 35,
    name: "farfetchd"
  },
  doduo: {
    id: 36,
    name: "doduo"
  },
  seel: {
    id: 37,
    name: "seel"
  },
  grimer: {
    id: 38,
    name: "grimer"
  },
  shellder: {
    id: 39,
    name: "shellder"
  },
  gastly: {
    id: 40,
    name: "gastly"
  },
  onix: {
    id: 41,
    name: "onix"
  },
  drowzee: {
    id: 42,
    name: "drowzee"
  },
  krabby: {
    id: 43,
    name: "krabby"
  },
  voltorb: {
    id: 44,
    name: "voltorb"
  },
  exeggcute: {
    id: 45,
    name: "exeggcute"
  },
  cubone: {
    id: 46,
    name: "cubone"
  },
  tyrogue: {
    id: 47,
    name: "tyrogue"
  },
  lickitung: {
    id: 48,
    name: "lickitung"
  },
  koffing: {
    id: 49,
    name: "koffing"
  },
  rhyhorn: {
    id: 50,
    name: "rhyhorn"
  },
  happiny: {
    id: 51,
    name: "happiny"
  },
  tangela: {
    id: 52,
    name: "tangela"
  },
  kangaskhan: {
    id: 53,
    name: "kangaskhan"
  },
  horsea: {
    id: 54,
    name: "horsea"
  },
  goldeen: {
    id: 55,
    name: "goldeen"
  },
  staryu: {
    id: 56,
    name: "staryu"
  },
  "mime-jr": {
    id: 57,
    name: "mime-jr"
  },
  scyther: {
    id: 58,
    name: "scyther"
  },
  smoochum: {
    id: 59,
    name: "smoochum"
  },
  elekid: {
    id: 60,
    name: "elekid"
  },
  magby: {
    id: 61,
    name: "magby"
  },
  pinsir: {
    id: 62,
    name: "pinsir"
  },
  tauros: {
    id: 63,
    name: "tauros"
  },
  magikarp: {
    id: 64,
    name: "magikarp"
  },
  lapras: {
    id: 65,
    name: "lapras"
  },
  ditto: {
    id: 66,
    name: "ditto"
  },
  eevee: {
    id: 67,
    name: "eevee"
  },
  porygon: {
    id: 68,
    name: "porygon"
  },
  omanyte: {
    id: 69,
    name: "omanyte"
  },
  kabuto: {
    id: 70,
    name: "kabuto"
  },
  aerodactyl: {
    id: 71,
    name: "aerodactyl"
  },
  munchlax: {
    id: 72,
    name: "munchlax"
  },
  articuno: {
    id: 73,
    name: "articuno"
  },
  zapdos: {
    id: 74,
    name: "zapdos"
  },
  moltres: {
    id: 75,
    name: "moltres"
  },
  dratini: {
    id: 76,
    name: "dratini"
  },
  mewtwo: {
    id: 77,
    name: "mewtwo"
  },
  mew: {
    id: 78,
    name: "mew"
  },
  chikorita: {
    id: 79,
    name: "chikorita"
  },
  cyndaquil: {
    id: 80,
    name: "cyndaquil"
  },
  totodile: {
    id: 81,
    name: "totodile"
  },
  sentret: {
    id: 82,
    name: "sentret"
  },
  hoothoot: {
    id: 83,
    name: "hoothoot"
  },
  ledyba: {
    id: 84,
    name: "ledyba"
  },
  spinarak: {
    id: 85,
    name: "spinarak"
  },
  chinchou: {
    id: 86,
    name: "chinchou"
  },
  togepi: {
    id: 87,
    name: "togepi"
  },
  natu: {
    id: 88,
    name: "natu"
  },
  mareep: {
    id: 89,
    name: "mareep"
  },
  azurill: {
    id: 90,
    name: "azurill"
  },
  bonsly: {
    id: 91,
    name: "bonsly"
  },
  hoppip: {
    id: 92,
    name: "hoppip"
  },
  aipom: {
    id: 93,
    name: "aipom"
  },
  sunkern: {
    id: 94,
    name: "sunkern"
  },
  yanma: {
    id: 95,
    name: "yanma"
  },
  wooper: {
    id: 96,
    name: "wooper"
  },
  murkrow: {
    id: 97,
    name: "murkrow"
  },
  misdreavus: {
    id: 98,
    name: "misdreavus"
  },
  unown: {
    id: 99,
    name: "unown"
  },
  wynaut: {
    id: 100,
    name: "wynaut"
  },
  girafarig: {
    id: 101,
    name: "girafarig"
  },
  pineco: {
    id: 102,
    name: "pineco"
  },
  dunsparce: {
    id: 103,
    name: "dunsparce"
  },
  gligar: {
    id: 104,
    name: "gligar"
  },
  snubbull: {
    id: 105,
    name: "snubbull"
  },
  qwilfish: {
    id: 106,
    name: "qwilfish"
  },
  shuckle: {
    id: 107,
    name: "shuckle"
  },
  heracross: {
    id: 108,
    name: "heracross"
  },
  sneasel: {
    id: 109,
    name: "sneasel"
  },
  teddiursa: {
    id: 110,
    name: "teddiursa"
  },
  slugma: {
    id: 111,
    name: "slugma"
  },
  swinub: {
    id: 112,
    name: "swinub"
  },
  corsola: {
    id: 113,
    name: "corsola"
  },
  remoraid: {
    id: 114,
    name: "remoraid"
  },
  delibird: {
    id: 115,
    name: "delibird"
  },
  mantyke: {
    id: 116,
    name: "mantyke"
  },
  skarmory: {
    id: 117,
    name: "skarmory"
  },
  houndour: {
    id: 118,
    name: "houndour"
  },
  phanpy: {
    id: 119,
    name: "phanpy"
  },
  stantler: {
    id: 120,
    name: "stantler"
  },
  smeargle: {
    id: 121,
    name: "smeargle"
  },
  miltank: {
    id: 122,
    name: "miltank"
  },
  raikou: {
    id: 123,
    name: "raikou"
  },
  entei: {
    id: 124,
    name: "entei"
  },
  suicune: {
    id: 125,
    name: "suicune"
  },
  larvitar: {
    id: 126,
    name: "larvitar"
  },
  lugia: {
    id: 127,
    name: "lugia"
  },
  "ho-oh": {
    id: 128,
    name: "ho-oh"
  },
  celebi: {
    id: 129,
    name: "celebi"
  },
  treecko: {
    id: 130,
    name: "treecko"
  },
  torchic: {
    id: 131,
    name: "torchic"
  },
  mudkip: {
    id: 132,
    name: "mudkip"
  },
  poochyena: {
    id: 133,
    name: "poochyena"
  },
  zigzagoon: {
    id: 134,
    name: "zigzagoon"
  },
  wurmple: {
    id: 135,
    name: "wurmple"
  },
  lotad: {
    id: 136,
    name: "lotad"
  },
  seedot: {
    id: 137,
    name: "seedot"
  },
  taillow: {
    id: 138,
    name: "taillow"
  },
  wingull: {
    id: 139,
    name: "wingull"
  },
  ralts: {
    id: 140,
    name: "ralts"
  },
  surskit: {
    id: 141,
    name: "surskit"
  },
  shroomish: {
    id: 142,
    name: "shroomish"
  },
  slakoth: {
    id: 143,
    name: "slakoth"
  },
  nincada: {
    id: 144,
    name: "nincada"
  },
  whismur: {
    id: 145,
    name: "whismur"
  },
  makuhita: {
    id: 146,
    name: "makuhita"
  },
  nosepass: {
    id: 147,
    name: "nosepass"
  },
  skitty: {
    id: 148,
    name: "skitty"
  },
  sableye: {
    id: 149,
    name: "sableye"
  },
  mawile: {
    id: 150,
    name: "mawile"
  },
  aron: {
    id: 151,
    name: "aron"
  },
  meditite: {
    id: 152,
    name: "meditite"
  },
  electrike: {
    id: 153,
    name: "electrike"
  },
  plusle: {
    id: 154,
    name: "plusle"
  },
  minun: {
    id: 155,
    name: "minun"
  },
  volbeat: {
    id: 156,
    name: "volbeat"
  },
  illumise: {
    id: 157,
    name: "illumise"
  },
  budew: {
    id: 158,
    name: "budew"
  },
  gulpin: {
    id: 159,
    name: "gulpin"
  },
  carvanha: {
    id: 160,
    name: "carvanha"
  },
  wailmer: {
    id: 161,
    name: "wailmer"
  },
  numel: {
    id: 162,
    name: "numel"
  },
  torkoal: {
    id: 163,
    name: "torkoal"
  },
  spoink: {
    id: 164,
    name: "spoink"
  },
  spinda: {
    id: 165,
    name: "spinda"
  },
  trapinch: {
    id: 166,
    name: "trapinch"
  },
  cacnea: {
    id: 167,
    name: "cacnea"
  },
  swablu: {
    id: 168,
    name: "swablu"
  },
  zangoose: {
    id: 169,
    name: "zangoose"
  },
  seviper: {
    id: 170,
    name: "seviper"
  },
  lunatone: {
    id: 171,
    name: "lunatone"
  },
  solrock: {
    id: 172,
    name: "solrock"
  },
  barboach: {
    id: 173,
    name: "barboach"
  },
  corphish: {
    id: 174,
    name: "corphish"
  },
  baltoy: {
    id: 175,
    name: "baltoy"
  },
  lileep: {
    id: 176,
    name: "lileep"
  },
  anorith: {
    id: 177,
    name: "anorith"
  },
  feebas: {
    id: 178,
    name: "feebas"
  },
  castform: {
    id: 179,
    name: "castform"
  },
  kecleon: {
    id: 180,
    name: "kecleon"
  },
  shuppet: {
    id: 181,
    name: "shuppet"
  },
  duskull: {
    id: 182,
    name: "duskull"
  },
  tropius: {
    id: 183,
    name: "tropius"
  },
  chingling: {
    id: 184,
    name: "chingling"
  },
  absol: {
    id: 185,
    name: "absol"
  },
  snorunt: {
    id: 186,
    name: "snorunt"
  },
  spheal: {
    id: 187,
    name: "spheal"
  },
  clamperl: {
    id: 188,
    name: "clamperl"
  },
  relicanth: {
    id: 189,
    name: "relicanth"
  },
  luvdisc: {
    id: 190,
    name: "luvdisc"
  },
  bagon: {
    id: 191,
    name: "bagon"
  },
  beldum: {
    id: 192,
    name: "beldum"
  },
  regirock: {
    id: 193,
    name: "regirock"
  },
  regice: {
    id: 194,
    name: "regice"
  },
  registeel: {
    id: 195,
    name: "registeel"
  },
  latias: {
    id: 196,
    name: "latias"
  },
  latios: {
    id: 197,
    name: "latios"
  },
  kyogre: {
    id: 198,
    name: "kyogre"
  },
  groudon: {
    id: 199,
    name: "groudon"
  },
  rayquaza: {
    id: 200,
    name: "rayquaza"
  },
  jirachi: {
    id: 201,
    name: "jirachi"
  },
  deoxys: {
    id: 202,
    name: "deoxys"
  },
  turtwig: {
    id: 203,
    name: "turtwig"
  },
  chimchar: {
    id: 204,
    name: "chimchar"
  },
  piplup: {
    id: 205,
    name: "piplup"
  },
  starly: {
    id: 206,
    name: "starly"
  },
  bidoof: {
    id: 207,
    name: "bidoof"
  },
  kricketot: {
    id: 208,
    name: "kricketot"
  },
  shinx: {
    id: 209,
    name: "shinx"
  },
  cranidos: {
    id: 211,
    name: "cranidos"
  },
  shieldon: {
    id: 212,
    name: "shieldon"
  },
  burmy: {
    id: 213,
    name: "burmy"
  },
  combee: {
    id: 214,
    name: "combee"
  },
  pachirisu: {
    id: 215,
    name: "pachirisu"
  },
  buizel: {
    id: 216,
    name: "buizel"
  },
  cherubi: {
    id: 217,
    name: "cherubi"
  },
  shellos: {
    id: 218,
    name: "shellos"
  },
  drifloon: {
    id: 219,
    name: "drifloon"
  },
  buneary: {
    id: 220,
    name: "buneary"
  },
  glameow: {
    id: 221,
    name: "glameow"
  },
  stunky: {
    id: 223,
    name: "stunky"
  },
  bronzor: {
    id: 224,
    name: "bronzor"
  },
  chatot: {
    id: 228,
    name: "chatot"
  },
  spiritomb: {
    id: 229,
    name: "spiritomb"
  },
  gible: {
    id: 230,
    name: "gible"
  },
  riolu: {
    id: 232,
    name: "riolu"
  },
  hippopotas: {
    id: 233,
    name: "hippopotas"
  },
  skorupi: {
    id: 234,
    name: "skorupi"
  },
  croagunk: {
    id: 235,
    name: "croagunk"
  },
  carnivine: {
    id: 236,
    name: "carnivine"
  },
  finneon: {
    id: 237,
    name: "finneon"
  },
  snover: {
    id: 239,
    name: "snover"
  },
  rotom: {
    id: 240,
    name: "rotom"
  },
  uxie: {
    id: 241,
    name: "uxie"
  },
  mesprit: {
    id: 242,
    name: "mesprit"
  },
  azelf: {
    id: 243,
    name: "azelf"
  },
  dialga: {
    id: 244,
    name: "dialga"
  },
  palkia: {
    id: 245,
    name: "palkia"
  },
  heatran: {
    id: 246,
    name: "heatran"
  },
  regigigas: {
    id: 247,
    name: "regigigas"
  },
  giratina: {
    id: 248,
    name: "giratina"
  },
  cresselia: {
    id: 249,
    name: "cresselia"
  },
  manaphy: {
    id: 250,
    name: "manaphy"
  },
  darkrai: {
    id: 252,
    name: "darkrai"
  },
  shaymin: {
    id: 253,
    name: "shaymin"
  },
  arceus: {
    id: 254,
    name: "arceus"
  },
  victini: {
    id: 255,
    name: "victini"
  },
  snivy: {
    id: 256,
    name: "snivy"
  },
  tepig: {
    id: 257,
    name: "tepig"
  },
  oshawott: {
    id: 258,
    name: "oshawott"
  },
  patrat: {
    id: 259,
    name: "patrat"
  },
  lillipup: {
    id: 260,
    name: "lillipup"
  },
  purrloin: {
    id: 261,
    name: "purrloin"
  },
  pansage: {
    id: 262,
    name: "pansage"
  },
  pansear: {
    id: 263,
    name: "pansear"
  },
  panpour: {
    id: 264,
    name: "panpour"
  },
  munna: {
    id: 265,
    name: "munna"
  },
  pidove: {
    id: 266,
    name: "pidove"
  },
  blitzle: {
    id: 267,
    name: "blitzle"
  },
  roggenrola: {
    id: 268,
    name: "roggenrola"
  },
  woobat: {
    id: 269,
    name: "woobat"
  },
  drilbur: {
    id: 270,
    name: "drilbur"
  },
  audino: {
    id: 271,
    name: "audino"
  },
  timburr: {
    id: 272,
    name: "timburr"
  },
  tympole: {
    id: 273,
    name: "tympole"
  },
  throh: {
    id: 274,
    name: "throh"
  },
  sawk: {
    id: 275,
    name: "sawk"
  },
  sewaddle: {
    id: 276,
    name: "sewaddle"
  },
  venipede: {
    id: 277,
    name: "venipede"
  },
  cottonee: {
    id: 278,
    name: "cottonee"
  },
  petilil: {
    id: 279,
    name: "petilil"
  },
  basculin: {
    id: 280,
    name: "basculin"
  },
  sandile: {
    id: 281,
    name: "sandile"
  },
  darumaka: {
    id: 282,
    name: "darumaka"
  },
  maractus: {
    id: 283,
    name: "maractus"
  },
  dwebble: {
    id: 284,
    name: "dwebble"
  },
  scraggy: {
    id: 285,
    name: "scraggy"
  },
  sigilyph: {
    id: 286,
    name: "sigilyph"
  },
  yamask: {
    id: 287,
    name: "yamask"
  },
  tirtouga: {
    id: 288,
    name: "tirtouga"
  },
  archen: {
    id: 289,
    name: "archen"
  },
  trubbish: {
    id: 290,
    name: "trubbish"
  },
  zorua: {
    id: 291,
    name: "zorua"
  },
  minccino: {
    id: 292,
    name: "minccino"
  },
  gothita: {
    id: 293,
    name: "gothita"
  },
  solosis: {
    id: 294,
    name: "solosis"
  },
  ducklett: {
    id: 295,
    name: "ducklett"
  },
  vanillite: {
    id: 296,
    name: "vanillite"
  },
  deerling: {
    id: 297,
    name: "deerling"
  },
  emolga: {
    id: 298,
    name: "emolga"
  },
  karrablast: {
    id: 299,
    name: "karrablast"
  },
  foongus: {
    id: 300,
    name: "foongus"
  },
  frillish: {
    id: 301,
    name: "frillish"
  },
  alomomola: {
    id: 302,
    name: "alomomola"
  },
  joltik: {
    id: 303,
    name: "joltik"
  },
  ferroseed: {
    id: 304,
    name: "ferroseed"
  },
  klink: {
    id: 305,
    name: "klink"
  },
  tynamo: {
    id: 306,
    name: "tynamo"
  },
  elgyem: {
    id: 307,
    name: "elgyem"
  },
  litwick: {
    id: 308,
    name: "litwick"
  },
  axew: {
    id: 309,
    name: "axew"
  },
  cubchoo: {
    id: 310,
    name: "cubchoo"
  },
  cryogonal: {
    id: 311,
    name: "cryogonal"
  },
  shelmet: {
    id: 312,
    name: "shelmet"
  },
  stunfisk: {
    id: 313,
    name: "stunfisk"
  },
  mienfoo: {
    id: 314,
    name: "mienfoo"
  },
  druddigon: {
    id: 315,
    name: "druddigon"
  },
  golett: {
    id: 316,
    name: "golett"
  },
  pawniard: {
    id: 317,
    name: "pawniard"
  },
  bouffalant: {
    id: 318,
    name: "bouffalant"
  },
  rufflet: {
    id: 319,
    name: "rufflet"
  },
  vullaby: {
    id: 320,
    name: "vullaby"
  },
  heatmor: {
    id: 321,
    name: "heatmor"
  },
  durant: {
    id: 322,
    name: "durant"
  },
  deino: {
    id: 323,
    name: "deino"
  },
  larvesta: {
    id: 324,
    name: "larvesta"
  },
  cobalion: {
    id: 325,
    name: "cobalion"
  },
  terrakion: {
    id: 326,
    name: "terrakion"
  },
  virizion: {
    id: 327,
    name: "virizion"
  },
  tornadus: {
    id: 328,
    name: "tornadus"
  },
  thundurus: {
    id: 329,
    name: "thundurus"
  },
  reshiram: {
    id: 330,
    name: "reshiram"
  },
  zekrom: {
    id: 331,
    name: "zekrom"
  },
  landorus: {
    id: 332,
    name: "landorus"
  },
  kyurem: {
    id: 333,
    name: "kyurem"
  },
  keldeo: {
    id: 334,
    name: "keldeo"
  },
  meloetta: {
    id: 335,
    name: "meloetta"
  },
  genesect: {
    id: 336,
    name: "genesect"
  },
  chespin: {
    id: 337,
    name: "chespin"
  },
  fennekin: {
    id: 338,
    name: "fennekin"
  },
  froakie: {
    id: 339,
    name: "froakie"
  },
  bunnelby: {
    id: 340,
    name: "bunnelby"
  },
  fletchling: {
    id: 341,
    name: "fletchling"
  },
  scatterbug: {
    id: 342,
    name: "scatterbug"
  },
  litleo: {
    id: 343,
    name: "litleo"
  },
  flabebe: {
    id: 344,
    name: "flabebe"
  },
  skiddo: {
    id: 345,
    name: "skiddo"
  },
  pancham: {
    id: 346,
    name: "pancham"
  },
  furfrou: {
    id: 347,
    name: "furfrou"
  },
  espurr: {
    id: 348,
    name: "espurr"
  },
  honedge: {
    id: 349,
    name: "honedge"
  },
  spritzee: {
    id: 350,
    name: "spritzee"
  },
  swirlix: {
    id: 351,
    name: "swirlix"
  },
  inkay: {
    id: 352,
    name: "inkay"
  },
  binacle: {
    id: 353,
    name: "binacle"
  },
  skrelp: {
    id: 354,
    name: "skrelp"
  },
  clauncher: {
    id: 355,
    name: "clauncher"
  },
  helioptile: {
    id: 356,
    name: "helioptile"
  },
  tyrunt: {
    id: 357,
    name: "tyrunt"
  },
  amaura: {
    id: 358,
    name: "amaura"
  },
  hawlucha: {
    id: 359,
    name: "hawlucha"
  },
  dedenne: {
    id: 360,
    name: "dedenne"
  },
  carbink: {
    id: 361,
    name: "carbink"
  },
  goomy: {
    id: 362,
    name: "goomy"
  },
  klefki: {
    id: 363,
    name: "klefki"
  },
  phantump: {
    id: 364,
    name: "phantump"
  },
  pumpkaboo: {
    id: 365,
    name: "pumpkaboo"
  },
  bergmite: {
    id: 366,
    name: "bergmite"
  },
  noibat: {
    id: 367,
    name: "noibat"
  },
  xerneas: {
    id: 368,
    name: "xerneas"
  },
  yveltal: {
    id: 369,
    name: "yveltal"
  },
  zygarde: {
    id: 370,
    name: "zygarde"
  },
  diancie: {
    id: 371,
    name: "diancie"
  },
  hoopa: {
    id: 372,
    name: "hoopa"
  },
  volcanion: {
    id: 373,
    name: "volcanion"
  },
  rowlet: {
    id: 374,
    name: "rowlet"
  },
  litten: {
    id: 375,
    name: "litten"
  },
  popplio: {
    id: 376,
    name: "popplio"
  },
  pikipek: {
    id: 377,
    name: "pikipek"
  },
  yungoos: {
    id: 378,
    name: "yungoos"
  },
  grubbin: {
    id: 379,
    name: "grubbin"
  },
  crabrawler: {
    id: 380,
    name: "crabrawler"
  },
  oricorio: {
    id: 381,
    name: "oricorio"
  },
  cutiefly: {
    id: 382,
    name: "cutiefly"
  },
  rockruff: {
    id: 383,
    name: "rockruff"
  },
  wishiwashi: {
    id: 384,
    name: "wishiwashi"
  },
  mareanie: {
    id: 385,
    name: "mareanie"
  },
  mudbray: {
    id: 386,
    name: "mudbray"
  },
  dewpider: {
    id: 387,
    name: "dewpider"
  },
  fomantis: {
    id: 388,
    name: "fomantis"
  },
  morelull: {
    id: 389,
    name: "morelull"
  },
  salandit: {
    id: 390,
    name: "salandit"
  },
  stufful: {
    id: 391,
    name: "stufful"
  },
  bounsweet: {
    id: 392,
    name: "bounsweet"
  },
  comfey: {
    id: 393,
    name: "comfey"
  },
  oranguru: {
    id: 394,
    name: "oranguru"
  },
  passimian: {
    id: 395,
    name: "passimian"
  },
  wimpod: {
    id: 396,
    name: "wimpod"
  },
  sandygast: {
    id: 397,
    name: "sandygast"
  },
  pyukumuku: {
    id: 398,
    name: "pyukumuku"
  },
  "type-null": {
    id: 399,
    name: "type-null"
  },
  minior: {
    id: 400,
    name: "minior"
  },
  komala: {
    id: 401,
    name: "komala"
  },
  turtonator: {
    id: 402,
    name: "turtonator"
  },
  togedemaru: {
    id: 403,
    name: "togedemaru"
  },
  mimikyu: {
    id: 404,
    name: "mimikyu"
  },
  bruxish: {
    id: 405,
    name: "bruxish"
  },
  drampa: {
    id: 406,
    name: "drampa"
  },
  dhelmise: {
    id: 407,
    name: "dhelmise"
  },
  "jangmo-o": {
    id: 408,
    name: "jangmo-o"
  },
  "tapu-koko": {
    id: 409,
    name: "tapu-koko"
  },
  "tapu-lele": {
    id: 410,
    name: "tapu-lele"
  },
  "tapu-bulu": {
    id: 411,
    name: "tapu-bulu"
  },
  "tapu-fini": {
    id: 412,
    name: "tapu-fini"
  },
  cosmog: {
    id: 413,
    name: "cosmog"
  },
  nihilego: {
    id: 414,
    name: "nihilego"
  },
  buzzwole: {
    id: 415,
    name: "buzzwole"
  },
  pheromosa: {
    id: 416,
    name: "pheromosa"
  },
  xurkitree: {
    id: 417,
    name: "xurkitree"
  },
  celesteela: {
    id: 418,
    name: "celesteela"
  },
  kartana: {
    id: 419,
    name: "kartana"
  },
  guzzlord: {
    id: 420,
    name: "guzzlord"
  },
  necrozma: {
    id: 421,
    name: "necrozma"
  },
  magearna: {
    id: 422,
    name: "magearna"
  },
  marshadow: {
    id: 423,
    name: "marshadow"
  },
  poipole: {
    id: 424,
    name: "poipole"
  },
  stakataka: {
    id: 425,
    name: "stakataka"
  },
  blacephalon: {
    id: 426,
    name: "blacephalon"
  },
  zeraora: {
    id: 427,
    name: "zeraora"
  }
};

export { POKEMON_ID_BY_NAME };
