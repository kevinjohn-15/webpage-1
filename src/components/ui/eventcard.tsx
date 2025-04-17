// components/EventCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  price: string;
  interested: number;
  imageUrl?: string;
  description?: string;
}

export default function EventCard({
  title,
  date,
  price,
  interested,
  imageUrl,
  description,
}: EventCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-semibold">{price}</span>
          <span className="text-yellow-500">★ {interested} Interested</span>
        </div>
      </CardContent>
    </Card>
  );
}