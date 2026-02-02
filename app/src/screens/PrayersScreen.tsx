import { useState } from 'react';
import { Heart, Search, ChevronRight, Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { prayers, prayerCategories, getPrayersByCategory } from '@/data/prayers';

interface PrayersScreenProps {
  favoritePrayers: number[];
  onToggleFavorite: (prayerId: number) => void;
}

function PrayersScreen({ favoritePrayers, onToggleFavorite }: PrayersScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrayer, setSelectedPrayer] = useState<typeof prayers[0] | null>(null);

  const filteredPrayers = selectedCategory
    ? getPrayersByCategory(selectedCategory)
    : searchQuery
    ? prayers.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.body.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : prayers;

  const isFavorite = (prayerId: number) => favoritePrayers.includes(prayerId);

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <Heart className="h-8 w-8 text-[#D4A276] mx-auto" />
        <h2 className="font-display text-3xl text-[#E0DCD1]">Prayer Library</h2>
        <p className="text-[#A89F91] text-sm">100 prayers for every moment</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A89F91]" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search prayers..."
          className="pl-10 bg-[#3D3B52]/50 border-[#3D3B52] text-[#E0DCD1] placeholder:text-[#A89F91]/50"
        />
      </div>

      {/* Categories */}
      {!selectedCategory && !searchQuery && (
        <section className="space-y-3">
          <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {prayerCategories.map((category) => {
              const count = getPrayersByCategory(category).length;
              return (
                <Card
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover"
                >
                  <CardContent className="p-4">
                    <p className="text-[#E0DCD1] font-medium text-sm">{category}</p>
                    <p className="text-[#A89F91] text-xs">{count} prayers</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Favorites */}
      {!selectedCategory && !searchQuery && favoritePrayers.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Your Favorites</h3>
          <div className="space-y-2">
            {favoritePrayers.slice(0, 5).map((prayerId) => {
              const prayer = prayers.find(p => p.id === prayerId);
              if (!prayer) return null;
              return (
                <Card
                  key={prayer.id}
                  onClick={() => setSelectedPrayer(prayer)}
                  className="bg-[#D4A276]/10 border-[#D4A276]/30 cursor-pointer card-hover"
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[#E0DCD1] font-medium text-sm">{prayer.title}</p>
                      <p className="text-[#A89F91] text-xs">{prayer.category}</p>
                    </div>
                    <BookmarkCheck className="h-4 w-4 text-[#D4A276]" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Prayer List */}
      {(selectedCategory || searchQuery) && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">
              {selectedCategory || 'Search Results'}
            </h3>
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="text-[#D4A276]"
              >
                View All
              </Button>
            )}
          </div>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {filteredPrayers.map((prayer) => (
                <Card
                  key={prayer.id}
                  onClick={() => setSelectedPrayer(prayer)}
                  className="bg-[#3D3B52]/50 border-[#3D3B52] cursor-pointer card-hover"
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[#E0DCD1] font-medium text-sm">{prayer.title}</p>
                      <p className="text-[#A89F91] text-xs">{prayer.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {isFavorite(prayer.id) && (
                        <BookmarkCheck className="h-4 w-4 text-[#D4A276]" />
                      )}
                      <ChevronRight className="h-4 w-4 text-[#A89F91]" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </section>
      )}

      {/* Prayer Dialog */}
      <Dialog open={!!selectedPrayer} onOpenChange={() => setSelectedPrayer(null)}>
        <DialogContent className="bg-[#2C2A3E] border-[#3D3B52] max-w-lg max-h-[80vh] overflow-y-auto">
          {selectedPrayer && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <DialogTitle className="font-display text-2xl text-[#E0DCD1]">
                      {selectedPrayer.title}
                    </DialogTitle>
                    <p className="text-[#A89F91] text-sm mt-1">{selectedPrayer.category}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onToggleFavorite(selectedPrayer.id)}
                    className="text-[#D4A276] hover:text-[#E0DCD1]"
                  >
                    {isFavorite(selectedPrayer.id) ? (
                      <BookmarkCheck className="h-5 w-5" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <p className="text-[#D4A276] text-sm uppercase tracking-wider">Opening</p>
                  <p className="text-[#A89F91] italic">{selectedPrayer.opening}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#D4A276] text-sm uppercase tracking-wider">Prayer</p>
                  <p className="text-[#E0DCD1] leading-relaxed">{selectedPrayer.body}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#D4A276] text-sm uppercase tracking-wider">Closing</p>
                  <p className="text-[#A89F91] italic">{selectedPrayer.closing}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PrayersScreen;
