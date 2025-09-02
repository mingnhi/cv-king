"use client";
import { BreadcrumbProvider } from "@/context/BreadcumbContext";
import { ThemeProvider } from "@/context/ThemeContext";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AppProvider } from "@/components/AppContext";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 6 * 1000,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BreadcrumbProvider>
        <QueryProvider>
          <AppProvider>
          <>
            {children} <Toaster richColors />
            </>
          </AppProvider>
        </QueryProvider>
      </BreadcrumbProvider>
    </ThemeProvider>
  );
}
