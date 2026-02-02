export interface ScienceTopic {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  explanation: string[];
  spiritualConnection: string;
  practicalApplication: string;
}

export const scienceTopics: ScienceTopic[] = [
  {
    id: "peace",
    title: "The Science of Peace",
    subtitle: "How Peace Rewires the Brain",
    icon: "dove",
    explanation: [
      "When you enter a state of peace, your brain shifts from sympathetic activation (fight/flight) into parasympathetic dominance (rest/restore).",
      "This transition lowers cortisol, reduces inflammation, improves digestion, enhances emotional regulation, and strengthens the prefrontal cortex (your decision-making center).",
      "Peace is not passive — it is a neurological recalibration.",
      "Prayer activates the anterior cingulate cortex, the region responsible for empathy, emotional regulation, and connection. It also reduces activity in the amygdala, the fear center."
    ],
    spiritualConnection: "Jesus said, 'Peace I leave with you; my peace I give you.' This peace is not just spiritual — it's a physiological reality that changes your brain chemistry.",
    practicalApplication: "Practice the 4-7-8 breathing technique: Inhale for 4 counts, hold for 7, exhale for 8. This activates the parasympathetic nervous system and brings peace to your body and mind."
  },
  {
    id: "gratitude",
    title: "The Science of Gratitude",
    subtitle: "How Gratitude Changes the Brain",
    icon: "heart",
    explanation: [
      "Gratitude increases dopamine and serotonin — the brain's 'feel-good' chemicals.",
      "It strengthens neural pathways associated with optimism, resilience, emotional stability, and stress recovery.",
      "Gratitude literally trains your brain to scan for good instead of danger.",
      "Trauma teaches the brain to anticipate threat. Gratitude teaches the brain to anticipate goodness. Over time, this rewires the default mode network, shifting your baseline emotional state."
    ],
    spiritualConnection: "Giving thanks is not just a spiritual discipline — it's a brain-training exercise that aligns your mind with God's goodness.",
    practicalApplication: "Write down three things you're grateful for every morning. Be specific. This simple practice begins rewiring your brain within weeks."
  },
  {
    id: "identity",
    title: "The Science of Identity",
    subtitle: "Identity Determines Behavior",
    icon: "user",
    explanation: [
      "Your brain is wired to act in alignment with who you believe you are.",
      "Identity statements activate the prefrontal cortex, shaping habits, decisions, emotional responses, and self-control.",
      "Identity is the strongest predictor of long-term change.",
      "When you meditate on truth, your brain forms new neural pathways. This is neuroplasticity — the brain's ability to reshape itself."
    ],
    spiritualConnection: "When God says 'You are my beloved child,' He's not just comforting you — He's giving you an identity that reshapes your brain and behavior.",
    practicalApplication: "Speak identity declarations out loud each morning: 'I am loved. I am chosen. I am enough.' Your brain believes what you repeatedly declare."
  },
  {
    id: "healing",
    title: "The Science of Healing",
    subtitle: "How Emotional Healing Works in the Brain",
    icon: "heart-pulse",
    explanation: [
      "Healing requires integrating the limbic system (emotion) with the prefrontal cortex (logic).",
      "This integration reduces emotional reactivity and increases emotional stability.",
      "Naming emotions activates the right ventrolateral prefrontal cortex, which reduces amygdala activity by up to 50%.",
      "This is why journaling, prayer, and confession are healing practices — they literally calm the fear center of the brain."
    ],
    spiritualConnection: "God invites us to pour out our hearts to Him. This act of naming our pain before Him is not just spiritual — it's neurological healing.",
    practicalApplication: "When you feel overwhelmed, name the emotion out loud: 'I feel anxious right now.' This simple act reduces its power over you."
  },
  {
    id: "surrender",
    title: "The Science of Surrender",
    subtitle: "Why Surrender Reduces Anxiety",
    icon: "hands",
    explanation: [
      "Trying to control everything overstimulates the amygdala.",
      "Surrender activates the parasympathetic nervous system, signaling safety.",
      "Letting go is not weakness — it is a biological release valve.",
      "Trust increases oxytocin, which increases bonding, lowers fear, enhances emotional resilience, and improves stress recovery."
    ],
    spiritualConnection: "Surrender to God is not giving up — it's giving over. It's trusting that His plan is better than your own, and this trust literally calms your nervous system.",
    practicalApplication: "Practice 'open hands' posture when you feel anxious. Physically opening your hands signals to your brain that you're releasing control."
  },
  {
    id: "purpose",
    title: "The Science of Purpose",
    subtitle: "Purpose Activates Motivation",
    icon: "compass",
    explanation: [
      "Purpose increases dopamine — the neurotransmitter responsible for drive, focus, energy, and follow-through.",
      "People with a sense of purpose have higher resilience and lower stress.",
      "When you visualize your future self, your brain activates the same neural pathways as if you were already living it.",
      "This is why vision accelerates transformation."
    ],
    spiritualConnection: "God has given each of us a unique calling. When we align with that purpose, our brains light up with motivation and meaning.",
    practicalApplication: "Write a vision statement for your life. Read it daily. Visualize yourself living it. Your brain will begin wiring itself toward that reality."
  },
  {
    id: "love",
    title: "The Science of Love",
    subtitle: "Love Regulates the Nervous System",
    icon: "heart",
    explanation: [
      "Love increases oxytocin and decreases cortisol.",
      "It stabilizes the heart rate and improves emotional regulation.",
      "Compassion activates the insula and anterior cingulate cortex, increasing empathy and connection.",
      "Love is not just emotional — it is physiological."
    ],
    spiritualConnection: "God is love. When we love others, we participate in the very nature of God — and our bodies respond with healing and wholeness.",
    practicalApplication: "Practice loving-kindness meditation: Send well-wishes to yourself, loved ones, neutral people, and even difficult people. This rewires your brain for compassion."
  },
  {
    id: "becoming",
    title: "The Science of Becoming",
    subtitle: "How the Brain Changes Through Repetition",
    icon: "seedling",
    explanation: [
      "Your brain strengthens whatever you repeat.",
      "This is called Hebbian learning: 'Neurons that fire together wire together.'",
      "Becoming is not a moment — it is a pattern.",
      "Small steps create micro-dopamine releases, which reinforce habits and build momentum. Consistency beats intensity."
    ],
    spiritualConnection: "Transformation happens through daily renewal. Each small step of obedience rewires your brain to be more like Christ.",
    practicalApplication: "Choose one small daily practice and commit to it for 40 days. Small, consistent actions create lasting neural change."
  },
  {
    id: "impact",
    title: "The Science of Impact",
    subtitle: "Why Helping Others Changes You",
    icon: "hands-helping",
    explanation: [
      "Serving others activates the reward system, increasing joy, meaning, motivation, and emotional resilience.",
      "Impact is mutually healing.",
      "When you are fully present, your nervous system co-regulates with others.",
      "Your calm becomes their calm. Impact is transmitted through presence."
    ],
    spiritualConnection: "Jesus came to serve, not to be served. When we follow His example, our brains actually reward us with increased wellbeing and purpose.",
    practicalApplication: "Do one act of kindness today — no matter how small. Notice how it affects your mood and sense of meaning."
  },
  {
    id: "legacy",
    title: "The Science of Legacy",
    subtitle: "Legacy Shapes Long-Term Behavior",
    icon: "mountain",
    explanation: [
      "When you see your life as meaningful, your brain organizes itself around that meaning.",
      "This increases self-control, emotional stability, long-term thinking, and purposeful action.",
      "Legacy is a neurological compass.",
      "Legacy shifts your focus from survival to significance. This reduces anxiety and increases life satisfaction."
    ],
    spiritualConnection: "Legacy is not what you leave behind — it's what you live from. When you live for something greater than yourself, your brain functions at its highest capacity.",
    practicalApplication: "Write a letter to your future self or your grandchildren. What do you want them to know? What values do you want to pass on?"
  }
];

export const getScienceTopicById = (id: string): ScienceTopic | undefined => {
  return scienceTopics.find(topic => topic.id === id);
};

export const getAllScienceTopics = (): ScienceTopic[] => {
  return scienceTopics;
};
