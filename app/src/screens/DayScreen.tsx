import { useState, useRef } from 'react';
import { Check, ChevronLeft, ChevronRight, BookOpen, Brain, Heart, Sparkles, Lightbulb, PenLine, MessageCircle, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { getDayById, weeklyThemes } from '@/data/days';
import type { Progress as ProgressType } from '@/hooks/useLocalStorage';

interface DayScreenProps {
  dayId: number;
  progress: ProgressType;
  onMarkComplete: (dayId: number) => void;
  onSaveJournal: (dayId: number, entry: string) => void;
  onNavigateBack: () => void;
  onNavigateToDay: (dayId: number) => void;
}

function DayScreen({ dayId, progress, onMarkComplete, onSaveJournal, onNavigateToDay }: DayScreenProps) {
  const day = getDayById(dayId);
  const [journalEntry, setJournalEntry] = useState(progress.journalEntries[dayId] || '');
  const [isCompleted, setIsCompleted] = useState(progress.completedDays.includes(dayId));
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  if (!day) {
    return (
      <div className="px-4 py-8 text-center">
        <p className="text-[#A89F91]">Day not found</p>
        <Button onClick={() => onNavigateToDay(1)} className="mt-4">Go Home</Button>
      </div>
    );
  }

  const weekTheme = weeklyThemes[day.week - 1];
  const canGoPrevious = dayId > 1;
  const canGoNext = dayId < 40;

  const handleJournalChange = (value: string) => {
    setJournalEntry(value);
    onSaveJournal(dayId, value);
  };

  const handleMarkComplete = () => {
    if (!isCompleted) {
      onMarkComplete(dayId);
      setIsCompleted(true);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Day Header */}
      <div className="px-4 py-6 bg-gradient-to-b from-[#3D3B52]/50 to-transparent">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => canGoPrevious && onNavigateToDay(dayId - 1)}
            disabled={!canGoPrevious}
            className="text-[#A89F91] hover:text-[#E0DCD1] disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>
          <div className="text-center">
            <p className="text-[#D4A276] text-xs uppercase tracking-wider">Week {day.week}</p>
            <p className="text-[#A89F91] text-xs">{weekTheme?.name}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => canGoNext && onNavigateToDay(dayId + 1)}
            disabled={!canGoNext}
            className="text-[#A89F91] hover:text-[#E0DCD1] disabled:opacity-30"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="font-display text-3xl text-[#E0DCD1]">{day.title}</h1>
          <p className="text-[#A89F91] italic">{day.subtitle}</p>
        </div>

        {/* Completion Status */}
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleMarkComplete}
            disabled={isCompleted}
            className={`${
              isCompleted
                ? 'bg-green-600 hover:bg-green-600'
                : 'bg-[#D4A276] hover:bg-[#E0DCD1]'
            } text-[#2C2A3E] font-semibold`}
          >
            <Check className="h-4 w-4 mr-2" />
            {isCompleted ? 'Completed' : 'Mark Complete'}
          </Button>
        </div>
      </div>

      {/* Day Content Tabs */}
      <div className="px-4 pb-24">
        <Tabs defaultValue="scripture" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-[#3D3B52]/50 mb-4">
            <TabsTrigger value="scripture" className="text-xs data-[state=active]:bg-[#D4A276] data-[state=active]:text-[#2C2A3E]">
              <BookOpen className="h-3 w-3 mr-1" />
              Word
            </TabsTrigger>
            <TabsTrigger value="science" className="text-xs data-[state=active]:bg-[#D4A276] data-[state=active]:text-[#2C2A3E]">
              <Brain className="h-3 w-3 mr-1" />
              Science
            </TabsTrigger>
            <TabsTrigger value="practice" className="text-xs data-[state=active]:bg-[#D4A276] data-[state=active]:text-[#2C2A3E]">
              <Lightbulb className="h-3 w-3 mr-1" />
              Practice
            </TabsTrigger>
            <TabsTrigger value="journal" className="text-xs data-[state=active]:bg-[#D4A276] data-[state=active]:text-[#2C2A3E]">
              <PenLine className="h-3 w-3 mr-1" />
              Journal
            </TabsTrigger>
          </TabsList>

          {/* Scripture Tab */}
          <TabsContent value="scripture" className="space-y-4">
            <Card className="bg-gradient-to-br from-[#3D3B52] to-[#2C2A3E] border-[#D4A276]/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Scripture</span>
                </div>
                <blockquote className="font-display text-xl text-[#E0DCD1] italic leading-relaxed">
                  "{day.scripture.text}"
                </blockquote>
                <p className="text-[#D4A276] text-sm">— {day.scripture.reference}</p>
                <div className="border-t border-[#3D3B52] pt-4 mt-4">
                  <p className="text-[#A89F91] text-sm leading-relaxed">{day.scripture.reflection}</p>
                </div>
              </CardContent>
            </Card>

            {/* Declaration */}
            <Card className="bg-[#D4A276]/10 border-[#D4A276]/30">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="h-4 w-4 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Today's Declaration</span>
                </div>
                <p className="text-[#E0DCD1] font-medium text-center py-2">{day.declaration}</p>
              </CardContent>
            </Card>

            {/* Prayer */}
            <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Prayer</span>
                </div>
                <p className="text-[#E0DCD1] italic leading-relaxed">{day.prayer}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Science Tab */}
          <TabsContent value="science" className="space-y-4">
            <Card className="bg-gradient-to-br from-[#3D3B52] to-[#2C2A3E] border-[#D4A276]/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Neuroscience Insight</span>
                </div>
                <h3 className="font-display text-xl text-[#E0DCD1]">{day.science.title}</h3>
                <ul className="space-y-3">
                  {day.science.explanation.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#D4A276]/20 flex items-center justify-center text-[#D4A276] text-xs shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-[#A89F91] text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-4">
            <Card className="bg-gradient-to-br from-[#3D3B52] to-[#2C2A3E] border-[#D4A276]/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Brain Training</span>
                </div>
                <h3 className="font-display text-xl text-[#E0DCD1]">{day.brainTraining.title}</h3>
                <div className="space-y-3">
                  {day.brainTraining.steps.map((step, index) => (
                    <div key={index} className="bg-[#2C2A3E]/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#D4A276] flex items-center justify-center text-[#2C2A3E] text-sm font-semibold shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-[#E0DCD1] text-sm leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#3D3B52] pt-4 mt-4">
                  <p className="text-[#A89F91] text-sm italic">{day.brainTraining.whyItWorks}</p>
                </div>
              </CardContent>
            </Card>

            {/* Top Tip */}
            <Card className="bg-[#D4A276]/10 border-[#D4A276]/30">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Top Tip</span>
                </div>
                <p className="text-[#E0DCD1] text-sm">{day.topTip}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Journal Tab */}
          <TabsContent value="journal" className="space-y-4">
            <Card className="bg-gradient-to-br from-[#3D3B52] to-[#2C2A3E] border-[#D4A276]/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <PenLine className="h-5 w-5 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Journal Prompt</span>
                </div>
                <p className="text-[#E0DCD1] font-medium">{day.journal.prompt}</p>
                <Textarea
                  ref={textareaRef}
                  value={journalEntry}
                  onChange={(e) => handleJournalChange(e.target.value)}
                  placeholder="Write your thoughts here..."
                  className="min-h-[150px] bg-[#2C2A3E] border-[#3D3B52] text-[#E0DCD1] placeholder:text-[#A89F91]/50 resize-none"
                />
              </CardContent>
            </Card>

            <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Follow-up</span>
                </div>
                <p className="text-[#A89F91] text-sm">{day.journal.followUp}</p>
              </CardContent>
            </Card>

            <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Gratitude</span>
                </div>
                <p className="text-[#E0DCD1] text-sm">{day.gratitude}</p>
              </CardContent>
            </Card>

            <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#D4A276]" />
                  <span className="text-[#D4A276] text-sm uppercase tracking-wider">Reflection</span>
                </div>
                <p className="text-[#A89F91] text-sm">{day.reflection}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default DayScreen;
