import { useState } from 'react';
import { BookOpen, Heart, Brain, Sparkles, ChevronRight, Flame, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { days, weeklyThemes } from '@/data/days';
import { getRandomPrompt } from '@/data/gratitude';
import type { Progress as ProgressType } from '@/hooks/useLocalStorage';

interface HomeScreenProps {
  progress: ProgressType;
  onNavigateToDay: (dayId: number) => void;
  onNavigateToPrayers: () => void;
  onNavigateToGratitude: () => void;
  onNavigateToScience: () => void;
}

function HomeScreen({ progress, onNavigateToDay, onNavigateToPrayers, onNavigateToGratitude, onNavigateToScience }: HomeScreenProps) {
  const [dailyGratitude] = useState(() => getRandomPrompt());
  
  const completedCount = progress.completedDays.length;
  const progressPercentage = Math.round((completedCount / 40) * 100);
  const currentWeek = Math.ceil(progress.currentDay / 7);
  const currentTheme = weeklyThemes[currentWeek - 1] || weeklyThemes[5];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <section className="text-center space-y-2">
        <p className="text-[#A89F91] text-sm uppercase tracking-wider">{getGreeting()}</p>
        <h2 className="font-display text-3xl text-[#E0DCD1]">Your Journey</h2>
        <p className="text-[#A89F91] text-sm">Day {progress.currentDay} of 40 • Week {currentWeek}</p>
      </section>

      {/* Progress Card */}
      <Card className="bg-gradient-to-br from-[#3D3B52] to-[#2C2A3E] border-[#D4A276]/30">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D4A276]/20 flex items-center justify-center">
                <Target className="h-6 w-6 text-[#D4A276]" />
              </div>
              <div>
                <p className="text-[#E0DCD1] font-semibold">Your Progress</p>
                <p className="text-[#A89F91] text-sm">{completedCount} of 40 days completed</p>
              </div>
            </div>
            <span className="font-display text-2xl text-[#D4A276]">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-[#2C2A3E]" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#A89F91]">Current Theme:</span>
            <span className="text-[#D4A276] font-medium">{currentTheme?.name}</span>
          </div>
        </CardContent>
      </Card>

      {/* Continue Journey Button */}
      <Button
        onClick={() => onNavigateToDay(progress.currentDay)}
        className="w-full py-6 bg-[#D4A276] hover:bg-[#E0DCD1] text-[#2C2A3E] font-semibold text-lg btn-shine animate-pulse-glow rounded-xl"
      >
        <BookOpen className="h-5 w-5 mr-2" />
        Continue Day {progress.currentDay}
        <ChevronRight className="h-5 w-5 ml-2" />
      </Button>

      {/* Quick Access Grid */}
      <section className="grid grid-cols-2 gap-3">
        <Card 
          onClick={onNavigateToPrayers}
          className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover"
        >
          <CardContent className="p-4 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#D4A276]/20 flex items-center justify-center">
              <Heart className="h-5 w-5 text-[#D4A276]" />
            </div>
            <div>
              <p className="text-[#E0DCD1] font-medium text-sm">Prayers</p>
              <p className="text-[#A89F91] text-xs">100 prayers</p>
            </div>
          </CardContent>
        </Card>

        <Card 
          onClick={onNavigateToGratitude}
          className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover"
        >
          <CardContent className="p-4 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#D4A276]/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-[#D4A276]" />
            </div>
            <div>
              <p className="text-[#E0DCD1] font-medium text-sm">Gratitude</p>
              <p className="text-[#A89F91] text-xs">100 prompts</p>
            </div>
          </CardContent>
        </Card>

        <Card 
          onClick={onNavigateToScience}
          className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover col-span-2"
        >
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4A276]/20 flex items-center justify-center shrink-0">
              <Brain className="h-5 w-5 text-[#D4A276]" />
            </div>
            <div className="flex-1">
              <p className="text-[#E0DCD1] font-medium text-sm">Neuroscience Insights</p>
              <p className="text-[#A89F91] text-xs">Understand how transformation works in your brain</p>
            </div>
            <ChevronRight className="h-5 w-5 text-[#A89F91]" />
          </CardContent>
        </Card>
      </section>

      {/* Daily Gratitude */}
      <Card className="bg-gradient-to-br from-[#D4A276]/20 to-[#3D3B52] border-[#D4A276]/30">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#D4A276]" />
            <p className="text-[#D4A276] text-sm font-medium uppercase tracking-wider">Daily Gratitude</p>
          </div>
          <p className="text-[#E0DCD1] italic">{dailyGratitude.prompt}</p>
        </CardContent>
      </Card>

      {/* Journey Overview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-[#E0DCD1]">Journey Overview</h3>
          <span className="text-[#A89F91] text-sm">6 Weeks</span>
        </div>
        <ScrollArea className="h-48 rounded-xl border border-[#3D3B52]">
          <div className="p-3 space-y-2">
            {weeklyThemes.map((theme, index) => {
              const weekNumber = index + 1;
              const isActive = weekNumber === currentWeek;
              const isCompleted = weekNumber < currentWeek;
              
              return (
                <div
                  key={weekNumber}
                  onClick={() => onNavigateToDay((weekNumber - 1) * 7 + 1)}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-[#D4A276]/20 border border-[#D4A276]/50' 
                      : isCompleted
                      ? 'bg-[#3D3B52]/30'
                      : 'bg-[#2C2A3E]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        isCompleted 
                          ? 'bg-[#D4A276] text-[#2C2A3E]' 
                          : isActive
                          ? 'bg-[#D4A276]/50 text-[#E0DCD1]'
                          : 'bg-[#3D3B52] text-[#A89F91]'
                      }`}>
                        {isCompleted ? '✓' : weekNumber}
                      </div>
                      <div>
                        <p className={`font-medium text-sm ${isActive ? 'text-[#D4A276]' : 'text-[#E0DCD1]'}`}>
                          Week {weekNumber}: {theme.name}
                        </p>
                        <p className="text-[#A89F91] text-xs">{theme.focus}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-[#A89F91]" />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </section>

      {/* Recent Days */}
      <section className="space-y-3">
        <h3 className="font-display text-xl text-[#E0DCD1]">Recent Days</h3>
        <div className="grid grid-cols-7 gap-2">
          {days.slice(0, 28).map((day) => {
            const isCompleted = progress.completedDays.includes(day.id);
            const isCurrent = day.id === progress.currentDay;
            
            return (
              <button
                key={day.id}
                onClick={() => onNavigateToDay(day.id)}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  isCompleted
                    ? 'bg-[#D4A276] text-[#2C2A3E]'
                    : isCurrent
                    ? 'bg-[#D4A276]/50 text-[#E0DCD1] ring-2 ring-[#D4A276]'
                    : 'bg-[#3D3B52]/50 text-[#A89F91] hover:bg-[#3D3B52]'
                }`}
              >
                {day.id}
              </button>
            );
          })}
        </div>
      </section>

      {/* Encouragement */}
      <section className="text-center py-6">
        <Flame className="h-8 w-8 text-[#D4A276] mx-auto mb-3" />
        <p className="text-[#E0DCD1] italic font-heading text-lg">
          "He who began a good work in you will carry it on to completion."
        </p>
        <p className="text-[#A89F91] text-sm mt-2">— Philippians 1:6</p>
      </section>
    </div>
  );
}

export default HomeScreen;
