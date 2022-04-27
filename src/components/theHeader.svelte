<div class="container flex flex-row items-center">
    <div id="logo" class="flex flex-row items-center">
        <div class="m-4"><Logo /></div>
        <div class='text-c1 font-gilroy-700 text-[20px] w-[190px]'>Стоматологическая клиника </div>
    </div>
    <div id="info" class="flex flex-row items-center">
        <Card pic={'adress'} title={'адрес'} content={'город улица'}/>
        <Card pic={'clock'} title={'время работы'} content={'Работаем без выходных'}/>
    </div>
    <div id="contacts">
        <div class="socials">телега</div>
        <div class="phones">+7 9088 76 76 76</div>
    </div>
</div>

<script>
    import Logo from '../components/theLogo.svelte'
    import Card from '../components/theHeaderCard.svelte'
</script>