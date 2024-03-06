'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function TanstackQueryWrapper({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
