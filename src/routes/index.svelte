<script>
    import {onMount, onDestroy } from 'svelte'
    import { appStore, doubled } from '../store'
    import Test from '../routes/test.svelte'

    let showTodo = false
    
    onMount(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((users)=>appStore.set({ users }))
    });

    const deleteUser = id => () => {
        appStore.update(prevState => {
            return {
            ...prevState,
            users: prevState.users.filter(user => user.id !== id)
            };    
        });
    };

    const triggetTodo = () =>{
        showTodo = !showTodo;
    }
</script>

<button type="button" on:click={triggetTodo}>Show Todo</button>
{#if showTodo}
    <Test />
{/if}
<div class="alert">Doubled: {$doubled}</div>
<div class="flex flex-row flex-wrap justify-around">
    {#each $appStore.users as user}
        <div class="usercard w-[18rem] m-[20px] shadow-xl p-3">
            <div class="card-body flex flex-col">
                <h5>{user.name}</h5>
                <h6>{user.email}</h6>
                <p>{user.phone}</p>
                <button 
                    type="button"
                    class="w-20 h-8 m-3 rounded-sm self-center bg-slate-500"
                    on:click={deleteUser(user.id)}>
                    X
                </button>
            </div>

        </div>
    {/each}
</div>