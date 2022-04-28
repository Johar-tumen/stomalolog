<div class="flex flex-col m-7">
    <div class="flex flex-start">
        <Icon class="w-6 h-6 text-c3" name={name}/>
        <div class="font-regular text-[18px] text-c1">{title}</div>
    </div>
    <div class="font-regular text-[14px] text-c5">{content}</div>
</div>


<script>
    import Icon from './Icon.svelte'
    export let name, title, content;
    
</script>