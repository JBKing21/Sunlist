import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import todoItem from "./components/TodoItem";
import todoInput from "./components/TodoInput"

const API_KEY = "124b283ae42ac6d1595023e485800794";

class App extends React.Component {
  // state object, responsible for keeping track of/ changing data within the component
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // async function for API call, e = event function, e.preventDefault() to prevent full page reload
  getWeather = async (e) => {
    e.preventDefault();
    // setting values for string template
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // function to make API call, with template strings for dynamic variables
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // converting API call to JSON format and assigning it to data constant
    const data = await api_call.json();
    // only if city and country = true on submit, do we render this code
    if (city && country) {
      this.setState({
        // this will updata state when we submit the form
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      // in case of error, this will be rendered
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
    console.log(data)
  }
  render() {
    return (
      <div>
        {/* bootstrap CSS classes */}
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                {/* prop for form button to initiate getWeather function on line 19 */}
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  <div className="todo-wrapper">
                  <toDo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;