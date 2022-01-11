

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/r`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state}) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}

export const fetchRandomNumber = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/r/n`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({number1: state.number1, number2: state.number2}) // body data type must match "Content-Type" header
    }).then(response => response.json())
        .then(json => {
            dispatch({ type: "random-result", data: json });
            dispatch({ type: "view-loaded" });
        })
}