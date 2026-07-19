export interface Experience {
  company: string;
  title: string;
  period: string;
  duration: string;
  /** Bullet points describing impact/responsibilities, rendered as a <ul>. */
  bullets: string[];
  tags: string[];
}

/** A short, earlier role — rendered folded/summarized rather than as a full card. */
export interface EarlierExperience {
  company: string;
  title: string;
  period: string;
  /** Bullet points describing impact/responsibilities, rendered as a compact <ul>. */
  bullets: string[];
  tags: string[];
}
