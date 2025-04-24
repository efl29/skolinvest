
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  duration: string;
  lessons: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  price,
  level,
  duration,
  lessons
}) => {
  const getLevelColor = () => {
    switch (level) {
      case 'débutant': return 'bg-course-beginner';
      case 'intermédiaire': return 'bg-course-intermediate';
      case 'avancé': return 'bg-course-advanced';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-200">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105" 
        />
        <Badge className={`absolute top-4 right-4 ${getLevelColor()}`}>
          {level}
        </Badge>
      </div>
      <CardHeader className="py-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="text-xl font-bold text-brand-primary">{price}€</div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Book size={16} className="mr-1" />
            <span>{lessons} leçons</span>
          </div>
          <div>|</div>
          <div>{duration}</div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button className="w-full">Voir cette formation</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
