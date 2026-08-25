import type { ReactNode } from "react";
import Header from "../Header/Card_Header";
import Footer from "../Footer/Card_Footer";
import "./CompanyPage.css";

type CompanyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function CompanyPage({
  eyebrow,
  title,
  description,
  children,
}: CompanyPageProps) {
  return (
    <div className="company-page-shell">
      <Header />
      <main className="company-page-content">
        <section className="company-page-hero">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          {children ?? (
            <div className="company-page-placeholder">
              <h2>Content coming soon</h2>
              <span>{description}</span>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
