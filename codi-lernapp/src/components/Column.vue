<template>
    <div class="col_4">
        <div style="margin-left: -18rem; padding-top: 1rem">
            <div class="position4" style="margin-top: 1rem">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
        </div>
    </div>


    <div class="col_5">
        <div style="margin-left: -18rem; padding-top: 1rem">
            <div id="5" class="position4" style="margin-top: 1rem">
                <input id="d3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div id="7" class="position4">
                <input id="d5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div id="8" class="position4">
                <input id="d6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: "Column"
    }
</script>

<style lang="scss" scoped>

    div.col_4 {
        background-image: url(../assets/img/Holz_mitSchatten_up4.png);
        background-repeat: no-repeat;
        background-size: 10%;
        padding-bottom: 2rem;
    }

    div.col_5 {
        background-image: url(../assets/img/Holz_mitSchatten_up5.png);
        background-repeat: no-repeat;
        background-size: 10%;
        padding-bottom: 2rem;
    }

    .size {
        height: 3rem;
        width: 3rem;
        text-align: center;
        font-size: 25px;
        border-radius: 5px;
        margin: 0.5rem;
    }

    .position4 {
        margin-left: 19rem;
    }

</style>
