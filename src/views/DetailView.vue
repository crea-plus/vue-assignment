<template>
    <ContactDetail :contact="contact"></ContactDetail>
</template>

<script lang="ts">
import type { Contact } from '../interfaces/contact.interface';
import { useContactStore } from '../stores/contact.store';
import ContactDetail from '@/components/ContactDetail.vue';


export default {
    name: 'DetailView',
    components: {
        ContactDetail
    },
    data(): { contact: undefined | Contact } {
        return {
            contact: undefined
        };
    },
    computed: {
    },
    methods: {
    },
    async created() {
        try {
            const contactStore = useContactStore();
            const id = this.$route.params.id;
            const contactIndex = contactStore.contacts.findIndex(contact => contact.id === Number(id));
            const contact = contactStore.contacts[contactIndex];
            this.contact = contact;
        } catch (error: any) {
            console.error(error.message);
        }
    },
};

</script>
