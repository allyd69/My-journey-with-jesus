import { useState, useEffect } from 'react';
import { Home, BookOpen, Heart, Brain, Menu, ChevronLeft, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLocalStorage, defaultProgress, type Progress } from '@/hooks/useLocalStorage';
import HomeScreen from '@/screens/HomeScreen';
import DayScreen from '@/screens/DayScreen';
import PrayersScreen from '@/screens/PrayersScreen';
import GratitudeScreen from '@/screens/GratitudeScreen';
import ScienceScreen from '@/screens/ScienceScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import './App.css';

type Screen = 'home' | 'day' | 'prayers' | 'gratitude' | 'science' | 'settings';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedDayId, setSelectedDayId] = useState<number>(1);
  const [progress, setProgress] = useLocalStorage<Progress>('journey-progress', defaultProgress);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Update last accessed time
    setProgress(prev => ({
      ...prev,
      lastAccessed: new Date().toISOString()
    }));
  }, []);

  const navigateToDay = (dayId: number) => {
    setSelectedDayId(dayId);
    setCurrentScreen('day');
    setIsMenuOpen(false);
  };

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
    setIsMenuOpen(false);
  };

  const markDayComplete = (dayId: number) => {
    setProgress(prev => {
      if (prev.completedDays.includes(dayId)) {
        return prev;
      }
      return {
        ...prev,
        completedDays: [...prev.completedDays, dayId],
        currentDay: Math.max(prev.currentDay, dayId + 1)
      };
    });
  };

  const saveJournalEntry = (dayId: number, entry: string) => {
    setProgress(prev => ({
      ...prev,
      journalEntries: {
        ...prev.journalEntries,
        [dayId]: entry
      }
    }));
  };

  const toggleFavoritePrayer = (prayerId: number) => {
    setProgress(prev => {
      const isFavorite = prev.favoritePrayers.includes(prayerId);
      return {
        ...prev,
        favoritePrayers: isFavorite
          ? prev.favoritePrayers.filter(id => id !== prayerId)
          : [...prev.favoritePrayers, prayerId]
      };
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            progress={progress}
            onNavigateToDay={navigateToDay}
            onNavigateToPrayers={() => navigateToScreen('prayers')}
            onNavigateToGratitude={() => navigateToScreen('gratitude')}
            onNavigateToScience={() => navigateToScreen('science')}
          />
        );
      case 'day':
        return (
          <DayScreen
            dayId={selectedDayId}
            progress={progress}
            onMarkComplete={markDayComplete}
            onSaveJournal={saveJournalEntry}
            onNavigateBack={() => navigateToScreen('home')}
            onNavigateToDay={navigateToDay}
          />
        );
      case 'prayers':
        return (
          <PrayersScreen
            favoritePrayers={progress.favoritePrayers}
            onToggleFavorite={toggleFavoritePrayer}
          />
        );
      case 'gratitude':
        return (
          <GratitudeScreen />
        );
      case 'science':
        return (
          <ScienceScreen />
        );
      case 'settings':
        return (
          <SettingsScreen
            progress={progress}
            setProgress={setProgress}
            onNavigateBack={() => navigateToScreen('home')}
          />
        );
      default:
        return <HomeScreen progress={progress} onNavigateToDay={navigateToDay} onNavigateToPrayers={() => navigateToScreen('prayers')} onNavigateToGratitude={() => navigateToScreen('gratitude')} onNavigateToScience={() => navigateToScreen('science')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#2C2A3E] text-[#E0DCD1]">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-[#3D3B52]">
        <div className="flex items-center justify-between px-4 py-3">
          {currentScreen !== 'home' ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateToScreen('home')}
              className="text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          ) : (
            <div className="w-10" />
          )}
          
          <h1 
            className="font-display text-xl font-semibold text-gradient cursor-pointer"
            onClick={() => navigateToScreen('home')}
          >
            My Journey
          </h1>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#2C2A3E] border-l border-[#3D3B52]">
              <nav className="flex flex-col gap-2 mt-8">
                <Button
                  variant="ghost"
                  onClick={() => navigateToScreen('home')}
                  className={`justify-start gap-3 text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50 ${
                    currentScreen === 'home' ? 'bg-[#3D3B52]/50 text-[#D4A276]' : ''
                  }`}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigateToDay(progress.currentDay)}
                  className="justify-start gap-3 text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50"
                >
                  <BookOpen className="h-5 w-5" />
                  Continue Journey
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigateToScreen('prayers')}
                  className={`justify-start gap-3 text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50 ${
                    currentScreen === 'prayers' ? 'bg-[#3D3B52]/50 text-[#D4A276]' : ''
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  Prayer Library
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigateToScreen('gratitude')}
                  className={`justify-start gap-3 text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50 ${
                    currentScreen === 'gratitude' ? 'bg-[#3D3B52]/50 text-[#D4A276]' : ''
                  }`}
                >
                  <BookOpen className="h-5 w-5" />
                  Gratitude
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigateToScreen('science')}
                  className={`justify-start gap-3 text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50 ${
                    currentScreen === 'science' ? 'bg-[#3D3B52]/50 text-[#D4A276]' : ''
                  }`}
                >
                  <Brain className="h-5 w-5" />
                  Science
                </Button>
                <div className="border-t border-[#3D3B52] my-2" />
                <Button
                  variant="ghost"
                  onClick={() => navigateToScreen('settings')}
                  className={`justify-start gap-3 text-[#E0DCD1] hover:text-[#D4A276] hover:bg-[#3D3B52]/50 ${
                    currentScreen === 'settings' ? 'bg-[#3D3B52]/50 text-[#D4A276]' : ''
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass border-t border-[#3D3B52] z-50">
        <div className="flex items-center justify-around py-2">
          <button
            onClick={() => navigateToScreen('home')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentScreen === 'home' ? 'text-[#D4A276]' : 'text-[#A89F91] hover:text-[#E0DCD1]'
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => navigateToScreen('prayers')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentScreen === 'prayers' ? 'text-[#D4A276]' : 'text-[#A89F91] hover:text-[#E0DCD1]'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs">Prayers</span>
          </button>
          <button
            onClick={() => navigateToDay(progress.currentDay)}
            className="flex flex-col items-center gap-1 p-3 rounded-full bg-[#D4A276] text-[#2C2A3E] -mt-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <BookOpen className="h-6 w-6" />
          </button>
          <button
            onClick={() => navigateToScreen('gratitude')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentScreen === 'gratitude' ? 'text-[#D4A276]' : 'text-[#A89F91] hover:text-[#E0DCD1]'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">Gratitude</span>
          </button>
          <button
            onClick={() => navigateToScreen('science')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentScreen === 'science' ? 'text-[#D4A276]' : 'text-[#A89F91] hover:text-[#E0DCD1]'
            }`}
          >
            <Brain className="h-5 w-5" />
            <span className="text-xs">Science</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
