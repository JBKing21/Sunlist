import React from "react";

// stateless function, no class necessary

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Show Weather</button>
	</form>
);

export default Form;