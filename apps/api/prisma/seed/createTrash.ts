import { PrismaClient } from "@prisma/client"

const createTrash = async (prisma: PrismaClient) => {
  return await prisma.trash.createMany({
    data: [
      {
        name: "Brad",
        amount: 4,
        location: { latitude: 32.8416383041471, longitude: -79.85041210945047 },
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.80389773670665,
          longitude: -79.94805747750817,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.864277821059794,
          longitude: -79.8274768415343,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.78814849809007,
          longitude: -79.94967651335706,
        },
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.799045972196346,
          longitude: -79.93647937723334,
        },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.80279321172661,
          longitude: -79.94017875390375,
        },
        time: "2023-06-19T10:05:11.656Z",
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.83414617822694,
          longitude: -79.98743200532846,
        },
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.79484650187204,
          longitude: -79.97579257394088,
        },
      },
      {
        name: "Tom",
        amount: 2,
        location: {
          latitude: 32.80642468112662,
          longitude: -79.92749277787424,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.882473231114425,
          longitude: -79.85986648834408,
        },
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.81768321238678,
          longitude: -79.93908753237903,
        },
      },
      {
        name: "Tom",
        amount: 5,
        location: { latitude: 32.78837538369968, longitude: -79.9753222522257 },
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.81142254417219,
          longitude: -79.96205762996132,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.78921015375281,
          longitude: -79.82708104092389,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: { latitude: 32.88936705921066, longitude: -79.8712796906453 },
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.85663340230381,
          longitude: -79.88954640208993,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: { latitude: 32.84139735291396, longitude: -79.8667182786685 },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.878881825225626,
          longitude: -79.8727278432086,
        },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.88378538618784,
          longitude: -79.82434542467048,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.883969513930246,
          longitude: -79.88610832349684,
        },
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.826350182558116,
          longitude: -79.82529171144454,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.82942407702118,
          longitude: -79.82923928244526,
        },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.88320579855152,
          longitude: -79.87035782830841,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.794307590425085,
          longitude: -79.81714752876243,
        },
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.794306895830694,
          longitude: -79.92298945232004,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.86732490743924,
          longitude: -79.82911941104913,
        },
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.802738816339634,
          longitude: -79.98918386480047,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.86715788492122,
          longitude: -79.86896458970836,
        },
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.82850146822593,
          longitude: -79.97931648823379,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: { latitude: 32.8714196171469, longitude: -80.00794309579312 },
      },
      {
        name: "Brock",
        amount: 2,
        location: { latitude: 32.8664851167434, longitude: -79.90942059065148 },
      },
      {
        name: "Brad",
        amount: 4,
        location: {
          latitude: 32.81819959613032,
          longitude: -79.91157677307692,
        },
      },
      {
        name: "Brad",
        amount: 4,
        location: { latitude: 32.8256357431481, longitude: -79.86046556863468 },
      },
      {
        name: "Chris",
        amount: 4,
        location: { latitude: 32.83687159499838, longitude: -80.0122066355256 },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: { latitude: 32.80556338258706, longitude: -79.8860562392379 },
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.85100034693899,
          longitude: -79.90160034747407,
        },
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.81543869737642,
          longitude: -80.00953151767152,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.83210872740262,
          longitude: -79.92492792508463,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.809147365878715,
          longitude: -79.93130728532003,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.80484659732731,
          longitude: -79.86799524051517,
        },
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.88499142811022,
          longitude: -79.83193350601488,
        },
      },
      {
        name: "Brad",
        amount: 4,
        location: {
          latitude: 32.79778302859388,
          longitude: -79.81896930123017,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.839289218015274,
          longitude: -79.90819139071988,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.87285902485583,
          longitude: -79.90255368772347,
        },
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.81267190177108,
          longitude: -79.94216914217186,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: { latitude: 32.81449955893747, longitude: -79.948555678748 },
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.826085231451465,
          longitude: -79.9448437752362,
        },
      },
      {
        name: "Tom",
        amount: 2,
        location: {
          latitude: 32.843306490776335,
          longitude: -79.89925477386679,
        },
        time: "2023-06-03T10:36:39.733Z",
      },
      {
        name: "Tom",
        amount: 2,
        location: {
          latitude: 32.87129707122294,
          longitude: -79.85787774090012,
        },
        time: "2023-06-23T08:33:04.728Z",
      },
      {
        name: "Chris",
        amount: 2,
        location: { latitude: 32.81880547856293, longitude: -79.909275766418 },
        time: "2023-05-15T23:35:44.156Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.825621559977186,
          longitude: -79.99039772674674,
        },
        time: "2023-05-31T06:47:37.995Z",
      },
      {
        name: "Brad",
        amount: 5,
        location: {
          latitude: 32.85668064978295,
          longitude: -79.95870840537084,
        },
        time: "2023-06-14T12:42:40.610Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.82770941589131,
          longitude: -79.96275514229262,
        },
        time: "2023-06-16T05:41:44.952Z",
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.831766781643466,
          longitude: -79.82756794907775,
        },
      },
      {
        name: "Tom",
        amount: 1,
        location: {
          latitude: 32.82922896572869,
          longitude: -79.92351274049788,
        },
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.825185324607936,
          longitude: -79.90922380088446,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.82843701304037,
          longitude: -79.89796797825264,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.837807649711344,
          longitude: -79.83934634443993,
        },
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.86705381388702,
          longitude: -79.88159313470331,
        },
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.81123037067855,
          longitude: -79.89977673199026,
        },
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.85921051883147,
          longitude: -79.84376949171694,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.80056526278871,
          longitude: -79.83633509520644,
        },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: { latitude: 32.87928536976673, longitude: -79.8644989306608 },
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.8061775058892, longitude: -79.90559306626376 },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.854592569716544,
          longitude: -79.98266102660567,
        },
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.820002952344026,
          longitude: -79.95957308771406,
        },
      },
      {
        name: "Jimmy",
        amount: 4,
        location: {
          latitude: 32.796728203289824,
          longitude: -80.01140414972069,
        },
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.82013832734527,
          longitude: -79.85434412714415,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.854001312379495,
          longitude: -79.98680119966089,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.804986334347156,
          longitude: -79.82749783645568,
        },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.789013895400366,
          longitude: -79.93643409034529,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: { latitude: 32.82069675143701, longitude: -79.8625186377572 },
      },
      {
        name: "Chris",
        amount: 4,
        location: {
          latitude: 32.87462512736907,
          longitude: -79.88474659444553,
        },
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.80439028625498,
          longitude: -79.85445190872423,
        },
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.87770173241495,
          longitude: -79.96796242671739,
        },
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.823157310622136,
          longitude: -79.84444546381415,
        },
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.852682617833636,
          longitude: -79.96355676180406,
        },
      },
      {
        name: "Brad",
        amount: 1,
        location: { latitude: 32.85031920757867, longitude: -79.9475197382085 },
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.87764624049856,
          longitude: -80.01234634305294,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.88002382620756,
          longitude: -79.82177283447153,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.81585183509234,
          longitude: -79.81253143030222,
        },
      },
      {
        name: "Austin",
        amount: 5,
        location: { latitude: 32.80807238117593, longitude: -79.8895299242533 },
      },
      {
        name: "Himmy",
        amount: 5,
        location: {
          latitude: 32.81178747629383,
          longitude: -79.88581887800716,
        },
      },
      {
        name: "Timmy",
        amount: 2,
        location: {
          latitude: 32.81365053925319,
          longitude: -79.89356004653642,
        },
      },
      {
        name: "Timmy",
        amount: 1,
        location: {
          latitude: 32.811699330022535,
          longitude: -79.8686947589065,
        },
      },
      {
        name: "Timmy",
        amount: 1,
        location: {
          latitude: 32.79776370887287,
          longitude: -79.86974896640109,
        },
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.80343216141784,
          longitude: -79.86749432132075,
        },
      },
      {
        name: "Timmy",
        amount: 3,
        location: {
          latitude: 32.81085928898603,
          longitude: -79.88780342328033,
        },
      },
      {
        name: "Austin",
        amount: 3,
        location: { latitude: 32.8079576379652, longitude: -79.86887472018908 },
      },
      {
        name: "Himmy",
        amount: 3,
        location: {
          latitude: 32.801068244827256,
          longitude: -79.89673555728612,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.80361790195495,
          longitude: -79.88123594400317,
        },
      },
      {
        name: "Chad",
        amount: 5,
        location: {
          latitude: 32.802245214086504,
          longitude: -79.88495809829168,
        },
      },
      {
        name: "Chad",
        amount: 5,
        location: {
          latitude: 32.81218420252716,
          longitude: -79.88158039567544,
        },
      },
      {
        name: "Austin",
        amount: 4,
        location: {
          latitude: 32.810219484914306,
          longitude: -79.89334177738519,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.81540897738342,
          longitude: -79.87424433729315,
        },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.799337151175365,
          longitude: -79.8728118031197,
        },
      },
      {
        name: "Chad",
        amount: 5,
        location: {
          latitude: 32.80089308497426,
          longitude: -79.87304176116172,
        },
      },
      {
        name: "Chad",
        amount: 1,
        location: { latitude: 32.80678404787825, longitude: -79.8942430267705 },
      },
      {
        name: "Austin",
        amount: 4,
        location: {
          latitude: 32.79867411690419,
          longitude: -79.88191072408569,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.79893275451083,
          longitude: -79.88935168522772,
        },
      },
      {
        name: "Austin",
        amount: 1,
        location: { latitude: 32.80884652774213, longitude: -79.8782486270563 },
      },
      {
        name: "Austin",
        amount: 5,
        location: {
          latitude: 32.81360331593036,
          longitude: -79.87157268637188,
        },
      },
      {
        name: "Chad",
        amount: 3,
        location: {
          latitude: 32.800555429804206,
          longitude: -79.8829994841755,
        },
      },
      {
        name: "Timmy",
        amount: 2,
        location: {
          latitude: 32.802119578825675,
          longitude: -79.88642743840724,
        },
      },
      {
        name: "Timmy",
        amount: 3,
        location: {
          latitude: 32.81458208213155,
          longitude: -79.89516679261256,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.80101848737761,
          longitude: -79.87350581870898,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.804384266654736,
          longitude: -79.8723457549571,
        },
      },
      {
        name: "Himmy",
        amount: 4,
        location: {
          latitude: 32.80782886456785,
          longitude: -79.89331827411273,
        },
      },
      {
        name: "Chad",
        amount: 1,
        location: {
          latitude: 32.809570439777644,
          longitude: -79.88321775130672,
        },
      },
      {
        name: "Austin",
        amount: 2,
        location: {
          latitude: 32.79829417210692,
          longitude: -79.89466506739683,
        },
      },
      {
        name: "Timmy",
        amount: 5,
        location: {
          latitude: 32.79938145845863,
          longitude: -79.89684875611032,
        },
      },
      {
        name: "Austin",
        amount: 3,
        location: {
          latitude: 32.802526328730714,
          longitude: -79.8957686283377,
        },
      },
      {
        name: "Himmy",
        amount: 1,
        location: { latitude: 32.80202587356766, longitude: -79.8809767198631 },
      },
      {
        name: "Timmy",
        amount: 3,
        location: {
          latitude: 32.81276113644642,
          longitude: -79.88803604681272,
        },
      },
      {
        name: "Austin",
        amount: 3,
        location: {
          latitude: 32.80641797926311,
          longitude: -79.89233374137463,
        },
      },
      {
        name: "Austin",
        amount: 2,
        location: {
          latitude: 32.815492281061196,
          longitude: -79.88688428650617,
        },
      },
      {
        name: "Himmy",
        amount: 3,
        location: {
          latitude: 32.812188611271296,
          longitude: -79.87343694958791,
        },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.799616260337416,
          longitude: -79.88061441121782,
        },
      },
      {
        name: "Austin",
        amount: 5,
        location: {
          latitude: 32.80941632319072,
          longitude: -79.89072881558278,
        },
      },
      {
        name: "Austin",
        amount: 5,
        location: {
          latitude: 32.80201941612928,
          longitude: -79.89111873269023,
        },
      },
      {
        name: "Himmy",
        amount: 5,
        location: {
          latitude: 32.816126541892764,
          longitude: -79.88688154386796,
        },
      },
      {
        name: "Timmy",
        amount: 5,
        location: { latitude: 32.8099697017033, longitude: -79.8802095164477 },
      },
      {
        name: "Brock",
        amount: 1,
        location: { latitude: 32.80466649133364, longitude: -79.8879681721209 },
      },
      {
        name: "Austin",
        amount: 1,
        location: {
          latitude: 32.79801582521399,
          longitude: -79.86697148329777,
        },
      },
      {
        name: "Timmy",
        amount: 3,
        location: {
          latitude: 32.807596780251004,
          longitude: -79.88179132646239,
        },
      },
      {
        name: "Timmy",
        amount: 1,
        location: {
          latitude: 32.79998388788671,
          longitude: -79.88562870410361,
        },
      },
      {
        name: "Chad",
        amount: 3,
        location: {
          latitude: 32.805454843468894,
          longitude: -79.89740194517775,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.79984548756347,
          longitude: -79.87355269723577,
        },
      },
      {
        name: "Austin",
        amount: 2,
        location: {
          latitude: 32.797617829487024,
          longitude: -79.87815563099345,
        },
      },
      {
        name: "Chad",
        amount: 5,
        location: {
          latitude: 32.80934719170796,
          longitude: -79.87874865961744,
        },
      },
      {
        name: "Austin",
        amount: 2,
        location: {
          latitude: 32.81078087165101,
          longitude: -79.87594193213629,
        },
      },
    ],
  })
}

export default createTrash
