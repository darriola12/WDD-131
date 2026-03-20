const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#windChill");
const temperature = 8;
const windSpeed = 12;

function calculateWindChill(tempC, speedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * speedKmh ** 0.16 + 0.3965 * tempC * speedKmh ** 0.16;
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

if (windChill) {
  const isMetricWindChillValid = temperature <= 10 && windSpeed > 4.8;
  windChill.textContent = isMetricWindChillValid ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C` : "N/A";
}
