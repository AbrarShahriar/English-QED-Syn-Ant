const data = [
  {
    "main_word": "Achieve",
    "bangla_meaning": "অর্জন করা",
    "synonyms": ["Accomplish", "Attain", "Reach", "Obtain", "Succeed"],
    "antonyms": ["Fail", "Lose", "Surrender", "Miss", "Neglect"]
  },
  {
    "main_word": "Beautiful",
    "bangla_meaning": "সুন্দর",
    "synonyms": ["Attractive", "Lovely", "Gorgeous", "Stunning", "Pretty"],
    "antonyms": ["Ugly", "Unattractive", "Plain", "Homely", "Repulsive"]
  },
  {
    "main_word": "Confident",
    "bangla_meaning": "আত্মবিশ্বাসী",
    "synonyms": ["Assured", "Self-assured", "Positive", "Assertive", "Courageous"],
    "antonyms": ["Insecure", "Doubtful", "Timid", "Hesitant", "Unsure"]
  },
  {
    "main_word": "Diverse",
    "bangla_meaning": "বিবিধ",
    "synonyms": ["Varied", "Different", "Multifaceted", "Assorted", "Heterogeneous"],
    "antonyms": ["Uniform", "Homogeneous", "Similar", "Identical", "Alike"]
  },
  {
    "main_word": "Efficient",
    "bangla_meaning": "কু শল",
    "synonyms": ["Productive", "Effective", "Competent", "Capable", "Skillful"],
    "antonyms": ["Inefficient", "Ineffective", "Unproductive", "Incapable", "Unskilled"]
  },
  {
    "main_word": "Flexible",
    "bangla_meaning": "লচ্ছমী",
    "synonyms": ["Adaptable", "Versatile", "Pliable", "Supple", "Malleable"],
    "antonyms": ["Inflexible", "Rigid", "Stiff", "Unyielding", "Stubborn"]
  },
  {
    "main_word": "Generous",
    "bangla_meaning": "উদার",
    "synonyms": ["Benevolent", "Charitable", "Magnanimous", "Liberal", "Open-handed"],
    "antonyms": ["Stingy", "Greedy", "Selfish", "Miserly", "Tightfisted"]
  },
  {
    "main_word": "Harmony",
    "bangla_meaning": "সান্ত্বনা",
    "synonyms": ["Concord", "Agreement", "Unity", "Peace", "Serenity"],
    "antonyms": ["Discord", "Conflict", "Disharmony", "Disagreement", "Strife"]
  },
  {
    "main_word": "Integrate",
    "bangla_meaning": "ঐকত করা",
    "synonyms": ["Unify", "Combine", "Merge", "Incorporate", "Synthesize"],
    "antonyms": ["Segregate", "Separate", "Divide", "Isolate", "Disintegrate"]
  },
  {
    "main_word": "Jovial",
    "bangla_meaning": "হাসযমুখী",
    "synonyms": ["Cheerful", "Merry", "Jolly", "Lighthearted", "Buoyant"],
    "antonyms": ["Gloomy", "Dull", "Somber", "Melancholic", "Sullen"]
  },
  {
    "main_word": "Keen",
    "bangla_meaning": "উদযমী",
    "synonyms": ["Sharp", "Eager", "Enthusiastic", "Shrewd", "Intense"],
    "antonyms": ["Apathetic", "Indifferent", "Dull", "Lackadaisical", "Lethargic"]
  },
  {
    "main_word": "Luminous",
    "bangla_meaning": "প্রকাশমান",
    "synonyms": ["Radiant", "Glowing", "Bright", "Shining", "Dazzling"],
    "antonyms": ["Dim", "Dull", "Shadowy", "Obscure", "Gloomy"]
  },
  {
    "main_word": "Modest",
    "bangla_meaning": "বমতিযয়ী",
    "synonyms": ["Humble", "Unassuming", "Shy", "Reserved", "Decent"],
    "antonyms": ["Arrogant", "Proud", "Boastful", "Conceited", "Egotistical"]
  },
  {
    "main_word": "Noble",
    "bangla_meaning": "উদাত্ত",
    "synonyms": ["Honorable", "Virtuous", "Dignified", "Grand", "Magnificent"],
    "antonyms": ["Ignoble", "Base", "Dishonorable", "Mean", "Unworthy"]
  },
  {
    "main_word": "Optimistic",
    "bangla_meaning": "আশািাদী",
    "synonyms": ["Positive", "Hopeful", "Confident", "Upbeat", "Sanguine"],
    "antonyms": ["Pessimistic", "Despondent", "Gloomy", "Negative", "Cynical"]
  },
  {
    "main_word": "Pensive",
    "bangla_meaning": "ভািী",
    "synonyms": ["Thoughtful", "Contemplative", "Reflective", "Meditative", "Wistful"],
    "antonyms": ["Carefree", "Nonchalant", "Thoughtless", "Inattentive", "Distracted"]
  },
  {
    "main_word": "Quaint",
    "bangla_meaning": "অদ্ভুত",
    "synonyms": ["Charming", "Picturesque", "Unusual", "Eccentric", "Peculiar"],
    "antonyms": ["Common", "Ordinary", "Regular", "Mundane", "Conventional"]
  },
  {
    "main_word": "Resilient",
    "bangla_meaning": "টেনাস",
    "synonyms": ["Strong", "Tough", "Adaptable", "Robust", "Elastic"],
    "antonyms": ["Fragile", "Weak", "Brittle", "Vulnerable", "Delicate"]
  },
  {
    "main_word": "Serene",
    "bangla_meaning": "শান্ত",
    "synonyms": ["Calm", "Tranquil", "Peaceful", "Placid", "Untroubled"],
    "antonyms": ["Turbulent", "Agitated", "Disturbed", "Chaotic", "Stormy"]
  },
  {
    "main_word": "Tenacious",
    "bangla_meaning": "টেননবসয়াস",
    "synonyms": ["Persistent", "Determined", "Stubborn", "Relentless", "Unyielding"],
    "antonyms": ["Surrendering", "Yielding", "Quitting", "Fainthearted", "Vacillating"]
  },
  {
    "main_word": "Ubiquitous",
    "bangla_meaning": "অতযন্ত প্রচুর",
    "synonyms": ["Omnipresent", "Everywhere", "Pervasive", "Universal", "Widespread"],
    "antonyms": ["Rare", "Scarce", "Limited", "Infrequent", "Uncommon"]
  },
  {
    "main_word": "Vibrant",
    "bangla_meaning": "র্ীিন্ত",
    "synonyms": ["Energetic", "Lively", "Dynamic", "Animated", "Exuberant"],
    "antonyms": ["Dull", "Lifeless", "Drab", "Flat", "Lethargic"]
  },
  {
    "main_word": "Witty",
    "bangla_meaning": "হাসযর্নক",
    "synonyms": ["Clever", "Humorous", "Amusing", "Sparkling", "Sharp-witted"],
    "antonyms": ["Dull", "Boring", "Stupid", "Witless", "Unfunny"]
  },
  {
    "main_word": "Xenial",
    "bangla_meaning": "অবতবিসত্কারী",
    "synonyms": ["Hospitable", "Welcoming", "Friendly", "Cordial", "Gracious"],
    "antonyms": ["Unwelcoming", "Hostile", "Aloof", "Unfriendly", "Cold"]
  },
  {
    "main_word": "Yield",
    "bangla_meaning": "উপাদান",
    "synonyms": ["Produce", "Generate", "Surrender", "Relinquish", "Provide"],
    "antonyms": ["Retain", "Withhold", "Resist", "Hold", "Keep"]
  },
  {
    "main_word": "Zenith",
    "bangla_meaning": "চূডান্ত",
    "synonyms": ["Summit", "Pinnacle", "Apex", "Culmination", "Acme"],
    "antonyms": ["Nadir", "Bottom", "Low point", "Base", "Trough"]
  },
  {
    "main_word": "filter",
    "bangla_meaning": "ফিল্টার",
    "synonyms": ["strain", "sieve", "purify"],
    "antonyms": ["contaminate", "pollute", "adulterate"]
  },
  {
    "main_word": "final",
    "bangla_meaning": "চূডান্ত",
    "synonyms": ["last", "conclusive", "ultimate"],
    "antonyms": ["preliminary", "tentative", "provisional"]
  },
  {
    "main_word": "finance",
    "bangla_meaning": "অর্ থায়ন",
    "synonyms": ["fund", "support", "provide money"],
    "antonyms": ["cut funding", "defund", "withdraw support"]
  },
  {
    "main_word": "find",
    "bangla_meaning": "খ ুঁজে পাওয়া",
    "synonyms": ["locate", "discover", "encounter"],
    "antonyms": ["lose", "misplace", "forget"]
  },
  {
    "main_word": "fine",
    "bangla_meaning": "েফরমানা",
    "synonyms": ["penalty", "punishment", "fee"],
    "antonyms": ["reward", "compensation", "incentive"]
  },
  {
    "main_word": "fragile",
    "bangla_meaning": "ভঙ্গ র",
    "synonyms": ["delicate", "weak", "easily broken"],
    "antonyms": ["strong", "sturdy", "durable"]
  },
  {
    "main_word": "fraction",
    "bangla_meaning": "ভগ্াাংশ",
    "synonyms": ["part", "portion", "fragment"],
    "antonyms": ["whole", "entirety", "totality"]
  },{
    "main_word": "frank",
    "bangla_meaning": "সরল",
    "synonyms": ["honest", "straightforward", "candid"],
    "antonyms": ["deceptive", "evasive", "misleading"]
  },
  {
    "main_word": "frantic",
    "bangla_meaning": "উন্মত্ত",
    "synonyms": ["desperate", "wild", "frenzied"],
    "antonyms": ["calm", "collected", "composed"]
  },
  {
    "main_word": "frequent",
    "bangla_meaning": "ঘন ঘন",
    "synonyms": ["often", "regularly", "repeatedly"],
    "antonyms": ["infrequent", "rare", "occasional"]
  },
  {
    "main_word": "fret",
    "bangla_meaning": "উফিগ্ হওয়া",
    "synonyms": ["worry", "stress", "be anxious"],
    "antonyms": ["relax", "calm down", "de-stress"]
  },
  {
    "main_word": "friction",
    "bangla_meaning": "ঘর্ থণ",
    "synonyms": ["conflict", "disagreement", "tension"],
    "antonyms": ["harmony", "cooperation", "agreement"]
  },
  {
    "main_word": "frugal",
    "bangla_meaning": "ফমতব্যয়়ী",
    "synonyms": ["thrifty", "economical", "saving"],
    "antonyms": ["wasteful", "extravagant", "profligate"]
  },
  {
    "main_word": "fulfill",
    "bangla_meaning": "পূরণ করা",
    "synonyms": ["complete", "achieve", "satisfy"],
    "antonyms": ["fail", "neglect", "disappoint"]
  },
  {
    "main_word": "Garage",
    "bangla_meaning": "গাফডর গযাজরে",
    "synonyms": ["Garage", "carport", "car barn", "outbuilding", "shed"],
    "antonyms": ["House", "car park", "driveway", "parking lot", "station"]
  },
  {
    "main_word": "Garden",
    "bangla_meaning": "ব্াগান",
    "synonyms": ["Garden", "yard", "plot", "nursery", "hothouse"],
    "antonyms": ["Field", "meadow", "wilderness", "desert", "wasteland"]
  },
  {
    "main_word": "Gate",
    "bangla_meaning": "দরো",
    "synonyms": ["Gate", "gatehouse", "portal", "doorway", "entrance"],
    "antonyms": ["Exit", "door", "window", "opening", "passage"]
  },
  {
    "main_word": "Gem",
    "bangla_meaning": "রত্ন",
    "synonyms": ["Gem", "jewel", "gem stone", "precious stone", "semiprecious stone"],
    "antonyms": ["Stone", "pebble", "rock", "mineral", "pebble"]
  },
  {
    "main_word": "Gift",
    "bangla_meaning": "উপহার",
    "synonyms": ["Gift", "present", "donation", "boon", "largesse"],
    "antonyms": ["Theft", "robbery", "pilferage", "plunder", "seizure"]
  },
  {
    "main_word": "Glass",
    "bangla_meaning": "কাচ",
    "synonyms": ["Glass", "drinking glass", "tumbler", "goblet", "mug"],
    "antonyms": ["Cup", "bowl", "plate", "container", "jar"]
  },
  {
    "main_word": "Goal",
    "bangla_meaning": "লক্ষ্য",
    "synonyms": ["Goal", "target", "aim", "objective", "aspiration"],
    "antonyms": ["Miss", "fail", "miss the mark", "go astray", "deviate"]
  },
  {
    "main_word": "Gold",
    "bangla_meaning": "সসানা",
    "synonyms": ["Gold", "gold coin", "gold piece", "bullion", "treasure"],
    "antonyms": ["Silver", "copper", "bronze", "brass", "nickel"]
  },
  {
    "main_word": "Good",
    "bangla_meaning": "ভাজলা",
    "synonyms": ["Good", "excellent", "fine", "pleasant", "agreeable"],
    "antonyms": ["Bad", "evil", "wicked", "unpleasant", "disagreeable"]
  },
  {
    "main_word": "Grateful",
    "bangla_meaning": "কৃ তজ্ঞ",
    "synonyms": ["Grateful", "appreciative", "thankful", "obliged", "indebted"],
    "antonyms": ["Ungrateful", "unthankful", "unappreciative", "thankless"]
  },
  {
    "main_word": "Green",
    "bangla_meaning": "সব্ ে",
    "synonyms": ["Green", "green color", "emerald", "jade", "chartreuse"],
    "antonyms": ["Blue", "red", "yellow", "orange", "purple"]
  },
  {
    "main_word": "Grocery",
    "bangla_meaning": "ম ফদ সদাকান",
    "synonyms": ["Grocery store", "supermarket", "mart", "shopping center", "mall"],
    "antonyms": ["Shop", "stall", "market", "food outlet", "convenience store"]
  },
  {
    "main_word": "Guide",
    "bangla_meaning": "গাইড",
    "synonyms": ["Guide", "leader", "adviser", "advisor", "mentor"],
    "antonyms": ["Ruler", "dictator", "autocrat", "tyrant", "oppressor"]
  },
  {
    "main_word": "Guilt",
    "bangla_meaning": "অপরাধজব্াধ",
    "synonyms": ["Guilt", "remorse", "regret", "shame", "mortification"],
    "antonyms": ["Innocence", "guiltlessness", "blamelessness", "purity", "virtue"]
  },
  {
    "main_word": "Grate",
    "bangla_meaning": "ঝাুঁঝফর",
    "synonyms": ["Grater", "shredder", "grater", "zester", "rasp"],
    "antonyms": ["Slicer", "cutter", "chopper", "shredder", "blender"]
  },
  {
    "main_word": "Grammar",
    "bangla_meaning": "ব্যাকরণ",
    "synonyms": ["Grammar", "syntax", "structure", "language", "rules"],
    "antonyms": ["Literature", "writing", "poetry", "prose", "communication"]
  },
  {
    "main_word": "Grab",
    "bangla_meaning": "ফিনতাই",
    "synonyms": ["Grab", "snatch", "take", "seize", "confiscate"],
    "antonyms": ["Give", "offer", "provide", "donate", "contribute"]
  },
  {
    "main_word": "Grave",
    "bangla_meaning": "কব্র",
    "synonyms": ["Grave", "tomb", "sepulcher", "crypt", "ossuary"],
    "antonyms": ["Life", "existence", "presence", "vitality", "energy"]
  },
  {
    "main_word": "Greet",
    "bangla_meaning": "অফভব্াদন",
    "synonyms": ["Greet", "salute", "welcome", "hail", "address"],
    "antonyms": ["Ignore", "snub", "overlook", "neglect", "disregard"]
  },
  {
    "main_word": "Guess",
    "bangla_meaning": "অন মান",
    "synonyms": ["Guess", "conjecture", "surmise", "suppose", "deduce"],
    "antonyms": ["Know", "understand", "comprehend", "grasp", "realize"]
  },
  {
    "main_word": "Guest",
    "bangla_meaning": "অফতফর্",
    "synonyms": ["Guest", "visitor", "caller", "friend", "relative"],
    "antonyms": ["Host", "householder", "inhabitant", "owner", "resident"]
  },
  {
    "main_word": "Guideline",
    "bangla_meaning": "ফদকফনজদথশনা",
    "synonyms": ["Guideline", "rule", "standard", "practice", "principle"],
    "antonyms": ["Contradiction", "deviation", "irregularity", "anomaly", "abnormality"]
  },
  {
    "main_word": "Guitar",
    "bangla_meaning": "ফগটার",
    "synonyms": ["Guitar", "guitar", "six-stringed instrument", "stringed instrument", "musical instrument"],
    "antonyms": ["Piano", "violin", "cello", "flute", "trumpet"]
  },
  {
  "main_word": "Guidepost",
  "bangla_meaning": "সাইনজব্াডথ",
  "synonyms": ["Guidepost", "signpost", "marker", "direction", "indicator"],
  "antonyms": ["Symbol", "sign", "emblem", "logo", "representation"]
},
{
  "main_word": "Gossip",
  "bangla_meaning": "গফসপ",
  "synonyms": ["Gossip", "rumor", "hearsay", "speculation", "idle talk"],
  "antonyms": ["Fact", "truth", "evidence", "information", "knowledge"]
},
{
  "main_word": "Graveyard",
  "bangla_meaning": "কব্রস্থান",
  "synonyms": ["Graveyard", "cemetery", "burial ground", "charnel house", "necropolis"],
  "antonyms": ["Park", "garden", "meadow", "field", "wilderness"]
},
{
  "main_word": "Habit",
  "bangla_meaning": "অভযাস",
  "synonyms": ["custom", "practice", "routine"],
  "antonyms": ["discontinuity", "innovation"]
},
{
  "main_word": "Hate",
  "bangla_meaning": "ঘৃণা",
  "synonyms": ["aversion", "dislike", "detestation"],
  "antonyms": ["love", "affection", "fondness"]
},
{
  "main_word": "Hazard",
  "bangla_meaning": "ঝ ুঁ ফক",
  "synonyms": ["danger", "peril", "risk"],
  "antonyms": ["safety", "security", "protection"]
},
{
  "main_word": "Head",
  "bangla_meaning": "মার্া",
  "synonyms": ["chief", "leader", "commander"],
  "antonyms": ["subordinate", "follower", "inferior"]
},
{
  "main_word": "Health",
  "bangla_meaning": "স্বাস্থয",
  "synonyms": ["wellbeing", "fitness", "vitality"],
  "antonyms": ["sickness", "illness", "disease"]
},
{
  "main_word": "Hear",
  "bangla_meaning": "শুনজত",
  "synonyms": ["listen", "perceive", "attend"],
  "antonyms": ["deafen", "ignore", "disregard"]
},
{
  "main_word": "Heart",
  "bangla_meaning": "হৃদয়",
  "synonyms": ["core", "center", "essence"],
  "antonyms": ["periphery", "edge", "margin"]
},
{
  "main_word": "Heat",
  "bangla_meaning": "উত্তাপ",
  "synonyms": ["warmth", "hotness", "temperature"],
  "antonyms": ["coolness", "coldness", "chill"]
},
{
  "main_word": "Heaven",
  "bangla_meaning": "স্বগ থ",
  "synonyms": ["paradise", "utopia", "bliss"],
  "antonyms": ["hell", "inferno", "underworld"]
},
{
  "main_word": "Help",
  "bangla_meaning": "সাহায্য",
  "synonyms": ["assistance", "aid", "support"],
  "antonyms": ["hindrance", "obstruction", "obstacle"]
},
{
  "main_word": "Hide",
  "bangla_meaning": "ল কান",
  "synonyms": ["conceal", "disguise", "mask"],
  "antonyms": ["reveal", "expose", "disclose"]
},
{
  "main_word": "High",
  "bangla_meaning": "উুঁচু",
  "synonyms": ["tall", "elevated", "lofty"],
  "antonyms": ["low", "short", "diminished"]
},
{
  "main_word": "History",
  "bangla_meaning": "ইফতহাস",
  "synonyms": ["past", "background", "record"],
  "antonyms": ["future", "present", "forecast"]
},
{
  "main_word": "Hold",
  "bangla_meaning": "ধজর রাখা",
  "synonyms": ["grasp", "grip", "possess"],
  "antonyms": ["release", "let go", "relinquish"]
},
{
  "main_word": "Home",
  "bangla_meaning": "ব্াফড",
  "synonyms": ["house", "residence", "dwelling"],
  "antonyms": ["homelessness", "displacement", "exile"]
},
{
  "main_word": "Honest",
  "bangla_meaning": "সৎ",
  "synonyms": ["truthful", "sincere", "genuine"],
  "antonyms": ["dishonest", "deceitful", "hypocritical"]
},
{
  "main_word": "Hope",
  "bangla_meaning": "আশা",
  "synonyms": ["expectation", "optimism", "belief"],
  "antonyms": ["despair", "hopelessness", "pessimism"]
},
{
  "main_word": "Honor",
  "bangla_meaning": "সম্মান",
  "synonyms": ["respect", "esteem", "admiration"],
  "antonyms": ["disrespect", "insult", "humiliation"]
},
{
  "main_word": "Horse",
  "bangla_meaning": "সঘাডা",
  "synonyms": ["steed", "mount", "stallion"],
  "antonyms": ["mare", "filly", "gelding"]
},
{
  "main_word": "Hospital",
  "bangla_meaning": "হাসপাতাল",
  "synonyms": ["healthcare facility", "clinic", "infirmary"],
  "antonyms": ["outpatient clinic", "private practice", "home care"]
},
{
  "main_word": "Host",
  "bangla_meaning": "আজয়ােক",
  "synonyms": ["organizer", "conductor", "master of ceremonies"],
  "antonyms": ["guest", "participant", "attendee"]
},
{
  "main_word": "Hour",
  "bangla_meaning": "ঘন্টা",
  "synonyms": ["60 minutes", "period", "time"],
  "antonyms": ["minute", "second", "nanosecond"]
},
{
  "main_word": "House",
  "bangla_meaning": "ব্াফড",
  "synonyms": ["dwelling", "residence", "shelter"],
  "antonyms": ["tent", "hut", "shack"]
},
{
  "main_word": "How",
  "bangla_meaning": "ফকভাজব্",
  "synonyms": ["in what way", "by what means"],
  "antonyms": ["why", "what", "wherefore"]
},
{
  "main_word": "Hug",
  "bangla_meaning": "আফলঙ্গন",
  "synonyms": ["embrace", "clasp", "hold"],
  "antonyms": ["reject", "push away", "abandon"]
},
{
  "main_word": "Hungry",
  "bangla_meaning": "ক্ষ্ ধাতথ",
  "synonyms": ["famished", "ravenous", "starving"],
  "antonyms": ["satiated", "full", "contented"]
},
{
  "main_word": "Hurt",
  "bangla_meaning": "আঘাত",
  "synonyms": ["pain", "injury", "damage"],
  "antonyms": ["heal", "mend", "repair"]
},
{
  "main_word": "Hysterical",
  "bangla_meaning": "উন্মত্ত",
  "synonyms": ["frantic", "uncontrolled", "irrational"],
  "antonyms": ["calm", "composed", "rational"]
},
{
  "main_word": "Hypothesis",
  "bangla_meaning": "অন মান",
  "synonyms": ["assumption", "proposition", "conjecture"],
  "antonyms": ["fact", "observation", "evidence"]
},
{
  "main_word": "Habit",
  "bangla_meaning": "অভযাস",
  "synonyms": ["Custom", "Practice"],
  "antonyms": ["Innovation", "Change"]
},
{
  "main_word": "Habitat",
  "bangla_meaning": "আব্াসস্থল",
  "synonyms": ["Environment", "Dwelling"],
  "antonyms": ["Unfamiliarity", "Alienation"]
},
{
  "main_word": "Haggard",
  "bangla_meaning": "ক্লান্ত",
  "synonyms": ["Worn-out", "Exhausted"],
  "antonyms": ["Rested", "Energetic"]
},
{
  "main_word": "Hail",
  "bangla_meaning": "ক য়াশা",
  "synonyms": ["Precipitation", "Ice"],
  "antonyms": ["Sunshine", "Rain"]
},
{
  "main_word": "Hair",
  "bangla_meaning": "চুল",
  "synonyms": ["Tresses", "Locks"],
  "antonyms": ["Baldness", "Shaved"]
},
{
  "main_word": "Half",
  "bangla_meaning": "অজধ থক",
  "synonyms": ["Part", "Portion"],
  "antonyms": ["Whole", "Entire"]
},
{
  "main_word": "Hall",
  "bangla_meaning": "হল",
  "synonyms": ["Room", "Chamber"],
  "antonyms": ["Private", "Bedroom"]
},
{
  "main_word": "Halt",
  "bangla_meaning": "র্ামা",
  "synonyms": ["Stop", "Pause"],
  "antonyms": ["Continue", "Move forward"]
},
{
  "main_word": "Hammer",
  "bangla_meaning": "হাতু ফড",
  "synonyms": ["Tool", "Strike"],
  "antonyms": ["Gentleness", "Care"]
},
{
  "main_word": "Hand",
  "bangla_meaning": "হাত",
  "synonyms": ["Arm", "Limb"],
  "antonyms": ["Foot", "Leg"]
},
{
  "main_word": "Hang",
  "bangla_meaning": "ঝ লাজনা",
  "synonyms": ["Suspend", "Swing"],
  "antonyms": ["Support", "Stand"]
},
{
  "main_word": "Happen",
  "bangla_meaning": "ঘটনা",
  "synonyms": ["Occur", "Take place"],
  "antonyms": ["Prevent", "Avoid"]
},
{
  "main_word": "Happy",
  "bangla_meaning": "স খ়ী",
  "synonyms": ["Joyful", "Delighted"],
  "antonyms": ["Sad", "Unhappy"]
},
{
  "main_word": "Hard",
  "bangla_meaning": "কঠিন",
  "synonyms": ["Difficult", "Firm"],
  "antonyms": ["Soft", "Easy"]
},
{
  "main_word": "Harm",
  "bangla_meaning": "ক্ষ্ফত",
  "synonyms": ["Injury", "Damage"],
  "antonyms": ["Help", "Benefit"]
},
{
  "main_word": "Harmony",
  "bangla_meaning": "স র",
  "synonyms": ["Concord", "Agreement"],
  "antonyms": ["Dissonance", "Discord"]
},
{
  "main_word": "Harsh",
  "bangla_meaning": "ফনর্্িুর",
  "synonyms": ["Rough", "Severe"],
  "antonyms": ["Gentle", "Mild"]
},
{
  "main_word": "Harvest",
  "bangla_meaning": "িসল",
  "synonyms": ["Crop", "Reaping"],
  "antonyms": ["Scarcity", "Famine"]
},
{
  "main_word": "Hate",
  "bangla_meaning": "ঘৃণা",
  "synonyms": ["Loathe", "Detest"],
  "antonyms": ["Love", "Adore"]
},
{
  "main_word": "Have",
  "bangla_meaning": "র্াকা",
  "synonyms": ["Possess", "Own"],
  "antonyms": ["Lack", "Not have"]
},
{
  "main_word": "Hazard",
  "bangla_meaning": "ঝ ুঁ ফক",
  "synonyms": ["Danger", "Risk"],
  "antonyms": ["Safety", "Security"]
},
{
  "main_word": "Head",
  "bangla_meaning": "মার্া",
  "synonyms": ["Top", "Leader"],
  "antonyms": ["Body", "Follower"]
},
{
  "main_word": "Heal",
  "bangla_meaning": "স স্থ হওয়া",
  "synonyms": ["Cure", "Recover"],
  "antonyms": ["Wound", "Deteriorate"]
},
{
  "main_word": "Health",
  "bangla_meaning": "স্বাস্থয",
  "synonyms": ["Wellbeing", "Fitness"],
  "antonyms": ["Sickness", "Illness"]
},
{
  "main_word": "Hear",
  "bangla_meaning": "শুনজত পাওয়া",
  "synonyms": ["Listen", "Perceive"],
  "antonyms": ["Deafness", "Ignoring"]
},
{
  "main_word": "Heat",
  "bangla_meaning": "গরম",
  "synonyms": ["Warmth", "Temperature"],
  "antonyms": ["Cold", "Frost"]
},
{
  "main_word": "Heaven",
  "bangla_meaning": "স্বগ থ",
  "synonyms": ["Paradise", "Bliss"],
  "antonyms": ["Hell", "Suffering"]
},
{
  "main_word": "Heavy",
  "bangla_meaning": "ভার়ী",
  "synonyms": ["Weighty", "Oppressive"],
  "antonyms": ["Light", "Easy"]
},
{
  "main_word": "Help",
  "bangla_meaning": "সাহায্য",
  "synonyms": ["Assistance", "Support"],
  "antonyms": ["Hinderance", "Opposition"]
},
{
  "main_word": "Hide",
  "bangla_meaning": "ল কাজনা",
  "synonyms": ["Conceal", "Secrete"],
  "antonyms": ["Reveal", "Show"]
},
{
  "main_word": "Hill",
  "bangla_meaning": "পাহাড",
  "synonyms": ["Mountain", "Mound"],
  "antonyms": ["Valley", "Depression"]
},
{
  "main_word": "Hint",
  "bangla_meaning": "ইফঙ্গত",
  "synonyms": ["Suggestion", "Clue"],
  "antonyms": ["Certainty", "Explicitness"]
},
{
  "main_word": "History",
  "bangla_meaning": "ইফতহাস",
  "synonyms": ["Past", "Events"],
  "antonyms": ["Future", "Present"]
},
{
  "main_word": "Hold",
  "bangla_meaning": "ধরা",
  "synonyms": ["Grip", "Possess"],
  "antonyms": ["Release", "Lose"]
},
{
  "main_word": "Hole",
  "bangla_meaning": "গত থ",
  "synonyms": ["Hollow", "Cavity"],
  "antonyms": ["Solid", "Fullness"]
},
{
  "main_word": "Home",
  "bangla_meaning": "ব্াফড",
  "synonyms": ["House", "Residence"],
  "antonyms": ["Away", "Homeless"]
},
{
  "main_word": "Honest",
  "bangla_meaning": "সৎ",
  "synonyms": ["Truthful", "Sincere"],
  "antonyms": ["Dishonest", "Deceitful"]
},
{
  "main_word": "Honey",
  "bangla_meaning": "মধ",
  "synonyms": ["Sweetener", "Nectar"],
  "antonyms": ["Bitterness", "Sourness"]
},
{
  "main_word": "Honor",
  "bangla_meaning": "সম্মান",
  "synonyms": ["Respect", "Dignity"],
  "antonyms": ["Shame", "Dishonor"]
},
{
  "main_word": "Hope",
  "bangla_meaning": "আশা",
  "synonyms": ["Expectation", "Desire"],
  "antonyms": ["Despair", "Hopelessness"]
},
{
  "main_word": "Horn",
  "bangla_meaning": "ফশাং",
  "synonyms": ["Projection", "Sound"],
  "antonyms": ["Silence", "Smoothness"]
},
{
  "main_word": "Horror",
  "bangla_meaning": "ভয়াব্হ",
  "synonyms": ["Terror", "Dread"],
  "antonyms": ["Comfort", "Security"]
},
{
  "main_word": "Horse",
  "bangla_meaning": "সঘাডা",
  "synonyms": ["Animal", "Mount"],
  "antonyms": ["Walk", "Foot"]
},
{
  "main_word": "Hospital",
  "bangla_meaning": "হাসপাতাল",
  "synonyms": ["Medical facility", "Clinic"],
  "antonyms": ["Home", "Health"]
},
{
  "main_word": "Hotel",
  "bangla_meaning": "সহাজটল",
  "synonyms": ["Lodging", "Accommodation"],
  "antonyms": ["Home", "Residence"]
},
{
  "main_word": "Hour",
  "bangla_meaning": "ঘন্টা",
  "synonyms": ["Time", "Period"],
  "antonyms": ["Moment", "Instant"]
},
{
  "main_word": "House",
  "bangla_meaning": "ব্াফড",
  "synonyms": ["Building", "Dwelling"],
  "antonyms": ["Yard", "Garden"]
},
{
  "main_word": "Happy",
  "bangla_meaning": "স খ়ী",
  "synonyms": ["Joyful", "Glad"],
  "antonyms": ["Sad", "Unhappy"]
},
{
  "main_word": "Habit",
  "bangla_meaning": "অভযাস",
  "synonyms": ["Custom", "Practice"],
  "antonyms": ["Unhabitual", "Uncommon"]
},
{
  "main_word": "Hair",
  "bangla_meaning": "চুল",
  "synonyms": ["Tresses", "Locks"],
  "antonyms": ["Baldness", "Shaved"]
},
{
  "main_word": "Half",
  "bangla_meaning": "অজধ থক",
  "synonyms": ["Middle", "Medium"],
  "antonyms": ["Whole", "Entire"]
},
{
  "main_word": "Hall",
  "bangla_meaning": "হল",
  "synonyms": ["Auditorium", "Lobby"],
  "antonyms": ["Small room", "Chamber"]
},
{
  "main_word": "Halt",
  "bangla_meaning": "ফব্রফত",
  "synonyms": ["Stop", "Pause"],
  "antonyms": ["Continue", "Move"]
},
{
  "main_word": "Hammer",
  "bangla_meaning": "হাতু ফড",
  "synonyms": ["Mallet", "Maul"],
  "antonyms": ["Saw", "Scissor"]
},
{
  "main_word": "Hand",
  "bangla_meaning": "হাত",
  "synonyms": ["Palm", "Limb"],
  "antonyms": ["Foot", "Leg"]
},
{
  "main_word": "Happen",
  "bangla_meaning": "ঘজট",
  "synonyms": ["Occur", "Befall"],
  "antonyms": ["Avoid", "Prevent"]
},
{
  "main_word": "Harbor",
  "bangla_meaning": "ব্ন্দর",
  "synonyms": ["Port", "Haven"],
  "antonyms": ["Open sea", "Reef"]
},
{
  "main_word": "Hard",
  "bangla_meaning": "শক্ত",
  "synonyms": ["Tough", "Firm"],
  "antonyms": ["Soft", "Gentle"]
},
{
  "main_word": "Harm",
  "bangla_meaning": "ক্ষ্ফত",
  "synonyms": ["Injury", "Damage"],
  "antonyms": ["Benefit", "Advantage"]
},
{
  "main_word": "Hat",
  "bangla_meaning": "টুফপ",
  "synonyms": ["Cap", "Fedora"],
  "antonyms": ["Bareheaded", "Uncovered"]
},
{
  "main_word": "Hate",
  "bangla_meaning": "ঘৃণা",
  "synonyms": ["Loathe", "Despise"],
  "antonyms": ["Love", "Adore"]
},
{
  "main_word": "Have",
  "bangla_meaning": "আজি",
  "synonyms": ["Possess", "Own"],
  "antonyms": ["Lack", "Devoid"]
},
{
  "main_word": "Head",
  "bangla_meaning": "মার্া",
  "synonyms": ["Chief", "Leader"],
  "antonyms": ["Follower", "Subordinate"]
},
{
  "main_word": "Heal",
  "bangla_meaning": "স স্থ",
  "synonyms": ["Cure", "Recover"],
  "antonyms": ["Wound", "Sicken"]
},
{
  "main_word": "Health",
  "bangla_meaning": "স্বাস্থ্য",
  "synonyms": ["Fitness", "Well-being"],
  "antonyms": ["Sickness", "Illness"]
},
{
  "main_word": "Hear",
  "bangla_meaning": "শুনতে",
  "synonyms": ["Listen", "Perceive"],
  "antonyms": ["Deaf", "Unhearing"]
},
{
  "main_word": "Heart",
  "bangla_meaning": "হৃদয়",
  "synonyms": ["Core", "Center"],
  "antonyms": ["Periphery", "Edge"]
},
{
  "main_word": "Heat",
  "bangla_meaning": "তপ",
  "synonyms": ["Warmth", "Hotness"],
  "antonyms": ["Cold", "Chill"]
},
{
  "main_word": "Heaven",
  "bangla_meaning": "স্বর্ গ",
  "synonyms": ["Paradise", "Bliss"],
  "antonyms": ["Hell", "Purgatory"]
},
{
  "main_word": "Heavy",
  "bangla_meaning": "ভারী",
  "synonyms": ["Weighty", "Bulky"],
  "antonyms": ["Light", "Featherweight"]
},
{
  "main_word": "Help",
  "bangla_meaning": "সাহায্য",
  "synonyms": ["Assist", "Aid"],
  "antonyms": ["Hinder", "Obstruct"]
},
{
  "main_word": "Hide",
  "bangla_meaning": "লুকান",
  "synonyms": ["Conceal", "Secrete"],
  "antonyms": ["Reveal", "Disclose"]
},
{
  "main_word": "High",
  "bangla_meaning": "উঁচু",
  "synonyms": ["Tall", "Elevated"],
  "antonyms": ["Low", "Short"]
},
{
  "main_word": "Hill",
  "bangla_meaning": "পাহাড়",
  "synonyms": ["Mountain", "Mound"],
  "antonyms": ["Valley", "Plain"]
},
{
  "main_word": "History",
  "bangla_meaning": "ইতেহাস",
  "synonyms": ["Past", "Record"],
  "antonyms": ["Future", "Prediction"]
},
{
  "main_word": "Hold",
  "bangla_meaning": "ধতর রাখা",
  "synonyms": ["Grip", "Grasp"],
  "antonyms": ["Release", "Let go"]
},
{
  "main_word": "Hole",
  "bangla_meaning": "র্ে গ",
  "synonyms": ["Cavity", "Aperture"],
  "antonyms": ["Whole", "Solid"]
},
{
  "main_word": "Home",
  "bangla_meaning": "বাতড়",
  "synonyms": ["Residence", "Dwelling"],
  "antonyms": ["Away", "Abroad"]
},
{
  "main_word": "Honest",
  "bangla_meaning": "সৎ",
  "synonyms": ["Truthful", "Upright"],
  "antonyms": ["Dishonest", "Deceitful"]
},
{
  "main_word": "Honey",
  "bangla_meaning": "মধু",
  "synonyms": ["Nectar", "Syrup"],
  "antonyms": ["Bitterness", "Gall"]
},
{
  "main_word": "Hope",
  "bangla_meaning": "আশা",
  "synonyms": ["Expectation", "Wish"],
  "antonyms": ["Despair", "Hopelessness"]
},
{
  "main_word": "Horse",
  "bangla_meaning": "ঘ াড়া",
  "synonyms": ["Steed", "Mare"],
  "antonyms": ["Donkey", "Mule"]
},
{
  "main_word": "Hospital",
  "bangla_meaning": "হাসপাোল",
  "synonyms": ["Medical center", "Clinic"],
  "antonyms": ["Home", "Individual"]
},
{
  "main_word": "Hot",
  "bangla_meaning": "র্রম",
  "synonyms": ["Warm", "Steamy"],
  "antonyms": ["Cold", "Chilly"]
},
{
  "main_word": "Hour",
  "bangla_meaning": "ন্টা",
  "synonyms": ["Sixty minutes", "Time"],
  "antonyms": ["Minute", "Second"]
},
{
  "main_word": "House",
  "bangla_meaning": "র",
  "synonyms": ["Building", "Dwelling"],
  "antonyms": ["Street", "Backyard"]
},
{
  "main_word": "How",
  "bangla_meaning": "তকভাতব",
  "synonyms": ["In what way", "Manner"],
  "antonyms": ["Why", "For what reason"]
},
{
  "main_word": "Hungry",
  "bangla_meaning": "ক্ষু ধােগ",
  "synonyms": ["Starving", "Ravenous"],
  "antonyms": ["Full", "Satisfied"]
},
{
  "main_word": "Hurry",
  "bangla_meaning": "োড়াহুড়া",
  "synonyms": ["Haste", "Speed"],
  "antonyms": ["Leisure", "Relaxation"]
},
{
  "main_word": "Hurt",
  "bangla_meaning": "আ াে",
  "synonyms": ["Pain", "Injury"],
  "antonyms": ["Heal", "Solace"]
},
{
  "main_word": "Husband",
  "bangla_meaning": "স্বামী",
  "synonyms": ["Spouse", "Partner"],
  "antonyms": ["Wife", "Mate"]
},
{
  "main_word": "Ideal",
  "bangla_meaning": "আদশ গ",
  "synonyms": ["Perfect", "Exemplary"],
  "antonyms": ["Bad", "Flawed"]
},
{
  "main_word": "Identify",
  "bangla_meaning": "শনাক্ত করা",
  "synonyms": ["Recognize", "Determine"],
  "antonyms": ["Misidentify", "Confuse"]
},
{
  "main_word": "Ignore",
  "bangla_meaning": "উতপক্ষা করা",
  "synonyms": ["Disregard", "Neglect"],
  "antonyms": ["Notice", "Acknowledge"]
},
{
  "main_word": "Illogical",
  "bangla_meaning": "অতয্ৌক্তক্তক",
  "synonyms": ["Unreasonable", "Senseless"],
  "antonyms": ["Logical", "Sensible"]
},
{
  "main_word": "Illustrate",
  "bangla_meaning": "বযাখযা করা",
  "synonyms": ["Explain", "Clarify"],
  "antonyms": ["Conceal", "Obfuscate"]
},
{
  "main_word": "Immense",
  "bangla_meaning": "তবশাল",
  "synonyms": ["Huge", "Enormous"],
  "antonyms": ["Small", "Tiny"]
},
{
  "main_word": "Immerse",
  "bangla_meaning": "ডুতবতয় রাখা",
  "synonyms": ["Dip", "Submerge"],
  "antonyms": ["Remove", "Extract"]
},
{
  "main_word": "Imminent",
  "bangla_meaning": "সতিকট",
  "synonyms": ["Near", "Approaching"],
  "antonyms": ["Far", "Distant"]
},
{
  "main_word": "Impartial",
  "bangla_meaning": "তনরতপক্ষ",
  "synonyms": ["Unbiased", "Fair"],
  "antonyms": ["Biased", "Prejudiced"]
},
{
  "main_word": "Imply",
  "bangla_meaning": "ইতিে করা",
  "synonyms": ["Suggest", "Hint"],
  "antonyms": ["State explicitly", "Clarify"]
},
{
  "main_word": "Important",
  "bangla_meaning": "গুরুত্বপূর্ গ",
  "synonyms": ["Significant", "Essential"],
  "antonyms": ["Unimportant", "Trivial"]
},
{
  "main_word": "Impossible",
  "bangla_meaning": "অসম্ভব",
  "synonyms": ["Unfeasible", "Unattainable"],
  "antonyms": ["Possible", "Doable"]
},
{
  "main_word": "Impress",
  "bangla_meaning": "প্রভাতবে করা",
  "synonyms": ["Impress", "Awe"],
  "antonyms": ["Disappoint", "Bore"]
},
{
  "main_word": "Improve",
  "bangla_meaning": "উিতে করা",
  "synonyms": ["Enhance", "Better"],
  "antonyms": ["Worsen", "Deteriorate"]
},
{
  "main_word": "Impulse",
  "bangla_meaning": "আতবর্",
  "synonyms": ["Sudden urge", "Feeling"],
  "antonyms": ["Rationality", "Deliberation"]
},
{
  "main_word": "Incapable",
  "bangla_meaning": "অক্ষম",
  "synonyms": ["Unable", "Incapable"],
  "antonyms": ["Capable", "Competent"]
},
{
  "main_word": "Include",
  "bangla_meaning": "অন্তভুক্তগ করা",
  "synonyms": ["Encompass", "Incorporate"],
  "antonyms": ["Exclude", "Omit"]
},
{
  "main_word": "Increase",
  "bangla_meaning": "বৃক্তি করা",
  "synonyms": ["Grow", "Expand"],
  "antonyms": ["Decrease", "Shrink"]
},
{
  "main_word": "Incredible",
  "bangla_meaning": "অতবশ্বাসয",
  "synonyms": ["Unbelievable", "Extraordinary"],
  "antonyms": ["Believable", "Ordinary"]
},
{
  "main_word": "Indecent",
  "bangla_meaning": "অশালীন",
  "synonyms": ["Immoral", "Offensive"],
  "antonyms": ["Decent", "Proper"]
},
{
  "main_word": "Indicate",
  "bangla_meaning": "ইতিে ঘদওয়া",
  "synonyms": ["Show", "Signify"],
  "antonyms": ["Conceal", "Obscure"]
},
{
  "main_word": "Individual",
  "bangla_meaning": "বযক্তক্ত",
  "synonyms": ["Person", "Individual"],
  "antonyms": ["Group", "Collective"]
},
{
  "main_word": "Induce",
  "bangla_meaning": "অনুপ্রাতর্ে করা",
  "synonyms": ["Persuade", "Motivate"],
  "antonyms": ["Discourage", "Deter"]
},
{
  "main_word": "Inevitable",
  "bangla_meaning": "অতনবায্ গ",
  "synonyms": ["Unavoidable", "Inevitable"],
  "antonyms": ["Avoidable", "Optional"]
},
{
  "main_word": "Influence",
  "bangla_meaning": "প্রভাব",
  "synonyms": ["Power to sway", "Impact"],
  "antonyms": ["No influence", "Insignificant"]
},
{
  "main_word": "Initiate",
  "bangla_meaning": "শুরু করা",
  "synonyms": ["Begin", "Start"],
  "antonyms": ["Stop", "End"]
},
{
  "main_word": "Innovative",
  "bangla_meaning": "উদ্ভাবনী",
  "synonyms": ["New", "Creative"],
  "antonyms": ["Traditional", "Ordinary"]
},
{
  "main_word": "Innocent",
  "bangla_meaning": "তনতদগাষ",
  "synonyms": ["Pure", "Guiltless"],
  "antonyms": ["Guilty", "Culpable"]
},
{
  "main_word": "Insightful",
  "bangla_meaning": "অন্তদৃগষ্টি সম্পি",
  "synonyms": ["Wise", "Perceptive"],
  "antonyms": ["Foolish", "Ignorant"]
},
{
  "main_word": "Inspire",
  "bangla_meaning": "অনুপ্রাতর্ে করা",
  "synonyms": ["Motivate", "Encourage"],
  "antonyms": ["Discourage", "Demotivate"]
},
{
  "main_word": "Instead",
  "bangla_meaning": "পতরবতেগ",
  "synonyms": ["In place of", "Rather"],
  "antonyms": ["Same", "Similar"]
},
{
  "main_word": "Instinct",
  "bangla_meaning": "সহজাে প্রবৃতি",
  "synonyms": ["Natural intuition", "Impulse"],
  "antonyms": ["Learned behavior", "Conscious decision"]
},
{
  "main_word": "Instruct",
  "bangla_meaning": "তনতদগশ ঘদওয়া",
  "synonyms": ["Teach", "Advise"],
  "antonyms": ["Mislead", "Confuse"]
},
{
  "main_word": "Integrate",
  "bangla_meaning": "একীভূে করা",
  "synonyms": ["Combine", "Merge"],
  "antonyms": ["Separate", "Divide"]
},
{
  "main_word": "Intense",
  "bangla_meaning": "েীব্র",
  "synonyms": ["Strong", "Powerful"],
  "antonyms": ["Weak", "Mild"]
},
{
  "main_word": "Intention",
  "bangla_meaning": "উতেশয",
  "synonyms": ["Purpose", "Aim"],
  "antonyms": ["No intention", "Accidental"]
},
{
  "main_word": "Interact",
  "bangla_meaning": "ইন্টারঅযাক্ট করা",
  "synonyms": ["Engage", "Communicate"],
  "antonyms": ["Ignore", "Isolate"]
},
{
  "main_word": "Interest",
  "bangla_meaning": "আগ্রহ",
  "synonyms": ["Curiosity", "Concern"],
  "antonyms": ["Disinterest", "Boredom"]
},
{
  "main_word": "Interfere",
  "bangla_meaning": "হস্ততক্ষপ করা",
  "synonyms": ["Meddle", "Interrupt"],
  "antonyms": ["Not interfere", "Let be"]
},
{
  "main_word": "Interpretive",
  "bangla_meaning": "বযাখযামূলক",
  "synonyms": ["Explanatory", "Analytical"],
  "antonyms": ["Descriptive", "Factual"]
},
{
  "main_word": "Interval",
  "bangla_meaning": "বযবধান",
  "synonyms": ["Gap", "Time between"],
  "antonyms": ["Continuity", "Immediacy"]
},
{
  "main_word": "Introduce",
  "bangla_meaning": "পতরচয় কতরতয় ঘদওয়া",
  "synonyms": ["Present", "Bring to attention"],
  "antonyms": ["Withdraw", "Hide"]
},
{
  "main_word": "Investigate",
  "bangla_meaning": "েদন্ত করা",
  "synonyms": ["Research", "Inquire"],
  "antonyms": ["Ignore", "Overlook"]
},
{
  "main_word": "ideal",
  "bangla_meaning": "আদশ গ",
  "synonyms": ["Perfect", "Excellent", "Flawless"],
  "antonyms": ["Imperfect", "Flawed", "Poor"]
},
{
  "main_word": "idle",
  "bangla_meaning": "অলস",
  "synonyms": ["Inactive", "Unemployed", "Lazy"],
  "antonyms": ["Busy", "Active", "Industrious"]
},
{
  "main_word": "ignite",
  "bangla_meaning": "জ্বালাময় করা",
  "synonyms": ["Set on fire", "Spark", "Inflame"],
  "antonyms": ["Extinguish", "Quench", "Put out"]
},
{
  "main_word": "ignore",
  "bangla_meaning": "উতপক্ষা করা",
  "synonyms": ["Disregard", "Pay no attention", "Overlook"],
  "antonyms": ["Acknowledge", "Notice", "Heed"]
},
{
  "main_word": "illegal",
  "bangla_meaning": "অববধ",
  "synonyms": ["Unlawful", "Forbidden", "Prohibited"],
  "antonyms": ["Legal", "Lawful", "Permitted"]
},
{
  "main_word": "illness",
  "bangla_meaning": "অসুস্থ্",
  "synonyms": ["Sickness", "Disease", "Ailment"],
  "antonyms": ["Health", "Wellness", "Well-being"]
},
{
  "main_word": "illuminate",
  "bangla_meaning": "আতলাতকে করা",
  "synonyms": ["Brighten", "Light up", "Clarify"],
  "antonyms": ["Darken", "Obscure", "Dim"]
},
{
  "main_word": "immediate",
  "bangla_meaning": "োৎক্ষতর্ক",
  "synonyms": ["Without delay", "Instant", "Prompt"],
  "antonyms": ["Delayed", "Postponed", "Slow"]
},
{
  "main_word": "immense",
  "bangla_meaning": "তবশাল",
  "synonyms": ["Enormous", "Vast", "Huge"],
  "antonyms": ["Small", "Tiny", "Miniature"]
},
{
  "main_word": "immoral",
  "bangla_meaning": "অবনতেক",
  "synonyms": ["Wrong", "Unethical", "Corrupt"],
  "antonyms": ["Moral", "Ethical", "Righteous"]
},
{
  "main_word": "impatient",
  "bangla_meaning": "অতস্থ্র",
  "synonyms": ["Restless", "Intolerant", "Irritable"],
  "antonyms": ["Patient", "Tolerant", "Calm"]
},
{
  "main_word": "impeccable",
  "bangla_meaning": "তনখুঁে",
  "synonyms": ["Flawless", "Perfect", "Blameless"],
  "antonyms": ["Flawed", "Imperfect", "Faulty"]
},
{
  "main_word": "implement",
  "bangla_meaning": "বাস্তবায়ন করা",
  "synonyms": ["Put into effect", "Carry out", "Execute"],
  "antonyms": ["Abandon", "Neglect", "Ignore"]
},
{
  "main_word": "imply",
  "bangla_meaning": "ইতিে করা",
  "synonyms": ["Suggest", "Hint", "Imply"],
  "antonyms": ["State explicitly", "Express", "Declare"]
},
{
  "main_word": "import",
  "bangla_meaning": "আমদাতন করা",
  "synonyms": ["Bring into a country from abroad", "Export", "Send out"],
  "antonyms": ["Export", "Send out", "Ship out"]
},
{
  "main_word": "impressive",
  "bangla_meaning": "তচিাকষ গক",
  "synonyms": ["Imposing", "Striking", "Remarkable"],
  "antonyms": ["Unimpressive", "Dull", "Ordinary"]
},
{
  "main_word": "imprison",
  "bangla_meaning": "কারাবক্তি করা",
  "synonyms": ["Confine in jail", "Imprison", "Incarcerate"],
  "antonyms": ["Release", "Set free", "Liberate"]
},
{
  "main_word": "improve",
  "bangla_meaning": "উন্নতি করা",
  "synonyms": ["Make better", "Enhance", "Perfect"],
  "antonyms": ["Worsen", "Deteriorate", "Decline"]
},
{
  "main_word": "impulse",
  "bangla_meaning": "আকাঙ্ক্ষা",
  "synonyms": ["Sudden urge", "Desire", "Motivation"],
  "antonyms": ["Restraint", "Self-control", "Inhibition"]
},
{
  "main_word": "inadequate",
  "bangla_meaning": "অপ্রেু ল",
  "synonyms": ["Insufficient", "Not enough", "Deficient"],
  "antonyms": ["Adequate", "Sufficient", "Enough"]
},
{
  "main_word": "inactive",
  "bangla_meaning": "তনক্তিয়",
  "synonyms": ["Not active", "Idle", "Motionless"],
  "antonyms": ["Active", "Energetic", "Lively"]
},
{
  "main_word": "inaccurate",
  "bangla_meaning": "ভুল",
  "synonyms": ["Incorrect", "Inaccurate", "Misleading"],
  "antonyms": ["Accurate", "Precise", "Correct"]
},
{
  "main_word": "incapable",
  "bangla_meaning": "অক্ষম",
  "synonyms": ["Unable", "Incompetent", "Incapable"],
  "antonyms": ["Capable", "Able", "Competent"]
},
{
  "main_word": "incentive",
  "bangla_meaning": "উৎসাহ",
  "synonyms": ["Motivation", "Encouragement", "Incentive"],
  "antonyms": ["Discouragement", "Deterrent", "Obstacle"]
},
{
  "main_word": "incident",
  "bangla_meaning": "ঘটনা",
  "synonyms": ["Event", "Occurrence", "Incident"],
  "antonyms": ["Non-event", "Absence", "Nothing"]
},
{
  "main_word": "incline",
  "bangla_meaning": "ঝুঁ কাতনা",
  "synonyms": ["Tilt", "Slope", "Slant"],
  "antonyms": ["Level", "Horizontal", "Flat"]
},
{
  "main_word": "include",
  "bangla_meaning": "অন্তভুক্তগ করা",
  "synonyms": ["Contain", "Comprise", "Include"],
  "antonyms": ["Exclude", "Omit", "Leave out"]
},
{
  "main_word": "income",
  "bangla_meaning": "আয়",
  "synonyms": ["Revenue", "Earnings", "Income"],
  "antonyms": ["Expense", "Cost", "Expenditure"]
},
{
  "main_word": "increase",
  "bangla_meaning": "বৃক্তি",
  "synonyms": ["Grow", "Expand", "Increase"],
  "antonyms": ["Decrease", "Decline", "Shrink"]
},
{
  "main_word": "incredible",
  "bangla_meaning": "অতবশ্বাসয",
  "synonyms": ["Unbelievable", "Extraordinary", "Amazing"],
  "antonyms": ["Believable", "Ordinary", "Normal"]
},
{
  "main_word": "independent",
  "bangla_meaning": "স্বাধীন",
  "synonyms": ["Free", "Autonomous", "Independent"],
  "antonyms": ["Dependent", "Reliant", "Subordinate"]
},
{
  "main_word": "indicate",
  "bangla_meaning": "ইতিে করা",
  "synonyms": ["Show", "Signify", "Indicate"],
  "antonyms": ["Hide", "Conceal", "Obscure"]
},
{
  "main_word": "indifferent",
  "bangla_meaning": "উদাসীন",
  "synonyms": ["Unconcerned", "Apathetic", "Indifferent"],
  "antonyms": ["Interested", "Concerned", "Enthusiastic"]
},
{
  "main_word": "individual",
  "bangla_meaning": "বযক্তক্ত",
  "synonyms": ["Person", "Individual", "Single"],
  "antonyms": ["Group", "collective", "whole"]
},
{
  "main_word": "inevitable",
  "bangla_meaning": "অবশযম্ভাবী",
  "synonyms": ["Unavoidable", "Sure to happen", "Inevitable"],
  "antonyms": ["Avoidable", "Preventable", "Possible to stop"]
},
{
  "main_word": "inflate",
  "bangla_meaning": "ঘ ালাতনা",
  "synonyms": ["Blow up", "Expand", "Increase"],
  "antonyms": ["Deflate", "Shrink", "Decrease"]
},
{
  "main_word": "influence",
  "bangla_meaning": "প্রভাব",
  "synonyms": ["Sway", "Affect", "Influence"],
  "antonyms": ["Resist", "Oppose", "Defy"]
},
{
  "main_word": "initial",
  "bangla_meaning": "প্রাথতমক",
  "synonyms": ["First", "Beginning", "Initial"],
  "antonyms": ["Final", "Last", "Ending"]
},
{
  "main_word": "injure",
  "bangla_meaning": "আহে করা",
  "synonyms": ["Hurt", "Wound", "Injure"],
  "antonyms": ["Heal", "Cure", "Restore"]
},
{
  "main_word": "innocent",
  "bangla_meaning": "তনতদগাষ",
  "synonyms": ["Blameless", "Innocent", "Harmless"],
  "antonyms": ["Guilty", "Culpable", "Responsible"]
},
{
  "main_word": "inquiry",
  "bangla_meaning": "অনুসন্ধান",
  "synonyms": ["Investigation", "Research", "Inquiry"],
  "antonyms": ["Non-inquiry", "Acceptance", "Certainty"]
},
{
  "main_word": "insert",
  "bangla_meaning": "ঘ াকাতনা",
  "synonyms": ["Put in", "Insert", "Introduce"],
  "antonyms": ["Remove", "Take out", "Extract"]
},
{
  "main_word": "inspire",
  "bangla_meaning": "অনুপ্রাতর্ে করা",
  "synonyms": ["Motivate", "Inspire", "Encourage"],
  "antonyms": []
},
{
  "main_word": "idea",
  "bangla_meaning": "ধারর্া",
  "synonyms": ["Thought", "Concept", "Notion"],
  "antonyms": ["Reality", "Fact", "Misconception"]
},
{
  "main_word": "ideal",
  "bangla_meaning": "আদশ গ",
  "synonyms": ["Perfect", "Exemplary", "Model"],
  "antonyms": ["Imperfect", "Flawed", "Substandard"]
},
{
  "main_word": "identify",
  "bangla_meaning": "তচতিে করা",
  "synonyms": ["Recognize", "Distinguish", "Pinpoint"],
  "antonyms": ["Misidentify", "Confuse", "Overlook"]
},
{
  "main_word": "ignore",
  "bangla_meaning": "উতপক্ষা করা",
  "synonyms": ["Disregard", "Neglect", "Pay no attention to"],
  "antonyms": ["Notice", "Heed", "Acknowledge"]
},
{
  "main_word": "illuminate",
  "bangla_meaning": "আতলাতকে করা",
  "synonyms": ["Brighten", "Clarify", "Enlighten"],
  "antonyms": ["Darken", "Obscure", "Confuse"]
},
{
  "main_word": "Imagine",
  "bangla_meaning": "কল্পনা করা",
  "synonyms": ["Envision", "Picture", "Conceive"],
  "antonyms": ["Disbelieve", "Doubt", "Question"]
},
{
  "main_word": "Imitate",
  "bangla_meaning": "অনুকরর্ করা",
  "synonyms": ["Mimic", "Copy", "Reproduce"],
  "antonyms": ["Innovate", "Originate", "Create"]
},
{
  "main_word": "Immediate",
  "bangla_meaning": "োৎক্ষতর্ক",
  "synonyms": ["Prompt", "Instant", "Right away"],
  "antonyms": ["Delayed", "Postponed", "Deferred"]
},
{
  "main_word": "Immense",
  "bangla_meaning": "তবশাল",
  "synonyms": ["Huge", "Enormous", "Vast"],
  "antonyms": ["Small", "Tiny", "Miniature"]
},
{
  "main_word": "Imminent",
  "bangla_meaning": "টনাসি",
  "synonyms": ["Approaching", "About to happen"],
  "antonyms": ["Distant", "Future", "Remote"]
},
{
  "main_word": "Impact",
  "bangla_meaning": "প্রভাব",
  "synonyms": ["Influence", "Effect", "Consequence"],
  "antonyms": ["Unimportance", "Insignificance", "Irrelevance"]
},
{
  "main_word": "Impart",
  "bangla_meaning": "জ্ঞানদান করা",
  "synonyms": ["Share", "Communicate", "Convey"],
  "antonyms": ["Withhold", "Conceal", "Hide"]
},
{
  "main_word": "Impatient",
  "bangla_meaning": "অতস্থ্র",
  "synonyms": ["Restless", "Eager", "Intolerant"],
  "antonyms": ["Patient", "Calm", "Understanding"]
},
{
  "main_word": "Impeach",
  "bangla_meaning": "অতভশঙ্কন করা",
  "synonyms": ["Accuse", "Charge", "Censure"],
  "antonyms": ["Acquit", "Exonerate", "Vindicate"]
},
{
  "main_word": "Imperfect",
  "bangla_meaning": "অসম্পূর্ গ",
  "synonyms": ["Flawed", "Defective", "Incomplete"],
  "antonyms": ["Perfect", "Flawless", "Ideal"]
},
{
  "main_word": "Impersonal",
  "bangla_meaning": "তনরতপক্ষ",
  "synonyms": ["Unbiased", "Objective", "Neutral"],
  "antonyms": ["Personal", "Subjective", "Biased"]
},
{
  "main_word": "Impetus",
  "bangla_meaning": "উদ্দীপো",
  "synonyms": ["Incentive", "Motivation", "Driving force"],
  "antonyms": ["Discouragement", "Hindrance", "Obstacle"]
},
{
  "main_word": "Implication",
  "bangla_meaning": "অথ থ",
  "synonyms": ["Suggestion", "Implication", "Meaning"],
  "antonyms": ["Express statement", "Explicit meaning", "Literal"]
},
{
  "main_word": "Implore",
  "bangla_meaning": "আকু আত্রবিে করা",
  "synonyms": ["Beg", "Plead", "Implore"],
  "antonyms": ["Demand", "Order", "Command"]
},
{
  "main_word": "Important",
  "bangla_meaning": "গুরুত্বপূর্ থ",
  "synonyms": ["Significant", "Essential", "Crucial"],
  "antonyms": ["Unimportant", "Trivial", "Irrelevant"]
},
{
  "main_word": "Impossible",
  "bangla_meaning": "অসম্ভব",
  "synonyms": ["Unlikely", "Improbable", "Unattainable"],
  "antonyms": ["Possible", "Achievable", "Attainable"]
},
{
  "main_word": "Impression",
  "bangla_meaning": "ধারর্া",
  "synonyms": ["Perception", "Feeling", "Image"],
  "antonyms": ["Misconception", "Misunderstanding", "Distortion"]
},
{
  "main_word": "Imprison",
  "bangla_meaning": "কারাবন্দি করা",
  "synonyms": ["Jail", "Confine", "Imprison"],
  "antonyms": ["Release", "Free", "Liberate"]
},
{
  "main_word": "Improve",
  "bangla_meaning": "উন্নডত করা",
  "synonyms": ["Enhance", "Better", "Upgrade"],
  "antonyms": ["Worsen", "Deteriorate", "Decline"]
},
{
  "main_word": "Impulse",
  "bangla_meaning": "আত্রবগ",
  "synonyms": ["Sudden urge", "Desire", "Instinct"],
  "antonyms": ["Thought", "Reason", "Logic"]
},
{
  "main_word": "Inability",
  "bangla_meaning": "অেমতা",
  "synonyms": ["Lack of ability", "Inability", "Incapacity"],
  "antonyms": ["Ability", "Competence", "Capability"]
},
{
  "main_word": "Inaudible",
  "bangla_meaning": "অশ্রাবয",
  "synonyms": ["Unable to be heard", "Inaudible"],
  "antonyms": ["Audible", "Clear", "Distinct"]
},
{
  "main_word": "Inauguration",
  "bangla_meaning": "উত্রবাধে",
  "synonyms": ["Formal opening", "Inauguration"],
  "antonyms": ["Closing", "Termination", "Conclusion"]
},
{
  "main_word": "Incentive",
  "bangla_meaning": "উদ্দীপো",
  "synonyms": ["Motivation", "Encouragement", "Incentive"],
  "antonyms": ["Discouragement", "Hindrance", "Obstacle"]
},
{
  "main_word": "Incident",
  "bangla_meaning": "ঘটো",
  "synonyms": ["Event", "Occurrence", "Incident"],
  "antonyms": ["Non-event", "Absence of incident", "Normalcy"]
},
{
  "main_word": "Incite",
  "bangla_meaning": "উসকাডে ক্ষিওয়া",
  "synonyms": ["Provoke", "Instigate", "Incite"],
  "antonyms": ["Pacify", "Appease", "Calm"]
},
{
  "main_word": "Include",
  "bangla_meaning": "অন্তভভক্তথ করা",
  "synonyms": ["Enclose", "Contain", "Incorporate"],
  "antonyms": ["Exclude", "Omit", "Leave out"]
},
{
  "main_word": "Income",
  "bangla_meaning": "আয়",
  "synonyms": ["Earnings", "Revenue", "Income"],
  "antonyms": ["Expenditure", "Outgo", "Loss"]
},
{
  "main_word": "Increase",
  "bangla_meaning": "বৃন্দি",
  "synonyms": ["Growth", "Rise", "Augmentation"],
  "antonyms": ["Decrease", "Reduction", "Decline"]
},
{
  "main_word": "Incumbent",
  "bangla_meaning": "িাডয়ত্বপ্রাপ্ত",
  "synonyms": ["Obligated", "Bound", "Required"],
  "antonyms": ["Not required", "Optional", "Discretionary"]
},
{
  "main_word": "Indecisive",
  "bangla_meaning": "অডেন্দিত",
  "synonyms": ["Unable to decide", "Indecisive"],
  "antonyms": ["Decisive", "Resolute", "Determined"]
},
{
  "main_word": "Indict",
  "bangla_meaning": "অডভযুক্ত করা",
  "synonyms": ["Accuse", "Charge", "Indict"],
  "antonyms": ["Acquit", "Exonerate", "Vindicate"]
},
{
  "main_word": "Indispensable",
  "bangla_meaning": "অপডরহায থ",
  "synonyms": ["Essential", "Crucial", "Indispensable"],
  "antonyms": ["Unnecessary", "Dispensable", "Non-essential"]
},
{
  "main_word": "Individual",
  "bangla_meaning": "বযন্দক্ত",
  "synonyms": ["Person", "Individual", "Single"],
  "antonyms": ["Group", "Collective", "Mass"]
},
{
  "main_word": "Inducement",
  "bangla_meaning": "প্রত্র াভে",
  "synonyms": ["Incentive", "Temptation", "Inducement"],
  "antonyms": ["Deterrence", "Discouragement", "Dissuasion"]
},
{
  "main_word": "Jab",
  "bangla_meaning": "আঘাত",
  "synonyms": ["Strike", "Punch"],
  "antonyms": ["Embrace", "Caress"]
},
{
  "main_word": "Jail",
  "bangla_meaning": "কারাগার",
  "synonyms": ["Prison", "Correctional facility"],
  "antonyms": ["Freedom", "Liberation"]
},
{
  "main_word": "Jam",
  "bangla_meaning": "জ্যাম",
  "synonyms": ["Traffic congestion", "Preserve"],
  "antonyms": ["Unblock", "Loosen"]
},
{
  "main_word": "Jangle",
  "bangla_meaning": "ঝেঝে শব্দ",
  "synonyms": ["Jangling sound", "Clash"],
  "antonyms": ["Harmony", "Melody"]
},
{
  "main_word": "Jest",
  "bangla_meaning": "ঠাট্টা-মশকরা",
  "synonyms": ["Joke", "Playful remark"],
  "antonyms": ["Seriousness", "Solemnity"]
},
{
  "main_word": "Jewel",
  "bangla_meaning": "রত্ন",
  "synonyms": ["Gemstone", "Precious possession"],
  "antonyms": ["Worthlessness", "Trash"]
},
{
  "main_word": "Jig",
  "bangla_meaning": "ঝাপটাডে",
  "synonyms": ["Dance", "Lively movement"],
  "antonyms": ["Stillness", "Immobility"]
},
{
  "main_word": "Jog",
  "bangla_meaning": "ক্ষিৌ়িাত্রো",
  "synonyms": ["Run at a slow pace"],
  "antonyms": ["Stand still", "Walk"]
},
{
  "main_word": "Join",
  "bangla_meaning": "ক্ষযাগিাে",
  "synonyms": ["Combine", "Unite"],
  "antonyms": ["Separate", "Depart"]
},
{
  "main_word": "Joist",
  "bangla_meaning": "কাত্রঠর ডতর",
  "synonyms": ["Beam", "Supporting structure"],
  "antonyms": ["Weakness", "Instability"]
},
{
  "main_word": "Joke",
  "bangla_meaning": "ঠাট্টা",
  "synonyms": ["Jest", "Humorous remark"],
  "antonyms": ["Seriousness", "Truth"]
},
{
  "main_word": "Jolting",
  "bangla_meaning": "ঝাাঁকু ডে",
  "synonyms": ["Shaking", "Jerking"],
  "antonyms": ["Smoothness", "Stability"]
},
{
  "main_word": "Jot",
  "bangla_meaning": "ড ত্রে রাো",
  "synonyms": ["Write briefly", "Make a note"],
  "antonyms": ["Forget", "Disregard"]
},
{
  "main_word": "Joust",
  "bangla_meaning": "অশ্বাত্ররাহী ক্রী়িা",
  "synonyms": ["Tournament", "Mock combat"],
  "antonyms": ["Peace", "Calmness"]
},
{
  "main_word": "Journal",
  "bangla_meaning": "ডাত্রয়ডর",
  "synonyms": ["Daily record", "Publication"],
  "antonyms": ["Silence", "Oblivion"]
},
{
  "main_word": "Journey",
  "bangla_meaning": "যাত্রা",
  "synonyms": ["Travel", "Passage"],
  "antonyms": ["Rest", "Arrival"]
},
{
  "main_word": "Jubilant",
  "bangla_meaning": "আনন্দিত",
  "synonyms": ["Exuberant", "Joyful"],
  "antonyms": ["Sad", "Depressed"]
},
{
  "main_word": "Judge",
  "bangla_meaning": "ডবচারক",
  "synonyms": ["Arbitrator", "Decision-maker"],
  "antonyms": ["Bias", "Prejudice"]
},
{
  "main_word": "Juggle",
  "bangla_meaning": "করাতকড ত্রত",
  "synonyms": ["Handle multiple tasks", "Manipulate"],
  "antonyms": ["Drop", "Lose control"]
},
{
  "main_word": "Jumble",
  "bangla_meaning": "ঝাত্রম া",
  "synonyms": ["Mess", "Confusion"],
  "antonyms": ["Order", "Organization"]
},
{
  "main_word": "Jump",
  "bangla_meaning": "াফ",
  "synonyms": ["Leap", "Spring"],
  "antonyms": ["Fall", "Descend"]
},
{
  "main_word": "Junk",
  "bangla_meaning": "বজ্থয",
  "synonyms": ["Trash", "Useless material"],
  "antonyms": ["Treasure", "Value"]
},
{
  "main_word": "Jungle",
  "bangla_meaning": "জ্ঙ্গ",
  "synonyms": ["Dense forest", "Wilderness"],
  "antonyms": ["Civilization", "Open space"]
},
{
  "main_word": "Junior",
  "bangla_meaning": "কডেষ্ঠ",
  "synonyms": ["Younger", "Lower in rank"],
  "antonyms": ["Senior", "Elder"]
},
{
  "main_word": "Jury",
  "bangla_meaning": "জ্যুরি",
  "synonyms": ["Panel of judges"],
  "antonyms": ["Individual", "Judge"]
},
{
  "main_word": "Just",
  "bangla_meaning": "েযাযয",
  "synonyms": ["Fair", "Equitable"],
  "antonyms": ["Unjust", "Unfair"]
},
{
  "main_word": "Jute",
  "bangla_meaning": "পাট",
  "synonyms": ["Fiber plant", "Burlap"],
  "antonyms": ["Cotton", "Wool"]
},
{
  "main_word": "Jabber",
  "bangla_meaning": "অথ থহীে কথা ব া",
  "synonyms": ["Chatter", "Talk nonsense"],
  "antonyms": ["Speak clearly", "Communicate"]
},

  {
    "main_word": "jam-packed",
    "bangla_meaning": "ঠাসা",
    "synonyms": [
      "Crowded",
      "full"
    ],
    "antonyms": [
      "Empty",
      "spacious"
    ]
  },
  {
    "main_word": "jeopardize",
    "bangla_meaning": "ডবপন্ন করা",
    "synonyms": [
      "Endanger",
      "put at risk"
    ],
    "antonyms": [
      "Protect",
      "secure"
    ]
  },
  {
    "main_word": "jerk",
    "bangla_meaning": "ক্ষঠ া",
    "synonyms": [
      "Tug",
      "yank"
    ],
    "antonyms": [
      "Smooth movement",
      "gentle touch"
    ]
  },
  {
    "main_word": "jester",
    "bangla_meaning": "ঠাট্টাডবি",
    "synonyms": [
      "Clown",
      "entertainer"
    ],
    "antonyms": [
      "Solemn figure",
      "serious person"
    ]
  },
  {
    "main_word": "jeweler",
    "bangla_meaning": "রত্ন বযবসায়ী",
    "synonyms": [
      "Gemstone dealer",
      "jeweler"
    ],
    "antonyms": [
      "Poor",
      "beggar"
    ]
  },
  {
    "main_word": "jiggle",
    "bangla_meaning": "কম্পে",
    "synonyms": [
      "Shake",
      "vibrate"
    ],
    "antonyms": [
      "Stand still",
      "be stable"
    ]
  },
  {
    "main_word": "jogging",
    "bangla_meaning": "ধীর গডতত্রত ক্ষিৌ়িাত্রো",
    "synonyms": [
      "Running at a slow pace"
    ],
    "antonyms": [
      "Standing still",
      "walking"
    ]
  },
  {
    "main_word": "join hands",
    "bangla_meaning": "হাত ধরাধডর করা",
    "synonyms": [
      "To unite",
      "cooperate"
    ],
    "antonyms": [
      "Separate",
      "oppose"
    ]
  },
  {
    "main_word": "jolting ride",
    "bangla_meaning": "ঝাাঁকু ডে ডিত্রয় চ া",
    "synonyms": [
      "A rough or bumpy ride"
    ],
    "antonyms": [
      "Smooth ride",
      "comfortable journey"
    ]
  },
  {
    "main_word": "jot down",
    "bangla_meaning": "সংত্রেত্রপ ড েুে",
    "synonyms": [
      "Write briefly",
      "make a note"
    ],
    "antonyms": [
      "Forget",
      "lose track"
    ]
  },
  {
    "main_word": "joust with words",
    "bangla_meaning": "শব্দ ডিত্রয় ়িাই করা",
    "synonyms": [
      "Engage in a verbal battle"
    ],
    "antonyms": [
      "Agree",
      "cooperate"
    ]
  },
  {
    "main_word": "jaunt",
    "bangla_meaning": "ভ্রমর্",
    "synonyms": [
      "Trip",
      "Excursion"
    ],
    "antonyms": [
      "Confinement",
      "Restriction"
    ]
  },
  {
    "main_word": "jaunty",
    "bangla_meaning": "উচ্ছ",
    "synonyms": [
      "Cheerful",
      "Brisk"
    ],
    "antonyms": [
      "Gloomy",
      "Depressed"
    ]
  },
  {
    "main_word": "javelin",
    "bangla_meaning": "বশ থা",
    "synonyms": [
      "Spear",
      "Dart"
    ],
    "antonyms": [
      "Shield",
      "Protection"
    ]
  },
  {
    "main_word": "jeopardy",
    "bangla_meaning": "ঝুাঁ ডক",
    "synonyms": [
      "Danger",
      "Risk"
    ],
    "antonyms": [
      "Safety",
      "Security"
    ]
  },
  {
    "main_word": "jest",
    "bangla_meaning": "ঠাট্টা",
    "synonyms": [
      "Joke",
      "Prank"
    ],
    "antonyms": [
      "Seriousness",
      "Earnestness"
    ]
  },
  {
    "main_word": "jettison",
    "bangla_meaning": "বাডত",
    "synonyms": [
      "Discard",
      "Throw away"
    ],
    "antonyms": [
      "Preserve",
      "Keep"
    ]
  },
  {
    "main_word": "jewel",
    "bangla_meaning": "রত্ন",
    "synonyms": [
      "Gemstone",
      "Treasure"
    ],
    "antonyms": [
      "Trash",
      "Rubbish"
    ]
  },
  {
    "main_word": "jingoistic",
    "bangla_meaning": "চরমপন্থী",
    "synonyms": [
      "Nationalistic",
      "Chauvinistic"
    ],
    "antonyms": [
      "Tolerant",
      "Open-minded"
    ]
  },
  {
    "main_word": "jittery",
    "bangla_meaning": "উডবগ্ন",
    "synonyms": [
      "Nervous",
      "Anxious"
    ],
    "antonyms": [
      "Calm",
      "Relaxed"
    ]
  },
  {
    "main_word": "job",
    "bangla_meaning": "কাজ্",
    "synonyms": [
      "Work",
      "Occupation"
    ],
    "antonyms": [
      "Unemployment",
      "Leisure"
    ]
  },
  {
    "main_word": "jockey",
    "bangla_meaning": "ক্ষঘা়িসওয়ার",
    "synonyms": [
      "Horse rider",
      "Racetracker"
    ],
    "antonyms": [
      "Pedestrian",
      "Walker"
    ]
  },
  {
    "main_word": "jocose",
    "bangla_meaning": "রডসক",
    "synonyms": [
      "Humorous",
      "Jovial"
    ],
    "antonyms": [
      "Serious",
      "Grim"
    ]
  },
  {
    "main_word": "jocular",
    "bangla_meaning": "মজ্ার",
    "synonyms": [
      "Funny",
      "Amusing"
    ],
    "antonyms": [
      "Dull",
      "Boring"
    ]
  },
  {
    "main_word": "jog",
    "bangla_meaning": "ক্ষিৌ়িাত্রো",
    "synonyms": [
      "Run slowly",
      "Trot"
    ],
    "antonyms": [
      "Rest",
      "Stop"
    ]
  },
{
    "main_word": "Join",
    "bangla_meaning": "ক্ষযাগিাে",
    "synonyms": ["Unite", "Combine"],
    "antonyms": ["Separate", "Divide"]
},
{
    "main_word": "Joint",
    "bangla_meaning": "ক্ষজ্া়ি",
    "synonyms": ["Connection", "Articulation"],
    "antonyms": ["Separation", "Disconnection"]
},
{
    "main_word": "Jollity",
    "bangla_meaning": "আেি",
    "synonyms": ["Merriment", "Gaiety"],
    "antonyms": ["Gloominess", "Sadness"]
},
{
    "main_word": "Jostle",
    "bangla_meaning": "ধাক্কা",
    "synonyms": ["Push", "Shove"],
    "antonyms": ["Delicacy", "Gentleness"]
},
{
    "main_word": "Journal",
    "bangla_meaning": "ডাত্রয়ডর",
    "synonyms": ["Diary", "Logbook"],
    "antonyms": ["Blankness", "Emptiness"]
},
{
    "main_word": "Journey",
    "bangla_meaning": "যাো",
    "synonyms": ["Trip", "Travel"],
    "antonyms": ["Arrival", "Destination"]
},
{
    "main_word": "Jowl",
    "bangla_meaning": "গা",
    "synonyms": ["Cheek", "Jaw"],
    "antonyms": ["Forehead", "Brow"]
},
{
    "main_word": "Joy",
    "bangla_meaning": "আেি",
    "synonyms": ["Happiness", "Pleasure"],
    "antonyms": ["Sadness", "Sorrow"]
},
{
    "main_word": "Jubilee",
    "bangla_meaning": "মত্রহাৎসব",
    "synonyms": ["Anniversary", "Celebration"],
    "antonyms": ["Mourning", "Grief"]
},
{
    "main_word": "Judge",
    "bangla_meaning": "ডবচারক",
    "synonyms": ["Referee", "Umpire"],
    "antonyms": ["Participant", "Contestant"]
},
{
    "main_word": "Judicious",
    "bangla_meaning": "ডবচের্",
    "synonyms": ["Wise", "Sensible"],
    "antonyms": ["Foolish", "Reckless"]
},
{
    "main_word": "Juggernaut",
    "bangla_meaning": "অপ্রডতত্ররাধয শন্দক্ত",
    "synonyms": ["Unstoppable Force", "Juggernaut"],
    "antonyms": ["Fragile", "Weak"]
},
{
    "main_word": "Juggle",
    "bangla_meaning": "করাতক ী",
    "synonyms": ["Manipulate", "Manage"],
    "antonyms": ["Drop", "Lose control"]
},
{
    "main_word": "Juicy",
    "bangla_meaning": "রসাত্র া",
    "synonyms": ["Succulent", "Flavorful"],
    "antonyms": ["Dry", "Bland"]
},
{
    "main_word": "Jumble",
    "bangla_meaning": "ডবশৃঙ্খ া",
    "synonyms": ["Confusion", "Mess"],
    "antonyms": ["Order", "Organization"]
},
{
    "main_word": "Jump",
    "bangla_meaning": "াফ",
    "synonyms": ["Leap", "Spring"],
    "antonyms": ["Crouch", "Bend"]
},
{
    "main_word": "Jungle",
    "bangla_meaning": "জ্ঙ্গ",
    "synonyms": ["Rainforest", "Wilderness"],
    "antonyms": ["City", "Civilization"]
},
{
    "main_word": "Junior",
    "bangla_meaning": "ক্ষছাট্ট",
    "synonyms": ["Younger", "Less experienced"],
    "antonyms": ["Senior", "Elder"]
},
{
    "main_word": "Jurisdiction",
    "bangla_meaning": "এেডতয়ার",
    "synonyms": ["Authority", "Control"],
    "antonyms": ["Exemption", "Freedom"]
},
{
    "main_word": "Jury",
    "bangla_meaning": "জ্ুডর",
    "synonyms": ["Panel of judges", "Tribunal"],
    "antonyms": ["Individual", "Sole Decider"]
},
{
    "main_word": "Just",
    "bangla_meaning": "সঠঠক",
    "synonyms": ["Fair", "Unbiased"],
    "antonyms": ["Unjust", "Biased"]
},
{
    "main_word": "Juvenal",
    "bangla_meaning": "ডশশুসু ভ",
    "synonyms": ["Youthful", "Childlike"],
    "antonyms": ["Mature", "Adult"]
},
{
    "main_word": "Juxtapose",
    "bangla_meaning": "পাশাপাডশ রাো",
    "synonyms": ["Place side by side", "Compare"],
    "antonyms": ["Separate", "Divide"]
},
{
    "main_word": "Knowledge",
    "bangla_meaning": "জ্ঞাে",
    "synonyms": ["Information", "Wisdom", "Erudition"],
    "antonyms": ["Ignorance"]
},
{
    "main_word": "Key",
    "bangla_meaning": "চাডব",
    "synonyms": ["Tool", "Solution", "Answer"],
    "antonyms": ["Obstacle", "Hindrance"]
},
{
    "main_word": "King",
    "bangla_meaning": "রাজ্া",
    "synonyms": ["Ruler", "Monarch", "Sovereign"],
    "antonyms": ["Subject", "Commoner"]
},
{
    "main_word": "Kindness",
    "bangla_meaning": "িয়া",
    "synonyms": ["Compassion", "Generosity", "Benevolence"],
    "antonyms": ["Cruelty", "Harshness"]
},
{
    "main_word": "Kiss",
    "bangla_meaning": "চভম্বে",
    "synonyms": ["Embrace", "Caress", "Smooch"],
    "antonyms": ["Repulsion", "Rejection"]
},
{
    "main_word": "Know",
    "bangla_meaning": "জ্ঞাো",
    "synonyms": ["Understand", "Recognize", "Comprehend"],
    "antonyms": ["Forget", "Be ignorant"]
},
{
    "main_word": "Knowledge",
    "bangla_meaning": "জ্ঞাে",
    "synonyms": ["Understanding", "Learning", "Awareness"],
    "antonyms": ["Ignorance", "Illiteracy"]
},
{
    "main_word": "Knead",
    "bangla_meaning": "ক্ষমশাত্রো",
    "synonyms": ["Mix", "Blend", "Work with hands"],
    "antonyms": ["Separate", "Unmix"]
},
{
    "main_word": "Knight",
    "bangla_meaning": "ক্ষঘা়িসওয়ার",
    "synonyms": ["Warrior", "Champion", "Protector"],
    "antonyms": ["Traitor", "Enemy"]
},
{
    "main_word": "Knock",
    "bangla_meaning": "আঘাত করা",
    "synonyms": ["Tap", "Strike", "Bang"],
    "antonyms": ["Ignore", "Leave alone"]
},
{
    "main_word": "Knot",
    "bangla_meaning": "ডগাঁট",
    "synonyms": ["Tangle", "Complication", "Difficulty"],
    "antonyms": ["Straightforward", "Simple"]
},
{
    "main_word": "Krazy",
    "bangla_meaning": "পাগ",
    "synonyms": ["Mad", "Insane", "Delirious"],
    "antonyms": ["Sane", "Rational"]
},
{
    "main_word": "Keen",
    "bangla_meaning": "তীক্ষ্ণ",
    "synonyms": ["Sharp", "Eager", "Perceptive"],
    "antonyms": ["Dull", "Uninterested"]
},
{
    "main_word": "Kick",
    "bangla_meaning": "াডথ মারা",
    "synonyms": ["Strike", "Propel", "Push away"],
    "antonyms": ["Embrace", "Welcome"]
},
{
    "main_word": "Kiss",
    "bangla_meaning": "চভম্বে",
    "synonyms": ["Embrace", "Affection", "Love"],
    "antonyms": ["Rejection", "Hatred"]
},
{
    "main_word": "King",
    "bangla_meaning": "রাজ্া",
    "synonyms": ["Ruler", "Monarch", "Sovereign"],
    "antonyms": ["Subject", "Commoner"]
},
{
    "main_word": "Abandon",
    "bangla_meaning": "পরিত্যাগ",
    "synonyms": ["Forsake", "Desert", "Renounce"],
    "antonyms": ["Retain", "Keep", "Hold"]
},
{
    "main_word": "Absurd",
    "bangla_meaning": "অসাধু",
    "synonyms": ["Ridiculous", "Preposterous", "Nonsensical"],
    "antonyms": ["Logical", "Rational", "Sensible"]
},
{
    "main_word": "Accelerate",
    "bangla_meaning": "চালডান",
    "synonyms": ["Speed up", "Quick", "Hasten"],
    "antonyms": ["Slow down", "Decelerate"]
},
{
    "main_word": "Adaptable",
    "bangla_meaning": "সমর্ থয াগয",
    "synonyms": ["Flexible", "Versatile", "Adjustable"],
    "antonyms": ["Inflexible", "Rigid", "Invariable"]
},
{
    "main_word": "Ambiguous",
    "bangla_meaning": "অস্পষ্ট",
    "synonyms": ["Vague", "Uncertain", "Obscure"],
    "antonyms": ["Clear", "Explicit", "Distinct"]
},
{
    "main_word": "Analyze",
    "bangla_meaning": "রিযেষণ কিা",
    "synonyms": ["Examine", "Scrutinize", "Evaluate"],
    "antonyms": ["Ignore", "Neglect", "Overlook"]
},
{
    "main_word": "Animate",
    "bangla_meaning": "জীিন্ত",
    "synonyms": ["Lively", "Animated", "Energetic"],
    "antonyms": ["Lifeless", "Inanimate", "Dull"]
},
{
    "main_word": "Apprehensive",
    "bangla_meaning": "আশঙ্কাশীল",
    "synonyms": ["Anxious", "Nervous", "Worried"],
    "antonyms": ["Confident", "Assured", "Unconcerned"]
},
{
    "main_word": "Arbitrary",
    "bangla_meaning": "ইচ্ছামত্",
    "synonyms": ["Capricious", "Random", "Whimsical"],
    "antonyms": ["Reasonable", "Rational", "Consistent"]
},
{
    "main_word": "Ascend",
    "bangla_meaning": "উচ্চাকাঙ্ক্ষী",
    "synonyms": ["Climb", "Rise", "Mount"],
    "antonyms": ["Descend", "Fall", "Lower"]
},
{
    "main_word": "Aversion",
    "bangla_meaning": "ঘৃণা",
    "synonyms": ["Dislike", "Hatred", "Repulsion"],
    "antonyms": ["Liking", "Fondness", "Affection"]
},
{
    "main_word": "Authentic",
    "bangla_meaning": "সত্যানুসাযি",
    "synonyms": ["Genuine", "Real", "Legitimate"],
    "antonyms": ["Fake", "Counterfeit", "Phony"]
},
{
    "main_word": "Avid",
    "bangla_meaning": "উগ্র",
    "synonyms": ["Enthusiastic", "Zealous", "Eager"],
    "antonyms": ["Indifferent", "Apathetic", "Uninterested"]
},
{
    "main_word": "Banish",
    "bangla_meaning": "রনরষদ্ধ কিা",
    "synonyms": ["Expel", "Exile", "Oust"],
    "antonyms": ["Allow", "Permit", "Admit"]
},
{
    "main_word": "Benevolent",
    "bangla_meaning": "উদাি",
    "synonyms": ["Kind", "Generous", "Charitable"],
    "antonyms": ["Malevolent", "Malignant", "Unkind"]
},
{
    "main_word": "Bewilder",
    "bangla_meaning": "হত্ভ্ররমত্",
    "synonyms": ["Confuse", "Baffle", "Perplex"],
    "antonyms": ["Clarify", "Enlighten", "Explain"]
},
{
    "main_word": "Brevity",
    "bangla_meaning": "সংযেপ",
    "synonyms": ["Conciseness", "Briefness", "Shortness"],
    "antonyms": ["Lengthiness", "Verbosity", "Prolixity"]
},
{
    "main_word": "Capitulate",
    "bangla_meaning": "আত্মসমপ থণ কিা",
    "synonyms": ["Surrender", "Yield", "Submit"],
    "antonyms": ["Resist", "Defy", "Oppose"]
},
{
    "main_word": "Complacent",
    "bangla_meaning": "আত্মসন্তুষ্ট",
    "synonyms": ["Self-satisfied", "Smug", "Content"],
    "antonyms": ["Dissatisfied", "Unhappy", "Discontented"]
},
{
    "main_word": "Concede",
    "bangla_meaning": "অংগীকাি কিা",
    "synonyms": ["Admit", "Acknowledge", "Grant"],
    "antonyms": ["Deny", "Reject", "Refuse"]
},
{
    "main_word": "Constrict",
    "bangla_meaning": "সংযকারচত্ কিা",
    "synonyms": ["Squeeze", "Contract", "Tighten"],
    "antonyms": ["Expand", "Relax", "Loosen"]
},
{
    "main_word": "Dazzling",
    "bangla_meaning": "আযলাকময়",
    "synonyms": ["Bright", "Radiant", "Brilliant"],
    "antonyms": ["Dull", "Dim", "Gloomy"]
},
{
    "main_word": "Deceptive",
    "bangla_meaning": "রমর্যা",
    "synonyms": ["Misleading", "Dishonest", "Fraudulent"],
    "antonyms": ["Honest", "Truthful", "Genuine"]
},
{
    "main_word": "Defiant",
    "bangla_meaning": "আপরিজনক",
    "synonyms": ["Rebellious", "Resistant", "Obstinate"],
    "antonyms": ["Obedient", "Compliant", "Submissive"]
},
{
    "main_word": "Denounce",
    "bangla_meaning": "রনন্দা কিা",
    "synonyms": ["Condemn", "Criticize", "Censure"],
    "antonyms": ["Praise", "Commend", "Applaud"]
},
{
    "main_word": "Deviate",
    "bangla_meaning": "পার্াভ্রষ্ট",
    "synonyms": ["Diverge", "Stray", "Veer"],
    "antonyms": ["Conform", "Adhere", "Obey"]
},
{
    "main_word": "Disperse",
    "bangla_meaning": "ছরডযয় াওয়া",
    "synonyms": ["Scatter", "Distribute", "Dissipate"],
    "antonyms": ["Gather", "Collect", "Concentrate"]
},
{
    "main_word": "Eclectic",
    "bangla_meaning": "সংকরলত্",
    "synonyms": ["Diverse", "Varied", "Heterogeneous"],
    "antonyms": ["Uniform", "Homogeneous", "Monolithic"]
},
{
    "main_word": "Elaborate",
    "bangla_meaning": "রিস্তারিত্",
    "synonyms": ["Detailed", "Intricate", "Complicated"],
    "antonyms": ["Simple", "Plain", "Uncomplicated"]
},
{
    "main_word": "Embrace",
    "bangla_meaning": "আরলঙ্গন কিা",
    "synonyms": ["Hug", "Clasp", "Enfold"],
    "antonyms": ["Reject", "Shun", "Avoid"]
},
{
    "main_word": "Enigma",
    "bangla_meaning": "িহসযময়",
    "synonyms": ["Mystery", "Puzzle", "Conundrum"],
    "antonyms": ["Clarity", "Explanation", "Solution"]
},
{
    "main_word": "Exacerbate",
    "bangla_meaning": "িাডাযনা",
    "synonyms": ["Aggravate", "Worsen", "Intensify"],
    "antonyms": ["Alleviate", "Mitigate", "Improve"]
},
{
    "main_word": "Exquisite",
    "bangla_meaning": "সুশীল",
    "synonyms": ["Beautiful", "Elegant", "Delicate"],
    "antonyms": ["Ugly", "Plain", "Ordinary"]
},
{
    "main_word": "Facilitate",
    "bangla_meaning": "সহজকিণ কিা",
    "synonyms": ["Simplify", "Aid", "Assist"],
    "antonyms": ["Hinder", "Complicate", "Obstruct"]
},
{
    "main_word": "Fallacy",
    "bangla_meaning": "ভুল ধািণ",
    "synonyms": ["Error", "Misconception", "Illusion"],
    "antonyms": ["Truth", "Fact", "Reality"]
},
{
    "main_word": "Flourish",
    "bangla_meaning": "ফু যলারিত্",
    "synonyms": ["Thrive", "Prosper", "Blossom"],
    "antonyms": ["Decline", "Wither", "Fade"]
},
{
    "main_word": "Frugal",
    "bangla_meaning": "রমত্িযয়ী",
    "synonyms": ["Thrifty", "Economical", "Stingy"],
    "antonyms": ["Extravagant", "Wasteful", "Lavish"]
},
{
    "main_word": "Garrulous",
    "bangla_meaning": "িাকযরিহীন",
    "synonyms": ["Talkative", "Chatty", "Loquacious"],
    "antonyms": ["Reserved", "Silent", "Reticent"]
},
{
    "main_word": "Gravity",
    "bangla_meaning": "গুরুত্ব",
    "synonyms": ["Importance", "Seriousness", "Weight"],
    "antonyms": ["Triviality", "Levity", "Insignificance"]
},
{
    "main_word": "Hamper",
    "bangla_meaning": "িাধা দদওয়া",
    "synonyms": ["Hinder", "Impede", "Obstruct"],
    "antonyms": ["Aid", "Facilitate", "Assist"]
},
{
    "main_word": "Harmony",
    "bangla_meaning": "সমান্তি",
    "synonyms": ["Unity", "Agreement", "Accord"],
    "antonyms": ["Discord", "Dissonance", "Conflict"]
},
{
    "main_word": "Hinder",
    "bangla_meaning": "িাধা কিা",
    "synonyms": ["Impede", "Obstruct", "Deter"],
    "antonyms": ["Facilitate", "Assist", "Promote"]
},
{
    "main_word": "Illuminate",
    "bangla_meaning": "আযলারকত্ কিা",
    "synonyms": ["Lighten", "Brighten", "Clarify"],
    "antonyms": ["Darken", "Obscure", "Confuse"]
},
{
    "main_word": "Impeccable",
    "bangla_meaning": "অকৃ ত্রিম",
    "synonyms": ["Flawless", "Perfect", "Faultless"],
    "antonyms": ["Flawed", "Imperfect", "Defective"]
},
{
    "main_word": "Incessant",
    "bangla_meaning": "অরিিত্",
    "synonyms": ["Uninterrupted", "Continuous", "Perpetual"],
    "antonyms": ["Intermittent", "Occasional", "Periodic"]
},
{
    "main_word": "Inevitable",
    "bangla_meaning": "অিশযই",
    "synonyms": ["Unavoidable", "Unpreventable", "Certain"],
    "antonyms": ["Avoidable", "Preventable", "Uncertain"]
},
{
    "main_word": "Inquisitive",
    "bangla_meaning": "প্রশ্নিাদী",
    "synonyms": ["Curious", "Interested", "Nosy"],
    "antonyms": ["Indifferent", "Apathetic", "Uninterested"]
},
{
    "main_word": "Instigate",
    "bangla_meaning": "উযিজনা",
    "synonyms": ["Incite", "Provoke", "Stimulate"],
    "antonyms": ["Deter", "Restrain", "Discourage"]
},
{
    "main_word": "Intrepid",
    "bangla_meaning": "রনভীক",
    "synonyms": ["Fearless", "Courageous", "Bold"],
    "antonyms": ["Timid", "Cowardly", "Fearful"]
},
{
    "main_word": "Abandon",
    "bangla_meaning": "পরিত্যাগ",
    "synonyms": ["Forsake", "Desert", "Give up"],
    "antonyms": ["Embrace", "Retain", "Keep"]
},
{
    "main_word": "Benevolent",
    "bangla_meaning": "উদাি",
    "synonyms": ["Kind", "Generous", "Altruistic"],
    "antonyms": ["Malevolent", "Malignant", "Selfish"]
},
{
    "main_word": "Cacophony",
    "bangla_meaning": "অশ্রুরত্শৃঙ্গাি",
    "synonyms": ["Discord", "Noise", "Dissonance"],
    "antonyms": ["Harmony", "Melody", "Peace"]
},
{
    "main_word": "Deter",
    "bangla_meaning": "প্ররত্হত্ কিা",
    "synonyms": ["Discourage", "Hinder", "Prevent"],
    "antonyms": ["Encourage", "Allow", "Promote"]
},
{
    "main_word": "Enigma",
    "bangla_meaning": "িহস্য",
    "synonyms": ["Mystery", "Puzzle", "Conundrum"],
    "antonyms": ["Clarity", "Solution", "Explanation"]
},
{
    "main_word": "Facetious",
    "bangla_meaning": "রিদ্রূপ",
    "synonyms": ["Witty", "Humorous", "Playful"],
    "antonyms": ["Serious", "Grave", "Sincere"]
},
{
    "main_word": "Garrulous",
    "bangla_meaning": "িাকচাকী",
    "synonyms": ["Talkative", "Chatty", "Loquacious"],
    "antonyms": ["Reserved", "Silent", "Taciturn"]
},
{
    "main_word": "Harangue",
    "bangla_meaning": "স্ত্কককিা",
    "synonyms": ["Lecture", "Tirade", "Speech"],
    "antonyms": ["Praise", "Compliment", "Applaud"]
},
{
    "main_word": "Iconoclast",
    "bangla_meaning": "রিম াচক",
    "synonyms": ["Rebel", "Dissenter", "Maverick"],
    "antonyms": ["Conformist", "Traditionalist", "Conservative"]
},
{
    "main_word": "Juxtapose",
    "bangla_meaning": "স্ ন্বয় কিা",
    "synonyms": ["Compare", "Contrast", "Align"],
    "antonyms": ["Separate", "Disconnect", "Divide"]
},
{
    "main_word": "Kindle",
    "bangla_meaning": "উমেজনা",
    "synonyms": ["Ignite", "Spark", "Inflame"],
    "antonyms": ["Extinguish", "Quench", "Suppress"]
},
{
    "main_word": "Lament",
    "bangla_meaning": "রিলাপ কিা",
    "synonyms": ["Mourn", "Grieve", "Deplore"],
    "antonyms": ["Celebrate", "Rejoice", "Delight"]
},
{
    "main_word": "Magnanimous",
    "bangla_meaning": "উদাি",
    "synonyms": ["Generous", "Noble", "Benevolent"],
    "antonyms": ["Petty", "Selfish", "Mean"]
},
{
    "main_word": "Nebulous",
    "bangla_meaning": "অস্বস্তি",
    "synonyms": ["Vague", "Uncertain", "Ambiguous"],
    "antonyms": ["Clear", "Definite", "Explicit"]
},
{
    "main_word": "Obfuscate",
    "bangla_meaning": "অস্বস্তি ছ ুঁডা",
    "synonyms": ["Confuse", "Baffle", "Muddle"],
    "antonyms": ["Clarify", "Illuminate", "Explain"]
},
{
    "main_word": "Pernicious",
    "bangla_meaning": "হারনকি",
    "synonyms": ["Harmful", "Destructive", "Malevolent"],
    "antonyms": ["Beneficial", "Benign", "Helpful"]
},
{
    "main_word": "Quixotic",
    "bangla_meaning": "কল্পনাপূর্ ক",
    "synonyms": ["Idealistic", "Unrealistic", "Romantic"],
    "antonyms": ["Pragmatic", "Realistic", "Sensible"]
},
{
    "main_word": "Reticent",
    "bangla_meaning": "ম ৌন",
    "synonyms": ["Reserved", "Silent", "Taciturn"],
    "antonyms": ["Talkative", "Outspoken", "Communicative"]
},
{
    "main_word": "Sycophant",
    "bangla_meaning": "চাপলু",
    "synonyms": ["Flatterer", "Toady", "Fawner"],
    "antonyms": ["Critic", "Skeptic", "Cynic"]
},
{
    "main_word": "Trepidation",
    "bangla_meaning": "ভীরত্",
    "synonyms": ["Apprehension", "Fear", "Anxiety"],
    "antonyms": ["Confidence", "Assurance", "Calm"]
},
{
    "main_word": "Ubiquitous",
    "bangla_meaning": "স্ি কত্রস্থ",
    "synonyms": ["Omnipresent", "Everywhere", "Pervasive"],
    "antonyms": ["Rare", "Scarce", "Limited"]
},
{
    "main_word": "Venerate",
    "bangla_meaning": "শ্রদ্ধার্ঘ কয",
    "synonyms": ["Admire", "Respect", "Revere"],
    "antonyms": ["Despise", "Disdain", "Contemn"]
},
{
    "main_word": "Wistful",
    "bangla_meaning": "কাস্তিত্",
    "synonyms": ["Yearning", "Longing", "Nostalgic"],
    "antonyms": ["Content", "Satisfied", "Pleased"]
},
{
    "main_word": "Xenophobia",
    "bangla_meaning": "রিমদশী র্ঘৃর্া",
    "synonyms": ["Fear of foreigners", "Racism", "Prejudice"],
    "antonyms": ["Acceptance", "Tolerance", "Inclusivity"]
},
{
    "main_word": "Yearn",
    "bangla_meaning": "কাঙ্ক্ষা কিা",
    "synonyms": ["Crave", "Long for", "Desire"],
    "antonyms": ["Abhor", "Despise", "Loathe"]
},
{
  "main_word": "Ability",
  "bangla_meaning": "দক্ষতা",
  "synonyms": ["Capacity", "Talent"],
  "antonyms": ["Ineptitude", "Incompetence"]
},
{
  "main_word": "Abundant",
  "bangla_meaning": "প্রচুর",
  "synonyms": ["Ample", "Plentiful"],
  "antonyms": ["Scarce", "Meager"]
},
{
  "main_word": "Accept",
  "bangla_meaning": "গ্রহণ করা",
  "synonyms": ["Receive", "Take"],
  "antonyms": ["Refuse", "Reject"]
},
{
  "main_word": "Accessible",
  "bangla_meaning": "সহজলভ্য",
  "synonyms": ["Approachable", "Attainable"],
  "antonyms": ["Inaccessible", "Remote"]
},
{
  "main_word": "Achievement",
  "bangla_meaning": "সাফলয",
  "synonyms": ["Accomplishment", "Attainment"],
  "antonyms": ["Failure", "Defeat"]
},
{
  "main_word": "Acknowledge",
  "bangla_meaning": "স্বীকার করা",
  "synonyms": ["Admit", "Recognize"],
  "antonyms": ["Deny", "Disclaim"]
},
{
  "main_word": "Active",
  "bangla_meaning": "সক্রিয়",
  "synonyms": ["Energetic", "Lively"],
  "antonyms": ["Passive", "Inactive"]
},
{
  "main_word": "Actual",
  "bangla_meaning": "বাস্তব",
  "synonyms": ["Real", "Factual"],
  "antonyms": ["Imaginary", "Hypothetical"]
},
{
  "main_word": "Adapt",
  "bangla_meaning": "মানিয়য় নিওয়া",
  "synonyms": ["Adjust", "Conform"],
  "antonyms": ["Resist", "Oppose"]
},
{
  "main_word": "Adequate",
  "bangla_meaning": "যয়েষ্ট",
  "synonyms": ["Sufficient", "Enough"],
  "antonyms": ["Inadequate", "Insufficient"]
},
{
  "main_word": "Advantage",
  "bangla_meaning": "সুনবধা",
  "synonyms": ["Benefit", "Gain"],
  "antonyms": ["Disadvantage", "Drawback"]
},
{
  "main_word": "Affection",
  "bangla_meaning": "নেহ",
  "synonyms": ["Love", "Fondness"],
  "antonyms": ["Apathy", "Indifference"]
},
{
  "main_word": "Afterthought",
  "bangla_meaning": "পরবতী নচন্তা",
  "synonyms": ["Second thought", "Aftereffect"],
  "antonyms": ["Forethought", "Premonition"]
},
{
  "main_word": "Agree",
  "bangla_meaning": "সম্মত হওয়া",
  "synonyms": ["Consent", "Concur"],
  "antonyms": ["Disagree", "Dissent"]
},
{
    "main_word": "Aim",
    "bangla_meaning": "লক্ষ্য",
    "synonyms": ["Objective", "Goal"],
    "antonyms": ["Aimless", "Directionless"]
},
{
    "main_word": "Alarm",
    "bangla_meaning": "উৎসাহ",
    "synonyms": ["Apprehension", "Anxiety"],
    "antonyms": ["Reassurance", "Calmness"]
},
{
    "main_word": "Allow",
    "bangla_meaning": "অনুমতি দেওয়া",
    "synonyms": ["Permit", "Authorize"],
    "antonyms": ["Forbid", "Prohibit"]
},
{
    "main_word": "Almost",
    "bangla_meaning": "প্রায়",
    "synonyms": ["Nearly", "Approximately"],
    "antonyms": ["Far from", "Not nearly"]
},
{
    "main_word": "Alone",
    "bangla_meaning": "একা",
    "synonyms": ["Solitary", "Lonely"],
    "antonyms": ["Accompanied", "Together"]
},
{
    "main_word": "Alternative",
    "bangla_meaning": "বিকল্প",
    "synonyms": ["Choice", "Option"],
    "antonyms": ["None", "Unique"]
},
{
    "main_word": "Ambition",
    "bangla_meaning": "লক্ষ্যাবলম্বন",
    "synonyms": ["Aspiration", "Desire"],
    "antonyms": ["Indifference", "Apathy"]
},
{
    "main_word": "Amuse",
    "bangla_meaning": "মজা দেওয়া",
    "synonyms": ["Entertain", "Delight"],
    "antonyms": ["Bore", "Tire"]
},
{
    "main_word": "Analyze",
    "bangla_meaning": "বিশ্লেষণ করা",
    "synonyms": ["Examine", "Dissect"],
    "antonyms": ["Synthesize", "Combine"]
},
{
    "main_word": "Anger",
    "bangla_meaning": "রাগ",
    "synonyms": ["Wrath", "Fury"],
    "antonyms": ["Calmness", "Serenity"]
},
{
    "main_word": "Announce",
    "bangla_meaning": "ঘোষণা করা",
    "synonyms": ["Declare", "Proclaim"],
    "antonyms": ["Conceal", "Hide"]
},
{
    "main_word": "Appreciate",
    "bangla_meaning": "মূল্যায়ন করা",
    "synonyms": ["Value", "Admire"],
    "antonyms": ["Depreciate", "Belittle"]
},
{
    "main_word": "Argue",
    "bangla_meaning": "তর্ক করা",
    "synonyms": ["Dispute", "Debate"],
    "antonyms": ["Agree", "Concede"]
},
{
    "main_word": "Arrange",
    "bangla_meaning": "সাজানো",
    "synonyms": ["Organize", "Order"],
    "antonyms": ["Disarrange", "Disorder"]
},
{
    "main_word": "Assume",
    "bangla_meaning": "ধারণ করা",
    "synonyms": ["Suppose", "Presume"],
    "antonyms": ["Doubt", "Question"]
},
{
    "main_word": "Astonish",
    "bangla_meaning": "অবাক করা",
    "synonyms": ["Surprise", "Amaze"],
    "antonyms": ["Comfort", "Reassure"]
},
{
    "main_word": "Attempt",
    "bangla_meaning": "নচষ্টা করা",
    "synonyms": ["Try", "Endeavor"],
    "antonyms": ["Give up", "Abandon"]
},
{
    "main_word": "Attitude",
    "bangla_meaning": "মনোভ্াব",
    "synonyms": ["Disposition", "Perspective"],
    "antonyms": ["Indifference", "Apathy"]
},
{
    "main_word": "Attract",
    "bangla_meaning": "আকষ কণ করা",
    "synonyms": ["Lure", "Entice"],
    "antonyms": ["Repel", "Disgust"]
},
{
    "main_word": "Aware",
    "bangla_meaning": "সয়চতি",
    "synonyms": ["Conscious", "Mindful"],
    "antonyms": ["Unaware", "Oblivious"]
},
{
    "main_word": "Awkward",
    "bangla_meaning": "অস্বক্রস্তকর",
    "synonyms": ["Uncomfortable", "Clumsy"],
    "antonyms": ["Graceful", "Smooth"]
},
{
    "main_word": "Back",
    "bangla_meaning": "নপঠ",
    "synonyms": ["Rear", "Reverse", "Behind"],
    "antonyms": ["Front", "Forward", "Ahead"]
},
{
    "main_word": "Bank",
    "bangla_meaning": "বযাংক",
    "synonyms": ["Financial Institution", "Money Lender"],
    "antonyms": ["Individual", "Savings", "Home"]
},
{
    "main_word": "Beautiful",
    "bangla_meaning": "সুন্দর",
    "synonyms": ["Pretty", "Gorgeous", "Attractive"],
    "antonyms": ["Ugly", "Unattractive", "Plain"]
},
{
    "main_word": "Belief",
    "bangla_meaning": "নবশ্বাস",
    "synonyms": ["Faith", "Conviction", "Trust"],
    "antonyms": ["Doubt", "Skepticism", "Unbelief"]
},
{
    "main_word": "Belonging",
    "bangla_meaning": "সম্পনি",
    "synonyms": ["Possession", "Property", "Ownership"],
    "antonyms": ["Loss", "Theft", "Deprivation"]
},
{
    "main_word": "Beloved",
    "bangla_meaning": "নপ্রয়",
    "synonyms": ["Dear", "Loved", "Cherished"],
    "antonyms": ["Hated", "Disliked", "Loathed"]
},
{
    "main_word": "Bench",
    "bangla_meaning": "নবঞ্চ",
    "synonyms": ["Seat", "Platform", "Stool"],
    "antonyms": ["Floor", "Chair", "Stand"]
},
{
    "main_word": "Best",
    "bangla_meaning": "সুবেষ্ট",
    "synonyms": ["Finest", "Excellent", "Superior"],
    "antonyms": ["Worst", "Inferior", "Poor"]
},
{
    "main_word": "Big",
    "bangla_meaning": "বড়",
    "synonyms": ["Large", "Huge", "Great"],
    "antonyms": ["Small", "Tiny", "Miniature"]
},
{
    "main_word": "Bird",
    "bangla_meaning": "পাখি",
    "synonyms": ["Avian", "Fowl", "Winged Creature"],
    "antonyms": ["Mammal", "Reptile", "Insect"]
},
{
    "main_word": "Birth",
    "bangla_meaning": "জন্ম",
    "synonyms": ["Birth", "Emergence", "Beginning"],
    "antonyms": ["Death", "End", "Demise"]
},
{
    "main_word": "Birthday",
    "bangla_meaning": "জন্মনদি",
    "synonyms": ["Anniversary", "Natal Day", "Festive Day"],
    "antonyms": ["Death Anniversary", "Funeral"]
},
{
    "main_word": "Bite",
    "bangla_meaning": "কামড়",
    "synonyms": ["Chew", "Nibble", "Gnaw"],
    "antonyms": ["Lick", "Sip", "Swallow"]
},
{
    "main_word": "Bitterness",
    "bangla_meaning": "নতক্ততা",
    "synonyms": ["Bitterness", "Resentment", "Anger"],
    "antonyms": ["Sweetness", "Contentment", "Happiness"]
},
{
    "main_word": "Black",
    "bangla_meaning": "কায়লা",
    "synonyms": ["Dark", "Ebony", "Pitch-Black"],
    "antonyms": ["White", "Light", "Bright"]
},
{
    "main_word": "Bleed",
    "bangla_meaning": "রক্তক্ষরণ",
    "synonyms": ["Hemorrhage", "Bleed", "Flow"],
    "antonyms": ["Heal", "Clot", "Coagulate"]
},
{
    "main_word": "Blessing",
    "bangla_meaning": "আশীব কাদ",
    "synonyms": ["Benediction", "Boon", "Divine Favor"],
    "antonyms": ["Curse", "Malediction", "Calamity"]
},
{
    "main_word": "Blind",
    "bangla_meaning": "অন্ধ",
    "synonyms": ["Sightless", "Unseeing", "Visually Impaired"],
    "antonyms": ["Seeing", "Sighted", "Visually Able"]
},
{
    "main_word": "Block",
    "bangla_meaning": "বাধা",
    "synonyms": ["Obstruct", "Hinder", "Impediment"],
    "antonyms": ["Allow", "Facilitate", "Pass"]
},
{
    "main_word": "Blow",
    "bangla_meaning": "আ াত",
    "synonyms": ["Strike", "Hit", "Impact"],
    "antonyms": ["Miss", "Dodge", "Evade"]
},
{
    "main_word": "Bold",
    "bangla_meaning": "সাহসী",
    "synonyms": ["Courageous", "Brave", "Daring"],
    "antonyms": ["Timid", "Fearful", "Cowardly"]
},
{
    "main_word": "Book",
    "bangla_meaning": "বই",
    "synonyms": ["Publication", "Tome", "Volume"],
    "antonyms": ["Magazine", "Pamphlet", "Brochure"]
},
{
    "main_word": "Bottle",
    "bangla_meaning": "নবাতল",
    "synonyms": ["Container", "Flask", "Vessel"],
    "antonyms": ["Cup", "Glass", "Mug"]
},
{
    "main_word": "Boy",
    "bangla_meaning": "নেয়ল",
    "synonyms": ["Male Child", "Lad", "Youth"],
    "antonyms": ["Girl", "Woman", "Female"]
},
{
    "main_word": "Bread",
    "bangla_meaning": "রুটি",
    "synonyms": ["Loaf", "Baked Good", "Staple Food"],
    "antonyms": ["Rice", "Pasta", "Noodles"]
},
{
    "main_word": "Break",
    "bangla_meaning": "ভ্াঙ্গা",
    "synonyms": ["Fracture", "Crack", "Shatter"],
    "antonyms": ["Fix", "Repair", "Mend"]
},
{
    "main_word": "Breath",
    "bangla_meaning": "শ্বাস",
    "synonyms": ["Respiration", "Gasp", "Air"],
    "antonyms": ["Exhale", "Asphyxiate", "Die"]
},
{
    "main_word": "Bridge",
    "bangla_meaning": "নসতু",
    "synonyms": ["Span", "Crossing", "Connection"],
    "antonyms": ["Divide", "Gap", "Barrier"]
},
{
    "main_word": "Bright",
    "bangla_meaning": "উজ্জ্বল",
    "synonyms": ["Light", "Brilliant", "Dazzling"],
    "antonyms": ["Dim", "Dark", "Dull"]
},
{
    "main_word": "Build",
    "bangla_meaning": "নিম কাণ করা",
    "synonyms": ["Construct", "Erect", "Create"],
    "antonyms": ["Demolish", "Destroy", "Dismantle"]
},
{
    "main_word": "Business",
    "bangla_meaning": "বযবসা",
    "synonyms": ["Trade", "Commerce", "Occupation"],
    "antonyms": ["Leisure", "Hobby", "Pleasure"]
},
{
    "main_word": "Buy",
    "bangla_meaning": "নকিা",
    "synonyms": ["Purchase", "Acquire", "Obtain"],
    "antonyms": ["Sell", "Dispense", "Dispose"]
},
{
    "main_word": "Canteen",
    "bangla_meaning": "কযানিি",
    "synonyms": ["Cafeteria", "Dining hall"],
    "antonyms": ["Restaurant", "Takeaway"]
},
{
    "main_word": "Capsule",
    "bangla_meaning": "কযাপসুল",
    "synonyms": ["Pill", "Container"],
    "antonyms": ["Capsule (clothing)", "Shell"]
},
{
    "main_word": "Capture",
    "bangla_meaning": "আিক করা",
    "synonyms": ["Seize", "Catch"],
    "antonyms": ["Release", "Lose"]
},
{
    "main_word": "Care",
    "bangla_meaning": "যত্ন",
    "synonyms": ["Attention", "Concern"],
    "antonyms": ["Neglect", "Indifference"]
},
{
    "main_word": "Career",
    "bangla_meaning": "নপশা",
    "synonyms": ["Profession", "Occupation"],
    "antonyms": ["Hobby", "Pastime"]
},
{
    "main_word": "Carriage",
    "bangla_meaning": "গানড়",
    "synonyms": ["Wagon", "Cart"],
    "antonyms": ["Automobile", "Truck"]
},
{
    "main_word": "Cascade",
    "bangla_meaning": "ঝণ কা",
    "synonyms": ["Waterfall", "Cascade"],
    "antonyms": ["Stream", "Trickle"]
},
{
    "main_word": "Casual",
    "bangla_meaning": "আিুষ্ঠানিক িয়",
    "synonyms": ["Informal", "Relaxed"],
    "antonyms": ["Formal", "Dressed-up"]
},
{
    "main_word": "Catastrophe",
    "bangla_meaning": "নবপয কয়",
    "synonyms": ["Disaster", "Calamity"],
    "antonyms": ["Success", "Triumph"]
},
{
    "main_word": "Ceiling",
    "bangla_meaning": "োদ",
    "synonyms": ["Roof", "Limit"],
    "antonyms": ["Floor", "Bottom"]
},
{
    "main_word": "Celebrity",
    "bangla_meaning": "নবিযাত বযক্রক্ত",
    "synonyms": ["Famous person", "Star"],
    "antonyms": ["Unknown person", "Commoner"]
},
{
    "main_word": "Cement",
    "bangla_meaning": "নসয়মি",
    "synonyms": ["Concrete", "Mortar"],
    "antonyms": ["Sand", "Gravel"]
},
{
    "main_word": "Center",
    "bangla_meaning": "নকন্দ্র",
    "synonyms": ["Middle", "Heart"],
    "antonyms": ["Edge", "Periphery"]
},
{
    "main_word": "Ceremony",
    "bangla_meaning": "অিুষ্ঠাি",
    "synonyms": ["Ritual", "Celebration"],
    "antonyms": ["Everyday occasion", "Routine"]
},
{
    "main_word": "Certain",
    "bangla_meaning": "নিক্রিত",
    "synonyms": ["Sure", "Definite"],
    "antonyms": ["Uncertain", "Doubtful"]
},
{
    "main_word": "Challenge",
    "bangla_meaning": "চযায়লঞ্জ",
    "synonyms": ["Difficulty", "Obstacle"],
    "antonyms": ["Opportunity", "Ease"]
},
{
    "main_word": "Champion",
    "bangla_meaning": "চযাম্পম্পয়ি",
    "synonyms": ["Winner", "Hero"],
    "antonyms": ["Loser", "Villain"]
},
{
    "main_word": "Chance",
    "bangla_meaning": "সুয়যাগ",
    "synonyms": ["Opportunity", "Possibility"],
    "antonyms": ["Obstacle", "Impossibility"]
},
{
    "main_word": "Change",
    "bangla_meaning": "পনরবতকি",
    "synonyms": ["Transform", "Alter"],
    "antonyms": ["Remain the same", "Stay constant"]
},
{
    "main_word": "Chapter",
    "bangla_meaning": "অধযায়",
    "synonyms": ["Section", "Division"],
    "antonyms": ["Whole book", "Entire work"]
},
{
    "main_word": "Character",
    "bangla_meaning": "চনরত্র",
    "synonyms": ["Personality", "Nature"],
    "antonyms": ["Disguise", "Facade"]
},
{
    "main_word": "Charm",
    "bangla_meaning": "কমিীয়তা",
    "synonyms": ["Allure", "Attractiveness"],
    "antonyms": ["Repulsiveness", "Ugliness"]
},
{
    "main_word": "Cheap",
    "bangla_meaning": "সস্তা",
    "synonyms": ["Inexpensive", "Affordable"],
    "antonyms": ["Expensive", "Costly"]
},
{
    "main_word": "Cheerful",
    "bangla_meaning": "আিক্রন্দত",
    "synonyms": ["Happy", "Joyful"],
    "antonyms": ["Sad", "Depressed"]
},
{
    "main_word": "Chemist",
    "bangla_meaning": "রসায়িনবদ",
    "synonyms": ["Scientist", "Pharmacist"],
    "antonyms": ["Physicist", "Biologist"]
},
{
    "main_word": "Chest",
    "bangla_meaning": "বুক",
    "synonyms": ["Thorax", "Torso"],
    "antonyms": ["Back", "Legs"]
},
{
    "main_word": "Child",
    "bangla_meaning": "নশশু",
    "synonyms": ["Offspring", "Kid"],
    "antonyms": ["Adult", "Grown-up"]
},
{
    "main_word": "Choice",
    "bangla_meaning": "পেন্দ",
    "synonyms": ["Selection", "Option"],
    "antonyms": ["No choice", "Obligation"]
},
{
    "main_word": "Church",
    "bangla_meaning": "নগজকা",
    "synonyms": ["Place of worship"],
    "antonyms": ["Mosque", "Temple"]
},
{
    "main_word": "Circle",
    "bangla_meaning": "বৃি",
    "synonyms": ["Sphere", "Ring"],
    "antonyms": ["Line", "Angle"]
},
{
    "main_word": "Citizen",
    "bangla_meaning": "িাগনরক",
    "synonyms": ["Civilian", "Resident"],
    "antonyms": ["Alien", "Foreigner"]
},
{
    "main_word": "Class",
    "bangla_meaning": "নেণী",
    "synonyms": ["Category", "Group"],
    "antonyms": ["Individual", "Unique"]
},
{
    "main_word": "Climate",
    "bangla_meaning": "জলবায়ু",
    "synonyms": ["Weather conditions", "Environment"],
    "antonyms": ["Specific weather event", "Short-term"]
},
{
    "main_word": "Climb",
    "bangla_meaning": "আয়রাহণ",
    "synonyms": ["Ascend", "Rise"],
    "antonyms": ["Descend", "Fall"]
},
{
    "main_word": "Close",
    "bangla_meaning": "নিকিবতী",
    "synonyms": ["Near", "Shut"],
    "antonyms": ["Far", "Open"]
},
{
    "main_word": "Cloud",
    "bangla_meaning": "নম",
    "synonyms": ["Cumulus", "Nimbus"],
    "antonyms": ["Clear sky", "Sunshine"]
},
{
    "main_word": "Clown",
    "bangla_meaning": "নবদষূ ক",
    "synonyms": ["Entertainer", "Comedian"],
    "antonyms": ["Serious person", "Professional"]
},
{
    "main_word": "Coach",
    "bangla_meaning": "প্রনশক্ষক",
    "synonyms": ["Trainer", "Mentor"],
    "antonyms": ["Student", "Trainee"]
},
{
    "main_word": "Coast",
    "bangla_meaning": "উপকূ ল",
    "synonyms": ["Shoreline", "Seashore"],
    "antonyms": ["Inland", "Central"]
},
{
    "main_word": "Code",
    "bangla_meaning": "নকাড",
    "synonyms": ["Cipher", "Secret language"],
    "antonyms": ["Plain text", "Openness"]
},
{
    "main_word": "Coffee",
    "bangla_meaning": "কনফ",
    "synonyms": ["Beverage", "Stimulant"],
    "antonyms": ["Tea", "Water"]
},
{
    "main_word": "Coin",
    "bangla_meaning": "মুদ্রা",
    "synonyms": ["Currency", "Money"],
    "antonyms": ["Bill", "Note"]
},
{
    "main_word": "Cold",
    "bangla_meaning": "ঠান্ডা",
    "synonyms": ["Chilly", "Frigid"],
    "antonyms": ["Warm", "Hot"]
},
{
    "main_word": "Colon",
    "bangla_meaning": "নকালি",
    "synonyms": ["Punctuation mark"],
    "antonyms": ["Period", "Comma"]
},
{
    "main_word": "Color",
    "bangla_meaning": "রঙ",
    "synonyms": ["Hue", "Shade"],
    "antonyms": ["Black and white", "Monochrome"]
},
{
    "main_word": "Column",
    "bangla_meaning": "কলাম",
    "synonyms": ["Pillar", "Post"],
    "antonyms": ["Beam", "Row"]
},
{
    "main_word": "Comfort",
    "bangla_meaning": "আরাম",
    "synonyms": ["Ease", "Well-being"],
    "antonyms": ["Discomfort", "Pain"]
},
{
    "main_word": "Command",
    "bangla_meaning": "আয়দশ",
    "synonyms": ["Order", "Instruction"],
    "antonyms": ["Request", "Suggestion"]
},
{
    "main_word": "Common",
    "bangla_meaning": "সাধারণ",
    "synonyms": ["Usual", "Ordinary"],
    "antonyms": ["Rare", "Unusual"]
},
{
    "main_word": "Company",
    "bangla_meaning": "সংস্থা",
    "synonyms": ["Business", "Organization"],
    "antonyms": ["Solitude", "Isolation"]
},
{
    "main_word": "Daffodil",
    "bangla_meaning": "ডযায়ফানডল (pushpobrikkho)",
    "synonyms": ["Narcissus", "Jonquil"],
    "antonyms": ["None"]
},
{
    "main_word": "Dainty",
    "bangla_meaning": "সুকু মার (delicate)",
    "synonyms": ["Delicate", "Fragile", "Dainty"],
    "antonyms": ["Coarse", "Rough", "Sturdy"]
},
{
    "main_word": "Damp",
    "bangla_meaning": "আদ্রক(ardo)",
    "synonyms": ["Moist", "Wet", "Humid"],
    "antonyms": ["Dry", "Arid", "Parched"]
},
{
    "main_word": "Danger",
    "bangla_meaning": "নবপদ (bippod)",
    "synonyms": ["Peril", "Risk", "Hazard"],
    "antonyms": ["Safety", "Security", "Protection"]
},
{
    "main_word": "Dare",
    "bangla_meaning": "সাহস করা (shohos kora)",
    "synonyms": ["Venture", "Challenge", "Defy"],
    "antonyms": ["Cower", "Shrink", "Hesitate"]
},
{
    "main_word": "Dark",
    "bangla_meaning": "অন্ধকার (ondhokar)",
    "synonyms": ["Black", "Dim", "Obscure"],
    "antonyms": ["Light", "Bright", "Illuminated"]
},
{
    "main_word": "Darling",
    "bangla_meaning": "নপ্রয়জি (priyajan)",
    "synonyms": ["Sweetheart", "Love", "Darling"],
    "antonyms": ["Enemy", "Foe", "Adversary"]
},
{
    "main_word": "Dash",
    "bangla_meaning": "ধাক্কা (dhaakka)",
    "synonyms": ["Rush", "Burst", "Dart"],
    "antonyms": ["Stroll", "Saunter", "Amble"]
},
{
    "main_word": "Dazzling",
    "bangla_meaning": "চাকনচকযময় (chakchikkhyomoy)",
    "synonyms": ["Brilliant", "Dazzling", "Radiant"],
    "antonyms": ["Dull", "Dim", "Lackluster"]
},
{
    "main_word": "Dead",
    "bangla_meaning": "মৃত (mrito)",
    "synonyms": ["Deceased", "Lifeless", "Inert"],
    "antonyms": ["Alive", "Living", "Vibrant"]
},
{
    "main_word": "Deaf",
    "bangla_meaning": "বনধর (bodhir)",
    "synonyms": ["Unable to hear", "Deaf"],
    "antonyms": ["Hearing", "Able-to-hear", "Auditory"]
},
{
    "main_word": "Deal",
    "bangla_meaning": "চুক্রক্ত (chukti)",
    "synonyms": ["Agreement", "Transaction", "Bargain"],
    "antonyms": ["Disagreement", "Dispute"]
},
{
    "main_word": "Dear",
    "bangla_meaning": "নপ্রয় (priyo)",
    "synonyms": ["Beloved", "Cherished", "Dear"],
    "antonyms": ["Unloved", "Hated", "Disliked"]
},
{
    "main_word": "Debate",
    "bangla_meaning": "নবতকক(bitorko)",
    "synonyms": ["Discussion", "Argument", "Debate"],
    "antonyms": ["Agreement", "Consensus", "Harmony"]
},
{
    "main_word": "Debt",
    "bangla_meaning": "ঋণ (rin)",
    "synonyms": ["Loan", "Liability", "Obligation"],
    "antonyms": ["Credit", "Asset", "Wealth"]
},
{
    "main_word": "Decay",
    "bangla_meaning": "পচি (pochon)",
    "synonyms": ["Decompose", "Rot", "Deteriorate"],
    "antonyms": ["Grow", "Flourish", "Develop"]
},
{
    "main_word": "Decent",
    "bangla_meaning": "শালীি (shalin)",
    "synonyms": ["Respectable", "Proper", "Decent"],
    "antonyms": ["Indecent", "Improper", "Rude"]
},
{
    "main_word": "Decide",
    "bangla_meaning": "নসদ্ধান্ত নিওয়া (shiddhanto neoya)",
    "synonyms": ["Resolve", "Determine", "Decide"],
    "antonyms": ["Waver", "Hesitate", "Indecision"]
},
{
    "main_word": "Declare",
    "bangla_meaning": "ন াষণা করা (ghoshona kora)",
    "synonyms": ["Announce", "Proclaim", "Declare"],
    "antonyms": ["Conceal", "Hide", "Suppress"]
},
{
    "main_word": "Decorate",
    "bangla_meaning": "সাজায়িা (sajano)",
    "synonyms": ["Adorn", "Embellish", "Decorate"],
    "antonyms": ["Strip", "Denude", "Bare"]
},
{
    "main_word": "Decrease",
    "bangla_meaning": "হ্রাস (hras)",
    "synonyms": ["Reduce", "Diminish", "Decrease"],
    "antonyms": ["Increase", "Augment", "Amplify"]
},
{
    "main_word": "Deep",
    "bangla_meaning": "গভ্ীর (ghobir)",
    "synonyms": ["Profound", "Intense", "Deep"],
    "antonyms": ["Shallow", "Superficial", "Flimsy"]
},
{
    "main_word": "Defeat",
    "bangla_meaning": "পরাজয় (porajoy)",
    "synonyms": ["Defeat", "Conquer", "Vanquish"],
    "antonyms": ["Victory", "Triumph", "Conquest"]
},
{
    "main_word": "Defend",
    "bangla_meaning": "রক্ষা করা (rokkha kora)",
    "synonyms": ["Protect", "Shield", "Defend"],
    "antonyms": ["Attack", "Assault", "Invade"]
},
{
    "main_word": "Defer",
    "bangla_meaning": "মুলতু নব করা (multobi kora)",
    "synonyms": ["Postpone", "Delay", "Defer"],
    "antonyms": ["Advance", "Expedite", "Accelerate"]
},
{
    "main_word": "Define",
    "bangla_meaning": "সংজ্ঞানয়ত করুি (shongjanayit kor)",
    "synonyms": ["Explain", "Clarify", "Define"],
    "antonyms": ["Obscure", "Confuse", "Obfuscate"]
},
{
    "main_word": "Degree",
    "bangla_meaning": "নডগ্রী (digri)",
    "synonyms": ["Extent", "Level", "Degree"],
    "antonyms": ["Insignificance", "Triviality", "Minor"]
},
{
    "main_word": "Delight",
    "bangla_meaning": "আিন্দ (anondo)",
    "synonyms": ["Joy", "Pleasure", "Delight"],
    "antonyms": ["Sorrow", "Sadness", "Grief"]
},
{
    "main_word": "Deliver",
    "bangla_meaning": "সরবরাহ করা (soroborah kora)",
    "synonyms": ["Convey", "Transport", "Deliver"],
    "antonyms": ["Withhold", "Retain", "Deny"]
},
{
    "main_word": "Demand",
    "bangla_meaning": "চানহদা (chahida)",
    "synonyms": ["Necessity", "Requirement", "Demand"],
    "antonyms": ["Abundance", "Supply", "Surplus"]
},
{
    "main_word": "Denial",
    "bangla_meaning": "অস্বীকার (oswikar)",
    "synonyms": ["Refusal", "Negation", "Denial"],
    "antonyms": ["Affirmation", "Confirmation", "Acceptance"]
},
{
    "main_word": "Depart",
    "bangla_meaning": "চয়ল যাওয়া (chole jaowa)",
    "synonyms": ["Leave", "Quit", "Depart"],
    "antonyms": ["Arrive", "Reach", "Enter"]
},
{
    "main_word": "Depict",
    "bangla_meaning": "নচক্রত্রত করা (chitirito kora)",
    "synonyms": ["Portray", "Describe", "Depict"],
    "antonyms": ["Obfuscate", "Distort", "Obscure"]
},
{
    "main_word": "Deplorable",
    "bangla_meaning": "নিন্দিীয় (nindoniyo)",
    "synonyms": ["Deplorable", "Lamentable", "Wretched"],
    "antonyms": ["Praiseworthy", "Commendable", "Admirable"]
},
{
    "main_word": "Depreciate",
    "bangla_meaning": "হ্রাস পাওয়া (hras pawa)",
    "synonyms": ["Decrease", "Decline", "Depreciate"],
    "antonyms": ["Appreciate", "Increase"]
},
{
    "main_word": "Eager",
    "bangla_meaning": "আগ্রহী (agrohi)",
    "synonyms": ["Enthusiastic", "Excited"],
    "antonyms": ["Indifferent", "Apathetic"]
},
{
    "main_word": "Eerie",
    "bangla_meaning": "ভ্ীনতকর (bhoyonotokor)",
    "synonyms": ["Creepy", "Spooky"],
    "antonyms": ["Cheerful", "Bright"]
},
{
    "main_word": "Effective",
    "bangla_meaning": "কায ককর (kaj kor)",
    "synonyms": ["Efficient", "Successful"],
    "antonyms": ["Ineffective", "Useless"]
},
{
    "main_word": "Effort",
    "bangla_meaning": "প্রয়চষ্টা (prayashchita)",
    "synonyms": ["Endeavor", "Attempt"],
    "antonyms": ["Inaction", "Laziness"]
},
{
    "main_word": "Ego",
    "bangla_meaning": "অহংকার (ohongkar)",
    "synonyms": ["Self-importance", "Arrogance"],
    "antonyms": ["Humility", "Modesty"]
},
{
    "main_word": "Elicit",
    "bangla_meaning": "উদ্ঘাটিত করা (udghatito kora)",
    "synonyms": ["Draw out", "Evoke"],
    "antonyms": ["Conceal", "Suppress"]
},
{
    "main_word": "Eloquent",
    "bangla_meaning": "সুবক্ত (subokto)",
    "synonyms": ["Fluent", "Persuasive"],
    "antonyms": ["Ineloquent", "Stammering"]
},
{
    "main_word": "Elusive",
    "bangla_meaning": "ধরায়োোঁয়া যায় িা এমি (dhorayochhoiyo jaoya na emni)",
    "synonyms": ["Difficult to grasp", "Elusive"],
    "antonyms": ["Obvious", "Clear"]
},
{
    "main_word": "Embarrass",
    "bangla_meaning": "লজ্জা নদওয়া (lojja dowa)",
    "synonyms": ["Shame", "Humiliate"],
    "antonyms": ["Comfort", "Encourage"]
},
{
    "main_word": "Embellish",
    "bangla_meaning": "সুয়শানভ্ত করা",
    "synonyms": ["Decorate", "Enhance"],
    "antonyms": ["Strip down", "Simplify"]
},
{
    "main_word": "Eminent",
    "bangla_meaning": "নবিযাত",
    "synonyms": ["Distinguished", "Prominent"],
    "antonyms": ["Obscure", "Unknown"]
},
{
    "main_word": "Emotive",
    "bangla_meaning": "আয়বগপূণ ক",
    "synonyms": ["Emotional", "Affecting"],
    "antonyms": ["Unemotional", "Neutral"]
},
{
    "main_word": "Empathetic",
    "bangla_meaning": "সহািুভ্ূনতশীল",
    "synonyms": ["Understanding", "Compassionate"],
    "antonyms": ["Unfeeling", "Callous"]
},
{
    "main_word": "Empathy",
    "bangla_meaning": "সহািুভ্ূনত",
    "synonyms": ["Compassion", "Understanding"],
    "antonyms": ["Apathy", "Indifference"]
},
{
    "main_word": "Emphatic",
    "bangla_meaning": "নজারায়লা",
    "synonyms": ["Strong", "Forceful"],
    "antonyms": ["Weak", "Muted"]
},
{
    "main_word": "Empty",
    "bangla_meaning": "শূিয",
    "synonyms": ["Vacant", "Devoid"],
    "antonyms": ["Full", "Abundant"]
},
{
    "main_word": "Enchant",
    "bangla_meaning": "মুগ্ধ করা",
    "synonyms": ["Charm", "Delight"],
    "antonyms": ["Repel", "Disgust"]
},
{
    "main_word": "Endeavor",
    "bangla_meaning": "নচষ্টা",
    "synonyms": ["Effort", "Attempt"],
    "antonyms": ["Inaction", "Sloth"]
},
{
    "main_word": "Endemic",
    "bangla_meaning": "স্থািীয়",
    "synonyms": ["Native", "Peculiar to a region"],
    "antonyms": ["Foreign", "Imported"]
},
{
    "main_word": "Enervate",
    "bangla_meaning": "দুব কল করা",
    "synonyms": ["Weaken", "Deplete"],
    "antonyms": ["Strengthen", "Invigorate"]
},
{
    "main_word": "Enigma",
    "bangla_meaning": "রহসয",
    "synonyms": ["Mystery", "Puzzle"],
    "antonyms": ["Explanation", "Clarity"]
},
{
    "main_word": "Enmity",
    "bangla_meaning": "শত্রুতা",
    "synonyms": ["Hostility", "Animosity"],
    "antonyms": ["Friendship", "Amity"]
},
{
    "main_word": "Enormous",
    "bangla_meaning": "নবশাল",
    "synonyms": ["Huge", "Immense"],
    "antonyms": ["Small", "Tiny"]
},
{
    "main_word": "Enthrall",
    "bangla_meaning": "মুগ্ধ করা",
    "synonyms": ["Captivate", "Enchant"],
    "antonyms": ["Bore", "Repel"]
},
{
    "main_word": "Entreat",
    "bangla_meaning": "অিুয়রাধ করা",
    "synonyms": ["Beg", "Plead"],
    "antonyms": ["Command", "Demand"]
},
{
    "main_word": "Epidemic",
    "bangla_meaning": "মহামারী",
    "synonyms": ["Widespread disease", "Outbreak"],
    "antonyms": ["Isolated case", "Healthy"]
},
{
    "main_word": "Eradicate",
    "bangla_meaning": "নিমূ কল করা",
    "synonyms": ["Eliminate", "Wipe out"],
    "antonyms": ["Cultivate", "Promote"]
},
{
    "main_word": "Erudite",
    "bangla_meaning": "নবোি",
    "synonyms": ["Learned", "Scholarly"],
    "antonyms": ["Ignorant", "Uneducated"]
},
{
    "main_word": "Esoteric",
    "bangla_meaning": "অতযাধুনিক",
    "synonyms": ["Obscure", "Difficult to understand"],
    "antonyms": ["Commonplace", "Simple"]
},
{
    "main_word": "Esteem",
    "bangla_meaning": "সম্মাি",
    "synonyms": ["Respect", "Admiration"],
    "antonyms": ["Contempt", "Disdain"]
},
{
    "main_word": "Eternal",
    "bangla_meaning": "নচরন্তি",
    "synonyms": ["Everlasting", "Timeless"],
    "antonyms": ["Temporary", "Fleeting"]
},
{
    "main_word": "Ethical",
    "bangla_meaning": "নিনতক",
    "synonyms": ["Moral", "Right"],
    "antonyms": ["Unethical", "Wrong"]
},
{
    "main_word": "Ethereal",
    "bangla_meaning": "অয়লৌনকক",
    "synonyms": ["Delicate", "Heavenly"],
    "antonyms": ["Earthly", "Mundane"]
},
{
    "main_word": "Euphoria",
    "bangla_meaning": "আিয়ন্দাচ্ছ্বাস",
    "synonyms": ["Extreme happiness", "Bliss"],
    "antonyms": ["Despair", "Sadness"]
},
{
    "main_word": "Evasive",
    "bangla_meaning": "התחמקות",
    "synonyms": ["Avoiding", "Elusive"],
    "antonyms": ["Direct", "Straightforward"]
},
{
    "main_word": "Evict",
    "bangla_meaning": "উয়েদ করা",
    "synonyms": ["Expel", "Force out"],
    "antonyms": ["Welcome", "Accept"]
},
{
    "main_word": "Exacerbate",
    "bangla_meaning": "বানড়য়য় নতালা",
    "synonyms": ["Worsen", "Aggravate"],
    "antonyms": ["Improve", "Alleviate"]
},
{
    "main_word": "Exalted",
    "bangla_meaning": "উচ্চাঙ্গ",
    "synonyms": ["Elevated", "Noble"],
    "antonyms": ["Lowly", "Base"]
},
{
    "main_word": "Exasperate",
    "bangla_meaning": "নবরক্ত করা",
    "synonyms": ["Irritate", "Exasperate"],
    "antonyms": ["Calm", "Soothe"]
},
{
    "main_word": "Exceed",
    "bangla_meaning": "অনতিম করা",
    "synonyms": ["Surpass", "Go beyond"],
    "antonyms": ["Fall short of", "Fail"]
},
{
    "main_word": "Excelsior",
    "bangla_meaning": "আয়রা উপয়র",
    "synonyms": ["Higher", "Better"],
    "antonyms": ["Lower", "Worse"]
},
{
    "main_word": "Exhilarate",
    "bangla_meaning": "উল্লনসত করা",
    "synonyms": ["Excite", "Energize"],
    "antonyms": ["Depress", "Discourage"]
},

]

export default data
