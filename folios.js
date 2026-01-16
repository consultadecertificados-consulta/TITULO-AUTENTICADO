// folios.js - Base de datos completa de certificados INEA (60 Registros)
const baseDatos = {
    // --- FOLIOS ORIGINALES (UUID) ---
    "9da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "VIANNEY VILLARREAL COTA", nivel: "SECUNDARIA", promedio: "7.7", conclusion: "2024-11-24", emision: "2024-11-29", lugar: "CAMPECHE, CAMPECHE", id: "0410255274" },
    "8ea8226f-5f07-41cc-81f6-23cb903e7500": { nombre: "VIRGINIO GOMEZ GUTIERREZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-10-20", emision: "2025-10-20", lugar: "CHIAPA DE CORZO, CHIAPAS", id: "0511255380" },
    "8da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "GIOVANNY AGUSTIN RUIZ TIRADO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-10-10", emision: "2025-10-15", lugar: "CIUDAD DE MEXICO", id: "1420256273" },
    "7da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "BRENDA GUADALUPE BAZALDUA MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NL", id: "1319256162" },
    "6da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JESSICA MARLENE HERNANDEZ COTA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-10-20", emision: "2025-10-25", lugar: "SAN LUIS POTOSI", id: "1521256384" },
    "0da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "VICTOR HUGO ECHEVERRIA GONZALES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "15-11-2025", emision: "20-11-2025", lugar: "JALISCO", id: "1622256495" },
    "4da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JESSICA NOHEMI QUIROZ GOVEA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-10-20", emision: "2025-10-20", lugar: "NUEVO LEON", id: "1723256506" },
    "3da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "ROGELIO DIAZ GARCIA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-10-20", emision: "2025-10-20", lugar: "OAXACA, OAXACA", id: "1824256617" },
    "2da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "OLIVIA REYES HERNANDEZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-10-20", emision: "2025-10-20", lugar: "NUEVO LEON", id: "1925256728" },
    "1da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "CYNDI LIZETH LOPEZ ARREDONDO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MATAMOROS, TAMAULIPAS", id: "2026256839" },
    "11a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "MACARIO TAPIA BARRIENTOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUANAJUATO, GUANAJUATO", id: "2127256940" },
    "0aa9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "MERCEDES LILIANA FLORES SANCHEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "LEON GUANAJUATO", id: "2228257051" },

    // --- SERIE FOLIO-INF (12 al 60) ---
     "11a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "ROSALINDA PROA FLORES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TAMAULIPAS", id: "2329257162" },
   "12a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JIMENA CAPISTRANO TORRES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ESTADO DE MEXICO", id: "2430257273" },
    "13a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "VERONICA VICTORIA VARGAS RESENDIZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ESTADO DE MEXICO", id: "2531257384" },
    "14a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "ANADELIA DOMINGUEZ NESTOSO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MOLOACAN, VER", id: "2632257495" },
   "1qa9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JESSICA ALEJANDRO MONTEJO", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "LAS CHOAPAS, VER", id: "2733257606" },
     "1ta8226f-6e07-41cc-81f6-23cb9l3e6008": { nombre: "FELIPE PEREZ MARCIAL", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN ANDRES TUXTLA, VER", id: "2834257717" },
    "1qa8226f-6e07-41cc-81f6-23cb903e6093": { nombre: "AXEL DE JESUS GAYTAN JUAREZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, N.L", id: "2935257828" },
    "1qa8226f-6e07-41cc-81f6-23cb903e6091": { nombre: "MELANY NAVARRETE FLORES ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "FORTIN, VERACRUZ", id: "3036257939" },
    "1na8226f-6e07-41cc-81f6-23cb903e6091": { nombre: "MARIA HERMELINDA BEJARANO LOERA.", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHIHUAHUA. CHI", id: "3137258050" },
    "1na8226f-6e07-41cc-81f6-23cb903e6000": { nombre: "REGULO QUIROZ REYES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MATAMOROS, TAMAULIPAS ", id: "3238258161" },
    "1na8226f-6e07-41cc-81f6-23cb9l3e6008": { nombre: "MARIA FERNANDA HEREIDA NUÑEZ ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MATAMOROS, TAMAULIPAS ", id: "3339258272" },
    "1oa8226f-6e07-41cc-81f6-23cb9l3e6008": { nombre: "MARISELA MUÑIZ GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY,  NUEVO LEÓN ", id: "3440258383" },
   "9da9226f-6e37-41cc-81f6-23cb903e6593": { nombre: "LINDA IVETH BERNAL ARMAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CUAUTITLAN IZCALLI, EDO MEX", id: "3541258494" },
    "4da9226f-6e17-41cc-81f6-23cb903e6593": { nombre: "CELSO JESUS SANCHEZ MUÑIS", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY , NUEVO LEON", id: "3642258605" },
    "4da9226f-6e17-41cc-81g6-23cb903e6593": { nombre: "FLOR GRISELDA DUBLE CARRILLO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHIHUAHUA, CHIUAHUA", id: "3743258716" },
     "4da9226f-6o17-41ec-81g6-23cb903e6593": { nombre: "YARELI BENICE DUBLE CARRILLO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHIHUAHUA, CHIHUAHUA", id: "3844258827" },
    "4da9226f-6o17-41ec-81g6-11cb903e6593": { nombre: "MARIA GALVAN LOPEZ ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-15", lugar: "JALISCO, JALISCO", id: "3945258928" },
    "4da9226f-6o17-41ec-11g6-23cb903e6593": { nombre: "JAZMIN ELIZABETH ACEVES CARDENAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "4046259039" },
    "4da9226f-6o13-41ec-81g6-23cb903e6598": { nombre: "GUADALUPE YESSICA GALVAN ORTEGA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TLALPAN, CIUDAD DE MEXICO", id: "4147259140" },
  "1889226f-6e07-41cc-81f6-23cb903e6593": { nombre: "SONIA MEDINA VALENZUELA ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "4248259251" },
    "22a1226f-6o13-41ec-81g6-23cb903e6598": { nombre: "MIRIAM ALEJANDRA DAVILA VENTURA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "JALISCO, JALISCO", id: "4349259362" },
    "8ea8226f-5f07-41cc-81f6-88cb903e750-": { nombre: "MARIA DE JESUS NUÑES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "NAUCALPAN DE JUAREZ, EDO MEX", id: "4450259473" },
    "98a1226f-6o13-41ec-81g6-23cb903e659-": { nombre: "JUAN JOSE PEREZ ZAMORA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TECAMAC, EDO MEX", id: "4551259584" },
   "6da9226f-6e07-77cc-81f6-23cb903e6593PP": { nombre: "PAOLA GUADALUPE GUTIERREZ DE LEON", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN LUIS POTOSI", id: "4652259695" },
    "11a9226f-6e07-4199-81f6-23cb903e6593": { nombre: "ALBERTO EZEQUIEL BERLIN ALMANZA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "VERACRUZ, VER", id: "4753259806" },
    "folio-inf-37": { nombre: "FERNANDO JOSUE REY", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-01-22", emision: "2025-01-27", lugar: "OAXACA, OAX", id: "4854259917" },
    "folio-inf-38": { nombre: "MONICA ALEJANDRA PAZ", nivel: "PRIMARIA", promedio: "7.7", conclusion: "2025-01-25", emision: "2025-01-30", lugar: "SALAMANCA, GTO", id: "4955260028" },
    "folio-inf-39": { nombre: "HUGO ENRIQUE SOSA", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2025-01-28", emision: "2025-02-02", lugar: "XALAPA, VER", id: "5056260139" },
    "folio-inf-40": { nombre: "PATRICIA BEATRIZ MAR", nivel: "SECUNDARIA", promedio: "9.3", conclusion: "2025-02-01", emision: "2025-02-06", lugar: "HERMOSILLO, SON", id: "5157260250" },
    "folio-inf-41": { nombre: "ALBERTO DIAZ ORTIZ", nivel: "PRIMARIA", promedio: "8.0", conclusion: "2025-02-03", emision: "2025-02-08", lugar: "SALTILLO, COAH", id: "5258260361" },
    "folio-inf-42": { nombre: "SILVIA MARINA VEGA", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2025-02-05", emision: "2025-02-10", lugar: "COLIMA, COL", id: "5359260472" },
    "folio-inf-43": { nombre: "GUSTAVO ADOLFO RUIZ", nivel: "SECUNDARIA", promedio: "7.6", conclusion: "2025-02-08", emision: "2025-02-13", lugar: "PACHUCA, HGO", id: "5460260583" },
    "folio-inf-44": { nombre: "CARMEN LETICIA LARA", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2025-02-10", emision: "2025-02-15", lugar: "TEPIC, NAY", id: "5561260694" },
    "folio-inf-45": { nombre: "RAUL SANTIAGO PEÑA", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-02-12", emision: "2025-02-17", lugar: "VILLAHERMOSA, TAB", id: "5662260805" },
    "folio-inf-46": { nombre: "GABRIELA MENDOZA S.", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-02-15", emision: "2025-02-20", lugar: "CAMPECHE, CAMP", id: "5763260916" },
    "folio-inf-47": { nombre: "OSCAR IVAN FLORES", nivel: "PRIMARIA", promedio: "7.5", conclusion: "2025-02-18", emision: "2025-02-23", lugar: "CUERNAVACA, MOR", id: "5864261027" },
    "folio-inf-48": { nombre: "ADRIANA LUZ VARGAS", nivel: "SECUNDARIA", promedio: "9.4", conclusion: "2025-02-20", emision: "2025-02-25", lugar: "MORELIA, MICH", id: "5965261138" },
    "folio-inf-49": { nombre: "EMILIO DUARTE MEZA", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-02-22", emision: "2025-02-27", lugar: "ZACATECAS, ZAC", id: "6066261249" },
    "folio-inf-50": { nombre: "YOLANDA REYES GIL", nivel: "PRIMARIA", promedio: "8.8", conclusion: "2025-02-25", emision: "2025-03-01", lugar: "LA PAZ, BCS", id: "6167261360" },
    "folio-inf-51": { nombre: "RAMON VALDEZ SOTO", nivel: "SECUNDARIA", promedio: "7.8", conclusion: "2025-02-28", emision: "2025-03-04", lugar: "DURANGO, DGO", id: "6268261471" },
    "folio-inf-52": { nombre: "IRENE CALDERA M.", nivel: "SECUNDARIA", promedio: "9.5", conclusion: "2025-03-02", emision: "2025-03-07", lugar: "MAZATLAN, SIN", id: "6369261582" },
    "folio-inf-53": { nombre: "RUBEN DARIO LIMA", nivel: "PRIMARIA", promedio: "8.4", conclusion: "2025-03-05", emision: "2025-03-10", lugar: "ENSENADA, BC", id: "6470261693" },
    "folio-inf-54": { nombre: "KARINA MENA ROJO", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2025-03-08", emision: "2025-03-13", lugar: "CELAYA, GTO", id: "6571261804" },
    "folio-inf-55": { nombre: "SERGIO OSORIO T.", nivel: "SECUNDARIA", promedio: "7.9", conclusion: "2025-03-11", emision: "2025-03-16", lugar: "REYNOSA, TAMPS", id: "6672261915" },
    "folio-inf-56": { nombre: "PAOLA NUÑEZ REAL", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2025-03-14", emision: "2025-03-19", lugar: "TORREON, COAH", id: "6773262026" },
    "folio-inf-57": { nombre: "MANUEL IBARRA VAL", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2025-03-17", emision: "2025-03-22", lugar: "CIUDAD JUAREZ", id: "6874262137" },
    "folio-inf-58": { nombre: "GLORIA ESTEFAN O.", nivel: "SECUNDARIA", promedio: "9.6", conclusion: "2025-03-20", emision: "2025-03-25", lugar: "GUADALAJARA, JAL", id: "6975262248" },
    "folio-inf-59": { nombre: "ALVARO OBREGON S.", nivel: "PRIMARIA", promedio: "7.4", conclusion: "2025-03-23", emision: "2025-03-28", lugar: "TAPACHULA, CHIS", id: "7076262359" },
    "folio-inf-60": { nombre: "LORENA HERRERA P.", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2025-03-25", emision: "2025-03-30", lugar: "ACAPULCO, GRO", id: "7177262470" }

};















