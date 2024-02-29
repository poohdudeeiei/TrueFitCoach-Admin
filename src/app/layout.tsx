import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/context/AuthProvider/Auth";
import ReduxProvider from "@/context/ReduxProvider/Provider";
import ContextSnackbar from "@/context/Snackbar/snackbarProvider";
import ProgressbarProviders from "@/context/Progressbar/ProgressbarProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ContextSnackbar>
            <ReduxProvider>
              <AuthWrapper>
                <NextTopLoader
                  color="orange"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={true}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                {/* <ProgressbarProviders> */}
                {children}
                {/* </ProgressbarProviders> */}
              </AuthWrapper>
            </ReduxProvider>
          </ContextSnackbar>
        </body>
      </html>
    </>
  );
}
