export interface Vocabulary {
    id: number;
    word: string;
    meaning: string;
    pronunciation: string;
    level: number;
    examples: { sentence: string; translation: string }[];
}

export const vocabularyList: Vocabulary[] = [
    // Level 1: Basics
    {
        id: 1,
        word: "Apple",
        meaning: "사과",
        pronunciation: "ˈæp.l",
        level: 1,
        examples: [
            { sentence: "I eat an apple every morning.", translation: "나는 매일 아침 사과를 먹는다." },
            { sentence: "This apple is very sweet.", translation: "이 사과는 매우 달다." }
        ]
    },
    {
        id: 2,
        word: "Book",
        meaning: "책",
        pronunciation: "bʊk",
        level: 1,
        examples: [
            { sentence: "I am reading a book.", translation: "나는 책을 읽고 있다." },
            { sentence: "Close your book, please.", translation: "책을 덮어주세요." }
        ]
    },
    {
        id: 3,
        word: "Cat",
        meaning: "고양이",
        pronunciation: "kæt",
        level: 1,
        examples: [
            { sentence: "The cat is sleeping on the sofa.", translation: "고양이가 소파 위에서 자고 있다." },
            { sentence: "I have a cute cat.", translation: "나는 귀여운 고양이를 키운다." }
        ]
    },
    {
        id: 4,
        word: "Dog",
        meaning: "개",
        pronunciation: "dɒɡ",
        level: 1,
        examples: [
            { sentence: "My dog loves to run.", translation: "내 개는 달리는 것을 좋아한다." },
            { sentence: "The dog barked at the stranger.", translation: "그 개는 낯선 사람에게 짖었다." }
        ]
    },
    {
        id: 5,
        word: "Water",
        meaning: "물",
        pronunciation: "ˈwɔː.tər",
        level: 1,
        examples: [
            { sentence: "Can I have some water?", translation: "물 좀 주시겠어요?" },
            { sentence: "Plants need water to grow.", translation: "식물은 자라기 위해 물이 필요하다." }
        ]
    },
    {
        id: 6,
        word: "School",
        meaning: "학교",
        pronunciation: "skuːl",
        level: 1,
        examples: [
            { sentence: "I go to school by bus.", translation: "나는 버스를 타고 학교에 간다." },
            { sentence: "School starts at 9 AM.", translation: "학교는 오전 9시에 시작한다." }
        ]
    },
    {
        id: 7,
        word: "Friend",
        meaning: "친구",
        pronunciation: "frend",
        level: 1,
        examples: [
            { sentence: "She is my best friend.", translation: "그녀는 나의 가장 친한 친구다." },
            { sentence: "I met a new friend today.", translation: "나는 오늘 새로운 친구를 만났다." }
        ]
    },
    {
        id: 8,
        word: "Happy",
        meaning: "행복한",
        pronunciation: "ˈhæp.i",
        level: 1,
        examples: [
            { sentence: "I am very happy today.", translation: "나는 오늘 매우 행복하다." },
            { sentence: "Happy birthday to you!", translation: "생일 축하해!" }
        ]
    },
    {
        id: 9,
        word: "Sun",
        meaning: "태양",
        pronunciation: "sʌn",
        level: 1,
        examples: [
            { sentence: "The sun rises in the east.", translation: "태양은 동쪽에서 뜬다." },
            { sentence: "The sun is very hot today.", translation: "오늘 태양이 매우 뜨겁다." }
        ]
    },
    {
        id: 10,
        word: "Moon",
        meaning: "달",
        pronunciation: "muːn",
        level: 1,
        examples: [
            { sentence: "Look at the full moon.", translation: "저 보름달을 봐." },
            { sentence: "The moon shines at night.", translation: "달은 밤에 빛난다." }
        ]
    },

    {
        id: 101,
        word: "Family",
        meaning: "가족",
        pronunciation: "ˈfæm.əl.i",
        level: 1,
        examples: [
            { sentence: "I love my family.", translation: "나는 내 가족을 사랑한다." },
            { sentence: "My family is big.", translation: "내 가족은 대가족이다." }
        ]
    },
    {
        id: 102,
        word: "House",
        meaning: "집",
        pronunciation: "haʊs",
        level: 1,
        examples: [
            { sentence: "This is my house.", translation: "이것은 나의 집이다." },
            { sentence: "The house is white.", translation: "그 집은 하얀색이다." }
        ]
    },
    {
        id: 103,
        word: "Car",
        meaning: "자동차",
        pronunciation: "kɑːr",
        level: 1,
        examples: [
            { sentence: "He drives a car.", translation: "그는 자동차를 운전한다." },
            { sentence: "My car is red.", translation: "내 차는 빨간색이다." }
        ]
    },
    {
        id: 104,
        word: "Tree",
        meaning: "나무",
        pronunciation: "triː",
        level: 1,
        examples: [
            { sentence: "The tree is tall.", translation: "그 나무는 키가 크다." },
            { sentence: "Birds sit on the tree.", translation: "새들이 나무 위에 앉아 있다." }
        ]
    },
    {
        id: 105,
        word: "Flower",
        meaning: "꽃",
        pronunciation: "ˈflaʊ.ər",
        level: 1,
        examples: [
            { sentence: "The flower smells good.", translation: "꽃 향기가 좋다." },
            { sentence: "She likes flowers.", translation: "그녀는 꽃을 좋아한다." }
        ]
    },
    {
        id: 106,
        word: "Food",
        meaning: "음식",
        pronunciation: "fuːd",
        level: 1,
        examples: [
            { sentence: "The food is delicious.", translation: "음식이 맛있다." },
            { sentence: "We need food to live.", translation: "우리는 살기 위해 음식이 필요하다." }
        ]
    },
    {
        id: 107,
        word: "Milk",
        meaning: "우유",
        pronunciation: "mɪlk",
        level: 1,
        examples: [
            { sentence: "I drink milk.", translation: "나는 우유를 마신다." },
            { sentence: "Milk is white.", translation: "우유는 하얗다." }
        ]
    },
    {
        id: 108,
        word: "Bread",
        meaning: "빵",
        pronunciation: "bred",
        level: 1,
        examples: [
            { sentence: "Do you like bread?", translation: "너는 빵을 좋아하니?" },
            { sentence: "I eat bread for breakfast.", translation: "나는 아침으로 빵을 먹는다." }
        ]
    },
    {
        id: 109,
        word: "Money",
        meaning: "돈",
        pronunciation: "ˈmʌn.i",
        level: 1,
        examples: [
            { sentence: "I need some money.", translation: "나는 돈이 좀 필요하다." },
            { sentence: "Money cannot buy happiness.", translation: "돈으로 행복을 살 수 없다." }
        ]
    },
    {
        id: 110,
        word: "Time",
        meaning: "시간",
        pronunciation: "taɪm",
        level: 1,
        examples: [
            { sentence: "What time is it?", translation: "몇 시입니까?" },
            { sentence: "Time flies.", translation: "시간은 빠르게 흐른다." }
        ]
    },
    {
        id: 111,
        word: "Day",
        meaning: "하루/낮",
        pronunciation: "deɪ",
        level: 1,
        examples: [
            { sentence: "Have a nice day.", translation: "좋은 하루 되세요." },
            { sentence: "The day is bright.", translation: "낮이 밝다." }
        ]
    },
    {
        id: 112,
        word: "Night",
        meaning: "밤",
        pronunciation: "naɪt",
        level: 1,
        examples: [
            { sentence: "Good night.", translation: "안녕히 주무세요." },
            { sentence: "Stars shine at night.", translation: "별들은 밤에 빛난다." }
        ]
    },
    {
        id: 113,
        word: "Hand",
        meaning: "손",
        pronunciation: "hænd",
        level: 1,
        examples: [
            { sentence: "Wash your hands.", translation: "손을 씻어라." },
            { sentence: "Give me your hand.", translation: "손을 이리 줘." }
        ]
    },
    {
        id: 114,
        word: "Eye",
        meaning: "눈",
        pronunciation: "aɪ",
        level: 1,
        examples: [
            { sentence: "Close your eyes.", translation: "눈을 감으세요." },
            { sentence: "She has blue eyes.", translation: "그녀는 파란 눈을 가졌다." }
        ]
    },
    {
        id: 115,
        word: "Love",
        meaning: "사랑",
        pronunciation: "lʌv",
        level: 1,
        examples: [
            { sentence: "I love you.", translation: "나는 너를 사랑해." },
            { sentence: "Love is powerful.", translation: "사랑은 강력하다." }
        ]
    },
    {
        id: 116,
        word: "Work",
        meaning: "일",
        pronunciation: "wɜːk",
        level: 1,
        examples: [
            { sentence: "I go to work.", translation: "나는 일하러 간다." },
            { sentence: "He works hard.", translation: "그는 열심히 일한다." }
        ]
    },
    {
        id: 117,
        word: "Study",
        meaning: "공부하다",
        pronunciation: "ˈstʌd.i",
        level: 1,
        examples: [
            { sentence: "I study English.", translation: "나는 영어를 공부한다." },
            { sentence: "We study together.", translation: "우리는 함께 공부한다." }
        ]
    },
    {
        id: 118,
        word: "Play",
        meaning: "놀다/연주하다",
        pronunciation: "pleɪ",
        level: 1,
        examples: [
            { sentence: "Let's play outside.", translation: "밖에서 놀자." },
            { sentence: "She plays the piano.", translation: "그녀는 피아노를 연주한다." }
        ]
    },
    {
        id: 119,
        word: "Music",
        meaning: "음악",
        pronunciation: "ˈmjuː.zɪk",
        level: 1,
        examples: [
            { sentence: "I like music.", translation: "나는 음악을 좋아한다." },
            { sentence: "The music is loud.", translation: "음악이 시끄럽다." }
        ]
    },
    {
        id: 120,
        word: "Movie",
        meaning: "영화",
        pronunciation: "ˈmuː.vi",
        level: 1,
        examples: [
            { sentence: "Let's watch a movie.", translation: "영화 보자." },
            { sentence: "It was a sad movie.", translation: "슬픈 영화였다." }
        ]
    },
    {
        id: 121,
        word: "City",
        meaning: "도시",
        pronunciation: "ˈsɪt.i",
        level: 1,
        examples: [
            { sentence: "Before I lived in a city.", translation: "예전에 나는 도시에 살았다." },
            { sentence: "The city lights are bright.", translation: "도시의 불빛이 밝다." }
        ]
    },
    {
        id: 122,
        word: "Road",
        meaning: "길",
        pronunciation: "rəʊd",
        level: 1,
        examples: [
            { sentence: "Cross the road carefully.", translation: "길을 조심해서 건너라." },
            { sentence: "The road is long.", translation: "길이 멀다." }
        ]
    },
    {
        id: 123,
        word: "Bus",
        meaning: "버스",
        pronunciation: "bʌs",
        level: 1,
        examples: [
            { sentence: "Wait for the bus.", translation: "버스를 기다려라." },
            { sentence: "The bus is late.", translation: "버스가 늦었다." }
        ]
    },
    {
        id: 124,
        word: "Train",
        meaning: "기차",
        pronunciation: "treɪn",
        level: 1,
        examples: [
            { sentence: "We took a train.", translation: "우리는 기차를 탔다." },
            { sentence: "The train is fast.", translation: "그 기차는 빠르다." }
        ]
    },
    {
        id: 125,
        word: "Room",
        meaning: "방",
        pronunciation: "ruːm",
        level: 1,
        examples: [
            { sentence: "Clean your room.", translation: "방을 청소해라." },
            { sentence: "My room is small.", translation: "내 방은 작다." }
        ]
    },
    {
        id: 126,
        word: "Bed",
        meaning: "침대",
        pronunciation: "bed",
        level: 1,
        examples: [
            { sentence: "I am going to bed.", translation: "나는 자러 간다." },
            { sentence: "The bed is soft.", translation: "침대가 푹신하다." }
        ]
    },
    {
        id: 127,
        word: "Chair",
        meaning: "의자",
        pronunciation: "tʃeər",
        level: 1,
        examples: [
            { sentence: "Sit on the chair.", translation: "의자에 앉아라." },
            { sentence: "This chair is broken.", translation: "이 의자는 부서졌다." }
        ]
    },
    {
        id: 128,
        word: "Table",
        meaning: "탁자",
        pronunciation: "ˈteɪ.bəl",
        level: 1,
        examples: [
            { sentence: "Put it on the table.", translation: "탁자 위에 올려둬." },
            { sentence: "We sat around the table.", translation: "우리는 탁자 둘레에 앉았다." }
        ]
    },
    {
        id: 129,
        word: "Phone",
        meaning: "전화",
        pronunciation: "fəʊn",
        level: 1,
        examples: [
            { sentence: "Answer the phone.", translation: "전화 받아." },
            { sentence: "Where is my phone?", translation: "내 전화기 어디 있어?" }
        ]
    },
    {
        id: 130,
        word: "Paper",
        meaning: "종이",
        pronunciation: "ˈpeɪ.pər",
        level: 1,
        examples: [
            { sentence: "I need a piece of paper.", translation: "종이 한 장이 필요해." },
            { sentence: "Paper burns easily.", translation: "종이는 쉽게 탄다." }
        ]
    },
    {
        id: 131,
        word: "Pen",
        meaning: "펜",
        pronunciation: "pen",
        level: 1,
        examples: [
            { sentence: "Can I borrow a pen?", translation: "펜 좀 빌릴 수 있을까?" },
            { sentence: "Write with a pen.", translation: "펜으로 써라." }
        ]
    },
    {
        id: 132,
        word: "Bag",
        meaning: "가방",
        pronunciation: "bæɡ",
        level: 1,
        examples: [
            { sentence: "He carries a bag.", translation: "그는 가방을 들고 다닌다." },
            { sentence: "The bag is heavy.", translation: "가방이 무겁다." }
        ]
    },
    {
        id: 133,
        word: "Shoe",
        meaning: "신발",
        pronunciation: "ʃuː",
        level: 1,
        examples: [
            { sentence: "Tie your shoes.", translation: "신발 끈을 묶어라." },
            { sentence: "I bought new shoes.", translation: "나는 새 신발을 샀다." }
        ]
    },
    {
        id: 134,
        word: "Door",
        meaning: "문",
        pronunciation: "dɔːr",
        level: 1,
        examples: [
            { sentence: "Open the door.", translation: "문을 열어라." },
            { sentence: "Lock the door.", translation: "문을 잠가라." }
        ]
    },
    {
        id: 135,
        word: "Window",
        meaning: "창문",
        pronunciation: "ˈwɪn.dəʊ",
        level: 1,
        examples: [
            { sentence: "Look out the window.", translation: "창밖을 봐." },
            { sentence: "Close the window.", translation: "창문을 닫아라." }
        ]
    },
    {
        id: 136,
        word: "Sky",
        meaning: "하늘",
        pronunciation: "skaɪ",
        level: 1,
        examples: [
            { sentence: "The sky is blue.", translation: "하늘이 파랗다." },
            { sentence: "Look at the sky.", translation: "하늘을 봐." }
        ]
    },
    {
        id: 137,
        word: "Rain",
        meaning: "비",
        pronunciation: "reɪn",
        level: 1,
        examples: [
            { sentence: "It looks like rain.", translation: "비가 올 것 같다." },
            { sentence: "I like the rain.", translation: "나는 비를 좋아한다." }
        ]
    },
    {
        id: 138,
        word: "Snow",
        meaning: "눈",
        pronunciation: "snəʊ",
        level: 1,
        examples: [
            { sentence: "Snow is falling.", translation: "눈이 내리고 있다." },
            { sentence: "Do you like snow?", translation: "눈을 좋아하니?" }
        ]
    },
    {
        id: 139,
        word: "Wind",
        meaning: "바람",
        pronunciation: "wɪnd",
        level: 1,
        examples: [
            { sentence: "The wind is blowing.", translation: "바람이 불고 있다." },
            { sentence: "A cold wind.", translation: "찬 바람." }
        ]
    },
    {
        id: 140,
        word: "Bird",
        meaning: "새",
        pronunciation: "bɜːd",
        level: 1,
        examples: [
            { sentence: "A bird is singing.", translation: "새가 노래하고 있다." },
            { sentence: "Birds can fly.", translation: "새는 날 수 있다." }
        ]
    },
    {
        id: 141,
        word: "Fish",
        meaning: "물고기",
        pronunciation: "fɪʃ",
        level: 1,
        examples: [
            { sentence: "Fish live in water.", translation: "물고기는 물에 산다." },
            { sentence: "I caught a fish.", translation: "나는 물고기를 잡았다." }
        ]
    },
    {
        id: 142,
        word: "Mother",
        meaning: "어머니",
        pronunciation: "ˈmʌd.ər",
        level: 1,
        examples: [
            { sentence: "My mother is kind.", translation: "나의 어머니는 친절하시다." },
            { sentence: "I helped my mother.", translation: "나는 어머니를 도왔다." }
        ]
    },
    {
        id: 143,
        word: "Father",
        meaning: "아버지",
        pronunciation: "ˈfɑː.dər",
        level: 1,
        examples: [
            { sentence: "My father is tall.", translation: "나의 아버지는 키가 크시다." },
            { sentence: "Ask your father.", translation: "아버지께 여쭤봐." }
        ]
    },
    {
        id: 144,
        word: "Sister",
        meaning: "자매",
        pronunciation: "ˈsɪs.tər",
        level: 1,
        examples: [
            { sentence: "She is my sister.", translation: "그녀는 내 여동생이다." },
            { sentence: "I have two sisters.", translation: "나는 두 자매가 있다." }
        ]
    },
    {
        id: 145,
        word: "Brother",
        meaning: "형제",
        pronunciation: "ˈbrʌd.ər",
        level: 1,
        examples: [
            { sentence: "He is my brother.", translation: "그는 내 형이다." },
            { sentence: "Play with your brother.", translation: "형제랑 놀아라." }
        ]
    },
    {
        id: 146,
        word: "Boy",
        meaning: "소년",
        pronunciation: "bɔɪ",
        level: 1,
        examples: [
            { sentence: "The boy is running.", translation: "소년이 달리고 있다." },
            { sentence: "He is a good boy.", translation: "그는 착한 소년이다." }
        ]
    },
    {
        id: 147,
        word: "Girl",
        meaning: "소녀",
        pronunciation: "ɡɜːl",
        level: 1,
        examples: [
            { sentence: "The girl is reading.", translation: "소녀가 책을 읽고 있다." },
            { sentence: "She is a happy girl.", translation: "그녀는 행복한 소녀다." }
        ]
    },
    {
        id: 148,
        word: "Man",
        meaning: "남자",
        pronunciation: "mæn",
        level: 1,
        examples: [
            { sentence: "A man is waiting.", translation: "한 남자가 기다리고 있다." },
            { sentence: "He is a strong man.", translation: "그는 강한 남자다." }
        ]
    },
    {
        id: 149,
        word: "Woman",
        meaning: "여자",
        pronunciation: "ˈwʊm.ən",
        level: 1,
        examples: [
            { sentence: "A woman smiled at me.", translation: "한 여자가 나에게 미소 지었다." },
            { sentence: "She is a smart woman.", translation: "그녀는 똑똑한 여자다." }
        ]
    },
    {
        id: 150,
        word: "Child",
        meaning: "아이",
        pronunciation: "tʃaɪld",
        level: 1,
        examples: [
            { sentence: "The child is playing.", translation: "아이가 놀고 있다." },
            { sentence: "Protect the child.", translation: "아이를 보호해라." }
        ]
    },

    // Level 2: Intermediate
    {
        id: 11,
        word: "Adventure",
        meaning: "모험",
        pronunciation: "ədˈven.tʃər",
        level: 2,
        examples: [
            { sentence: "Life is a great adventure.", translation: "인생은 위대한 모험이다." },
            { sentence: "They went on an adventure.", translation: "그들은 모험을 떠났다." }
        ]
    },
    {
        id: 12,
        word: "Beautiful",
        meaning: "아름다운",
        pronunciation: "ˈbjuː.tɪ.fəl",
        level: 2,
        examples: [
            { sentence: "The flowers are beautiful.", translation: "꽃들이 아름답다." },
            { sentence: "It was a beautiful day.", translation: "아름다운 날이었다." }
        ]
    },
    {
        id: 13,
        word: "Challenge",
        meaning: "도전",
        pronunciation: "ˈtʃæl.ɪndʒ",
        level: 2,
        examples: [
            { sentence: "I like a new challenge.", translation: "나는 새로운 도전을 좋아한다." },
            { sentence: "This puzzle is a challenge.", translation: "이 퍼즐은 도전적이다." }
        ]
    },
    {
        id: 14,
        word: "Discover",
        meaning: "발견하다",
        pronunciation: "dɪˈskʌv.ər",
        level: 2,
        examples: [
            { sentence: "Columbus discovered America.", translation: "콜럼버스는 아메리카를 발견했다." },
            { sentence: "I discovered a new restaurant.", translation: "나는 새로운 식당을 발견했다." }
        ]
    },
    {
        id: 15,
        word: "Energy",
        meaning: "에너지",
        pronunciation: "ˈen.ə.dʒi",
        level: 2,
        examples: [
            { sentence: "I don't have enough energy.", translation: "나는 에너지가 충분하지 않다." },
            { sentence: "Solar energy is renewable.", translation: "태양 에너지는 재생 가능하다." }
        ]
    },
    {
        id: 16,
        word: "Future",
        meaning: "미래",
        pronunciation: "ˈfjuː.tʃər",
        level: 2,
        examples: [
            { sentence: "Think about your future.", translation: "너의 미래에 대해 생각해보라." },
            { sentence: "The future is uncertain.", translation: "미래는 불확실하다." }
        ]
    },
    {
        id: 17,
        word: "Garden",
        meaning: "정원",
        pronunciation: "ˈɡɑː.dən",
        level: 2,
        examples: [
            { sentence: "My grandmother has a garden.", translation: "우리 할머니는 정원을 가지고 계신다." },
            { sentence: "We planted flowers in the garden.", translation: "우리는 정원에 꽃을 심었다." }
        ]
    },
    {
        id: 18,
        word: "History",
        meaning: "역사",
        pronunciation: "ˈhɪs.tər.i",
        level: 2,
        examples: [
            { sentence: "I love studying history.", translation: "나는 역사 공부를 좋아한다." },
            { sentence: "This building has a long history.", translation: "이 건물은 긴 역사를 가지고 있다." }
        ]
    },
    {
        id: 19,
        word: "Important",
        meaning: "중요한",
        pronunciation: "ɪmˈpɔː.tənt",
        level: 2,
        examples: [
            { sentence: "This is an important meeting.", translation: "이것은 중요한 회의다." },
            { sentence: "Health is very important.", translation: "건강은 매우 중요하다." }
        ]
    },
    {
        id: 20,
        word: "Journey",
        meaning: "여정",
        pronunciation: "ˈdʒɜː.ni",
        level: 2,
        examples: [
            { sentence: "Enjoy the journey.", translation: "여정을 즐겨라." },
            { sentence: "The journey was long and tiring.", translation: "그 여정은 길고 피곤했다." }
        ]
    },

    {
        id: 201,
        word: "Mountain",
        meaning: "산",
        pronunciation: "ˈmaʊn.tɪn",
        level: 2,
        examples: [
            { sentence: "The mountain is high.", translation: "그 산은 높다." },
            { sentence: "We climbed a mountain.", translation: "우리는 산을 올랐다." }
        ]
    },
    {
        id: 202,
        word: "Ocean",
        meaning: "바다/대양",
        pronunciation: "ˈəʊ.ʃən",
        level: 2,
        examples: [
            { sentence: "The ocean is deep.", translation: "바다는 깊다." },
            { sentence: "I want to see the ocean.", translation: "나는 바다를 보고 싶다." }
        ]
    },
    {
        id: 203,
        word: "River",
        meaning: "강",
        pronunciation: "ˈrɪv.ər",
        level: 2,
        examples: [
            { sentence: "The river flows fast.", translation: "강물이 빠르게 흐른다." },
            { sentence: "We swam in the river.", translation: "우리는 강에서 수영했다." }
        ]
    },
    {
        id: 204,
        word: "Forest",
        meaning: "숲",
        pronunciation: "ˈfɒr.ɪst",
        level: 2,
        examples: [
            { sentence: "Animals live in the forest.", translation: "동물들은 숲에 산다." },
            { sentence: "The forest is green.", translation: "숲은 푸르다." }
        ]
    },
    {
        id: 205,
        word: "Lake",
        meaning: "호수",
        pronunciation: "leɪk",
        level: 2,
        examples: [
            { sentence: "Let's go to the lake.", translation: "호수에 가자." },
            { sentence: "The lake is calm.", translation: "호수는 고요하다." }
        ]
    },
    {
        id: 206,
        word: "Travel",
        meaning: "여행",
        pronunciation: "ˈtræv.əl",
        level: 2,
        examples: [
            { sentence: "I love to travel.", translation: "나는 여행을 좋아한다." },
            { sentence: "Travel broadens the mind.", translation: "여행은 시야를 넓혀준다." }
        ]
    },
    {
        id: 207,
        word: "Learning",
        meaning: "배움/학습",
        pronunciation: "ˈlɜː.nɪŋ",
        level: 2,
        examples: [
            { sentence: "Learning is fun.", translation: "배움은 즐겁다." },
            { sentence: "Keep learning new things.", translation: "계속 새로운 것을 배워라." }
        ]
    },
    {
        id: 208,
        word: "Dream",
        meaning: "꿈",
        pronunciation: "driːm",
        level: 2,
        examples: [
            { sentence: "I had a strange dream.", translation: "나는 이상한 꿈을 꿨다." },
            { sentence: "Follow your dreams.", translation: "너의 꿈을 쫓아라." }
        ]
    },
    {
        id: 209,
        word: "Hope",
        meaning: "희망",
        pronunciation: "həʊp",
        level: 2,
        examples: [
            { sentence: "Never lose hope.", translation: "절대 희망을 잃지 마라." },
            { sentence: "There is still hope.", translation: "아직 희망은 있다." }
        ]
    },
    {
        id: 210,
        word: "Health",
        meaning: "건강",
        pronunciation: "helθ",
        level: 2,
        examples: [
            { sentence: "Health is wealth.", translation: "건강이 재산이다." },
            { sentence: "Take care of your health.", translation: "건강을 챙겨라." }
        ]
    },
    {
        id: 211,
        word: "Peace",
        meaning: "평화",
        pronunciation: "piːs",
        level: 2,
        examples: [
            { sentence: "We want world peace.", translation: "우리는 세계 평화를 원한다." },
            { sentence: "Peace be with you.", translation: "평화가 당신과 함께 하기를." }
        ]
    },
    {
        id: 212,
        word: "Nature",
        meaning: "자연",
        pronunciation: "ˈneɪ.tʃər",
        level: 2,
        examples: [
            { sentence: "We must protect nature.", translation: "우리는 자연을 보호해야 한다." },
            { sentence: "Nature is beautiful.", translation: "자연은 아름답다." }
        ]
    },
    {
        id: 213,
        word: "Science",
        meaning: "과학",
        pronunciation: "ˈsaɪ.əns",
        level: 2,
        examples: [
            { sentence: "Science helps us understand the world.", translation: "과학은 우리가 세상을 이해하도록 돕는다." },
            { sentence: "I like science class.", translation: "나는 과학 수업을 좋아한다." }
        ]
    },
    {
        id: 214,
        word: "Space",
        meaning: "우주/공간",
        pronunciation: "speɪs",
        level: 2,
        examples: [
            { sentence: "There is no space here.", translation: "여기는 공간이 없다." },
            { sentence: "He wants to go to space.", translation: "그는 우주에 가고 싶어한다." }
        ]
    },
    {
        id: 215,
        word: "Planet",
        meaning: "행성",
        pronunciation: "ˈplæn.ɪt",
        level: 2,
        examples: [
            { sentence: "Earth is a planet.", translation: "지구는 행성이다." },
            { sentence: "We live on a blue planet.", translation: "우리는 푸른 행성에 산다." }
        ]
    },
    {
        id: 216,
        word: "Message",
        meaning: "메시지",
        pronunciation: "ˈmes.ɪdʒ",
        level: 2,
        examples: [
            { sentence: "I sent a message.", translation: "나는 메시지를 보냈다." },
            { sentence: "Did you get my message?", translation: "내 메시지 받았니?" }
        ]
    },
    {
        id: 217,
        word: "Letter",
        meaning: "편지/글자",
        pronunciation: "ˈlet.ər",
        level: 2,
        examples: [
            { sentence: "Write a letter to him.", translation: "그에게 편지를 써라." },
            { sentence: "There are 26 letters in the alphabet.", translation: "알파벳에는 26개의 글자가 있다." }
        ]
    },
    {
        id: 218,
        word: "Language",
        meaning: "언어",
        pronunciation: "ˈlæŋ.ɡwɪdʒ",
        level: 2,
        examples: [
            { sentence: "English is a global language.", translation: "영어는 세계적인 언어다." },
            { sentence: "Learning a language is hard.", translation: "언어를 배우는 것은 어렵다." }
        ]
    },
    {
        id: 219,
        word: "Culture",
        meaning: "문화",
        pronunciation: "ˈkʌl.tʃər",
        level: 2,
        examples: [
            { sentence: "Korean culture is interesting.", translation: "한국 문화는 흥미롭다." },
            { sentence: "Respect other cultures.", translation: "다른 문화를 존중해라." }
        ]
    },
    {
        id: 220,
        word: "Art",
        meaning: "예술/미술",
        pronunciation: "ɑːt",
        level: 2,
        examples: [
            { sentence: "Art is subjective.", translation: "예술은 주관적이다." },
            { sentence: "Do you like modern art?", translation: "현대 미술을 좋아하니?" }
        ]
    },
    {
        id: 221,
        word: "Music",
        meaning: "음악",
        pronunciation: "ˈmjuː.zɪk",
        level: 2,
        examples: [
            { sentence: "Music calms the soul.", translation: "음악은 영혼을 진정시킨다." },
            { sentence: "She studies music.", translation: "그녀는 음악을 공부한다." }
        ]
    },
    {
        id: 222,
        word: "Picture",
        meaning: "그림/사진",
        pronunciation: "ˈpɪk.tʃər",
        level: 2,
        examples: [
            { sentence: "Take a picture of me.", translation: "내 사진 좀 찍어줘." },
            { sentence: "Draw a picture.", translation: "그림을 그려라." }
        ]
    },
    {
        id: 223,
        word: "Camera",
        meaning: "카메라",
        pronunciation: "ˈkæm.rə",
        level: 2,
        examples: [
            { sentence: "I need a new camera.", translation: "나는 새 카메라가 필요하다." },
            { sentence: "Smile for the camera.", translation: "카메라를 보고 웃어라." }
        ]
    },
    {
        id: 224,
        word: "Video",
        meaning: "영상/비디오",
        pronunciation: "ˈvɪd.i.əʊ",
        level: 2,
        examples: [
            { sentence: "Watch this video.", translation: "이 영상을 봐라." },
            { sentence: "He makes funny videos.", translation: "그는 재미있는 영상을 만든다." }
        ]
    },
    {
        id: 225,
        word: "Internet",
        meaning: "인터넷",
        pronunciation: "ˈɪn.tə.net",
        level: 2,
        examples: [
            { sentence: "The internet is slow.", translation: "인터넷이 느리다." },
            { sentence: "Surfing the internet.", translation: "인터넷 서핑을 하다." }
        ]
    },
    {
        id: 226,
        word: "Computer",
        meaning: "컴퓨터",
        pronunciation: "kəmˈpjuː.tər",
        level: 2,
        examples: [
            { sentence: "My computer crashed.", translation: "내 컴퓨터가 고장 났다." },
            { sentence: "Use a computer for work.", translation: "일할 때 컴퓨터를 사용해라." }
        ]
    },
    {
        id: 227,
        word: "Phone",
        meaning: "전화",
        pronunciation: "fəʊn",
        level: 2,
        examples: [
            { sentence: "Don't use your phone while driving.", translation: "운전 중에 핸드폰을 쓰지 마라." },
            { sentence: "I lost my phone.", translation: "전화기를 잃어버렸다." }
        ]
    },
    {
        id: 228,
        word: "News",
        meaning: "뉴스/소식",
        pronunciation: "njuːz",
        level: 2,
        examples: [
            { sentence: "That is good news.", translation: "좋은 소식이네." },
            { sentence: "I watched the news.", translation: "나는 뉴스를 봤다." }
        ]
    },
    {
        id: 229,
        word: "Market",
        meaning: "시장",
        pronunciation: "ˈmɑː.kɪt",
        level: 2,
        examples: [
            { sentence: "Go to the market.", translation: "시장에 가라." },
            { sentence: "The market is crowded.", translation: "시장이 붐빈다." }
        ]
    },
    {
        id: 230,
        word: "Price",
        meaning: "가격",
        pronunciation: "praɪs",
        level: 2,
        examples: [
            { sentence: "The price is too high.", translation: "가격이 너무 비싸다." },
            { sentence: "What is the price?", translation: "가격이 얼마입니까?" }
        ]
    },
    {
        id: 231,
        word: "Sale",
        meaning: "판매/세일",
        pronunciation: "seɪl",
        level: 2,
        examples: [
            { sentence: "It is for sale.", translation: "그것은 판매 중이다." },
            { sentence: "I bought it on sale.", translation: "나는 그것을 세일 때 샀다." }
        ]
    },
    {
        id: 232,
        word: "Shop",
        meaning: "가게",
        pronunciation: "ʃɒp",
        level: 2,
        examples: [
            { sentence: "This is a toy shop.", translation: "이곳은 장난감 가게다." },
            { sentence: "I went to the coffee shop.", translation: "나는 커피숍에 갔다." }
        ]
    },
    {
        id: 233,
        word: "Store",
        meaning: "상점/저장하다",
        pronunciation: "stɔːr",
        level: 2,
        examples: [
            { sentence: "The store opens at 10.", translation: "상점은 10시에 문을 연다." },
            { sentence: "Store data safely.", translation: "데이터를 안전하게 저장해라." }
        ]
    },
    {
        id: 234,
        word: "Team",
        meaning: "팀",
        pronunciation: "tiːm",
        level: 2,
        examples: [
            { sentence: "We are a good team.", translation: "우리는 좋은 팀이다." },
            { sentence: "Join our team.", translation: "우리 팀에 들어와라." }
        ]
    },
    {
        id: 235,
        word: "Group",
        meaning: "그룹/무리",
        pronunciation: "ɡruːp",
        level: 2,
        examples: [
            { sentence: "A group of people.", translation: "한 무리의 사람들." },
            { sentence: "Work in a group.", translation: "그룹으로 일하라." }
        ]
    },
    {
        id: 236,
        word: "Member",
        meaning: "회원/구성원",
        pronunciation: "ˈmem.bər",
        level: 2,
        examples: [
            { sentence: "He is a member of the club.", translation: "그는 그 클럽의 회원이다." },
            { sentence: "Family members.", translation: "가족 구성원들." }
        ]
    },
    {
        id: 237,
        word: "Leader",
        meaning: "지도자/리더",
        pronunciation: "ˈliː.dər",
        level: 2,
        examples: [
            { sentence: "A good leader listens.", translation: "좋은 리더는 경청한다." },
            { sentence: "Follow the leader.", translation: "리더를 따라라." }
        ]
    },
    {
        id: 238,
        word: "Office",
        meaning: "사무실",
        pronunciation: "ˈɒf.ɪs",
        level: 2,
        examples: [
            { sentence: "I work in an office.", translation: "나는 사무실에서 일한다." },
            { sentence: "The office is clean.", translation: "사무실이 깨끗하다." }
        ]
    },
    {
        id: 239,
        word: "Company",
        meaning: "회사",
        pronunciation: "ˈkʌm.pə.ni",
        level: 2,
        examples: [
            { sentence: "He started a company.", translation: "그는 회사를 창업했다." },
            { sentence: "A big company.", translation: "큰 회사." }
        ]
    },
    {
        id: 240,
        word: "Job",
        meaning: "직업",
        pronunciation: "dʒɒb",
        level: 2,
        examples: [
            { sentence: "I need a job.", translation: "나 일자리가 필요해." },
            { sentence: "She did a good job.", translation: "그녀는 일을 잘 해냈다." }
        ]
    },
    {
        id: 241,
        word: "Success",
        meaning: "성공",
        pronunciation: "səkˈses",
        level: 2,
        examples: [
            { sentence: "Hard work brings success.", translation: "노력은 성공을 가져온다." },
            { sentence: "I wish you success.", translation: "성공을 빈다." }
        ]
    },
    {
        id: 242,
        word: "Goal",
        meaning: "목표",
        pronunciation: "ɡəʊl",
        level: 2,
        examples: [
            { sentence: "Set a new goal.", translation: "새로운 목표를 세워라." },
            { sentence: "My goal is to learn English.", translation: "내 목표는 영어를 배우는 것이다." }
        ]
    },
    {
        id: 243,
        word: "Plan",
        meaning: "계획",
        pronunciation: "plæn",
        level: 2,
        examples: [
            { sentence: "What is your plan?", translation: "너의 계획이 뭐니?" },
            { sentence: "Make a plan.", translation: "계획을 세워라." }
        ]
    },
    {
        id: 244,
        word: "Problem",
        meaning: "문제",
        pronunciation: "ˈprɒb.ləm",
        level: 2,
        examples: [
            { sentence: "I have a problem.", translation: "문제가 생겼다." },
            { sentence: "Solve the problem.", translation: "문제를 해결해라." }
        ]
    },
    {
        id: 245,
        word: "Solution",
        meaning: "해결책",
        pronunciation: "səˈluː.ʃən",
        level: 2,
        examples: [
            { sentence: "Find a solution.", translation: "해결책을 찾아라." },
            { sentence: "There is no easy solution.", translation: "쉬운 해결책은 없다." }
        ]
    },
    {
        id: 246,
        word: "Idea",
        meaning: "아이디어/생각",
        pronunciation: "aɪˈdɪə",
        level: 2,
        examples: [
            { sentence: "I have a good idea.", translation: "좋은 생각이 있다." },
            { sentence: "That's a great idea.", translation: "훌륭한 생각이다." }
        ]
    },
    {
        id: 247,
        word: "Memory",
        meaning: "기억",
        pronunciation: "ˈmem.ər.i",
        level: 2,
        examples: [
            { sentence: "I have a bad memory.", translation: "나는 기억력이 나쁘다." },
            { sentence: "A happy memory.", translation: "행복한 기억." }
        ]
    },
    {
        id: 248,
        word: "Mind",
        meaning: "마음/정신",
        pronunciation: "maɪnd",
        level: 2,
        examples: [
            { sentence: "Open your mind.", translation: "마음을 열어라." },
            { sentence: "Change your mind.", translation: "마음을 바꿔라." }
        ]
    },
    {
        id: 249,
        word: "Reason",
        meaning: "이유",
        pronunciation: "ˈriː.zən",
        level: 2,
        examples: [
            { sentence: "What is the reason?", translation: "이유가 무엇인가?" },
            { sentence: "Give me a reason.", translation: "이유를 대라." }
        ]
    },
    {
        id: 250,
        word: "Result",
        meaning: "결과",
        pronunciation: "rɪˈzʌlt",
        level: 2,
        examples: [
            { sentence: "The result was good.", translation: "결과가 좋았다." },
            { sentence: "Wait for the result.", translation: "결과를 기다려라." }
        ]
    },

    // Level 3: Advanced
    {
        id: 21,
        word: "Perspective",
        meaning: "관점",
        pronunciation: "pəˈspek.tɪv",
        level: 3,
        examples: [
            { sentence: "Try to see it from my perspective.", translation: "내 관점에서 그것을 보려고 노력해봐." },
            { sentence: "His perspective changed after the trip.", translation: "그의 관점은 여행 후에 바뀌었다." }
        ]
    },
    {
        id: 22,
        word: "Genuine",
        meaning: "진실한",
        pronunciation: "ˈdʒen.ju.ɪn",
        level: 3,
        examples: [
            { sentence: "She has a genuine interest in art.", translation: "그녀는 예술에 진실한 관심을 가지고 있다." },
            { sentence: "Is this leather genuine?", translation: "이 가죽은 진짜인가요?" }
        ]
    },
    {
        id: 23,
        word: "Resilience",
        meaning: "회복탄력성",
        pronunciation: "rɪˈzɪl.i.əns",
        level: 3,
        examples: [
            { sentence: "She showed great resilience.", translation: "그녀는 대단한 회복력을 보여주었다." },
            { sentence: "Resilience is key to success.", translation: "회복탄력성은 성공의 열쇠다." }
        ]
    },
    {
        id: 24,
        word: "Empathy",
        meaning: "공감",
        pronunciation: "ˈem.pə.θi",
        level: 3,
        examples: [
            { sentence: "He lacks empathy for others.", translation: "그는 타인에 대한 공감 능력이 부족하다." },
            { sentence: "Empathy helps build relationships.", translation: "공감은 관계를 맺는 데 도움이 된다." }
        ]
    },
    {
        id: 25,
        word: "Ambiguous",
        meaning: "애매모호한",
        pronunciation: "æmˈbɪɡ.ju.əs",
        level: 3,
        examples: [
            { sentence: "The answer was ambiguous.", translation: "그 대답은 애매모호했다." },
            { sentence: "Avoid ambiguous language.", translation: "모호한 언어 사용을 피하라." }
        ]
    },

    {
        id: 301,
        word: "Analyze",
        meaning: "분석하다",
        pronunciation: "ˈæn.əl.aɪz",
        level: 3,
        examples: [
            { sentence: "Analyze the data.", translation: "데이터를 분석해라." },
            { sentence: "He analyzed the situation.", translation: "그는 상황을 분석했다." }
        ]
    },
    {
        id: 302,
        word: "Concept",
        meaning: "개념",
        pronunciation: "ˈkɒn.sept",
        level: 3,
        examples: [
            { sentence: "It is a new concept.", translation: "그것은 새로운 개념이다." },
            { sentence: "I understand the concept.", translation: "나는 그 개념을 이해한다." }
        ]
    },
    {
        id: 303,
        word: "Debate",
        meaning: "토론/논쟁",
        pronunciation: "dɪˈbeɪt",
        level: 3,
        examples: [
            { sentence: "They held a debate.", translation: "그들은 토론을 열었다." },
            { sentence: "Debate is healthy.", translation: "토론은 건전하다." }
        ]
    },
    {
        id: 304,
        word: "Economy",
        meaning: "경제",
        pronunciation: "iˈkɒn.ə.mi",
        level: 3,
        examples: [
            { sentence: "The economy is growing.", translation: "경제가 성장하고 있다." },
            { sentence: "Global economy.", translation: "세계 경제." }
        ]
    },
    {
        id: 305,
        word: "Function",
        meaning: "기능/작용하다",
        pronunciation: "ˈfʌŋk.ʃən",
        level: 3,
        examples: [
            { sentence: "What is its function?", translation: "그것의 기능은 무엇인가?" },
            { sentence: "It functions well.", translation: "그것은 잘 작동한다." }
        ]
    },
    {
        id: 306,
        word: "Generation",
        meaning: "세대",
        pronunciation: "ˌdʒen.əˈreɪ.ʃən",
        level: 3,
        examples: [
            { sentence: "The younger generation.", translation: "젊은 세대." },
            { sentence: "Power generation.", translation: "발전." }
        ]
    },
    {
        id: 307,
        word: "Identity",
        meaning: "정체성/신원",
        pronunciation: "aɪˈden.tɪ.ti",
        level: 3,
        examples: [
            { sentence: "Prove your identity.", translation: "신원을 증명해라." },
            { sentence: "Finding one's identity.", translation: "정체성을 찾는 것." }
        ]
    },
    {
        id: 308,
        word: "Journal",
        meaning: "저널/일기",
        pronunciation: "ˈdʒɜː.nəl",
        level: 3,
        examples: [
            { sentence: "She keeps a journal.", translation: "그녀는 일기를 쓴다." },
            { sentence: "A medical journal.", translation: "의학 저널." }
        ]
    },
    {
        id: 309,
        word: "Legal",
        meaning: "법적인",
        pronunciation: "ˈliː.ɡəl",
        level: 3,
        examples: [
            { sentence: "Take legal action.", translation: "법적 조치를 취하다." },
            { sentence: "Is it legal?", translation: "그것은 합법인가?" }
        ]
    },
    {
        id: 310,
        word: "Method",
        meaning: "방법",
        pronunciation: "ˈmeθ.əd",
        level: 3,
        examples: [
            { sentence: "A new teaching method.", translation: "새로운 교수법." },
            { sentence: "Follow the method.", translation: "그 방법을 따라라." }
        ]
    },
    {
        id: 311,
        word: "Network",
        meaning: "네트워크/통신망",
        pronunciation: "ˈnet.wɜːk",
        level: 3,
        examples: [
            { sentence: "Build a strong network.", translation: "강력한 네트워크를 구축해라." },
            { sentence: "Computer network.", translation: "컴퓨터 통신망." }
        ]
    },
    {
        id: 312,
        word: "Option",
        meaning: "선택권/옵션",
        pronunciation: "ˈɒp.ʃən",
        level: 3,
        examples: [
            { sentence: "You have no option.", translation: "너는 선택권이 없다." },
            { sentence: "Consider your options.", translation: "선택지들을 고려해라." }
        ]
    },
    {
        id: 313,
        word: "Policy",
        meaning: "정책/방침",
        pronunciation: "ˈpɒl.ə.si",
        level: 3,
        examples: [
            { sentence: "Company policy.", translation: "회사 방침." },
            { sentence: "Government policy.", translation: "정부 정책." }
        ]
    },
    {
        id: 314,
        word: "Quality",
        meaning: "품질",
        pronunciation: "ˈkwɒl.ɪ.ti",
        level: 3,
        examples: [
            { sentence: "High quality products.", translation: "고품질 제품들." },
            { sentence: "Quality over quantity.", translation: "양보다 질." }
        ]
    },
    {
        id: 315,
        word: "Range",
        meaning: "범위",
        pronunciation: "reɪndʒ",
        level: 3,
        examples: [
            { sentence: "A wide range of choices.", translation: "광범위한 선택." },
            { sentence: "Price range.", translation: "가격 범위." }
        ]
    },
    {
        id: 316,
        word: "Source",
        meaning: "원천/출처",
        pronunciation: "sɔːs",
        level: 3,
        examples: [
            { sentence: "The source of the river.", translation: "강의 발원지." },
            { sentence: "Check your sources.", translation: "출처를 확인해라." }
        ]
    },
    {
        id: 317,
        word: "Theory",
        meaning: "이론",
        pronunciation: "ˈθɪə.ri",
        level: 3,
        examples: [
            { sentence: "In theory, it works.", translation: "이론상으로는 작동한다." },
            { sentence: "Scientific theory.", translation: "과학 이론." }
        ]
    },
    {
        id: 318,
        word: "Union",
        meaning: "연합/조합",
        pronunciation: "ˈjuː.njən",
        level: 3,
        examples: [
            { sentence: "European Union.", translation: "유럽 연합." },
            { sentence: "Labor union.", translation: "노동 조합." }
        ]
    },
    {
        id: 319,
        word: "Vision",
        meaning: "시력/비전",
        pronunciation: "ˈvɪʒ.ən",
        level: 3,
        examples: [
            { sentence: "She has good vision.", translation: "그녀는 시력이 좋다." },
            { sentence: "A vision for the future.", translation: "미래에 대한 비전." }
        ]
    },
    {
        id: 320,
        word: "Weight",
        meaning: "무게/체중",
        pronunciation: "weɪt",
        level: 3,
        examples: [
            { sentence: "Lose weight.", translation: "살을 빼다." },
            { sentence: "The weight of the box.", translation: "상자의 무게." }
        ]
    },
    {
        id: 321,
        word: "Zone",
        meaning: "구역/지대",
        pronunciation: "zəʊn",
        level: 3,
        examples: [
            { sentence: "No parking zone.", translation: "주차 금지 구역." },
            { sentence: "Time zone.", translation: "시간대." }
        ]
    },
    {
        id: 322,
        word: "Benefit",
        meaning: "이동/혜택",
        pronunciation: "ˈben.ɪ.fɪt",
        level: 3,
        examples: [
            { sentence: "For your benefit.", translation: "너의 이익을 위해." },
            { sentence: "Benefits of exercise.", translation: "운동의 혜택." }
        ]
    },
    {
        id: 323,
        word: "Create",
        meaning: "창조하다",
        pronunciation: "kriˈeɪt",
        level: 3,
        examples: [
            { sentence: "Create a new file.", translation: "새 파일을 만들어라." },
            { sentence: "God created the world.", translation: "신이 세상을 창조했다." }
        ]
    },
    {
        id: 324,
        word: "Define",
        meaning: "정의하다",
        pronunciation: "dɪˈfaɪn",
        level: 3,
        examples: [
            { sentence: "Define the word.", translation: "그 단어를 정의해라." },
            { sentence: "Rules define the game.", translation: "규칙이 게임을 정의한다." }
        ]
    },
    {
        id: 325,
        word: "Ensure",
        meaning: "보장하다",
        pronunciation: "ɪnˈʃɔːr",
        level: 3,
        examples: [
            { sentence: "Ensure safety first.", translation: "안전을 우선 보장해라." },
            { sentence: "I cannot ensure success.", translation: "성공을 보장할 수 없다." }
        ]
    },
    {
        id: 326,
        word: "Factor",
        meaning: "요인",
        pronunciation: "ˈfæk.tər",
        level: 3,
        examples: [
            { sentence: "A key factor.", translation: "핵심 요인." },
            { sentence: "Consider all factors.", translation: "모든 요인을 고려해라." }
        ]
    },
    {
        id: 327,
        word: "Global",
        meaning: "세계적인",
        pronunciation: "ˈɡləʊ.bəl",
        level: 3,
        examples: [
            { sentence: "Global warming.", translation: "지구 온난화." },
            { sentence: "Global market.", translation: "세계 시장." }
        ]
    },
    {
        id: 328,
        word: "Impact",
        meaning: "영향/충격",
        pronunciation: "ˈɪm.pækt",
        level: 3,
        examples: [
            { sentence: "A big impact.", translation: "큰 영향." },
            { sentence: "The impact of the crash.", translation: "충돌의 충격." }
        ]
    },
    {
        id: 329,
        word: "Income",
        meaning: "소득/수입",
        pronunciation: "ˈɪn.kʌm",
        level: 3,
        examples: [
            { sentence: "Low income.", translation: "저소득." },
            { sentence: "Source of income.", translation: "수입원." }
        ]
    },
    {
        id: 330,
        word: "Labor",
        meaning: "노동",
        pronunciation: "ˈleɪ.bər",
        level: 3,
        examples: [
            { sentence: "Manual labor.", translation: "육체 노동." },
            { sentence: "Child labor is illegal.", translation: "아동 노동은 불법이다." }
        ]
    },
    {
        id: 331,
        word: "Major",
        meaning: "주요한/전공",
        pronunciation: "ˈmeɪ.dʒər",
        level: 3,
        examples: [
            { sentence: "A major problem.", translation: "주요 문제." },
            { sentence: "She is a music major.", translation: "그녀는 음악 전공이다." }
        ]
    },
    {
        id: 332,
        word: "Normal",
        meaning: "정상적인",
        pronunciation: "ˈnɔː.məl",
        level: 3,
        examples: [
            { sentence: "Back to normal.", translation: "정상으로 돌아오다." },
            { sentence: "Is this normal?", translation: "이게 정상인가?" }
        ]
    },
    {
        id: 333,
        word: "Occur",
        meaning: "일어나다/발생하다",
        pronunciation: "əˈkɜːr",
        level: 3,
        examples: [
            { sentence: "When did it occur?", translation: "언제 발생했니?" },
            { sentence: "Mistakes occur.", translation: "실수는 일어난다." }
        ]
    },
    {
        id: 334,
        word: "Period",
        meaning: "기간/시기",
        pronunciation: "ˈpɪə.ri.əd",
        level: 3,
        examples: [
            { sentence: "A long period of time.", translation: "오랜 기간." },
            { sentence: "The Joseon period.", translation: "조선 시대." }
        ]
    },
    {
        id: 335,
        word: "Public",
        meaning: "대중의/공공의",
        pronunciation: "ˈpʌb.lɪk",
        level: 3,
        examples: [
            { sentence: "Public transport.", translation: "대중 교통." },
            { sentence: "In public.", translation: "공공장소에서." }
        ]
    },
    {
        id: 336,
        word: "React",
        meaning: "반응하다",
        pronunciation: "riˈækt",
        level: 3,
        examples: [
            { sentence: "How did he react?", translation: "그가 어떻게 반응했니?" },
            { sentence: "React quickly.", translation: "빠르게 반응해라." }
        ]
    },
    {
        id: 337,
        word: "Sector",
        meaning: "부문/분야",
        pronunciation: "ˈsek.tər",
        level: 3,
        examples: [
            { sentence: "Private sector.", translation: "민간 부문." },
            { sentence: "Public sector.", translation: "공공 부문." }
        ]
    },
    {
        id: 338,
        word: "Status",
        meaning: "지위/상태",
        pronunciation: "ˈsteɪ.təs",
        level: 3,
        examples: [
            { sentence: "Social status.", translation: "사회적 지위." },
            { sentence: "Check the status.", translation: "상태를 확인해라." }
        ]
    },
    {
        id: 339,
        word: "Theme",
        meaning: "주제/테마",
        pronunciation: "θiːm",
        level: 3,
        examples: [
            { sentence: "The theme of the party.", translation: "파티의 테마." },
            { sentence: "Main theme.", translation: "주요 주제." }
        ]
    },
    {
        id: 340,
        word: "Unique",
        meaning: "독특한/유일한",
        pronunciation: "juːˈniːk",
        level: 3,
        examples: [
            { sentence: "Every person is unique.", translation: "모든 사람은 독특하다." },
            { sentence: "A unique opportunity.", translation: "유일한 기회." }
        ]
    },
    {
        id: 341,
        word: "Vary",
        meaning: "다르다/변하다",
        pronunciation: "ˈveə.ri",
        level: 3,
        examples: [
            { sentence: "Prices vary.", translation: "가격은 다양하다." },
            { sentence: "Opinions vary.", translation: "의견이 분분하다." }
        ]
    },
    {
        id: 342,
        word: "Access",
        meaning: "접근",
        pronunciation: "ˈæk.ses",
        level: 3,
        examples: [
            { sentence: "Access denied.", translation: "접근 거부됨." },
            { sentence: "Internet access.", translation: "인터넷 접속." }
        ]
    },
    {
        id: 343,
        word: "Budget",
        meaning: "예산",
        pronunciation: "ˈbʌdʒ.ɪt",
        level: 3,
        examples: [
            { sentence: "A tight budget.", translation: "빠듯한 예산." },
            { sentence: "Within budget.", translation: "예산 내에서." }
        ]
    },
    {
        id: 344,
        word: "Credit",
        meaning: "신용",
        pronunciation: "ˈkred.ɪt",
        level: 3,
        examples: [
            { sentence: "Credit card.", translation: "신용카드." },
            { sentence: "Give him credit.", translation: "그를 인정해줘라." }
        ]
    },
    {
        id: 345,
        word: "Detect",
        meaning: "탐지하다/발견하다",
        pronunciation: "dɪˈtekt",
        level: 3,
        examples: [
            { sentence: "Detect a signal.", translation: "신호를 탐지하다." },
            { sentence: "Detect a lie.", translation: "거짓말을 간파하다." }
        ]
    },
    {
        id: 346,
        word: "Estate",
        meaning: "사유지/자산",
        pronunciation: "ɪˈsteɪt",
        level: 3,
        examples: [
            { sentence: "Real estate.", translation: "부동산." },
            { sentence: "A large estate.", translation: "넓은 사유지." }
        ]
    },
    {
        id: 347,
        word: "Finance",
        meaning: "재정/금융",
        pronunciation: "ˈfaɪ.næns",
        level: 3,
        examples: [
            { sentence: "Work in finance.", translation: "금융업에 종사하다." },
            { sentence: "Personal finance.", translation: "개인 재정." }
        ]
    },
    {
        id: 348,
        word: "Gender",
        meaning: "성별",
        pronunciation: "ˈdʒen.dər",
        level: 3,
        examples: [
            { sentence: "Gender equality.", translation: "양성 평등." },
            { sentence: "Gender roles.", translation: "성 역할." }
        ]
    },
    {
        id: 349,
        word: "Ignore",
        meaning: "무시하다",
        pronunciation: "ɪɡˈnɔːr",
        level: 3,
        examples: [
            { sentence: "Don't ignore me.", translation: "나를 무시하지 마." },
            { sentence: "Ignore the noise.", translation: "소음을 무시해라." }
        ]
    },
    {
        id: 350,
        word: "Logic",
        meaning: "논리",
        pronunciation: "ˈlɒdʒ.ɪk",
        level: 3,
        examples: [
            { sentence: "There is no logic in that.", translation: "거기엔 논리가 없다." },
            { sentence: "Use logic.", translation: "논리를 사용해라." }
        ]
    },

    // Level 4: Expert
    {
        id: 31,
        word: "Hypothesis",
        meaning: "가설",
        pronunciation: "haɪˈpɒθ.ə.sɪs",
        level: 4,
        examples: [
            { sentence: "We need to test this hypothesis.", translation: "우리는 이 가설을 검증해야 한다." },
            { sentence: "Her hypothesis proved to be correct.", translation: "그녀의 가설은 옳은 것으로 판명되었다." }
        ]
    },
    {
        id: 32,
        word: "Simultaneous",
        meaning: "동시의",
        pronunciation: "ˌsɪm.əlˈteɪ.ni.əs",
        level: 4,
        examples: [
            { sentence: "There were simultaneous attacks.", translation: "동시다발적인 공격이 있었다." },
            { sentence: "Translation was simultaneous.", translation: "통역은 동시 통역이었다." }
        ]
    },
    {
        id: 33,
        word: "Inevitable",
        meaning: "피할 수 없는",
        pronunciation: "ɪˈnev.ɪ.tə.bəl",
        level: 4,
        examples: [
            { sentence: "Change is inevitable.", translation: "변화는 피할 수 없다." },
            { sentence: "We accepted the inevitable outcome.", translation: "우리는 피할 수 없는 결과를 받아들였다." }
        ]
    },
    {
        id: 34,
        word: "Paradigm",
        meaning: "전형적인 예/인식 체계",
        pronunciation: "ˈpær.ə.daɪm",
        level: 4,
        examples: [
            { sentence: "This is a new paradigm in science.", translation: "이것은 과학의 새로운 패러다임이다." },
            { sentence: "We need a paradigm shift.", translation: "우리는 인식의 전환이 필요하다." }
        ]
    },
    {
        id: 35,
        word: "Eloquent",
        meaning: "웅변을 잘하는/유창한",
        pronunciation: "ˈel.ə.kwənt",
        level: 4,
        examples: [
            { sentence: "He gave an eloquent speech.", translation: "그는 유창한 연설을 했다." },
            { sentence: "Her silence was eloquent.", translation: "그녀의 침묵은 많은 것을 말해주었다." }
        ]
    },

    {
        id: 401,
        word: "Abstract",
        meaning: "추상적인",
        pronunciation: "ˈæb.strækt",
        level: 4,
        examples: [
            { sentence: "Abstract art.", translation: "추상 미술." },
            { sentence: "An abstract idea.", translation: "추상적인 생각." }
        ]
    },
    {
        id: 402,
        word: "Bureaucracy",
        meaning: "관료주의",
        pronunciation: "bjʊəˈrɒk.rə.si",
        level: 4,
        examples: [
            { sentence: "Cut through the bureaucracy.", translation: "관료주의를 타파하다." },
            { sentence: "Government bureaucracy.", translation: "정부 관료주의." }
        ]
    },
    {
        id: 403,
        word: "Coalition",
        meaning: "연합",
        pronunciation: "ˌkəʊ.əˈlɪʃ.ən",
        level: 4,
        examples: [
            { sentence: "A coalition government.", translation: "연립 정부." },
            { sentence: "Form a coalition.", translation: "연합을 형성하다." }
        ]
    },
    {
        id: 404,
        word: "Deteriorate",
        meaning: "악화되다",
        pronunciation: "dɪˈtɪə.ri.ə.reɪt",
        level: 4,
        examples: [
            { sentence: "Conditions deteriorated.", translation: "상황이 악화되었다." },
            { sentence: "His health deteriorated.", translation: "그의 건강이 악화되었다." }
        ]
    },
    {
        id: 405,
        word: "Equivalent",
        meaning: "동등한",
        pronunciation: "ɪˈkwɪv.əl.ənt",
        level: 4,
        examples: [
            { sentence: "It is equivalent to $10.", translation: "그것은 10달러에 해당한다." },
            { sentence: "No equivalent exist.", translation: "대응하는 것이 존재하지 않는다." }
        ]
    },
    {
        id: 406,
        word: "Fluctuate",
        meaning: "변동하다",
        pronunciation: "ˈflʌk.tʃu.eɪt",
        level: 4,
        examples: [
            { sentence: "Prices fluctuate.", translation: "가격은 변동한다." },
            { sentence: "Temperatures fluctuate.", translation: "기온이 오르내린다." }
        ]
    },
    {
        id: 407,
        word: "Hierarchy",
        meaning: "계급/체계",
        pronunciation: "ˈhaɪə.rɑː.ki",
        level: 4,
        examples: [
            { sentence: "Social hierarchy.", translation: "사회적 계급." },
            { sentence: "Corporate hierarchy.", translation: "기업 위계 질서." }
        ]
    },
    {
        id: 408,
        word: "Incentive",
        meaning: "장려책/동기",
        pronunciation: "ɪnˈsen.tɪv",
        level: 4,
        examples: [
            { sentence: "Tax incentive.", translation: "세금 감면 혜택." },
            { sentence: "No incentive to work.", translation: "일할 동기가 없다." }
        ]
    },
    {
        id: 409,
        word: "Jurisdiction",
        meaning: "관할권",
        pronunciation: "ˌdʒʊə.rɪsˈdɪk.ʃən",
        level: 4,
        examples: [
            { sentence: "Within my jurisdiction.", translation: "나의 관할권 내에." },
            { sentence: "Outside jurisdiction.", translation: "관할권 밖의." }
        ]
    },
    {
        id: 410,
        word: "Legislation",
        meaning: "입법/법률",
        pronunciation: "ˌledʒ.ɪsˈleɪ.ʃən",
        level: 4,
        examples: [
            { sentence: "New legislation.", translation: "새로운 법률." },
            { sentence: "Pass legislation.", translation: "법안을 통과시키다." }
        ]
    },
    {
        id: 411,
        word: "Mechanism",
        meaning: "메커니즘/기계 장치",
        pronunciation: "ˈmek.ə.nɪ.zəm",
        level: 4,
        examples: [
            { sentence: "Defense mechanism.", translation: "방어 기제." },
            { sentence: "Clock mechanism.", translation: "시계 장치." }
        ]
    },
    {
        id: 412,
        word: "Navigate",
        meaning: "길을 찾다/항해하다",
        pronunciation: "ˈnæv.ɪ.ɡeɪt",
        level: 4,
        examples: [
            { sentence: "Navigate the web.", translation: "웹을 탐색하다." },
            { sentence: "Navigate a ship.", translation: "배를 항해하다." }
        ]
    },
    {
        id: 413,
        word: "Objective",
        meaning: "객관적인/목표",
        pronunciation: "əbˈdʒek.tɪv",
        level: 4,
        examples: [
            { sentence: "Be objective.", translation: "객관적이어라." },
            { sentence: "Main objective.", translation: "주요 목표." }
        ]
    },
    {
        id: 414,
        word: "Parallel",
        meaning: "평행한/유사한",
        pronunciation: "ˈpær.ə.lel",
        level: 4,
        examples: [
            { sentence: "Parallel lines.", translation: "평행선." },
            { sentence: "Parallel universe.", translation: "평행 우주." }
        ]
    },
    {
        id: 415,
        word: "Qualitative",
        meaning: "질적인",
        pronunciation: "ˈkwɒl.ɪ.tə.tɪv",
        level: 4,
        examples: [
            { sentence: "Qualitative research.", translation: "질적 연구." },
            { sentence: "Qualitative analysis.", translation: "정성 분석." }
        ]
    },
    {
        id: 416,
        word: "Rational",
        meaning: "합리적인",
        pronunciation: "ˈræʃ.ən.əl",
        level: 4,
        examples: [
            { sentence: "Rational decision.", translation: "합리적인 결정." },
            { sentence: "Be rational.", translation: "이성적이어라." }
        ]
    },
    {
        id: 417,
        word: "Sequence",
        meaning: "순서/서열",
        pronunciation: "ˈsiː.kwəns",
        level: 4,
        examples: [
            { sentence: "In sequence.", translation: "순서대로." },
            { sentence: "DNA sequence.", translation: "DNA 서열." }
        ]
    },
    {
        id: 418,
        word: "Technical",
        meaning: "기술적인",
        pronunciation: "ˈtek.nɪ.kəl",
        level: 4,
        examples: [
            { sentence: "Technical support.", translation: "기술 지원." },
            { sentence: "Technical terms.", translation: "전문 용어." }
        ]
    },
    {
        id: 419,
        word: "Utilization",
        meaning: "이용/활용",
        pronunciation: "ˌjuː.tɪ.laɪˈzeɪ.ʃən",
        level: 4,
        examples: [
            { sentence: "Resource utilization.", translation: "자원 활용." },
            { sentence: "Energy utilization.", translation: "에너지 이용." }
        ]
    },
    {
        id: 420,
        word: "Valid",
        meaning: "유효한/타당한",
        pronunciation: "ˈvæl.ɪd",
        level: 4,
        examples: [
            { sentence: "Valid argument.", translation: "타당한 주장." },
            { sentence: "Valid passport.", translation: "유효한 여권." }
        ]
    },
    {
        id: 421,
        word: "Welfare",
        meaning: "복지",
        pronunciation: "ˈwel.feər",
        level: 4,
        examples: [
            { sentence: "Social welfare.", translation: "사회 복지." },
            { sentence: "Animal welfare.", translation: "동물 복지." }
        ]
    },
    {
        id: 422,
        word: "Yield",
        meaning: "산출하다/양보하다",
        pronunciation: "jiːld",
        level: 4,
        examples: [
            { sentence: "High yield.", translation: "높은 산출량." },
            { sentence: "Yield the right of way.", translation: "통행권을 양보하다." }
        ]
    },
    {
        id: 423,
        word: "Advocate",
        meaning: "옹호하다",
        pronunciation: "ˈæd.və.keɪt",
        level: 4,
        examples: [
            { sentence: "Advocate for rights.", translation: "권리를 옹호하다." },
            { sentence: "He is an advocate.", translation: "그는 옹호자이다." }
        ]
    },
    {
        id: 424,
        word: "Bias",
        meaning: "편견",
        pronunciation: "ˈbaɪ.əs",
        level: 4,
        examples: [
            { sentence: "Unconscious bias.", translation: "무의식적인 편견." },
            { sentence: "Media bias.", translation: "언론의 편향." }
        ]
    },
    {
        id: 425,
        word: "Coherent",
        meaning: "일관성 있는",
        pronunciation: "kəʊˈhɪə.rənt",
        level: 4,
        examples: [
            { sentence: "A coherent plan.", translation: "일관성 있는 계획." },
            { sentence: "Coherent speech.", translation: "조리 있는 연설." }
        ]
    },
    {
        id: 426,
        word: "Domain",
        meaning: "영역/도메인",
        pronunciation: "dəˈmeɪn",
        level: 4,
        examples: [
            { sentence: "Public domain.", translation: "공공 영역." },
            { sentence: "Internet domain.", translation: "인터넷 도메인." }
        ]
    },
    {
        id: 427,
        word: "Explicit",
        meaning: "명시적인",
        pronunciation: "ɪkˈsplɪs.ɪt",
        level: 4,
        examples: [
            { sentence: "Explicit instructions.", translation: "명확한 지시." },
            { sentence: "Be explicit.", translation: "솔직해져라." }
        ]
    },
    {
        id: 428,
        word: "Framework",
        meaning: "프레임워크/틀",
        pronunciation: "ˈfreɪm.wɜːk",
        level: 4,
        examples: [
            { sentence: "Legal framework.", translation: "법적 체계." },
            { sentence: "Software framework.", translation: "소프트웨어 프레임워크." }
        ]
    },
    {
        id: 429,
        word: "Guarantee",
        meaning: "보증하다",
        pronunciation: "ˌɡær.ənˈtiː",
        level: 4,
        examples: [
            { sentence: "Money back guarantee.", translation: "환불 보증." },
            { sentence: "I guarantee it.", translation: "내가 보증한다." }
        ]
    },
    {
        id: 430,
        word: "Implies",
        meaning: "암시하다",
        pronunciation: "ɪmˈplaɪz",
        level: 4,
        examples: [
            { sentence: "Silence implies consent.", translation: "침묵은 동의를 암시한다." },
            { sentence: "What does this imply?", translation: "이것은 무엇을 의미하는가?" }
        ]
    },
    {
        id: 431,
        word: "Integrity",
        meaning: "진실성/무결성",
        pronunciation: "ɪnˈteɡ.rə.ti",
        level: 4,
        examples: [
            { sentence: "Man of integrity.", translation: "진실한 사람." },
            { sentence: "Data integrity.", translation: "데이터 무결성." }
        ]
    },
    {
        id: 432,
        word: "Marginal",
        meaning: "미미한/주변의",
        pronunciation: "ˈmɑː.dʒɪ.nəl",
        level: 4,
        examples: [
            { sentence: "Marginal improvement.", translation: "미미한 개선." },
            { sentence: "Marginal cost.", translation: "한계 비용." }
        ]
    },
    {
        id: 433,
        word: "Norm",
        meaning: "규범/표준",
        pronunciation: "nɔːm",
        level: 4,
        examples: [
            { sentence: "Social norms.", translation: "사회적 규범." },
            { sentence: "Above the norm.", translation: "표준 이상." }
        ]
    },
    {
        id: 434,
        word: "Output",
        meaning: "산출물/출력",
        pronunciation: "ˈaʊt.pʊt",
        level: 4,
        examples: [
            { sentence: "Industrial output.", translation: "산업 생산량." },
            { sentence: "Input and output.", translation: "입력과 출력." }
        ]
    },
    {
        id: 435,
        word: "Parameter",
        meaning: "변수/매개변수",
        pronunciation: "pəˈræm.ɪ.tər",
        level: 4,
        examples: [
            { sentence: "Define the parameters.", translation: "매개변수를 정의해라." },
            { sentence: "Set parameters.", translation: "변수를 설정하다." }
        ]
    },
    {
        id: 436,
        word: "Protocol",
        meaning: "의정서/규약",
        pronunciation: "ˈprəʊ.tə.kɒl",
        level: 4,
        examples: [
            { sentence: "Follow the protocol.", translation: "규약을 따라라." },
            { sentence: "Kyoto Protocol.", translation: "교토 의정서." }
        ]
    },
    {
        id: 437,
        word: "Ratio",
        meaning: "비율",
        pronunciation: "ˈreɪ.ʃi.əʊ",
        level: 4,
        examples: [
            { sentence: "High ratio.", translation: "높은 비율." },
            { sentence: "The ratio of men to women.", translation: "남녀 성비." }
        ]
    },
    {
        id: 438,
        word: "Scheme",
        meaning: "계획/제도",
        pronunciation: "skiːm",
        level: 4,
        examples: [
            { sentence: "A pension scheme.", translation: "연금 제도." },
            { sentence: "Color scheme.", translation: "색채 배합." }
        ]
    },
    {
        id: 439,
        word: "Sphere",
        meaning: "구/영역",
        pronunciation: "sfɪər",
        level: 4,
        examples: [
            { sentence: "A perfect sphere.", translation: "완벽한 구." },
            { sentence: "Sphere of influence.", translation: "영향력의 범위." }
        ]
    },
    {
        id: 440,
        word: "Subsequent",
        meaning: "그 다음의",
        pronunciation: "ˈsʌb.sɪ.kwənt",
        level: 4,
        examples: [
            { sentence: "Subsequent events.", translation: "그 다음 사건들." },
            { sentence: "Subsequent years.", translation: "그 다음 해들." }
        ]
    },
    {
        id: 441,
        word: "Trend",
        meaning: "추세/유행",
        pronunciation: "trend",
        level: 4,
        examples: [
            { sentence: "Current trends.", translation: "현재의 추세." },
            { sentence: "Set a trend.", translation: "유행을 선도하다." }
        ]
    },
    {
        id: 442,
        word: "Ultimate",
        meaning: "궁극적인",
        pronunciation: "ˈʌl.tɪ.mət",
        level: 4,
        examples: [
            { sentence: "Ultimate goal.", translation: "궁극적인 목표." },
            { sentence: "The ultimate challenge.", translation: "최고의 도전." }
        ]
    },
    {
        id: 443,
        word: "Variable",
        meaning: "변수",
        pronunciation: "ˈveə.ri.ə.bəl",
        level: 4,
        examples: [
            { sentence: "A variable star.", translation: "변광성." },
            { sentence: "Dependent variable.", translation: "종속 변수." }
        ]
    },
    {
        id: 444,
        word: "Civil",
        meaning: "시민의",
        pronunciation: "ˈsɪv.əl",
        level: 4,
        examples: [
            { sentence: "Civil rights.", translation: "시민권." },
            { sentence: "Civil war.", translation: "내전." }
        ]
    },
    {
        id: 445,
        word: "Domestic",
        meaning: "국내의/가정의",
        pronunciation: "dəˈmes.tɪk",
        level: 4,
        examples: [
            { sentence: "Domestic flights.", translation: "국내선." },
            { sentence: "Domestic violence.", translation: "가정 폭력." }
        ]
    },
    {
        id: 446,
        word: "External",
        meaning: "외부의",
        pronunciation: "ɪkˈstɜː.nəl",
        level: 4,
        examples: [
            { sentence: "External drive.", translation: "외장 드라이브." },
            { sentence: "External factors.", translation: "외부 요인들." }
        ]
    },
    {
        id: 447,
        word: "Fundamental",
        meaning: "근본적인",
        pronunciation: "ˌfʌn.dəˈmen.təl",
        level: 4,
        examples: [
            { sentence: "Fundamental human rights.", translation: "기본 인권." },
            { sentence: "Fundamental change.", translation: "근본적인 변화." }
        ]
    },
    {
        id: 448,
        word: "Identify",
        meaning: "식별하다",
        pronunciation: "aɪˈden.tɪ.faɪ",
        level: 4,
        examples: [
            { sentence: "Identify the cause.", translation: "원인을 규명하다." },
            { sentence: "Identify yourself.", translation: "자신의 신원을 밝혀라." }
        ]
    },
    {
        id: 449,
        word: "License",
        meaning: "면허/허가",
        pronunciation: "ˈlaɪ.səns",
        level: 4,
        examples: [
            { sentence: "Driving license.", translation: "운전 면허증." },
            { sentence: "License to kill.", translation: "살인 면허." }
        ]
    },
    {
        id: 450,
        word: "Minority",
        meaning: "소수",
        pronunciation: "maɪˈnɒr.ə.ti",
        level: 4,
        examples: [
            { sentence: "Minority group.", translation: "소수 집단." },
            { sentence: "In the minority.", translation: "소수에 속하는." }
        ]
    },

    // Level 5: Master
    {
        id: 41,
        word: "Serendipity",
        meaning: "뜻밖의 행운",
        pronunciation: "ˌser.ənˈdɪp.ə.ti",
        level: 5,
        examples: [
            { sentence: "It was pure serendipity.", translation: "그것은 순전한 뜻밖의 행운이었다." },
            { sentence: "Serendipity often leads to great discoveries.", translation: "뜻밖의 발견은 종종 위대한 발견으로 이어진다." }
        ]
    },
    {
        id: 42,
        word: "Ephemeral",
        meaning: "덧없는/일시적인",
        pronunciation: "ɪˈfem.ər.əl",
        level: 5,
        examples: [
            { sentence: "Beauty is ephemeral.", translation: "아름다움은 덧없는 것이다." },
            { sentence: "Enjoy the ephemeral moments of joy.", translation: "일시적인 기쁨의 순간들을 즐겨라." }
        ]
    },
    {
        id: 43,
        word: "Ubiquitous",
        meaning: "어디에나 있는",
        pronunciation: "juːˈbɪk.wɪ.təs",
        level: 5,
        examples: [
            { sentence: "Smartphones are ubiquitous now.", translation: "스마트폰은 이제 어디에나 있다." },
            { sentence: "Wi-Fi is ubiquitous in this city.", translation: "이 도시에서는 와이파이가 어디에나 있다." }
        ]
    },
    {
        id: 44,
        word: "Mellifluous",
        meaning: "감미로운",
        pronunciation: "melˈɪf.lu.əs",
        level: 5,
        examples: [
            { sentence: "She has a mellifluous voice.", translation: "그녀는 감미로운 목소리를 가졌다." },
            { sentence: "The music was mellifluous.", translation: "그 음악은 감미로웠다." }
        ]
    },
    {
        id: 45,
        word: "Pernicious",
        meaning: "치명적인/해로운",
        pronunciation: "pəˈnɪʃ.əs",
        level: 5,
        examples: [
            { sentence: "It has a pernicious effect on health.", translation: "그것은 건강에 치명적인 영향을 미친다." },
            { sentence: "The pernicious rumors spread quickly.", translation: "그 해로운 소문은 빠르게 퍼졌다." }
        ]
    }
    ,
    {
        id: 501,
        word: "Anachronism",
        meaning: "시대착오적인 것",
        pronunciation: "əˈnæk.rə.nɪ.zəm",
        level: 5,
        examples: [
            { sentence: "It is an anachronism.", translation: "그것은 시대착오적이다." },
            { sentence: "Anachronisms in the movie.", translation: "영화 속 시대착오적인 것들." }
        ]
    },
    {
        id: 502,
        word: "Cacophony",
        meaning: "불협화음",
        pronunciation: "kəˈkɒf.ə.ni",
        level: 5,
        examples: [
            { sentence: "A cacophony of sounds.", translation: "불협화음의 소리들." },
            { sentence: "The cacophony was deafening.", translation: "그 불협화음은 귀를 먹먹하게 했다." }
        ]
    },
    {
        id: 503,
        word: "Ebullient",
        meaning: "패기만만한/활기찬",
        pronunciation: "ɪˈbʌl.i.ənt",
        level: 5,
        examples: [
            { sentence: "He was ebullient.", translation: "그는 활기넘쳤다." },
            { sentence: "Ebullient mood.", translation: "활기찬 분위기." }
        ]
    },
    {
        id: 504,
        word: "Iconoclast",
        meaning: "우상 파괴자",
        pronunciation: "aɪˈkɒn.ə.klæst",
        level: 5,
        examples: [
            { sentence: "He is an iconoclast.", translation: "그는 우상 파괴자다." },
            { sentence: "Iconoclasts change the world.", translation: "우상 파괴자들이 세상을 바꾼다." }
        ]
    },
    {
        id: 505,
        word: "Laconic",
        meaning: "간결한/과묵한",
        pronunciation: "ləˈkɒn.ɪk",
        level: 5,
        examples: [
            { sentence: "A laconic reply.", translation: "간결한 대답." },
            { sentence: "He is laconic.", translation: "그는 과묵하다." }
        ]
    },
    {
        id: 506,
        word: "Magnanimous",
        meaning: "도량이 넓은",
        pronunciation: "mæɡˈnæn.ɪ.məs",
        level: 5,
        examples: [
            { sentence: "A magnanimous gesture.", translation: "관대한 제스처." },
            { sentence: "Be magnanimous in victory.", translation: "승리했을 때 관대해져라." }
        ]
    },
    {
        id: 507,
        word: "Nefarious",
        meaning: "사악한",
        pronunciation: "nəˈfeə.ri.əs",
        level: 5,
        examples: [
            { sentence: "Nefarious activities.", translation: "사악한 활동들." },
            { sentence: "A nefarious plot.", translation: "사악한 음모." }
        ]
    },
    {
        id: 508,
        word: "Obfuscate",
        meaning: "모호하게 하다",
        pronunciation: "ˈɒb.fʌs.keɪt",
        level: 5,
        examples: [
            { sentence: "Don't obfuscate the issue.", translation: "문제를 흐리지 마라." },
            { sentence: "Obfuscated code.", translation: "난독화된 코드." }
        ]
    },
    {
        id: 509,
        word: "Panacea",
        meaning: "만병통치약",
        pronunciation: "ˌpæn.əˈsiː.ə",
        level: 5,
        examples: [
            { sentence: "There is no panacea.", translation: "만병통치약은 없다." },
            { sentence: "A panacea for all ills.", translation: "모든 병을 고치는 만병통치약." }
        ]
    },
    {
        id: 510,
        word: "Quixotic",
        meaning: "돈키호테 같은/비현실적인",
        pronunciation: "kwɪkˈsɒt.ɪk",
        level: 5,
        examples: [
            { sentence: "A quixotic idea.", translation: "비현실적인 생각." },
            { sentence: "Quixotic quest.", translation: "무모한 탐구." }
        ]
    },
    {
        id: 511,
        word: "Recalcitrant",
        meaning: "저항하는/다루기 힘든",
        pronunciation: "rɪˈkæl.sɪ.trənt",
        level: 5,
        examples: [
            { sentence: "Recalcitrant problems.", translation: "다루기 힘든 문제들." },
            { sentence: "He was recalcitrant.", translation: "그는 반항적이었다." }
        ]
    },
    {
        id: 512,
        word: "Sagacious",
        meaning: "현명한",
        pronunciation: "səˈɡeɪ.ʃəs",
        level: 5,
        examples: [
            { sentence: "A sagacious leader.", translation: "현명한 리더." },
            { sentence: "Sagacious advice.", translation: "현명한 조언." }
        ]
    },
    {
        id: 513,
        word: "Taciturn",
        meaning: "말수가 적은",
        pronunciation: "ˈtæs.ɪ.tɜːn",
        level: 5,
        examples: [
            { sentence: "He is a taciturn man.", translation: "그는 말수가 적은 남자다." },
            { sentence: "Taciturn nature.", translation: "과묵한 성격." }
        ]
    },
    {
        id: 514,
        word: "Ubiquity",
        meaning: "도처에 있음",
        pronunciation: "juːˈbɪk.wɪ.ti",
        level: 5,
        examples: [
            { sentence: "The ubiquity of mobile phones.", translation: "휴대전화의 보편화." },
            { sentence: "Its ubiquity is undeniable.", translation: "그것이 어디에나 있다는 것은 부인할 수 없다." }
        ]
    },
    {
        id: 515,
        word: "Vacillate",
        meaning: "흔들리다/주저하다",
        pronunciation: "ˈvæs.ɪ.leɪt",
        level: 5,
        examples: [
            { sentence: "Don't vacillate.", translation: "망설이지 마라." },
            { sentence: "He vacillated between two choices.", translation: "그는 두 가지 선택 사이에서 갈팡질팡했다." }
        ]
    },
    {
        id: 516,
        word: "Wane",
        meaning: "약해지다/줄어들다",
        pronunciation: "weɪn",
        level: 5,
        examples: [
            { sentence: "Interest began to wane.", translation: "관심이 시들해지기 시작했다." },
            { sentence: "The moon waxes and wanes.", translation: "달은 찼다 기울었다 한다." }
        ]
    },
    {
        id: 517,
        word: "Zealous",
        meaning: "열성적인",
        pronunciation: "ˈzel.əs",
        level: 5,
        examples: [
            { sentence: "A zealous supporter.", translation: "열성적인 지지자." },
            { sentence: "He is zealous about his work.", translation: "그는 자신의 일에 열정적이다." }
        ]
    },
    {
        id: 518,
        word: "Abate",
        meaning: "약해지다",
        pronunciation: "əˈbeɪt",
        level: 5,
        examples: [
            { sentence: "The storm abated.", translation: "폭풍이 잦아들었다." },
            { sentence: "Pain abated.", translation: "통증이 완화되었다." }
        ]
    },
    {
        id: 519,
        word: "Belligerent",
        meaning: "적대적인",
        pronunciation: "bəˈlɪdʒ.ər.ənt",
        level: 5,
        examples: [
            { sentence: "A belligerent attitude.", translation: "적대적인 태도." },
            { sentence: "Belligerent nations.", translation: "교전국들." }
        ]
    },
    {
        id: 520,
        word: "Capricious",
        meaning: "변덕스러운",
        pronunciation: "kəˈprɪʃ.əs",
        level: 5,
        examples: [
            { sentence: "Capricious weather.", translation: "변덕스러운 날씨." },
            { sentence: "A capricious child.", translation: "변덕스러운 아이." }
        ]
    },
    {
        id: 521,
        word: "Deference",
        meaning: "존중/경의",
        pronunciation: "ˈdef.ər.əns",
        level: 5,
        examples: [
            { sentence: "Show deference.", translation: "경의를 표해라." },
            { sentence: "In deference to his wishes.", translation: "그의 뜻을 존중하여." }
        ]
    },
    {
        id: 522,
        word: "Elicit",
        meaning: "이끌어내다",
        pronunciation: "iˈlɪs.ɪt",
        level: 5,
        examples: [
            { sentence: "Elicit a response.", translation: "반응을 이끌어내다." },
            { sentence: "Elicit information.", translation: "정보를 캐내다." }
        ]
    },
    {
        id: 523,
        word: "Fastidious",
        meaning: "까다로운/꼼꼼한",
        pronunciation: "fæsˈtɪd.i.əs",
        level: 5,
        examples: [
            { sentence: "He is fastidious.", translation: "그는 까다롭다." },
            { sentence: "Fastidious attention to detail.", translation: "세세한 부분까지 꼼꼼한 주의." }
        ]
    },
    {
        id: 524,
        word: "Garrulous",
        meaning: "수다스러운",
        pronunciation: "ˈɡær.əl.əs",
        level: 5,
        examples: [
            { sentence: "A garrulous old man.", translation: "수다스러운 노인." },
            { sentence: "She became garrulous.", translation: "그녀는 말이 많아졌다." }
        ]
    },
    {
        id: 525,
        word: "Hackneyed",
        meaning: "진부한",
        pronunciation: "ˈhæk.nid",
        level: 5,
        examples: [
            { sentence: "Hackneyed phrases.", translation: "진부한 표현들." },
            { sentence: "A hackneyed plot.", translation: "진부한 줄거리." }
        ]
    },
    {
        id: 526,
        word: "Imminent",
        meaning: "임박한",
        pronunciation: "ˈɪm.ɪ.nənt",
        level: 5,
        examples: [
            { sentence: "Imminent danger.", translation: "임박한 위험." },
            { sentence: "Arrival is imminent.", translation: "도착이 임박했다." }
        ]
    },
    {
        id: 527,
        word: "Juxtapose",
        meaning: "병렬하다/나란히 놓다",
        pronunciation: "ˌdʒʌk.stəˈpəʊz",
        level: 5,
        examples: [
            { sentence: "Juxtapose two images.", translation: "두 이미지를 나란히 놓다." },
            { sentence: "Juxtaposed ideas.", translation: "대비되는 아이디어들." }
        ]
    },
    {
        id: 528,
        word: "Kinetic",
        meaning: "운동의",
        pronunciation: "kɪˈnet.ɪk",
        level: 5,
        examples: [
            { sentence: "Kinetic energy.", translation: "운동 에너지." },
            { sentence: "Kinetic art.", translation: "키네틱 아트(움직이는 예술)." }
        ]
    },
    {
        id: 529,
        word: "Languid",
        meaning: "나른한/힘없는",
        pronunciation: "ˈlæŋ.ɡwɪd",
        level: 5,
        examples: [
            { sentence: "A languid wave.", translation: "힘없는 손짓." },
            { sentence: "Languid afternoon.", translation: "나른한 오후." }
        ]
    },
    {
        id: 530,
        word: "Malleable",
        meaning: "펴 늘릴 수 있는/유순한",
        pronunciation: "ˈmæl.i.ə.bəl",
        level: 5,
        examples: [
            { sentence: "Malleable metal.", translation: "연성이 있는 금속." },
            { sentence: "A malleable mind.", translation: "유연한 사고." }
        ]
    },
    {
        id: 531,
        word: "Nebulous",
        meaning: "흐릿한/모호한",
        pronunciation: "ˈneb.jə.ləs",
        level: 5,
        examples: [
            { sentence: "Nebulous concepts.", translation: "모호한 개념들." },
            { sentence: "A nebulous figure.", translation: "흐릿한 형체." }
        ]
    },
    {
        id: 532,
        word: "Obdurate",
        meaning: "고집 센",
        pronunciation: "ˈɒb.djə.rət",
        level: 5,
        examples: [
            { sentence: "He remained obdurate.", translation: "그는 여전히 고집을 피웠다." },
            { sentence: "Obdurate refusal.", translation: "완강한 거절." }
        ]
    },
    {
        id: 533,
        word: "Palliate",
        meaning: "완화시키다",
        pronunciation: "ˈpæl.i.eɪt",
        level: 5,
        examples: [
            { sentence: "Palliate the symptoms.", translation: "증상을 완화하다." },
            { sentence: "Attempts to palliate.", translation: "완화하려는 시도들." }
        ]
    },
    {
        id: 534,
        word: "Querulous",
        meaning: "불평하는",
        pronunciation: "ˈkwer.ə.ləs",
        level: 5,
        examples: [
            { sentence: "A querulous voice.", translation: "짜증 섞인 목소리." },
            { sentence: "Don't be querulous.", translation: "투덜거리지 마라." }
        ]
    },
    {
        id: 535,
        word: "Rancor",
        meaning: "원한/유감",
        pronunciation: "ˈræŋ.kər",
        level: 5,
        examples: [
            { sentence: "Without rancor.", translation: "유감없이." },
            { sentence: "Full of rancor.", translation: "원한에 찬." }
        ]
    },
    {
        id: 536,
        word: "Salient",
        meaning: "핵심적인/두드러진",
        pronunciation: "ˈseɪ.li.ənt",
        level: 5,
        examples: [
            { sentence: "Salient points.", translation: "핵심적인 점들." },
            { sentence: "Most salient feature.", translation: "가장 두드러진 특징." }
        ]
    },
    {
        id: 537,
        word: "Tacit",
        meaning: "암묵적인",
        pronunciation: "ˈtæs.ɪt",
        level: 5,
        examples: [
            { sentence: "Tacit approval.", translation: "암묵적인 승인." },
            { sentence: "Tacit agreement.", translation: "암묵적인 합의." }
        ]
    },
    {
        id: 538,
        word: "Ubiquitous",
        meaning: "어디에나 있는",
        pronunciation: "juːˈbɪk.wɪ.təs",
        level: 5,
        examples: [
            { sentence: "Ubiquitous computing.", translation: "유비쿼터스 컴퓨팅." },
            { sentence: "Plastic is ubiquitous.", translation: "플라스틱은 어디에나 있다." }
        ]
    },
    {
        id: 539,
        word: "Vacuous",
        meaning: "멍청한/비어있는",
        pronunciation: "ˈvæk.ju.əs",
        level: 5,
        examples: [
            { sentence: "A vacuous smile.", translation: "멍청한 미소." },
            { sentence: "Vacuous comments.", translation: "영양가 없는 말들." }
        ]
    },
    {
        id: 540,
        word: "Wary",
        meaning: "경계하는",
        pronunciation: "ˈweə.ri",
        level: 5,
        examples: [
            { sentence: "Be wary of strangers.", translation: "낯선 사람을 경계해라." },
            { sentence: "A wary look.", translation: "경계하는 눈빛." }
        ]
    },
    {
        id: 541,
        word: "Xenophobia",
        meaning: "외국인 혐오",
        pronunciation: "ˌzen.əˈfəʊ.bi.ə",
        level: 5,
        examples: [
            { sentence: "Combat xenophobia.", translation: "외국인 혐오와 싸우다." },
            { sentence: "Rise in xenophobia.", translation: "외국인 혐오의 증가." }
        ]
    },
    {
        id: 542,
        word: "Yielding",
        meaning: "유연한/양보하는",
        pronunciation: "ˈjiːl.dɪŋ",
        level: 5,
        examples: [
            { sentence: "Yielding surface.", translation: "푹신한 표면." },
            { sentence: "Yielding nature.", translation: "유순한 성격." }
        ]
    },
    {
        id: 543,
        word: "Zenith",
        meaning: "정점/절정",
        pronunciation: "ˈzen.ɪθ",
        level: 5,
        examples: [
            { sentence: "The zenith of his career.", translation: "그의 경력의 정점." },
            { sentence: "Reach the zenith.", translation: "정점에 도달하다." }
        ]
    },
    {
        id: 544,
        word: "Aberration",
        meaning: "일탈/이탈",
        pronunciation: "ˌæb.əˈreɪ.ʃən",
        level: 5,
        examples: [
            { sentence: "A temporary aberration.", translation: "일시적인 일탈." },
            { sentence: "Chromatic aberration.", translation: "색수차." }
        ]
    },
    {
        id: 545,
        word: "Banal",
        meaning: "지극히 평범한/따분한",
        pronunciation: "bəˈnɑːl",
        level: 5,
        examples: [
            { sentence: "Banal conversation.", translation: "따분한 대화." },
            { sentence: "It sounds banal.", translation: "그것은 진부하게 들린다." }
        ]
    },
    {
        id: 546,
        word: "Candor",
        meaning: "솔직함",
        pronunciation: "ˈkæn.dər",
        level: 5,
        examples: [
            { sentence: "Speak with candor.", translation: "솔직하게 말하다." },
            { sentence: "I appreciate your candor.", translation: "너의 솔직함에 감사한다." }
        ]
    },
    {
        id: 547,
        word: "Daintily",
        meaning: "조심스럽게/우아하게",
        pronunciation: "ˈdeɪn.tɪ.li",
        level: 5,
        examples: [
            { sentence: "She walked daintily.", translation: "그녀는 우아하게 걸었다." },
            { sentence: "Hold it daintily.", translation: "조심스럽게 잡아라." }
        ]
    },
    {
        id: 548,
        word: "Eclat",
        meaning: "화려함/갈채",
        pronunciation: "eɪˈklɑː",
        level: 5,
        examples: [
            { sentence: "Perform with eclat.", translation: "화려하게 공연하다." },
            { sentence: "Received with eclat.", translation: "갈채를 받으며 환영받다." }
        ]
    },
    {
        id: 549,
        word: "Facetious",
        meaning: "경박한/까부는",
        pronunciation: "fəˈsiː.ʃəs",
        level: 5,
        examples: [
            { sentence: "Don't be facetious.", translation: "까불지 마라." },
            { sentence: "A facetious remark.", translation: "농담조의 발언." }
        ]
    },
    {
        id: 550,
        word: "Gainsay",
        meaning: "부정하다/반대하다",
        pronunciation: "ˌɡeɪnˈseɪ",
        level: 5,
        examples: [
            { sentence: "No one can gainsay it.", translation: "아무도 그것을 부정할 수 없다." },
            { sentence: "Gainsay the truth.", translation: "진실을 부정하다." }
        ]
    },
];
