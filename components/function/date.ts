export function getFormattedDate(date: any) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return day + "/" + month + "/" + year;
}

export const convertDate = (date: any) => {
  const months = [
    "JANUARI",
    "FEBRUARI",
    "MARET",
    "APRIL",
    "MEI",
    "JUNI",
    "JULI",
    "AGUSTUS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DESEMBER",
  ];
  let current_datetime = new Date(date);
  // let formatted_date =
  //   current_datetime.getDate() +
  //   "-" +
  //   months[current_datetime.getMonth()] +
  //   "-" +
  //   current_datetime.getFullYear();
  let formatted_date =
    current_datetime.getDate() +
    "-" +
    months[current_datetime.getMonth()] +
    "-" +
    current_datetime.getFullYear();
  return formatted_date;
};
