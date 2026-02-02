export interface Day {
  id: number;
  title: string;
  subtitle: string;
  theme: string;
  week: number;
  scripture: {
    reference: string;
    text: string;
    reflection: string;
  };
  journal: {
    prompt: string;
    followUp: string;
  };
  science: {
    title: string;
    explanation: string[];
  };
  brainTraining: {
    title: string;
    steps: string[];
    whyItWorks: string;
  };
  declaration: string;
  prayer: string;
  gratitude: string;
  topTip: string;
  reflection: string;
}

export const weeklyThemes = [
  { week: 1, name: "Awakening", focus: "Becoming aware of your patterns" },
  { week: 2, name: "Repentance", focus: "Turning from old pathways" },
  { week: 3, name: "Renewal", focus: "Building new neural and spiritual habits" },
  { week: 4, name: "Identity", focus: "Learning who you are in Christ" },
  { week: 5, name: "Authority", focus: "Breaking agreements with lies" },
  { week: 6, name: "Surrender", focus: "Yielding your whole life to God" },
];

export const days: Day[] = [
  {
    id: 1,
    title: "Name the Weight",
    subtitle: "You cannot release what you have not named",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "1 Peter 5:7",
      text: "Cast all your anxiety on Him because He cares for you.",
      reflection: "This is not a command to be strong. It's an invitation to stop carrying what was never meant to be yours."
    },
    journal: {
      prompt: "What burden has been sitting on your chest, mind, or spirit? Write honestly. Don't filter. Don't judge yourself. This page is where the healing begins.",
      followUp: "How will you release this weight today? Choose one simple act of surrender. It doesn't need to be dramatic — it just needs to be real."
    },
    science: {
      title: "Why Naming the Weight Works",
      explanation: [
        "The amygdala calms down: When you put feelings into words, the amygdala's activity decreases. This is called affect labeling — it reduces emotional intensity.",
        "The prefrontal cortex switches on: Naming your emotion activates this region, giving you more stability and grounding.",
        "Your nervous system shifts out of survival mode: Naming the weight signals to your nervous system: 'I'm safe enough to process this.'",
        "Emotional clarity leads to spiritual clarity: Naming the weight clears mental space for connection, peace, and surrender."
      ]
    },
    brainTraining: {
      title: "The 90-Second Reset",
      steps: [
        "Name the weight out loud: Speak the emotion or burden you wrote down. Example: 'Right now I feel overwhelmed and afraid.'",
        "Take one slow breath in through your nose: Count to four. This signals safety to your nervous system.",
        "Exhale slowly through your mouth: Count to six. This lengthened exhale shifts your body out of fight-or-flight.",
        "Say this simple prayer: 'Jesus, I give this weight to You.'",
        "Sit still for 10 seconds: Let your body feel the release. Let your mind settle. Let your spirit breathe."
      ],
      whyItWorks: "A 90-second emotional cycle is enough time for the brain to deactivate the amygdala and activate the prefrontal cortex."
    },
    declaration: "I am not defined by what I carry. I am defined by whose I am.",
    prayer: "Lord, I name this weight before You. I refuse to carry it alone anymore. Take it from me. Teach me what it means to truly surrender. Amen.",
    gratitude: "What moment today reminded you that God was near?",
    topTip: "Keep a small notebook with you today. When you feel a weight rising, pause and name it immediately.",
    reflection: "What did it feel like to name your weight honestly?"
  },
  {
    id: 2,
    title: "Feel Without Fixing",
    subtitle: "Not every emotion needs a solution. Some just need space.",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "Psalm 62:8",
      text: "Pour out your hearts to Him, for God is our refuge.",
      reflection: "God doesn't ask you to organize your feelings before bringing them to Him. He simply invites you to pour them out."
    },
    journal: {
      prompt: "What emotion have you been avoiding because it feels too big, too messy, or too uncomfortable?",
      followUp: "What would it look like to simply feel this emotion without trying to fix it, explain it, or make it go away?"
    },
    science: {
      title: "The Science of Emotional Processing",
      explanation: [
        "Emotions are physical events: They last only 90 seconds in the body unless we fuel them with thoughts.",
        "Resistance creates persistence: Trying to suppress emotions activates the amygdala and keeps them alive longer.",
        "Feeling heals: When we allow emotions to move through us, the hippocampus processes and stores them properly.",
        "God designed this: Your nervous system is wired for emotional flow, not emotional storage."
      ]
    },
    brainTraining: {
      title: "The Emotional Wave Practice",
      steps: [
        "Notice: Where do you feel this emotion in your body? Name the sensation.",
        "Breathe: Take 3 slow breaths, imagining the breath moving through that area.",
        "Allow: Say silently: 'I allow this feeling to be here. It will pass.'",
        "Release: Exhale fully and imagine the emotion softening.",
        "Return: Bring your attention back to the present moment."
      ],
      whyItWorks: "This practice trains your brain that emotions are safe to feel, reducing the urge to avoid or suppress them."
    },
    declaration: "I am allowed to feel. My emotions are not my enemy — they are my teachers.",
    prayer: "Jesus, teach me to feel without fear. Show me that You can handle everything inside me — even the messy, complicated parts. Amen.",
    gratitude: "What part of God's character are you grateful for right now?",
    topTip: "Set a timer for 2 minutes today and simply sit with whatever you're feeling. No phone, no distraction — just presence.",
    reflection: "How did it feel to allow an emotion without trying to fix it?"
  },
  {
    id: 3,
    title: "Notice the Pattern",
    subtitle: "You can't change what you can't see",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "Romans 12:2",
      text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
      reflection: "Transformation begins with awareness. God invites us to notice our patterns so He can help us rewrite them."
    },
    journal: {
      prompt: "What is one recurring pattern in your thoughts, reactions, or behaviors that you'd like to change?",
      followUp: "When did this pattern start? What triggers it? What need is it trying to meet?"
    },
    science: {
      title: "Neural Pathways and Habit Formation",
      explanation: [
        "Neurons that fire together wire together: Repeated thoughts and behaviors create strong neural pathways.",
        "Patterns are automatic: The basal ganglia stores habits so the brain can save energy.",
        "Awareness is the first step: Noticing a pattern activates the prefrontal cortex, creating space for choice.",
        "New pathways take 40-60 days: Consistent practice rewires the brain with new, healthier patterns."
      ]
    },
    brainTraining: {
      title: "Pattern Interrupt Technique",
      steps: [
        "Identify: Name the pattern you noticed today.",
        "Pause: When you feel it starting, stop. Take one breath.",
        "Choose: Ask: 'Is this who I want to be? Is this aligned with my true identity?'",
        "Redirect: Replace the old pattern with a new, intentional action.",
        "Celebrate: Acknowledge that you just created a new neural pathway."
      ],
      whyItWorks: "Interrupting patterns activates neuroplasticity, allowing you to consciously choose new responses."
    },
    declaration: "I am not a prisoner of my past patterns. I have the power to choose differently.",
    prayer: "Lord, open my eyes to see what I've been blind to. Show me my patterns with compassion, not condemnation. Amen.",
    gratitude: "What prayer did God answer recently, even in a small way?",
    topTip: "Keep a 'pattern log' this week. Each time you notice the pattern, jot down what triggered it.",
    reflection: "What did you discover about your patterns today?"
  },
  {
    id: 4,
    title: "Breathe in His Presence",
    subtitle: "Your breath is a bridge between your body and your spirit",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "Genesis 2:7",
      text: "The Lord God formed man from the dust of the ground and breathed into his nostrils the breath of life.",
      reflection: "Every breath you take is a reminder that God's life is in you. Your breath connects you to your Creator."
    },
    journal: {
      prompt: "How does your body feel right now? Describe the sensations without judgment.",
      followUp: "What would it feel like to invite God's presence into every cell of your body?"
    },
    science: {
      title: "Breath and the Nervous System",
      explanation: [
        "Breathing regulates the autonomic nervous system: Slow, deep breaths activate the parasympathetic (rest) response.",
        "Oxygen calms the amygdala: Proper breathing reduces fear and anxiety responses.",
        "Breath affects heart rate variability: This is a key marker of emotional regulation and stress resilience.",
        "Conscious breathing increases prefrontal cortex activity: It brings clarity, focus, and presence."
      ]
    },
    brainTraining: {
      title: "Sacred Breath Practice",
      steps: [
        "Inhale deeply for 4 counts: Imagine breathing in God's peace.",
        "Hold for 4 counts: Let the oxygen saturate your cells.",
        "Exhale for 6 counts: Release tension, worry, and stress.",
        "Hold for 2 counts: Rest in the stillness.",
        "Repeat 5 times: With each cycle, feel your body settling."
      ],
      whyItWorks: "This breathing pattern stimulates the vagus nerve, shifting your body from fight-or-flight to rest-and-digest."
    },
    declaration: "With every breath, I am reminded that God's Spirit lives in me.",
    prayer: "Lord, teach me to breathe as You breathed life into me. Let each breath be a prayer of connection with You. Amen.",
    gratitude: "What moment of peace felt like a gift from God?",
    topTip: "Set 3 breath reminders on your phone today. Pause and breathe deeply when they go off.",
    reflection: "How did conscious breathing affect your sense of God's presence?"
  },
  {
    id: 5,
    title: "Write the Unwritten",
    subtitle: "Your story matters. Every chapter.",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "Psalm 139:16",
      text: "All the days ordained for me were written in Your book before one of them came to be.",
      reflection: "God has always known your story. He sees the chapters you've tried to forget — and He redeems them all."
    },
    journal: {
      prompt: "What chapter of your story have you been afraid to acknowledge or explore?",
      followUp: "If you trusted God completely with this chapter, what would you write about it?"
    },
    science: {
      title: "Narrative Therapy and the Brain",
      explanation: [
        "Storytelling integrates memory: Writing about experiences helps the hippocampus process and store memories properly.",
        "Narrative reduces amygdala activation: Putting experiences into words reduces their emotional charge.",
        "Your brain is wired for story: The brain processes information best through narrative structures.",
        "Reframing changes neural pathways: Seeing your story from a new perspective creates new connections in the brain."
      ]
    },
    brainTraining: {
      title: "The Story Reframe",
      steps: [
        "Write: Spend 5 minutes writing about a difficult chapter in your story.",
        "Feel: Notice the emotions that arise. Don't suppress them.",
        "Ask: 'What did this teach me? How did it shape me?'",
        "Reframe: Write one sentence about how God might use this chapter for good.",
        "Release: Close with a prayer of surrender over this part of your story."
      ],
      whyItWorks: "Narrative processing helps the brain integrate difficult experiences, reducing their emotional impact over time."
    },
    declaration: "My story is not over. God is still writing redemption into every chapter.",
    prayer: "God, help me see my story through Your eyes. Show me how You're writing redemption into every page. Amen.",
    gratitude: "What scripture brought you comfort this week?",
    topTip: "Start a 'story journal' this week. Write one paragraph each day about a different chapter of your life.",
    reflection: "What did you discover about your story today?"
  },
  {
    id: 6,
    title: "Surrender the Outcome",
    subtitle: "Let go of control. Embrace trust.",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "Proverbs 3:5-6",
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.",
      reflection: "Surrender is not giving up — it's giving over. It's trusting that God's plan is better than your own."
    },
    journal: {
      prompt: "What outcome are you trying to control right now?",
      followUp: "What would it look like to surrender this outcome to God completely?"
    },
    science: {
      title: "The Neuroscience of Surrender",
      explanation: [
        "Control activates the amygdala: Trying to control everything keeps your brain in a state of vigilance and stress.",
        "Surrender activates the parasympathetic system: Letting go signals safety to your nervous system.",
        "Trust increases oxytocin: This bonding hormone reduces fear and enhances emotional resilience.",
        "Surrender is a biological release valve: It allows your body to shift from survival to thriving."
      ]
    },
    brainTraining: {
      title: "The Release Practice",
      steps: [
        "Identify: What are you trying to control? Name it specifically.",
        "Visualize: Imagine holding this outcome in your hands.",
        "Open: Slowly open your hands, releasing it to God.",
        "Breathe: Take a deep breath and feel the relief of surrender.",
        "Trust: Say silently: 'I trust You, God. Your plan is better than mine.'"
      ],
      whyItWorks: "Physical release combined with mental surrender creates a powerful shift in the nervous system."
    },
    declaration: "I release my grip. I trust God's hands more than my own.",
    prayer: "Lord, I surrender this outcome to You. I trust that Your plan is better than anything I could design. Amen.",
    gratitude: "What conversation felt divinely timed?",
    topTip: "Practice the 'open hands' posture today. Whenever you feel anxiety about an outcome, physically open your hands.",
    reflection: "How did surrender feel different from control?"
  },
  {
    id: 7,
    title: "Rest in the Pause",
    subtitle: "Sabbath is not a luxury. It's a command.",
    theme: "Awakening",
    week: 1,
    scripture: {
      reference: "Mark 6:31",
      text: "Come with Me by yourselves to a quiet place and get some rest.",
      reflection: "Jesus invited His disciples to rest — not because they had earned it, but because they needed it. He invites you too."
    },
    journal: {
      prompt: "When was the last time you truly rested — body, mind, and spirit?",
      followUp: "What keeps you from resting? What would it take to give yourself permission to pause?"
    },
    science: {
      title: "The Science of Rest",
      explanation: [
        "Rest consolidates memory: During rest, the brain processes and stores what you've learned.",
        "Rest restores the prefrontal cortex: This executive function center needs downtime to operate optimally.",
        "Rest reduces cortisol: Chronic busyness keeps stress hormones elevated, damaging the body over time.",
        "Rest is when the brain cleans itself: The glymphatic system clears toxins during deep rest."
      ]
    },
    brainTraining: {
      title: "The Sacred Pause",
      steps: [
        "Stop: Put down everything you're doing.",
        "Breathe: Take 5 deep, slow breaths.",
        "Notice: What does your body need right now?",
        "Choose: Do one thing to honor that need.",
        "Rest: Allow yourself to simply be, without productivity."
      ],
      whyItWorks: "Intentional rest resets the nervous system and allows the brain to restore its resources."
    },
    declaration: "I am a human being, not a human doing. Rest is holy.",
    prayer: "Lord, teach me to rest without guilt. Show me that rest is not laziness — it's obedience. Amen.",
    gratitude: "What burden did God help you carry today?",
    topTip: "Schedule a 30-minute 'sacred pause' today. Protect it like any other important appointment.",
    reflection: "What did rest reveal to you today?"
  }
];

// Generate remaining days (8-40) with placeholder structure
for (let i = 8; i <= 40; i++) {
  const week = Math.ceil(i / 7);
  const weekTheme = weeklyThemes[Math.min(week - 1, 5)];
  
  days.push({
    id: i,
    title: `Day ${i}: Journey Continues`,
    subtitle: "Your transformation is in progress",
    theme: weekTheme?.name || "Commissioning",
    week: week,
    scripture: {
      reference: "Philippians 1:6",
      text: "He who began a good work in you will carry it on to completion until the day of Christ Jesus.",
      reflection: "God is faithful to complete what He started in you. Trust the process."
    },
    journal: {
      prompt: "What is God teaching you in this season of your journey?",
      followUp: "How can you apply today's insight to your life right now?"
    },
    science: {
      title: "Neuroplasticity in Action",
      explanation: [
        "Your brain is changing: Every day of practice strengthens new neural pathways.",
        "Consistency creates transformation: Small daily actions compound over time.",
        "Identity shapes behavior: As you see yourself differently, you act differently.",
        "The journey is the destination: Growth happens in the daily practice, not just the end goal."
      ]
    },
    brainTraining: {
      title: "Daily Reset Practice",
      steps: [
        "Pause: Take a moment to center yourself.",
        "Breathe: Three deep breaths to calm your nervous system.",
        "Reflect: Review today's scripture and insight.",
        "Declare: Speak your identity out loud.",
        "Pray: Close with gratitude and surrender."
      ],
      whyItWorks: "Daily practice reinforces new neural pathways and builds lasting transformation."
    },
    declaration: "I am being transformed by the renewing of my mind.",
    prayer: "Lord, continue Your good work in me. I surrender to Your transforming power. Amen.",
    gratitude: "What are you grateful for today?",
    topTip: "Consistency is key. Show up today, even if it's just for a few minutes.",
    reflection: "What did you learn about yourself today?"
  });
}

export const getDayById = (id: number): Day | undefined => {
  return days.find(day => day.id === id);
};

export const getDaysByWeek = (week: number): Day[] => {
  return days.filter(day => day.week === week);
};

export const getTotalDays = (): number => days.length;
