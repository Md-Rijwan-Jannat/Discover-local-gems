import React from 'react';

export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="w-9/12 md:w-8/12 mb-5 mx-auto text-center">
      <h2 className="text-2xl md:text-[44px] mb-6 text-center">{title}</h2>
      <p className="md:text-[20px] roboto-regular text-center text-sm">
        {subTitle}
      </p>
    </div>
  );
}
