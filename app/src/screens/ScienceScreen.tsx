import { useState } from 'react';
import { Brain, ChevronRight, Sparkles, Heart, User, HeartPulse, Compass, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { scienceTopics } from '@/data/science';

const iconMap: Record<string, React.ElementType> = {
  heart: Heart,
  user: User,
  'heart-pulse': HeartPulse,
  compass: Compass,
  mountain: Mountain,
  brain: Brain,
};

function ScienceScreen() {
  const [selectedTopic, setSelectedTopic] = useState<typeof scienceTopics[0] | null>(null);

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <Brain className="h-8 w-8 text-[#D4A276] mx-auto" />
        <h2 className="font-display text-3xl text-[#E0DCD1]">Neuroscience</h2>
        <p className="text-[#A89F91] text-sm">Where faith meets brain science</p>
      </div>

      {/* Intro */}
      <Card className="bg-gradient-to-br from-[#3D3B52] to-[#2C2A3E] border-[#D4A276]/30">
        <CardContent className="p-5 space-y-3">
          <Sparkles className="h-5 w-5 text-[#D4A276]" />
          <p className="text-[#E0DCD1] leading-relaxed">
            Modern neuroscience reveals what Scripture has taught for millennia: 
            transformation is possible. Your brain is plastic — it can change, heal, 
            and rewire itself throughout your entire life.
          </p>
          <p className="text-[#A89F91] text-sm">
            Explore how spiritual practices physically reshape your brain.
          </p>
        </CardContent>
      </Card>

      {/* Topics Grid */}
      <section className="space-y-3">
        <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Topics</h3>
        <div className="grid grid-cols-1 gap-3">
          {scienceTopics.map((topic) => {
            const Icon = iconMap[topic.icon] || Brain;
            return (
              <Card
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4A276]/20 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-[#D4A276]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#E0DCD1] font-medium">{topic.title}</p>
                      <p className="text-[#A89F91] text-sm truncate">{topic.subtitle}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#A89F91] shrink-0" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Key Facts */}
      <section className="space-y-3">
        <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Key Facts</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-[#D4A276]/10 border-[#D4A276]/30">
            <CardContent className="p-4 text-center">
              <p className="font-display text-3xl text-[#D4A276]">700</p>
              <p className="text-[#A89F91] text-xs">New neural connections per second</p>
            </CardContent>
          </Card>
          <Card className="bg-[#D4A276]/10 border-[#D4A276]/30">
            <CardContent className="p-4 text-center">
              <p className="font-display text-3xl text-[#D4A276]">40-60</p>
              <p className="text-[#A89F91] text-xs">Days to form new pathways</p>
            </CardContent>
          </Card>
          <Card className="bg-[#D4A276]/10 border-[#D4A276]/30">
            <CardContent className="p-4 text-center">
              <p className="font-display text-3xl text-[#D4A276]">40%</p>
              <p className="text-[#A89F91] text-xs">Of actions are habits</p>
            </CardContent>
          </Card>
          <Card className="bg-[#D4A276]/10 border-[#D4A276]/30">
            <CardContent className="p-4 text-center">
              <p className="font-display text-3xl text-[#D4A276]">50%</p>
              <p className="text-[#A89F91] text-xs">Amygdala reduction with naming</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Topic Dialog */}
      <Dialog open={!!selectedTopic} onOpenChange={() => setSelectedTopic(null)}>
        <DialogContent className="bg-[#2C2A3E] border-[#3D3B52] max-w-lg max-h-[80vh] overflow-y-auto">
          {selectedTopic && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4A276]/20 flex items-center justify-center">
                    {(() => {
                      const Icon = iconMap[selectedTopic.icon] || Brain;
                      return <Icon className="h-5 w-5 text-[#D4A276]" />;
                    })()}
                  </div>
                  <div>
                    <DialogTitle className="font-display text-xl text-[#E0DCD1]">
                      {selectedTopic.title}
                    </DialogTitle>
                    <p className="text-[#A89F91] text-sm">{selectedTopic.subtitle}</p>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-3">
                  <p className="text-[#D4A276] text-sm uppercase tracking-wider">The Science</p>
                  <ul className="space-y-2">
                    {selectedTopic.explanation.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#D4A276]/20 flex items-center justify-center text-[#D4A276] text-xs shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-[#A89F91] text-sm leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[#D4A276] text-sm uppercase tracking-wider">Spiritual Connection</p>
                  <p className="text-[#E0DCD1] text-sm leading-relaxed italic">
                    {selectedTopic.spiritualConnection}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[#D4A276] text-sm uppercase tracking-wider">Practical Application</p>
                  <div className="bg-[#3D3B52]/50 p-4 rounded-lg">
                    <p className="text-[#E0DCD1] text-sm leading-relaxed">
                      {selectedTopic.practicalApplication}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ScienceScreen;
