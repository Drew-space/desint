import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from "@remixicon/react";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex item-center gap-4">
      {[RiFacebookBoxFill, RiPinterestFill, RiInstagramFill, RiTwitterFill].map(
        (Icon, index) => (
          <a
            href=""
            key={index}
            className="hover:-translate-y-0.5 transition-transform"
          >
            <Icon />
          </a>
        ),
      )}
    </div>
  );
};

export default SocialIcons;
