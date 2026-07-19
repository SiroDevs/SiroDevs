export interface Project {
  name: string;
  period: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  /** Whether this project is surfaced in the homepage's featured grid. */
  featured?: boolean;
}
