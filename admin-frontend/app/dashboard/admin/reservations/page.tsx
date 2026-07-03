import { getReservations } from "@/lib/api";

export default async function AdminReservationsPage() {
  const reservations = await getReservations();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-medium text-stone-900">Réservations</h1>
      <table className="w-full overflow-hidden rounded-lg border border-stone-200 bg-white text-sm">
        <thead className="bg-stone-50 text-left text-stone-500">
          <tr>
            <th className="px-4 py-3 font-normal">Client</th>
            <th className="px-4 py-3 font-normal">Agent</th>
            <th className="px-4 py-3 font-normal">Date</th>
            <th className="px-4 py-3 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r.id} className="border-t border-stone-100">
              <td className="px-4 py-3">{r.clientName}</td>
              <td className="px-4 py-3">{r.agentName}</td>
              <td className="px-4 py-3 text-stone-500">{r.date}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-stone-100 px-2 py-1 text-xs">{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
