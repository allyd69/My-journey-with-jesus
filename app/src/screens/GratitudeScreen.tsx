import { useState } from 'react';
import { Sparkles, RefreshCw, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { gratitudePrompts, gratitudeCategories, getPromptsByCategory } from '@/data/gratitude';

function GratitudeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [randomPrompt, setRandomPrompt] = useState(() => 
    gratitudePrompts[Math.floor(Math.random() * gratitudePrompts.length)]
  );

  const getNewRandomPrompt = () => {
    const newPrompt = gratitudePrompts[Math.floor(Math.random() * gratitudePrompts.length)];
    setRandomPrompt(newPrompt);
  };

  const filteredPrompts = selectedCategory
    ? getPromptsByCategory(selectedCategory)
    : gratitudePrompts;

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <Sparkles className="h-8 w-8 text-[#D4A276] mx-auto" />
        <h2 className="font-display text-3xl text-[#E0DCD1]">Gratitude</h2>
        <p className="text-[#A89F91] text-sm">100 prompts to shift your perspective</p>
      </div>

      {/* Daily Random Prompt */}
      <Card className="bg-gradient-to-br from-[#D4A276]/20 to-[#3D3B52] border-[#D4A276]/30">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#D4A276]" />
              <span className="text-[#D4A276] text-sm uppercase tracking-wider">Daily Prompt</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={getNewRandomPrompt}
              className="text-[#A89F91] hover:text-[#D4A276]"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              New
            </Button>
          </div>
          <p className="text-[#E0DCD1] text-lg italic leading-relaxed">
            "{randomPrompt.prompt}"
          </p>
          <p className="text-[#A89F91] text-xs">{randomPrompt.category}</p>
        </CardContent>
      </Card>

      {/* Categories */}
      {!selectedCategory && (
        <section className="space-y-3">
          <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Browse by Category</h3>
          <div className="grid grid-cols-2 gap-3">
            {gratitudeCategories.map((category) => {
              const count = getPromptsByCategory(category).length;
              return (
                <Card
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover"
                >
                  <CardContent className="p-4">
                    <Heart className="h-4 w-4 text-[#D4A276] mb-2" />
                    <p className="text-[#E0DCD1] font-medium text-sm line-clamp-2">{category}</p>
                    <p className="text-[#A89F91] text-xs">{count} prompts</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Prompt List */}
      {selectedCategory && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">{selectedCategory}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="text-[#D4A276]"
            >
              View All
            </Button>
          </div>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {filteredPrompts.map((prompt, index) => (
                <Card
                  key={prompt.id}
                  className="bg-[#3D3B52]/50 border-[#3D3B52]"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#D4A276]/20 flex items-center justify-center text-[#D4A276] text-xs shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-[#E0DCD1] text-sm leading-relaxed">{prompt.prompt}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </section>
      )}

      {/* Science of Gratitude */}
      <Card className="bg-[#3D3B52]/30 border-[#3D3B52]">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#D4A276]" />
            <span className="text-[#D4A276] text-sm uppercase tracking-wider">Why Gratitude Works</span>
          </div>
          <ul className="space-y-2 text-sm text-[#A89F91]">
            <li className="flex items-start gap-2">
              <span className="text-[#D4A276]">•</span>
              Increases dopamine and serotonin
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4A276]">•</span>
              Strengthens neural pathways for optimism
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4A276]">•</span>
              Trains your brain to scan for good
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4A276]">•</span>
              Rewires the default mode network
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Tip */}
      <div className="text-center py-4">
        <p className="text-[#A89F91] text-sm italic">
          Write down 3 things you're grateful for each morning.
          <br />
          Watch your brain begin to rewire within weeks.
        </p>
      </div>
    </div>
  );
}

export default GratitudeScreen;
