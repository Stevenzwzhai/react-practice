
export const changeName = (name = 'steven') => {
    return {
        type: 'name',
        name
    }
}

export const changeAge = (age = '12') => {
    return {
        type: 'age',
        age
    }
}