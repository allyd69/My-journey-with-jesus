export interface GratitudePrompt {
  id: number;
  category: string;
  prompt: string;
}

export const gratitudeCategories = [
  "Gratitude for God's Presence",
  "Gratitude for Yourself",
  "Gratitude for Others",
  "Gratitude for Daily Life",
  "Gratitude for Healing",
  "Gratitude for Purpose",
  "Gratitude for Love",
  "Gratitude for Growth",
  "Gratitude for Provision",
  "Gratitude for Today"
];

export const gratitudePrompts: GratitudePrompt[] = [
  // Category 1: Gratitude for God's Presence (1-10)
  { id: 1, category: "Gratitude for God's Presence", prompt: "What moment today reminded you that God was near?" },
  { id: 2, category: "Gratitude for God's Presence", prompt: "What part of God's character are you grateful for right now?" },
  { id: 3, category: "Gratitude for God's Presence", prompt: "What prayer did God answer recently, even in a small way?" },
  { id: 4, category: "Gratitude for God's Presence", prompt: "What moment of peace felt like a gift from God?" },
  { id: 5, category: "Gratitude for God's Presence", prompt: "What scripture brought you comfort this week?" },
  { id: 6, category: "Gratitude for God's Presence", prompt: "What conversation felt divinely timed?" },
  { id: 7, category: "Gratitude for God's Presence", prompt: "What burden did God help you carry today?" },
  { id: 8, category: "Gratitude for God's Presence", prompt: "What moment made you feel seen by God?" },
  { id: 9, category: "Gratitude for God's Presence", prompt: "What did God protect you from that you may not have noticed?" },
  { id: 10, category: "Gratitude for God's Presence", prompt: "What part of your story shows God's faithfulness?" },
  
  // Category 2: Gratitude for Yourself (11-20)
  { id: 11, category: "Gratitude for Yourself", prompt: "What is one thing you did today that you're proud of?" },
  { id: 12, category: "Gratitude for Yourself", prompt: "What part of your personality are you grateful for?" },
  { id: 13, category: "Gratitude for Yourself", prompt: "What strength showed up in you today?" },
  { id: 14, category: "Gratitude for Yourself", prompt: "What boundary did you honor that protected your peace?" },
  { id: 15, category: "Gratitude for Yourself", prompt: "What step of growth did you take recently?" },
  { id: 16, category: "Gratitude for Yourself", prompt: "What quality in you reflects God's image?" },
  { id: 17, category: "Gratitude for Yourself", prompt: "What hard thing did you survive that shaped you?" },
  { id: 18, category: "Gratitude for Yourself", prompt: "What part of your healing journey are you grateful for?" },
  { id: 19, category: "Gratitude for Yourself", prompt: "What gift or talent in you feels like a blessing?" },
  { id: 20, category: "Gratitude for Yourself", prompt: "What part of your identity feels clearer today?" },
  
  // Category 3: Gratitude for Others (21-30)
  { id: 21, category: "Gratitude for Others", prompt: "Who encouraged you recently, and how did it impact you?" },
  { id: 22, category: "Gratitude for Others", prompt: "Who makes you feel safe, and why?" },
  { id: 23, category: "Gratitude for Others", prompt: "Who has shown you love in a meaningful way?" },
  { id: 24, category: "Gratitude for Others", prompt: "Who has been patient with you?" },
  { id: 25, category: "Gratitude for Others", prompt: "Who has challenged you to grow?" },
  { id: 26, category: "Gratitude for Others", prompt: "Who has prayed for you or supported you spiritually?" },
  { id: 27, category: "Gratitude for Others", prompt: "Who has made you laugh recently?" },
  { id: 28, category: "Gratitude for Others", prompt: "Who has inspired you by their example?" },
  { id: 29, category: "Gratitude for Others", prompt: "Who has forgiven you or extended grace?" },
  { id: 30, category: "Gratitude for Others", prompt: "Who do you appreciate more today than you did a year ago?" },
  
  // Category 4: Gratitude for Daily Life (31-40)
  { id: 31, category: "Gratitude for Daily Life", prompt: "What simple moment today brought you joy?" },
  { id: 32, category: "Gratitude for Daily Life", prompt: "What routine or rhythm helps you feel grounded?" },
  { id: 33, category: "Gratitude for Daily Life", prompt: "What object in your home makes life easier or more beautiful?" },
  { id: 34, category: "Gratitude for Daily Life", prompt: "What food, drink, or scent brought comfort today?" },
  { id: 35, category: "Gratitude for Daily Life", prompt: "What moment of rest are you grateful for?" },
  { id: 36, category: "Gratitude for Daily Life", prompt: "What conversation brightened your day?" },
  { id: 37, category: "Gratitude for Daily Life", prompt: "What song, book, or message encouraged you?" },
  { id: 38, category: "Gratitude for Daily Life", prompt: "What small win did you experience today?" },
  { id: 39, category: "Gratitude for Daily Life", prompt: "What part of your environment feels like a blessing?" },
  { id: 40, category: "Gratitude for Daily Life", prompt: "What moment made you smile unexpectedly?" },
  
  // Category 5: Gratitude for Healing (41-50)
  { id: 41, category: "Gratitude for Healing", prompt: "What wound has begun to heal?" },
  { id: 42, category: "Gratitude for Healing", prompt: "What emotion did you handle better today than before?" },
  { id: 43, category: "Gratitude for Healing", prompt: "What lie have you stopped believing?" },
  { id: 44, category: "Gratitude for Healing", prompt: "What truth has taken root in your heart?" },
  { id: 45, category: "Gratitude for Healing", prompt: "What habit or pattern have you broken?" },
  { id: 46, category: "Gratitude for Healing", prompt: "What relationship has experienced healing?" },
  { id: 47, category: "Gratitude for Healing", prompt: "What part of your nervous system feels calmer now?" },
  { id: 48, category: "Gratitude for Healing", prompt: "What fear has lost its power over you?" },
  { id: 49, category: "Gratitude for Healing", prompt: "What memory feels less painful today?" },
  { id: 50, category: "Gratitude for Healing", prompt: "What step of healing are you grateful you had the courage to take?" },
  
  // Category 6: Gratitude for Purpose (51-60)
  { id: 51, category: "Gratitude for Purpose", prompt: "What opportunity feels aligned with your calling?" },
  { id: 52, category: "Gratitude for Purpose", prompt: "What gift or talent are you grateful God placed in you?" },
  { id: 53, category: "Gratitude for Purpose", prompt: "What moment recently affirmed your purpose?" },
  { id: 54, category: "Gratitude for Purpose", prompt: "What dream still excites your heart?" },
  { id: 55, category: "Gratitude for Purpose", prompt: "What assignment feels meaningful in this season?" },
  { id: 56, category: "Gratitude for Purpose", prompt: "What person has affirmed your calling?" },
  { id: 57, category: "Gratitude for Purpose", prompt: "What skill have you developed that supports your purpose?" },
  { id: 58, category: "Gratitude for Purpose", prompt: "What moment made you feel 'this is what I'm made for'?" },
  { id: 59, category: "Gratitude for Purpose", prompt: "What part of your vision feels clearer today?" },
  { id: 60, category: "Gratitude for Purpose", prompt: "What step toward purpose are you grateful you took?" },
  
  // Category 7: Gratitude for Love (61-70)
  { id: 61, category: "Gratitude for Love", prompt: "What moment of love did you give today?" },
  { id: 62, category: "Gratitude for Love", prompt: "What moment of love did you receive?" },
  { id: 63, category: "Gratitude for Love", prompt: "What relationship brings warmth to your life?" },
  { id: 64, category: "Gratitude for Love", prompt: "What act of kindness touched your heart?" },
  { id: 65, category: "Gratitude for Love", prompt: "What moment of forgiveness softened you?" },
  { id: 66, category: "Gratitude for Love", prompt: "What expression of love felt healing?" },
  { id: 67, category: "Gratitude for Love", prompt: "What memory of love still strengthens you?" },
  { id: 68, category: "Gratitude for Love", prompt: "What moment of compassion did you show yourself?" },
  { id: 69, category: "Gratitude for Love", prompt: "What moment of connection felt sacred?" },
  { id: 70, category: "Gratitude for Love", prompt: "What expression of God's love felt personal today?" },
  
  // Category 8: Gratitude for Growth (71-80)
  { id: 71, category: "Gratitude for Growth", prompt: "What challenge helped you grow?" },
  { id: 72, category: "Gratitude for Growth", prompt: "What mistake taught you something valuable?" },
  { id: 73, category: "Gratitude for Growth", prompt: "What risk did you take that expanded you?" },
  { id: 74, category: "Gratitude for Growth", prompt: "What new mindset are you grateful for?" },
  { id: 75, category: "Gratitude for Growth", prompt: "What old pattern have you outgrown?" },
  { id: 76, category: "Gratitude for Growth", prompt: "What moment required courage — and you showed up?" },
  { id: 77, category: "Gratitude for Growth", prompt: "What discipline or habit has strengthened you?" },
  { id: 78, category: "Gratitude for Growth", prompt: "What feedback helped you mature?" },
  { id: 79, category: "Gratitude for Growth", prompt: "What season of stretching shaped you?" },
  { id: 80, category: "Gratitude for Growth", prompt: "What part of your character has deepened?" },
  
  // Category 9: Gratitude for Provision (81-90)
  { id: 81, category: "Gratitude for Provision", prompt: "What need did God meet recently?" },
  { id: 82, category: "Gratitude for Provision", prompt: "What resource came at the right time?" },
  { id: 83, category: "Gratitude for Provision", prompt: "What financial blessing are you grateful for?" },
  { id: 84, category: "Gratitude for Provision", prompt: "What opportunity opened unexpectedly?" },
  { id: 85, category: "Gratitude for Provision", prompt: "What door closed that protected you?" },
  { id: 86, category: "Gratitude for Provision", prompt: "What person has supported you practically?" },
  { id: 87, category: "Gratitude for Provision", prompt: "What job, project, or income stream are you thankful for?" },
  { id: 88, category: "Gratitude for Provision", prompt: "What moment reminded you that God is your provider?" },
  { id: 89, category: "Gratitude for Provision", prompt: "What unexpected blessing surprised you?" },
  { id: 90, category: "Gratitude for Provision", prompt: "What area of your life feels sustained by God?" },
  
  // Category 10: Gratitude for Today (91-100)
  { id: 91, category: "Gratitude for Today", prompt: "What is one thing today you don't want to take for granted?" },
  { id: 92, category: "Gratitude for Today", prompt: "What moment today felt sacred?" },
  { id: 93, category: "Gratitude for Today", prompt: "What did you learn today?" },
  { id: 94, category: "Gratitude for Today", prompt: "What beauty did you notice today?" },
  { id: 95, category: "Gratitude for Today", prompt: "What conversation mattered today?" },
  { id: 96, category: "Gratitude for Today", prompt: "What emotion did you honor today?" },
  { id: 97, category: "Gratitude for Today", prompt: "What moment of joy did you experience?" },
  { id: 98, category: "Gratitude for Today", prompt: "What moment of peace did you feel?" },
  { id: 99, category: "Gratitude for Today", prompt: "What did God whisper to your heart today?" },
  { id: 100, category: "Gratitude for Today", prompt: "What is one thing — big or small — you're grateful for right now?" }
];

export const getPromptsByCategory = (category: string): GratitudePrompt[] => {
  return gratitudePrompts.filter(prompt => prompt.category === category);
};

export const getPromptById = (id: number): GratitudePrompt | undefined => {
  return gratitudePrompts.find(prompt => prompt.id === id);
};

export const getRandomPrompt = (): GratitudePrompt => {
  const randomIndex = Math.floor(Math.random() * gratitudePrompts.length);
  return gratitudePrompts[randomIndex];
};
