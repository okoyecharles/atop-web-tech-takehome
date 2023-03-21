const events = [
  {
    id: 1,
    title:
      "Versastyle: Toronto Toronto, Ontario Meridian Arts Centre 5040 Yonge St., North York, ON M2N 6R8",
    subtitle: "Versa: Toronto",
    submittedEntries: 72,
    submittedMusic: 15,
    date: "Mar 23 to Mar 28, 2023",
    locked: false,
  },
  {
    id: 2,
    title:
      "Versastyle: Regina Regina, Saskatchewan Conexus Arts Centre 200 Lakeshore Dr., Regina, SK S4S 7A1",
    subtitle: "Versastyle: Regina",
    submittedEntries: 26,
    submittedMusic: 4,
    date: "Mar 30 to Apr 2, 2023",
    locked: true,
  },
  {
    id: 3,
    title:
      "Versastyle: Fredericton Fredericton, New Brunswick Fredericton Convention Centre 670 Queen St., Fredericton, NB E3B 1C2",
    subtitle: "Versastyle: Fredericton",
    submittedEntries: 30,
    submittedMusic: 15,
    date: "Apr 13 to Apr 17, 2023",
    locked: false,
  },
  {
    id: 4,
    title:
      "Versastyle: Kewlona Kelowna, British Columbia Rotary Centre for the Arts 421 Cawston Ave., Kelowna, BC V1Y 6Z1",
    subtitle: "Versastyle: Kewlona",
    submittedEntries: 20,
    submittedMusic: 12,
    date: "Apr 20 to Apr 24, 2023",
    locked: true,
  },
];
const getEventById = (id) => events.find((event) => event.id === id);

export { getEventById };
export default events;