import React from 'react';

export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="w-9/12 md:w-7/12 mb-5 mx-auto text-center">
      <h2 className="text-2xl md:text-[44px] mb-6 text-center red-rose-bold">
        {title}
      </h2>
      <p className="text-[#111827] my-2 roboto-regular text-sm md:text-[18px]">
        {subTitle}
      </p>
    </div>
  );
}
