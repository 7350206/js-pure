const arr = [{ id: 1, data: { 1: 2 } }, { id: 2, data: { 2: 2 } }]
//const hashMap = arr.reduce( (acc, {id, …rest}) => ({ …acc, {id, …rest} }) )
const hashMap = arr.reduce((acc, { id, ...rest }) => ({ ...acc, [id]: { ...rest } }), {})
