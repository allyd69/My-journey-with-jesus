import { useState } from 'react';
import { ChevronLeft, RotateCcw, Trash2, Info, Heart, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import type { Progress as ProgressType } from '@/hooks/useLocalStorage';

interface SettingsScreenProps {
  progress: ProgressType;
  setProgress: (value: ProgressType | ((val: ProgressType) => ProgressType)) => void;
  onNavigateBack: () => void;
}

function SettingsScreen({ progress, setProgress, onNavigateBack }: SettingsScreenProps) {
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleReset = () => {
    setProgress({
      completedDays: [],
      currentDay: 1,
      lastAccessed: new Date().toISOString(),
      journalEntries: {},
      favoritePrayers: []
    });
    setShowResetDialog(false);
  };

  const completedCount = progress.completedDays.length;
  const journalCount = Object.keys(progress.journalEntries).length;
  const favoriteCount = progress.favoritePrayers.length;

  return (
    <div className="px-4 py-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onNavigateBack}
          className="text-[#E0DCD1] hover:text-[#D4A276]"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h2 className="font-display text-2xl text-[#E0DCD1]">Settings</h2>
      </div>

      {/* Stats */}
      <section className="space-y-3">
        <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Your Journey Stats</h3>
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-5 w-5 text-[#D4A276] mx-auto mb-2" />
              <p className="font-display text-2xl text-[#E0DCD1]">{completedCount}</p>
              <p className="text-[#A89F91] text-xs">Days Completed</p>
            </CardContent>
          </Card>
          <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
            <CardContent className="p-4 text-center">
              <Sparkles className="h-5 w-5 text-[#D4A276] mx-auto mb-2" />
              <p className="font-display text-2xl text-[#E0DCD1]">{journalCount}</p>
              <p className="text-[#A89F91] text-xs">Journal Entries</p>
            </CardContent>
          </Card>
          <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
            <CardContent className="p-4 text-center">
              <Heart className="h-5 w-5 text-[#D4A276] mx-auto mb-2" />
              <p className="font-display text-2xl text-[#E0DCD1]">{favoriteCount}</p>
              <p className="text-[#A89F91] text-xs">Saved Prayers</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preferences */}
      <section className="space-y-3">
        <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Preferences</h3>
        <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#E0DCD1] font-medium">Daily Reminders</p>
                <p className="text-[#A89F91] text-sm">Get notified for your daily journey</p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-[#D4A276]"
              />
            </div>
            <div className="border-t border-[#3D3B52] pt-4 flex items-center justify-between">
              <div>
                <p className="text-[#E0DCD1] font-medium">Dark Mode</p>
                <p className="text-[#A89F91] text-sm">Easier on the eyes</p>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-[#D4A276]"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Data Management */}
      <section className="space-y-3">
        <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">Data</h3>
        <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
          <CardContent className="p-4">
            <Button
              variant="ghost"
              onClick={() => setShowResetDialog(true)}
              className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-900/20"
            >
              <RotateCcw className="h-5 w-5" />
              Reset Journey
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* About */}
      <section className="space-y-3">
        <h3 className="text-[#A89F91] text-sm uppercase tracking-wider">About</h3>
        <Card className="bg-[#3D3B52]/50 border-[#3D3B52]">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-[#D4A276]" />
              <div>
                <p className="text-[#E0DCD1] font-medium">40-Day Journey with Jesus</p>
                <p className="text-[#A89F91] text-sm">Version 1.0</p>
              </div>
            </div>
            <p className="text-[#A89F91] text-sm leading-relaxed">
              A cinematic spiritual formation experience that integrates neuroscience, 
              Scripture, and daily practices to transform your mind and renew your spirit.
            </p>
            <div className="border-t border-[#3D3B52] pt-4">
              <p className="text-[#E0DCD1] text-sm italic text-center">
                "He who began a good work in you will carry it on to completion."
              </p>
              <p className="text-[#A89F91] text-xs text-center mt-1">— Philippians 1:6</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Reset Dialog */}
      <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <DialogContent className="bg-[#2C2A3E] border-[#3D3B52]">
          <DialogHeader>
            <DialogTitle className="text-[#E0DCD1] flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-red-400" />
              Reset Your Journey?
            </DialogTitle>
            <DialogDescription className="text-[#A89F91]">
              This will erase all your progress, journal entries, and saved prayers. 
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-3">
            <Button
              variant="outline"
              onClick={() => setShowResetDialog(false)}
              className="border-[#3D3B52] text-[#E0DCD1] hover:bg-[#3D3B52]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Reset Everything
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SettingsScreen;
