// LeaderboardContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Score {
  username: string;
  score: number;
  date: Date;
  language: string;
}

interface LeaderboardContextType {
  leaderboard: Score[];
  addScoreToLeaderboard: (username: string, score: number, language: string) => void;
}

const LeaderboardContext = createContext<LeaderboardContextType | undefined>(undefined);

export const useLeaderboard = () => {
  const context = useContext(LeaderboardContext);
  if (!context) {
    throw new Error('useLeaderboard must be used within a LeaderboardProvider');
  }
  return context;
};

interface LeaderboardProviderProps {
  children: ReactNode;
}

export const LeaderboardProvider: React.FC<LeaderboardProviderProps> = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);

  const addScoreToLeaderboard = (username: string, score: number, language: string) => {
    setLeaderboard((prevLeaderboard) => [
      ...prevLeaderboard,
      { username, score, date: new Date(), language},
    ]);
  };

  return (
    <LeaderboardContext.Provider value={{ leaderboard, addScoreToLeaderboard }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
