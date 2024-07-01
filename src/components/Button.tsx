"use client";
import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <Button variant="outline" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
