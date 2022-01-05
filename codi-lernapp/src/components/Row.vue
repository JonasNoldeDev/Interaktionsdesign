<template>
    <div>
        <div class="row_3">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
        </div>
        <div class="row_4">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
        </div>
        <div class="row_7">
            <input id="b1" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input id="b2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input id="b3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input id="b4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input id="b5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input id="b6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
            <input id="b7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="$emit('userinput')">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Row",
    }
</script>

<style lang="scss" scoped>

    .row_3 {
        background-image: url(../assets/img/Holz_mitSchatten_3.png);
        background-repeat: no-repeat;
        background-size: 30%;
        padding: 1.5rem 1.5rem 1.5rem 2rem;
    }

    .row_4 {
        background-image: url(../assets/img/Holz_mitSchatten_4.png);
        background-repeat: no-repeat;
        background-size: 30%;
        padding: 1.5rem 1.5rem 1.5rem 2rem;
    }

    .row_7 {
        background-image: url(../assets/img/Holz_mitSchatten_7.png);
        background-repeat: no-repeat;
        background-size: 47%;
        padding: 1.5rem;
    }

    .size {
        height: 3rem;
        width: 3rem;
        text-align: center;
        font-size: 25px;
        border-radius: 5px;
        margin: 0.5rem;
    }

</style>
