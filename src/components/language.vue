<template>
    <div style="display: content; padding: 2% 5% 0 0; right:0;z-index:1; position:relative">
        <label class="float-right">
        <i
            data-toggle="modal"
            @click="lang = 'vi'"
            :class="[localLang == 'vi' ? 'disabled-icon' : '']"
            data-target="#confirm"
            class="img-flag"
            :style="{'background-image': 'url('+require('@/assets/'+'vn.png')+')'}"
        ></i>
        <i
            data-toggle="modal"
            @click="lang = 'en'"
            :class="[localLang == 'en' ? 'disabled-icon' : '']"
            data-target="#confirm"
            class="img-flag"
            :style="{'background-image': 'url('+require('@/assets/'+'us.png')+')'}"
        ></i>
    </label>
    <div
            class="modal fade"
            id="confirm"
            tabindex="-1"
            role="dialog"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body">
                        <label>{{$t('home.confirm.label')}}</label>
                        <div style="transition:1s">
                        <label>
                            <b>{{$t('home.confirm.text')}}  </b>
                        </label>
                        <button @click="confirm()" class="m-1 btn btn-outline-info btn-sm">{{$t('home.confirm.btn')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lang: ''
        }
    },
    mounted() {
        this.$i18n.locale = localStorage.getItem('lang')
    },
    methods:{
        confirm(){
            this.$i18n.locale = this.lang
            this.$store.dispatch('changeLang', this.lang)
            $('#confirm').modal('hide')
        }
    },
    computed:{
        localLang(){
            return this.$store.getters.language
        }
    }
}
</script>
<style lang="scss" scoped>
.img-flag {
    display: inline-block;
    width: 40px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
      filter: opacity(0.6)
    }
    &:active{
      filter: grayscale(0.5);
    }
}
.disabled-icon{
    filter: grayscale(1);
    pointer-events: none !important;
}
.modal-content {
    background-color: #fff !important;
}
</style>
