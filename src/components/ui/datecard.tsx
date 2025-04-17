"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface DateCardProps {
    label: string;
    subLabel: string;
    color: string;
  }

export default function DateCard({ label, subLabel, color }: DateCardProps) {
  return (
    <Card
      className={`w-[200px] h-[120px] rounded-lg shadow-lg ${color} text-white flex items-center justify-center`}
    >
      <CardContent className="p-4 text-center">
        <CardTitle className="text-lg font-bold">{label}</CardTitle>
        <p className="text-sm opacity-80">{subLabel}</p>
      </CardContent>
    </Card>
  );
}

