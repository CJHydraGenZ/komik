import React from "react";
import { Card } from "flowbite-react";
export const CardKomik = ({ img, title }) => {
  return (
    <div className="max-w-sm">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={img}
      >
        <p className="font-normal text-gray-700 dark:text-gray-400">{title}</p>
      </Card>
    </div>
  );
};
