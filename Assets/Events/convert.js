const events = [
  {
    Event: "Inaug",
    Venue: "Main Audi",
    Date: "27/10/2023",
    Time: "19:00 - 23:59",
  },
  {
    Event: "VR Stall",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "00:00 to 03:00",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "00:00 to 03:00",
  },
  {
    Event: "Antaak",
    Venue: "FD2 QT",
    Date: "28/10/2023",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Travel and Living Quiz",
    Venue: 6109,
    Date: "28/10/2023",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse",
    Venue: "MLawns",
    Date: "28/10/2023",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse",
    Venue: "Online",
    Date: "28/10/2023",
    Time: "00:00 to 04:00",
  },
  {
    Event: "LAN Party",
    Venue: 6164,
    Date: "28/10/2023",
    Time: "00:00 to 05:00",
  },
  {
    Event: "Night's Watch",
    Venue: "FD3 Terrace",
    Date: "28/10/2023",
    Time: "00:00 to 07:00",
  },
  {
    Event: "Tree of Gratitude",
    Venue: "FD2 Entry",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Galleria",
    Venue: 2203,
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Bokeh",
    Venue: 2204,
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Guessflix",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Anime Photobooth",
    Venue: "MLawns",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Hypercut",
    Venue: "Online",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Pixel",
    Venue: "Online",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Capture Oasis",
    Venue: "Online",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "AR Game",
    Venue: "Online",
    Date: "28/10/2023",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Fiesta de Neon",
    Venue: "SAC",
    Date: "28/10/2023",
    Time: "01:00 to 04:00",
  },
  {
    Event: "Movie Screening (Hindi)",
    Venue: "NAB Audi",
    Date: "28/10/2023",
    Time: "01:30 to 04:30",
  },
  {
    Event: "Flash Mob + Open DJ",
    Venue: "Rotunda",
    Date: "28/10/2023",
    Time: "02:00 to 04:00",
  },
  {
    Event: "Techno Listening Room",
    Venue: 2201,
    Date: "28/10/2023",
    Time: "03:00 to 06:00",
  },
  {
    Event: "Desert Duels Elims",
    Venue: 1201,
    Date: "28/10/2023",
    Time: "06:00 to 09:00",
  },
  {
    Event: "Film Festival Inauguration",
    Venue: "Main Audi",
    Date: "28/10/2023",
    Time: "10:00 to 12:30",
  },
  {
    Event: "Solar Cooked Food",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "10:00 to 15:00",
  },
  {
    Event: "Andholika Prelims",
    Venue: "Music Club Room",
    Date: "28/10/2023",
    Time: "10:00 to 16:00",
  },
  {
    Event: "Drum Duels Prelims",
    Venue: "SAC6 (Gurukul Room)",
    Date: "28/10/2023",
    Time: "10:30 to 13:30",
  },
  {
    Event: "Dyuta",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "11:00 to 17:00",
  },
  {
    Event: "Shop for a Smile",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "11:00 to 19:30",
  },
  {
    Event: "F1 Simulator",
    Venue: "MLawns",
    Date: "28/10/2023",
    Time: "11:00 to 23:59",
  },
  {
    Event: "Canvas Street",
    Venue: "FD2 Entry",
    Date: "28/10/2023",
    Time: "11:30 to 15:30",
  },
  {
    Event: "Anime Quiz",
    Venue: 6164,
    Date: "28/10/2023",
    Time: "12:00 to 17:00",
  },
  {
    Event: "Anchor Stall",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse",
    Venue: "MLawns",
    Date: "28/10/2023",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse",
    Venue: "Online",
    Date: "28/10/2023",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Alum Talk",
    Venue: 6109,
    Date: "28/10/2023",
    Time: "13:00 to 15:00",
  },
  {
    Event: "Movie Screening with Guest",
    Venue: "NAB Audi",
    Date: "28/10/2023",
    Time: "13:00 to 16:30",
  },
  {
    Event: "Choreo",
    Venue: "Main Audi",
    Date: "28/10/2023",
    Time: "13:00 to 16:30",
  },
  {
    Event: "Game of Life",
    Venue: 1202,
    Date: "28/10/2023",
    Time: "13:00 to 17:30",
  },
  {
    Event: "Zulfien",
    Venue: "MLawns",
    Date: "28/10/2023",
    Time: "14:00 to 17:00",
  },
  {
    Event: "Improv Comedy",
    Venue: 6101,
    Date: "28/10/2023",
    Time: "15:00 to 18:00",
  },
  {
    Event: "Energy Bingo",
    Venue: 6105,
    Date: "28/10/2023",
    Time: "15:00 to 18:00",
  },
  {
    Event: "Cinema & Literature Quiz",
    Venue: 6156,
    Date: "28/10/2023",
    Time: "15:00 to 18:00",
  },
  {
    Event: "Razzmatazz Elims",
    Venue: "SAC Hall",
    Date: "28/10/2023",
    Time: "15:00 to 18:00",
  },
  {
    Event: "BLAB Prelims",
    Venue: 5105,
    Date: "28/10/2023",
    Time: "15:00 to 19:00",
  },
  {
    Event: "High on Helium",
    Venue: "VK Lawns",
    Date: "28/10/2023",
    Time: "15:00 to 19:00",
  },
  {
    Event: "Pottery + Period Pain Simulator",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "15:00 to 20:00",
  },
  {
    Event: "AdMad Round 1",
    Venue: 6109,
    Date: "28/10/2023",
    Time: "15:30 to 17:30",
  },
  {
    Event: "Axetacy Prelims",
    Venue: "SAC6 (Gurukul Room)",
    Date: "28/10/2023",
    Time: "16:00 to 19:00",
  },
  {
    Event: "Cyclotron",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "16:00 to 19:00",
  },
  {
    Event: "FashP",
    Venue: "Rotunda",
    Date: "28/10/2023",
    Time: "16:00 to 19:30",
  },
  {
    Event: "Stall",
    Venue: "Nirmaan",
    Date: "28/10/2023",
    Time: "16:00 to 23:59",
  },
  {
    Event: "Panel Discussion",
    Venue: "Main Audi",
    Date: "28/10/2023",
    Time: "17:00 to 19:00",
  },
  {
    Event: "Quizzar",
    Venue: 6163,
    Date: "28/10/2023",
    Time: "17:00 to 19:00",
  },
  {
    Event: "Open Mic",
    Venue: "VK Lawns",
    Date: "28/10/2023",
    Time: "17:00 to 19:00",
  },
  {
    Event: "Comedy Show",
    Venue: "NAB Audi",
    Date: "28/10/2023",
    Time: "17:00 to 19:30",
  },
  {
    Event: "VR Stall",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "17:00 to 23:59",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "28/10/2023",
    Time: "17:00 to 23:59",
  },
  {
    Event: "Unplugged",
    Venue: "VK Lawns",
    Date: "28/10/2023",
    Time: "18:00 to 19:00",
  },
  {
    Event: "Prof Show",
    Venue: "South Park",
    Date: "28/10/2023",
    Time: "20:00 to 23:59",
  },
  {
    Event: "VR stall ",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "Adventure zone",
    Venue: "S Lawns",
    Date: "29/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "India Quiz",
    Venue: 6109,
    Date: "29/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse ",
    Venue: "M Lawns",
    Date: "29/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "F1 Simulator",
    Venue: "M Lawns",
    Date: "29/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse",
    Venue: "Online",
    Date: "29/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "LAN Party",
    Venue: 6164,
    Date: "29/10/23",
    Time: "00:00 to 05:00",
  },
  {
    Event: "Casino Night",
    Venue: "SAC Hall",
    Date: "29/10/23",
    Time: "00:00 to 05:00",
  },
  {
    Event: "Tree of Gratitude ",
    Venue: "FD2 Parking/Entry",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Galleria ",
    Venue: 2203,
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Bokeh ",
    Venue: 2204,
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Guessflix",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Anime Photobooth",
    Venue: "M Lawns",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Hypercut ",
    Venue: "Online",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Pixel",
    Venue: "Online",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Capture Oasis",
    Venue: "Online",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "AR Game",
    Venue: "Online",
    Date: "29/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Street dance ",
    Venue: "Rotunda",
    Date: "29/10/23",
    Time: "01:30 to 05:00",
  },
  {
    Event: "Pride Trivia Quiz",
    Venue: 6163,
    Date: "29/10/23",
    Time: "02:00 to 03:00",
  },
  {
    Event: "Drum Duels ",
    Venue: "NAB audi",
    Date: "29/10/23",
    Time: "05:30 to 07:30",
  },
  {
    Event: "Axetacy ",
    Venue: "NaB audi",
    Date: "29/10/23",
    Time: "08:00 to 10:00",
  },
  {
    Event: "Swaranjali Solo",
    Venue: "Music Room(NAB)",
    Date: "29/10/23",
    Time: "09:00 to 17:00",
  },
  {
    Event: "Everyone dies",
    Venue: 6163,
    Date: "29/10/23",
    Time: "09:00 to 17:00",
  },
  {
    Event: "Solar Cooked food",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "10:00 to 15:00",
  },
  {
    Event: "Stage Play Day 1",
    Venue: "Main Audi",
    Date: "29/10/23",
    Time: "10:00 to 15:30",
  },
  {
    Event: "Andholika Prelims",
    Venue: "Music Club Room",
    Date: "29/10/23",
    Time: "10:00 to 16:00",
  },
  {
    Event: "Swaranjali Group",
    Venue: "Sac Hall",
    Date: "29/10/23",
    Time: "10:00 to 18:00",
  },
  {
    Event: "Movie Screening with director",
    Venue: "NAB Audi",
    Date: "29/10/23",
    Time: "10:30 to 13:00",
  },
  {
    Event: "Chakravarti",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "11:00 to 17:00",
  },
  {
    Event: "Shop for a smile",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "11:00 to 19:30",
  },
  {
    Event: "F1 Simulator",
    Venue: "M Lawns",
    Date: "29/10/23",
    Time: "11:00 to 23:59",
  },
  {
    Event: "ESPOIR Gameroom",
    Venue: 6164,
    Date: "29/10/23",
    Time: "12:00 to 18:00",
  },
  {
    Event: "Anchor Strall",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse",
    Venue: "M Lawns",
    Date: "29/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse",
    Venue: "Online",
    Date: "29/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Game of Life",
    Venue: 1202,
    Date: "29/10/23",
    Time: "13:00 to 17:00",
  },
  {
    Event: "Purple Prose ",
    Venue: "NAB audi",
    Date: "29/10/23",
    Time: "13:30 to  16:30",
  },
  {
    Event: "Pun Wars",
    Venue: 6101,
    Date: "29/10/23",
    Time: "14:00 to 17:00",
  },
  {
    Event: "Enegy Bingo",
    Venue: 6105,
    Date: "29/10/23",
    Time: "15:00 to 18:00",
  },
  {
    Event: "BLAB Finals",
    Venue: 6109,
    Date: "29/10/23",
    Time: "15:00 to 18:00",
  },
  {
    Event: "Filmy Muqabla ",
    Venue: 1201,
    Date: "29/10/23",
    Time: "15:00 to 19:00",
  },
  {
    Event: "Pottery + Period Pain Simulator",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "15:00 to 20:00",
  },
  {
    Event: "Adventure zone",
    Venue: "S Lawns",
    Date: "29/10/23",
    Time: "15:00 to 23:59",
  },
  {
    Event: "Wing Wars",
    Venue: "SAC",
    Date: "29/10/23",
    Time: "15:30 to 17:30",
  },
  {
    Event: "Splash",
    Venue: "Rotunda",
    Date: "29/10/23",
    Time: "15:30 to 19:00",
  },
  {
    Event: "Cyclotron",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "16:00 to 19:00",
  },
  {
    Event: "Classical prof Show",
    Venue: "Main audi",
    Date: "29/10/23",
    Time: "16:00 to 19:30",
  },
  {
    Event: "Stall- nirmaan",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "16:00 to 23:59",
  },
  {
    Event: "Pitch perfect ",
    Venue: "NAB Audi",
    Date: "29/10/23",
    Time: "17:00 to 19:00",
  },
  {
    Event: "VR stall ",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "17:00 to 23:59",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "29/10/23",
    Time: "17:00 to 23:59",
  },
  {
    Event: "Prof Show",
    Venue: "South Park",
    Date: "29/10/23",
    Time: "20:00 to 23:59",
  },
  {
    Event: "Scontro",
    Venue: "M lawns",
    Date: "30/10/23",
    Time: "00:00 to 02:30",
  },
  {
    Event: "VR stall ",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "Adventure zone",
    Venue: "S Lawns",
    Date: "30/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "EQ",
    Venue: 6109,
    Date: "30/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse ",
    Venue: "M Lawns",
    Date: "30/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "F1 Simulator",
    Venue: "M Lawns",
    Date: "30/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse",
    Venue: "Online",
    Date: "30/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "LAN Party",
    Venue: 6164,
    Date: "30/10/23",
    Time: "00:00 to 05:00",
  },
  {
    Event: "Prom Night",
    Venue: "SAC",
    Date: "31/10/23",
    Time: "00:00 to 06:00",
  },
  {
    Event: "Tree of Gratitude ",
    Venue: "FD2 Parking/Entry",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Galleria ",
    Venue: 2203,
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Bokeh ",
    Venue: 2204,
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Guessflix",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Anime Photobooth",
    Venue: "M Lawns",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Hypercut ",
    Venue: "Online",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Pixel",
    Venue: "Online",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Capture Oasis",
    Venue: "Online",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "AR Game",
    Venue: "Online",
    Date: "30/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Tarang",
    Venue: "Main Audi",
    Date: "30/10/23",
    Time: "01:00 to 07:30",
  },
  {
    Event: "Movie Screening(English)",
    Venue: "Nab Audi",
    Date: "30/10/23",
    Time: "01:30 to 04:00",
  },
  {
    Event: "F1 Screening",
    Venue: "FD2 QT",
    Date: "30/10/23",
    Time: "01:30 to 04:30",
  },
  {
    Event: "Desert Duel Finals",
    Venue: "Rotunda",
    Date: "30/10/23",
    Time: "01:30 to 06:00",
  },
  {
    Event: "Stage Play Day 2",
    Venue: "Main Audi",
    Date: "30/10/23",
    Time: "08:00 to 12:30",
  },
  {
    Event: "Tandav Solo ",
    Venue: "LTC QT",
    Date: "30/10/23",
    Time: "09:00 to 05:00",
  },
  {
    Event: "Tandav Group",
    Venue: "SAC Hall",
    Date: "30/10/23",
    Time: "09:00 to 05:00",
  },
  {
    Event: "Bluffmaster",
    Venue: 6102,
    Date: "30/10/23",
    Time: "11:00 to 15:30",
  },
  {
    Event: "Shop for a smile",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "11:00 to 17:30",
  },
  {
    Event: "F1 Simulator",
    Venue: "M Lawns ",
    Date: "30/10/23",
    Time: "11:00 to 23:59",
  },
  {
    Event: "Print your own cyanotype",
    Venue: "Rotunda",
    Date: "30/10/23",
    Time: "12:00 to 17:30",
  },
  {
    Event: "Anchor Stall",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse",
    Venue: "M Lawns ",
    Date: "30/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse ",
    Venue: "Online",
    Date: "30/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Metamorphosis",
    Venue: "NAB Audi",
    Date: "30/10/23",
    Time: "12:30 to 14:30",
  },
  {
    Event: "Street play",
    Venue: "FD2 QT",
    Date: "30/10/23",
    Time: "13:00 to 17:00",
  },
  {
    Event: "Razzmataaz Finals",
    Venue: "Main Audi",
    Date: "30/10/23",
    Time: "14:00 to 16:30",
  },
  {
    Event: "Conspiring Minds",
    Venue: 1201,
    Date: "30/10/23",
    Time: "14:00 to 17:00",
  },
  {
    Event: "AdMad Round 2",
    Venue: 6151,
    Date: "30/10/23",
    Time: "15:00 to 17:00",
  },
  {
    Event: "Sukhmanch Stage Play",
    Venue: "Nab Audi",
    Date: "30/10/23",
    Time: "15:00 to 19:00",
  },
  {
    Event: "Wordstock",
    Venue: 6105,
    Date: "30/10/23",
    Time: "15:00 to 19:00",
  },
  {
    Event: "Pottery + Period Pain simulator",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "15:00 to 20:00",
  },
  {
    Event: "Adventure zone",
    Venue: "S Lawns",
    Date: "30/10/23",
    Time: "15:00 to 23:59",
  },
  {
    Event: "F1 Quiz",
    Venue: 6164,
    Date: "30/10/23",
    Time: "16:00 to 19:00",
  },
  {
    Event: "Stall-Nirmaan",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "16:00 to 23:59",
  },
  {
    Event: "FreeJam ",
    Venue: "VK Lawns",
    Date: "30/10/23",
    Time: "16:00 to 23:59",
  },
  {
    Event: "Pride March ",
    Venue: "NAB",
    Date: "30/10/23",
    Time: "16:30 to 17:30",
  },
  {
    Event: "VR stall ",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "17:00 to 23:59",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "30/10/23",
    Time: "17:00 to 23:59",
  },
  {
    Event: "Prof Show",
    Venue: "South Park",
    Date: "30/10/23",
    Time: "20:00 to 23:59",
  },
  {
    Event: "VR stall ",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "Adventure zone",
    Venue: "S Lawns",
    Date: "31/10/23",
    Time: "00:00 to 03:00",
  },
  {
    Event: "Oasis Quiz",
    Venue: 6109,
    Date: "31/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse ",
    Venue: "M Lawns",
    Date: "31/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "F1 Simulator",
    Venue: "M Lawns",
    Date: "31/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "FreeJam",
    Venue: "VK Lawns",
    Date: "31/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "Eclipse",
    Venue: "Online",
    Date: "31/10/23",
    Time: "00:00 to 04:00",
  },
  {
    Event: "LAN Party",
    Venue: 6164,
    Date: "31/10/23",
    Time: "00:00 to 05:00",
  },
  {
    Event: "Treasure Hunt ",
    Venue: "FD 2 QT",
    Date: "31/10/23",
    Time: "00:00 to 06:00",
  },
  {
    Event: "Tree of Gratitude ",
    Venue: "FD2 Parking/Entry",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Galleria ",
    Venue: 2203,
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Bokeh ",
    Venue: 2204,
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Guessflix",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Anime Photobooth",
    Venue: "M Lawns",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Hypercut ",
    Venue: "Online",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Pixel",
    Venue: "Online",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Capture Oasis",
    Venue: "Online",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "AR Game",
    Venue: "Online",
    Date: "31/10/23",
    Time: "00:00 to 23:59",
  },
  {
    Event: "Rap Wars",
    Venue: "Rotunda",
    Date: "31/10/23",
    Time: "01:30 to 04:00",
  },
  {
    Event: "Rocktaves",
    Venue: "Main Audi",
    Date: "31/10/23",
    Time: "01:30 to 08:00",
  },
  {
    Event: "Escape room",
    Venue: 1201,
    Date: "31/10/23",
    Time: "11:00 to 17:00",
  },
  {
    Event: "Shop for a Smile",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "11:00 to 19:30",
  },
  {
    Event: "F1 Simulator",
    Venue: "M Lawns",
    Date: "31/10/23",
    Time: "11:00 to 23:59",
  },
  {
    Event: "Anchor Stall",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse",
    Venue: "M Lawns ",
    Date: "31/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "Eclipse ",
    Venue: "Online",
    Date: "31/10/23",
    Time: "12:00 to 23:59",
  },
  {
    Event: "RealPolitik",
    Venue: "6164",
    Date: "31/10/23",
    Time: "13:30 to 14:30",
  },
  {
    Event: "RealPolitik",
    Venue: "6163",
    Date: "31/10/23",
    Time: "13:30 to 17:00",
  },
  {
    Event: "Beg Borrow Steal",
    Venue: "Rotunda",
    Date: "31/10/23",
    Time: "14:00 to 18:30",
  },
  {
    Event: "Chaupal",
    Venue: "NAB Audi",
    Date: "31/10/23",
    Time: "15:00 to 18:30",
  },
  {
    Event: "Pottery + Period Pain Simulator",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "15:00 to 19:30",
  },
  {
    Event: "Adventure zone",
    Venue: "S lawns",
    Date: "31/10/23",
    Time: "15:00 to 23:59",
  },
  {
    Event: "Andholika Finals",
    Venue: "FD 2 QT",
    Date: "31/10/23",
    Time: "16:00 to 18:00",
  },
  {
    Event: "Stall - Nirmaan",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "16:00 to 23:59",
  },
  {
    Event: "VR stall ",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "17:00 to 23:59",
  },
  {
    Event: "AI Generated Imagery",
    Venue: "Krishna Parking",
    Date: "31/10/23",
    Time: "17:00 to 23:59",
  },
  {
    Event: "Standup Soap Box",
    Venue: "Main Audi",
    Date: "31/10/23",
    Time: "18:00 to 19:00",
  },
  {
    Event: "N2O",
    Venue: "Main audi",
    Date: "31/10/23",
    Time: "19:00 to 22:00",
  },
];

for (let i = 0; i < events.length; i++) {
  if (typeof events[i].Venue !== "string") {
    events[i].Venue = JSON.stringify(events[i].Venue);
  }
}

console.log(events);
