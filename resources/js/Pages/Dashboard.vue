<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                     <FormBuilder  v-model="configuration"></FormBuilder>
                     
                </div>
            </div>
        </div>
        
    </app-layout>

</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
     import {FormBuilder} from 'v-form-builder'


    export default {
        name: "FormConfiguration",
        components: {
            AppLayout,
            FormBuilder,
        data: () => ({
            configuration: {}
        })
            }
        
    }
    
</script>
