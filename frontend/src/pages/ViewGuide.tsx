// import React from 'react'

import { Button } from "@/components/ui/button";
import CommentSection from "@/components/ViewGuide/CommentSection";
import GuideContent from "@/components/ViewGuide/GuideContent";
import { BookOpenCheck, ThumbsUp, ThumbsDown, Bookmark } from "lucide-react";
import Similar from "@/components/ViewThread/Slider/Similar";

const ViewGuide = () => {
  return (
    <div className="flex">
      <div className="w-full lg:w-2/3 flex flex-col gap-5 border-r-2 border-slate-300">
        <GuideContent />
        <div className="flex gap-8 px-3">
          <div className="flex gap-2 items-center">
            <BookOpenCheck size={"20px"} />{" "}
            <span className="text-sm font-sofia">45 Read</span>
          </div>
          <div className="flex gap-2 items-center">
            <ThumbsUp size={"20px"} />{" "}
            <span className="text-sm font-sofia">24 Likes</span>
          </div>
          <div className="flex gap-2 items-center">
            <ThumbsDown size={"20px"} />{" "}
            <span className="text-sm font-sofia">8 Dislikes</span>
          </div>
          <div className="flex gap-2 items-center">
            <Bookmark size={"20px"} />{" "}
            <span className="text-sm font-sofia">18 Saves</span>
          </div>
        </div>
        <div className="w-full flex gap-4 justify-center items-center">
          <p>Enjoyed this post? follow The RizzKing</p>
          <Button>Follow</Button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex-start px-3">
            <h2 className="font-semibold font-sofia">More like this</h2>
          </div>
          <div className="w-full px-3 mb-10 md:mb-0">
            <Similar />
          </div>
        </div>
      </div>
      <div className="w-1/3 hidden lg:block">
        <CommentSection />
      </div>
    </div>
  );
};

export default ViewGuide;
