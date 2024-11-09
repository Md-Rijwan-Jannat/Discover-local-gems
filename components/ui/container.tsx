import React, { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-[1170px] mx-auto px-2 lg:p-0">{children}</div>;
}
