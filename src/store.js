import { writable, readable, derived } from "svelte/store";

export const appStore = writable({
    users:[],
})

export const todo = readable(null, set => {
    console.log('readable subscribe')
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response)=>response.json())
      .then(json => set(json))
    return () => {
        console.log('readable unsubscribe')
    }
})

export const doubled = derived(
    appStore,
    $appStore => $appStore.users.length *2
)

