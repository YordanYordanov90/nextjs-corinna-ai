import React from "react";
import BreadCrums from "./bread-crumb";
import { Card } from "../ui/card";
import { Headphones, Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const InfoBar = () => {
  return (
    <div className="flex w-full justify-between border-b  py-2 mb-8 ">
      <BreadCrums />
      <div className="flex gap-3">
        <div>
          <Card className="rounded-xl flex gap-3 py-3 px-4 text-ghost">
            <Trash />
            <Star />
          </Card>
          </div>
        <Avatar>
          <AvatarFallback className="bg-orange text-white">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
        </div>
      
 
  );
};

export default InfoBar;
