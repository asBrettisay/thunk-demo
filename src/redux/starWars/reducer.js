const actions = {
  getPeople: 'starwars/GET_PEOPLE',
  loadingPeople: 'starwars/LOADING_PEOPLE'
}

const initialState = {
  people: [],
  loading: false
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case actions.getPeople:
      return Object.assign({}, state, {people: action.payload, loading: false})
    case actions.loadingPeople:
      return Object.assign({}, state, {loading: true})
    default:
      return state
  }
}

const getPeopleAction = people => ({
  type: actions.getPeople,
  payload: people
})

const loadingPeopleAction = () => ({
  type: actions.loadingPeople
})

export const getPeople = () => (
  (dispatch) => {
    dispatch(loadingPeopleAction())
    const homeworlds = [];
    let results;
    fetch('http://swapi.co/api/people/')
    .then(res => res.json())
    .then(res => res.results)
    .then(res => {
      results = res;
      res.forEach(person => {
        let promise = fetch(person.homeworld)
          .then(res => res.json())
          .then(res => {
            person.homeworld = res.name
          })
        
        homeworlds.push(promise)
      })

      Promise.all(homeworlds)
        .then(res => {
          dispatch(getPeopleAction(results))
        })
    })

    
  }
)