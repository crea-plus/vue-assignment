<template>
    <div class="detailview">
        <div class="detailImage">
            <font-awesome-icon icon="fa-solid fa-user" class="profilePicture" />
        </div>
        <div class="close">
            <RouterLink to="/">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </RouterLink>
        </div>
        <input type="text" class="name" :value="storePhoneBook.getPersonWithId($route.params.id).first_name">
        <input type="text" class="lastName" :value="storePhoneBook.getPersonWithId($route.params.id).last_name">
        <input type="text" class="detailPhoneNumber" :value="storePhoneBook.getPersonWithId($route.params.id).phone_number">
    </div>    
</template>

<script setup lang="ts">
    import { phoneBook } from '@/stores/phonebook';
    import { RouterLink } from 'vue-router';

    const storePhoneBook = phoneBook();
</script>

<style>
.detailview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
    margin: 10px;

    border: 1px solid #ccc !important;

    justify-items: center;
}

.detailImage {
    grid-column: 1 / 3;
    grid-row: 1;

    width: 50px;
    height: 50px;

    border: 1px solid #ccc !important;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    text-align-last: center;
}


.close {
    grid-column: 2 / 3;
    grid-row: 1;
}

.name {
    grid-column: 1 / 3;
    grid-row: 2;
    border: 1px solid #ccc !important;
    padding: 10px;
}


.lastName {
    grid-column: 1 / 3;
    grid-row: 3;
    border: 1px solid #ccc !important;
    padding: 10px;
}


.detailPhoneNumber {
    grid-column: 1 / 3;
    grid-row: 4;
    border: 1px solid #ccc !important;
    padding: 10px;
}

</style>