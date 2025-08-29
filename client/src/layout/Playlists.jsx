import React from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Flame, Target } from "lucide-react";

const playlists = [
  {
    id: 1,
    name: "Top 100 LeetCode",
    description: "Most commonly asked interview problems",
    icon: <Flame className="w-5 h-5 text-red-500" />,
  },
  {
    id: 2,
    name: "Dynamic Programming",
    description: "Practice core DP concepts",
    icon: <Target className="w-5 h-5 text-purple-500" />,
  },
  {
    id: 3,
    name: "Arrays & Strings",
    description: "Fundamental data structure problems",
    icon: <BookOpen className="w-5 h-5 text-blue-500" />,
  },
];

const Playlist = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Playlists</h2>
      <div className="grid gap-4">
        {playlists.map((playlist) => (
          <Card
            key={playlist.id}
            className="p-4 flex items-start gap-4 rounded-xl hover:bg-accent cursor-pointer transition-colors"
          >
            <div>{playlist.icon}</div>
            <div>
              <h3 className="text-md font-semibold">{playlist.name}</h3>
              <p className="text-sm text-muted-foreground">{playlist.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
