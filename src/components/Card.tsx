"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
}

const Cards: React.FC<Props> = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </CardHeader>
      <CardContent>
        <p>Card Content Here</p>
      </CardContent>
    </Card>
  );
};

export default Cards;
