export interface FunnelStepProps {
  name: string;
  children: React.ReactNode;
}

export default function FunnelStep({ children }: FunnelStepProps) {
  return <>{children}</>;
}
