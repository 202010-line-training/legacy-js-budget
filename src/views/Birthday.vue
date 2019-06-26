<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h1>Today is Joseph's birthday? {{isBirthday}}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        isBirthday: function () {
            const date = new Date();
            return date.getMonth() === 3 && date.getDate() === 9;
        }
    }
}
</script>
