// WJF Trophy GT3 Endurance Championship, Season 18.
// Transcribed from the club's Round 1-4 result images and the standings image (after Round 4).
// Later this file will be generated automatically from uploaded CSV exports.

window.SERIES = window.SERIES || {};
window.SERIES_ORDER = window.SERIES_ORDER || [];
window.SERIES_ORDER.push("gt3-endurance");
window.SERIES["gt3-endurance"] = {
  id: "gt3-endurance",
  season: 18,
  navOrder: 3, // switcher position, by race day (Friday)
  navLabel: "WJF Trophy",
  title: "WJF Trophy GT3 Endurance Championship Season 18",
  eyebrow: "WJF Trophy · GT3 Endurance Championship · Season 18 · Friday series",
  seriesLine: "Trailblazers S18 WJF Trophy",
  pages: { results: "wjf-trophy.html", championship: "championship.html", calendar: "wjf-calendar.html", records: "records-drivers.html?series=gt3-endurance", teamrecords: "records-teams.html?series=gt3-endurance", champions: "records-titles.html?series=gt3-endurance" },
  hasLobbies: true,
  provisional: { rounds: [7], text: "Results pending Round 7 stewards\u2019 reviews" },
  // Provisional until the club confirms stewards' reviews are done (remove when told).
  resultNotes: ["DNS = did not start", "DC and RGQ shown as listed in the results", "Lapped drivers (Round 5): laps down to the leader, with the gap to the car ahead as in the club\u2019s results"],
  source: "Results transcribed from the club's Round 1–7 result sheets.",
  standingsRules: "Points: 1st 45, 2nd 43, 3rd 41, 4th 40, then 1 point less per position. TOTAL = all rounds before the drop. DROP = points removed by the one drop round per season (0 if a round was missed). DNS scores 0 and counts as the drop. RGQ scores 0 and is not a drop round. Ties split on countback: most wins, then 2nds, 3rds and so on. STARTS include DC and RGQ; PODIUMS include wins.",
  standingsSource: "Standings after Round 7 worked out from the round results with the club\u2019s rules (Rounds 1–5 as published by the club).",

  teams: {
    RR: { name: "Roadsick Racing", colour: "#FACC15" },
    MC: { name: "MC Motorsport", colour: "#4C8DFF" },
    MT: { name: "Mad Turtle Racing", colour: "#34C46E" },
    R3: { name: "Triple R Motorsport", colour: "#F0524A" },
    GB: { name: "Gerbil Racing Team", colour: "#F08A2C" },
    PV: { name: "Privateer", colour: "#8C939D" }
  },

  cars: {
    RCF: "RC F GT3 '17",
    F296: "296 GT3 '23",
    V12: "V12 Vantage GT3 '12",
    M6: "M6 GT3 Sprint Model '16",
    FGT: "Ford GT Race Car '18", "650S": "650S GT3 '15",
    NA: ""
  },

  // Result rows: [driver, team, lobby, car, raceTime, toLeader, toCarAhead, bestLap, status]
  // status: c = classified, l = lapped (classified), o = not classified (DC / RGQ / DNS)
  rounds: [
    {
      no: 1, track: "Mount Panorama Motor Racing Circuit", short: "Mount Panorama",
      entries: 26, starters: 24, leadLap: 19, lobbies: "Blue & Red lobbies",
      rows: [
        ["S7R_Ando787","RR","Blue","RCF","1:22:07.069","Winner","","2:02.954","c"],
        ["Arty_Bicycle","MC","Blue","F296","1:22:11.163","+4.094","+4.094","2:03.092","c"],
        ["ExpatChamp","MT","Red","V12","1:22:14.089","+7.020","+2.926","2:03.447","c"],
        ["Fatalreaper666","MT","Blue","F296","1:22:29.063","+21.994","+14.974","2:03.928","c"],
        ["WallFinder","MT","Blue","RCF","1:22:30.013","+22.944","+0.950","2:03.824","c"],
        ["Trickybrewer","R3","Blue","RCF","1:22:43.674","+36.605","+13.661","2:03.751","c"],
        ["RiotheSpeedster","R3","Red","RCF","1:22:45.720","+38.651","+2.046","2:04.400","c"],
        ["RazzMazz","PV","Red","RCF","1:22:47.233","+40.164","+1.513","2:04.088","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:22:48.658","+41.589","+1.425","2:04.850","c"],
        ["Tim_turtle_79","MT","Red","RCF","1:22:55.747","+48.678","+7.089","2:04.021","c"],
        ["Tankneo-1","R3","Red","RCF","1:23:05.685","+58.616","+9.938","2:03.585","c"],
        ["VETERANPP","GB","Blue","RCF","1:23:07.964","+1:00.895","+2.279","2:04.707","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1:23:08.862","+1:01.793","+0.898","2:03.829","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:23:09.739","+1:02.670","+0.877","2:05.064","c"],
        ["b-man228","R3","Red","F296","1:23:19.847","+1:12.778","+10.108","2:04.668","c"],
        ["Pjmack75","RR","Blue","F296","1:23:37.584","+1:30.515","+17.737","2:04.996","c"],
        ["Meggs1","GB","Red","RCF","1:23:51.109","+1:44.040","+13.525","2:05.110","c"],
        ["Legend-Macca47","GB","Red","V12","1:23:57.693","+1:50.624","+6.584","2:05.178","c"],
        ["Soulslayer_71","R3","Red","RCF","1:24:21.732","+2:14.663","+24.039","2:05.677","c"],
        ["Barberphil","GB","Red","RCF","1 Lap","+1 Lap","","2:06.792","l"],
        ["Hamitothebone","MT","Red","F296","1 Lap","+1 Lap","","2:05.349","l"],
        ["MalevolentOne666","MT","Red","F296","13 Laps","+13 Laps","","2:06.292","l"],
        ["jmillsy85","R3","Red","M6","DC","DC","","2:04.890","o"],
        ["allaussie","MC","Blue","RCF","RGQ","RGQ","","2:06.175","o"],
        ["N-spud-P666","MC","Blue","F296","DNS","DNS","","","o"],
        ["NWR_NICO71","MC","Blue","F296","DNS","DNS","","","o"]
      ]
    },
    {
      no: 2, track: "Kyoto Driving Park – Yamagiwa", short: "Kyoto",
      entries: 23, starters: 20, leadLap: 15, lobbies: "Blue & Red lobbies",
      rows: [
        ["GLR_Scotty","MT","Blue","RCF","1:21:07.901","Winner","","1:34.141","c"],
        ["Tankneo-1","R3","Blue","RCF","1:21:23.780","+15.879","+15.879","1:34.278","c"],
        ["Arty_Bicycle","MC","Blue","F296","1:21:25.520","+17.619","+1.740","1:34.003","c"],
        ["Trickybrewer","R3","Blue","RCF","1:21:27.914","+20.013","+2.394","1:34.073","c"],
        ["MAD_MITCH_76","MT","Red","F296","1:21:28.119","+20.218","+0.205","1:34.712","c"],
        ["N-spud-P666","MC","Red","F296","1:21:30.506","+22.605","+2.387","1:33.695","c"],
        ["Pjmack75","RR","Red","F296","1:21:39.074","+31.173","+8.568","1:34.882","c"],
        ["RazzMazz","PV","Blue","RCF","1:21:48.437","+40.536","+9.363","1:34.011","c"],
        ["VETERANPP","GB","Red","RCF","1:21:53.492","+45.591","+5.055","1:34.868","c"],
        ["WallFinder","MT","Blue","RCF","1:21:55.413","+47.512","+1.921","1:34.409","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:21:56.322","+48.421","+0.909","1:34.722","c"],
        ["NWR_NICO71","MC","Red","F296","1:21:58.596","+50.695","+2.274","1:33.808","c"],
        ["Hamitothebone","MT","Red","F296","1:22:01.601","+53.700","+3.005","1:35.432","c"],
        ["ExpatChamp","MT","Blue","V12","1:22:01.771","+53.870","+0.170","1:34.498","c"],
        ["RiotheSpeedster","R3","Blue","RCF","1:22:39.963","+1:32.062","+38.192","1:35.149","c"],
        ["Fatalreaper666","MT","Blue","F296","1 Lap","+1 Lap","","1:34.876","l"],
        ["Barberphil","GB","Red","RCF","3 Laps","+3 Laps","","1:35.929","l"],
        ["b-man228","R3","Red","F296","DC","DC","","1:34.712","o"],
        ["Tim_turtle_79","MT","Blue","RCF","RGQ","RGQ","","1:34.823","o"],
        ["Soulslayer_71","R3","Red","RCF","RGQ","RGQ","","","o"],
        ["S7R_Ando787","RR","Blue","RCF","DNS","DNS","","","o"],
        ["GGCAS_39","R3","Red","RCF","DNS","DNS","","","o"],
        ["O-PUNCHY-_-P","GB","Red","NA","DNS","DNS","","","o"]
      ]
    },
    {
      no: 3, track: "Sardegna – Road Track – A", short: "Sardegna",
      entries: 16, starters: 15, leadLap: 14, lobbies: "Blue lobby",
      rows: [
        ["NWR_NICO71","MC","Blue","F296","1:20:05.237","Winner","","1:41.815","c"],
        ["ExpatChamp","MT","Blue","V12","1:20:07.622","+2.385","+2.385","1:42.078","c"],
        ["Tankneo-1","R3","Blue","RCF","1:20:24.921","+19.684","+17.299","1:42.309","c"],
        ["Trickybrewer","R3","Blue","RCF","1:20:26.461","+21.224","+1.540","1:42.161","c"],
        ["jmillsy85","R3","Blue","M6","1:20:28.762","+23.525","+2.301","1:42.125","c"],
        ["RazzMazz","PV","Blue","RCF","1:20:35.907","+30.670","+7.145","1:42.162","c"],
        ["Pjmack75","RR","Blue","F296","1:20:37.164","+31.927","+1.257","1:42.112","c"],
        ["WallFinder","MT","Blue","RCF","1:20:38.797","+33.560","+1.633","1:41.908","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:20:42.728","+37.491","+3.931","1:42.365","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1:20:45.124","+39.887","+2.396","1:42.528","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:20:55.485","+50.248","+10.361","1:43.143","c"],
        ["b-man228","R3","Blue","F296","1:21:15.171","+1:09.934","+19.686","1:42.567","c"],
        ["Fatalreaper666","MT","Blue","F296","1:21:20.540","+1:15.303","+5.369","1:42.058","c"],
        ["Hamitothebone","MT","Blue","F296","1:21:42.245","+1:37.008","+21.705","1:42.995","c"],
        ["ricreene","R3","Blue","FGT","1 Lap","+1 Lap","","1:42.578","l"],
        ["MalevolentOne666","MT","Blue","F296","DNS","DNS","","","o"]
      ]
    },
    {
      no: 4, track: "Blue Moon Bay Speedway – Infield A", short: "Blue Moon Bay",
      entries: 17, starters: 16, leadLap: 9, lobbies: "Blue lobby",
      rows: [
        ["NWR_NICO71","MC","Blue","F296","1:23:21.628","Winner","","1:07.257","c"],
        ["Fatalreaper666","MT","Blue","F296","1:23:45.498","+23.870","+23.870","1:06.973","c"],
        ["RazzMazz","PV","Blue","RCF","1:23:46.739","+25.111","+1.241","1:07.595","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:23:50.794","+29.166","+4.055","1:07.452","c"],
        ["WallFinder","MT","Blue","RCF","1:23:52.767","+31.139","+1.973","1:07.434","c"],
        ["Pjmack75","RR","Blue","F296","1:23:55.785","+34.157","+3.018","1:07.449","c"],
        ["ExpatChamp","MT","Blue","V12","1:24:04.459","+42.831","+8.674","1:07.787","c"],
        ["Tankneo-1","R3","Blue","RCF","1:24:04.518","+42.890","+0.059","1:07.467","c"],
        ["VETERANPP","GB","Blue","RCF","1:24:25.200","+1:03.572","+20.682","1:07.917","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1 Lap","+1 Lap","","1:07.518","l"],
        ["BigBruceTheShark","MT","Blue","F296","1 Lap","+1 Lap","","1:07.899","l"],
        ["Meggs1","GB","Blue","RCF","1 Lap","+1 Lap","","1:08.291","l"],
        ["Hamitothebone","MT","Blue","F296","1 Lap","+1 Lap","","1:08.058","l"],
        ["Trickybrewer","R3","Blue","RCF","2 Laps","+2 Laps","","1:07.400","l"],
        ["Barberphil","GB","Blue","RCF","6 Laps","+6 Laps","","1:09.109","l"],
        ["b-man228","R3","Blue","F296","RGQ","RGQ","","1:07.350","o"],
        ["jmillsy85","R3","Blue","M6","DNS","DNS","","","o"]
      ]
    },
    {
      no: 5, track: "SUGO International Racing Course", short: "Sugo",
      entries: 20, starters: 18, leadLap: 12, lobbies: "Blue & Red lobbies",
      rows: [
        ["S7R_Ando787","RR","Red","RCF","1:21:05.021","Winner","","1:18.358","c"],
        ["NWR_NICO71","MC","Blue","F296","1:21:21.681","+16.660","+16.660","1:18.804","c"],
        ["Tankneo-1","R3","Blue","RCF","1:21:27.919","+22.898","+6.238","1:18.932","c"],
        ["brettubrettu26","MT","Red","M6","1:21:32.065","+27.044","+4.146","1:18.697","c"],
        ["Arty_Bicycle","MC","Red","F296","1:21:35.790","+30.769","+3.725","1:18.881","c"],
        ["WallFinder","MT","Blue","RCF","1:21:35.914","+30.893","+0.124","1:18.751","c"],
        ["Pjmack75","RR","Blue","F296","1:21:40.871","+35.850","+4.957","1:19.114","c"],
        ["RazzMazz","PV","Blue","RCF","1:21:59.446","+54.425","+18.575","1:19.101","c"],
        ["b-man228","R3","Red","F296","1:22:01.150","+56.129","+1.704","1:19.524","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1:22:14.266","+1:09.245","+13.116","1:19.111","c"],
        ["VETERANPP","GB","Red","RCF","1:22:26.683","+1:21.662","+12.417","1:20.062","c"],
        ["Trickybrewer","R3","Blue","RCF","1:22:27.810","+1:22.789","+1.127","1:18.923","c"],
        ["Meggs1","GB","Red","RCF","1 Lap","+1 Lap","+12.564","1:19.656","l"],
        ["ExpatChamp","MT","Blue","V12","1 Lap","+1 Lap","+0.966","1:19.780","l"],
        ["Barberphil","GB","Red","RCF","1 Lap","+1 Lap","+22.388","1:20.151","l"],
        ["Fatalreaper666","MT","Blue","F296","1 Lap","+1 Lap","+46.000","1:19.226","l"],
        ["Hamitothebone","MT","Red","F296","3 Laps","+3 Laps","+1:32.634","1:21.609","l"],
        ["GGCAS_39","R3","Red","RCF","3 Laps","+3 Laps","+33.180","1:20.970","l"],
        ["N-spud-P666","MC","Red","F296","DNS","DNS","","","o"],
        ["jmillsy85","R3","Red","M6","DNS","DNS","","","o"]
      ]
    },
    {
      no: 6, track: "Michelin Raceway Road Atlanta", short: "Road Atlanta",
      entries: 17, starters: 16, leadLap: 10, lobbies: "Blue lobby",
      rows: [
        ["Arty_Bicycle","MC","Blue","F296","1:21:11.811","Winner","","1:18.589","c"],
        ["ExpatChamp","MT","Blue","V12","1:21:20.096","+8.285","+8.285","1:18.618","c"],
        ["NWR_NICO71","MC","Blue","F296","1:21:35.291","+23.480","+15.195","1:18.759","c"],
        ["GoHelpTripleD","PV","Blue","650S","1:21:44.466","+32.655","+9.175","1:19.053","c"],
        ["Trickybrewer","R3","Blue","RCF","1:21:48.007","+36.196","+3.541","1:18.822","c"],
        ["brettubrettu26","MT","Blue","M6","1:21:48.409","+36.598","+0.402","1:19.148","c"],
        ["Fatalreaper666","MT","Blue","F296","1:21:52.291","+40.480","+3.882","1:18.504","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:22:07.962","+56.151","+15.671","1:19.543","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:22:16.586","+1:04.775","+8.624","1:19.211","c"],
        ["N-spud-P666","MC","Blue","F296","1:22:23.301","+1:11.490","+6.715","1:18.394","c"],
        ["Meggs1","GB","Blue","RCF","1 Lap","+1 Lap","+7.784","1:19.624","l"],
        ["RazzMazz","PV","Blue","RCF","1 Lap","+1 Lap","+10.427","1:18.766","l"],
        ["VETERANPP","GB","Blue","RCF","1 Lap","+1 Lap","+1.262","1:19.459","l"],
        ["Barberphil","GB","Blue","RCF","1 Lap","+1 Lap","+0.350","1:19.794","l"],
        ["Pjmack75","RR","Blue","F296","RGQ","RGQ","","1:20.020","o"],
        ["b-man228","R3","Blue","F296","RGQ","RGQ","","1:20.246","o"],
        ["Tankneo-1","R3","Blue","NA","DNS","DNS","","","o"]
      ]
    },
    {
      no: 7, track: "Dragon Trail – Gardens", short: "Dragon Trail",
      entries: 16, starters: 15, leadLap: 14, lobbies: "Blue lobby",
      rows: [
        ["NWR_NICO71","MC","Blue","F296","1:21:28.195","Winner","","1:31.222","c"],
        ["ExpatChamp","MT","Blue","V12","1:21:35.561","+7.366","+7.366","1:31.594","c"],
        ["GLR_Scotty","MT","Blue","RCF","1:21:38.142","+9.947","+2.581","1:31.886","c"],
        ["Trickybrewer","R3","Blue","RCF","1:21:44.853","+16.658","+6.711","1:31.548","c"],
        ["VETERANPP","GB","Blue","RCF","1:21:44.951","+16.756","+0.098","1:31.789","c"],
        ["b-man228","R3","Blue","F296","1:21:52.543","+24.348","+7.592","1:31.682","c"],
        ["Pjmack75","RR","Blue","F296","1:21:57.683","+29.488","+5.140","1:31.929","c"],
        ["Arty_Bicycle","MC","Blue","F296","1:22:00.296","+32.101","+2.613","1:31.203","c"],
        ["Meggs1","GB","Blue","RCF","1:22:04.200","+36.005","+3.904","1:31.886","c"],
        ["GoHelpTripleD","PV","Blue","650S","1:22:06.500","+38.305","+2.300","1:31.829","c"],
        ["MAD_MITCH_76","MT","Blue","F296","1:22:09.436","+41.241","+2.936","1:31.749","c"],
        ["Fatalreaper666","MT","Blue","F296","1:22:09.520","+41.325","+0.084","1:31.831","c"],
        ["BigBruceTheShark","MT","Blue","F296","1:22:22.468","+54.273","+12.948","1:32.156","c"],
        ["Hamitothebone","MT","Blue","F296","1:22:25.425","+57.230","+2.957","1:32.480","c"],
        ["Barberphil","GB","Blue","RCF","1 Lap","+1 Lap","+1:00.170","1:32.611","l"],
        ["N-spud-P666","MC","Blue","NA","DNS","DNS","","","o"]
      ]
    }
  ],
  // Standings after Round 7, worked out from the round results with the club's rules (no club standings image).
  // [pos, driver, team, car, [R1..R7], total, drop, gap, points, starts, wins, podiums]
  // Round cell codes: "43p2" = 43 pts, 2nd in that round; "33d" = dropped; "21*" = DC; "DNS"; "RGQ"; "–" = did not enter
  standingsAfter: 7,
  standings: [
    ["1","NWR_NICO71","MC","F296",["DNS","32","45p1","45p1","43p2","41p3","45p1"],251,0,"Leader",251,6,3,5],
    ["2","ExpatChamp","MT","V12",["41p3","30d","43p2","37","30","43p2","43p2"],267,-30,"-14",237,7,0,4],
    ["3","Trickybrewer","R3","RCF",["38","40","40","30d","32","39","40"],259,-30,"-22",229,7,0,0],
    ["4","GLR_Scotty","MT","RCF",["30","45p1","35","40","–","35","41p3"],226,0,"-25",226,6,1,2],
    ["5","RazzMazz","PV","RCF",["36","36","38","41p3","36","32","–"],219,0,"-32",219,6,0,1],
    ["6","Fatalreaper666","MT","F296",["40","28d","31","43p2","28","37","32"],239,-28,"-40",211,7,0,1],
    ["7","VETERANPP","GB","RCF",["32","35","–","35","33","31","39"],205,0,"-46",205,6,0,0],
    ["8","MAD_MITCH_76","MT","F296",["31","39","34","34","34","–","33"],205,0,"-46",205,6,0,0],
    ["9","Arty_Bicycle","MC","F296",["43p2","41p3","–","–","39","45p1","36"],204,0,"-47",204,5,1,3],
    ["10","BigBruceTheShark","MT","F296",["35","33","33","33","–","36","31"],201,0,"-50",201,6,0,0],
    ["11","Tankneo-1","R3","RCF",["33","43p2","41p3","36","41p3","DNS","–"],194,0,"-57",194,5,0,3],
    ["12","Pjmack75","RR","F296",["28d","37","37","38","37","RGQ","37"],214,-28,"-65",186,7,0,0],
    ["13","Hamitothebone","MT","F296",["23","31","30","31","27","–","30"],172,0,"-79",172,6,0,0],
    ["14","Barberphil","GB","RCF",["24","27","–","29","29","30","29"],168,0,"-83",168,6,0,0],
    ["15","Meggs1","GB","RCF",["27","–","–","32","31","33","35"],158,0,"-93",158,5,0,0],
    ["16","WallFinder","MT","RCF",["39","34d","36","39","38","–","–"],186,-34,"-99",152,5,0,0],
    ["17","b-man228","R3","F296",["29","26d","32","RGQ","35","RGQ","38"],160,-26,"-117",134,7,0,0],
    ["18","S7R_Ando787","RR","RCF",["45p1","DNS","–","–","45p1","–","–"],90,0,"-161",90,2,2,2],
    ["19","brettubrettu26","MT","M6",["–","–","–","–","40","38","–"],78,0,"-173",78,2,0,0],
    ["20","GoHelpTripleD","PV","650S",["–","–","–","–","–","40","34"],74,0,"-177",74,2,0,0],
    ["21","N-spud-P666","MC","F296",["DNS","38","–","–","DNS","34","DNS"],72,0,"-179",72,2,0,0],
    ["22","RiotheSpeedster","R3","RCF",["37","29","–","–","–","–","–"],66,0,"-185",66,2,0,0],
    ["23","jmillsy85","R3","M6",["21*","–","39","DNS","DNS","–","–"],60,0,"-191",60,2,0,0],
    ["24","Tim_turtle_79","MT","RCF",["34","RGQ","–","–","–","–","–"],34,0,"-217",34,2,0,0],
    ["25","ricreene","R3","FGT",["–","–","29","–","–","–","–"],29,0,"-222",29,1,0,0],
    ["26","Legend-Macca47","GB","V12",["26","–","–","–","–","–","–"],26,0,"-225",26,1,0,0],
    ["27","GGCAS_39","R3","RCF",["–","DNS","–","–","26","–","–"],26,0,"-225",26,1,0,0],
    ["28","Soulslayer_71","R3","RCF",["25","RGQ","–","–","–","–","–"],25,0,"-226",25,2,0,0],
    ["29","MalevolentOne666","MT","F296",["22","–","DNS","–","–","–","–"],22,0,"-229",22,1,0,0],
    ["30","allaussie","MC","RCF",["RGQ","–","–","–","–","–","–"],0,0,"-251",0,1,0,0],
    ["31","O-PUNCHY-_-P","GB","NA",["–","DNS","–","–","–","–","–"],0,0,"-251",0,0,0,0]
  ]
};
