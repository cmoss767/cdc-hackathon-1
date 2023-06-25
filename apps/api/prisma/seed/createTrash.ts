import { PrismaClient } from "@prisma/client"

const createTrash = async (prisma: PrismaClient) => {
  return await prisma.trash.createMany({
    data: [
      {
        name: "Brad",
        amount: 4,
        location: { latitude: 32.8416383041471, longitude: -79.85041210945047 },
        time: "2023-04-26T08:29:26.597Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.80389773670665,
          longitude: -79.94805747750817,
        },
        time: "2023-06-02T10:04:35.193Z",
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.864277821059794,
          longitude: -79.8274768415343,
        },
        time: "2023-06-19T14:46:17.590Z",
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.78814849809007,
          longitude: -79.94967651335706,
        },
        time: "2023-06-01T06:41:31.960Z",
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.799045972196346,
          longitude: -79.93647937723334,
        },
        time: "2023-05-27T21:25:29.530Z",
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
        time: "2023-05-22T07:05:11.000Z",
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.79484650187204,
          longitude: -79.97579257394088,
        },
        time: "2023-06-17T01:33:55.501Z",
      },
      {
        name: "Tom",
        amount: 2,
        location: {
          latitude: 32.80642468112662,
          longitude: -79.92749277787424,
        },
        time: "2023-04-28T17:06:04.365Z",
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.882473231114425,
          longitude: -79.85986648834408,
        },
        time: "2023-05-13T00:42:49.226Z",
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.81768321238678,
          longitude: -79.93908753237903,
        },
        time: "2023-06-21T23:20:51.515Z",
      },
      {
        name: "Tom",
        amount: 5,
        location: { latitude: 32.78837538369968, longitude: -79.9753222522257 },
        time: "2023-05-29T05:59:04.185Z",
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.81142254417219,
          longitude: -79.96205762996132,
        },
        time: "2023-05-09T01:22:28.869Z",
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.78921015375281,
          longitude: -79.82708104092389,
        },
        time: "2023-05-26T03:36:34.613Z",
      },
      {
        name: "Brad",
        amount: 2,
        location: { latitude: 32.88936705921066, longitude: -79.8712796906453 },
        time: "2023-06-16T10:46:07.358Z",
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.85663340230381,
          longitude: -79.88954640208993,
        },
        time: "2023-05-05T05:29:24.553Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: { latitude: 32.84139735291396, longitude: -79.8667182786685 },
        time: "2023-05-21T08:46:12.157Z",
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.878881825225626,
          longitude: -79.8727278432086,
        },
        time: "2023-06-16T21:14:04.048Z",
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.88378538618784,
          longitude: -79.82434542467048,
        },
        time: "2023-04-30T16:15:24.926Z",
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.883969513930246,
          longitude: -79.88610832349684,
        },
        time: "2023-05-16T20:22:40.471Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.826350182558116,
          longitude: -79.82529171144454,
        },
        time: "2023-05-31T22:52:02.005Z",
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.82942407702118,
          longitude: -79.82923928244526,
        },
        time: "2023-06-03T14:18:23.922Z",
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.88320579855152,
          longitude: -79.87035782830841,
        },
        time: "2023-06-02T15:59:52.709Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.794307590425085,
          longitude: -79.81714752876243,
        },
        time: "2023-06-10T10:15:13.129Z",
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.794306895830694,
          longitude: -79.92298945232004,
        },
        time: "2023-06-01T19:10:31.639Z",
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.86732490743924,
          longitude: -79.82911941104913,
        },
        time: "2023-05-05T04:12:21.939Z",
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.802738816339634,
          longitude: -79.98918386480047,
        },
        time: "2023-05-27T15:50:20.275Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.86715788492122,
          longitude: -79.86896458970836,
        },
        time: "2023-05-22T14:49:42.222Z",
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.82850146822593,
          longitude: -79.97931648823379,
        },
        time: "2023-06-06T09:20:13.314Z",
      },
      {
        name: "Jimmy",
        amount: 5,
        location: { latitude: 32.8714196171469, longitude: -80.00794309579312 },
        time: "2023-05-02T22:38:23.263Z",
      },
      {
        name: "Brock",
        amount: 2,
        location: { latitude: 32.8664851167434, longitude: -79.90942059065148 },
        time: "2023-06-17T00:32:22.912Z",
      },
      {
        name: "Brad",
        amount: 4,
        location: {
          latitude: 32.81819959613032,
          longitude: -79.91157677307692,
        },
        time: "2023-06-11T14:58:05.218Z",
      },
      {
        name: "Brad",
        amount: 4,
        location: { latitude: 32.8256357431481, longitude: -79.86046556863468 },
        time: "2023-06-12T20:48:00.325Z",
      },
      {
        name: "Chris",
        amount: 4,
        location: { latitude: 32.83687159499838, longitude: -80.0122066355256 },
        time: "2023-05-19T02:42:44.779Z",
      },
      {
        name: "Jimmy",
        amount: 3,
        location: { latitude: 32.80556338258706, longitude: -79.8860562392379 },
        time: "2023-06-12T05:25:54.721Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.85100034693899,
          longitude: -79.90160034747407,
        },
        time: "2023-06-24T08:22:03.211Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.81543869737642,
          longitude: -80.00953151767152,
        },
        time: "2023-06-15T09:46:57.564Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.83210872740262,
          longitude: -79.92492792508463,
        },
        time: "2023-05-27T03:26:44.837Z",
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.809147365878715,
          longitude: -79.93130728532003,
        },
        time: "2023-05-05T20:12:29.963Z",
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.80484659732731,
          longitude: -79.86799524051517,
        },
        time: "2023-04-30T05:36:30.083Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.88499142811022,
          longitude: -79.83193350601488,
        },
        time: "2023-05-18T07:09:09.386Z",
      },
      {
        name: "Brad",
        amount: 4,
        location: {
          latitude: 32.79778302859388,
          longitude: -79.81896930123017,
        },
        time: "2023-05-24T15:49:32.147Z",
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.839289218015274,
          longitude: -79.90819139071988,
        },
        time: "2023-04-29T02:25:51.837Z",
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.87285902485583,
          longitude: -79.90255368772347,
        },
        time: "2023-05-16T11:08:26.717Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.81267190177108,
          longitude: -79.94216914217186,
        },
        time: "2023-05-23T03:31:06.783Z",
      },
      {
        name: "Brock",
        amount: 1,
        location: { latitude: 32.81449955893747, longitude: -79.948555678748 },
        time: "2023-06-11T07:00:18.566Z",
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.826085231451465,
          longitude: -79.9448437752362,
        },
        time: "2023-06-16T16:46:56.005Z",
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
        time: "2023-05-08T18:50:58.331Z",
      },
      {
        name: "Tom",
        amount: 1,
        location: {
          latitude: 32.82922896572869,
          longitude: -79.92351274049788,
        },
        time: "2023-05-08T21:36:32.723Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.825185324607936,
          longitude: -79.90922380088446,
        },
        time: "2023-06-16T17:26:01.888Z",
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.82843701304037,
          longitude: -79.89796797825264,
        },
        time: "2023-06-03T19:42:10.271Z",
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.837807649711344,
          longitude: -79.83934634443993,
        },
        time: "2023-06-17T20:21:59.098Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.86705381388702,
          longitude: -79.88159313470331,
        },
        time: "2023-05-27T03:22:16.690Z",
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.81123037067855,
          longitude: -79.89977673199026,
        },
        time: "2023-06-03T04:47:55.842Z",
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.85921051883147,
          longitude: -79.84376949171694,
        },
        time: "2023-06-17T08:50:03.740Z",
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.80056526278871,
          longitude: -79.83633509520644,
        },
        time: "2023-06-20T18:56:37.569Z",
      },
      {
        name: "Jimmy",
        amount: 3,
        location: { latitude: 32.87928536976673, longitude: -79.8644989306608 },
        time: "2023-05-26T20:25:01.079Z",
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.8061775058892, longitude: -79.90559306626376 },
        time: "2023-06-13T11:16:56.492Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.854592569716544,
          longitude: -79.98266102660567,
        },
        time: "2023-05-17T12:26:38.534Z",
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.820002952344026,
          longitude: -79.95957308771406,
        },
        time: "2023-06-15T16:56:47.832Z",
      },
      {
        name: "Jimmy",
        amount: 4,
        location: {
          latitude: 32.796728203289824,
          longitude: -80.01140414972069,
        },
        time: "2023-06-15T07:08:29.580Z",
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.82013832734527,
          longitude: -79.85434412714415,
        },
        time: "2023-05-01T17:57:39.382Z",
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.854001312379495,
          longitude: -79.98680119966089,
        },
        time: "2023-05-01T00:37:51.311Z",
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.804986334347156,
          longitude: -79.82749783645568,
        },
        time: "2023-04-28T11:48:28.207Z",
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.789013895400366,
          longitude: -79.93643409034529,
        },
        time: "2023-05-22T02:48:22.614Z",
      },
      {
        name: "Chris",
        amount: 3,
        location: { latitude: 32.82069675143701, longitude: -79.8625186377572 },
        time: "2023-05-11T12:07:45.299Z",
      },
      {
        name: "Chris",
        amount: 4,
        location: {
          latitude: 32.87462512736907,
          longitude: -79.88474659444553,
        },
        time: "2023-06-18T00:18:35.626Z",
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.80439028625498,
          longitude: -79.85445190872423,
        },
        time: "2023-05-06T10:33:44.237Z",
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.87770173241495,
          longitude: -79.96796242671739,
        },
        time: "2023-06-25T13:29:43.908Z",
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.823157310622136,
          longitude: -79.84444546381415,
        },
        time: "2023-05-15T12:41:03.916Z",
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.852682617833636,
          longitude: -79.96355676180406,
        },
        time: "2023-05-24T22:09:17.299Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: { latitude: 32.85031920757867, longitude: -79.9475197382085 },
        time: "2023-05-02T03:42:04.429Z",
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.87764624049856,
          longitude: -80.01234634305294,
        },
        time: "2023-04-26T19:41:48.223Z",
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.88002382620756,
          longitude: -79.82177283447153,
        },
        time: "2023-05-12T11:01:09.905Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.81585183509234,
          longitude: -79.81253143030222,
        },
        time: "2023-06-08T11:19:15.933Z",
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.79929008611081,
          longitude: -79.88287824643118,
        },
        time: "2023-06-05T11:33:30.389Z",
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.85298216289481,
          longitude: -79.86786214839029,
        },
        time: "2023-05-12T21:24:08.198Z",
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.832969337295886,
          longitude: -79.98834875314142,
        },
        time: "2023-06-22T07:27:46.828Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: { latitude: 32.8242698015831, longitude: -79.81765631519174 },
        time: "2023-05-31T04:56:17.576Z",
      },
      {
        name: "Brad",
        amount: 5,
        location: { latitude: 32.84116895263132, longitude: -79.9430965299978 },
        time: "2023-04-27T01:49:19.824Z",
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.83247748720418,
          longitude: -79.94437955930438,
        },
        time: "2023-05-22T14:00:48.490Z",
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.8423981298475, longitude: -79.83023886720098 },
        time: "2023-05-08T14:48:18.205Z",
      },
      {
        name: "Chris",
        amount: 5,
        location: {
          latitude: 32.845683835234944,
          longitude: -79.88707818891952,
        },
        time: "2023-06-08T04:56:43.178Z",
      },
      {
        name: "Brock",
        amount: 3,
        location: { latitude: 32.8622670663296, longitude: -79.94619609774463 },
        time: "2023-06-06T08:35:44.336Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.86666456035576,
          longitude: -79.90984159131335,
        },
        time: "2023-06-17T05:48:13.149Z",
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.79299685928259,
          longitude: -79.88245334710528,
        },
        time: "2023-05-02T23:55:07.651Z",
      },
      {
        name: "Chris",
        amount: 4,
        location: {
          latitude: 32.834806014577076,
          longitude: -79.85572788320923,
        },
        time: "2023-04-28T02:52:28.687Z",
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.82201378893795,
          longitude: -80.00364993672973,
        },
        time: "2023-05-27T05:40:40.512Z",
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.83322935789868,
          longitude: -79.82851007094679,
        },
        time: "2023-05-19T17:01:13.092Z",
      },
      {
        name: "Tom",
        amount: 1,
        location: {
          latitude: 32.88081467831416,
          longitude: -79.96434910826625,
        },
        time: "2023-05-19T18:12:33.217Z",
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.81288256591847,
          longitude: -79.95136416723983,
        },
        time: "2023-04-30T09:22:41.665Z",
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.82197597618787,
          longitude: -79.92554366057976,
        },
        time: "2023-05-24T22:27:27.872Z",
      },
      {
        name: "Brad",
        amount: 5,
        location: { latitude: 32.81841381235538, longitude: -79.9784532511608 },
        time: "2023-06-01T14:54:58.312Z",
      },
      {
        name: "Tom",
        amount: 4,
        location: { latitude: 32.83439224576348, longitude: -79.9783514324671 },
        time: "2023-05-22T17:20:53.096Z",
      },
    ],
  })
}

export default createTrash
