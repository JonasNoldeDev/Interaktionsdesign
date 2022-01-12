<template>
    <div class="col_12">
        <div style="padding-top: 1rem">
            <div id="5" class="position4" style="margin-top: 1rem">
                <input id="d3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div id="7" class="position4">
                <input id="d5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div id="8" class="position4">
                <input id="d6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
            </div>
            <div class="position4">
                <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="$emit('userinput')">
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

    div.col_12 {
        background-image: url(../assets/img/Holz_mitSchatten_up12.png);
        background-repeat: no-repeat;
        background-size: 17%;
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
        margin-left: 1rem;
    }

</style>
