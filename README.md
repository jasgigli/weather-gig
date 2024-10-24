# 🌤️ Modern Weather App

A sleek and modern weather application that allows users to search for the current weather conditions of any city. The app displays real-time weather data such as temperature, cloud coverage, humidity, and pressure, with beautiful UI elements, icons, and a country flag based on the location.

## ✨ Features

- **Real-time Weather**: Fetches real-time weather data for any city worldwide.
- **Clean UI**: Modern, responsive design with a minimalist layout and smooth interactions.
- **Weather Details**: Displays temperature, cloud coverage, humidity, and pressure.
- **Country Flag**: Includes the country's flag next to the city's name for easy identification.
- **Interactive Search**: Type in a city name and instantly get the weather details.
- **Mobile-Responsive**: Fully responsive design that works beautifully on both desktop and mobile devices.

## 🖼️ Screenshots

### Desktop View

![Desktop Screenshot](https://your-screenshot-link)

### Mobile View

![Mobile Screenshot](https://your-screenshot-link)

## 🛠️ Technologies Used

- **HTML5**: Markup for structuring the app.
- **CSS3**: Styling for a modern, attractive UI.
- **JavaScript**: Fetches weather data using an external API and dynamically updates the UI.
- **OpenWeather API**: Provides real-time weather data.
- **Flags API**: Displays country flags.

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/) (for package management and running the app)
- [Git](https://git-scm.com/) (to clone the repository)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jasgigli/weather-gig.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd weather-app
   ```

3. **Install the required dependencies**:

   ```bash
   npm install
   ```

4. **Run the app**:
   You can either open the `index.html` file directly in your browser or use a simple live server like `Live Server` (VS Code extension).

### API Configuration

This app uses the **OpenWeather API**. You need to get an API key by registering at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

1. Create a `.env` file in the project root and add your API key:

   ```bash
   OPENWEATHER_API_KEY=your_api_key_here
   ```

2. Ensure that your API key is loaded in your JavaScript file when making API calls.

## 📁 Project Structure

```
weather-app/
│
├── src/
│   ├── scripts/
│   │   └── scripts.js         # JavaScript logic for fetching weather data and updating the UI
│   ├── styles/
│   │   └── styles.css         # Modern and responsive CSS styling for the app
│
├── index.html                 # Main HTML file
├── README.md                  # Project documentation             # Project metadata and dependencies
```

## 🌐 Usage

1. Open the app.
2. Enter the name of the city in the search bar.
3. Click the search button or press Enter to fetch the latest weather data.
4. The weather information (temperature, humidity, cloudiness, pressure) will be displayed along with the country flag.

## 🎨 UI/UX Highlights

- **Minimalist Design**: Focuses on clean aesthetics and functionality.
- **Smooth Transitions**: Interactive elements like buttons and input fields have smooth hover effects.
- **Responsive Layout**: Adapts perfectly to all screen sizes, from mobile devices to desktops.
- **Visual Weather Data**: Includes weather icons and colored elements to enhance user interaction.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Future Enhancements

- Add support for weather forecasts (next 5 days).
- Add user location detection to display weather based on the user's current location.
- Add light/dark mode toggle for better user experience.
- Support for multiple languages based on user preferences.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place! If you have suggestions or improvements, feel free to submit a pull request or open an issue.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/YourFeature`).
3. Commit your Changes (`git commit -m 'Add YourFeature'`).
4. Push to the Branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

### 🙌 Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [FlagsAPI](https://flagsapi.com)
- Font Awesome for icons

---

### 👨‍💻 Author

- **Junaid Ali Shah Gigli** - [GitHub Profile](https://github.com/jasgigli)

---

By following this guide, you can run, modify, and contribute to the weather app project. Have fun coding! 🌦️
