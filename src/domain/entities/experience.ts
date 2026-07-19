export interface Experience {
  company: string;
  title: string;
  period: string;
  duration: string;
  body: string;
  tags: string[];
}

/** A short, earlier role — rendered folded/summarized rather than as a full card. */
export interface EarlierExperience {
  company: string;
  title: string;
  period: string;
  point: string;
}
