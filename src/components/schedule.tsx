import { aqua, prices, scheduleContent } from "@/lib/content";

const times = scheduleContent.times.join(", ");

export function ScheduleTables() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="font-display text-3xl text-navy">{scheduleContent.boxingTitle}</h3>
        <div className="mt-4 space-y-3 md:hidden">
          {scheduleContent.days.map((day) => (
            <article key={day} className="border border-sky/40 bg-panel p-4">
              <h4 className="text-2xl font-bold text-navy">{day}</h4>
              <p className="mt-1 text-lg">{times}</p>
              <p className="mt-1 text-lg font-bold">{scheduleContent.length}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 hidden overflow-x-auto border border-sky/40 bg-panel md:block">
          <table className="w-full border-collapse text-left text-lg">
            <caption className="bg-navy px-4 py-3 text-left text-xl font-bold text-white">
              {scheduleContent.caption}
            </caption>
            <thead>
              <tr className="bg-mist text-navy">
                <th scope="col" className="px-4 py-3 font-bold">
                  {scheduleContent.dayHeading}
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  {scheduleContent.timesHeading}
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  {scheduleContent.lengthHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleContent.days.map((day) => (
                <tr key={day} className="border-t border-white/15">
                  <th scope="row" className="px-4 py-4 font-bold text-navy">
                    {day}
                  </th>
                  <td className="px-4 py-4">{times}</td>
                  <td className="px-4 py-4">{scheduleContent.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-display text-3xl text-navy">{scheduleContent.aquaTitle}</h3>
        <div className="mt-4 space-y-3 md:hidden">
          {scheduleContent.aquaDays.map((day) => (
            <article key={day} className="border border-sky/40 bg-panel p-4">
              <h4 className="text-2xl font-bold text-navy">{day}</h4>
              <p className="mt-1 text-lg">{scheduleContent.aquaTime}</p>
              <p className="mt-1 text-lg">{scheduleContent.aquaNote}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 hidden border border-sky/40 bg-panel md:block">
          <table className="w-full border-collapse text-left text-lg">
            <caption className="bg-navy px-4 py-3 text-left text-xl font-bold text-white">
              {scheduleContent.aquaCaption}
            </caption>
            <thead>
              <tr className="bg-mist text-navy">
                <th scope="col" className="px-4 py-3 font-bold">
                  {scheduleContent.dayHeading}
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  {scheduleContent.aquaTimeHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleContent.aquaDays.map((day) => (
                <tr key={day} className="border-t border-white/15">
                  <th scope="row" className="px-4 py-4 font-bold text-navy">
                    {day}
                  </th>
                  <td className="px-4 py-4">{scheduleContent.aquaTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-lg leading-relaxed">{aqua.season}</p>
        <p className="mt-2 text-lg font-bold text-navy">{prices.aquaResume}</p>
      </div>
    </div>
  );
}
