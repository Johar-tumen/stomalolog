<div class="flex justify-between  items-center">
    <div id="logo" class="flex flex-row items-center">
        <div class="m-4"><Logo /></div>
        <div class='text-c1 font-bold  text-[20px] w-[190px]'>Стоматологическая клиника </div>
    </div>
    <div id="info" class="flex flex-row items-center">
        <Card name='adress' title='Aдрес' content='город улица' />
        <Card name='clock' title='Время работы' content='Работаем без выходных'/>
    </div>
    <div id="contacts" class="flex flex-row items-center">
        <Socials />
        <div class="phones">+7 9088 76 76 76</div>
    </div>
</div>

<script>
    import Logo from '../components/theLogo.svelte'
    import Card from '../components/theHeaderCard.svelte'
    import Socials from '../components/socials.svelte'
</script>