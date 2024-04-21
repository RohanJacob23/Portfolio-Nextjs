import PageTransistion from "@/components/animation/PageTransistion";

export default function template({ children }: { children: React.ReactNode }) {
  return <PageTransistion>{children}</PageTransistion>;
}
