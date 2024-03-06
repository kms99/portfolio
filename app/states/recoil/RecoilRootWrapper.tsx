'use client';

import React, { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

export default function RecoilRootWrapper({ children }: PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
