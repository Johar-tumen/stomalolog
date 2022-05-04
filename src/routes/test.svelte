<script>
    import {todo} from '../store'
</script>

{#if $todo}
<div class="usercard w-[18rem] m-[20px] shadow-xl p-3">
    <div class="card-body flex flex-col">
        <h5>{$todo.id}</h5>
        <h6>{$todo.title}</h6>
        <button 
            type="button"
            class="w-20 h-8 m-3 rounded-sm self-center bg-slate-500"
            >
            X
        </button>
    </div>

</div>
    
{/if}