
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Logo } from "./components/logo/Logo";
import { RedditTopics } from "./components/redditTopics/RedditTopics";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>

            <header className={styles.header}>
              <Logo />
              <h1>Hello Reddit Reader!</h1>
              <RedditTopics />
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <p>@2025 Reddit Reader by Reinis Janovskis</p>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
