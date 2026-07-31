export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: "brain" | "code" | "shield";
}

export const education: Education[] = [
  {
    id: "masters",
    degree: "Master's Degree",
    field: "Computer Science & Risk Management",
    institution: "Lebanese University, Faculty of Sciences",
    period: "2015 - 2017",
  },
  {
    id: "bachelors",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "Lebanese University, Faculty of Sciences",
    period: "2012 - 2015",
  },
];

export const certifications: Certification[] = [
  {
    id: "se-factory",
    title: "DevOps, GenAI & Prompt Engineering",
    issuer: "SE Factory",
    year: "2025",
    icon: "brain",
  },
  {
    id: "esiee",
    title: "Full-Stack Web Developer",
    issuer: "ESIEE-IT France",
    year: "2022",
    icon: "code",
  },
  {
    id: "semicolon",
    title: "Ethical Hacking Foundation",
    issuer: "Semicolon Academy",
    year: "2022",
    icon: "shield",
  },
];
