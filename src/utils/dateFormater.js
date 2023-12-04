function formatDate(inputDate) {
  const date = new Date(inputDate);

  // Define months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month, day, and year
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the final string
  const formattedDate = `Posted on ${month} ${day}, ${year}`;

  return formattedDate;
}

export default formatDate;
