"use client"

import { QueryClientProvider, QueryClient } from 'react-query';

const UniversalQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient(
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    retry: false
                },
            },
        }
    );
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )

}

export default UniversalQueryClientProvider;