<template>
    <div class="person">
        <div class="image">
            <font-awesome-icon icon="fa-solid fa-user" class="profilePicture" />
        </div>
        <div class="fullName">
            {{ fullName }}
        </div>
        <div class="phoneNumber">
            {{ phoneNumber }}
        </div>
    </div>    
</template>

<script lang="ts">
export default {
    props: {
        img: String, 
        fullName: String, 
        phoneNumber: String
    }
}
</script>

<style>
.person {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
    margin: 10px;

    border: 1px solid #ccc !important;

    justify-items: center;
}

.image {
    grid-column: 1 / 3;
    grid-row: 1;

    width: 50px;
    height: 50px;

    border: 1px solid #ccc !important;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
}

.fullName {
    grid-column: 2 / 3;
    grid-row: 1;
}


.phoneNumber {
    grid-column: 3 / 3;
    grid-row: 1;
}

</style>