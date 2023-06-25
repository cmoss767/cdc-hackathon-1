import { PrismaClient } from "@prisma/client"

const createTrash = async (prisma: PrismaClient) => {
  return await prisma.trash.createMany({
    data: [
      {
        name: "Brock",
        amount: 2,
        location: { latitude: 32.8657149525236, longitude: -79.92391529026212 },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.85635190000926,
          longitude: -79.90219742847361,
        },
      },
      {
        name: "Brad",
        amount: 5,
        location: {
          latitude: 32.84266120246757,
          longitude: -79.91312668756008,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: { latitude: 32.8516073507774, longitude: -79.87628695462872 },
      },
      {
        name: "Chris",
        amount: 1,
        location: { latitude: 32.8114133627083, longitude: -79.98329325667237 },
      },
      {
        name: "Chris",
        amount: 4,
        location: {
          latitude: 32.85770434903242,
          longitude: -79.94278897119686,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: { latitude: 32.80447692256792, longitude: -79.825815234378 },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.86462143740601,
          longitude: -79.86366271577171,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: { latitude: 32.863616759188, longitude: -79.87594837984558 },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.792165368946726,
          longitude: -79.98803258236602,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.8137698535857, longitude: -79.90396731286665 },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.865385930432076,
          longitude: -79.94476094082853,
        },
      },
      {
        name: "Brad",
        amount: 4,
        location: {
          latitude: 32.87932112656224,
          longitude: -79.84173559178588,
        },
      },
      {
        name: "Chris",
        amount: 2,
        location: { latitude: 32.8735303260093, longitude: -79.99100394317527 },
      },
      {
        name: "Brock",
        amount: 1,
        location: { latitude: 32.85938467445648, longitude: -79.9063365197451 },
      },
      {
        name: "Chris",
        amount: 2,
        location: {
          latitude: 32.82402190279129,
          longitude: -79.95546026685054,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.88979245023877,
          longitude: -79.81839988297638,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.8305335748794, longitude: -79.92195100066083 },
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.84181089390099, longitude: -79.9406741481743 },
      },
      {
        name: "Jimmy",
        amount: 2,
        location: { latitude: 32.84606599820699, longitude: -79.9425368564906 },
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.88997459520033,
          longitude: -79.84986848013959,
        },
      },
      {
        name: "Brad",
        amount: 5,
        location: { latitude: 32.821474219315796, longitude: -79.897109247908 },
      },
      {
        name: "Tom",
        amount: 2,
        location: { latitude: 32.876087778802, longitude: -79.93834221607192 },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.88630472056968,
          longitude: -79.94971374958314,
        },
      },
      {
        name: "Brad",
        amount: 5,
        location: {
          latitude: 32.85493660880133,
          longitude: -79.84926857657409,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.85440977972483,
          longitude: -79.86910375949721,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.88947088653449,
          longitude: -79.95630782488736,
        },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.85114268776087,
          longitude: -79.87715556416693,
        },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.86307289501754,
          longitude: -79.84907966292764,
        },
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.850490535080816,
          longitude: -79.81562793153704,
        },
      },
      {
        name: "Jimmy",
        amount: 4,
        location: {
          latitude: 32.802207670329395,
          longitude: -79.92052262306642,
        },
      },
      {
        name: "Brad",
        amount: 4,
        location: {
          latitude: 32.80896377694234,
          longitude: -79.88805706719305,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.87578517276442,
          longitude: -79.88227145408337,
        },
      },
      {
        name: "Tom",
        amount: 4,
        location: { latitude: 32.79857121857636, longitude: -79.8172352420942 },
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.794704692165816,
          longitude: -79.9959170774177,
        },
      },
      {
        name: "Chris",
        amount: 4,
        location: { latitude: 32.81916122022568, longitude: -80.0090247609998 },
      },
      {
        name: "Brad",
        amount: 5,
        location: { latitude: 32.84616576784923, longitude: -79.9010121869063 },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.873777259670334,
          longitude: -79.88649753781927,
        },
      },
      {
        name: "Chris",
        amount: 5,
        location: { latitude: 32.87814567160704, longitude: -79.8629058451269 },
      },
      {
        name: "Jimmy",
        amount: 4,
        location: {
          latitude: 32.85042774221899,
          longitude: -79.97554741360337,
        },
      },
      {
        name: "Chris",
        amount: 4,
        location: {
          latitude: 32.826465965426046,
          longitude: -79.83530187824343,
        },
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.79875072945787,
          longitude: -79.89155860238407,
        },
      },
      {
        name: "Jimmy",
        amount: 2,
        location: {
          latitude: 32.88445473854939,
          longitude: -79.87411936693724,
        },
      },
      {
        name: "Brad",
        amount: 1,
        location: { latitude: 32.86685791083655, longitude: -79.8564936256862 },
      },
      {
        name: "Tom",
        amount: 3,
        location: { latitude: 32.87625261580789, longitude: -79.9025073069223 },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.804524880446586,
          longitude: -79.93602996732095,
        },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.81087141624715,
          longitude: -79.86198874967566,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.87691439020444,
          longitude: -79.91083221303764,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.786469002949964,
          longitude: -79.98635748726235,
        },
      },
      {
        name: "Brock",
        amount: 1,
        location: {
          latitude: 32.886955046262585,
          longitude: -80.00441152851195,
        },
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.88440430951693,
          longitude: -79.94674725452855,
        },
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.85719411008051,
          longitude: -79.95425734344602,
        },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.85133849519335,
          longitude: -79.92263779037134,
        },
      },
      {
        name: "Brad",
        amount: 5,
        location: {
          latitude: 32.81213696266763,
          longitude: -79.98125281431221,
        },
      },
      {
        name: "Chris",
        amount: 4,
        location: { latitude: 32.8163720996724, longitude: -80.00303440205288 },
      },
      {
        name: "Jimmy",
        amount: 3,
        location: {
          latitude: 32.869460164580836,
          longitude: -79.98379082987859,
        },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.876723377608585,
          longitude: -79.81999701601163,
        },
      },
      {
        name: "Brad",
        amount: 1,
        location: {
          latitude: 32.80702749055896,
          longitude: -79.82447751025897,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.81951869080444,
          longitude: -79.84875580622686,
        },
      },
      {
        name: "Brad",
        amount: 5,
        location: { latitude: 32.85051075901969, longitude: -79.9692697931875 },
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.821543727955934,
          longitude: -79.9214162321484,
        },
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.89148312572366,
          longitude: -79.92508985287803,
        },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.81600123393841,
          longitude: -79.87490648036822,
        },
      },
      {
        name: "Brock",
        amount: 3,
        location: {
          latitude: 32.80582569690663,
          longitude: -79.90263713045408,
        },
      },
      {
        name: "Tom",
        amount: 5,
        location: {
          latitude: 32.88298315596004,
          longitude: -79.88126985484426,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.89033435013051,
          longitude: -79.95922217367446,
        },
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.84125897870597,
          longitude: -79.82165910040666,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.84957915290112,
          longitude: -80.01211575274714,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: { latitude: 32.83213161424282, longitude: -79.8366623699594 },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.887061447255476,
          longitude: -79.94824587102354,
        },
      },
      {
        name: "Brad",
        amount: 4,
        location: { latitude: 32.8110127896286, longitude: -79.97080893721736 },
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.785130614871534,
          longitude: -79.98719014955334,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.85290359807691,
          longitude: -79.92761953978625,
        },
      },
      {
        name: "Brad",
        amount: 4,
        location: { latitude: 32.89027658202736, longitude: -79.9754762614907 },
      },
      {
        name: "Tom",
        amount: 1,
        location: {
          latitude: 32.87893182180286,
          longitude: -79.93536949699222,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.88290836871222,
          longitude: -79.97422031113317,
        },
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.86649724526075,
          longitude: -79.84485279006662,
        },
      },
      {
        name: "Brad",
        amount: 3,
        location: {
          latitude: 32.84419870429894,
          longitude: -79.92096796844196,
        },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.80574189060079,
          longitude: -79.87023457566525,
        },
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.80310366050024,
          longitude: -79.81347922049731,
        },
      },
      {
        name: "Chris",
        amount: 3,
        location: {
          latitude: 32.86275157827027,
          longitude: -79.82669527325608,
        },
      },
      {
        name: "Chris",
        amount: 4,
        location: {
          latitude: 32.86347355730357,
          longitude: -79.84689892478387,
        },
      },
      {
        name: "Tom",
        amount: 1,
        location: {
          latitude: 32.83428087191387,
          longitude: -79.87058873019639,
        },
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.84760818797416,
          longitude: -80.01158160290753,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: {
          latitude: 32.817211512200565,
          longitude: -79.85608447111505,
        },
      },
      {
        name: "Tom",
        amount: 2,
        location: {
          latitude: 32.800074205573445,
          longitude: -79.84654149448384,
        },
      },
      {
        name: "Jimmy",
        amount: 1,
        location: {
          latitude: 32.84399509992687,
          longitude: -79.91868573429971,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.81285958261495,
          longitude: -79.93535922653848,
        },
      },
      {
        name: "Brad",
        amount: 5,
        location: {
          latitude: 32.81353059518117,
          longitude: -79.94412494979683,
        },
      },
      {
        name: "Tom",
        amount: 2,
        location: {
          latitude: 32.88476050495773,
          longitude: -79.93673168184769,
        },
      },
      {
        name: "Tom",
        amount: 4,
        location: {
          latitude: 32.83852704630064,
          longitude: -79.84579288378629,
        },
      },
      {
        name: "Brad",
        amount: 2,
        location: {
          latitude: 32.803366209626454,
          longitude: -79.82726633684084,
        },
      },
      {
        name: "Jimmy",
        amount: 4,
        location: {
          latitude: 32.871195883173264,
          longitude: -79.84701527159295,
        },
      },
      {
        name: "Brock",
        amount: 4,
        location: { latitude: 32.8241889968606, longitude: -79.91161606317029 },
      },
      {
        name: "Chris",
        amount: 2,
        location: { latitude: 32.87243557551644, longitude: -79.8857121523727 },
      },
      {
        name: "Chris",
        amount: 1,
        location: {
          latitude: 32.86043025052466,
          longitude: -79.90413131238903,
        },
      },
      {
        name: "Brock",
        amount: 5,
        location: {
          latitude: 32.78770713565061,
          longitude: -79.90888107666682,
        },
      },
      {
        name: "Jimmy",
        amount: 5,
        location: {
          latitude: 32.87189559806121,
          longitude: -79.93614952142843,
        },
      },
      {
        name: "Brock",
        amount: 2,
        location: {
          latitude: 32.78354861266043,
          longitude: -79.82563027824575,
        },
      },
      {
        name: "Tom",
        amount: 3,
        location: {
          latitude: 32.82645249880097,
          longitude: -79.90695435383417,
        },
      },
    ],
  })
}

export default createTrash
