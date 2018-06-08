const initState = {
    name: 'steven',
    age: '24'
}

const Change = (state = initState, action) => {
    switch(action.type) {
        case 'name':
            return Object.assign({}, state, {name: action.name});
        case 'age':
            return Object.assign({}, state, {age: action.age});
        default: return state;
    }
}
export default Change