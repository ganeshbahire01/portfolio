export default function calculateExperience(startDate, endDate) {
  // Parse start and end dates
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If end date not provided, use current date

  // Validate input dates
  if (isNaN(start) || isNaN(end)) {
    return "Invalid date format";
  }

  // Calculate the difference in years and months
  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  // Adjust years and months if end date is before the start date
  let years = yearDiff;
  let months = monthDiff;
  if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < start.getDate())) {
    years--;
    months += 12;
  }

  // If years and months are both 0, then return the difference in days instead
  if (years === 0 && months === 0) {
    const dayDiff = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    return `${dayDiff} day(s)`;
  }

  // If years exist, only return years
  if (years > 0) {
    return `${years} year ${months} months`;
  }

  // Return months
  return `${months} months`;
}
