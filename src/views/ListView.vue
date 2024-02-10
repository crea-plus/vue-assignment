<template>
    <div class="wrapper">
        <input type="search" name="SearchBar" id="searchBar" class="searchBar">
        <div class="listOfNumbers">
            <RouterLink v-for="(user, index) in storePhoneBook.phoneNumbers" :to="'/detail/'+ index ">
                <Person  :key="user.id"
                    :img=user.id
                    :fullName="user.first_name + ' ' + user.last_name"
                    :phoneNumber=user.phone_number
                />
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Person  from '@/components/Person.vue'
    import { phoneBook } from '@/stores/phonebook';
    import { RouterLink } from 'vue-router';

    const storePhoneBook = phoneBook();
    storePhoneBook.getPhoneBook();
</script>

<style>
.wrapper {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    justify-items: center;
}

.searchBar {
    grid-column: 1 / 1;
    grid-row: 1;
    width: 80%;
    margin: 20px;
    border: 1px solid #ccc !important;
    padding: 10px;
}

.listOfNumbers {
    grid-column: 1 / 1;
    grid-row: 2;
    text-align: center;
    width: 80%;
}
</style>