import "./globals.css";

import { HOME_PAGE_DESCRIPTION, HOME_PAGE_TITLE } from "./constants";

import MUIThemeWrapper from "./components/MUIThemeWrapper";
import Nav from "./components/Nav";

export const metadata = {
  title: HOME_PAGE_TITLE,
  description: HOME_PAGE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MUIThemeWrapper>
          <Nav />
          {children}
        </MUIThemeWrapper>
      </body>
    </html>
  );
}
