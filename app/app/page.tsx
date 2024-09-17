import { ChartStreamingCompanies } from "./_components/chart-streaming-companies";
import { ChartTicketMedio } from "./_components/chart-ticket-medio";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      <ChartStreamingCompanies/>
      <ChartTicketMedio/>
    </div>
  );
}
