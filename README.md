## React Redux Thunks Demo

This project demonstrates how thunks can be used to control asynchronous data flow

---

Redux is a great implementation to control state in a react app.

However, it can be difficult to do asynchronous things

[Redux-Thunk](https://github.com/gaearon/redux-thunk) provides a library that allows us to have complex async data flow.

We can control when the state should change, after all our async events are completed.

The challenge is:

- Using [swapi](http://swapi.co) fetch a list of people
- Each person's homeworld is an additional URL link.
- Do a get request for each person's homeworld. When that request comes back,
  replace the person's homeworld with the homeworld name.
- Wait until all these promises have been fulfilled.
- Dispatch the completed data.

Redux-thunks make this possible because we are able to have side effects,
like dispatching a loading action.

They also allow us to have multiple promises and choose when data should be sent to the reducer.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).