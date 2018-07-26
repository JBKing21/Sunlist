import React from 'react';

// stateless function, no class necessary
const Weather = props => (
        <div className = "weather___info">
                {/* span tag to colour all data values  */}
                {/* only if city and country equate to true on submit, do we render the location */}
                { 
                        props.city && props.country && <p className = "weather__key">Location: 
                        <span className = "weather__value"> { props.city }, { props.country }</span>
                        </p>
                }
                {/* only if temperature equates to true on submit, do we render the temperature information */}
                { 
                        props.temperature &&<p className = "weather__key">>Temperature: 
                        <span className = "weather__value"> { props.temperature }</span>
                        </p>
                }
                {/* only if humidity equates to true on submit, do we render the humidity information */}
                { 
                        props.humidity && <p className = "weather__key">>Humidity: 
                        <span className = "weather__value"> { props.humidity }</span>
                        </p> 
                }
                {/* only if description equates to true on submit do we render the conditions description */}
                { 
                        props.description && <p className = "weather__key">>Conditions: 
                        <span className = "weather__value"> { props.description }</span>
                        </p> 
                }
                {/* if onSubmit = error, error message will be rendered */}
                { 
                        props.error && <p className = "weather__error">  {props.error}
                        </p> 
                }
            </div>
        )
export default Weather